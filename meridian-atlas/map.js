"use strict";

const chinaMapRegions = new Set(["CHN", "TWN", "HKG", "MAC"]);

// Use one display group for color, highlighting and framing; keep each place's own pin.
function atlasLandGroup(id) {
  return chinaMapRegions.has(id) ? "CHN" : id;
}

// Both projections highlight every feature drawn for the selected place.
function atlasLandIsSelected(id, selected) {
  return (
    atlasLandGroup(id) === atlasLandGroup(selected) ||
    (selected === "USA" && id.startsWith("US-"))
  );
}

// All coordinates in the bundled geometry use the same 1000 × 510 drawing area.
function createAtlasMap(places, onSelect, onModeChange, prefix = "") {
  const part = (id) => document.getElementById(prefix + id);
  const svg = part("atlas-map");
  const surface = part("map-surface");
  const tooltip = part("hover-label");
  const zoomIn = part("zoom-in"),
    zoomOut = part("zoom-out");
  const ns = "http://www.w3.org/2000/svg";
  const width = 1000,
    height = 510;
  const overview = { x: width / 2, y: height / 2, k: 1 };
  const layer = window.GEOMETRY.world;
  const shapes = new Map(layer.shapes.map((shape) => [shape.id, shape]));
  let camera = { ...overview },
    selectedId = null,
    frame = 0;
  let land, labels, stateLabels, pins, pinNodes;
  const pointers = new Map();
  let gesture = null;
  const quickPins = ["USA", "BRA", "JPN", "ZAF"];
  const zoomSetting = part("click-zoom");
  const globeSvg = part("globe-map");
  const preference = (key, fallback) => {
    try {
      return localStorage.getItem("meridian." + key) ?? fallback;
    } catch {
      return fallback;
    }
  };
  function save(key, value) {
    try {
      localStorage.setItem("meridian." + key, value);
    } catch {
      /* The current session retains the setting. */
    }
  }
  if (zoomSetting) {
    zoomSetting.checked = preference("clickZoom", "false") === "true";
    zoomSetting.onchange = () => save("clickZoom", String(zoomSetting.checked));
  }
  const pick = (id) =>
    onSelect(id, { focus: document.getElementById("click-zoom").checked });
  let projection = "flat",
    globe;
  const palettes = {
    Europe: ["#d7c696", "#d4cda7", "#e1cdae", "#d7bc8c"],
    Asia: ["#c1c4a0", "#d8c89e", "#cbd1ac", "#c4bf9b"],
    Africa: ["#ddbc92", "#e4caa3", "#dec39b", "#d3b787"],
    "North America": ["#b4c4a1", "#c5c9a8", "#cbd1ac", "#b6c4a3"],
    "South America": ["#b5c4a0", "#c0cba6", "#b3c098", "#c3c9a3"],
    Oceania: ["#d8b796", "#d1be95", "#d4c49f", "#dec9a4"],
    Antarctica: ["#e7e9db"],
    states: ["#bbc6a6", "#d5c69e", "#c5caaa", "#dbc4a3"],
  };

  function node(tag, attrs = {}, content) {
    const element = document.createElementNS(ns, tag);
    for (const [name, value] of Object.entries(attrs))
      element.setAttribute(name, value);
    if (content !== undefined) element.textContent = content;
    return element;
  }
  function color(shapeId) {
    const id = atlasLandGroup(shapeId);
    const place = places.get(id);
    let region = place?.region;
    if (region === "Americas")
      region = place.lat < 12 ? "South America" : "North America";
    if (region === "Antarctic") region = "Antarctica";
    const colors = id.startsWith("US-")
      ? palettes.states
      : palettes[region] || palettes.Asia;
    const seed = [...id].reduce(
      (sum, char) => sum * 31 + char.charCodeAt(0),
      0,
    );
    return colors[seed % colors.length];
  }
  function redraw() {
    land = node("g");
    for (const s of layer.shapes) {
      const path = node("path", {
        d: s.path,
        class: "land",
        fill: color(s.id),
        "data-place": s.id,
        "data-land-group": atlasLandGroup(s.id),
      });
      land.append(path);
    }
    const grid = node("path", { d: layer.grid || "", class: "atlas-grid" });
    labels = node("g", { class: "carto-labels" });
    for (const l of layer.labels) {
      const textId =
        l.text === "Antarctica"
          ? "ATA"
          : "physical-" + l.text.toLowerCase().replaceAll(" ", "-");
      const tag = node(
        "text",
        {
          x: l.x,
          y: l.y + (l.text === "South America" ? 33 : 0),
          class: l.kind,
          "data-place": textId,
        },
        l.kind === "continent" ? l.text.toUpperCase() : l.text,
      );
      labels.append(tag);
    }
    stateLabels = node("g", { class: "carto-labels", "aria-hidden": "true" });
    for (const label of layer.stateLabels) {
      stateLabels.append(
        node(
          "text",
          {
            x: label.x,
            y: label.y,
            class: "state",
            "data-place": "US-" + label.text,
            "dominant-baseline": "central",
          },
          label.text,
        ),
      );
    }
    pins = node("g");
    svg.replaceChildren(grid, land);
    if (layer.disputedLand)
      svg.append(
        node("path", {
          d: layer.disputedLand,
          fill: "#cdc9ad",
          "pointer-events": "none",
        }),
      );
    svg.append(labels, stateLabels, pins);
    svg.setAttribute(
      "aria-label",
      "World map with U.S. states. Use place search to locate a region, arrow keys to pan, or plus and minus to zoom.",
    );
    updateSelection();
  }
  function geometry(id) {
    const place = places.get(id);
    if (place?.labelPoint) {
      const [x, y] = place.labelPoint;
      const countries =
        place.kind === "Continent"
          ? [...shapes.values()].filter(
              (s) =>
                places.get(s.id)?.region === place.name &&
                s.bounds[2] - s.bounds[0] < 450,
            )
          : [];
      const bounds = countries.length
        ? [
            Math.min(...countries.map((s) => s.bounds[0])),
            Math.min(...countries.map((s) => s.bounds[1])),
            Math.max(...countries.map((s) => s.bounds[2])),
            Math.max(...countries.map((s) => s.bounds[3])),
          ]
        : [x - 85, y - 55, x + 85, y + 55];
      return { point: [x, y], bounds };
    }
    if (place?.kind === "City") {
      const point =
        place.projected || window.GEOMETRY.world.cities?.[place.name];
      if (point)
        return {
          point,
          bounds: [point[0] - 9, point[1] - 6, point[0] + 9, point[1] + 6],
        };
    }
    return shapes.get(place?.parent || id);
  }
  function updateSelection() {
    const chosen = places.get(selectedId);
    const highlight = chosen?.parent || selectedId;
    const highlightUnitedStates =
      highlight === "USA" ||
      (chosen?.kind === "Continent" &&
        chosen.name === places.get("USA")?.region);
    for (const shape of land.children) {
      const id = shape.dataset.place;
      const nationalSelection = highlightUnitedStates && id.startsWith("US-");
      const belongs =
        chosen?.kind === "Continent" && places.get(id)?.region === chosen.name;
      shape.classList.toggle(
        "chosen",
        atlasLandIsSelected(id, highlight) || belongs || nationalSelection,
      );
      shape.style.stroke = nationalSelection ? "#c07851" : "";
      shape.style.strokeWidth = nationalSelection ? ".55" : "";
    }
    const ids = selectedId ? [selectedId] : quickPins;
    pinNodes = [];
    pins.replaceChildren();
    for (const id of ids) {
      const place = places.get(id);
      const shape = geometry(id);
      if (!place || !shape) continue;
      const group = node("g", { class: "map-pin", "data-place": id });
      const dot = node("circle", { cx: 0, cy: 0, r: 4.4, class: "pin-dot" });
      const name = node("text", { x: 12, y: 4 }, place.name);
      group.append(dot, name);
      pins.append(group);
      const textWidth = name.getComputedTextLength() || place.name.length * 7;
      group.insertBefore(
        node("rect", {
          x: 7,
          y: -10,
          width: textWidth + 10,
          height: 20,
          rx: 4,
          class: "pin-bg",
        }),
        name,
      );
      // Leave states beneath the overview caption clickable. Its dot selects the nation.
      if (id === "USA" && !selectedId) {
        group.setAttribute("pointer-events", "none");
        group.prepend(
          node("circle", {
            r: 7,
            fill: "transparent",
            "pointer-events": "all",
          }),
        );
      }
      pinNodes.push({ group, point: shape.point });
    }
    part("view-caption").textContent = chosen ? chosen.name : "World view";
  }
  function paint() {
    const { x, y, k } = camera;
    svg.setAttribute(
      "viewBox",
      [x - width / (2 * k), y - height / (2 * k), width / k, height / k].join(
        " ",
      ),
    );
    const screenScale = svg.getScreenCTM()?.a || 1;
    for (const { group, point } of pinNodes)
      group.setAttribute(
        "transform",
        "translate(" + point.join(" ") + ") scale(" + 1 / screenScale + ")",
      );
    const labelOpacity = Math.max(0, Math.min(1, 2.5 - k));
    labels.setAttribute("opacity", labelOpacity);
    labels.style.visibility = labelOpacity < 0.12 ? "hidden" : "visible";
    stateLabels.style.display = k < 3 ? "none" : "";
    if (k >= 3) {
      stateLabels.style.setProperty("--state-font", 12 / screenScale + "px");
      for (const tag of stateLabels.children) {
        const s = shapes.get(tag.dataset.place);
        const [x0, y0, x1, y1] = s.bounds;
        const enoughRoom =
          (x1 - x0) * screenScale >= 21 && (y1 - y0) * screenScale >= 12;
        tag.style.display = enoughRoom && s.id !== selectedId ? "" : "none";
      }
    }
    if (projection === "flat") {
      zoomOut.disabled = k <= 1;
      zoomIn.disabled = k >= 120;
    }
  }
  function constrain(view) {
    const k = Math.min(120, Math.max(1, view.k));
    const halfW = width / (2 * k),
      halfH = height / (2 * k);
    // A little margin at the edges also keeps antimeridian islands reachable.
    return k === 1
      ? { ...overview }
      : {
          k,
          x: Math.max(halfW - 40, Math.min(width - halfW + 40, view.x)),
          y: Math.max(halfH - 25, Math.min(height - halfH + 25, view.y)),
        };
  }
  function move(view, animate = false) {
    cancelAnimationFrame(frame);
    const target = constrain(view);
    if (!animate || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      camera = target;
      paint();
      return;
    }
    const start = { ...camera },
      at = performance.now();
    function step(now) {
      const progress = Math.min(1, (now - at) / 330);
      const t = 1 - (1 - progress) ** 3;
      camera = {
        x: start.x + (target.x - start.x) * t,
        y: start.y + (target.y - start.y) * t,
        k: start.k * (target.k / start.k) ** t,
      };
      paint();
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
  }
  function setMode(next = "world", notify = true) {
    if (next === "usa") {
      if (notify) onSelect("USA");
      else select("USA");
      return;
    }
    selectedId = null;
    tooltip.hidden = true;
    updateSelection();
    move(overview);
    globe?.reset();
    if (notify) onModeChange("world");
  }
  function select(id, { focus = true, animate = true } = {}) {
    const p = places.get(id);
    if (!p) return;
    tooltip.hidden = true;
    selectedId = id;
    updateSelection();
    if (projection === "globe") {
      globe.select(id, focus);
      return;
    }
    if (!focus) {
      paint();
      return;
    }
    const s = geometry(atlasLandGroup(id));
    if (!s) {
      paint();
      return;
    }
    const [x1, y1, x2, y2] = s.bounds;
    const k = Math.min(
      120,
      Math.max(
        1.5,
        Math.min(width / Math.max(1, x2 - x1), height / Math.max(1, y2 - y1)) *
          0.64,
      ),
    );
    move({ x: (x1 + x2) / 2, y: (y1 + y2) / 2, k }, animate);
  }
  function mapPoint(clientX, clientY) {
    return new DOMPoint(clientX, clientY).matrixTransform(
      svg.getScreenCTM().inverse(),
    );
  }
  function zoom(factor, anchor = { x: camera.x, y: camera.y }) {
    const k = Math.min(120, Math.max(1, camera.k * factor));
    move({
      k,
      x: anchor.x + ((camera.x - anchor.x) * camera.k) / k,
      y: anchor.y + ((camera.y - anchor.y) * camera.k) / k,
    });
    tooltip.hidden = true;
  }
  function startGesture() {
    const pts = [...pointers.values()];
    const a = pts[0],
      b = pts[1] || a;
    if (!a) {
      gesture = null;
      return;
    }
    gesture = {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2,
      dist: Math.hypot(a.x - b.x, a.y - b.y),
      camera: { ...camera },
      scale: svg.getScreenCTM().a,
      anchor: mapPoint((a.x + b.x) / 2, (a.y + b.y) / 2),
    };
  }
  svg.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    cancelAnimationFrame(frame);
    const point = {
      x: event.clientX,
      y: event.clientY,
      sx: event.clientX,
      sy: event.clientY,
      id: event.target.closest("[data-place]")?.dataset.place,
      moved: false,
    };
    pointers.set(event.pointerId, point);
    if (pointers.size > 1) for (const p of pointers.values()) p.moved = true;
    svg.setPointerCapture(event.pointerId);
    tooltip.hidden = true;
    startGesture();
  });
  svg.addEventListener("pointermove", (event) => {
    const p = pointers.get(event.pointerId);
    if (!p) {
      const id = event.target.closest("[data-place]")?.dataset.place;
      const place = places.get(id);
      tooltip.hidden = !place || event.pointerType === "touch";
      if (!tooltip.hidden) {
        const box = surface.getBoundingClientRect();
        tooltip.textContent = place.name + "  " + place.ipa;
        tooltip.style.left =
          Math.max(
            4,
            Math.min(
              box.width - tooltip.offsetWidth - 4,
              event.clientX - box.left + 12,
            ),
          ) + "px";
        tooltip.style.top = Math.max(3, event.clientY - box.top - 32) + "px";
      }
      return;
    }
    p.x = event.clientX;
    p.y = event.clientY;
    if (Math.hypot(p.x - p.sx, p.y - p.sy) > 4) p.moved = true;
    if (!p.moved && pointers.size === 1) return;
    const pts = [...pointers.values()],
      a = pts[0],
      b = pts[1] || a;
    const dx = (a.x + b.x) / 2 - gesture.x,
      dy = (a.y + b.y) / 2 - gesture.y;
    const ratio =
      gesture.dist > 0 ? Math.hypot(b.x - a.x, b.y - a.y) / gesture.dist : 1;
    const k = Math.min(120, Math.max(1, gesture.camera.k * ratio));
    const scaleRatio = gesture.camera.k / k;
    const anchor = gesture.anchor;
    move({
      k,
      x:
        anchor.x +
        (gesture.camera.x - anchor.x - dx / gesture.scale) * scaleRatio,
      y:
        anchor.y +
        (gesture.camera.y - anchor.y - dy / gesture.scale) * scaleRatio,
    });
    svg.classList.toggle("dragging", p.moved);
  });
  function endGesture(event) {
    const p = pointers.get(event.pointerId);
    pointers.delete(event.pointerId);
    startGesture();
    if (!pointers.size) svg.classList.remove("dragging");
    if (event.type === "pointerup" && p && !p.moved && p.id) pick(p.id);
  }
  svg.addEventListener("pointerup", endGesture);
  svg.addEventListener("pointercancel", endGesture);
  svg.addEventListener("pointerleave", () => {
    tooltip.hidden = true;
  });
  svg.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      zoom(
        Math.exp(
          -Math.max(
            -130,
            Math.min(130, e.deltaY * (e.deltaMode === 1 ? 16 : 1)),
          ) * 0.0025,
        ),
        mapPoint(e.clientX, e.clientY),
      );
    },
    { passive: false },
  );
  svg.addEventListener("keydown", (e) => {
    const deltas = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };
    if (deltas[e.key]) {
      e.preventDefault();
      const [dx, dy] = deltas[e.key];
      move({
        x: camera.x + (dx * 50) / camera.k,
        y: camera.y + (dy * 50) / camera.k,
        k: camera.k,
      });
    }
    if (["+", "=", "-", "Home"].includes(e.key)) {
      e.preventDefault();
      if (e.key === "Home") setMode();
      else zoom(e.key === "-" ? 1 / 1.5 : 1.5);
    }
  });
  const manualZoom = (factor) =>
    projection === "globe" ? globe.zoom(factor) : zoom(factor);
  zoomIn.onclick = () => manualZoom(1.6);
  zoomOut.onclick = () => manualZoom(1 / 1.6);
  part("reset-map").onclick = () => setMode();
  const expand = part("expand-map");
  const card = part("map-card");
  if (expand) {
    function expandedState(active) {
      card.classList.toggle("expanded", active);
      expand.title = active ? "Close expanded map" : "Expand map";
      expand.setAttribute("aria-label", expand.title);
      expand.setAttribute("aria-pressed", String(active));
    }
    expand.onclick = () => {
      const current = card.closest("dialog");
      if (current) {
        current.close();
        return;
      }
      const dialog = document.createElement("dialog");
      dialog.className = "expanded-map-dialog";
      dialog.setAttribute("aria-label", "Expanded world atlas");
      const space = document.createElement("div");
      space.style.height = card.getBoundingClientRect().height + "px";
      card.replaceWith(space);
      dialog.append(card);
      expandedState(true);
      dialog.addEventListener(
        "close",
        () => {
          space.replaceWith(card);
          expandedState(false);
          expand.focus({ preventScroll: true });
        },
        { once: true },
      );
      showDialog(dialog);
      (projection === "globe" ? globeSvg : svg).focus();
    };
  }
  new ResizeObserver(() => paint()).observe(surface);
  function switchView(view) {
    projection = view === "globe" ? "globe" : "flat";
    const isGlobe = projection === "globe";
    svg.toggleAttribute("hidden", isGlobe);
    globeSvg.toggleAttribute("hidden", !isGlobe);
    card.classList.toggle("globe-view", isGlobe);
    tooltip.hidden = true;
    for (const btn of card.querySelectorAll("[data-projection]"))
      btn.setAttribute(
        "aria-pressed",
        String(btn.dataset.projection === projection),
      );
    card.querySelector(".map-tip").textContent = isGlobe
      ? "Drag to rotate · Scroll to zoom"
      : "Drag to pan · Scroll to zoom";
    if (isGlobe) {
      if (!globe)
        globe = createAtlasGlobe(
          globeSvg,
          places,
          color,
          pick,
          () => setMode(),
          zoomIn,
          zoomOut,
        );
      globe.select(selectedId, Boolean(selectedId));
    } else if (selectedId) select(selectedId, { focus: false });
    else paint();
    save(prefix + "projection", projection);
  }
  for (const btn of card.querySelectorAll("[data-projection]"))
    btn.onclick = () => switchView(btn.dataset.projection);
  redraw();
  paint();
  switchView(
    preference(prefix + "projection", preference("projection", "flat")),
  );
  function restoreView(view) {
    const flat = view?.flat;
    if (flat && [flat.x, flat.y, flat.k].every(Number.isFinite)) move(flat);
    globe?.restoreView(view?.globe);
  }
  return {
    select,
    setMode,
    mode: "world",
    restoreView,
    getView: () => ({ flat: { ...camera }, globe: globe?.getView() }),
  };
}

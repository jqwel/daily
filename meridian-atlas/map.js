"use strict";

const chinaMapRegions = new Set(["CHN", "TWN", "HKG", "MAC"]);
const flatProjection = AtlasGeo.geoNaturalEarth1().fitExtent(
  [[10, 5], [990, 505]],
  { type: "Sphere" },
);

// Classic scripts also load when the atlas is opened directly from disk.
function atlasDataLoader(file, readData) {
  let request;
  return () => {
    if (!request) {
      request = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        function failed() {
          script.remove();
          request = undefined;
          reject(new Error("Unable to load " + file));
        }
        script.src = file;
        script.onerror = failed;
        script.onload = () => {
          const data = readData();
          if (data) resolve(data);
          else failed();
        };
        document.head.append(script);
      });
    }
    return request;
  };
}
const loadGlobeData = atlasDataLoader("globe-data.js?v=2", () => window.GLOBE_TOPOLOGY);
const loadRiverData = atlasDataLoader("river-data.js?v=2", () => window.ATLAS_RIVERS);

const waterLabelZoom = [0, 0.4, 1.2, 2.8, 4.8, 7.5, 12, 19, 28, 40, 58, 75, 90];
function createAtlasRiverLayer(svg) {
  const group = targetSvgElement("g", { class: "atlas-rivers", "aria-hidden": "true" });
  const labels = targetSvgElement("g", { class: "atlas-water-labels", "aria-hidden": "true" });
  const minor = targetSvgElement("path", { class: "minor" });
  const major = targetSvgElement("path", { class: "major" });
  group.append(minor, major);
  let geometry, labelledData, waterNames = [];
  return {
    group,
    labels,
    setData(data) {
      geometry = data;
      group.style.display = labels.style.display = data ? "" : "none";
      if (!data || data === labelledData) return;
      const measure = document.createElement("canvas").getContext("2d");
      measure.font = "italic 600 11px sans-serif";
      waterNames = (data.labels || []).map(([name, lon, lat, kind, rank, alternatives = []]) => {
        const text = targetSvgElement("text", { class: kind, lang: "en" });
        text.textContent = name;
        text.style.display = "none";
        return { name, anchors: [[lon, lat], ...alternatives], rank, text, width: measure.measureText(name).width + 8 };
      });
      labels.replaceChildren(...waterNames.map(({ text }) => text));
      labelledData = data;
    },
    draw(path) {
      if (!geometry) return;
      minor.setAttribute("d", path(geometry.minor) || "");
      major.setAttribute("d", path(geometry.major) || "");
    },
    drawLabels(project, zoom) {
      if (!geometry || svg.hasAttribute("hidden")) return;
      const matrix = svg.getScreenCTM(), viewport = svg.getBoundingClientRect();
      if (!matrix || !viewport.width || !viewport.height) return;
      const detail = zoom * Math.min(1, viewport.width / 700);
      const seen = new Set();
      const occupied = [...svg.querySelectorAll(".map-pin, .globe-selected, .atlas-target .target-name")]
        .map((node) => node.getBoundingClientRect()).filter((rect) => rect.width && rect.height);
      for (const { name, anchors, rank, text, width } of waterNames) {
        let fits = false;
        if (detail >= waterLabelZoom[rank] && !seen.has(name)) {
          for (const coords of anchors) {
            const point = project(coords);
            if (!point) continue;
            const [x, y] = point;
            const screenX = x * matrix.a + matrix.e, screenY = y * matrix.d + matrix.f;
            const box = new DOMRect(screenX - width / 2, screenY - 8, width, 16);
            if (!atlasLabelFits(box, viewport, occupied)) continue;
            text.setAttribute("transform", `translate(${x},${y}) scale(${1 / matrix.a})`);
            occupied.push(box);
            seen.add(name);
            fits = true;
            break;
          }
        }
        text.style.display = fits ? "" : "none";
      }
    },
  };
}

function createAtlasBoundaryLayer(svg) {
  const group = targetSvgElement("g");
  const defs = targetSvgElement("defs");
  const stateClip = targetSvgElement("clipPath", { id: svg.id + "-state-clip" });
  const stateExtent = targetSvgElement("path");
  stateClip.append(stateExtent);
  const neutralLand = targetSvgElement("path", { class: "atlas-neutral-land" });
  const countries = targetSvgElement("g");
  const states = targetSvgElement("g", { "clip-path": "url(#" + stateClip.id + ")" });
  const lakeShape = targetSvgElement("path", { id: svg.id + "-lake-shape" });
  const lakeClip = targetSvgElement("clipPath", { id: svg.id + "-lake-clip" });
  const lakeRef = "#" + lakeShape.id;
  lakeClip.append(targetSvgElement("use", { href: lakeRef }));
  defs.append(stateClip, lakeShape, lakeClip);
  const lakes = targetSvgElement("use", { class: "atlas-lakes", href: lakeRef });
  const lakeBorders = targetSvgElement("path", {
    class: "atlas-lake-borders", "clip-path": "url(#" + lakeClip.id + ")",
  });
  group.append(defs, neutralLand, countries, states, lakes, lakeBorders);
  return {
    group,
    add(shape, id) {
      (id.startsWith("US-") ? states : countries).append(shape);
    },
    setStateExtent(outline) {
      stateExtent.setAttribute("d", outline);
    },
    setWaterAndNeutralPaths(neutral, water, borders) {
      neutralLand.setAttribute("d", neutral || "");
      lakeShape.setAttribute("d", water || "");
      lakeBorders.setAttribute("d", borders || "");
    },
  };
}

function readMapPreference(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}
function writeMapPreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* The current session retains the setting. */
  }
}

function atlasHitPlace(svg, target) {
  const hit = target?.closest("[data-place]");
  return hit && svg.contains(hit) ? hit.dataset.place : null;
}

function createAtlasPointer(svg, event) {
  const { button, pointerType, clientX: x, clientY: y } = event;
  if (button !== 0 && (button !== 2 || pointerType !== "mouse")) return null;
  let id = atlasHitPlace(svg, event.target);
  // Touch hit adjustment can target the interactive SVG instead of its country path.
  if (!id && pointerType === "touch" && event.target === svg)
    id = atlasHitPlace(svg, document.elementFromPoint(x, y));
  return { x, y, startX: x, startY: y, button, id, moved: false };
}

function moveAtlasPointer(point, event) {
  point.x = event.clientX;
  point.y = event.clientY;
  point.moved ||= Math.hypot(point.x - point.startX, point.y - point.startY) > 4;
}

function atlasCountryFlag(place) {
  if (place.kind !== "Country") return null;
  const artwork = flag(place);
  return artwork.childElementCount ? artwork : null;
}

function appendAtlasPlaceName(group, place, x) {
  const artwork = atlasCountryFlag(place);
  if (artwork) {
    const icon = targetSvgElement("foreignObject", {
      class: "map-name-flag", x, y: -7, width: 20, height: 14, "aria-hidden": "true",
    });
    icon.append(artwork);
    group.append(icon);
    x += 24;
  }
  const name = targetSvgElement("text", { x, y: 4 });
  name.textContent = placeLabel(place);
  group.append(name);
  return name;
}

// Keep the hit from pointerdown because capture retargets the click to the SVG.
// Open the dialog after pointerup so native light dismissal has already run.
function bindAtlasPick(svg, pick) {
  let tapped = null;
  svg.addEventListener("pointerdown", () => { tapped = null; });
  svg.addEventListener("click", () => {
    const id = tapped;
    tapped = null;
    if (id) pick(id, false);
  });
  svg.addEventListener("contextmenu", (event) => {
    if (event.button === 2 && event.pointerType !== "touch") event.preventDefault();
  });
  return (event, { button, id, moved }) => {
    if (event.type !== "pointerup" || event.button !== button || moved || !id) return;
    // Let contextmenu reach the map before a modal can change its target.
    if (button === 2) requestAnimationFrame(() => pick(id, true));
    else tapped = id;
  };
}

// Use the display group for color, highlighting and zoom extent.
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
function createAtlasMap(places, onSelect, onModeChange, {
  onDetails, prefix = "", focusZoom = (zoom) => zoom,
}) {
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
  const rivers = createAtlasRiverLayer(svg);
  let riverData;
  let camera = { ...overview },
    selectedId = null,
    frame = 0;
  let land, labels, stateLabels, pins, pinNodes;
  let targets = [], targetLayer;
  const pointers = new Map();
  let gesture = null;
  const quickPins = ["USA", "BRA", "JPN", "ZAF"];
  const zoomSetting = part("click-zoom");
  const globeSvg = part("globe-map");
  const projectionKey = "meridian." + prefix + "projection";
  if (zoomSetting) {
    zoomSetting.checked = readMapPreference("meridian.clickZoom", "false") === "true";
    zoomSetting.onchange = () => writeMapPreference("meridian.clickZoom", String(zoomSetting.checked));
  }
  const pick = (id, details) => {
    if (details) onDetails(id);
    else onSelect(id, { focus: zoomSetting?.checked ?? true, centerGlobe: true });
  };
  const tap = bindAtlasPick(svg, pick);
  let projection = "flat",
    globe;
  let viewRequest = 0, pendingGlobeView;
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
    const boundaryLayer = createAtlasBoundaryLayer(svg);
    land = layer.shapes.map((s) => {
      const path = node("path", {
        d: s.path,
        class: "land",
        fill: color(s.id),
        "data-place": s.id,
        "data-land-group": atlasLandGroup(s.id),
      });
      boundaryLayer.add(path, s.id);
      return path;
    });
    boundaryLayer.setStateExtent(shapes.get("USA").path);
    boundaryLayer.setWaterAndNeutralPaths(layer.disputedLand, layer.lakes, layer.lakeBorders);
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
    svg.replaceChildren(grid, boundaryLayer.group, rivers.group, labels, stateLabels, rivers.labels, pins);
    targetLayer = createAtlasTargetLayer(svg);
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
    if (place?.projected || place?.kind === "City") {
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
    for (const shape of land) {
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
      if (!place || !shape || targetLayer.has(id)) continue;
      const group = node("g", { class: "map-pin", "data-place": id });
      const dot = node("circle", { cx: 0, cy: 0, r: 4.4, class: "pin-dot" });
      group.append(dot);
      const name = appendAtlasPlaceName(group, place, 12);
      pins.append(group);
      const textWidth = name.getComputedTextLength() || name.textContent.length * 7;
      group.insertBefore(
        node("rect", {
          x: 7,
          y: -10,
          width: Number(name.getAttribute("x")) - 7 + textWidth + 5,
          height: 20,
          rx: 4,
          class: "pin-bg",
        }),
        group.firstChild,
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
    part("view-caption").textContent = chosen ? placeLabel(chosen) : "World view";
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
    targetLayer.draw((p) => p.projected, selectedId);
    rivers.drawLabels(flatProjection, k);
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
    // A zoomed map can center a country at the edge of the drawing area.
    return k === 1
      ? { ...overview }
      : {
          k,
          x: Math.max(0, Math.min(width, view.x)),
          y: Math.max(0, Math.min(height, view.y)),
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
    pendingGlobeView = undefined;
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
  function select(id, { focus = true, animate = true, frameBoth = false, centerGlobe = false } = {}) {
    const p = places.get(id);
    if (!p) return;
    if (focus || centerGlobe) pendingGlobeView = undefined;
    tooltip.hidden = true;
    selectedId = id;
    updateSelection();
    if (projection === "globe") {
      globe.select(id, { center: focus || centerGlobe, zoomToPlace: focus });
      if (!frameBoth || !focus) return;
    }
    if (!focus) {
      paint();
      return;
    }
    const target = geometry(id);
    if (!target) {
      paint();
      return;
    }
    const [x1, y1, x2, y2] = (geometry(atlasLandGroup(id)) || target).bounds;
    const k = Math.min(
      120,
      Math.max(
        1.5,
        Math.min(width / Math.max(1, x2 - x1), height / Math.max(1, y2 - y1)) *
          0.64,
      ),
    );
    move(
      { x: target.point[0], y: target.point[1], k: focusZoom(k) },
      animate && projection === "flat",
    );
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
    const point = createAtlasPointer(svg, event);
    if (!point) return;
    cancelAnimationFrame(frame);
    pointers.set(event.pointerId, point);
    if (pointers.size > 1) for (const p of pointers.values()) p.moved = true;
    svg.setPointerCapture(event.pointerId);
    tooltip.hidden = true;
    startGesture();
  });
  for (const view of [svg, globeSvg]) {
    view.addEventListener("pointerleave", () => { tooltip.hidden = true; });
    view.addEventListener("pointerdown", () => { tooltip.hidden = true; });
    view.addEventListener("pointermove", (event) => {
      const place = places.get(atlasHitPlace(view, event.target));
      tooltip.hidden = !place || event.buttons !== 0 || event.pointerType === "touch";
      if (tooltip.hidden) return;
      if (tooltip.dataset.placeId !== place.id) {
        tooltip.dataset.placeId = place.id;
        tooltip.textContent = place.markerKind
          ? place.zh + " · " + place.name
          : placeLabel(place) + "  " + place.ipa;
        const artwork = atlasCountryFlag(place);
        if (artwork) tooltip.prepend(artwork);
      }
      const box = surface.getBoundingClientRect();
      tooltip.style.left = Math.max(4, Math.min(box.width - tooltip.offsetWidth - 4,
        event.clientX - box.left + 12)) + "px";
      tooltip.style.top = Math.max(3, event.clientY - box.top - 32) + "px";
    });
  }
  svg.addEventListener("pointermove", (event) => {
    const p = pointers.get(event.pointerId);
    if (!p) return;
    moveAtlasPointer(p, event);
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
    if (!p) return;
    pointers.delete(event.pointerId);
    startGesture();
    if (!pointers.size) svg.classList.remove("dragging");
    tap(event, p);
  }
  svg.addEventListener("pointerup", endGesture);
  svg.addEventListener("pointercancel", endGesture);
  svg.addEventListener("lostpointercapture", endGesture);
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
  let expandedSpace;
  if (expand) {
    function expandedState(active) {
      card.classList.toggle("expanded", active);
      expand.title = active ? "Close expanded map" : "Expand map";
      expand.setAttribute("aria-label", expand.title);
      expand.setAttribute("aria-pressed", String(active));
    }
    expand.onclick = () => {
      const current = card.closest(".expanded-map-dialog");
      if (current) {
        current.close();
        return;
      }
      const dialog = document.createElement("dialog");
      dialog.className = "expanded-map-dialog";
      dialog.setAttribute("aria-label", "Expanded world atlas");
      const space = document.createElement("div");
      expandedSpace = space;
      space.style.height = card.getBoundingClientRect().height + "px";
      card.replaceWith(space);
      dialog.append(card);
      expandedState(true);
      dialog.addEventListener(
        "close",
        () => {
          space.replaceWith(card);
          expandedSpace = null;
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
  const globeButton = card.querySelector('[data-projection="globe"]');
  const mapTip = card.querySelector(".map-tip");
  mapTip.setAttribute("aria-live", "polite");
  async function switchView(view) {
    const request = ++viewRequest;
    if (view === "globe" && !window.GLOBE_TOPOLOGY) {
      globeButton.setAttribute("aria-busy", "true");
      mapTip.textContent = "Loading globe… · 正在载入地球仪";
      try {
        await loadGlobeData();
      } catch {
        if (request === viewRequest) {
          globeButton.removeAttribute("aria-busy");
          mapTip.textContent = "地球仪载入失败，点击 Globe 重试";
        }
        return;
      }
      if (request !== viewRequest) return;
    }
    globeButton.removeAttribute("aria-busy");
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
    const dragTip = isGlobe ? "Drag to rotate" : "Drag to pan";
    mapTip.textContent = matchMedia("(any-pointer: fine)").matches
      ? `${dragTip} · Scroll to zoom · Right-click for details`
      : `${dragTip} · Pinch to zoom`;
    if (isGlobe) {
      if (!globe) {
        globe = createAtlasGlobe(
          globeSvg,
          places,
          color,
          pick,
          () => setMode(),
          zoomIn,
          zoomOut,
          focusZoom,
        );
        globe.setTargets(targets);
        globe.setRivers(riverData);
      }
      globe.select(selectedId);
      globe.restoreView(pendingGlobeView);
    } else if (selectedId) select(selectedId, { focus: false });
    else paint();
    pendingGlobeView = undefined;
    writeMapPreference(projectionKey, projection);
  }
  for (const btn of card.querySelectorAll("[data-projection]"))
    btn.onclick = () => switchView(btn.dataset.projection);
  redraw();
  paint();
  switchView(
    readMapPreference(projectionKey, readMapPreference("meridian.projection", "flat")),
  );
  function restoreView(view) {
    const flat = view?.flat;
    if (flat && [flat.x, flat.y, flat.k].every(Number.isFinite)) move(flat);
    if (globe) globe.restoreView(view?.globe);
    else if (globeButton.hasAttribute("aria-busy")) pendingGlobeView = view?.globe;
  }
  return {
    mount(host) {
      // Keep an expanded map in its dialog and move its return point to the new entry.
      const inline = expandedSpace || card;
      if (inline.parentElement !== host) host.append(inline);
    },
    select,
    setRivers(data) {
      riverData = data;
      rivers.setData(data);
      if (data) rivers.draw(AtlasGeo.geoPath(flatProjection).digits(3));
      labels.classList.toggle("detailed-water", Boolean(data));
      paint();
      globe?.setRivers(data);
    },
    setTargets(next) {
      if (targets === next) return;
      targets = next;
      targetLayer.setTargets(next);
      globe?.setTargets(next);
      paint();
    },
    setMode,
    mode: "world",
    restoreView,
    getView: () => ({ flat: { ...camera }, globe: globe?.getView() || pendingGlobeView }),
  };
}

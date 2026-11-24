"use strict";

function createAtlasGlobe(
  svg,
  places,
  color,
  onPick,
  onReset,
  zoomIn,
  zoomOut,
) {
  const {
    feature,
    geoDistance,
    geoGraticule,
    geoNaturalEarth1,
    geoOrthographic,
    geoPath,
  } = AtlasGeo;
  const xmlns = "http://www.w3.org/2000/svg";
  const create = (tag, attrs = {}) => {
    const el = document.createElementNS(xmlns, tag);
    for (const [name, value] of Object.entries(attrs))
      el.setAttribute(name, value);
    return el;
  };
  const flat = geoNaturalEarth1().fitExtent(
    [
      [10, 5],
      [990, 505],
    ],
    { type: "Sphere" },
  );
  const boundaries = new Map(
    window.GEOMETRY.world.shapes.map((s) => [s.id, s]),
  );
  const projection = geoOrthographic().translate([500, 255]).precision(0.55);
  const path = geoPath(projection).digits(2);
  const graticule = geoGraticule().step([30, 20])();
  const defs = create("defs"),
    light = create("radialGradient", {
      id: svg.id + "-light",
      cx: "35%",
      cy: "30%",
      r: "76%",
    });
  for (const [offset, tint, opacity] of [
    ["0%", "#fffbe9", ".14"],
    ["65%", "#d4e3d1", "0"],
    ["95%", "#35594f", ".14"],
    ["100%", "#35594f", ".26"],
  ]) {
    light.append(
      create("stop", { offset, "stop-color": tint, "stop-opacity": opacity }),
    );
  }
  defs.append(light);
  const sea = create("circle", { cx: 500, cy: 255, class: "globe-sea" });
  const atmosphere = create("circle", {
    cx: 500,
    cy: 255,
    fill: "url(#" + light.id + ")",
    "pointer-events": "none",
  });
  const grid = create("path", { class: "globe-grid" });
  const land = create("g");
  const features = feature(
    window.GLOBE_TOPOLOGY,
    window.GLOBE_TOPOLOGY.objects.places,
  ).features;
  const regions = features.map((f) => {
    const shape = create("path", {
      class: "land",
      "data-place": f.id,
      "data-land-group": atlasLandGroup(f.id),
      fill: color(f.id),
    });
    const title = create("title");
    title.textContent = places.get(f.id).name;
    shape.append(title);
    land.append(shape);
    return { shape, f };
  });
  const gloss = create("g", {
    class: "globe-selected",
    "pointer-events": "none",
  });
  const mark = create("circle", { r: 4.5 }),
    label = create("text", { x: 9, y: 4 });
  gloss.append(mark, label);
  svg.append(defs, sea, grid, land, atmosphere, gloss);
  const initial = [15, 20];
  let [lon, lat] = initial,
    scale = 1,
    selected = null,
    frame = 0;
  const pointers = new Map();
  const limit = (n, min, max) => Math.max(min, Math.min(n, max));
  function anchor(p) {
    if (!p) return null;
    if (p.labelPoint) return flat.invert(p.labelPoint);
    if (p.kind === "City" && Number.isFinite(p.lon) && Number.isFinite(p.lat))
      return [p.lon, p.lat];
    const point = boundaries.get(p.id)?.point;
    return point ? flat.invert(point) : null;
  }
  function draw() {
    frame = 0;
    if (svg.hasAttribute("hidden")) return;
    projection.rotate([-lon, -lat]).scale(238 * scale);
    const radius = 238 * scale;
    sea.setAttribute("r", radius);
    atmosphere.setAttribute("r", radius);
    grid.setAttribute("d", path(graticule));
    const place = places.get(selected),
      highlight = place?.parent || selected;
    for (const { shape, f } of regions) {
      shape.setAttribute("d", path(f) || "");
      shape.classList.toggle("chosen", atlasLandIsSelected(f.id, highlight));
    }
    const point = anchor(place);
    const visible = point && geoDistance([lon, lat], point) < Math.PI / 2;
    gloss.setAttribute("display", visible ? "inline" : "none");
    if (visible) {
      const [x, y] = projection(point);
      gloss.setAttribute("transform", "translate(" + x + " " + y + ")");
      label.textContent = place.name;
    }
    svg.dataset.center = [lon, lat].map((n) => n.toFixed(4)).join(",");
    svg.dataset.zoom = String(scale);
    zoomIn.disabled = scale >= 100;
    zoomOut.disabled = scale <= 1;
  }
  function invalidate() {
    if (!frame) frame = requestAnimationFrame(draw);
  }
  function select(id, focus = true) {
    selected = id;
    const p = places.get(atlasLandGroup(id)),
      center = anchor(p);
    if (focus && center) {
      [lon, lat] = center;
      const bounds = boundaries.get(p.id)?.bounds;
      const span = bounds
        ? Math.max(bounds[2] - bounds[0], bounds[3] - bounds[1])
        : p.kind === "City"
          ? 9
          : 90;
      scale = limit(150 / Math.max(1, span), 1.2, 75);
    }
    invalidate();
  }
  function zoom(factor) {
    scale = limit(scale * factor, 1, 100);
    invalidate();
  }
  function reset() {
    [lon, lat] = initial;
    scale = 1;
    selected = null;
    invalidate();
  }
  function gesture() {
    const [a, b] = pointers.values();
    return !a
      ? null
      : {
          x: b ? (a.x + b.x) / 2 : a.x,
          y: b ? (a.y + b.y) / 2 : a.y,
          dist: b ? Math.hypot(b.x - a.x, b.y - a.y) : 0,
        };
  }
  svg.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    const point = {
      x: e.clientX,
      y: e.clientY,
      originalX: e.clientX,
      originalY: e.clientY,
      id: e.target.closest("[data-place]")?.dataset.place,
      drag: false,
    };
    pointers.set(e.pointerId, point);
    svg.setPointerCapture(e.pointerId);
    if (pointers.size > 1) for (const p of pointers.values()) p.drag = true;
  });
  svg.addEventListener("pointermove", (e) => {
    const point = pointers.get(e.pointerId);
    if (!point) return;
    const before = gesture();
    point.x = e.clientX;
    point.y = e.clientY;
    if (Math.hypot(point.x - point.originalX, point.y - point.originalY) > 4)
      point.drag = true;
    if (!point.drag) return;
    const after = gesture();
    const factor = 65 / (238 * scale * (svg.getScreenCTM()?.a || 1));
    lon = ((lon - (after.x - before.x) * factor + 540) % 360) - 180;
    lat = limit(lat + (after.y - before.y) * factor, -89.999, 89.999);
    if (before.dist > 1 && after.dist > 1)
      scale = limit((scale * after.dist) / before.dist, 1, 100);
    svg.classList.add("dragging");
    invalidate();
  });
  function end(e) {
    const point = pointers.get(e.pointerId);
    pointers.delete(e.pointerId);
    if (!pointers.size) svg.classList.remove("dragging");
    if (e.type === "pointerup" && point?.id && !point.drag) onPick(point.id);
  }
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);
  svg.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      zoom(
        Math.exp(
          -limit(e.deltaY * (e.deltaMode === 1 ? 16 : 1), -140, 140) * 0.0025,
        ),
      );
    },
    { passive: false },
  );
  svg.addEventListener("keydown", (e) => {
    const directions = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, 1],
      ArrowDown: [0, -1],
    };
    if (directions[e.key]) {
      e.preventDefault();
      const [dx, dy] = directions[e.key];
      lon = ((lon + (dx * 15) / scale + 540) % 360) - 180;
      lat = limit(lat + (dy * 15) / scale, -89.999, 89.999);
      invalidate();
    }
    if (["+", "=", "-", "Home"].includes(e.key)) {
      e.preventDefault();
      if (e.key === "Home") onReset();
      else zoom(e.key === "-" ? 1 / 1.5 : 1.5);
    }
  });
  new ResizeObserver(() => {
    if (svg.hasAttribute("hidden")) return;
    const ratio = svg.clientWidth / Math.max(1, svg.clientHeight),
      w = Math.min(1000, Math.max(525, 510 * ratio));
    svg.setAttribute("viewBox", [(1000 - w) / 2, 0, w, 510].join(" "));
  }).observe(svg);
  function restoreView(view) {
    if (!view || ![view.lon, view.lat, view.scale].every(Number.isFinite))
      return;
    lon = limit(view.lon, -180, 180);
    lat = limit(view.lat, -90, 90);
    scale = limit(view.scale, 1, 100);
    invalidate();
  }
  return {
    select,
    zoom,
    reset,
    restoreView,
    getView: () => ({ lon, lat, scale }),
  };
}

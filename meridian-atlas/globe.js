"use strict";

const globeGeometryCache = new WeakMap();
const radiansPerDegree = Math.PI / 180;
const globePrecision = 0.55;
const globeLongArc = Math.cos(30 * radiansPerDegree);
const globeLineCache = new WeakMap();
let globeAxisText;

function globeDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function globeDirection([lon, lat]) {
  const longitude = lon * radiansPerDegree;
  const latitude = lat * radiansPerDegree;
  const cosLat = Math.cos(latitude);
  return [cosLat * Math.cos(longitude), cosLat * Math.sin(longitude), Math.sin(latitude)];
}

function globePathBounds(rings, closed) {
  const [outer, ...holes] = rings.map((ring) => ring.map(globeDirection));
  let x = 0, y = 0, z = 0;
  for (const [a, b, c] of outer) {
    x += a;
    y += b;
    z += c;
  }
  const length = Math.hypot(x, y, z);
  if (!length) return null;
  x /= length;
  y /= length;
  z /= length;

  // Within a hemisphere the cap also contains the great-circle edges. Check
  // winding in a gnomonic plane, where those edges project as straight lines.
  let bound = 1, maxChordSquared = 0;
  for (const ring of [outer, ...holes]) {
    let area = 0;
    let [a, b, c] = closed ? ring[ring.length - 1] : ring[0];
    let previous = a * x + b * y + c * z;
    for (const [u, v, w] of ring) {
      const dot = u * x + v * y + w * z;
      if (dot <= 1e-6) return null;
      bound = Math.min(bound, dot);
      if (closed)
        area += (x * (b * w - c * v) + y * (c * u - a * w) + z * (a * v - b * u)) / (dot * previous);
      maxChordSquared = Math.max(maxChordSquared, (a - u) ** 2 + (b - v) ** 2 + (c - w) ** 2);
      a = u;
      b = v;
      c = w;
      previous = dot;
    }
    if (closed && (ring === outer ? area >= 0 : area <= 0)) return null;
  }
  const cos = bound - 1e-8;
  // Under orthographic projection, the midpoint can deviate from its chord by
  // at most radius * sagitta. Below this limit neither adaptive error test can
  // add a point, even at the least favorable viewing angle.
  const quarterChordSquared = maxChordSquared / 4;
  const sagitta = quarterChordSquared / (1 + Math.sqrt(Math.max(0, 1 - quarterChordSquared)));
  const linearRadius = maxChordSquared < 2 * (1 - globeLongArc)
    ? (0.6 * globePrecision) / sagitta : 0;
  return {
    center: [x, y, z], cos, sin: Math.sqrt(1 - cos * cos),
    chord: Math.sqrt(2 * (1 - cos)), linearRadius,
    vectors: [outer, ...holes],
  };
}

function boundGlobePolygons(feature) {
  return feature.geometry.coordinates.map((coordinates) => ({
    coordinates, bounds: globePathBounds(coordinates, true),
  }));
}

function boundGlobeLines(geometry) {
  let parts = globeLineCache.get(geometry);
  if (!parts) {
    parts = geometry.coordinates.map((coordinates) => ({
      coordinates, bounds: globePathBounds([coordinates], false),
    }));
    globeLineCache.set(geometry, parts);
  }
  return parts;
}

function createGlobePathProjector(east, south, centerX, centerY) {
  // Share the bounded coordinate-string cache across globe views. Allocate it
  // when the first globe is drawn, and format off-screen coordinates on demand.
  const axisText = globeAxisText ??= new Array(100001);
  function format(value) {
    const index = Math.round(value * 100);
    if (index < 0 || index >= axisText.length) return String(index / 100);
    return axisText[index] ??= String(index / 100);
  }
  const precisionSquared = globePrecision ** 2;
  const coordinates = (x, y) => `${format(x + centerX)},${format(y + centerY)}`;

  // Match the spherical path's adaptive sampling for long segments. Unit vectors
  // give the geodesic midpoint directly, without converting back to angles.
  function interpolate(a, b, x0, y0, x1, y1, depth) {
    const dx = x1 - x0, dy = y1 - y0;
    const lengthSquared = dx * dx + dy * dy;
    if (!depth || lengthSquared <= 4 * precisionSquared) return "";
    const midpoint = [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
    const length = Math.hypot(...midpoint);
    if (!length) return "";
    for (let i = 0; i < midpoint.length; i++) midpoint[i] /= length;
    const x = globeDot(midpoint, east), y = globeDot(midpoint, south);
    const u = x - x0, v = y - y0;
    if ((dy * u - dx * v) ** 2 / lengthSquared <= precisionSquared &&
      Math.abs((dx * u + dy * v) / lengthSquared - 0.5) <= 0.3 && globeDot(a, b) >= globeLongArc) return "";
    return interpolate(a, midpoint, x0, y0, x, y, depth - 1) + "L" + coordinates(x, y) +
      interpolate(midpoint, b, x, y, x1, y1, depth - 1);
  }

  return (rings, closed, sample) => {
    let outline = "";
    for (const ring of rings) {
      let a = ring[0];
      let x0 = globeDot(a, east), y0 = globeDot(a, south);
      outline += "M" + coordinates(x0, y0);
      for (let i = 1; i < ring.length; i++) {
        const b = ring[i];
        const x = globeDot(b, east), y = globeDot(b, south);
        if (sample) outline += interpolate(a, b, x0, y0, x, y, 16);
        if (!closed || i < ring.length - 1) outline += "L" + coordinates(x, y);
        a = b;
        x0 = x;
        y0 = y;
      }
      if (closed) outline += "Z";
    }
    return outline;
  };
}

function atlasGlobeGeometry(topology) {
  let geometry = globeGeometryCache.get(topology);
  if (!geometry) {
    const { feature } = AtlasGeo;
    const { places, neutralLand, lakes, lakeBorders } = topology.objects;
    geometry = {
      places: feature(topology, places).features.map((place) => ({
        id: place.id,
        properties: place.properties,
        polygons: boundGlobePolygons(place),
      })),
      neutralLand: boundGlobePolygons(feature(topology, neutralLand)),
      lakes: boundGlobePolygons(feature(topology, lakes)),
      lakeBorders: boundGlobeLines(feature(topology, lakeBorders).geometry),
    };
    globeGeometryCache.set(topology, geometry);
  }
  return geometry;
}

function createAtlasGlobe(
  svg,
  places,
  color,
  onPick,
  onReset,
  zoomIn,
  zoomOut,
  focusZoom,
) {
  const {
    geoDistance,
    geoGraticule,
    geoOrthographic,
    geoPath,
  } = AtlasGeo;
  const width = 1000, height = 510;
  const centerX = width / 2, centerY = height / 2;
  const globeRadius = 238;
  const xmlns = "http://www.w3.org/2000/svg";
  const create = (tag, attrs = {}) => {
    const el = document.createElementNS(xmlns, tag);
    for (const [name, value] of Object.entries(attrs))
      el.setAttribute(name, value);
    return el;
  };
  const tap = bindAtlasPick(svg, onPick);
  const boundaries = new Map(
    window.GEOMETRY.world.shapes.map((s) => [s.id, s]),
  );
  const projection = geoOrthographic().translate([centerX, centerY]).precision(globePrecision);
  const frontProjection = geoOrthographic().translate([centerX, centerY]).precision(globePrecision)
    .preclip((stream) => stream);
  const path = geoPath(projection).digits(2);
  const frontPath = geoPath(frontProjection).digits(2);
  const front = { type: "MultiPolygon", coordinates: [] };
  const crossing = { type: "MultiPolygon", coordinates: [] };
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
  const sea = create("circle", { cx: centerX, cy: centerY, class: "globe-sea" });
  const atmosphere = create("circle", {
    cx: centerX,
    cy: centerY,
    fill: "url(#" + light.id + ")",
    "pointer-events": "none",
  });
  const grid = create("path", { class: "globe-grid" });
  const boundaryLayer = createAtlasBoundaryLayer(svg);
  const rivers = createAtlasRiverLayer(svg);
  const geometry = atlasGlobeGeometry(window.GLOBE_TOPOLOGY);
  const byId = new Map(geometry.places.map((f) => [f.id, f]));
  const regions = geometry.places.map((f) => {
    const shape = create("path", {
      class: "land",
      "data-place": f.id,
      "data-land-group": atlasLandGroup(f.id),
      fill: color(f.id),
    });
    const title = create("title");
    title.textContent = placeLabel(places.get(f.id));
    shape.append(title);
    boundaryLayer.add(shape, f.id);
    return { shape, id: f.id, outline: null };
  });
  const countryExtent = regions.findIndex(({ id }) => id === "USA");
  const gloss = create("g", {
    class: "globe-selected",
    "pointer-events": "none",
  });
  const mark = create("circle", { r: 4.5 }),
    label = create("g", { class: "globe-label" });
  gloss.append(mark, label);
  svg.append(defs, sea, grid, boundaryLayer.group, atmosphere, rivers.group, rivers.labels, gloss);
  const targetLayer = createAtlasTargetLayer(svg);
  const initial = [15, 20];
  let [lon, lat] = initial,
    scale = 1,
    selected = null,
    frame = 0,
    screenScale = 1,
    viewport,
    drawnScale,
    drawnClip,
    drawnLon,
    drawnLat,
    riversChanged = false;
  const pointers = new Map();
  const limit = (n, min, max) => Math.max(min, Math.min(n, max));
  function anchor(p) {
    if (!p) return null;
    if (p.labelPoint) return flatProjection.invert(p.labelPoint);
    if ((p.projected || p.kind === "City") && Number.isFinite(p.lon) && Number.isFinite(p.lat))
      return [p.lon, p.lat];
    const globePoint = byId.get(p.id)?.properties?.point;
    if (globePoint) return globePoint;
    const point = boundaries.get(p.id)?.point;
    return point ? flatProjection.invert(point) : null;
  }
  function geometryPath(parts, { center, east, south, viewSin, viewCos, radius, clip, project }, closed) {
    front.type = crossing.type = closed ? "MultiPolygon" : "MultiLineString";
    front.coordinates.length = crossing.coordinates.length = 0;
    let outline = "";
    for (const { coordinates, bounds } of parts) {
      if (!bounds) {
        crossing.coordinates.push(coordinates);
        continue;
      }
      const dot = globeDot(bounds.center, center);
      if (dot < bounds.cos * viewCos - bounds.sin * viewSin) continue;
      if (dot <= bounds.sin) {
        crossing.coordinates.push(coordinates);
        continue;
      }
      const margin = radius * bounds.chord;
      const insideViewport = !clip || (Math.abs(globeDot(bounds.center, east)) + margin < viewport.halfWidth &&
        Math.abs(globeDot(bounds.center, south)) + margin < viewport.halfHeight);
      if (insideViewport) outline += project(bounds.vectors, closed, radius > bounds.linearRadius);
      else front.coordinates.push(coordinates);
    }
    // Keep every vertex. Only parts that can reach the horizon need spherical clipping.
    return outline + (front.coordinates.length ? frontPath(front) || "" : "") +
      (crossing.coordinates.length ? path(crossing) || "" : "");
  }
  function updateProjection() {
    const radius = globeRadius * scale;
    const clip = viewport && radius > viewport.shortSide ? viewport.clip : null;
    if (lon === drawnLon && lat === drawnLat && scale === drawnScale && clip === drawnClip)
      return false;
    if (lon !== drawnLon || lat !== drawnLat) {
      const rotation = [-lon, -lat];
      projection.rotate(rotation);
      frontProjection.rotate(rotation);
      drawnLon = lon;
      drawnLat = lat;
    }
    if (scale !== drawnScale) {
      projection.scale(radius);
      frontProjection.scale(radius);
      sea.setAttribute("r", radius);
      atmosphere.setAttribute("r", radius);
      drawnScale = scale;
    }
    if (clip !== drawnClip) {
      projection.clipExtent(clip);
      frontProjection.clipExtent(clip);
      drawnClip = clip;
    }
    return true;
  }
  function projectionView() {
    const radius = globeRadius * scale;
    const center = globeDirection([lon, lat]);
    const sinLon = Math.sin(lon * radiansPerDegree), cosLon = Math.cos(lon * radiansPerDegree);
    const sinLat = center[2], cosLat = Math.cos(lat * radiansPerDegree);
    const east = [-sinLon * radius, cosLon * radius, 0];
    const south = [cosLon * sinLat * radius, sinLon * sinLat * radius, -cosLat * radius];
    const viewSin = drawnClip ? Math.min(1, viewport.halfDiagonal / radius) : 1;
    const viewCos = Math.sqrt(1 - viewSin * viewSin);
    return { center, east, south, viewSin, viewCos, radius, clip: drawnClip,
      project: createGlobePathProjector(east, south, centerX, centerY) };
  }
  function drawGeography(view) {
    grid.setAttribute("d", path(graticule));
    boundaryLayer.setWaterAndNeutralPaths(
      geometryPath(geometry.neutralLand, view, true),
      geometryPath(geometry.lakes, view, true),
      geometryPath(geometry.lakeBorders, view, false),
    );
    for (let i = 0; i < regions.length; i++) {
      const region = regions[i];
      const outline = geometryPath(geometry.places[i].polygons, view, true);
      if (region.outline === outline) continue;
      region.outline = outline;
      region.shape.setAttribute("d", outline);
      if (i === countryExtent) boundaryLayer.setStateExtent(outline);
    }
  }
  function draw() {
    frame = 0;
    if (svg.hasAttribute("hidden")) return;
    const viewChanged = updateProjection();
    const projectVisible = (coords) => geoDistance([lon, lat], coords) < Math.PI / 2 ? projection(coords) : null;
    const point = anchor(places.get(selected));
    const position = point && !targetLayer.has(selected) && projectVisible(point);
    gloss.setAttribute("display", position ? "inline" : "none");
    if (position) {
      const [x, y] = position;
      gloss.setAttribute("transform", `translate(${x} ${y}) scale(${1 / screenScale})`);
    }
    targetLayer.draw((p) => projectVisible([p.lon, p.lat]), selected);
    rivers.drawLabels(projectVisible, scale);
    // Place the labels before changing the paths so their layout queries do not
    // flush newly written boundary and river geometry during the same frame.
    if (viewChanged || riversChanged) {
      const view = projectionView();
      if (viewChanged) drawGeography(view);
      rivers.draw((lines) => geometryPath(boundGlobeLines(lines), view, false));
      riversChanged = false;
    }
    svg.dataset.center = [lon, lat].map((n) => n.toFixed(4)).join(",");
    svg.dataset.zoom = String(scale);
    zoomIn.disabled = scale >= 100;
    zoomOut.disabled = scale <= 1;
  }
  function invalidate() {
    if (!frame) frame = requestAnimationFrame(draw);
  }
  function setSelection(id) {
    if (id === selected) return;
    selected = id;
    const place = places.get(id);
    label.replaceChildren();
    if (place) appendAtlasPlaceName(label, place, 0);
    const highlight = place?.parent || id;
    for (const { shape, id } of regions)
      shape.classList.toggle("chosen", atlasLandIsSelected(id, highlight));
  }
  function select(id, { center = true, zoomToPlace = center } = {}) {
    setSelection(id);
    const p = places.get(id),
      point = anchor(p);
    if (center && point) [lon, lat] = point;
    if (zoomToPlace && point) {
      const bounds = boundaries.get(atlasLandGroup(id))?.bounds;
      const span = bounds
        ? Math.max(bounds[2] - bounds[0], bounds[3] - bounds[1])
        : p.projected || p.kind === "City"
          ? 9
          : 90;
      scale = focusZoom(limit(150 / Math.max(1, span), 1.2, 75));
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
    setSelection(null);
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
    const point = createAtlasPointer(svg, e);
    if (!point) return;
    pointers.set(e.pointerId, point);
    svg.setPointerCapture(e.pointerId);
    if (pointers.size > 1) for (const p of pointers.values()) p.moved = true;
  });
  svg.addEventListener("pointermove", (e) => {
    const point = pointers.get(e.pointerId);
    if (!point) return;
    const before = gesture();
    const alreadyMoving = point.moved;
    moveAtlasPointer(point, e);
    if (!point.moved) return;
    if (!alreadyMoving) {
      before.x = point.startX;
      before.y = point.startY;
    }
    const after = gesture();
    const factor = 65 / (globeRadius * scale * screenScale);
    lon = ((lon - (after.x - before.x) * factor + 540) % 360) - 180;
    lat = limit(lat + (after.y - before.y) * factor, -89.999, 89.999);
    if (before.dist > 1 && after.dist > 1)
      scale = limit((scale * after.dist) / before.dist, 1, 100);
    svg.classList.add("dragging");
    invalidate();
  });
  function end(e) {
    const point = pointers.get(e.pointerId);
    if (!point) return;
    pointers.delete(e.pointerId);
    if (!pointers.size) svg.classList.remove("dragging");
    tap(e, point);
  }
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);
  svg.addEventListener("lostpointercapture", end);
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
    const { clientWidth, clientHeight } = svg;
    if (!clientWidth || !clientHeight) return;
    const w = Math.min(width, Math.max(525, height * clientWidth / clientHeight));
    svg.setAttribute("viewBox", [centerX - w / 2, 0, w, height].join(" "));
    screenScale = Math.min(clientWidth / w, clientHeight / height);
    const halfWidth = clientWidth / (2 * screenScale) + 8;
    const halfHeight = clientHeight / (2 * screenScale) + 8;
    viewport = {
      shortSide: Math.min(halfWidth, halfHeight),
      halfWidth,
      halfHeight,
      halfDiagonal: Math.hypot(halfWidth, halfHeight),
      clip: [[centerX - halfWidth, centerY - halfHeight], [centerX + halfWidth, centerY + halfHeight]],
    };
    invalidate();
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
    setRivers(data) {
      rivers.setData(data);
      if (data) {
        riversChanged = true;
        invalidate();
      }
    },
    setTargets(places) {
      targetLayer.setTargets(places);
      invalidate();
    },
    zoom,
    reset,
    restoreView,
    getView: () => ({ lon, lat, scale }),
  };
}

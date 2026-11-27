"use strict";

const atlasTargetKinds = {
  capital: { name: "首都／行政中心", priority: 1, path: "M0 -8 2.2 -2.7 8 -2.5 3.5 1.2 5 7 0 3.5 -5 7 -3.5 1.2 -8 -2.5 -2.2 -2.7Z" },
  stateCapital: { name: "州府", priority: 1, path: "M-6 -6H6V6H-6Z" },
  city: { name: "补充城市", priority: 2, path: "M0 -6a6 6 0 1 0 0 12a6 6 0 1 0 0 -12" },
  landmark: { name: "名胜", priority: 3, path: "M0 -7.5 7.5 0 0 7.5 -7.5 0Z" },
  sight: { name: "补充景观", priority: 4, path: "M0 -7.5 7.5 6H-7.5Z" },
};

function targetSvgElement(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  return el;
}
function targetSymbol(kind) {
  return targetSvgElement("path", { class: "target-symbol " + kind, d: atlasTargetKinds[kind].path });
}
function createAtlasTargetPicker(focusPlace, showPlace) {
  const box = element("div", "locator-target-picker");
  const legend = element("div", "target-legend");
  const label = element("label", "target-select", "定位地点");
  const select = element("select");
  const details = element("button", "detail-action", "查看介绍");
  details.type = "button";
  label.append(select);
  box.lang = "zh-Hans";
  box.append(legend, label, details);
  select.onchange = () => {
    details.hidden = !select.value;
    if (select.value) focusPlace(select.value);
  };
  details.onclick = () => showPlace(select.value);
  function reset() {
    select.value = "";
    details.hidden = true;
  }
  function setTargets(targets, selected = "") {
    box.hidden = !targets.length;
    legend.replaceChildren();
    const placeholder = new Option("选择地点", "");
    placeholder.disabled = true;
    select.replaceChildren(placeholder);
    for (const [kind, places] of Map.groupBy(targets, (p) => p.markerKind)) {
      const item = element("span");
      const icon = targetSvgElement("svg", { viewBox: "-10 -10 20 20", "aria-hidden": "true" });
      icon.append(targetSymbol(kind));
      const { name } = atlasTargetKinds[kind];
      item.append(icon, name);
      legend.append(item);
      const group = element("optgroup");
      group.label = name;
      for (const p of places) group.append(new Option(p.zh + " · " + p.name, p.id));
      select.append(group);
    }
    select.value = selected;
    if (!select.value) reset();
    else details.hidden = false;
  }
  return {
    box, setTargets, reset,
    get value() { return select.value; },
    choose(id) {
      select.value = id;
      select.onchange();
    },
  };
}

function atlasTargetLabel(name, measure) {
  const text = targetSvgElement("text", { class: "target-name", lang: "en" });
  const lines = [];
  let line = "";
  for (const word of name.split(/\s+/)) {
    const next = line ? line + " " + word : word;
    if (line && measure.measureText(next).width > 138) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  lines.push(line);
  let width = 0;
  lines.forEach((row, i) => {
    const span = targetSvgElement("tspan", { x: 2, y: 12 + 14 * i });
    span.textContent = row + (i < lines.length - 1 ? " " : "");
    text.append(span);
    width = Math.max(width, measure.measureText(row).width);
  });
  return { text, width: Math.ceil(width) + 5, height: lines.length * 14 + 2 };
}

function atlasLabelFits(box, viewport, occupied) {
  return box.left >= viewport.left && box.right <= viewport.right &&
    box.top >= viewport.top && box.bottom <= viewport.bottom &&
    !occupied.some((r) => box.left < r.right && r.left < box.right &&
      box.top < r.bottom && r.top < box.bottom);
}

// Look beside the icon before displacing it. Measure in screen pixels so the text
// and the gap to its icon keep the same size throughout a zoom or rotation.
function placeAtlasTarget(x, y, label, viewport, occupied) {
  const { width, height } = label;
  let fallback;
  for (const [dx, dy] of targetOffsets) {
    const cx = x + dx, cy = y + dy;
    const icon = new DOMRect(cx - 12, cy - 12, 24, 24);
    if (!atlasLabelFits(icon, viewport, occupied)) continue;
    fallback ??= { icon };
    const positions = [
      [cx + 10, cy - height / 2], [cx - 10 - width, cy - height / 2],
      [cx - width / 2, cy - 9 - height], [cx - width / 2, cy + 9],
      [cx + 4, cy - 9 - height], [cx - width - 4, cy + 9],
      [cx - width - 4, cy - 9 - height], [cx + 4, cy + 9],
    ];
    for (const [left, top] of positions) {
      const name = new DOMRect(left, top, width, height);
      if (atlasLabelFits(name, viewport, occupied)) return { icon, name };
    }
  }
  return fallback;
}

// Try the real position first, then sample concentric rings about a symbol-width apart.
const targetOffsets = [[0, 0]];
for (let radius = 16; radius <= 160; radius += 16) {
  const steps = Math.ceil(2 * Math.PI * radius / 18);
  for (let i = 0; i < steps; i++) {
    const angle = i * 2 * Math.PI / steps;
    targetOffsets.push([radius * Math.cos(angle), radius * Math.sin(angle)]);
  }
}

function createAtlasTargetLayer(svg) {
  const layer = targetSvgElement("g", { class: "atlas-targets" });
  const leaders = targetSvgElement("g", { "aria-hidden": "true" });
  const arrowheads = targetSvgElement("g", { class: "target-arrowheads", "aria-hidden": "true" });
  svg.append(layer);
  const controls = svg.parentElement.querySelectorAll(".map-controls, .compass");
  const measure = document.createElement("canvas").getContext("2d");
  let markers = [], ordered, orderedFor;
  const has = (id) => markers.some(({ place }) => place.id === id);
  function setTargets(places) {
    leaders.replaceChildren();
    arrowheads.replaceChildren();
    layer.replaceChildren(leaders);
    measure.font = getComputedStyle(layer).font;
    markers = places.map((place) => {
      const group = targetSvgElement("g", { class: "atlas-target", "data-place": place.id });
      const leader = targetSvgElement("line", { class: place.markerKind });
      const arrow = targetSvgElement("path", { class: place.markerKind, d: "M0 0 -8 -3.5 -6 0 -8 3.5Z" });
      const badge = targetSvgElement("g");
      badge.append(targetSvgElement("circle", { r: 12, fill: "transparent" }), targetSymbol(place.markerKind));
      const title = targetSvgElement("title");
      const { name, priority } = atlasTargetKinds[place.markerKind];
      title.textContent = name + " · " + place.zh + " · " + place.name;
      const label = atlasTargetLabel(place.name, measure);
      badge.append(label.text);
      leaders.append(leader);
      arrowheads.append(arrow);
      group.append(title, badge);
      layer.append(group);
      return { place, priority, group, leader, arrow, badge, label };
    });
    // Keep the tip visible even when another symbol sits on its true position.
    layer.append(arrowheads);
    ordered = null;
  }
  function draw(project, selectedId) {
    if (!markers.length || svg.hasAttribute("hidden")) return;
    const matrix = svg.getScreenCTM(), viewport = svg.getBoundingClientRect();
    if (!matrix || !viewport.width || !viewport.height) return;
    const occupied = [...controls, ...svg.querySelectorAll(".map-pin, .globe-selected")]
      .map((el) => el.getBoundingClientRect()).filter((r) => r.width && r.height);
    if (!ordered || orderedFor !== selectedId) {
      // Selection and label size break ties only within the same priority.
      ordered = markers.toSorted((a, b) => a.priority - b.priority ||
        Number(b.place.id === selectedId) - Number(a.place.id === selectedId) ||
        b.label.width * b.label.height - a.label.width * a.label.height);
      orderedFor = selectedId;
    }
    for (const { place, group, leader, arrow, badge, label } of ordered) {
      const point = project(place);
      const x = point && point[0] * matrix.a + matrix.e;
      const y = point && point[1] * matrix.d + matrix.f;
      const inView = point && x >= viewport.left && x <= viewport.right && y >= viewport.top && y <= viewport.bottom;
      const placement = inView && placeAtlasTarget(x, y, label, viewport, occupied);
      if (!placement) {
        group.style.display = "none";
        leader.style.display = "none";
        arrow.style.display = "none";
        continue;
      }
      group.style.display = "";
      const { icon, name } = placement;
      const cx = icon.x + 12, cy = icon.y + 12;
      const dx = cx - x, dy = cy - y;
      occupied.push(icon);
      label.text.style.display = name ? "" : "none";
      if (name) {
        occupied.push(name);
        label.text.setAttribute("transform", `translate(${name.x - cx},${name.y - cy})`);
      }
      const transform = `translate(${point}) scale(${1 / matrix.a})`;
      group.setAttribute("transform", transform);
      const displaced = Math.hypot(dx, dy) > 0.5;
      leader.style.display = arrow.style.display = displaced ? "" : "none";
      if (displaced) {
        leader.setAttribute("transform", transform);
        leader.setAttribute("x2", dx);
        leader.setAttribute("y2", dy);
        const angle = Math.atan2(-dy, -dx) * 180 / Math.PI;
        arrow.setAttribute("transform", transform + ` rotate(${angle})`);
      }
      badge.setAttribute("transform", `translate(${dx},${dy})`);
    }
  }
  return { setTargets, draw, has };
}

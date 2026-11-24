"use strict";

const $ = (id) => document.getElementById(id);
function sessionRecord(section) {
  const key = "meridian." + section + ".v1";
  return {
    read() {
      try {
        const value = JSON.parse(sessionStorage.getItem(key));
        return value && typeof value === "object" ? value : {};
      } catch {
        return {};
      }
    },
    write(value) {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch {
        /* Storage is optional for offline pages. */
      }
    },
  };
}
const iconPaths = {
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  map: '<path d="m2.7 5.7 6.2-2.2 6.2 2.2 6.2-2.2v14.8l-6.2 2.2-6.2-2.2-6.2 2.2zM8.9 3.5v14.8m6.2-12.6v14.8"/>',
  book: '<path d="M12 5.8c-2-1.8-6.2-2.4-9-1.4v14.2c2.8-1 7-.4 9 1.4 2-1.8 6.2-2.4 9-1.4V4.4c-2.8-1-7-.4-9 1.4zM12 5.8V20"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.4"/><path d="m15.4 15.4 4.7 4.7"/>',
  locate:
    '<path d="M19.5 10.2c0 5.2-7.5 11-7.5 11s-7.5-5.8-7.5-11a7.5 7.5 0 1 1 15 0z"/><circle cx="12" cy="10.2" r="2.7"/>',
  focus:
    '<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="1.8"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>',
  expand: '<path d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  shuffle:
    '<path d="M3 6h3c4 0 7 12 11 12h4m-4-4 4 4-4 4M3 18h3c1.8 0 3.4-2.2 5-5m2-4c1.4-2 2.6-3 4-3h4m-4-4 4 4-4 4"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  audio:
    '<path d="m11 5-5 4H3v6h3l5 4zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  download: '<path d="M12 3v11m-4-4 4 4 4-4M4 16v4h16v-4"/>',
};
function icon(name) {
  return (
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    iconPaths[name] +
    "</svg>"
  );
}
document.querySelectorAll("[data-icon]").forEach((el) => {
  el.innerHTML = icon(el.dataset.icon);
});

function element(tag, className, value) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (value !== undefined) el.textContent = value;
  return el;
}
function showDialog(dialog) {
  if (!dialog.isConnected) {
    document.body.append(dialog);
    dialog.addEventListener("close", () => dialog.remove(), { once: true });
  }
  dialog.setAttribute("closedby", "any");
  dialog.showModal();
}
// Older browsers lack native light dismissal. Both ends of a click must be on the backdrop.
if (!("closedBy" in HTMLDialogElement.prototype)) {
  let pressedBackdrop;
  function backdrop(event) {
    const dialog = event.target;
    if (!(dialog instanceof HTMLDialogElement) || !dialog.open) return null;
    const box = dialog.getBoundingClientRect();
    return event.clientX < box.left ||
      event.clientX >= box.right ||
      event.clientY < box.top ||
      event.clientY >= box.bottom
      ? dialog
      : null;
  }
  document.addEventListener("pointerdown", (event) => {
    pressedBackdrop = event.button === 0 ? backdrop(event) : null;
  });
  document.addEventListener("pointercancel", () => {
    pressedBackdrop = null;
  });
  document.addEventListener("click", (event) => {
    if (pressedBackdrop && pressedBackdrop === backdrop(event))
      pressedBackdrop.close();
    pressedBackdrop = null;
  });
}
for (const button of document.querySelectorAll("[data-dialog-close]"))
  button.onclick = () => button.closest("dialog").close();
function normalize(value = "") {
  return String(value || "")
    .trim()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[.'’]/g, "")
    .replace(/[\s_-]+/g, " ");
}
const formatNumber = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});
const numberOrDash = (n) => (Number.isFinite(n) ? formatNumber.format(n) : "—");
const places = new Map(window.PLACES.map((place) => [place.id, place]));
const gameCities = [
  ["Seoul", "KOR", 37.5665, 126.978],
  ["Barcelona", "ESP", 41.3851, 2.1734, "/ˌbɑrsəˈloʊnə/"],
  ["Ottawa", "CAN", 45.4215, -75.6972],
  ["Rome", "ITA", 41.9028, 12.4964],
  ["Buenos Aires", "ARG", -34.6037, -58.3816],
  ["Tallahassee", "US-FL", 30.4383, -84.2807],
];
for (const [name, parent, lat, lon, customIpa] of gameCities) {
  const base = places.get(parent);
  if (!base || !window.GEOMETRY.world.cities?.[name]) continue;
  const id = "city-" + normalize(name).replaceAll(" ", "-");
  places.set(id, {
    id,
    name,
    parent,
    ipa: customIpa || base.capitalIpa,
    kind: "City",
    region: base.name,
    lat,
    lon,
    flag: base.flag,
    aliases: [],
  });
}
const cityDescriptions = {
  Barcelona: [
    "巴塞罗那",
    "巴塞罗那位于西班牙东北部的地中海沿岸。圣家堂在这里，首都马德里则在内陆。",
  ],
};
const physicalZh = {
  "North America": "北美洲",
  "South America": "南美洲",
  Europe: "欧洲",
  Africa: "非洲",
  Asia: "亚洲",
  Oceania: "大洋洲",
  "Pacific Ocean": "太平洋",
  "Atlantic Ocean": "大西洋",
  "Indian Ocean": "印度洋",
  "Arctic Ocean": "北冰洋",
  "Southern Ocean": "南大洋",
};
const physicalNames = {
  "North America": "/ˌnɔrθ əˈmɛrɪkə/",
  "South America": "/ˌsaʊθ əˈmɛrɪkə/",
  Europe: "/ˈjʊrəp/",
  Africa: "/ˈæfrɪkə/",
  Asia: "/ˈeɪʒə/",
  Oceania: "/ˌoʊʃiˈæniə/",
  "Pacific Ocean": "/pəˈsɪfɪk ˈoʊʃən/",
  "Atlantic Ocean": "/ətˈlæntɪk ˈoʊʃən/",
  "Indian Ocean": "/ˈɪndiən ˈoʊʃən/",
  "Arctic Ocean": "/ˈɑrktɪk ˈoʊʃən/",
  "Southern Ocean": "/ˈsʌðɚn ˈoʊʃən/",
};
for (const label of window.GEOMETRY.world.labels) {
  if (!physicalNames[label.text]) continue;
  const id = "physical-" + normalize(label.text).replaceAll(" ", "-");
  places.set(id, {
    id,
    name: label.text,
    ipa: physicalNames[label.text],
    kind: label.kind === "ocean" ? "Ocean" : "Continent",
    region: "World",
    aliases: [physicalZh[label.text]],
    zh: physicalZh[label.text],
    labelPoint: [label.x, label.y],
  });
}

function searchable(place) {
  const names = window.EDITION.names[place.id];
  const game = window.EDITION.places.find((p) => p.id === place.id);
  return {
    name: normalize(place.name),
    codes: [
      place.id,
      ...place.aliases,
      names?.zh,
      ...(names?.aliasesZh || []),
      names?.capitalZh,
      game?.name,
      game?.capital,
    ]
      .filter(Boolean)
      .map(normalize),
    capital: normalize(place.capital),
  };
}
function rankedSearch(input, collection) {
  const q = normalize(input);
  if (!q) return [...collection];
  function score(p) {
    const { name, codes, capital } = searchFields.get(p.id);
    if (name === q) return 0;
    if (codes.includes(q)) return 1;
    if (name.startsWith(q)) return 2;
    if (capital === q) return 3;
    if (name.split(" ").some((w) => w.startsWith(q))) return 4;
    if (name.includes(q)) return 5;
    if (capital.includes(q)) return 6;
    if (codes.some((c) => c.startsWith(q))) return 7;
    if (q.length >= 3 && codes.some((c) => c.includes(q))) return 8;
    return Infinity;
  }
  return [...collection]
    .map((p) => ({ p, n: score(p) }))
    .filter((r) => Number.isFinite(r.n))
    .sort(
      (a, b) =>
        a.n - b.n ||
        a.p.name.localeCompare(b.p.name, "en") ||
        a.p.kind.localeCompare(b.p.kind, "en"),
    )
    .map((r) => r.p);
}
function flag(place) {
  const box = element("span", "flag-slot");
  const source =
    window.EDITION.places.find((p) => p.id === place.id)?.images.flag ||
    place.flag;
  if (source) {
    const img = element("img");
    img.src = source;
    img.alt = "";
    img.loading = "lazy";
    box.append(img);
  }
  if (place.id === "TWN") {
    box.classList.add("masked-flag");
    box.title = "Flag blurred by default · 旗帜默认模糊";
  }
  return box;
}
const quickIds = ["JPN", "US-CA", "BRA", "ITA"];
let selected = null,
  resultPlaces = [],
  activeIndex = -1,
  currentPage = "explorer";
const search = $("place-search"),
  results = $("place-results");
// Copy only the map controls. Each view builds its own geometry and camera.
const locatorCard = $("map-card").cloneNode(true);
for (const part of [locatorCard, ...locatorCard.querySelectorAll("[id]")])
  part.id = "locator-" + part.id;
locatorCard.querySelector("#locator-expand-map").remove();
locatorCard.querySelector(".zoom-setting").remove();
$("locator-dialog").append(locatorCard);
let locatorMap;
function selectLocatorPlace(id, options) {
  const place = places.get(id);
  if (!place) return;
  locatorMap.select(id, options);
  locatorCard.querySelector(".map-title").textContent = [
    place.name,
    place.zh || window.EDITION.names[id]?.zh,
  ]
    .filter(Boolean)
    .join(" · ");
}
function showAtlasLocation(id) {
  showDialog($("locator-dialog"));
  if (!locatorMap)
    locatorMap = createAtlasMap(
      places,
      selectLocatorPlace,
      () => {
        locatorCard.querySelector(".map-title").textContent = "World atlas";
      },
      "locator-",
    );
  selectLocatorPlace(id, { animate: false });
}
const atlas = createAtlasMap(places, choosePlace, () => {
  selected = null;
  search.value = "";
  renderFinder();
});
const study = createStudyDesk(window.EDITION, places, showAtlasLocation, {
  element,
  normalize,
  formatNumber,
  storage: sessionRecord("study"),
});
const flatProjection = AtlasGeo.geoNaturalEarth1().fitExtent(
  [
    [10, 5],
    [990, 505],
  ],
  { type: "Sphere" },
);
for (const target of window.EDITION.pins) {
  const parent = study.byId.get(target.placeId),
    learning = study.learningPin(target, parent);
  const isLandmark = target.variant === "Landmark",
    coords = isLandmark
      ? null
      : window.EDITION.capitalLessons[parent.id]?.coords;
  const existingId = "city-" + normalize(target.target).replaceAll(" ", "-");
  const existing = places.get(existingId);
  const id =
    existing?.parent === parent.id ? existingId : "target-" + target.key;
  const record = {
    id,
    name: target.target,
    parent: parent.id,
    region: parent.name,
    ipa: learning.ipa,
    zh: learning.zh,
    note: learning.note,
    approximate: learning.approximate,
    kind: isLandmark ? "Landmark" : "City",
    aliases: [learning.zh],
    target,
    gameMapOnly: !coords,
  };
  if (coords) {
    [record.lon, record.lat] = coords;
    record.projected = flatProjection(coords);
  }
  places.set(id, { ...places.get(id), ...record });
}
for (const p of places.values()) {
  if (cityDescriptions[p.name] && p.kind === "City") {
    [p.zh, p.note] = cityDescriptions[p.name];
    p.aliases.push(p.zh);
  }
}
const searchFields = new Map([...places].map(([id, p]) => [id, searchable(p)]));

function navigate(page) {
  if (location.hash !== "#" + page) location.hash = page;
  showPage(page);
}
function showPage(page) {
  currentPage = ["index", "guide"].includes(page) ? page : "explorer";
  for (const id of ["explorer", "index", "guide"])
    $(id + "-page").hidden = id !== currentPage;
  for (const a of document.querySelectorAll("nav a")) {
    if (a.dataset.page === currentPage) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  }
  document.title =
    "Meridian — " +
    { explorer: "World atlas", index: "Place index", guide: "Game guide" }[
      currentPage
    ];
  if (currentPage === "index") renderIndex();
  if (currentPage === "guide") renderGuide();
}
window.addEventListener("hashchange", () => showPage(location.hash.slice(1)));
document
  .querySelectorAll("nav a,.brand,.finder-bottom,.section-heading a")
  .forEach((a) =>
    a.addEventListener("click", () => window.scrollTo({ top: 0 })),
  );

function choosePlace(id, options) {
  const place = places.get(id);
  if (!place) return;
  const fromOther = currentPage !== "explorer";
  navigate("explorer");
  selected = id;
  search.value = place.name;
  atlas.select(place.gameMapOnly ? place.parent : id, options);
  renderFinder();
  if (place.gameMapOnly)
    study.showPinDialog(place.target, study.byId.get(place.parent));
  $("announcement").textContent =
    place.name + ", " + place.kind + ". " + place.ipa;
  if (fromOther) window.scrollTo({ top: 0 });
}
function rowFor(place, i) {
  const row = element("button", "place-row");
  row.type = "button";
  row.tabIndex = -1;
  row.id = "result-" + i;
  row.setAttribute("role", "option");
  row.setAttribute("aria-selected", "false");
  const copy = element("span", "place-copy");
  copy.append(
    element("strong", "", place.name),
    element("span", "ipa", place.ipa),
  );
  const zh = place.zh || window.EDITION.names[place.id]?.zh;
  if (zh) copy.append(element("small", "word-zh", zh));
  const q = normalize(search.value);
  if (
    q &&
    place.capital &&
    normalize(place.capital).includes(q) &&
    !normalize(place.name).includes(q)
  ) {
    copy.append(
      element(
        "small",
        "capital-match",
        place.capital + " " + (place.capitalIpa || ""),
      ),
    );
  }
  row.append(
    flag(place),
    copy,
    element(
      "span",
      "place-tag",
      place.kind === "U.S. state" ? "U.S. state" : place.kind,
    ),
  );
  row.onclick = () => choosePlace(place.id);
  return row;
}
function renderFinder() {
  const query = search.value.trim();
  const quick = !query && !selected;
  document.querySelector(".finder").classList.toggle("is-quick", quick);
  $("clear-search").hidden = !query;
  $("search-hint").hidden = Boolean(query);
  $("place-detail").hidden = !selected;
  results.hidden = Boolean(selected);
  activeIndex = -1;
  search.removeAttribute("aria-activedescendant");
  search.setAttribute("aria-expanded", String(!selected));
  if (selected) {
    $("finder-list-title").textContent = "Selected place";
    $("finder-count").textContent = "";
    renderDetail(places.get(selected));
    return;
  }
  $("finder-list-title").textContent = quick
    ? "Quick locations"
    : "Search results";
  resultPlaces = quick
    ? quickIds.map((id) => places.get(id))
    : rankedSearch(query, places.values());
  $("finder-count").textContent = quick ? "" : String(resultPlaces.length);
  results.replaceChildren();
  resultPlaces.forEach((place, i) => results.append(rowFor(place, i)));
  if (!resultPlaces.length)
    results.append(
      element(
        "p",
        "no-results",
        "No places match “" + query + "”. Try another name, capital, or code.",
      ),
    );
  results.scrollTop = 0;
}
function speak(place, button) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(place.name);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find((v) => /^en[-_]US/i.test(v.lang)) || null;
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.onerror = (e) => {
    if (["interrupted", "canceled"].includes(e.error)) return;
    const message = "Audio is unavailable on this device.";
    button.title = message;
    $("announcement").textContent = message;
    const note = element("span", "ipa", message);
    button.replaceWith(note);
  };
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}
function renderDetail(p) {
  const box = $("place-detail");
  const name = element("div", "detail-title");
  name.append(element("h3", "", p.name));
  const ipa = element("div", "detail-ipa");
  ipa.append(element("span", "ipa", p.ipa));
  if ("speechSynthesis" in window) {
    const btn = element("button", "say");
    btn.title = "Hear " + p.name;
    btn.setAttribute("aria-label", btn.title);
    btn.innerHTML = '<span data-icon="audio">' + icon("audio") + "</span>";
    btn.onclick = () => speak(p, btn);
    ipa.append(btn);
  }
  const facts = element("dl", "detail-facts");
  function fact(key, value, extra) {
    const div = element("div"),
      dd = element("dd", "", value);
    if (extra) dd.append(element("span", "ipa", extra));
    div.append(element("dt", "", key), dd);
    facts.append(div);
  }
  fact("Location", p.region);
  if (!p.target && p.kind !== "City" && !p.labelPoint) {
    fact(
      p.kind === "U.S. state" ? "State capital" : "Capital",
      p.capital || "—",
      p.capitalIpa,
    );
    fact("Area", Number.isFinite(p.area) ? numberOrDash(p.area) + " km²" : "—");
    fact(
      p.popYear ? "Population · " + p.popYear : "Population",
      numberOrDash(p.population),
    );
  }
  function coord(n, pos, neg) {
    return Math.abs(n).toFixed(2) + "° " + (n < 0 ? neg : pos);
  }
  if (Number.isFinite(p.lat) && Number.isFinite(p.lon))
    fact("Map point", coord(p.lat, "N", "S") + ", " + coord(p.lon, "E", "W"));
  box.replaceChildren(element("p", "detail-kicker", p.kind), name, ipa);
  if (p.zh) box.append(element("strong", "word-zh", p.zh));
  if (p.note) box.append(element("p", "pin-lesson-note", p.note));
  if (p.approximate)
    box.append(element("small", "source-small", "美式近似读法"));
  if (p.target) {
    const pinButton = element(
      "button",
      "detail-action",
      "Game pin · 查看游戏落点",
    );
    pinButton.onclick = () =>
      study.showPinDialog(p.target, study.byId.get(p.parent));
    box.append(pinButton);
  }
  if (p.flag) {
    const zoom = element("button", "flag-zoom");
    zoom.type = "button";
    zoom.setAttribute("aria-label", "Enlarge " + p.name + " flag");
    zoom.append(flag(p));
    zoom.onclick = () => study.viewFlag(p);
    box.append(zoom);
  }
  const note = study.placeNote(p);
  if (note) box.append(note);
  box.append(
    element("small", "detail-kicker", "Atlas reference · 地理参考"),
    facts,
  );
  if (p.parent) {
    const btn = element(
      "button",
      "detail-action",
      "Locate " + places.get(p.parent).name,
    );
    btn.onclick = () => choosePlace(p.parent);
    box.append(btn);
  }
}
function clearFinder() {
  search.value = "";
  selected = null;
  atlas.setMode(atlas.mode);
  search.focus();
}
search.addEventListener("input", () => {
  selected = null;
  if (!search.value.trim()) atlas.setMode(atlas.mode);
  else renderFinder();
});
search.addEventListener("blur", () => {
  search.value = search.value.trim();
});
search.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    clearFinder();
    return;
  }
  if (e.key === "Enter" && !selected && resultPlaces.length) {
    e.preventDefault();
    choosePlace(resultPlaces[Math.max(0, activeIndex)].id);
    return;
  }
  if (
    !["ArrowDown", "ArrowUp"].includes(e.key) ||
    !resultPlaces.length ||
    selected
  )
    return;
  e.preventDefault();
  activeIndex =
    activeIndex < 0
      ? e.key === "ArrowDown"
        ? 0
        : resultPlaces.length - 1
      : (activeIndex + (e.key === "ArrowDown" ? 1 : -1) + resultPlaces.length) %
        resultPlaces.length;
  [...results.children].forEach((row, i) => {
    row.classList.toggle("active", i === activeIndex);
    row.setAttribute("aria-selected", String(i === activeIndex));
  });
  const active = results.children[activeIndex];
  search.setAttribute("aria-activedescendant", active.id);
  active.scrollIntoView({ block: "nearest" });
});
$("clear-search").onclick = clearFinder;
document.addEventListener("keydown", (e) => {
  if (
    e.key !== "/" ||
    e.ctrlKey ||
    e.metaKey ||
    e.altKey ||
    document.querySelector("dialog[open]") ||
    e.target.closest("input,textarea,select,[contenteditable]")
  )
    return;
  e.preventDefault();
  if (currentPage === "guide") {
    study.focusLookup();
    return;
  }
  const input = currentPage === "index" ? $("index-search") : search;
  input.focus();
  input.select();
});

function bindQuery(id, render) {
  const input = $(id);
  input.addEventListener("input", render);
  input.addEventListener("blur", () => {
    input.value = input.value.trim();
  });
}
function renderIndex() {
  const sort = $("index-sort").value;
  const matching = rankedSearch($("index-search").value.trim(), window.PLACES);
  if (sort !== "name")
    matching.sort(
      (a, b) =>
        (study.byId.get(b.id)?.[sort] ?? -1) -
          (study.byId.get(a.id)?.[sort] ?? -1) ||
        a.name.localeCompare(b.name, "en"),
    );
  else matching.sort((a, b) => a.name.localeCompare(b.name, "en"));
  $("index-summary").textContent =
    matching.length + " " + (matching.length === 1 ? "place" : "places");
  const rows = document.createDocumentFragment();
  for (const p of matching) {
    const tr = element("tr"),
      td = element("td"),
      btn = element("button", "index-place"),
      name = element("span", "place-copy");
    const local = study.byId.get(p.id);
    name.append(
      element("strong", "", p.name),
      element("span", "ipa", p.ipa),
      element("small", "word-zh", window.EDITION.names[p.id].zh),
    );
    btn.append(flag(p), name);
    btn.onclick = () => choosePlace(p.id);
    td.append(btn);
    const value = local && study.placeCap(local);
    const cap = element("td", "index-capital", value?.en || "—");
    if (value)
      cap.append(
        element("span", "ipa", value.ipa),
        element("small", "word-zh", value.zh),
      );
    const lesson = element("td");
    const go = element(
      "button",
      "detail-action",
      local ? "Game card" : "Atlas card",
    );
    go.onclick = () => (local ? study.openEntry(p.id) : choosePlace(p.id));
    lesson.append(go);
    tr.append(
      td,
      cap,
      element("td", "", p.region),
      element("td", "numeric", numberOrDash(local?.area)),
      element("td", "numeric", numberOrDash(local?.population)),
      lesson,
    );
    rows.append(tr);
  }
  $("index-rows").replaceChildren(rows);
  if (!matching.length)
    $("index-summary").textContent =
      "No matching places. Try another name, code, or capital.";
  document.querySelector(".table-scroll").scrollTop = 0;
}
bindQuery("index-search", renderIndex);
$("index-sort").onchange = renderIndex;

const guide = window.GAME_GUIDE;
const guideGroups = {
  examples: "Game examples",
  modes: "Game modes",
  achievements: "Achievements",
};
let openedRecord = null;
function recordElement(rec) {
  const entry = element("details", "record");
  entry.dataset.id = rec.id;
  entry.open = rec.id === openedRecord;
  const head = element("summary", "", rec.title);
  const body = element("div", "record-body");
  if (rec.answer)
    body.append(
      element(
        "p",
        "",
        (rec.evidence === "Study inference" ? "Suggested match" : "Answer") +
          " · " +
          rec.answer,
      ),
    );
  body.append(element("p", "", rec.detail));
  const meta = [
    rec.mode,
    rec.evidence,
    rec.gamerscore ? rec.gamerscore + "G" : null,
  ]
    .filter(Boolean)
    .join(" · ");
  if (meta) body.append(element("p", "record-meta", meta));
  const links = element("div", "record-links");
  const cityIds = {
    "seoul-pin": "city-seoul",
    "sagrada-pin": "city-barcelona",
  };
  for (const id of [cityIds[rec.id], ...rec.placeIds].filter(Boolean)) {
    if (!places.has(id)) continue;
    const btn = element("button", "detail-action", places.get(id).name);
    btn.title = "Locate on map";
    btn.onclick = () => choosePlace(id);
    links.append(btn);
  }
  const source = element("a", "", "View source");
  source.href = rec.source;
  source.target = "_blank";
  source.rel = "noreferrer";
  links.append(source);
  body.append(links);
  entry.append(head, body);
  return entry;
}
function renderGuide() {
  const query = normalize($("game-search").value).split(" ").filter(Boolean),
    filter = $("game-filter").value,
    box = $("game-records");
  box.replaceChildren();
  for (const [key, title] of Object.entries(guideGroups)) {
    if (filter !== "all" && filter !== key) continue;
    const records = guide[key].filter((r) => {
      const text = normalize(
        [
          r.title,
          r.detail,
          r.answer,
          r.mode,
          r.evidence,
          ...r.keywords,
          ...r.placeIds.map((id) => places.get(id)?.name),
        ]
          .filter(Boolean)
          .join(" "),
      );
      return query.every((word) => text.includes(word));
    });
    if (!records.length) continue;
    box.append(
      element("h2", "records-heading", title + " · " + records.length),
    );
    for (const r of records) box.append(recordElement(r));
  }
  if (!box.children.length)
    box.append(
      element(
        "p",
        "no-results",
        "No matching game records. Try a place, clue word, or game mode.",
      ),
    );
}
bindQuery("game-search", () => {
  openedRecord = null;
  renderGuide();
});
$("game-filter").onchange = renderGuide;

function drawCards() {
  const cards = [
    {
      id: "state-area",
      mode: "Higher or Lower",
      name: "California or Florida?",
      art: "area",
    },
    {
      id: "japan-flag",
      mode: "Match the Flag",
      name: "Recognize Japan",
      art: "flag",
    },
    { id: "seoul-pin", mode: "Pin It", name: "Locate Seoul", art: "pin" },
  ];
  for (const card of cards) {
    const button = element("button", "clue-card"),
      art = element("span", "clue-art");
    art.setAttribute("aria-hidden", "true");
    if (card.art === "area") {
      const s = window.GEOMETRY.world.shapes.find((x) => x.id === "US-CA");
      art.innerHTML =
        '<svg viewBox="0 0 66 58"><rect width="66" height="58" fill="#e4e9d6"/><path d="M0 14h66M0 29h66M0 44h66M16 0v58M33 0v58M50 0v58" stroke="#bdc9ad" stroke-width=".5"/><svg x="10" y="4" width="46" height="50" viewBox="' +
        [
          s.bounds[0],
          s.bounds[1],
          s.bounds[2] - s.bounds[0],
          s.bounds[3] - s.bounds[1],
        ].join(" ") +
        '"><path d="' +
        s.path +
        '" fill="#687f5f"/></svg></svg>';
    } else if (card.art === "flag") {
      art.innerHTML =
        '<svg viewBox="0 0 66 58"><rect width="66" height="58" fill="#edddcd"/><g transform="rotate(-8 33 29)"><rect x="10" y="14" width="46" height="31" rx="1.5" fill="#fffaf0" stroke="#c9bca8"/><circle cx="33" cy="29.5" r="9" fill="#a83e40"/></g></svg>';
    } else {
      const s = window.GEOMETRY.world.shapes.find((x) => x.id === "KOR");
      art.innerHTML =
        '<svg viewBox="0 0 66 58"><rect width="66" height="58" fill="#caddd6"/><path d="M0 13h66M0 29h66M0 44h66M16 0v58M32 0v58M48 0v58" stroke="#94b4a7" stroke-width=".6"/><svg x="8" y="5" width="49" height="48" viewBox="' +
        [
          s.bounds[0],
          s.bounds[1],
          s.bounds[2] - s.bounds[0],
          s.bounds[3] - s.bounds[1],
        ].join(" ") +
        '"><path d="' +
        s.path +
        '" fill="#819d80"/></svg><circle cx="26" cy="16" r="5" fill="#b3623d" stroke="#fff8e8" stroke-width="2"/></svg>';
    }
    const label = element("span");
    label.append(
      element("small", "", card.mode),
      element("strong", "", card.name),
    );
    button.append(art, label);
    button.onclick = () => {
      navigate("guide");
      if (card.art === "area")
        study.startLesson("higher", "US-CA", { field: "area", other: "US-FL" });
      else if (card.art === "flag") study.startLesson("flag", "JPN");
      else study.showCity("Seoul");
    };
    $("clue-cards").append(button);
  }
}
$("sources-open").onclick = () => showDialog($("sources-dialog"));
$("sources-close").onclick = () => $("sources-dialog").close();
$("world-count").textContent = window.PLACES.filter(
  (p) => !p.id.startsWith("US-"),
).length;
drawCards();
const finderStorage = sessionRecord("finder"),
  finderState = finderStorage.read();
selected = places.has(finderState.selected) ? finderState.selected : null;
search.value = selected
  ? places.get(selected).name
  : typeof finderState.query === "string"
    ? finderState.query.trim()
    : "";
if (selected) {
  const place = places.get(selected);
  atlas.select(place.gameMapOnly ? place.parent : selected, { focus: false });
}
atlas.restoreView(finderState.view);
const indexInput = $("index-search"),
  indexOrder = $("index-sort");
indexInput.value =
  typeof finderState.indexQuery === "string"
    ? finderState.indexQuery.trim()
    : "";
if ([...indexOrder.options].some((o) => o.value === finderState.indexOrder))
  indexOrder.value = finderState.indexOrder;
renderFinder();
showPage(location.hash.slice(1));
if (Number.isFinite(finderState.listTop))
  results.scrollTop = finderState.listTop;
const detailPane = document.querySelector(".finder-body");
if (Number.isFinite(finderState.detailTop))
  detailPane.scrollTop = finderState.detailTop;
window.addEventListener("pagehide", () =>
  finderStorage.write({
    selected,
    query: search.value.trim(),
    view: atlas.getView(),
    listTop: results.scrollTop,
    detailTop: detailPane.scrollTop,
    indexQuery: indexInput.value.trim(),
    indexOrder: indexOrder.value,
  }),
);

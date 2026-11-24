"use strict";

// The edition's numeric IDs connect its mode tables. Atlas IDs connect those
// records to independent geography, Chinese names and map geometry.
function createStudyDesk(edition, atlasPlaces, locate, helpers) {
  const { element, normalize, formatNumber } = helpers;
  // These game illustrations omit Taiwan from the outline of China.
  function visibleArt(placeId, kind) {
    return placeId !== "CHN" || !["outline", "puzzle", "comparison"].includes(kind);
  }
  function studyImage(place, kind) {
    return visibleArt(place.id, kind) ? place.images[kind] : undefined;
  }
  const artwork = edition.art.filter((art) => visibleArt(art.atlasId, art.kind));
  const byId = new Map(edition.places.map((p) => [p.id, p]));
  const byGameId = new Map(edition.places.map((p) => [p.gameId, p]));
  const pinsByPlace = Map.groupBy(edition.pins, (p) => p.placeId);
  const souvenirs = Map.groupBy(edition.souvenirs, (s) => s.placeId);
  const souvenirByImage = new Map(edition.souvenirs.map((s) => [s.image, s]));
  const clueSignature = (p) => [...p.clues].sort().join("|");
  const matchingClues = Map.groupBy(
    edition.places.filter((p) => p.clues.length),
    clueSignature,
  );
  const checks = Map.groupBy(edition.corrections, (c) => c.atlasId);
  const puzzlePoints = new Map(edition.puzzles.map((p) => [p.placeId, p]));
  const flags = edition.places.filter((p) => p.images.flag);
  const localArt = Map.groupBy(
    artwork.filter((a) => a.atlasId),
    (a) => a.atlasId,
  );
  const artNames = {
    puzzle: "Puzzle piece · 拼块素材",
    flag: "Flag · 旗帜",
    outline: "Outline · 游戏轮廓",
    comparison: "Comparison shape · 比较图",
    sticker: "Passport sticker · 护照贴纸",
    souvenir: "Souvenir · 纪念品",
  };
  const lessons = {
    take: [
      "Take Me Somewhere",
      "三词猜地点",
      "读出三个英语提示，分别辨认它们所指的事物，再找三条线索共同指向的国家或州。",
      "takeMeSomewhere",
    ],
    flag: [
      "Match the Flag",
      "认国旗和州旗",
      "先读地点和音标，再看旗面的底色、条纹方向与徽记。四面候选旗帜都来自本版游戏。",
      "matchTheFlag",
    ],
    higher: [
      "Higher or Lower",
      "比较大小",
      "先在问句里圈出比较对象。larger 比面积，more people 比人口，more visited 比到访次数。",
      "higherOrLower",
    ],
    souvenir: [
      "Souvenir Sort",
      "纪念品归属",
      "根据物件的外观找对应地点。英文物名与中文释义按画面整理，配对答案来自游戏的货架配置。",
      "souvenirSort",
    ],
    guess: [
      "Guess the Country",
      "读轮廓",
      "先找海岸线或平直边界，再判断轮廓宽窄。细长的陆地与分散的群岛可以先分开记。",
      "guessTheCountry",
    ],
    puzzle: [
      "World Puzzle",
      "辨认拼块",
      "观察游戏里的原始拼块，选出它代表的国家或州。答题后可打开世界地图，对照周边位置。",
      "worldPuzzle",
    ],
    passport: [
      "Passport Please",
      "核对护照",
      "依次核对国名、首都、旗帜和大洲。练习会有意替换一项，你要指出是哪一栏。",
      "passportPlease",
    ],
    pin: [
      "Pin It",
      "地图标点",
      "先判断它是首都、州府还是地标，再在游戏底图上点选位置。提交后可比较你的落点和游戏答案。",
      "pinItCapitals",
    ],
    tour: [
      "World Tour",
      "混合复习",
      "轮换上面的练习。遇到陌生词时先读音标，再回想中文释义，最后核对游戏采用的答案。",
      null,
    ],
  };
  const $ = (id) => document.getElementById(id);
  const zh = (p) => edition.names[p.id]?.zh ?? p.name;
  const ipa = (p) => p.gameIpa || atlasPlaces.get(p.id)?.ipa || "";
  const joined = (v, separator = " · ") => v.filter(Boolean).join(separator);
  const num = (n) => (Number.isFinite(n) ? formatNumber.format(n) : "—");
  const language = (el) => {
    el.lang = "zh-Hans";
    return el;
  };
  const chinese = (tag, style, text) => language(element(tag, style, text));
  const readout = (en, reading, translation) => {
    const box = element("span", "word-stack");
    box.append(element("strong", "", en));
    if (reading) box.append(element("span", "ipa", reading));
    if (translation) box.append(chinese("span", "word-zh", translation));
    return box;
  };
  function picture(src, alt, cls = "study-image") {
    const img = element("img", cls);
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }
  function action(text, callback, cls = "detail-action") {
    const btn = element("button", cls, text);
    btn.type = "button";
    btn.onclick = callback;
    return btn;
  }
  function external(text, url) {
    const a = element("a", "text-link", text);
    a.href = url;
    a.target = "_blank";
    a.rel = "noreferrer";
    return a;
  }
  const placeCap = (p) => {
    const base = atlasPlaces.get(p.id),
      reference = edition.names[p.id];
    if (!p.capital) return null;
    if (p.capitalReading)
      return {
        en: p.capital,
        ipa: p.capitalReading[0],
        zh: p.capitalReading[1],
      };
    const split = String(base?.capital ?? "").split(" · ");
    let index = split.findIndex(
      (v) => normalize(v.split(" (")[0]) === normalize(p.capital),
    );
    if (index < 0) index = 0;
    const zhCapital = reference?.capitalZh || "";
    const choices = zhCapital.split(/\s*[·／]\s*/);
    return {
      en: p.capital,
      ipa: base?.capitalIpa?.split(" · ")[index] || "",
      zh: choices.length === split.length ? choices[index] : zhCapital,
    };
  };
  const clueWords = (p) =>
    p.clues.map((k) => edition.vocabulary.glossary[k]).filter(Boolean);
  function clueExplanation(p) {
    const box = element("div", "teaching-explanation");
    const list = element("dl", "clue-reasons");
    for (const key of p.clues) {
      const word = edition.vocabulary.glossary[key];
      list.append(
        element("dt", "", joined([word.en, word.zh])),
        chinese("dd", "", edition.clueReasons[p.id][key]),
      );
    }
    box.append(list);
    const others = matchingClues
      .get(clueSignature(p))
      .filter((other) => other.id !== p.id);
    if (others.length)
      box.append(
        chinese(
          "p",
          "shared-clue-note",
          "同一组三个词也出现在" +
            others
              .map((other) => zh(other) + "（" + other.name + "）")
              .join("、") +
            "的游戏题目中。仅凭这三条线索，两地都说得通。",
        ),
      );
    if (edition.noteSources[p.id])
      box.append(external("Source · 讲解出处", edition.noteSources[p.id]));
    return box;
  }
  function souvenirOrigin(s) {
    const owner = byGameId.get(s.placeId);
    const name = atlasPlaces.get(owner.id)?.name || owner.name;
    if (owner.type === "USA_State") return name + ", USA · 美国" + zh(owner);
    if (owner.id === "GRL")
      return name + " · " + zh(owner) + "（丹麦王国自治地区）";
    return joined([name, zh(owner)]);
  }
  function souvenirExplanation(s) {
    const box = element("div", "teaching-explanation");
    const owner = byGameId.get(s.placeId);
    box.append(
      element("strong", "souvenir-origin", souvenirOrigin(s)),
      chinese("p", "", s.teachingNote),
    );
    if (!s.linkedInSouvenirSort)
      box.append(
        chinese(
          "p",
          "source-small",
          "这件物品收在该地点的游戏素材中，本版纪念品配对题使用的是另一件。",
        ),
      );
    else if (atlasPlaces.get(owner.id)?.name !== owner.name)
      box.append(
        chinese(
          "p",
          "source-small",
          "游戏货架的英文写作 “" + owner.name + "”。",
        ),
      );
    if (s.teachingSource)
      box.append(external("Source · 讲解出处", s.teachingSource));
    return box;
  }
  function showSouvenir(s) {
    const content = souvenirExplanation(s);
    content.append(
      element("small", "source-small", "Game asset · " + s.assetAddress),
    );
    showPicture(s.image, s.english, s.chinese + "  /" + s.ipa + "/", {
      content,
    });
  }
  const learningPin = (t, p) =>
    t.variant === "Landmark"
      ? edition.landmarks[t.key]
      : { ...placeCap(p), note: edition.capitalLessons[p.id]?.note };
  const numberFields = {
    area: ["Area", "面积", "km²"],
    population: ["Population", "人口", ""],
    visits: ["Visits", "到访次数", ""],
  };
  function locatorButton(p) {
    const button = action(
      "Locate on atlas · 地图定位",
      () => locate(p.id),
      "detail-action entry-locator",
    );
    button.setAttribute("aria-haspopup", "dialog");
    return button;
  }
  function vocabularyCard(word, showTranslation = true) {
    const text = readout(word.en, word.ipa, showTranslation ? word.zh : null);
    const art = word.illustration;
    if (!art) return text;
    const card = element("div", "clue-card-row");
    const zoom = action(
      "",
      () =>
        showPicture(art.src, word.en, showTranslation ? word.zh : "", { art }),
      "clue-thumbnail",
    );
    zoom.setAttribute("aria-label", "Enlarge illustration · " + word.en);
    zoom.append(picture(art.src, "", "clue-image"));
    card.append(zoom, text);
    return card;
  }
  function wordList(words) {
    const list = element("div", "vocab-grid");
    for (const w of words) list.append(vocabularyCard(w));
    return list;
  }
  function placeNote(base) {
    const record = byId.get(base.id),
      name = edition.names[base.id];
    if (!name) return null;
    const box = element("section", "chinese-note");
    box.append(chinese("strong", "", name.zh));
    let term = "Country",
      explanation = "country 表示国家。";
    if (base.kind === "U.S. state") {
      term = "State";
      explanation =
        "U.S. state 指美国的州；州政府所在地叫 state capital（州府）。";
    } else if (base.kind === "Federal district") {
      term = "FederalDistrict";
      explanation =
        "federal district 指联邦特区。华盛顿特区是美国首都，华盛顿州位于美国西北部。";
    } else if (base.kind !== "Country") {
      term = "Territory";
      explanation =
        base.kind === "Territory"
          ? "territory 指属地或领地。"
          : "region 指地区，地理区域可以单独列入地图。";
    }
    const first =
      base.kind === "Region"
        ? { en: "region", ipa: "/ˈridʒən/", zh: "地区，区域。" }
        : edition.vocabulary.core[term];
    box.append(
      chinese(
        "p",
        "",
        explanation +
          (name.capitalZh
            ? " 地图参考资料中的行政中心为" + name.capitalZh + "。"
            : ""),
      ),
    );
    const note = edition.placeNotes?.[base.id];
    if (note) box.append(chinese("p", "", note));
    if (edition.noteSources[base.id])
      box.append(external("Source · 讲解出处", edition.noteSources[base.id]));
    const words =
      record && record.clues.length
        ? clueWords(record)
        : [
            first,
            edition.vocabulary.core[
              base.kind === "U.S. state" ? "Capital" : "Flag"
            ],
          ];
    box.append(wordList(words));
    const item = (souvenirs.get(record?.gameId) || [])[0];
    const art =
      (localArt.get(base.id) || []).find((a) => a.kind === "sticker") ||
      (localArt.get(base.id) || []).find((a) => a.kind === "puzzle");
    if (item || art) {
      const src = item?.image || art.src,
        label = item ? item.english + " · " + item.chinese : artNames[art.kind];
      const illustration = action(
        "",
        () => (item ? showSouvenir(item) : showPicture(src, base.name, label)),
        "place-illustration",
      );
      illustration.append(picture(src, label), element("span", "", label));
      box.append(illustration);
    }
    if (record)
      box.append(
        action("Open study card · 特色与配图", () => openEntry(record.id)),
      );
    return box;
  }
  function entryDetails(
    p,
    { openNeighbor = openEntry, withLocator = true } = {},
  ) {
    const box = element("div", "entry-details");
    const base = atlasPlaces.get(p.id),
      cap = placeCap(p),
      glossary = clueWords(p);
    const heading = element("div", "entry-heading");
    heading.append(readout(p.name, ipa(p), zh(p)));
    if (withLocator && base) heading.append(locatorButton(p));
    box.append(heading);
    if (edition.placeNotes?.[p.id])
      box.append(chinese("p", "place-explainer", edition.placeNotes[p.id]));
    if (edition.noteSources[p.id])
      box.append(external("Source · 讲解出处", edition.noteSources[p.id]));
    const facts = element("dl", "edition-facts");
    function fact(title, value) {
      const cell = element("div");
      cell.append(
        element("dt", "", title),
        typeof value === "string" ? element("dd", "", value) : value,
      );
      facts.append(cell);
    }
    fact(
      p.type === "USA_State" ? "State capital · 州府" : "Capital · 游戏首都",
      cap ? readout(cap.en, cap.ipa, cap.zh) : "—",
    );
    fact(
      "Game region · 地区",
      p.parent
        ? {
            northAmerica: "North America · 北美洲",
            southAmerica: "South America · 南美洲",
            asia: "Asia · 亚洲",
            europe: "Europe · 欧洲",
            africa: "Africa · 非洲",
            australia: "Oceania · 大洋洲",
          }[p.parent] || p.parent
        : "—",
    );
    for (const [key, [en, cn, unit]] of Object.entries(numberFields))
      fact(
        en + " · " + cn,
        Number.isFinite(p[key]) ? num(p[key]) + (unit ? " " + unit : "") : "—",
      );
    box.append(facts);
    if (edition.capitalLessons[p.id])
      box.append(
        chinese("p", "pin-lesson-note", edition.capitalLessons[p.id].note),
      );
    if (glossary.length) {
      box.append(
        element("h4", "", "Clue vocabulary · 游戏线索词"),
        wordList(glossary),
      );
      const why = element("details", "clue-disclosure");
      why.append(
        element("summary", "", "Why these clues? · 逐词看原因"),
        clueExplanation(p),
      );
      box.append(why);
    }
    if (p.neighbors?.length) {
      const neighbors = element("div", "entry-buttons");
      box.append(element("h4", "", "Nearby entries · 游戏邻接名单"));
      for (const id of p.neighbors) {
        const other = byGameId.get(String(id));
        if (other)
          neighbors.append(
            action(other.name + " · " + zh(other), () =>
              openNeighbor(other.id),
            ),
          );
      }
      box.append(neighbors);
    }
    const used = Object.values(lessons)
      .filter((rule) => rule[3] && p.modes.includes(rule[3]))
      .map((rule) => rule[0]);
    box.append(
      element("p", "source-small", "Included in · " + used.join(" / ")),
    );
    const pins = pinsByPlace.get(p.id) || [];
    if (pins.length) {
      box.append(element("h4", "", "Pin It · 游戏落点"));
      const chips = element("div", "entry-buttons");
      for (const t of pins) {
        const datum = learningPin(t, p),
          row = element("article", "pin-summary");
        row.append(readout(t.target, datum.ipa, datum.zh));
        if (datum.approximate)
          row.append(chinese("small", "source-small", "美式近似读法"));
        if (t.variant === "Landmark")
          row.append(chinese("p", "pin-lesson-note", datum.note));
        row.append(
          action("Show game pin · 查看落点", () => showPinDialog(t, p)),
        );
        chips.append(row);
      }
      box.append(chips);
    }
    const media = element("div", "study-gallery"),
      shown = new Set();
    function thumb(src, en, title, reading = "") {
      if (!src || shown.has(src)) return;
      shown.add(src);
      const fig = element("figure");
      const souvenir = souvenirByImage.get(src);
      const btn = action(
        "",
        () => (souvenir ? showSouvenir(souvenir) : showPicture(src, en, title)),
        "enlarge-art",
      );
      btn.setAttribute("aria-label", "Enlarge " + en);
      btn.append(picture(src, en));
      if (src.endsWith("/tw.svg")) btn.classList.add("masked-flag");
      fig.append(btn);
      const caption = element("figcaption");
      caption.append(readout(en, reading, title));
      fig.append(caption);
      media.append(fig);
    }
    thumb(p.images.flag, "Flag", "游戏旗帜");
    thumb(studyImage(p, "outline"), "Outline", "猜地轮廓");
    thumb(studyImage(p, "puzzle"), "Puzzle piece", "游戏拼块");
    if (!p.images.flag && base?.flag)
      thumb(base.flag, "Atlas flag", "地图参考图 · 本版地点表未提供旗帜");
    thumb(studyImage(p, "comparison"), "Comparison outline", "大小比较轮廓");
    for (const [i, img] of p.images.stickers.entries())
      thumb(img, "Passport sticker " + (i + 1), "游戏贴纸");
    for (const s of souvenirs.get(p.gameId) || [])
      thumb(
        s.image,
        s.english,
        s.chinese + (s.linkedInSouvenirSort ? " · 已绑定货架" : " · 素材图"),
        "/" + s.ipa + "/",
      );
    for (const a of localArt.get(p.id) || [])
      thumb(
        a.src,
        artNames[a.kind]?.split(" · ")[0] || p.name,
        (artNames[a.kind]?.split(" · ")[1] || "配图") + " · 额外素材",
      );
    if (p.passport?.ContinentImageAddress) {
      const a = artwork.find(
        (a) => a.key === p.passport.ContinentImageAddress,
      );
      if (a) thumb(a.src, a.en, a.zh + " · 护照原图", a.ipa);
    }
    if (media.children.length) box.append(media);
    if (!p.images.outline && p.modes.includes("guessTheCountry"))
      box.append(
        chinese(
          "p",
          "source-small",
          "本版有这条地点记录，安装包中没有它所引用的猜地轮廓图。",
        ),
      );
    if (Object.keys(p.modeDifficulty).length) {
      const details = element("details", "rule-index");
      details.append(
        element("summary", "", "Game difficulty · 各玩法原始难度"),
      );
      for (const [key, difficulty] of Object.entries(p.modeDifficulty)) {
        const title =
          Object.values(lessons).find((l) => l[3] === key)?.[0] ||
          (key === "pinItLandmarks" ? "Pin It · Landmarks" : key);
        details.append(
          element("p", "source-small", title + " · " + difficulty),
        );
      }
      const puzzle = puzzlePoints.get(p.id);
      if (puzzle)
        details.append(
          chinese(
            "p",
            "source-small",
            "游戏拼块中心位于参考画布的横坐标 " +
              puzzle.pixelX +
              "、纵坐标 " +
              puzzle.pixelY +
              " 像素。",
          ),
        );
      box.append(details);
    }
    for (const c of checks.get(p.id) || []) box.append(checkCard(c));
    box.append(
      element(
        "p",
        "source-small",
        "Geo Book " +
          edition.version +
          " · place ID " +
          p.gameId +
          " · " +
          (p.nameKey || "scene asset row"),
      ),
    );
    return box;
  }
  function checkCard(c) {
    const box = element("article", "check-card");
    box.append(
      element("small", "eyebrow", c.category),
      element("h4", "", atlasPlaces.get(c.atlasId)?.name || c.atlasId),
    );
    const dl = element("dl", "compare-facts");
    for (const [title, value] of [
      ["In game · 游戏", c.gameValue],
      ["Reference · 核对", c.referenceValue],
    ]) {
      const cell = element("div");
      cell.append(element("dt", "", title), element("dd", "", value));
      dl.append(cell);
    }
    box.append(dl, chinese("p", "", c.zh));
    box.append(external(c.sourceLabel, c.sourceUrl));
    for (const link of c.additionalSources || []) {
      if (link.url)
        box.append(external(link.label || "Additional source", link.url));
    }
    return box;
  }
  function mapPlate(target, guess = null) {
    const frame = element("div", "game-map-plate");
    const img = picture(
      "assets/game/pin-map.webp",
      "Geo Book world map",
      "game-map-image",
    );
    frame.append(img);
    function dot(x, y, type, desc) {
      const d = element("span", "game-dot " + type);
      d.style.left = x * 100 + "%";
      d.style.top = y * 100 + "%";
      d.title = desc;
      d.setAttribute("aria-label", desc);
      frame.append(d);
    }
    if (target) dot(target.x, 1 - target.y, "correct", "Game target");
    if (guess) dot(guess.x, guess.y, "guess", "Your pin");
    return frame;
  }
  function showPinDialog(t, p) {
    const dialog = element("dialog", "pin-dialog");
    dialog.setAttribute("aria-label", t.target);
    const head = element("div", "dialog-top");
    head.append(
      element("h2", "", t.target),
      action("Close", () => dialog.close()),
    );
    const info = learningPin(t, p);
    dialog.append(
      head,
      readout(t.target, info?.ipa, info?.zh),
      chinese("p", "pin-lesson-note", info.note),
      mapPlate(t),
      element(
        "p",
        "source-small",
        p.name +
          " · " +
          t.variant +
          " · Game pixel (" +
          t.pixelX +
          ", " +
          t.pixelY +
          ") on 5272 × 3100",
      ),
    );
    if (info.approximate)
      dialog.append(
        chinese("p", "source-small", "此专名采用美式英语近似读法。"),
      );
    showDialog(dialog);
  }
  function showPicture(src, en, cn, { art, content } = {}) {
    const dialog = element("dialog", "picture-dialog");
    dialog.setAttribute("aria-label", en);
    const head = element("div", "dialog-top");
    head.append(
      element("h2", "", en),
      action("Close", () => dialog.close()),
    );
    const wrap = element("div", "picture-preview");
    if (/(?:\/tw\.svg|flag_of_taiwan)/i.test(src))
      wrap.classList.add("masked-flag");
    wrap.append(picture(src, en, "large-picture"));
    dialog.append(head, wrap);
    if (cn) dialog.append(chinese("p", "", cn));
    if (content) dialog.append(content);
    if (art) {
      const credit = element("div", "illustration-credit");
      if (art.kind === "commons" || art.kind === "pictogram") {
        if (art.kind === "pictogram")
          credit.append(chinese("span", "", "词义示意 · "));
        credit.append(
          external(art.subject, art.source),
          document.createTextNode(" · " + art.credit + " · "),
        );
        if (art.licenseUrl)
          credit.append(external(art.license, art.licenseUrl));
        else credit.append(document.createTextNode(art.license));
      } else {
        credit.append(
          chinese(
            "span",
            "",
            art.kind === "game"
              ? "游戏原图 · " + art.credit + " · " + art.caption
              : "教学示意图 · " + art.credit,
          ),
        );
      }
      dialog.append(credit);
    }
    showDialog(dialog);
  }
  const listed = edition.places
    .map((p) => {
      const base = atlasPlaces.get(p.id),
        related = pinsByPlace.get(p.id) || [];
      const names = [
        p.name,
        base?.name,
        zh(p),
        base?.aliases?.join(" "),
        p.capital,
        edition.names[p.id]?.capitalZh,
        ...clueWords(p).flatMap((w) => [w.en, w.zh]),
        ...related.flatMap((t) => [t.target, edition.landmarks[t.key]?.zh]),
        ...(souvenirs.get(p.gameId) || []).flatMap((s) => [
          s.english,
          s.chinese,
        ]),
      ];
      return { p, text: normalize(names.filter(Boolean).join(" ")) };
    })
    .sort((a, b) => a.p.name.localeCompare(b.p.name, "en"));
  const saved = helpers.storage.read();
  let library =
    saved.library && typeof saved.library === "object" ? saved.library : {};
  const validTabs = ["practice", "lookup", "library", "checks"];
  const validPlaces = (ids) =>
    new Set(Array.isArray(ids) ? ids.filter((id) => byId.has(id)) : []);
  const opened = validPlaces(saved.opened);
  const openDifficulties = validPlaces(saved.openDifficulties);
  const openReasons = validPlaces(saved.openReasons);
  let tab = validTabs.includes(saved.tab) ? saved.tab : "practice",
    mode = Object.hasOwn(lessons, saved.mode) ? saved.mode : "take",
    query = typeof saved.query === "string" ? saved.query.trim() : "",
    page = Number.isSafeInteger(saved.page) && saved.page >= 0 ? saved.page : 0,
    session = null,
    tourStep =
      Number.isSafeInteger(saved.tourStep) && saved.tourStep >= 0
        ? saved.tourStep
        : 0,
    lastPrompt = byId.has(saved.lastPrompt) ? saved.lastPrompt : "";
  const modes = Object.keys(lessons).filter((k) => k !== "tour");
  const parts = $("study-content");
  function saveStudy(scrollY) {
    helpers.storage.write({
      tab,
      mode,
      query,
      page,
      opened: [...opened],
      openDifficulties: [...openDifficulties],
      openReasons: [...openReasons],
      tourStep,
      lastPrompt,
      scrollY,
      library,
    });
  }
  window.addEventListener("pagehide", () => {
    if (tab === "lookup") {
      for (const entry of parts.querySelectorAll(".game-entry")) {
        if (entry.open) opened.add(entry.dataset.place);
        else opened.delete(entry.dataset.place);
      }
    }
    saveStudy(
      tab === "lookup" && location.hash === "#guide"
        ? window.scrollY
        : undefined,
    );
  });
  function goTab(next) {
    tab = next;
    for (const b of document.querySelectorAll("[data-study-tab]"))
      b.setAttribute("aria-pressed", b.dataset.studyTab === tab);
    parts.replaceChildren();
    if (tab === "practice") renderPractice();
    if (tab === "lookup") renderLookup();
    if (tab === "library") renderLibrary();
    if (tab === "checks") renderChecks();
    saveStudy();
  }
  document
    .querySelectorAll("[data-study-tab]")
    .forEach((b) => (b.onclick = () => goTab(b.dataset.studyTab)));
  function openEntry(id) {
    document.getElementById("public-records").open = false;
    if (location.hash !== "#guide") location.hash = "guide";
    query = byId.get(id).name;
    page = 0;
    opened.clear();
    opened.add(id);
    goTab("lookup");
    // Names such as Georgia require the numeric place identity to open the correct row.
    requestAnimationFrame(() =>
      $("study-desk").scrollIntoView({ block: "start" }),
    );
  }
  const randomPool = edition.places.filter((p) =>
    ["Country", "U.S. state"].includes(atlasPlaces.get(p.id)?.kind),
  );
  let randomId;
  function displayRandomCard(id) {
    randomId = id;
    const p = byId.get(id),
      base = atlasPlaces.get(id);
    const body = $("random-content");
    const kind =
      { Country: "Country · 国家", "U.S. state": "U.S. state · 美国州" }[
        base.kind
      ] || base.kind;
    const heading = element("div", "random-place-kind");
    heading.append(flag(base), element("span", "", kind));
    body.replaceChildren(
      heading,
      entryDetails(p, {
        openNeighbor: (neighborId) => {
          displayRandomCard(neighborId);
          $("random-next").focus({ preventScroll: true });
        },
      }),
    );
    body.scrollTop = 0;
    $("random-status").textContent = p.name + " · " + zh(p);
  }
  function drawRandomPlace() {
    const lastName = byId.get(randomId)?.name;
    const next = shuffle(randomPool).find((p) => p.name !== lastName);
    displayRandomCard(next.id);
  }
  $("random-place").onclick = () => {
    drawRandomPlace();
    showDialog($("random-dialog"));
    $("random-content").scrollTop = 0;
  };
  $("random-next").onclick = drawRandomPlace;
  function renderChecks() {
    parts.append(
      element("h2", "study-title", "Reading the evidence"),
      chinese(
        "p",
        "study-intro",
        "先看游戏怎么判，再查现实地理。下列项目已经逐项核对；统计年份、四舍五入和拼写差异各有各的原因。",
      ),
    );
    for (const c of edition.corrections) parts.append(checkCard(c));
    for (const n of edition.checks) {
      const a = element("article", "study-note");
      a.append(element("h4", "", n.title), chinese("p", "", n.zh));
      if (n.url) a.append(external(n.label, n.url));
      parts.append(a);
    }
  }
  function renderLibrary() {
    const categories = {
      flag: "Flags · 旗帜",
      outline: "Outlines · 轮廓",
      puzzle: "Puzzle pieces · 拼块",
      comparison: "Comparison shapes · 比较图",
      souvenir: "Souvenirs · 纪念品",
      sticker: "Passport stickers · 护照贴纸",
      continent: "Continents · 大洲",
    };
    let selectedKind = Object.hasOwn(categories, library.selectedKind)
        ? library.selectedKind
        : "flag",
      pageNo = Number.isSafeInteger(library.pageNo) ? library.pageNo : 0,
      phrase = typeof library.phrase === "string" ? library.phrase.trim() : "";
    const header = element("div", "reference-tools study-tools"),
      search = element("input"),
      bar = element("div", "search-bar wide"),
      choice = element("select"),
      body = element("div");
    search.type = "search";
    search.placeholder = "Search artwork · 搜地点、物件或文件名";
    search.setAttribute("aria-label", "Search artwork");
    bar.append(search);
    choice.setAttribute("aria-label", "Image category");
    for (const [key, text] of Object.entries(categories))
      choice.add(new Option(text, key));
    choice.value = selectedKind;
    search.value = phrase;
    header.append(bar, choice);
    parts.append(
      header,
      chinese(
        "p",
        "study-intro",
        "这里可看本地游戏包中的学习配图。部分素材没有对应出题行；能否出题，以地点卡列出的玩法为准。点击图片可以放大。",
      ),
      body,
    );
    function draw() {
      const list = artwork
        .filter((a) => a.kind === selectedKind)
        .filter((a) => {
          const p = byGameId.get(String(a.gameId)),
            s = souvenirByImage.get(a.src);
          return normalize(
            joined([
              a.key,
              a.en,
              a.zh,
              p?.name,
              p && zh(p),
              s?.english,
              s?.chinese,
              s && souvenirOrigin(s),
            ]),
          ).includes(normalize(phrase));
        });
      const size = 20;
      pageNo = Math.max(0, Math.min(pageNo, Math.ceil(list.length / size) - 1));
      library = { selectedKind, phrase, pageNo };
      saveStudy();
      body.replaceChildren(
        element(
          "p",
          "result-summary",
          list.length +
            " images · " +
            (list.length ? pageNo * size + 1 : 0) +
            "–" +
            Math.min(list.length, (pageNo + 1) * size),
        ),
      );
      const grid = element("div", "art-catalog");
      for (const a of list.slice(pageNo * size, (pageNo + 1) * size)) {
        const p = byGameId.get(String(a.gameId)),
          s = souvenirByImage.get(a.src);
        const title = s?.english || p?.name || a.en;
        const cn = s?.chinese || (p ? zh(p) : a.zh);
        const tile = action(
          "",
          () =>
            s ? showSouvenir(s) : showPicture(a.src, title, cn + " · " + a.key),
          "art-tile",
        );
        tile.append(
          picture(a.src, title),
          readout(title, s ? "/" + s.ipa + "/" : p ? ipa(p) : a.ipa, cn),
        );
        if (s)
          tile.append(element("span", "souvenir-origin", souvenirOrigin(s)));
        grid.append(tile);
      }
      body.append(grid);
      if (list.length > size) {
        const pager = element("div", "page-buttons");
        const prev = action("Previous", () => {
            pageNo--;
            draw();
          }),
          next = action("Next", () => {
            pageNo++;
            draw();
          });
        prev.disabled = pageNo === 0;
        next.disabled = (pageNo + 1) * size >= list.length;
        pager.append(
          prev,
          element(
            "span",
            "",
            "Page " + (pageNo + 1) + " / " + Math.ceil(list.length / size),
          ),
          next,
        );
        body.append(pager);
      }
    }
    search.oninput = () => {
      phrase = search.value.trim();
      pageNo = 0;
      draw();
    };
    search.onblur = () => {
      search.value = phrase;
    };
    choice.onchange = () => {
      selectedKind = choice.value;
      pageNo = 0;
      draw();
    };
    draw();
  }
  function renderLookup() {
    const tools = element("div", "reference-tools study-tools");
    const input = element("input");
    input.type = "search";
    input.placeholder = "Place, capital, clue, 地名或中文释义…";
    input.setAttribute("aria-label", "Search installed game data");
    input.value = query;
    const field = element("div", "search-bar wide");
    field.append(input);
    tools.append(field);
    parts.append(tools);
    const out = element("div");
    parts.append(out);
    function refresh() {
      const terms = normalize(query).split(" ").filter(Boolean);
      const all = listed.filter(({ text }) =>
        terms.every((t) => text.includes(t)),
      );
      const size = 16;
      page = Math.max(0, Math.min(page, Math.ceil(all.length / size) - 1));
      out.replaceChildren(
        element(
          "p",
          "result-summary",
          all.length +
            " game places · " +
            (all.length ? page * size + 1 : 0) +
            "–" +
            Math.min(all.length, (page + 1) * size),
        ),
      );
      for (const { p } of all.slice(page * size, (page + 1) * size)) {
        const details = element("details", "game-entry"),
          summary = element("summary");
        details.dataset.place = p.id;
        if (p.images.flag)
          summary.append(picture(p.images.flag, "", "summary-flag"));
        const identity = element("span", "entry-identity");
        identity.append(
          element("strong", "", p.name),
          chinese("span", "entry-zh", zh(p)),
          element("span", "ipa", ipa(p)),
        );
        summary.append(identity);
        if (atlasPlaces.has(p.id)) summary.append(locatorButton(p));
        details.append(summary);
        function populate() {
          if (details.children.length !== 1) return;
          const content = entryDetails(p, { withLocator: false });
          for (const [selector, expanded] of [
            ["details.rule-index", openDifficulties],
            ["details.clue-disclosure", openReasons],
          ]) {
            const section = content.querySelector(selector);
            if (!section) continue;
            section.open = expanded.has(p.id);
            section.ontoggle = () => {
              if (!section.isConnected) return;
              if (section.open) expanded.add(p.id);
              else expanded.delete(p.id);
              saveStudy();
            };
          }
          details.append(content);
        }
        if (opened.has(p.id)) {
          populate();
          details.open = true;
        }
        details.ontoggle = () => {
          if (!details.isConnected) return;
          if (details.open) {
            populate();
            opened.add(p.id);
          } else opened.delete(p.id);
          saveStudy();
        };
        out.append(details);
      }
      if (!all.length)
        out.append(
          chinese(
            "p",
            "no-results",
            "没有匹配的游戏地点。试试英文名、州名、地标名，或一个更短的中文关键词。",
          ),
        );
      if (all.length > size) {
        const nav = element("div", "page-buttons"),
          prev = action("Previous", () => {
            page--;
            refresh();
          }),
          next = action("Next", () => {
            page++;
            refresh();
          });
        prev.disabled = page === 0;
        next.disabled = (page + 1) * size >= all.length;
        nav.append(
          prev,
          element(
            "span",
            "",
            "Page " + (page + 1) + " / " + Math.ceil(all.length / size),
          ),
          next,
        );
        out.append(nav);
      }
      saveStudy();
    }
    input.oninput = () => {
      query = input.value.trim();
      opened.clear();
      page = 0;
      refresh();
    };
    input.onblur = () => {
      input.value = query;
    };
    refresh();
  }
  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function options(correct, pool, count = 4) {
    return shuffle([
      correct,
      ...shuffle(
        pool.filter((p) => p.id !== correct.id && p.name !== correct.name),
      ).slice(0, count - 1),
    ]);
  }
  function promptFor(chosenMode, preferred, comparison) {
    const key =
      chosenMode === "tour" ? modes[tourStep++ % modes.length] : chosenMode;
    const eligible = edition.places.filter((p) =>
      p.modes.includes(lessons[key][3]),
    );
    const first = eligible.find((p) => p.id === preferred);
    const validPool =
      key === "guess"
        ? eligible.filter((p) => studyImage(p, "outline"))
        : key === "puzzle"
          ? eligible.filter((p) => studyImage(p, "puzzle"))
          : eligible;
    const p =
      (first && validPool.includes(first) ? first : null) ||
      shuffle(validPool).find((candidate) => candidate.id !== lastPrompt) ||
      validPool[0];
    const q = { key, p, choices: [], correct: p.id, answered: false };
    lastPrompt = p.id;
    if (key === "higher") {
      const field = comparison?.field || shuffle(Object.keys(numberFields))[0];
      const other =
        byId.get(comparison?.other) ||
        shuffle(eligible).find((v) => v[field] !== p[field]);
      q.field = field;
      q.choices = shuffle([p, other]);
      q.correct = (other[field] > p[field] ? other : p).id;
      q.title = {
        area: "Which is larger?",
        population: "Which has more people?",
        visits: "Which is more visited?",
      }[field];
    } else if (key === "passport") {
      const which = shuffle(["Name", "Capital", "Flag", "Continent"])[0];
      const different = shuffle(eligible).find(
        (v) =>
          v.id !== p.id && v.capital !== p.capital && v.parent !== p.parent,
      );
      q.which = which;
      q.other = different;
      q.correct = which;
      q.title = "Which passport field is incorrect?";
    } else if (key === "pin") {
      const target = shuffle(edition.pins.filter((t) => t.placeId === p.id))[0];
      q.target = target;
      q.title = "Pin " + target.target;
    } else {
      let candidates = key === "flag" ? flags : validPool;
      if (key === "take") {
        const sameClues = matchingClues.get(clueSignature(p));
        candidates = candidates.filter((other) => !sameClues.includes(other));
      }
      q.choices = options(p, candidates);
      q.title = {
        take: "Which place fits these three clues?",
        flag: "Find the flag of " + p.name,
        souvenir: "Which shelf does this souvenir belong on?",
        guess: "Which place has this outline?",
        puzzle: "Which place does this puzzle piece represent?",
      }[key];
      if (key === "souvenir")
        q.souvenir = (souvenirs.get(p.gameId) || []).find(
          (s) => s.linkedInSouvenirSort,
        );
    }
    return q;
  }
  function renderPractice() {
    if (!session)
      session = promptFor(
        mode,
        !lastPrompt && mode === "take" ? "US-FL" : null,
      );
    const q = session,
      p = q.p;
    const section = element("div", "lesson-layout"),
      top = element("div", "lesson-top");
    const modeField = element("label", "select-label", "Lesson · 选择玩法");
    const picker = element("select");
    picker.id = "study-mode";
    for (const [key, [title, cn]] of Object.entries(lessons))
      picker.add(new Option(title + " · " + cn, key));
    picker.value = mode;
    modeField.append(picker);
    picker.onchange = () => {
      mode = picker.value;
      session = promptFor(mode);
      goTab("practice");
    };
    top.append(
      modeField,
      element("span", "version-stamp", "Xbox PC · " + edition.version),
    );
    const main = element("article", "prompt-card"),
      aside = element("aside", "lesson-context");
    const hasExplanation = q.key === "take" || q.key === "souvenir";
    main.append(
      element("small", "eyebrow", lessons[q.key][0]),
      element("h2", "study-title", q.title),
    );
    function answer(value, point = null) {
      if (q.answered) return;
      q.answered = true;
      q.answer = value;
      q.point = point;
      goTab("practice");
      if (hasExplanation) {
        const feedback = parts.querySelector(".feedback");
        feedback.focus({ preventScroll: true });
        feedback.scrollIntoView({ block: "nearest" });
      }
    }
    if (q.key === "take") {
      const group = element("div", "clue-words");
      for (const w of clueWords(p)) group.append(vocabularyCard(w, q.answered));
      main.append(group);
    } else if (["guess", "puzzle", "souvenir"].includes(q.key)) {
      const src =
        q.key === "souvenir"
          ? q.souvenir?.image
          : studyImage(p, q.key === "guess" ? "outline" : "puzzle");
      if (src)
        main.append(
          picture(
            src,
            q.answered ? p.name : "Game illustration to identify",
            "prompt-art",
          ),
        );
    } else if (q.key === "passport") {
      const dl = element("dl", "passport-fields");
      main.append(readout(p.name, ipa(p), zh(p)));
      for (const f of ["Name", "Capital", "Flag", "Continent"]) {
        const displayed = f === q.which ? q.other : p;
        const cell = element("div"),
          value = element("dd");
        if (f === "Flag")
          value.append(
            picture(
              displayed.images.flag,
              "Flag presented in the exercise",
              "passport-flag",
            ),
          );
        else
          value.textContent =
            f === "Name"
              ? displayed.name
              : f === "Capital"
                ? displayed.capital
                : regionLabel(displayed.parent);
        cell.append(element("dt", "", f), value);
        dl.append(cell);
      }
      main.append(dl);
    } else if (q.key === "pin") {
      const t = q.target,
        info = learningPin(t, p);
      main.append(readout(t.target, info?.ipa, info?.zh));
      if (q.answered) main.append(chinese("p", "pin-lesson-note", info.note));
      const board = mapPlate(q.answered ? t : null, q.point);
      if (!q.answered) {
        board.tabIndex = 0;
        board.setAttribute("role", "button");
        board.setAttribute(
          "aria-label",
          "Place your pin. Arrow keys move the crosshair; Enter submits.",
        );
        board.classList.add("clickable-map");
        board.onclick = (e) => {
          const r = board.getBoundingClientRect();
          answer("pin", {
            x: (e.clientX - r.left) / r.width,
            y: (e.clientY - r.top) / r.height,
          });
        };
        const cursor = element("span", "game-dot guess");
        cursor.hidden = true;
        board.append(cursor);
        let x = 0.5,
          y = 0.5;
        board.onkeydown = (e) => {
          const keys = {
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
            ArrowUp: [0, -1],
            ArrowDown: [0, 1],
          };
          if (keys[e.key]) {
            e.preventDefault();
            const [dx, dy] = keys[e.key],
              n = e.shiftKey ? 0.002 : 0.02;
            x = Math.min(1, Math.max(0, x + dx * n));
            y = Math.min(1, Math.max(0, y + dy * n));
            cursor.hidden = false;
            cursor.style.left = x * 100 + "%";
            cursor.style.top = y * 100 + "%";
          }
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            answer("pin", { x, y });
          }
        };
      }
      main.append(board);
    }
    const answers = element("div", "answer-grid");
    if (q.key === "passport") {
      for (const f of ["Name", "Capital", "Flag", "Continent"])
        answers.append(choiceButton(f, f));
    } else if (q.key !== "pin") {
      for (const candidate of q.choices) {
        const label =
          candidate.name +
          (candidate.name === "Georgia"
            ? candidate.id === "US-GA"
              ? " (U.S. state)"
              : " (country)"
            : "");
        const btn = choiceButton(candidate.id, q.key === "flag" ? "" : label);
        if (q.key === "flag") {
          btn.classList.add("flag-answer");
          btn.setAttribute(
            "aria-label",
            q.answered ? label : "Flag option " + (answers.children.length + 1),
          );
          btn.append(
            picture(
              candidate.images.flag,
              q.answered ? label : "Candidate flag",
              "quiz-flag",
            ),
          );
          if (q.answered) btn.append(element("span", "", label));
        }
        answers.append(btn);
      }
    }
    function choiceButton(value, text) {
      const btn = action(text, () => answer(value), "choice");
      if (q.answered) {
        btn.disabled = true;
        if (value === q.correct) btn.classList.add("right");
        else if (value === q.answer) btn.classList.add("wrong");
      }
      return btn;
    }
    if (answers.children.length) main.append(answers);
    if (q.answered) {
      const fb = element("div", "feedback");
      fb.setAttribute("role", "status");
      fb.tabIndex = -1;
      const winner = byId.get(q.correct) || p;
      fb.append(
        element(
          "strong",
          "",
          q.key === "pin"
            ? "Your pin and the game target"
            : q.answer === null
              ? "Answer · 查看答案"
              : q.answer === q.correct
                ? "Correct · 答对了"
                : "Review · 再记一次",
        ),
      );
      let detail;
      if (q.key === "higher") {
        detail =
          numberFields[q.field][1] +
          "： " +
          q.choices
            .map(
              (v) =>
                v.name + " " + num(v[q.field]) + " " + numberFields[q.field][2],
            )
            .join("，") +
          "。较大的是 " +
          winner.name +
          "。";
      } else if (q.key === "passport") {
        detail =
          "这张练习护照属于" +
          zh(p) +
          "（" +
          p.name +
          "）。被替换的栏是 " +
          q.which +
          "，放进去的是" +
          zh(q.other) +
          "的资料。";
      } else if (q.key === "pin") {
        const t = q.target;
        detail =
          "红点是游戏目标，蓝点是你的落点。游戏使用左上角为原点的参考画布，这个目标落在 (" +
          t.pixelX +
          ", " +
          t.pixelY +
          ")。";
      } else if (q.key === "souvenir") {
        const s = q.souvenir;
        fb.append(
          readout(s.english, "/" + s.ipa + "/", s.chinese),
          chinese("h3", "", "为什么放在这里？"),
          souvenirExplanation(s),
        );
      } else if (q.key === "take") {
        fb.append(
          readout(p.name, ipa(p), zh(p)),
          chinese("h3", "", "这三个词为什么指向这里？"),
          clueExplanation(p),
        );
      } else
        detail = "本题对应 " + p.name + " " + ipa(p) + "（" + zh(p) + "）。";
      if (detail) fb.append(chinese("p", "", detail));
      if (!hasExplanation && edition.placeNotes?.[winner.id])
        fb.append(chinese("p", "", edition.placeNotes[winner.id]));
      main.append(fb);
    }
    const actions = element("div", "entry-buttons");
    if (!q.answered && hasExplanation)
      actions.append(action("Show explanation · 看解析", () => answer(null)));
    actions.append(
      action(q.answered ? "Next question · 下一题" : "Skip · 换一题", () => {
        session = promptFor(mode);
        goTab("practice");
      }),
    );
    if (q.answered)
      actions.append(
        action("Study place · 查看词卡", () =>
          openEntry((byId.get(q.correct) || p).id),
        ),
      );
    main.append(actions);
    aside.append(
      chinese("h3", "", "这题怎么学"),
      chinese("p", "", lessons[q.key][2]),
    );
    const vocabKeys = {
      take: ["Country", "State"],
      flag: ["Flag", "State"],
      higher: ["Area", "Population", "Visits"],
      souvenir: ["Souvenir", "Country"],
      guess: ["Outline", "Border"],
      puzzle: ["Border", "Continent"],
      passport: ["Capital", "Flag", "Continent"],
      pin: ["Landmark", "Capital"],
    };
    aside.append(
      wordList(vocabKeys[q.key].map((k) => edition.vocabulary.core[k])),
    );
    aside.append(
      chinese(
        "p",
        "source-small",
        "题目按安装版的对应表生成，选项由本教程组合。点击“游戏速查”可看每个地点的原值和来源。",
      ),
    );
    const rule = edition.extras?.modeRules.find(
      (r) => r.title === lessons[mode][0],
    );
    if (rule) aside.append(chinese("p", "", rule.scoringZh));
    section.append(main, aside);
    parts.append(top, section);
    if (edition.extras) renderRules();
  }
  function renderRules() {
    const extras = edition.extras;
    function disclosure(label) {
      const block = element("details", "rule-index");
      block.append(element("summary", "", label));
      parts.append(block);
      return block;
    }
    const rules = disclosure("Game rules · 本版玩法与计分");
    for (const r of extras.modeRules) {
      const row = element("article", "study-note");
      row.append(
        element("h4", "", r.title + " · " + r.titleZh),
        chinese("p", "", r.detailZh),
        chinese("p", "", r.scoringZh),
      );
      if (r.variants?.length)
        row.append(element("p", "source-small", r.variants.join(" / ")));
      const streak = r.gameplay?._scoreStreakSettings,
        bonus = r.gameplay?._timeBonusSettings;
      if (streak)
        row.append(
          chinese(
            "p",
            "source-small",
            "连击配置：初始倍率 " +
              streak._baseMultiplier +
              "，阈值 " +
              streak._streakThreshold +
              " 次，倍率步长 " +
              streak._multiplierStep +
              "。",
          ),
        );
      if (bonus)
        row.append(
          chinese(
            "p",
            "source-small",
            "加时配置：初始每题 " +
              bonus._secondsPerCorrect +
              " 秒，每 " +
              bonus._correctThreshold +
              " 次正确，奖励步长减少 " +
              bonus._secondsStepDown +
              " 秒。",
          ),
        );
      rules.append(row);
    }
    const ranks = disclosure("30 ranks · 段位名称与音标"),
      rankList = element("div", "rank-list");
    for (const r of extras.rankTiers)
      rankList.append(
        readout(r.position + ". " + r.title, "/" + r.ipa + "/", r.titleZh),
      );
    ranks.append(rankList);
    const achievements = disclosure("Achievements · 本地成就与解锁条件");
    for (const a of [...extras.achievements, ...extras.otherPlatformTrophies]) {
      const line = element("article", "study-note");
      line.append(
        element("h4", "", a.title + " · " + a.gamerscore + "G"),
        element("p", "", a.howTo || a.detail),
        chinese("p", "", a.detailZh),
      );
      achievements.append(line);
    }
  }
  function regionLabel(value) {
    return (
      {
        europe: "Europe",
        asia: "Asia",
        africa: "Africa",
        northAmerica: "North America",
        southAmerica: "South America",
        australia: "Oceania",
      }[value] ||
      value ||
      "—"
    );
  }
  function startLesson(next, preferred, comparison) {
    mode = next;
    session = promptFor(mode, preferred, comparison);
    goTab("practice");
    location.hash = "guide";
    window.scrollTo({ top: 0 });
  }
  goTab(tab);
  if (
    tab === "lookup" &&
    location.hash === "#guide" &&
    Number.isFinite(saved.scrollY)
  ) {
    window.addEventListener(
      "load",
      () => requestAnimationFrame(() => window.scrollTo(0, saved.scrollY)),
      { once: true },
    );
  }
  function viewFlag(place) {
    const src = byId.get(place.id)?.images.flag || place.flag;
    if (src)
      showPicture(
        src,
        place.name + " · Flag",
        place.id === "TWN"
          ? "台湾地区旗帜默认模糊显示。"
          : edition.names[place.id]?.zh || place.name,
      );
  }
  function showCity(name) {
    const t = edition.pins.find((pin) => pin.target === name);
    if (t) {
      goTab("practice");
      showPinDialog(t, byId.get(t.placeId));
    }
  }
  function focusLookup() {
    goTab("lookup");
    const input = parts.querySelector("input");
    input.focus();
    input.select();
  }
  return {
    placeNote,
    openEntry,
    startLesson,
    byId,
    placeCap,
    viewFlag,
    showCity,
    focusLookup,
    learningPin,
    showPinDialog,
  };
}

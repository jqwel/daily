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
  const continentArtwork = new Map(artwork
    .filter((art) => art.kind === "continent")
    .flatMap((art) => [[art.key, art], [art.en, art]]));
  const byId = new Map(edition.places.map((p) => [p.id, p]));
  const puzzleTargets = new Map(edition.puzzles
    .filter((t) => studyImage(byId.get(t.placeId), "puzzle"))
    .map((t) => [t.placeId, t]));
  const lookupById = new Map(helpers.atlasEntries.map((p) => [p.id, p]));
  for (const [id, p] of byId) lookupById.set(id, p);
  const geographyOnly = (id) => lookupById.has(id) && !byId.has(id);
  const geographyLabel = "仅地理资料";
  const byGameId = new Map(edition.places.map((p) => [p.gameId, p]));
  const pinsByPlace = Map.groupBy(edition.pins, (p) => p.placeId);
  const souvenirs = Map.groupBy(edition.souvenirs, (s) => s.placeId);
  const souvenirByImage = new Map(edition.souvenirs.map((s) => [s.image, s]));
  const subjectByImage = new Map(souvenirByImage);
  const souvenirByAddress = new Map(
    edition.souvenirs.map((s) => [s.assetAddress.toLowerCase(), s]),
  );
  for (const a of artwork) {
    if (a.kind !== "sticker") continue;
    // Sticker and souvenir variants depict the same subject (e.g. Belgium vs Belgium2).
    const address = a.key.toLowerCase().replace(/_sticker$/, "_souvenir");
    const subject = souvenirByAddress.get(address);
    if (subject && subject.placeId === String(a.gameId))
      subjectByImage.set(a.src, subject);
  }
  const clueSignature = (p) => [...p.clues].sort().join("|");
  const placesByClue = new Map();
  for (const place of edition.places) {
    for (const key of new Set(place.clues)) {
      if (!placesByClue.has(key)) placesByClue.set(key, []);
      placesByClue.get(key).push(place);
    }
  }
  const matchingClues = Map.groupBy(
    edition.places.filter((p) => p.clues.length),
    clueSignature,
  );
  const checks = Map.groupBy(edition.corrections, (c) => c.atlasId);
  const flags = edition.places.filter((p) => p.images.flag);
  const localArt = Map.groupBy(
    artwork.filter((a) => a.atlasId),
    (a) => a.atlasId,
  );
  const artNames = {
    puzzle: "Puzzle piece · 拼块素材",
    flag: "Flag · 旗帜",
    outline: "Outline · 地点轮廓",
    comparison: "Comparison shape · 比较图",
    sticker: "Passport sticker · 护照贴纸",
    souvenir: "Souvenir · 纪念品",
  };
  const lessons = {
    tour: [
      "Mixed Review",
      "混合复习",
      "轮流练习各种题型。遇到陌生词时先读音标，再回想中文释义，最后核对自己的判断。",
      null,
    ],
    take: [
      "Destination Clues",
      "三词猜地点",
      "读出三个英语提示，分别辨认它们所指的事物，再找三条线索共同指向的国家或州。",
      "takeMeSomewhere",
    ],
    flag: [
      "Flag Quiz",
      "认国旗和州旗",
      "先读地点和音标，再看旗面的底色、条纹方向与徽记。从四面旗帜中选出对应的一面。",
      "matchTheFlag",
    ],
    higher: [
      "Compare Places",
      "比较大小",
      "先在问句里圈出比较对象。larger 比面积，more people 比人口，more visited 比到访次数。",
      "higherOrLower",
    ],
    souvenir: [
      "Souvenir Matching",
      "纪念品归属",
      "观察纪念品的外形和用途，读出英文名称，再选出与它相关的地点。",
      "souvenirSort",
    ],
    guess: [
      "Identify the Outline",
      "读轮廓",
      "先找海岸线或平直边界，再判断轮廓宽窄。细长的陆地与分散的群岛可以先分开记。",
      "guessTheCountry",
    ],
    puzzle: [
      "World Puzzle",
      "世界拼图",
      "读出地名，把拼块拖到地图上的对应位置。拼块中心越接近参考点，得分越高。",
      "worldPuzzle",
    ],
    passport: [
      "Passport Check",
      "核对护照",
      "依次核对国名、首都、旗帜和大洲。练习会有意替换一项，你要指出是哪一栏。",
      "passportPlease",
    ],
    pin: [
      "Map Pins",
      "地图标点",
      "先判断它是首都、州府还是地标，再在地图上点选位置。提交后可比较你的落点和参考位置。",
      "pinItCapitals",
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
  const introduction = (style, text, owner, subject) => chinese("p", style, atlasIntroduction(text, owner, subject));
  const readout = (en, reading, translation, notes = []) => {
    const box = element("span", "word-stack");
    const term = element("strong");
    term.append(en || "", ...notes);
    box.append(term);
    if (reading) box.append(element("span", "ipa", reading));
    if (translation) box.append(chinese("span", "word-zh", translation));
    return box;
  };
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
  function fieldNotes(id, field) {
    const subject = field === "capital" ? byId.get(id)?.capital || atlasPlaces.get(id)?.capital : null;
    return (checks.get(id) || []).filter((c) => c.field === field).map((c) => {
      const note = chinese("small", "field-note");
      const category = element("span", "field-note-category", c.category);
      category.lang = "en";
      note.append(category, " · ", atlasIntroduction(c.zh, id, subject));
      const sources = [
        { label: c.sourceLabel, url: c.sourceUrl },
        ...(c.additionalSources || []),
      ].filter((source) => source.url);
      sources.forEach(({ label, url }, index) => {
        const link = external(sources.length === 1 ? "来源" : "来源 " + (index + 1), url);
        link.title = label;
        link.setAttribute("aria-label", link.textContent + " · " + label);
        note.append(" ", link);
      });
      return note;
    });
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
    p.clues.filter((key) => edition.vocabulary.glossary[key]).map((key) => ({
      ...edition.vocabulary.glossary[key],
      key, owner: p.id,
      reason: edition.clueReasons[p.id]?.[key],
    }));
  function sharedClueNote(p) {
    const box = document.createDocumentFragment();
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
              .map((other) => zh(other) + "（" + placeLabel(other) + "）")
              .join("、") +
            "的练习中。仅凭这三条线索，两地都说得通。",
        ),
      );
    return box;
  }
  function souvenirOrigin(s) {
    const owner = byGameId.get(s.placeId);
    const name = atlasPlaces.get(owner.id)?.name || owner.name;
    if (owner.type === "USA_State") return name + ", USA · 美国" + zh(owner);
    const origin = joined([name, zh(owner)]);
    const status = geographyStatus.get(owner.id);
    return status ? origin + "（" + status + "）" : origin;
  }
  function itemIntroduction(s) {
    const box = element("div", "teaching-explanation");
    box.append(introduction("", s.teachingNote, byGameId.get(s.placeId)?.id, s.english));
    if (s.teachingSource)
      box.append(external("Source · 讲解出处", s.teachingSource));
    return box;
  }
  function illustratedItem(s, thumbnail) {
    const box = itemIntroduction(s);
    const heading = element("div", "item-heading");
    if (thumbnail) heading.append(picture(thumbnail, "", "item-thumbnail"));
    heading.append(readout(s.english, "/" + s.ipa + "/", s.chinese));
    box.prepend(heading);
    return box;
  }
  function souvenirExplanation(s) {
    const box = itemIntroduction(s);
    const owner = byGameId.get(s.placeId);
    box.prepend(element("strong", "souvenir-origin", souvenirOrigin(s)));
    if (!s.linkedInSouvenirSort)
      box.append(
        chinese(
          "p",
          "source-small",
          "这件物品可在图鉴中查看。该地点的配对练习使用另一件纪念品。",
        ),
      );
    else if (atlasPlaces.get(owner.id)?.name !== owner.name)
      box.append(
        chinese(
          "p",
          "source-small",
          "配对题中的英文名称为 “" + owner.name + "”。",
        ),
      );
    return box;
  }
  function showSouvenir(s) {
    const content = souvenirExplanation(s);
    content.append(
      element("small", "source-small", "Illustration ID · " + s.assetAddress),
    );
    showPicture(s.image, s.english, s.chinese + "  /" + s.ipa + "/", {
      content,
    });
  }
  function showStudyPicture(src, en, cn, fallback) {
    const souvenir = souvenirByImage.get(src);
    if (souvenir) return showSouvenir(souvenir);
    const subject = subjectByImage.get(src);
    showPicture(src, en, cn, {
      fallback,
      content: subject && illustratedItem(subject),
    });
  }
  const learningPin = (t, p) =>
    t.variant === "Landmark"
      ? edition.landmarks[t.key]
      : { ...edition.capitalLessons[p.id], ...placeCap(p) };
  function placeIntroduction(info, owner, subject) {
    const paragraph = introduction("place-introduction", info.introduction, owner, subject);
    if (info.introductionSource)
      paragraph.append(" ", external("延伸阅读", info.introductionSource));
    return paragraph;
  }
  function showSupplementDetails(en, zh, info, owner) {
    const art = info.illustration;
    const content = document.createDocumentFragment();
    if (info.ipa) content.append(element("p", "ipa", info.ipa));
    content.append(placeIntroduction(info, owner, en));
    showPicture(art?.src, en, art?.caption || zh, { art, content });
  }
  function placePhoto(en, zh, info, className, owner) {
    const art = info.illustration;
    const zoom = action(
      "",
      () => showSupplementDetails(en, zh, info, owner),
      className,
    );
    zoom.setAttribute("aria-label", "放大图片 · " + zh);
    zoom.append(picture(art.src, art.caption || en + " · " + zh));
    return zoom;
  }
  function appendPinDetails(container, pin, info) {
    container.append(placeIntroduction(info, pin.placeId, pin.target));
    const art = info.illustration;
    if (art) {
      container.append(placePhoto(pin.target, info.zh, info, "pin-photo", pin.placeId));
      if (art.caption) container.append(introduction("source-small", art.caption, pin.placeId, pin.target));
    }
    if (info.imagePage) container.append(external("在线查看名胜图片", info.imagePage));
    const corrected = pin.variant === "Capital" && checks.get(pin.placeId)?.some((c) => c.field === "capital");
    if (info.note && !corrected) {
      const hint = element("details", "pin-hint");
      hint.append(chinese("summary", "", "定位提示"), introduction("pin-lesson-note", info.note, pin.placeId, pin.target));
      container.append(hint);
    }
  }
  const numberFields = {
    area: ["Area", "面积", "km²"],
    population: ["Population", "人口", ""],
    visits: ["Visits", "到访次数（练习数据）", ""],
  };
  function vocabularyCard(word, showTranslation = true) {
    const text = readout(word.en, word.ipa, showTranslation ? word.zh : null);
    if (word.approximate)
      text.append(chinese("small", "source-small", "美式近似读法"));
    const art = word.illustration;
    const matches = placesByClue.get(word.key);
    if (showTranslation && matches?.length > 1) {
      const link = action("查看共用线索的 " + matches.length + " 个地点", () => {
        const first = matches.find((p) => p.id !== word.owner);
        showStudyEntry(first, { clue: word, matches });
      }, "detail-action clue-matches");
      link.setAttribute("aria-haspopup", "dialog");
      text.append(link);
    }
    const reason = showTranslation && word.reason;
    if (!art && !reason) return text;
    const card = element("div", "clue-card-row");
    if (art) {
      const zoom = action(
        "",
        () => showPicture(art.src, word.en, showTranslation ? word.zh : "", { art }),
        "clue-thumbnail",
      );
      zoom.setAttribute("aria-label", "Enlarge illustration · " + word.en);
      zoom.append(picture(art.src, "", "clue-image"));
      card.append(zoom);
    }
    card.append(text);
    if (reason) card.append(introduction("clue-reason", reason, word.owner, word.en));
    return card;
  }
  function wordList(words, showTranslation = true) {
    const list = element("div", "vocab-grid");
    for (const w of words) list.append(vocabularyCard(w, showTranslation));
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
      introduction(
        "",
        explanation +
          (name.capitalZh
            ? " 地图参考资料中的行政中心为" + name.capitalZh + "。"
            : ""),
        base.id,
        base.capital,
      ),
    );
    const note = edition.placeNotes?.[base.id];
    if (note) box.append(introduction("", note, base.id));
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
      (localArt.get(base.id) || []).find((a) => a.kind === "comparison") ||
      (localArt.get(base.id) || []).find((a) => a.kind === "puzzle");
    if (item || art) {
      const src = item?.image || art.src,
        label = item ? item.english + " · " + item.chinese : artNames[art.kind];
      const illustration = action(
        "",
        () => showStudyPicture(src, base.name, label),
        "place-illustration",
      );
      illustration.append(picture(src, label), element("span", "", label));
      box.append(illustration);
    }
    if (lookupById.has(base.id))
      box.append(
        action(
          record ? "Open study card · 特色与配图" : "打开速查词条 · " + geographyLabel,
          () => openEntry(base.id),
        ),
      );
    return box;
  }
  function entryDetails(p, visit = openEntry) {
    const box = entryBody(p, visit);
    const supplement = LOOKUP_SUPPLEMENTS[p.id];
    if (!supplement) return box;
    const section = element("section", "lookup-supplement");
    section.append(
      element("h4", "", "Further geography · 补充地理资料"),
      chinese("p", "supplement-note", "延伸阅读。点击名称查看地点资料，点击照片放大并查看署名。"),
    );
    const groups = element("div", "supplement-groups");
    for (const [key, title] of [["cities", "主要城市"], ["sights", "景观名胜"]]) {
      if (!supplement[key]?.length) continue;
      const group = element("div");
      const list = element("ul");
      for (const [en, translation, url] of supplement[key]) {
        const item = element("li");
        const media = SUPPLEMENT_MEDIA[url];
        const words = readout(external(en, url), media?.ipa, translation);
        if (media?.readingNote)
          words.querySelector(".ipa").append(chinese("small", "reading-note", media.readingNote));
        if (media?.illustration)
          item.append(placePhoto(en, translation, media, "supplement-photo", p.id));
        item.append(words, placeIntroduction(media, p.id, en));
        list.append(item);
      }
      group.append(chinese("h5", "", title), list);
      groups.append(group);
    }
    section.append(groups);
    box.append(section);
    return box;
  }
  function studyGallery(p) {
    const media = element("div", "study-gallery"),
      shown = new Set();
    function thumb(src, en, title, reading = "", fallback, isFlag = false) {
      if (!src || shown.has(src)) return;
      shown.add(src);
      const fig = element("figure");
      const btn = action(
        "",
        () => isFlag ? viewFlag(p) : showStudyPicture(src, en, title, fallback),
        "enlarge-art",
      );
      btn.setAttribute("aria-label", "Enlarge " + en);
      btn.append(picture(src, en, "study-image", fallback));
      if (src.endsWith("/tw.svg")) btn.classList.add("masked-flag");
      fig.append(btn);
      const caption = element("figcaption");
      caption.append(readout(en, reading, title));
      const introduction = isFlag && flagIntroduction(p);
      if (introduction) caption.append(introduction);
      fig.append(caption);
      media.append(fig);
    }
    const flagArt = flagArtwork(p);
    if (flagArt.src && flagArt.src === p.images?.flag)
      thumb(flagArt.src, "Flag", "旗帜", "", flagArt.fallback, true);
    else thumb(
      flagArt.src, "Atlas flag",
      "地图参考旗帜",
      "", flagArt.fallback, true,
    );
    function thumbContinent() {
      const passport = continentArtwork.get(p.passport?.ContinentImageAddress);
      const atlasRegion = atlasPlaces.get(p.id.startsWith("US-") ? "USA" : p.id)?.region;
      const continent = passport || continentArtwork.get(regionLabel(p.parent)) ||
        continentArtwork.get(atlasRegion);
      if (continent)
        thumb(continent.src, continent.en, continent.zh + (passport ? " · 护照配图" : " · 洲图"), continent.ipa);
    }
    if (geographyOnly(p.id)) {
      thumbContinent();
      return media;
    }
    const entryArt = localArt.get(p.id) || [];
    const comparison = studyImage(p, "comparison") || entryArt.find((a) => a.kind === "comparison")?.src;
    const stickers = new Set([
      ...p.images.stickers,
      ...entryArt.filter((a) => a.kind === "sticker").map((a) => a.src),
    ]);
    if (comparison) thumb(comparison, "Comparison outline", "大小比较轮廓");
    else {
      thumb(studyImage(p, "outline"), "Outline", "猜地轮廓");
      thumb(studyImage(p, "puzzle"), "Puzzle piece", "地图拼块");
    }
    for (const s of souvenirs.get(p.gameId) || []) {
      if (stickers.has(s.image)) continue;
      thumb(
        s.image,
        s.english,
        s.chinese + (s.linkedInSouvenirSort ? " · 配对练习" : " · 图鉴配图"),
        "/" + s.ipa + "/",
      );
    }
    for (const a of entryArt) {
      if (a.src === p.images.flag || stickers.has(a.src)) continue;
      if (comparison && ["comparison", "outline", "puzzle"].includes(a.kind)) continue;
      thumb(
        a.src,
        artNames[a.kind]?.split(" · ")[0] || p.name,
        (artNames[a.kind]?.split(" · ")[1] || "配图") + " · 补充配图",
      );
    }
    thumbContinent();
    return media;
  }
  let entrySerial = 0;
  function entryBody(p, visit) {
    const box = element("div", "entry-details");
    const overview = element("div", "entry-overview");
    const info = element("div", "entry-info");
    overview.append(info);
    box.append(overview);
    const heading = element("div", "entry-heading");
    heading.append(readout(placeLabel(p), ipa(p), zh(p), fieldNotes(p.id, "name")));
    if (atlasPlaces.has(p.id)) overview.append(element("div", "entry-map"));
    info.append(heading);
    if (geographyOnly(p.id)) {
      info.append(
        chinese("p", "place-explainer", geographyLabel + "。可在地图上查看位置及参考资料。"),
        helpers.atlasFacts(p),
        studyGallery(p),
      );
      return box;
    }
    const cap = placeCap(p),
      capitalNotes = fieldNotes(p.id, "capital"),
      glossary = clueWords(p);
    if (edition.placeNotes?.[p.id])
      info.append(introduction("place-explainer", edition.placeNotes[p.id], p.id));
    if (edition.noteSources[p.id])
      info.append(external("Source · 讲解出处", edition.noteSources[p.id]));
    const facts = element("dl", "edition-facts");
    function fact(title, value) {
      const cell = element("div");
      const definition = element("dd");
      definition.append(value);
      cell.append(element("dt", "", title), definition);
      facts.append(cell);
    }
    if (geographyStatus.has(p.id)) fact(geographyStatusLabel, atlasIntroduction(geographyStatus.get(p.id), p.id));
    fact(
      p.type === "USA_State" ? "State capital · 州府" : "Capital · 首都",
      cap ? readout(cap.en, cap.ipa, cap.zh, capitalNotes) : "—",
    );
    fact(
      "Region · 地区",
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
    for (const field of atlasCountryFacts(p.id)) fact(...field);
    info.append(facts);
    if (edition.capitalLessons[p.id] && !capitalNotes.length)
      info.append(
        introduction("pin-lesson-note", edition.capitalLessons[p.id].note, p.id, cap?.en),
      );
    info.append(studyGallery(p));
    if (glossary.length) {
      const heading = element("div", "clue-heading");
      const words = wordList(glossary);
      const reasons = [...words.querySelectorAll(".clue-reason")];
      const instance = ++entrySerial;
      const toggle = action("Why these clues? · 逐词看原因", () => {
        if (closedReasons.has(p.id)) closedReasons.delete(p.id);
        else closedReasons.add(p.id);
        updateReasons();
        saveStudy();
      });
      for (const [i, reason] of reasons.entries()) reason.id = "reason-" + instance + "-" + i;
      toggle.setAttribute("aria-controls", reasons.map((r) => r.id).join(" "));
      function updateReasons() {
        const closed = closedReasons.has(p.id);
        toggle.setAttribute("aria-expanded", String(!closed));
        for (const reason of reasons) reason.hidden = closed;
      }
      updateReasons();
      heading.append(element("h4", "", "Clue vocabulary · 地理线索词"), toggle);
      box.append(heading, words, sharedClueNote(p));
    }
    const used = Object.values(lessons)
      .filter((rule) => rule[3] && p.modes.includes(rule[3]))
      .map((rule) => rule[0]);
    box.append(
      element("p", "source-small", "Included in · " + used.join(" / ")),
    );
    const pins = pinsByPlace.get(p.id) || [];
    if (pins.length) {
      box.append(element("h4", "", "Map Pins · 地图标点"));
      const chips = element("div", "entry-buttons");
      for (const t of pins) {
        const datum = learningPin(t, p),
          row = element("article", "pin-summary");
        row.append(readout(t.target, datum.ipa, datum.zh));
        if (datum.approximate)
          row.append(chinese("small", "source-small", "美式近似读法"));
        appendPinDetails(row, t, datum);
        row.append(
          action("Show map pin · 查看落点", () => showPinDialog(t, p)),
        );
        chips.append(row);
      }
      box.append(chips);
    }
    if (!p.images.outline && p.modes.includes("guessTheCountry"))
      box.append(
        chinese(
          "p",
          "source-small",
          "此地点暂无可供辨认的轮廓图。",
        ),
      );
    box.append(
      element(
        "p",
        "source-small",
        "Entry ID · " + p.gameId,
      ),
    );
    if (p.neighbors?.length) {
      const neighbors = element("div", "entry-buttons");
      box.append(element("h4", "", "Nearby entries · 邻接名单"));
      for (const id of p.neighbors) {
        const other = byGameId.get(String(id));
        if (other)
          neighbors.append(
            action(placeLabel(other) + " · " + zh(other), () =>
              visit(other.id),
            ),
          );
      }
      box.append(neighbors);
    }
    return box;
  }
  function showEntryMap(body, p, options, visit = openEntry) {
    const host = body.querySelector(".entry-map");
    if (host) locate(p.id, host, options, visit);
  }
  function mapPlate(target, guess = null) {
    const frame = element("div", "game-map-plate");
    const img = picture(
      "assets/game/pin-map.webp",
      "World map for placement practice",
      "game-map-image",
    );
    [img.width, img.height] = edition.dimensions;
    frame.append(img);
    function dot(x, y, type, desc) {
      const d = element("span", "game-dot " + type);
      positionOnGameMap(d, { x, y });
      d.title = desc;
      d.setAttribute("aria-label", desc);
      frame.append(d);
    }
    if (target) dot(target.x, 1 - target.y, "correct", "Reference location");
    if (guess) dot(guess.x, guess.y, "guess", "Your pin");
    return frame;
  }
  function showPinDialog(t, p) {
    const dialog = element("dialog", "pin-dialog");
    dialog.setAttribute("aria-label", t.target);
    const head = element("div", "dialog-top");
    const info = learningPin(t, p);
    const notes = t.variant === "Capital" ? fieldNotes(p.id, "capital") : [];
    const title = element("h2");
    title.append(readout(t.target, info?.ipa, info?.zh, notes));
    head.append(title, action("Close", () => dialog.close()));
    dialog.append(head);
    appendPinDetails(dialog, t, info);
    dialog.append(
      mapPlate(t),
      element(
        "p",
        "source-small",
        placeLabel(p) +
          " · " +
          t.variant +
          " · Map pixel (" +
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
  function showStudyEntry(place, { intro, clue, matches } = {}) {
    const dialog = element("dialog", "study-card-dialog");
    const head = element("div", "dialog-top");
    const name = element("h2");
    head.append(name, action("Close", () => dialog.close()));
    dialog.append(head);
    const links = new Map();
    if (clue) {
      const caption = clue.en + " · " + clue.zh;
      const group = element("div", "clue-places");
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", caption);
      group.append(element("strong", "", caption));
      for (const p of matches) {
        const button = action(joined([placeLabel(p), zh(p)]), () => display(p.id));
        links.set(p.id, button);
        group.append(button);
      }
      dialog.append(group);
    }
    const content = element("div");
    let currentId = place.id;
    const open = action("Open study card · 打开速查词条", () => {
      for (const previous of document.querySelectorAll(".study-card-dialog[open]")) previous.close();
      openEntry(currentId);
    });
    dialog.append(content, open);
    dialog.addEventListener("close", helpers.rememberLocator(dialog), { once: true });
    function display(id, options) {
      currentId = id;
      const p = lookupById.get(id);
      const title = joined([placeLabel(p), zh(p)]);
      name.replaceChildren(flag(p), element("span", "", title));
      dialog.setAttribute("aria-label", title);
      const body = entryDetails(p, display);
      if (intro) {
        if (id === place.id) head.after(intro);
        else intro.remove();
      }
      for (const [key, button] of links) button.setAttribute("aria-pressed", String(key === id));
      content.replaceChildren(body);
      if (!dialog.open) showDialog(dialog);
      showEntryMap(body, p, options, display);
      if (!options) dialog.scrollTop = 0;
    }
    display(place.id);
  }
  function showPlaceInfo(place, artworkLabel, showFlag = false) {
    const title = joined([placeLabel(place), place.zh || edition.names[place.id]?.zh]);
    const dialog = element("dialog", "place-info-dialog");
    dialog.setAttribute("aria-label", title);
    const head = element("div", "dialog-top");
    const name = element("h2", "", title);
    name.append(...fieldNotes(place.id, "name"));
    head.append(name, action("Close", () => dialog.close()));
    dialog.append(head, element("p", "ipa", place.ipa));
    if (artworkLabel) dialog.append(element("p", "source-small", artworkLabel));
    if (showFlag) {
      const introduction = flagIntroduction(place);
      if (introduction) dialog.append(introduction);
    }
    if (geographyOnly(place.id)) dialog.append(chinese("small", "entry-source", geographyLabel));
    dialog.append(helpers.atlasFacts(place, fieldNotes(place.id, "capital")));
    if (place.kind === "Continent") {
      const members = [...atlasPlaces.values()].filter((p) =>
        p.kind === "Country" && p.region === place.name
      );
      if (members.length)
        dialog.append(
          element("strong", "", "Countries · 国家"),
          chinese("p", "place-explainer", members.map(zh).join("、")),
        );
    }
    const note = edition.placeNotes?.[place.id];
    if (note) dialog.append(introduction("place-explainer", note, place.id));
    if (lookupById.has(place.id))
      dialog.append(action("Open study card · 打开速查词条", () => {
        dialog.close();
        openEntry(place.id);
      }));
    showDialog(dialog);
  }
  function showPicture(src, en, cn, { art, content, fallback } = {}) {
    const dialog = element("dialog", src ? "picture-dialog" : "place-info-dialog");
    dialog.setAttribute("aria-label", en);
    const head = element("div", "dialog-top");
    head.append(
      element("h2", "", en),
      action("Close", () => dialog.close()),
    );
    dialog.append(head);
    if (src) {
      const wrap = element("div", "picture-preview");
      if (/(?:\/tw\.svg|flag_of_taiwan)/i.test(src))
        wrap.classList.add("masked-flag");
      wrap.append(picture(src, en, "large-picture", fallback));
      dialog.append(wrap);
    }
    if (cn) dialog.append(chinese("p", "", cn));
    if (content) dialog.append(content);
    if (art) {
      const credit = element("div", "illustration-credit");
      if (art.kind === "commons" || art.kind === "photo" || art.kind === "pictogram") {
        if (art.kind === "pictogram")
          credit.append(chinese("span", "", "词义示意 · "));
        credit.append(
          external(art.subject, art.source),
          document.createTextNode(" · " + art.credit + " · "),
        );
        if (art.licenseUrl)
          credit.append(external(art.license, art.licenseUrl));
        else credit.append(document.createTextNode(art.license));
      } else if (art.kind === "game") {
        credit.append(chinese("span", "", art.caption), " · ", external("插图来源", "data-sources.txt"));
      } else {
        credit.append(chinese("span", "", "教学示意图 · " + art.credit));
      }
      dialog.append(credit);
    }
    showDialog(dialog);
  }
  const listed = [...lookupById.values()]
    .map((p) => {
      const base = atlasPlaces.get(p.id),
        game = byId.get(p.id),
        namesZh = edition.names[p.id];
      const names = [
        p.id, p.name, placeLabel(p), base?.name, zh(p),
        ...(base?.aliases || []), ...(namesZh?.aliasesZh || []),
      ].filter(Boolean).map(normalize);
      const terms = [...names, p.capital, namesZh?.capitalZh];
      const supplements = Object.values(LOOKUP_SUPPLEMENTS[p.id] || {}).flat()
        .map(([en, translation, , ...aliases]) => ({
          label: en + " · " + translation,
          names: [en, translation, ...aliases].map(normalize),
        }));
      for (const item of supplements) terms.push(...item.names);
      if (game) terms.push(
        ...clueWords(game).flatMap((w) => [w.en, w.zh]),
        ...(pinsByPlace.get(p.id) || []).flatMap((t) => [t.target, edition.landmarks[t.key]?.zh]),
        ...(souvenirs.get(game.gameId) || []).flatMap((s) => [s.english, s.chinese]),
      );
      return { p, names, supplements, text: normalize(terms.filter(Boolean).join(" ")) };
    })
    .sort((a, b) => a.p.name.localeCompare(b.p.name, "en"));
  const lookupPageSize = 16;
  const switchPlaces = listed.filter(({ p }) =>
    ["Country", "U.S. state"].includes(atlasPlaces.get(p.id)?.kind),
  );

  function lookupMatches(name) {
    const key = normalize(name);
    const terms = key.split(" ").filter(Boolean);
    if (terms.length === 2 && terms[0] === "us" && /^[a-z]{2}$/.test(terms[1])) {
      const state = listed.find(({ p }) => p.id === "US-" + terms[1].toUpperCase());
      if (state) return [state];
    }
    const matches = listed.filter(({ text }) =>
      terms.every((term) => text.includes(term)),
    );
    if (key) {
      const stateId = /^[a-z]{2}$/.test(key) ? "US-" + key.toUpperCase() : null;
      const priority = ({ p, names, supplements }) => {
        if (p.id === stateId) return 3;
        if (names.includes(key)) return 2;
        return Number(supplements.some((item) => item.names.includes(key)));
      };
      matches.sort((a, b) => priority(b) - priority(a));
    }
    return matches;
  }

  const saved = helpers.storage.read();
  let library =
    saved.library && typeof saved.library === "object" ? saved.library : {};
  let libraryResize, refreshLookup;
  const validTabs = ["practice", "lookup", "library", "checks"];
  const validPlaces = (ids, catalog) =>
    new Set(Array.isArray(ids) ? ids.filter((id) => catalog.has(id)) : []);
  let openedId = [...validPlaces(saved.opened, lookupById)].at(-1) ?? null;
  const closedReasons = validPlaces(saved.closedReasons, byId);
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
  session = restoreQuestion(saved.question);
  function saveStudy(scrollY) {
    helpers.storage.write({
      tab,
      mode,
      query,
      page,
      opened: openedId ? [openedId] : [],
      closedReasons: [...closedReasons],
      tourStep,
      lastPrompt,
      question: snapshotQuestion(),
      scrollY,
      library,
    });
  }
  function rememberEntry(entry) {
    const id = entry.dataset.place;
    if (entry.open) openedId = id;
    else if (openedId === id) openedId = null;
  }
  window.addEventListener("pagehide", () => {
    if (tab === "lookup") parts.querySelectorAll(".game-entry").forEach(rememberEntry);
    saveStudy(
      tab === "lookup" && location.hash === "#guide"
        ? window.scrollY
        : undefined,
    );
  });
  function goTab(next) {
    libraryResize?.disconnect();
    libraryResize = null;
    refreshLookup = null;
    tab = next;
    if (location.hash === "#world-puzzle" && (tab !== "practice" || mode !== "puzzle"))
      location.replace("#guide");
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
  function showLookupResult(name, matches, index, mapOptions) {
    if (location.hash !== "#guide") location.hash = "guide";
    query = name;
    page = Math.floor(index / lookupPageSize);
    openedId = matches[index].p.id;
    if (refreshLookup) refreshLookup(mapOptions);
    else goTab("lookup");
    if (mapOptions) return;
    const target = index % lookupPageSize === 0
      ? $("study-desk")
      : parts.querySelector(".game-entry[open]");
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }
  function openEntry(id, mapOptions) {
    const name = lookupById.get(id).name;
    const matches = lookupMatches(name);
    showLookupResult(name, matches, matches.findIndex(({ p }) => p.id === id), mapOptions);
  }
  $("next-tour-question").onclick = () => startLesson("tour");
  $("random-place").onclick = () => {
    const candidates = switchPlaces.filter(({ p }) => p.id !== openedId && p.name !== query);
    openEntry(candidates[Math.floor(Math.random() * candidates.length)].p.id);
  };
  function renderChecks() {
    parts.append(
      element("h2", "study-title", "Reading the evidence"),
      chinese(
        "p",
        "study-intro",
        "比较地理资料时，先核对名称、统计年份和单位。点击词条可查看具体差异及出处。",
      ),
    );
    if (checks.size) {
      const entries = chinese("p", "check-entries", "查看词条内的注解");
      for (const id of checks.keys()) {
        const p = byId.get(id);
        if (p) entries.append(action(joined([placeLabel(p), zh(p)]), () => openEntry(id), "text-link"));
      }
      parts.append(entries);
    }
    for (const n of edition.checks) {
      const a = element("article", "study-note");
      a.append(element("h4", "", n.title), introduction("", n.zh));
      if (n.url) a.append(external(n.label, n.url));
      parts.append(a);
    }
  }
  function pagination(changePage) {
    const bar = element("div", "page-buttons");
    const prev = action("Previous", () => turn(-1));
    const next = action("Next", () => turn(1));
    const label = element("span");
    label.setAttribute("aria-live", "polite");
    bar.append(prev, label, next);
    let current = 0;
    function turn(delta) {
      const top = bar.getBoundingClientRect().top;
      const focused = document.activeElement;
      changePage(current + delta);
      if (focused === prev && prev.disabled) next.focus({ preventScroll: true });
      if (focused === next && next.disabled) prev.focus({ preventScroll: true });
      window.scrollBy({ top: bar.getBoundingClientRect().top - top, behavior: "instant" });
    }
    return {
      bar,
      update(page, count) {
        current = page;
        bar.hidden = count < 2;
        prev.disabled = page === 0;
        next.disabled = page + 1 >= count;
        label.textContent = "Page " + (page + 1) + " / " + count;
      },
    };
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
    // These regional puzzle pieces share an atlas entry with their parent area.
    const regionIds = {
      no_id_bonaire_puzzle: "BES",
      no_id_saba_and_sint_eustatius_puzzle: "BES",
      no_id_nova_scotia_puzzle: "CAN",
    };
    const oldIndex = Number.isSafeInteger(library.pageNo) ? library.pageNo * 20 : 0;
    let selectedKind = Object.hasOwn(categories, library.selectedKind)
        ? library.selectedKind
        : "flag",
      // Older sessions stored a page number with 20 images per page.
      firstIndex = Number.isSafeInteger(library.firstIndex) ? library.firstIndex : oldIndex,
      phrase = typeof library.phrase === "string" ? library.phrase.trim() : "";
    const header = element("div", "reference-tools study-tools"),
      search = element("input"),
      bar = element("div", "search-bar wide"),
      choice = element("select"),
      summary = element("p", "result-summary"),
      grid = element("div", "art-catalog");
    let size = 0;
    const pager = pagination((page) => {
      // Reserve the current rows when the last page contains fewer tiles.
      grid.style.minHeight = grid.getBoundingClientRect().height + "px";
      firstIndex = page * size;
      draw();
    });
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
        "点击配图，查看对应国家、州、地区或大洲的资料。地点卡中也列出了可用的练习。",
      ),
      summary, grid, pager.bar,
    );
    function draw() {
      if (!size) return;
      const list = artwork
        .filter((a) => a.kind === selectedKind)
        .filter((a) => {
          const p = byGameId.get(String(a.gameId)),
            s = subjectByImage.get(a.src);
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
      firstIndex = Math.max(0, Math.min(firstIndex, list.length - 1));
      const pageNo = Math.floor(firstIndex / size);
      const start = pageNo * size;
      const end = Math.min(list.length, start + size);
      library = { selectedKind, phrase, firstIndex };
      saveStudy();
      summary.textContent = list.length + " images · " + (list.length ? start + 1 : 0) + "–" + end;
      const tiles = document.createDocumentFragment();
      for (const a of list.slice(start, end)) {
        const p = byGameId.get(String(a.gameId)),
          s = subjectByImage.get(a.src);
        const title = s?.english || p?.name || a.en;
        const cn = s?.chinese || (p ? zh(p) : a.zh);
        const image = a.kind === "flag" && p ? flagArtwork(p) : a;
        const placeId = a.kind === "continent"
          ? "physical-" + normalize(a.en).replaceAll(" ", "-")
          : a.atlasId || p?.id || regionIds[a.key];
        const place = atlasPlaces.get(placeId);
        const artworkLabel = regionIds[a.key] ? joined([title, cn]) : "";
        const tile = action(
          "",
          () => s ? showStudyEntry(place, { intro: illustratedItem(s, a.src) }) : showPlaceInfo(place, artworkLabel, a.kind === "flag"),
          "art-tile",
        );
        tile.setAttribute("aria-haspopup", "dialog");
        tile.append(
          picture(image.src, title, "study-image", image.fallback),
          readout(title, s ? "/" + s.ipa + "/" : p ? ipa(p) : a.ipa, cn),
        );
        if (s)
          tile.append(element("span", "souvenir-origin", souvenirOrigin(s)));
        tiles.append(tile);
      }
      grid.replaceChildren(tiles);
      pager.update(pageNo, Math.ceil(list.length / size));
    }
    function resetPage() {
      grid.style.minHeight = "";
      firstIndex = 0;
      draw();
    }
    search.oninput = () => {
      phrase = search.value.trim();
      resetPage();
    };
    search.onblur = () => {
      search.value = phrase;
    };
    choice.onchange = () => {
      selectedKind = choice.value;
      resetPage();
    };
    function fitPage() {
      if (!grid.clientWidth) return;
      const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
      if (size === columns * 2) return;
      grid.style.minHeight = "";
      size = columns * 2;
      draw();
    }
    libraryResize = new ResizeObserver(fitPage);
    libraryResize.observe(grid);
    fitPage();
  }
  function renderLookup() {
    const tools = element("div", "reference-tools study-tools");
    const input = element("input");
    input.type = "search";
    input.placeholder = "Place, city, sight, clue… 地点、首都、城市、名胜或线索";
    input.setAttribute("aria-label", "Search geography entries");
    input.value = query;
    const field = element("div", "search-bar wide");
    field.append(input);
    tools.append(field);
    parts.append(tools);
    const out = element("div");
    const pager = pagination((nextPage) => {
      page = nextPage;
      refresh();
    });
    parts.append(out, pager.bar);
    function refresh(mapOptions) {
      const all = lookupMatches(query);
      if (all.length === 1) openedId = all[0].p.id;
      else if (!openedId && !page && geographyOnly(all[0]?.p.id)) {
        const name = normalize(query);
        if (all[0].names.includes(name) && !all[1].names.includes(name))
          openedId = all[0].p.id;
      }
      const size = lookupPageSize;
      page = Math.max(0, Math.min(page, Math.ceil(all.length / size) - 1));
      out.replaceChildren(
        element(
          "p",
          "result-summary",
          all.length +
            " places · " +
            (all.length ? page * size + 1 : 0) +
            "–" +
            Math.min(all.length, (page + 1) * size),
        ),
      );
      const searchName = normalize(query);
      for (const { p, names, supplements } of all.slice(page * size, (page + 1) * size)) {
        const details = element("details", "game-entry"),
          summary = element("summary");
        details.name = "lookup-entries";
        details.dataset.place = p.id;
        const flagArt = flagArtwork(p);
        if (flagArt.src)
          summary.append(picture(flagArt.src, "", "summary-flag", flagArt.fallback));
        const identity = element("span", "entry-identity");
        identity.append(
          element("strong", "", placeLabel(p)),
          chinese("span", "entry-zh", zh(p)),
          element("span", "ipa", ipa(p)),
        );
        if (geographyOnly(p.id)) identity.append(chinese("small", "entry-source", geographyLabel));
        if (searchName && !names.includes(searchName)) {
          const match = supplements.find((item) => item.names.includes(searchName));
          if (match) identity.append(chinese("small", "supplement-match", match.label));
        }
        summary.append(identity);
        details.append(summary);
        out.append(details);
        details.open = openedId === p.id;
        function displayEntry(options) {
          if (details.children.length === 1) details.append(entryDetails(p));
          showEntryMap(details, p, options);
        }
        if (details.open) displayEntry(mapOptions);
        details.ontoggle = () => {
          if (!details.isConnected) return;
          if (details.open && openedId !== p.id) displayEntry();
          rememberEntry(details);
          saveStudy();
        };
      }
      if (!all.length)
        out.append(
          chinese(
            "p",
            "no-results",
            "没有匹配的地点。试试英文名、州名、地标名，或一个更短的中文关键词。",
          ),
        );
      pager.update(page, Math.ceil(all.length / size));
      saveStudy();
    }
    input.oninput = () => {
      query = input.value.trim();
      openedId = null;
      page = 0;
      refresh();
    };
    input.onblur = () => {
      input.value = query;
    };
    refreshLookup = (mapOptions) => {
      input.value = query;
      refresh(mapOptions);
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
  function puzzleQuestion(target, progress) {
    const rule = edition.extras.modeRules.find((r) => r.id === "BordersPuzzle");
    const puzzle = createWorldPuzzle(target, [...puzzleTargets.values()], rule, edition.dimensions, {
      place: (t) => byId.get(t.placeId),
      imageOf: (t) => studyImage(byId.get(t.placeId), "puzzle"),
      ipa, zh, mapPlate, action, shuffle, openEntry, onChange: saveStudy,
    }, progress);
    return puzzle && { key: "puzzle", puzzle };
  }

  function snapshotQuestion() {
    if (!session) return null;
    if (session.key === "puzzle")
      return { key: session.key, puzzle: session.puzzle.snapshot() };
    return {
      ...session,
      p: session.p.id,
      choices: session.choices.map((place) => place.id),
      other: session.other?.id,
      target: session.target?.key,
      souvenir: session.souvenir?.assetAddress,
    };
  }

  function restoreQuestion(data) {
    if (!data || !modes.includes(data.key) || (mode !== "tour" && mode !== data.key))
      return null;
    if (data.key === "puzzle") {
      const target = puzzleTargets.get(data.puzzle?.target);
      return target ? puzzleQuestion(target, data.puzzle) : null;
    }
    const p = byId.get(data.p);
    if (!p || !Array.isArray(data.choices) || typeof data.title !== "string") return null;
    const choices = data.choices.map((id) => byId.get(id));
    if (choices.includes(undefined)) return null;
    const q = { ...data, p, choices };
    if (q.key === "pin") {
      q.target = pinsByPlace.get(p.id)?.find((t) => t.key === data.target);
      if (!q.target || (q.answered && !isMapPoint(q.point))) return null;
    } else if (q.key === "passport") {
      q.other = byId.get(data.other);
      if (!q.other || !["Name", "Capital", "Flag", "Continent"].includes(q.which)) return null;
    } else {
      if (!choices.some((place) => place.id === q.correct)) return null;
      if (q.key === "higher" && !Object.hasOwn(numberFields, q.field)) return null;
      if (q.key === "souvenir") {
        q.souvenir = souvenirs.get(p.gameId)?.find((item) => item.assetAddress === data.souvenir);
        if (!q.souvenir) return null;
      }
    }
    return q;
  }

  function promptFor(chosenMode, preferred, comparison) {
    const key =
      chosenMode === "tour" ? modes[tourStep++ % modes.length] : chosenMode;
    if (key === "puzzle") {
      const pool = [...puzzleTargets.values()];
      const target = puzzleTargets.get(preferred) ||
        shuffle(pool).find((t) => t.placeId !== lastPrompt);
      lastPrompt = target.placeId;
      return puzzleQuestion(target);
    }
    const eligible = edition.places.filter((p) =>
      p.modes.includes(lessons[key][3]),
    );
    const first = eligible.find((p) => p.id === preferred);
    const validPool =
      key === "guess"
        ? eligible.filter((p) => studyImage(p, "outline"))
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
        visits: "Which has more visits in the exercise data?",
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
        flag: "Find the flag of " + placeLabel(p),
        souvenir: "Which place is this souvenir associated with?",
        guess: "Which place has this outline?",
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
    const q = session;
    const section = element("div", "lesson-layout"),
      top = element("div", "lesson-top");
    const modeField = element("label", "select-label", "Lesson · 选择题型");
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
    top.append(modeField);
    const main = element("article", "prompt-card"),
      aside = element("aside", "lesson-context");
    function nextQuestion() {
      session = promptFor(mode);
      goTab("practice");
    }
    if (q.key === "puzzle") {
      if (mode === "puzzle") main.id = "world-puzzle";
      q.puzzle.render(main, nextQuestion, mode === "puzzle");
    } else renderQuestion(main, q, nextQuestion);
    renderLessonContext(aside, q);
    section.append(main, aside);
    parts.append(top, section);
    if (edition.extras) renderRules();
  }
  function renderQuestion(main, q, nextQuestion) {
    const p = q.p;
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
    if (q.key === "take" && !q.answered) {
      const group = wordList(clueWords(p), false);
      group.classList.add("clue-words");
      main.append(group);
    } else if (["guess", "souvenir"].includes(q.key)) {
      const src =
        q.key === "souvenir"
          ? q.souvenir?.image
          : studyImage(p, "outline");
      if (src)
        main.append(
          picture(
            src,
            q.answered ? p.name : "Illustration to identify",
            "prompt-art",
          ),
        );
    } else if (q.key === "passport") {
      const dl = element("dl", "passport-fields");
      main.append(readout(placeLabel(p), ipa(p), zh(p)));
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
              ? placeLabel(displayed)
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
      const notes = q.answered && t.variant === "Capital" ? fieldNotes(p.id, "capital") : [];
      main.append(readout(t.target, info?.ipa, info?.zh, notes));
      if (q.answered) appendPinDetails(main, t, info);
      const board = mapPlate(q.answered ? t : null, q.point);
      if (!q.answered) {
        enableMapPlacement(
          board, element("span", "game-dot guess"),
          "Place your pin. Arrow keys move the crosshair; Enter submits.",
          (point) => answer("pin", point),
        );
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
          placeLabel(candidate) +
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
            ? "Your pin and the reference location"
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
                placeLabel(v) + " " + num(v[q.field]) + " " + numberFields[q.field][2],
            )
            .join("，") +
          "。较大的是 " +
          placeLabel(winner) +
          "。";
      } else if (q.key === "passport") {
        detail =
          "这张练习护照属于" +
          zh(p) +
          "（" +
          placeLabel(p) +
          "）。被替换的栏是 " +
          q.which +
          "，放进去的是" +
          zh(q.other) +
          "的资料。";
      } else if (q.key === "pin") {
        const t = q.target;
        detail =
          "红点是参考位置，蓝点是你的落点。以地图左上角为原点，参考位置的像素坐标为 (" +
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
          readout(placeLabel(p), ipa(p), zh(p), fieldNotes(p.id, "name")),
          chinese("h3", "", "这三个词为什么指向这里？"),
          wordList(clueWords(p)),
          sharedClueNote(p),
        );
        if (edition.noteSources[p.id])
          fb.append(external("Source · 讲解出处", edition.noteSources[p.id]));
      } else
        detail = "本题对应 " + placeLabel(p) + " " + ipa(p) + "（" + zh(p) + "）。";
      if (detail) fb.append(chinese("p", "", detail));
      if (!hasExplanation && edition.placeNotes?.[winner.id])
        fb.append(introduction("", edition.placeNotes[winner.id], winner.id));
      main.append(fb);

      const reviewPlaces = q.key === "passport" ? [p, q.other] : q.choices;
      if (reviewPlaces.length) {
        const cards = element("fieldset", "lesson-word-cards");
        const buttons = element("div", "entry-buttons");
        for (const place of reviewPlaces)
          buttons.append(action(joined([placeLabel(place), zh(place)]), () => openEntry(place.id)));
        cards.append(element("legend", "eyebrow", "Study places · 查看词卡"), buttons);
        main.append(cards);
      }
    }
    const actions = element("div", "entry-buttons");
    if (!q.answered && hasExplanation)
      actions.append(action("Show explanation · 看解析", () => answer(null)));
    actions.append(
      action(q.answered ? "Next question · 下一题" : "Skip · 换一题", nextQuestion),
    );
    if (q.answered && q.key === "pin")
      actions.append(action("Study place · 查看词卡", () => openEntry(p.id)));
    main.append(actions);
  }
  function renderLessonContext(aside, q) {
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
        q.key === "puzzle"
          ? "自由练习不限时，限时挑战按每块拼图的落点累计得分。"
          : "在“地理速查”中搜索题目里的地点，可以查看词卡、地图和参考来源。",
      ),
    );
    const rule = edition.extras?.modeRules.find(
      (r) => r.title === lessons[mode][0],
    );
    if (rule) aside.append(chinese("p", "", rule.scoringZh));
  }
  function renderRules() {
    const extras = edition.extras;
    function disclosure(label) {
      const block = element("details", "rule-index");
      block.append(element("summary", "", label));
      parts.append(block);
      return block;
    }
    const rules = disclosure("Scoring reference · 题型与计分参考");
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
    const ranks = disclosure("30 levels · 等级名称与音标"),
      rankList = element("div", "rank-list");
    for (const r of extras.rankTiers)
      rankList.append(
        readout(r.position + ". " + r.title, "/" + r.ipa + "/", r.titleZh),
      );
    ranks.append(rankList);
    const achievements = disclosure("Challenges · 挑战目标参考");
    for (const a of [...extras.achievements, ...extras.otherPlatformTrophies]) {
      const line = element("article", "study-note");
      line.append(
        element("h4", "", a.title + " · " + a.gamerscore + " pts"),
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
    if (location.hash !== "#guide") helpers.navigate("guide");
    parts.querySelector(".prompt-card").scrollIntoView({ block: "start" });
  }
  function openPuzzle() {
    if (tab === "practice" && mode === "puzzle" && session) return;
    mode = "puzzle";
    session = promptFor(mode);
    goTab("practice");
  }
  function initialize() {
    if (location.hash === "#world-puzzle" && !(tab === "practice" && mode === "puzzle" && session)) openPuzzle();
    else goTab(tab);
    if (tab === "lookup" && location.hash === "#guide" && Number.isFinite(saved.scrollY)) {
      window.addEventListener(
        "load",
        () => requestAnimationFrame(() => window.scrollTo(0, saved.scrollY)),
        { once: true },
      );
    }
  }
  function flagIntroduction(place) {
    const note = ATLAS_FLAG_NOTES[place.id];
    return note ? introduction("flag-introduction", note, place.id) : null;
  }
  function viewFlag(place) {
    const { src, fallback } = flagArtwork(place);
    if (src)
      showPicture(
        src,
        placeLabel(place) + " · Flag",
        place.id === "TWN"
          ? "台湾地区旗帜默认模糊显示。"
          : edition.names[place.id]?.zh || place.name,
        { fallback, content: flagIntroduction(place) },
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
    initialize,
    hasLookupEntry: (id) => lookupById.has(id),
    geographyOnly,
    placeNote,
    openEntry,
    showPlaceInfo,
    startLesson,
    openPuzzle,
    byId,
    placeCap,
    fieldNotes,
    viewFlag,
    flagIntroduction,
    showCity,
    focusLookup,
    learningPin,
    appendPinDetails,
    showPinDialog,
    showSupplementDetails,
  };
}

"use strict";

const guide = document.getElementById("guide");
const notice = document.getElementById("notice");
const terms = scenes.flatMap(scene => scene.terms.map(word => ({ ...word, scene })));
const byId = new Map(terms.map(word => [word.id, word]));
const visualWords = new Set(["sailboat", "awning", "guitar", "clapperboard"]);
const storageKey = "daily.gta-vi.study.v1";
let query = "", filter = "", progress = readProgress();

function readProgress() {
    let value;
    try { value = JSON.parse(localStorage.getItem(storageKey)); } catch { /* Storage can be unavailable. */ }
    const ids = key => new Set(Array.isArray(value?.[key]) ? value[key].filter(id => byId.has(id)) : []);
    const quiz = value?.quiz;
    const valid = quiz && Array.isArray(quiz.questions) && quiz.questions.length > 0
        && Number.isInteger(quiz.index) && quiz.index >= 0 && quiz.index <= quiz.questions.length
        && quiz.questions.every(q => q && byId.has(q.id) && Array.isArray(q.options)
            && q.options.includes(q.id) && q.options.every(id => byId.has(id))
            && (q.answer === null || q.options.includes(q.answer)));
    return { saved: ids("saved"), missed: ids("missed"), learned: ids("learned"), quiz: valid ? quiz : null };
}

function persist() {
    const { saved, missed, learned, quiz } = progress;
    try {
        localStorage.setItem(storageKey, JSON.stringify({ saved: [...saved], missed: [...missed], learned: [...learned], quiz }));
    } catch { notice.textContent = "Progress is available for this visit only · 此浏览器仅能保留本次进度。"; }
}

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function meaning(text) {
    return `<details class="meaning"><summary>中文释义</summary><p>${text}</p></details>`;
}

function listenButton(id, label = "Listen · 朗读") {
    return `<button type="button" class="text-button" data-say="${id}"><span aria-hidden="true">◖))</span> ${label}</button>`;
}

function sceneLink(scene) {
    return `#scene/${scene.id}`;
}

function source(scene) {
    return `<a class="source" href="${scene.source[1]}" target="_blank" rel="noopener noreferrer">Source · ${scene.source[0]} ↗</a>`;
}

function connections(key) {
    const links = guideConnections(key);
    if (!links.length) return "";
    return `<aside class="connections"><h2>Related guides <small>关联图鉴</small></h2><nav class="related">${links.map(link => link.outerHTML).join("")}</nav></aside>`;
}

function sectionTitle(en, zh) {
    return `<h2 class="section-title">${en} <small>${zh}</small></h2>`;
}

function tiles(list) {
    return `<div class="word-grid">${list.map(word => `<a class="word-tile" href="#word/${word.id}"><span lang="en">${word.en}</span><small>/${word.ipa}/</small><span class="tile-arrow" aria-hidden="true">↗</span></a>`).join("")}</div>`;
}

function renderScene(scene) {
    guide.innerHTML = `
        <div class="guide-title"><div><a class="crumb" href="../index.html">← Game Worlds · 游戏图鉴</a><h1>GTA VI <em>Field Guide</em></h1></div><p>Explore Leonida in English.<br><span>从游戏世界走进迈阿密的历史与文化。</span></p></div>
        <nav class="chapters" aria-label="选择场景">${scenes.map(s => `<a href="${sceneLink(s)}" ${s === scene ? 'aria-current="page"' : ""}>${s.en}<small>${s.zh}</small></a>`).join("")}</nav>
        <div class="spread">
            <figure><div class="panorama"><img src="coast.webp" width="1536" height="1024" alt="海滨大道与码头、装饰艺术酒店、街头乐队和片场的原创场景插画">
            ${scenes.map((s,i) => `<a class="pin ${s === scene ? "active" : ""}" style="left:${s.x}%;top:${s.y}%" href="${sceneLink(s)}" aria-label="${s.en} · ${s.zh}">${i + 1}</a>`).join("")}</div>
            <figcaption><span>Miami coast · 场景示意</span><span>点选图中标记探索</span></figcaption></figure>
            <section class="field-note"><p class="category">${scene.kind}</p><h2>${scene.en}</h2><p class="sub">${scene.zh}</p>
            <p class="passage" lang="en">${scene.intro}</p>${meaning(scene.translation)}${listenButton("scene/" + scene.id, "Read aloud · 听短文")}
            <div class="people"><h3>People <small>人物</small></h3>${scene.profiles.map(id => `<a href="#profile/${id}">${people[id][0]} ↗</a>`).join("")}</div>${source(scene)}</section>
        </div>
        <section class="vocab"><div class="section-head">${sectionTitle("Vocabulary", "场景词汇")}<a class="solid" href="#practice/${scene.id}">Practice · 练习 →</a></div>
        ${tiles(scene.terms)}</section>${connections(scene.id)}`;
}

function renderPerson(id) {
    const scene = scenes.find(s => s.profiles.includes(id));
    const [name, zh, role, intro, translation] = people[id];
    guide.innerHTML = `<article class="reader"><a class="crumb" href="${sceneLink(scene)}">← ${scene.en} · ${scene.zh}</a>
        <p class="category">${role}</p><h1>${name}</h1><p class="sub">${zh}</p>${listenButton("name/" + id, "Hear the name · 听名字")}
        <p class="passage">${intro}</p>${meaning(translation)}${listenButton("profile/" + id, "Read aloud · 听介绍")}<p>${source(scene)}</p>
        ${sectionTitle("Words in context", "关联词汇")}${tiles(scene.terms.slice(0,3))}${connections(id)}</article>`;
}

function renderWord(word) {
    const { scene } = word;
    guide.innerHTML = `<article class="reader"><div class="breadcrumb"><a class="crumb" href="#words">← Words · 词库</a><a class="crumb" href="${sceneLink(scene)}">${scene.en} · ${scene.zh}</a></div>
        <p class="category">${scene.kind}</p><h1>${word.en}</h1><p class="ipa">/${word.ipa}/</p>
        <div class="actions">${listenButton("word/" + word.id)}<button class="text-button" data-save="${word.id}" aria-pressed="${progress.saved.has(word.id)}">${progress.saved.has(word.id) ? "Saved · 已收藏" : "Save · 收藏"}</button></div>
        ${meaning(word.zh)}<h2 class="minor">Word partners · 常用搭配</h2><p class="phrase">${word.phrase}</p>
        <h2 class="minor">In a sentence · 例句</h2><p class="passage">${word.example.replace("[", "<strong>").replace("]", "</strong>")}</p>
        ${meaning(word.translation)}${listenButton("example/" + word.id, "Hear the sentence · 听例句")}
        <p class="reader-next"><a class="solid" href="#practice/${scene.id}">Practice this chapter · 本章练习 →</a></p></article>`;
}

function normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function updateMatches() {
    const matches = terms.filter(word => (!filter || word.scene.id === filter)
        && normalize(word.en + " " + word.zh + " " + word.phrase).includes(normalize(query)));
    document.getElementById("matches").innerHTML = matches.length ? tiles(matches) : "<p>No matches · 没有匹配的词条。</p>";
    document.getElementById("count").textContent = matches.length + " / " + terms.length;
}

function renderWords() {
    guide.innerHTML = `<div class="guide-title"><div><p class="category">GTA VI · 场景词库</p><h1>Word <em>index</em></h1></div></div>
        <div class="filters"><label>Search · 搜索<input type="search" id="search" placeholder="英文、中文或搭配"></label>
        <label>Chapter · 章节<select id="filter"><option value="">All · 全部</option>${scenes.map(s => `<option value="${s.id}">${s.en} · ${s.zh}</option>`).join("")}</select></label><output id="count" aria-live="polite"></output></div>
        <div id="matches"></div>${connections("words")}`;
    const input = document.getElementById("search");
    const select = document.getElementById("filter");
    input.value = query;
    select.value = filter;
    input.oninput = () => { query = input.value.trim(); updateMatches(); };
    input.onblur = () => { input.value = query; };
    select.onchange = () => { filter = select.value; updateMatches(); };
    updateMatches();
}

function reviewIds() {
    return [...new Set([...progress.missed, ...progress.saved])];
}

function renderReview() {
    const sections = [["Missed words", "待巩固", progress.missed, "答错的词会出现在这里，再次答对即可移出。"],
        ["Saved words", "收藏词条", progress.saved, "打开词条，点 Save 可加入收藏。"]];
    guide.innerHTML = `<div class="guide-title"><div><p class="category">GTA VI · 我的复习</p><h1>Study <em>notes</em></h1></div>
        <p>已答对 ${progress.learned.size} / ${terms.length} 词</p></div>
        ${reviewIds().length || (progress.quiz?.group === "review" && progress.quiz.index < progress.quiz.questions.length) ? '<a class="solid" href="#practice/review">Practice review words · 复习练习 →</a>' : '<a class="solid" href="#scene/city">Explore scenes · 开始探索 →</a>'}
        ${sections.map(([en,zh,set,empty]) => `<section class="vocab">${sectionTitle(en, zh + " · " + set.size)}${set.size ? tiles([...set].map(id => byId.get(id))) : `<p>${empty}</p>`}</section>`).join("")}`;
}

function makeQuiz(group, pool) {
    return { group, index: 0, questions: shuffle(pool).map((word, i) => {
        const neighbors = word.scene.terms.filter(w => w.id !== word.id);
        return { id: word.id, answer: null,
            mode: visualWords.has(word.id) ? "image" : (i % 3 === 0 && "speechSynthesis" in window ? "audio" : "sentence"),
            options: shuffle([word.id, ...shuffle(neighbors).slice(0, 2).map(w => w.id)]) };
    }) };
}

function currentQuestion() {
    const quiz = progress.quiz;
    return quiz?.questions[quiz.index];
}

function renderQuiz(group) {
    const scene = scenes.find(s => s.id === group);
    const pool = group === "review" ? reviewIds().map(id => byId.get(id)) : terms.filter(w => w.scene === scene);
    if (!progress.quiz || progress.quiz.group !== group) {
        if (!pool.length) { renderReview(); return; }
        progress.quiz = makeQuiz(group, pool);
        persist();
    }
    const quiz = progress.quiz, q = currentQuestion();
    const back = scene ? sceneLink(scene) : "#review";
    const title = scene ? scene.en : "Review words";
    if (!q) {
        const correct = quiz.questions.filter(item => item.answer === item.id).length;
        guide.innerHTML = `<article class="reader"><a class="crumb" href="${back}">← ${title}</a><p class="category">Practice · 本轮完成</p><h1>Round <em>complete</em></h1>
            <p class="score">${correct} / ${quiz.questions.length}</p><p>答错的词已加入复习。</p><div class="actions"><a class="solid" href="#review">Study notes · 查看复习</a>
            ${pool.length ? '<button class="text-button" data-restart>Try again · 再练一轮</button>' : ""}</div></article>`;
        return;
    }
    const word = byId.get(q.id);
    const prompts = {
        image: `<h2>What do you see?</h2><p>看图选词</p><img class="quiz-image" src="details/${word.id}.webp" alt="待辨认的场景局部">`,
        audio: `<h2>Listen and identify.</h2><p>听英文，选择中文释义。</p>${listenButton("quiz/" + word.id)} <button class="text-button" data-text>改做阅读题</button>`,
        sentence: `<h2>Complete the sentence.</h2><p>选择适合语境的词。</p><p class="passage">${word.example.replace(/\[.*?\]/, "_____")}</p>`,
    };
    guide.innerHTML = `<article class="reader"><a class="crumb" href="${back}">← ${title}</a><div class="quiz-head"><p class="category">Practice · 练习</p><span>${quiz.index + 1} / ${quiz.questions.length}</span></div>
        ${prompts[q.mode]}<div class="answers">${q.options.map(id => `<button data-answer="${id}" ${q.answer ? "disabled" : ""} class="${q.answer && id === q.id ? "right" : q.answer === id ? "wrong" : ""}">${q.mode === "audio" ? byId.get(id).zh : byId.get(id).en}</button>`).join("")}</div>
        ${q.answer ? `<div class="feedback" role="status"><strong>${q.answer === q.id ? "Correct · 答对了" : "Try to remember · 再看一眼"}</strong><p>${word.en} · ${word.zh}</p>
        ${q.answer !== q.id ? `<p>你选的 ${byId.get(q.answer).en} 指「${byId.get(q.answer).zh}」。</p>` : ""}<p>${word.translation}</p></div>
        <button class="solid" data-next>${quiz.index + 1 === quiz.questions.length ? "Finish · 看结果" : "Next · 下一题"} →</button>` : ""}</article>`;
}

function showRoute(scroll = true) {
    const [page = "scene", id] = location.hash.slice(1).split("/").filter(Boolean);
    const scene = scenes.find(s => s.id === id);
    let tab = "scene";
    if (page === "words") { renderWords(); tab = "words"; }
    else if (page === "word" && byId.has(id)) { renderWord(byId.get(id)); tab = "words"; }
    else if (page === "review") { renderReview(); tab = "review"; }
    else if (page === "practice" && (scene || id === "review")) { renderQuiz(id); tab = id === "review" ? "review" : "scene"; }
    else if (page === "profile" && Object.hasOwn(people, id)) renderPerson(id);
    else renderScene(scene || scenes[0]);
    for (const link of document.querySelectorAll("[data-page]")) {
        if (link.dataset.page === tab) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    }
    document.title = (guide.querySelector("h1,h2")?.textContent || "GTA VI") + " · GTA VI 英语图鉴";
    if (scroll) window.scrollTo(0,0);
}

function play(button) {
    const [kind, id] = button.dataset.say.split("/");
    const word = byId.get(id);
    let text;
    if (kind === "scene") text = scenes.find(s => s.id === id).intro;
    else if (kind === "name" || kind === "profile") text = people[id][kind === "name" ? 0 : 3];
    else text = kind === "example" ? word.example.replace(/[\[\]]/g, "") : word.en;
    speakEnglish(text, () => {
        if (!button.isConnected) return;
        if (kind === "quiz" && !currentQuestion()?.answer) switchToText();
        notice.textContent = "Audio unavailable · 当前设备语音不可用，可阅读音标或完成阅读题。";
    });
}

function switchToText() {
    const q = currentQuestion();
    if (!q || q.answer) return;
    q.mode = "sentence";
    persist();
    renderQuiz(progress.quiz.group);
}

guide.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    const action = button.dataset;
    if (action.say) { play(button); return; }
    if (action.save) {
        if (progress.saved.has(action.save)) progress.saved.delete(action.save);
        else progress.saved.add(action.save);
        persist();
        const saved = progress.saved.has(action.save);
        button.setAttribute("aria-pressed", String(saved));
        button.textContent = saved ? "Saved · 已收藏" : "Save · 收藏";
        return;
    }
    const quiz = progress.quiz, q = currentQuestion();
    if (!quiz) return;
    const group = quiz.group;
    if ("restart" in action) progress.quiz = null;
    else if ("text" in action) { switchToText(); return; }
    else if (action.answer && q && !q.answer) {
        q.answer = action.answer;
        if (q.answer === q.id) { progress.learned.add(q.id); progress.missed.delete(q.id); }
        else { progress.missed.add(q.id); progress.learned.delete(q.id); }
    } else if ("next" in action && q?.answer) quiz.index++;
    else return;
    persist();
    renderQuiz(group);
});

window.addEventListener("hashchange", () => {
    window.speechSynthesis?.cancel();
    notice.textContent = "";
    showRoute();
});
window.addEventListener("pageshow", event => {
    if (event.persisted) { progress = readProgress(); showRoute(false); }
});
showRoute(false);

// Each pair describes one connection. Both endpoints link back to the other.
const guideConnections = (() => {
    const root = new URL("../", document.currentScript.src);
    const pages = {
        florida: ["meridian-atlas/index.html#place/US-FL", "Florida · 地图上的佛罗里达州"],
        vocabulary: ["vocabulary/index.html", "英语词汇图鉴"],
        history: ["history/index.html", "历史图鉴"],
        culture: ["culture/index.html", "文化图鉴"],
        people: ["people/index.html", "人物图鉴"],
        stars: ["screen-stars/index.html", "影视明星图鉴"],
        city: ["games/gta-vi/index.html#scene/city", "GTA VI · 海滨街区"],
        architecture: ["games/gta-vi/index.html#scene/architecture", "GTA VI · 建筑与城市历史"],
        music: ["games/gta-vi/index.html#scene/music", "GTA VI · 电台与音乐"],
        film: ["games/gta-vi/index.html#scene/film", "GTA VI · 镜头里的迈阿密"],
        gloria: ["games/gta-vi/index.html#profile/gloria", "GTA VI · 歌手 Gloria Estefan"],
        don: ["games/gta-vi/index.html#profile/don", "GTA VI · 演员 Don Johnson"],
        barbara: ["games/gta-vi/index.html#profile/barbara", "GTA VI · 建筑保护倡议者 Barbara Capitman"],
        words: ["games/gta-vi/index.html#words", "GTA VI · 场景词库"],
    };
    const pairs = [
        ["florida", "city"], ["vocabulary", "words"], ["history", "architecture"],
        ["history", "barbara"], ["culture", "music"], ["culture", "architecture"],
        ["people", "gloria"], ["people", "barbara"], ["stars", "don"], ["stars", "film"],
    ];
    return function linksFor(key) {
        return pairs.filter(pair => pair.includes(key)).map(pair => {
            const [path, title] = pages[pair.find(endpoint => endpoint !== key)];
            const link = document.createElement("a");
            link.href = new URL(path, root).href;
            link.textContent = title;
            return link;
        });
    };
})();
document.querySelectorAll("[data-related]").forEach(node => node.append(...guideConnections(node.dataset.related)));

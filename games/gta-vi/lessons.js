// Brackets mark the expression that a learner supplies during sentence practice.
function term(id, en, ipa, zh, phrase, example, translation) {
    return { id, en, ipa, zh, phrase, example, translation };
}

const scenes = [
    {
        id: "city", en: "City streets", zh: "海滨街区", x: 19, y: 34,
        kind: "Game world · 游戏世界",
        intro: "Vice City is a fictional city in Leonida. Start by the water and follow the boulevard. What can you see above the palm trees?",
        translation: "Vice City 是游戏中 Leonida 州的一座虚构城市。从水边沿大道前行，看看棕榈树上方能看到什么。",
        source: ["Rockstar Games · People & Places", "https://www.rockstargames.com/VI/only-in-leonida"],
        profiles: ["lucia", "jason"],
        terms: [
            term("waterfront", "waterfront", "ˈwɔtɚˌfrʌnt", "滨水区", "along the waterfront", "We walked along the [waterfront] beside the bay.", "我们沿海湾边的滨水区散步。"),
            term("skyline", "skyline", "ˈskaɪˌlaɪn", "城市天际线", "the city skyline", "The towers form a jagged [skyline] against the evening sky.", "高楼在晚空下勾勒出错落的天际线。"),
            term("boulevard", "boulevard", "ˈbʊləˌvɑrd", "林荫大道；城市宽阔干道", "a palm-lined boulevard", "Two rows of palms line the broad [boulevard] through town.", "两排棕榈树沿着穿城大道延伸。"),
            term("marina", "marina", "məˈrinə", "游艇码头", "dock at a marina", "The [marina] has berths for sixty small boats.", "这个游艇码头有六十个小船泊位。"),
            term("sailboat", "sailboat", "ˈseɪlˌboʊt", "帆船", "steer a sailboat", "Wind filled the white sail and pushed the [sailboat] across the bay.", "风鼓起白帆，推着帆船驶过海湾。"),
            term("shoreline", "shoreline", "ˈʃɔrˌlaɪn", "岸线", "follow the shoreline", "The map traces the [shoreline] where land meets water.", "地图勾勒出水陆相接的岸线。"),
            term("intersection", "intersection", "ˌɪntɚˈsɛkʃən", "道路交叉口", "at the intersection", "The two streets meet at a busy [intersection].", "这两条街交会在一个繁忙的路口。"),
            term("pedestrian", "pedestrian", "pəˈdɛstriən", "行人", "a pedestrian crossing", "The driver stopped to let a [pedestrian] cross the street.", "司机停车让一位行人过马路。"),
        ],
    },
    {
        id: "architecture", en: "Art Deco", zh: "建筑与城市历史", x: 65, y: 25,
        kind: "City history · 城市历史",
        intro: "In Miami Beach, many Art Deco hotels date to the 1930s. Look for curved corners, geometric shapes and bands of color across the front of a building.",
        translation: "迈阿密海滩的许多装饰艺术风格酒店建于二十世纪三十年代。留意建筑正面的弧形转角、几何造型和横向色带。",
        source: ["City of Miami Beach · Art Deco", "https://www.miamibeachfl.gov/architecture/art-deco/"],
        profiles: ["barbara"],
        terms: [
            term("facade", "façade", "fəˈsɑd", "建筑正立面", "a hotel façade", "Pink stripes run across the hotel's [façade] above the entrance.", "粉红色条纹横贯酒店入口上方的正立面。"),
            term("awning", "awning", "ˈɔnɪŋ", "遮阳篷", "under the awning", "A canvas [awning] shades the shop window.", "一顶帆布遮阳篷为橱窗遮阴。"),
            term("neon", "neon", "ˈniˌɑn", "霓虹灯；氖", "a neon sign", "The old glass tubes glow with the warm light of [neon].", "老式玻璃灯管泛着温暖的霓虹光。"),
            term("pastel", "pastel", "pæˈstɛl", "柔和的浅色调", "pastel colors", "The designer chose [pastel] shades of pink and blue.", "设计师选用了柔和的浅粉色和浅蓝色。"),
            term("symmetry", "symmetry", "ˈsɪmətri", "对称", "a sense of symmetry", "Matching windows on either side give the entrance [symmetry].", "两侧相同的窗户让入口呈现对称美。"),
            term("landmark", "landmark", "ˈlændˌmɑrk", "地标", "a local landmark", "Everyone uses the clock tower as a [landmark] when giving directions.", "大家指路时都把钟楼当作地标。"),
            term("preservation", "preservation", "ˌprɛzɚˈveɪʃən", "保护；保存", "historic preservation", "The group works for the [preservation] of historic buildings.", "这个团体致力于历史建筑保护。"),
            term("district", "district", "ˈdɪstrɪkt", "街区；地区", "a historic district", "Several blocks of old hotels belong to the historic [district].", "好几个街区的老酒店都属于这片历史区域。"),
        ],
    },
    {
        id: "music", en: "On air", zh: "电台与音乐", x: 50, y: 70,
        kind: "Local culture · 地方文化",
        intro: "Gloria Estefan and Miami Sound Machine brought Latin rhythms to pop audiences. Imagine a live set by the bay. Which part would you notice first, the beat or the vocals?",
        translation: "Gloria Estefan 和 Miami Sound Machine 把拉丁节奏带给了流行音乐听众。想象一场海边演出，你会先注意到节拍还是人声？",
        source: ["Library of Congress · The Estefans", "https://www.loc.gov/events/gershwin-prize/honorees/2019-emilio-gloria-estefan/"],
        profiles: ["gloria"],
        terms: [
            term("rhythm", "rhythm", "ˈrɪðəm", "节奏", "keep the rhythm", "Tap the pattern of long and short notes to feel the [rhythm].", "跟着长短音符的变化拍手，感受节奏。"),
            term("vocals", "vocals", "ˈvoʊkəlz", "歌曲中的人声", "lead vocals", "The instruments fade and only the singer's [vocals] remain.", "乐器声渐弱，只剩下歌手的人声。"),
            term("guitar", "guitar", "ɡɪˈtɑr", "吉他", "strum a guitar", "She strummed all six strings of her [guitar].", "她拨动吉他的六根弦。"),
            term("percussion", "percussion", "pɚˈkʌʃən", "打击乐；打击乐器", "the percussion section", "Drums and shakers belong to the [percussion] family.", "鼓和沙锤都属于打击乐器。"),
            term("on-air", "on air", "ɑn ɛr", "正在播出", "live on air", "The host went [on air] as soon as the red studio light came on.", "录音室红灯一亮，主持人便开始直播。"),
            term("airplay", "airplay", "ˈɛrˌpleɪ", "歌曲在电台的播放", "get radio airplay", "Local DJs gave the new single plenty of [airplay].", "当地电台主持人频繁播放这首新单曲。"),
            term("record-label", "record label", "ˈrɛkɚd ˌleɪbəl", "唱片公司；厂牌", "sign with a record label", "The band signed with a [record label] to release its first album.", "乐队签约一家唱片公司，准备发行首张专辑。"),
            term("encore", "encore", "ˈɑnˌkɔr", "返场加演", "return for an encore", "After the final song, the crowd asked for an [encore].", "最后一首歌结束后，观众要求返场加演。"),
        ],
    },
    {
        id: "film", en: "On screen", zh: "镜头里的迈阿密", x: 83, y: 66,
        kind: "Film & television · 影视文化",
        intro: "Miami Vice aired from 1984 to 1989. Don Johnson and Philip Michael Thomas played the two lead detectives. Follow the camera from the actors to the crew.",
        translation: "《迈阿密风云》于 1984 至 1989 年播出。Don Johnson 和 Philip Michael Thomas 饰演两位主角警探。跟着镜头，从台前演员走向幕后团队。",
        source: ["Television Academy · Miami Vice", "https://interviews.televisionacademy.com/shows/miami-vice"],
        profiles: ["don", "philip"],
        terms: [
            term("cast", "cast", "kæst", "全体演员", "the original cast", "The director introduced every actor in the [cast].", "导演介绍了这部作品的全体演员。"),
            term("crew", "crew", "kru", "幕后工作人员", "the film crew", "The lighting and sound teams are part of the [crew].", "灯光和录音团队都属于幕后工作人员。"),
            term("role", "role", "roʊl", "角色", "play the role of", "The actor learned to sail for his [role] as a captain.", "这位演员为饰演船长学会了航海。"),
            term("episode", "episode", "ˈɛpəˌsoʊd", "剧集中的一集", "the opening episode", "The first [episode] introduces the two detectives.", "第一集介绍了两位警探。"),
            term("on-location", "on location", "ɑn loʊˈkeɪʃən", "在实景拍摄地", "film on location", "They filmed [on location] in the city where the story takes place.", "他们在故事发生的城市实地拍摄。"),
            term("close-up", "close-up", "ˈkloʊsˌʌp", "特写镜头", "a close-up of a face", "The [close-up] filled the screen with the actor's eyes.", "特写镜头里，演员的双眼占满了画面。"),
            term("clapperboard", "clapperboard", "ˈklæpɚˌbɔrd", "场记板", "snap the clapperboard", "Before the take, an assistant snapped the striped [clapperboard].", "开拍前，助理拍响了带条纹的场记板。"),
            term("soundtrack", "soundtrack", "ˈsaʊndˌtræk", "影视配乐；原声带", "the original soundtrack", "The film's [soundtrack] includes songs by several local bands.", "这部电影的原声带收录了几支当地乐队的歌曲。"),
        ],
    },
];

const people = {
    lucia: ["Lucia Caminos", "露西娅·卡米诺斯", "Game character · 游戏角色", "Lucia wants a better life for her family. She sees a future with Jason.", "露西娅希望家人过上更好的生活，也把与杰森同行视作未来的出路。"],
    jason: ["Jason Duval", "杰森·杜瓦尔", "Game character · 游戏角色", "Jason works in the Keys after a stint in the Army. Meeting Lucia changes his outlook.", "杰森退伍后在群岛谋生，遇见露西娅改变了他对未来的看法。"],
    barbara: ["Barbara Capitman", "芭芭拉·卡皮特曼", "Preservationist · 建筑保护倡议者", "Barbara Capitman helped organize the effort to protect South Beach's Art Deco buildings.", "芭芭拉·卡皮特曼参与组织了保护南海滩装饰艺术建筑的行动。"],
    gloria: ["Gloria Estefan", "格洛丽亚·埃斯特凡", "Singer & songwriter · 创作歌手", "Gloria Estefan sang with Miami Sound Machine. Their hit Conga blends Latin rhythms with pop.", "格洛丽亚·埃斯特凡曾随 Miami Sound Machine 演唱。热门单曲《Conga》融合了拉丁节奏和流行音乐。"],
    don: ["Don Johnson", "唐·约翰逊", "Actor · 演员", "Don Johnson played Sonny Crockett in the television series Miami Vice.", "唐·约翰逊在剧集《迈阿密风云》中饰演桑尼·克罗克特。"],
    philip: ["Philip Michael Thomas", "菲利普·迈克尔·托马斯", "Actor · 演员", "Philip Michael Thomas played Ricardo “Rico” Tubbs, Crockett's partner in Miami Vice.", "菲利普·迈克尔·托马斯饰演《迈阿密风云》中克罗克特的搭档里科·塔布斯。"],
};

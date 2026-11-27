"use strict";

// The GeoNames record is the city entry shown alongside each game landmark.
const LANDMARK_SUPPLEMENT_CITIES = new Map([
  ["Landmark_BurjKhalifa", "https://www.geonames.org/292223/"],
  ["Landmark_SydneyOperaHouse", "https://www.geonames.org/2147714/"],
  ["Landmark_StariMost", "https://www.geonames.org/3194828/"],
  ["Landmark_ChristTheRedeemer", "https://www.geonames.org/3451190/"],
  ["Landmark_SagradaFamilia", "https://www.geonames.org/3128760/"],
  ["Landmark_DubrovnikOldTown", "https://www.geonames.org/3201047/"],
  ["Landmark_AngkorWat", "https://www.geonames.org/1822214/"],
  ["Landmark_HassanIIMosque", "https://www.geonames.org/2553604/"],
  ["Landmark_ShwedagonPagoda", "https://www.geonames.org/1298824/"],
  ["Landmark_BadshahiMosque", "https://www.geonames.org/1172451/"],
  ["Landmark_WawelCastle", "https://www.geonames.org/3094802/"],
  ["Landmark_MasjidAlHaram", "https://www.geonames.org/104515/"],
  ["Landmark_HagiaSophia", "https://www.geonames.org/745044/"],
  ["Landmark_HollywoodSign", "https://www.geonames.org/5368361/"],
  ["Landmark_CloudGate", "https://www.geonames.org/4887398/"],
  ["Landmark_FrenchQuarter", "https://www.geonames.org/4335045/"],
  ["Landmark_FortMcHenry", "https://www.geonames.org/4347778/"],
  ["Landmark_GatewayArch", "https://www.geonames.org/4407066/"],
  ["Landmark_StatueOfLiberty2", "https://www.geonames.org/5128581/"],
  ["Landmark_RockRollHallOfFame", "https://www.geonames.org/5150529/"],
  ["Landmark_LibertyBell", "https://www.geonames.org/4560349/"],
  ["Landmark_FortSumter", "https://www.geonames.org/4574324/"],
  ["Landmark_Graceland", "https://www.geonames.org/4641239/"],
  ["Landmark_TheAlamo", "https://www.geonames.org/4726206/"],
  ["Landmark_SpaceNeedle", "https://www.geonames.org/5809844/"],
  ["Landmark_MilwaukeeArtMuseum", "https://www.geonames.org/5263045/"],
  ["Landmark_Registan", "https://www.geonames.org/1216265/"],
]);

// Lookup-only geography, keyed by atlas place ID. Each row holds an English name,
// Chinese name, source URL and optional search aliases.
const LOOKUP_SUPPLEMENTS = {
  "AFG": {
    cities: [
      ["Kandahar", "坎大哈", "https://www.geonames.org/1138336/"],
      ["Herat", "赫拉特", "https://www.geonames.org/1140026/"],
    ],
    sights: [
      ["Cultural Landscape and Archaeological Remains of the Bamiyan Valley", "巴米扬山谷的文化景观和考古遗迹", "https://whc.unesco.org/en/list/208/"],
    ],
  },
  "AGO": {
    cities: [
      ["Huambo", "万博", "https://www.geonames.org/3348313/"],
      ["Benguela", "本格拉", "https://www.geonames.org/3351663/"],
    ],
    sights: [
      ["Mbanza Kongo, Vestiges of the Capital of the former Kingdom of Kongo", "姆班扎刚果古城", "https://whc.unesco.org/en/list/1511/"],
    ],
  },
  "ALB": {
    cities: [
      ["Shkodër", "斯库台", "https://www.geonames.org/3184081/"],
    ],
    sights: [
      ["Butrint", "布特林特", "https://whc.unesco.org/en/list/570/"],
    ],
  },
  "AND": {
    sights: [
      ["Madriu-Perafita-Claror Valley", "马德留－配拉菲塔－克拉罗尔大峡谷", "https://whc.unesco.org/en/list/1160/"],
    ],
  },
  "ARE": {
    cities: [
      ["Dubai", "迪拜", "https://www.geonames.org/292223/"],
      ["Sharjah", "沙迦", "https://www.geonames.org/292672/"],
      ["Al Ain", "艾因", "https://www.geonames.org/292913/"],
    ],
    sights: [
      ["Cultural Sites of Al Ain (Hafit, Hili, Bidaa Bint Saud and Oases Areas)", "艾恩文化遗址：哈菲特、西里、比达-宾特-沙特以及绿洲", "https://whc.unesco.org/en/list/1343/"],
    ],
  },
  "ARG": {
    cities: [
      ["Córdoba", "科尔多瓦", "https://www.geonames.org/3860259/"],
      ["Rosario", "罗萨里奥", "https://www.geonames.org/3838583/"],
      ["Mendoza", "门多萨", "https://www.geonames.org/3844421/"],
    ],
    sights: [
      ["Los Glaciares National Park", "冰川国家公园", "https://whc.unesco.org/en/list/145/"],
      ["Península Valdés", "瓦尔德斯半岛", "https://whc.unesco.org/en/list/937/"],
    ],
  },
  "ARM": {
    sights: [
      ["Monasteries of Haghpat and Sanahin", "哈格帕特修道院和萨那欣修道院", "https://whc.unesco.org/en/list/777/"],
    ],
  },
  "ATF": {
    sights: [
      ["French Austral Lands and Seas", "法属南部领地和领海", "https://whc.unesco.org/en/list/1603/"],
    ],
  },
  "AUS": {
    cities: [
      ["Sydney", "悉尼", "https://www.geonames.org/2147714/"],
      ["Melbourne", "墨尔本", "https://www.geonames.org/2158177/"],
      ["Brisbane", "布里斯班", "https://www.geonames.org/2174003/"],
      ["Perth", "珀斯", "https://www.geonames.org/2063523/"],
    ],
    sights: [
      ["Great Barrier Reef", "大堡礁", "https://whc.unesco.org/en/list/154/"],
      ["Uluru-Kata Tjuta National Park", "乌卢鲁－卡塔曲塔国家公园", "https://whc.unesco.org/en/list/447/", "Ayers Rock", "艾尔斯岩"],
    ],
  },
  "AUT": {
    cities: [
      ["Salzburg", "萨尔茨堡", "https://www.geonames.org/2766824/"],
      ["Graz", "格拉茨", "https://www.geonames.org/2778067/"],
      ["Linz", "林茨", "https://www.geonames.org/2772400/"],
    ],
    sights: [
      ["Historic Centre of the City of Salzburg", "萨尔茨堡历史城区", "https://whc.unesco.org/en/list/784/"],
      ["Hallstatt-Dachstein / Salzkammergut Cultural Landscape", "哈尔施塔特－达特施泰因萨尔茨卡默古特文化景观", "https://whc.unesco.org/en/list/806/"],
    ],
  },
  "AZE": {
    cities: [
      ["Ganja", "占贾", "https://www.geonames.org/586523/"],
    ],
    sights: [
      ["Gobustan Rock Art Cultural Landscape", "戈布斯坦岩石艺术文化景观", "https://whc.unesco.org/en/list/1076/"],
    ],
  },
  "BEL": {
    cities: [
      ["Antwerp", "安特卫普", "https://www.geonames.org/2803138/"],
      ["Ghent", "根特", "https://www.geonames.org/2797656/"],
      ["Liège", "列日", "https://www.geonames.org/2792413/"],
    ],
    sights: [
      ["Historic Centre of Brugge", "布鲁日历史中心", "https://whc.unesco.org/en/list/996/"],
    ],
  },
  "BFA": {
    cities: [
      ["Bobo Dioulasso", "博博迪乌拉索", "https://www.geonames.org/2362344/"],
    ],
    sights: [
      ["Ancient Ferrous Metallurgy Sites of Burkina Faso", "布基纳法索古冶铁遗址", "https://whc.unesco.org/en/list/1602/"],
    ],
  },
  "BGD": {
    cities: [
      ["Chattogram", "吉大港", "https://www.geonames.org/1205733/", "Chittagong"],
      ["Khulna", "库尔纳", "https://www.geonames.org/1336135/"],
    ],
    sights: [
      ["Ruins of the Buddhist Vihara at Paharpur", "帕哈尔普尔的佛教毗诃罗遗址", "https://whc.unesco.org/en/list/322/"],
    ],
  },
  "BGR": {
    cities: [
      ["Plovdiv", "普罗夫迪夫", "https://www.geonames.org/728193/"],
      ["Varna", "瓦尔纳", "https://www.geonames.org/726050/"],
    ],
    sights: [
      ["Ancient City of Nessebar", "内塞巴尔古城", "https://whc.unesco.org/en/list/217/"],
      ["Pirin National Park", "皮林国家公园", "https://whc.unesco.org/en/list/225/"],
    ],
  },
  "BHR": {
    sights: [
      ["Dilmun Burial Mounds", "迪尔穆恩墓葬群", "https://whc.unesco.org/en/list/1542/"],
    ],
  },
  "BIH": {
    cities: [
      ["Mostar", "莫斯塔尔", "https://www.geonames.org/3194828/"],
      ["Banja Luka", "巴尼亚卢卡", "https://www.geonames.org/3204541/"],
    ],
    sights: [
      ["Mehmed Paša Sokolović Bridge in Višegrad", "迈赫迈德•巴什•索科罗维奇的古桥", "https://whc.unesco.org/en/list/1260/"],
    ],
  },
  "BLR": {
    cities: [
      ["Gomel", "戈梅利", "https://www.geonames.org/627907/"],
    ],
    sights: [
      ["Architectural, Residential and Cultural Complex of the Radziwill Family at Nesvizh", "涅斯维日的拉济维乌家族城堡建筑群", "https://whc.unesco.org/en/list/1196/"],
    ],
  },
  "BOL": {
    cities: [
      ["Santa Cruz de la Sierra", "圣克鲁斯", "https://www.geonames.org/3904906/"],
      ["Cochabamba", "科恰班巴", "https://www.geonames.org/3919968/"],
    ],
    sights: [
      ["Tiwanaku: Spiritual and Political Centre of the Tiwanaku Culture", "蒂瓦纳科文化的精神和政治中心", "https://whc.unesco.org/en/list/567/"],
    ],
  },
  "BRA": {
    cities: [
      ["São Paulo", "圣保罗", "https://www.geonames.org/3448439/"],
      ["Rio de Janeiro", "里约热内卢", "https://www.geonames.org/3451190/"],
      ["Salvador", "萨尔瓦多", "https://www.geonames.org/3450554/"],
    ],
    sights: [
      ["Historic Town of Ouro Preto", "欧鲁普雷图历史名镇", "https://whc.unesco.org/en/list/124/"],
      ["Central Amazon Conservation Complex", "亚马逊河中心综合保护区", "https://whc.unesco.org/en/list/998/"],
      ["Pantanal Conservation Area", "潘塔奈尔保护区", "https://whc.unesco.org/en/list/999/"],
    ],
  },
  "BRB": {
    sights: [
      ["Historic Bridgetown and its Garrison", "布里奇顿及其军事要塞", "https://whc.unesco.org/en/list/1376/"],
    ],
  },
  "BWA": {
    sights: [
      ["Tsodilo", "措迪洛山", "https://whc.unesco.org/en/list/1021/"],
    ],
  },
  "CAN": {
    cities: [
      ["Toronto", "多伦多", "https://www.geonames.org/6167865/"],
      ["Montreal", "蒙特利尔", "https://www.geonames.org/6077243/"],
      ["Vancouver", "温哥华", "https://www.geonames.org/6173331/"],
    ],
    sights: [
      ["Nahanni National Park", "纳汉尼国家公园", "https://whc.unesco.org/en/list/24/"],
      ["Dinosaur Provincial Park", "艾伯塔省恐龙公园", "https://whc.unesco.org/en/list/71/"],
      ["Canadian Rocky Mountain Parks", "加拿大落基山公园", "https://whc.unesco.org/en/list/304/", "Banff", "班夫"],
    ],
  },
  "CHE": {
    cities: [
      ["Zürich", "苏黎世", "https://www.geonames.org/2657896/"],
      ["Geneva", "日内瓦", "https://www.geonames.org/2660646/"],
      ["Basel", "巴塞尔", "https://www.geonames.org/2661604/"],
    ],
    sights: [
      ["Abbey of St Gall", "圣加尔修道院", "https://whc.unesco.org/en/list/268/"],
    ],
  },
  "CHL": {
    cities: [
      ["Valparaíso", "瓦尔帕莱索", "https://www.geonames.org/3868626/"],
      ["Concepción", "康塞普西翁", "https://www.geonames.org/3893894/"],
    ],
    sights: [
      ["Historic Quarter of the Seaport City of Valparaíso", "瓦尔帕莱索港口城市历史区", "https://whc.unesco.org/en/list/959/"],
    ],
  },
  "CHN": {
    cities: [
      ["Shanghai", "上海", "https://www.geonames.org/1796236/"],
      ["Guangzhou", "广州", "https://www.geonames.org/1809858/", "Canton"],
      ["Shenzhen", "深圳", "https://www.geonames.org/1795565/"],
      ["Chengdu", "成都", "https://www.geonames.org/1815286/"],
      ["Chongqing", "重庆", "https://www.geonames.org/1814906/"],
      ["Xi'an", "西安", "https://www.geonames.org/1790630/", "Xian"],
    ],
    sights: [
      ["Mount Taishan", "泰山", "https://whc.unesco.org/en/list/437/"],
      ["Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang", "明清故宫（北京故宫、沈阳故宫）", "https://whc.unesco.org/en/list/439/", "Forbidden City", "Palace Museum", "紫禁城"],
      ["Mogao Caves", "莫高窟", "https://whc.unesco.org/en/list/440/", "Dunhuang", "敦煌莫高窟"],
      ["Mausoleum of the First Qin Emperor", "秦始皇陵及兵马俑坑", "https://whc.unesco.org/en/list/441/", "Terracotta Army", "Terracotta Warriors", "西安兵马俑"],
      ["Mount Huangshan", "黄山", "https://whc.unesco.org/en/list/547/"],
      ["Jiuzhaigou Valley Scenic and Historic Interest Area", "九寨沟风景名胜区", "https://whc.unesco.org/en/list/637/"],
    ],
  },
  "CIV": {
    cities: [
      ["Bouaké", "布瓦凯", "https://www.geonames.org/2290956/"],
    ],
    sights: [
      ["Taï National Park", "塔伊国家公园", "https://whc.unesco.org/en/list/195/"],
    ],
  },
  "CMR": {
    cities: [
      ["Douala", "杜阿拉", "https://www.geonames.org/2232593/"],
    ],
    sights: [
      ["Dja Faunal Reserve", "德贾动物保护区", "https://whc.unesco.org/en/list/407/"],
    ],
  },
  "COD": {
    cities: [
      ["Lubumbashi", "卢本巴希", "https://www.geonames.org/922704/"],
      ["Mbuji-Mayi", "姆布吉马伊", "https://www.geonames.org/209228/"],
    ],
    sights: [
      ["Salonga National Park", "萨隆加国家公园", "https://whc.unesco.org/en/list/280/"],
    ],
  },
  "COG": {
    cities: [
      ["Pointe-Noire", "黑角", "https://www.geonames.org/2255414/"],
    ],
    sights: [
      ["Forest Massif of Odzala-Kokoua", "奥扎拉-科科阿森林高地", "https://whc.unesco.org/en/list/692/"],
    ],
  },
  "COL": {
    cities: [
      ["Medellín", "麦德林", "https://www.geonames.org/3674962/"],
      ["Cali", "卡利", "https://www.geonames.org/3687925/"],
      ["Barranquilla", "巴兰基亚", "https://www.geonames.org/3689147/"],
    ],
    sights: [
      ["Port, Fortresses and Group of Monuments, Cartagena", "卡塔赫纳港口、要塞和古迹群", "https://whc.unesco.org/en/list/285/"],
    ],
  },
  "COM": {
    sights: [
      ["The Medinas of the Historic Sultanates of the Comoros", "科摩罗历史苏丹国麦地那", "https://whc.unesco.org/en/list/1768/"],
    ],
  },
  "CPV": {
    sights: [
      ["Cidade Velha, Historic Centre of Ribeira Grande", "旧城里贝拉格兰德历史中心", "https://whc.unesco.org/en/list/1310/"],
    ],
  },
  "CRI": {
    sights: [
      ["Cocos Island National Park", "科科斯岛国家公园", "https://whc.unesco.org/en/list/820/"],
    ],
  },
  "CUB": {
    cities: [
      ["Santiago de Cuba", "圣地亚哥-德古巴", "https://www.geonames.org/3536729/"],
      ["Camagüey", "卡马圭", "https://www.geonames.org/3566067/"],
    ],
    sights: [
      ["Viñales Valley", "比尼亚莱斯山谷", "https://whc.unesco.org/en/list/840/"],
    ],
  },
  "CUW": {
    sights: [
      ["Historic Area of Willemstad, Inner City and Harbour, Curaçao", "威廉斯塔德历史城区与港口", "https://whc.unesco.org/en/list/819/"],
    ],
  },
  "CYP": {
    cities: [
      ["Limassol", "利马索尔", "https://www.geonames.org/146384/"],
    ],
    sights: [
      ["Painted Churches in the Troodos Region", "特罗多斯地区的彩绘教堂", "https://whc.unesco.org/en/list/351/"],
    ],
  },
  "CZE": {
    cities: [
      ["Brno", "布尔诺", "https://www.geonames.org/3078610/"],
      ["Ostrava", "俄斯特拉发", "https://www.geonames.org/3068799/"],
    ],
    sights: [
      ["Historic Centre of Český Krumlov", "克鲁姆洛夫历史中心", "https://whc.unesco.org/en/list/617/"],
    ],
  },
  "DEU": {
    cities: [
      ["Hamburg", "汉堡", "https://www.geonames.org/2911298/"],
      ["Munich", "慕尼黑", "https://www.geonames.org/2867714/"],
      ["Cologne", "科隆", "https://www.geonames.org/2886242/"],
      ["Frankfurt", "美因河畔法兰克福", "https://www.geonames.org/2925533/"],
    ],
    sights: [
      ["Aachen Cathedral", "亚琛大教堂", "https://whc.unesco.org/en/list/3/"],
    ],
  },
  "DNK": {
    cities: [
      ["Aarhus", "奥胡斯", "https://www.geonames.org/2624652/"],
      ["Odense", "欧登塞", "https://www.geonames.org/2615876/"],
    ],
    sights: [
      ["Kronborg Castle", "科隆博格城堡", "https://whc.unesco.org/en/list/696/"],
    ],
  },
  "DOM": {
    cities: [
      ["Santiago de los Caballeros", "圣地亚哥-德洛斯卡瓦列罗斯", "https://www.geonames.org/3492914/"],
    ],
  },
  "DZA": {
    cities: [
      ["Oran", "瓦赫兰", "https://www.geonames.org/2485926/"],
      ["Constantine", "君士坦丁", "https://www.geonames.org/2501152/"],
    ],
    sights: [
      ["Djémila", "杰米拉", "https://whc.unesco.org/en/list/191/"],
    ],
  },
  "ECU": {
    cities: [
      ["Guayaquil", "瓜亚基尔", "https://www.geonames.org/3657509/"],
      ["Cuenca", "昆卡", "https://www.geonames.org/3658666/"],
    ],
    sights: [
      ["Sangay National Park", "桑盖国家公园", "https://whc.unesco.org/en/list/260/"],
    ],
  },
  "EGY": {
    cities: [
      ["Alexandria", "亚历山大港", "https://www.geonames.org/361058/"],
      ["Luxor", "卢克索", "https://www.geonames.org/360502/"],
      ["Aswan", "阿斯旺", "https://www.geonames.org/359792/"],
    ],
    sights: [
      ["Ancient Thebes with its Necropolis", "底比斯古城及其墓地", "https://whc.unesco.org/en/list/87/", "Luxor", "Valley of the Kings", "卢克索", "帝王谷"],
      ["Nubian Monuments from Abu Simbel to Philae", "阿布辛拜勒至菲莱的努比亚遗址", "https://whc.unesco.org/en/list/88/"],
    ],
  },
  "ESP": {
    cities: [
      ["Barcelona", "巴塞罗那", "https://www.geonames.org/3128760/"],
      ["Seville", "塞维利亚", "https://www.geonames.org/2510911/"],
      ["Valencia", "瓦伦西亚", "https://www.geonames.org/2509954/", "巴伦西亚"],
      ["Granada", "格拉纳达", "https://www.geonames.org/2517117/"],
    ],
    sights: [
      ["Old Town of Segovia and its Aqueduct", "塞哥维亚古城及其输水道", "https://whc.unesco.org/en/list/311/"],
      ["Historic Centre of Cordoba", "科尔多瓦历史中心", "https://whc.unesco.org/en/list/313/"],
      ["Alhambra, Generalife and Albayzín, Granada", "格拉纳达的阿尔罕布拉宫、赫内拉利费园和阿尔拜辛区", "https://whc.unesco.org/en/list/314/", "Alhambra Palace", "阿尔汗布拉宫"],
    ],
  },
  "ETH": {
    cities: [
      ["Dire Dawa", "德雷达瓦", "https://www.geonames.org/338832/"],
      ["Gondar", "贡德尔", "https://www.geonames.org/336014/"],
    ],
    sights: [
      ["Simien National Park", "塞米恩国家公园", "https://whc.unesco.org/en/list/9/"],
    ],
  },
  "FIN": {
    cities: [
      ["Tampere", "坦佩雷", "https://www.geonames.org/634963/"],
      ["Turku", "图尔库", "https://www.geonames.org/633679/"],
    ],
    sights: [
      ["Old Rauma", "劳马古城", "https://whc.unesco.org/en/list/582/"],
    ],
  },
  "FJI": {
    sights: [
      ["Levuka Historical Port Town", "莱武卡历史港口城镇", "https://whc.unesco.org/en/list/1399/"],
    ],
  },
  "FRA": {
    cities: [
      ["Marseille", "马赛", "https://www.geonames.org/2995469/"],
      ["Lyon", "里昂", "https://www.geonames.org/2996944/"],
      ["Nice", "尼斯", "https://www.geonames.org/2990440/"],
      ["Bordeaux", "波尔多", "https://www.geonames.org/3031582/"],
    ],
    sights: [
      ["Mont-Saint-Michel and its Bay", "圣米歇尔山及其海湾", "https://whc.unesco.org/en/list/80/"],
      ["Palace and Park of Versailles", "凡尔赛宫及其园林", "https://whc.unesco.org/en/list/83/"],
    ],
  },
  "GAB": {
    sights: [
      ["Ivindo National Park", "伊温多国家公园", "https://whc.unesco.org/en/list/1653/"],
    ],
  },
  "GBR": {
    cities: [
      ["Manchester", "曼彻斯特", "https://www.geonames.org/2643123/"],
      ["Birmingham", "伯明翰", "https://www.geonames.org/2655603/"],
      ["Liverpool", "利物浦", "https://www.geonames.org/2644210/"],
      ["Glasgow", "格拉斯哥", "https://www.geonames.org/2648579/"],
    ],
    sights: [
      ["Giant's Causeway and Causeway Coast", "“巨人之路”及其海岸", "https://whc.unesco.org/en/list/369/"],
    ],
  },
  "GEO": {
    cities: [
      ["Batumi", "巴统", "https://www.geonames.org/615532/"],
      ["Kutaisi", "库塔伊西", "https://www.geonames.org/613607/"],
    ],
    sights: [
      ["Upper Svaneti", "上斯瓦涅季", "https://whc.unesco.org/en/list/709/"],
    ],
  },
  "GHA": {
    cities: [
      ["Kumasi", "库马西", "https://www.geonames.org/2298890/"],
    ],
    sights: [
      ["Asante Traditional Buildings", "阿散蒂传统建筑", "https://whc.unesco.org/en/list/35/"],
    ],
  },
  "GNQ": {
    cities: [
      ["Bata", "巴塔", "https://www.geonames.org/2310046/"],
    ],
  },
  "GRC": {
    cities: [
      ["Thessaloniki", "塞萨洛尼基", "https://www.geonames.org/734077/"],
      ["Patras", "帕特雷", "https://www.geonames.org/255683/"],
    ],
    sights: [
      ["Archaeological Site of Delphi", "德尔斐考古遗址", "https://whc.unesco.org/en/list/393/"],
    ],
  },
  "GRL": {
    sights: [
      ["Ilulissat Icefjord", "伊路利萨特冰湾", "https://whc.unesco.org/en/list/1149/", "伊卢利萨特冰峡湾"],
    ],
  },
  "GTM": {
    cities: [
      ["Quetzaltenango", "克萨尔特南戈", "https://www.geonames.org/3590979/"],
    ],
    sights: [
      ["Antigua Guatemala", "安提瓜危地马拉", "https://whc.unesco.org/en/list/65/"],
    ],
  },
  "HMD": {
    sights: [
      ["Heard and McDonald Islands", "赫德岛和麦克唐纳群岛", "https://whc.unesco.org/en/list/577/"],
    ],
  },
  "HKG": {
    sights: [
      ["Victoria Peak", "太平山顶", "https://www.discoverhongkong.com/eng/place-to-go/travel.guide-the-peak.html", "The Peak", "太平山"],
    ],
  },
  "HND": {
    cities: [
      ["San Pedro Sula", "圣佩德罗苏拉", "https://www.geonames.org/3601782/"],
    ],
    sights: [
      ["Río Plátano Biosphere Reserve", "雷奥普拉塔诺生物圈保留地", "https://whc.unesco.org/en/list/196/"],
    ],
  },
  "HRV": {
    cities: [
      ["Split", "斯普利特", "https://www.geonames.org/3190261/"],
      ["Dubrovnik", "杜布罗夫尼克", "https://www.geonames.org/3201047/"],
    ],
    sights: [
      ["Plitvice Lakes National Park", "普利特维采湖群国家公园", "https://whc.unesco.org/en/list/98/", "十六湖"],
    ],
  },
  "HTI": {
    cities: [
      ["Cap-Haïtien", "海地角", "https://www.geonames.org/3728474/"],
    ],
  },
  "HUN": {
    cities: [
      ["Debrecen", "德布勒森", "https://www.geonames.org/721472/"],
      ["Szeged", "塞格德", "https://www.geonames.org/715429/"],
    ],
    sights: [
      ["Hortobágy National Park - the Puszta", "霍尔托巴吉国家公园", "https://whc.unesco.org/en/list/474/"],
    ],
  },
  "IDN": {
    cities: [
      ["Surabaya", "泗水", "https://www.geonames.org/1625822/"],
      ["Bandung", "万隆", "https://www.geonames.org/1650357/"],
      ["Yogyakarta", "日惹", "https://www.geonames.org/1621177/"],
    ],
    sights: [
      ["Komodo National Park", "科莫多国家公园", "https://whc.unesco.org/en/list/609/"],
    ],
  },
  "IND": {
    cities: [
      ["Mumbai", "孟买", "https://www.geonames.org/1275339/", "Bombay"],
      ["Kolkata", "加尔各答", "https://www.geonames.org/1275004/", "Calcutta"],
      ["Bengaluru", "班加罗尔", "https://www.geonames.org/1277333/", "Bangalore"],
      ["Chennai", "金奈", "https://www.geonames.org/1264527/", "Madras"],
      ["Hyderabad", "海德拉巴", "https://www.geonames.org/1269843/"],
    ],
    sights: [
      ["Red Fort Complex", "德里红堡群", "https://whc.unesco.org/en/list/231/"],
      ["Qutb Minar and its Monuments, Delhi", "德里的顾特卜塔及其古建筑", "https://whc.unesco.org/en/list/233/"],
      ["Ellora Caves", "埃洛拉石窟群", "https://whc.unesco.org/en/list/243/"],
      ["Ajanta Caves", "阿旃陀石窟群", "https://whc.unesco.org/en/list/242/"],
    ],
  },
  "IRL": {
    cities: [
      ["Cork", "科克", "https://www.geonames.org/2965140/"],
      ["Galway", "戈尔韦", "https://www.geonames.org/2964180/"],
    ],
    sights: [
      ["Brú na Bóinne - Archaeological Ensemble of the Bend of the Boyne", "博恩河河曲考古遗址群", "https://whc.unesco.org/en/list/659/"],
    ],
  },
  "IRN": {
    cities: [
      ["Mashhad", "马什哈德", "https://www.geonames.org/124665/"],
      ["Isfahan", "伊斯法罕", "https://www.geonames.org/418863/"],
      ["Shiraz", "西菈子", "https://www.geonames.org/115019/"],
    ],
    sights: [
      ["Meidan Emam, Esfahan", "伊斯法罕王侯广场", "https://whc.unesco.org/en/list/115/"],
    ],
  },
  "IRQ": {
    cities: [
      ["Mosul", "摩苏尔", "https://www.geonames.org/99072/"],
      ["Basra", "巴士拉", "https://www.geonames.org/99532/"],
      ["Erbil", "埃尔比勒", "https://www.geonames.org/95446/"],
    ],
    sights: [
      ["Babylon", "巴比伦", "https://whc.unesco.org/en/list/278/"],
    ],
  },
  "ISL": {
    sights: [
      ["Þingvellir National Park", "辛格维利尔国家公园", "https://whc.unesco.org/en/list/1152/"],
      ["Vatnajökull National Park - Dynamic Nature of Fire and Ice", "瓦特纳冰川国家公园-火与冰的动态", "https://whc.unesco.org/en/list/1604/"],
    ],
  },
  "ISR": {
    cities: [
      ["Haifa", "海法", "https://www.geonames.org/294801/"],
      ["Nazareth", "拿撒勒", "https://www.geonames.org/294098/"],
    ],
    sights: [
      ["Masada", "马萨达", "https://whc.unesco.org/en/list/1040/"],
    ],
  },
  "ITA": {
    cities: [
      ["Milan", "米兰", "https://www.geonames.org/3173435/"],
      ["Naples", "那不勒斯", "https://www.geonames.org/3172394/"],
      ["Venice", "威尼斯", "https://www.geonames.org/3164603/"],
      ["Florence", "佛罗伦萨", "https://www.geonames.org/3176959/"],
    ],
    sights: [
      ["Historic Centre of Florence", "佛罗伦萨历史中心", "https://whc.unesco.org/en/list/174/"],
      ["Piazza del Duomo, Pisa", "比萨大教堂广场（含比萨斜塔）", "https://whc.unesco.org/en/list/395/", "Leaning Tower of Pisa"],
      ["Venice and its Lagoon", "威尼斯及泻湖", "https://whc.unesco.org/en/list/394/"],
    ],
  },
  "JAM": {
    sights: [
      ["Blue and John Crow Mountains", "蓝山和约翰·克罗山", "https://whc.unesco.org/en/list/1356/"],
    ],
  },
  "JOR": {
    cities: [
      ["Irbid", "伊尔比德", "https://www.geonames.org/248946/"],
      ["Aqaba", "亚喀巴", "https://www.geonames.org/250774/"],
    ],
    sights: [
      ["Quseir Amra", "库塞尔阿姆拉", "https://whc.unesco.org/en/list/327/"],
    ],
  },
  "JPN": {
    cities: [
      ["Osaka", "大阪", "https://www.geonames.org/1853909/"],
      ["Yokohama", "横滨", "https://www.geonames.org/1848354/"],
      ["Kyoto", "京都", "https://www.geonames.org/1857910/", "京都市"],
      ["Nagoya", "名古屋", "https://www.geonames.org/1856057/"],
    ],
    sights: [
      ["Himeji-jo", "姬路城", "https://whc.unesco.org/en/list/661/"],
      ["Yakushima", "屋久岛", "https://whc.unesco.org/en/list/662/"],
      ["Historic Monuments of Ancient Kyoto (Kyoto, Uji and Otsu Cities)", "古京都遗址（京都、宇治和大津城）", "https://whc.unesco.org/en/list/688/", "Kyoto", "京都古迹"],
    ],
  },
  "KAZ": {
    cities: [
      ["Almaty", "阿拉木图", "https://www.geonames.org/1526384/"],
      ["Shymkent", "希姆肯特", "https://www.geonames.org/1518980/"],
    ],
    sights: [
      ["Mausoleum of Khoja Ahmed Yasawi", "霍贾•艾哈迈德•亚萨维陵墓", "https://whc.unesco.org/en/list/1103/"],
    ],
  },
  "KEN": {
    cities: [
      ["Mombasa", "蒙巴萨", "https://www.geonames.org/186301/"],
      ["Kisumu", "基苏木", "https://www.geonames.org/191245/"],
    ],
    sights: [
      ["Lake Turkana National Parks", "图尔卡纳湖国家公园", "https://whc.unesco.org/en/list/801/"],
    ],
  },
  "KGZ": {
    cities: [
      ["Osh", "奥什", "https://www.geonames.org/1527534/"],
    ],
    sights: [
      ["Sulaiman-Too Sacred Mountain", "苏莱曼圣山", "https://whc.unesco.org/en/list/1230/"],
    ],
  },
  "KHM": {
    cities: [
      ["Siem Reap", "暹粒", "https://www.geonames.org/1822214/"],
      ["Battambang", "马德望", "https://www.geonames.org/1831797/"],
    ],
    sights: [
      ["Temple of Preah Vihear", "柏威夏寺", "https://whc.unesco.org/en/list/1224/"],
    ],
  },
  "KIR": {
    sights: [
      ["Phoenix Islands Protected Area", "菲尼克斯群岛保护区", "https://whc.unesco.org/en/list/1325/"],
    ],
  },
  "KOR": {
    cities: [
      ["Busan", "釜山", "https://www.geonames.org/1838524/"],
      ["Incheon", "仁川", "https://www.geonames.org/1843564/"],
      ["Daegu", "大邱", "https://www.geonames.org/1835329/"],
    ],
    sights: [
      ["Seokguram Grotto and Bulguksa Temple", "石窟庵和佛国寺", "https://whc.unesco.org/en/list/736/"],
      ["Changdeokgung Palace Complex", "昌德宫建筑群", "https://whc.unesco.org/en/list/816/"],
    ],
  },
  "LAO": {
    cities: [
      ["Luang Prabang", "琅勃拉邦", "https://www.geonames.org/1655559/"],
    ],
    sights: [
      ["Town of Luang Prabang", "琅勃拉邦的古城", "https://whc.unesco.org/en/list/479/"],
    ],
  },
  "LBN": {
    cities: [
      ["Tripoli", "的黎波里", "https://www.geonames.org/266826/"],
      ["Sidon", "赛达", "https://www.geonames.org/268064/"],
    ],
    sights: [
      ["Byblos", "比布鲁斯", "https://whc.unesco.org/en/list/295/"],
    ],
  },
  "LBY": {
    cities: [
      ["Benghazi", "班加西", "https://www.geonames.org/88319/"],
      ["Misrata", "米苏拉塔", "https://www.geonames.org/2214846/"],
    ],
    sights: [
      ["Archaeological Site of Cyrene", "昔兰尼考古遗址", "https://whc.unesco.org/en/list/190/"],
    ],
  },
  "LKA": {
    cities: [
      ["Kandy", "康提", "https://www.geonames.org/1241622/"],
      ["Jaffna", "贾夫纳", "https://www.geonames.org/1242833/"],
    ],
    sights: [
      ["Sacred City of Anuradhapura", "阿努拉德普勒圣城", "https://whc.unesco.org/en/list/200/"],
    ],
  },
  "LTU": {
    cities: [
      ["Kaunas", "考纳斯", "https://www.geonames.org/598316/"],
      ["Klaipėda", "克莱佩达", "https://www.geonames.org/598098/"],
    ],
    sights: [
      ["Vilnius Historic Centre", "维尔纽斯历史中心", "https://whc.unesco.org/en/list/541/"],
    ],
  },
  "LVA": {
    sights: [
      ["Old town of Kuldīga", "库尔迪加老城", "https://whc.unesco.org/en/list/1658/"],
    ],
  },
  "MAC": {
    sights: [
      ["Historic Centre of Macao", "澳门历史城区", "https://whc.unesco.org/en/list/1110/"],
    ],
  },
  "MAR": {
    cities: [
      ["Casablanca", "卡萨布兰卡", "https://www.geonames.org/2553604/"],
      ["Marrakesh", "马拉喀什", "https://www.geonames.org/2542997/"],
      ["Fez", "非斯", "https://www.geonames.org/2548885/"],
    ],
    sights: [
      ["Medina of Fez", "非斯的阿拉伯人聚居区", "https://whc.unesco.org/en/list/170/"],
    ],
  },
  "MDG": {
    cities: [
      ["Toamasina", "图阿马西纳", "https://www.geonames.org/1053384/"],
    ],
    sights: [
      ["Andrefana Dry Forests", "安德列发那干旱森林", "https://whc.unesco.org/en/list/494/"],
    ],
  },
  "MDV": {
    sights: [
      ["Hanifaru Bay", "哈尼法鲁湾", "https://visitmaldives.com/index.php/en/places/baa-atoll-biosphere-reserve", "Baa Atoll", "芭环礁"],
    ],
  },
  "MEX": {
    cities: [
      ["Guadalajara", "瓜达拉哈拉", "https://www.geonames.org/4005539/"],
      ["Monterrey", "蒙特雷", "https://www.geonames.org/3995465/"],
      ["Puebla City", "普埃布拉", "https://www.geonames.org/3521081/"],
    ],
    sights: [
      ["Pre-Hispanic City of Teotihuacan", "特奥蒂瓦坎", "https://whc.unesco.org/en/list/414/"],
      ["Pre-Hispanic City and National Park of Palenque", "帕伦克古城和国家公园", "https://whc.unesco.org/en/list/411/"],
    ],
  },
  "MLI": {
    sights: [
      ["Timbuktu", "廷巴克图", "https://whc.unesco.org/en/list/119/"],
    ],
  },
  "MLT": {
    sights: [
      ["Megalithic Temples of Malta", "马耳他巨石庙", "https://whc.unesco.org/en/list/132/"],
    ],
  },
  "MMR": {
    cities: [
      ["Yangon", "仰光", "https://www.geonames.org/1298824/"],
      ["Mandalay", "曼德勒", "https://www.geonames.org/1311874/"],
    ],
    sights: [
      ["Bagan", "蒲甘", "https://whc.unesco.org/en/list/1588/"],
    ],
  },
  "MNE": {
    sights: [
      ["Durmitor National Park", "杜米托尔国家公园", "https://whc.unesco.org/en/list/100/"],
    ],
  },
  "MNG": {
    sights: [
      ["Orkhon Valley Cultural Landscape", "鄂尔浑峡谷文化景观", "https://whc.unesco.org/en/list/1081/"],
    ],
  },
  "MOZ": {
    cities: [
      ["Beira", "贝拉", "https://www.geonames.org/1052373/"],
      ["Nampula", "楠普拉", "https://www.geonames.org/1033356/"],
    ],
  },
  "MRT": {
    sights: [
      ["Banc d'Arguin National Park", "阿尔金岩石礁国家公园", "https://whc.unesco.org/en/list/506/"],
    ],
  },
  "MTQ": {
    sights: [
      ["Volcanoes and Forests of Mount Pelée and the Pitons of Northern Martinique", "培雷山和马提尼克北部山峰的火山和森林", "https://whc.unesco.org/en/list/1657/"],
    ],
  },
  "MUS": {
    sights: [
      ["Aapravasi Ghat", "阿普拉瓦西移民站", "https://whc.unesco.org/en/list/1227/"],
    ],
  },
  "MWI": {
    cities: [
      ["Blantyre", "布兰太尔", "https://www.geonames.org/931755/"],
    ],
    sights: [
      ["Chongoni Rock-Art Area", "琼戈尼岩石艺术区", "https://whc.unesco.org/en/list/476/"],
    ],
  },
  "MYS": {
    cities: [
      ["George Town", "乔治市", "https://www.geonames.org/1735106/"],
      ["Johor Bahru", "新山", "https://www.geonames.org/1732752/"],
    ],
    sights: [
      ["Kinabalu Park", "基纳巴卢山公园", "https://whc.unesco.org/en/list/1012/"],
      ["Gunung Mulu National Park", "穆鲁山国家公园", "https://whc.unesco.org/en/list/1013/"],
    ],
  },
  "NAM": {
    sights: [
      ["Twyfelfontein or /Ui-//aes", "推菲尔泉岩画", "https://whc.unesco.org/en/list/1255/"],
    ],
  },
  "NCL": {
    sights: [
      ["Lagoons of New Caledonia: Reef Diversity and Associated Ecosystems", "新喀里多尼亚潟湖", "https://whc.unesco.org/en/list/1115/"],
    ],
  },
  "NER": {
    cities: [
      ["Zinder", "津德尔", "https://www.geonames.org/2437798/"],
    ],
    sights: [
      ["Air and Ténéré Natural Reserves", "阿德尔和泰内雷自然保护区", "https://whc.unesco.org/en/list/573/"],
    ],
  },
  "NGA": {
    cities: [
      ["Lagos", "拉各斯", "https://www.geonames.org/2332459/"],
      ["Kano", "卡诺", "https://www.geonames.org/2335204/"],
      ["Ibadan", "伊巴丹", "https://www.geonames.org/2339354/"],
    ],
    sights: [
      ["Osun-Osogbo Sacred Grove", "奥孙－奥索博神树林", "https://whc.unesco.org/en/list/1118/"],
    ],
  },
  "NIC": {
    cities: [
      ["León", "莱昂", "https://www.geonames.org/3618030/"],
    ],
    sights: [
      ["Ruins of León Viejo", "莱昂•别霍遗址", "https://whc.unesco.org/en/list/613/"],
    ],
  },
  "NLD": {
    cities: [
      ["Rotterdam", "鹿特丹", "https://www.geonames.org/2747891/"],
      ["Utrecht", "乌得勒支", "https://www.geonames.org/2745912/"],
      ["Eindhoven", "埃因霍温", "https://www.geonames.org/2756253/"],
    ],
    sights: [
      ["Mill Network at Kinderdijk-Elshout", "金德代克-埃尔斯豪特的风车", "https://whc.unesco.org/en/list/818/"],
    ],
  },
  "NOR": {
    cities: [
      ["Bergen", "卑尔根", "https://www.geonames.org/3161732/"],
      ["Trondheim", "特隆赫姆", "https://www.geonames.org/3133880/"],
    ],
    sights: [
      ["Bryggen", "卑尔根市布吕根区", "https://whc.unesco.org/en/list/59/"],
    ],
  },
  "NPL": {
    cities: [
      ["Pokhara", "博克拉", "https://www.geonames.org/1282898/"],
    ],
    sights: [
      ["Chitwan National Park", "奇特旺皇家国家公园", "https://whc.unesco.org/en/list/284/"],
    ],
  },
  "NZL": {
    cities: [
      ["Auckland", "奥克兰", "https://www.geonames.org/2193733/"],
      ["Christchurch", "基督城", "https://www.geonames.org/2192362/", "克赖斯特彻奇"],
      ["Dunedin", "达尼丁", "https://www.geonames.org/2191562/"],
    ],
    sights: [
      ["Tongariro National Park", "汤加里罗国家公园", "https://whc.unesco.org/en/list/421/"],
    ],
  },
  "OMN": {
    cities: [
      ["Salalah", "塞拉莱", "https://www.geonames.org/286621/"],
      ["Sohar", "苏哈尔", "https://www.geonames.org/286282/"],
    ],
    sights: [
      ["Bahla Fort", "巴赫莱要塞", "https://whc.unesco.org/en/list/433/"],
    ],
  },
  "PAK": {
    cities: [
      ["Karachi", "卡拉奇", "https://www.geonames.org/1174872/"],
      ["Lahore", "拉合尔", "https://www.geonames.org/1172451/"],
      ["Faisalabad", "费萨拉巴德", "https://www.geonames.org/1179400/"],
    ],
    sights: [
      ["Archaeological Ruins at Moenjodaro", "摩亨佐达罗考古遗迹", "https://whc.unesco.org/en/list/138/"],
    ],
  },
  "PAN": {
    sights: [
      ["Darien National Park", "达连国家公园", "https://whc.unesco.org/en/list/159/"],
    ],
  },
  "PER": {
    cities: [
      ["Arequipa", "阿雷基帕", "https://www.geonames.org/3947322/"],
      ["Cusco", "库斯科", "https://www.geonames.org/3941584/"],
      ["Trujillo", "特鲁希略", "https://www.geonames.org/3691175/"],
    ],
    sights: [
      ["Chavin (Archaeological Site)", "夏文考古遗址", "https://whc.unesco.org/en/list/330/"],
    ],
  },
  "PHL": {
    cities: [
      ["Cebu City", "宿雾", "https://www.geonames.org/1717512/"],
      ["Davao City", "达沃", "https://www.geonames.org/1715348/"],
    ],
    sights: [
      ["Puerto-Princesa Subterranean River National Park", "普林塞萨港地下河国家公园", "https://whc.unesco.org/en/list/652/"],
    ],
  },
  "PNG": {
    sights: [
      ["Kuk Early Agricultural Site", "库克早期农业遗址", "https://whc.unesco.org/en/list/887/"],
    ],
  },
  "POL": {
    cities: [
      ["Kraków", "克拉科夫", "https://www.geonames.org/3094802/"],
      ["Gdańsk", "格但斯克", "https://www.geonames.org/3099434/"],
      ["Wrocław", "弗罗茨瓦夫", "https://www.geonames.org/3081368/"],
    ],
    sights: [
      ["Wieliczka and Bochnia Royal Salt Mines", "维利奇卡与博赫尼亚皇家盐矿", "https://whc.unesco.org/en/list/32/"],
    ],
  },
  "PRI": {
    cities: [
      ["Ponce", "庞塞", "https://www.geonames.org/4566880/"],
      ["Mayagüez", "马亚圭斯", "https://www.geonames.org/4566385/"],
    ],
  },
  "PRK": {
    cities: [
      ["Hamhung", "咸兴", "https://www.geonames.org/1877449/"],
      ["Chongjin", "清津", "https://www.geonames.org/2044757/"],
    ],
    sights: [
      ["Mount Kumgang – Diamond Mountain from the Sea", "金刚山——海上钻石山", "https://whc.unesco.org/en/list/1642/"],
    ],
  },
  "PRT": {
    cities: [
      ["Porto", "波尔图", "https://www.geonames.org/2735943/"],
      ["Braga", "布拉加", "https://www.geonames.org/2742032/"],
      ["Funchal", "丰沙尔", "https://www.geonames.org/2267827/"],
    ],
    sights: [
      ["Monastery of Batalha", "巴塔利亚修道院", "https://whc.unesco.org/en/list/264/"],
    ],
  },
  "PRY": {
    sights: [
      ["Jesuit Missions of La Santísima Trinidad de Paraná and Jesús de Tavarangue", "塔瓦兰格的耶稣和巴拉那的桑蒂西莫－特立尼达耶稣会传教区", "https://whc.unesco.org/en/list/648/"],
    ],
  },
  "PSE": {
    cities: [
      ["Hebron", "希伯仑", "https://www.geonames.org/285066/"],
      ["Nablus", "纳布卢斯", "https://www.geonames.org/282615/"],
    ],
    sights: [
      ["Ancient Jericho/Tell es-Sultan", "古耶利哥城/苏丹台形遗址", "https://whc.unesco.org/en/list/1687/"],
    ],
  },
  "PYF": {
    sights: [
      ["Taputapuātea", "塔普塔普阿泰阿祭祀遗址", "https://whc.unesco.org/en/list/1529/"],
    ],
  },
  "QAT": {
    sights: [
      ["Al Zubarah Archaeological Site", "祖巴拉考古遗址", "https://whc.unesco.org/en/list/1402/"],
    ],
  },
  "REU": {
    sights: [
      ["Pitons, cirques and remparts of Reunion Island", "留尼汪岛的山峰、冰斗和峭壁", "https://whc.unesco.org/en/list/1317/"],
    ],
  },
  "ROU": {
    cities: [
      ["Cluj-Napoca", "克卢日-纳波卡", "https://www.geonames.org/681290/"],
      ["Timișoara", "蒂米什瓦拉", "https://www.geonames.org/665087/"],
      ["Iași", "雅西", "https://www.geonames.org/675810/"],
    ],
    sights: [
      ["Danube Delta", "多瑙河三角洲", "https://whc.unesco.org/en/list/588/"],
    ],
  },
  "RUS": {
    cities: [
      ["Saint Petersburg", "圣彼得堡", "https://www.geonames.org/498817/"],
      ["Novosibirsk", "新西伯利亚", "https://www.geonames.org/1496747/"],
      ["Vladivostok", "符拉迪沃斯托克", "https://www.geonames.org/2013348/", "海参崴"],
    ],
    sights: [
      ["Historic Centre of Saint Petersburg and Related Groups of Monuments", "圣彼得堡历史中心及其相关古迹群", "https://whc.unesco.org/en/list/540/"],
    ],
  },
  "RWA": {
    sights: [
      ["Nyungwe National Park", "纽恩威国家公园", "https://whc.unesco.org/en/list/1697/"],
    ],
  },
  "SAU": {
    cities: [
      ["Jeddah", "吉达", "https://www.geonames.org/105343/"],
      ["Mecca", "麦加", "https://www.geonames.org/104515/"],
      ["Medina", "麦地那", "https://www.geonames.org/109223/"],
    ],
    sights: [
      ["Hegra Archaeological Site (al-Hijr / Madā ͐ in Ṣāliḥ)", "黑格拉考古遗址", "https://whc.unesco.org/en/list/1293/"],
    ],
  },
  "SDN": {
    sights: [
      ["Gebel Barkal and the Sites of the Napatan Region", "博尔戈尔山和纳巴塔地区", "https://whc.unesco.org/en/list/1073/"],
    ],
  },
  "SEN": {
    cities: [
      ["Thiès", "捷斯", "https://www.geonames.org/2244802/"],
    ],
    sights: [
      ["Island of Gorée", "戈雷岛", "https://whc.unesco.org/en/list/26/"],
    ],
  },
  "SGP": {
    sights: [
      ["Singapore Botanic Gardens", "新加坡植物园", "https://whc.unesco.org/en/list/1483/"],
    ],
  },
  "SLB": {
    sights: [
      ["East Rennell", "东伦内尔岛", "https://whc.unesco.org/en/list/854/"],
    ],
  },
  "SLE": {
    sights: [
      ["Gola-Tiwai Complex", "戈拉-蒂瓦伊综合体", "https://whc.unesco.org/en/list/1746/"],
    ],
  },
  "SLV": {
    cities: [
      ["Santa Ana", "圣安娜", "https://www.geonames.org/3583334/"],
    ],
  },
  "SRB": {
    cities: [
      ["Novi Sad", "诺维萨德", "https://www.geonames.org/3194360/"],
      ["Niš", "尼什", "https://www.geonames.org/787657/"],
    ],
    sights: [
      ["Studenica Monastery", "斯图德尼察修道院", "https://whc.unesco.org/en/list/389/"],
    ],
  },
  "SSD": {
    sights: [
      ["Boma–Badingilo Migratory Landscape", "博马—巴丁吉罗迁徙景观", "https://whc.unesco.org/en/list/1808/"],
    ],
  },
  "STP": {
    sights: [
      ["The Roças of Sao Tome and Principe: Colonial Agricultural System and Forced Migration", "圣多美和普林西比罗萨种植园：殖民农业体系与强迫迁徙", "https://whc.unesco.org/en/list/1750/"],
    ],
  },
  "SUR": {
    sights: [
      ["Historic Inner City of Paramaribo", "帕拉马里博的古内城", "https://whc.unesco.org/en/list/940/"],
    ],
  },
  "SVK": {
    cities: [
      ["Košice", "科希策", "https://www.geonames.org/724443/"],
    ],
    sights: [
      ["Vlkolínec", "伏尔考林耐克", "https://whc.unesco.org/en/list/622/"],
    ],
  },
  "SVN": {
    sights: [
      ["Škocjan Caves", "斯科契扬溶洞", "https://whc.unesco.org/en/list/390/"],
    ],
  },
  "SWE": {
    cities: [
      ["Gothenburg", "哥德堡", "https://www.geonames.org/2711537/"],
      ["Malmö", "马尔默", "https://www.geonames.org/2692969/"],
    ],
    sights: [
      ["Rock Carvings in Tanum", "塔努姆的岩刻画", "https://whc.unesco.org/en/list/557/"],
    ],
  },
  "SYC": {
    sights: [
      ["Aldabra Atoll", "阿尔达布拉环礁", "https://whc.unesco.org/en/list/185/"],
    ],
  },
  "SYR": {
    cities: [
      ["Aleppo", "阿勒颇", "https://www.geonames.org/170063/"],
      ["Homs", "霍姆斯", "https://www.geonames.org/169577/"],
    ],
    sights: [
      ["Ancient City of Aleppo", "阿勒颇古城", "https://whc.unesco.org/en/list/21/"],
    ],
  },
  "TCD": {
    sights: [
      ["Ennedi Massif: Natural and Cultural Landscape", "恩内迪高原", "https://whc.unesco.org/en/list/1475/"],
    ],
  },
  "THA": {
    cities: [
      ["Chiang Mai", "清迈", "https://www.geonames.org/1153671/"],
      ["Phuket", "普吉市", "https://www.geonames.org/1151254/"],
    ],
    sights: [
      ["Historic Town of Sukhothai and Associated Historic Towns", "素可泰历史城镇及相关历史城镇", "https://whc.unesco.org/en/list/574/"],
    ],
  },
  "TJK": {
    cities: [
      ["Khujand", "苦盏", "https://www.geonames.org/1514879/"],
    ],
    sights: [
      ["Tugay forests of the Tigrovaya Balka Nature Reserve", "蒂格罗瓦亚·巴尔卡自然保护区的托喀依森林", "https://whc.unesco.org/en/list/1685/"],
    ],
  },
  "TKM": {
    cities: [
      ["Türkmenabat", "土库曼纳巴德", "https://www.geonames.org/1219649/"],
    ],
    sights: [
      ["State Historical and Cultural Park “Ancient Merv”", "梅尔夫历史与文化公园", "https://whc.unesco.org/en/list/886/"],
    ],
  },
  "TUN": {
    cities: [
      ["Sfax", "斯法克斯", "https://www.geonames.org/2467454/"],
      ["Sousse", "苏塞", "https://www.geonames.org/2464915/"],
    ],
    sights: [
      ["Archaeological Site of Carthage", "迦太基遗址", "https://whc.unesco.org/en/list/37/"],
    ],
  },
  "TUR": {
    cities: [
      ["Istanbul", "伊斯坦布尔", "https://www.geonames.org/745044/"],
      ["İzmir", "伊兹密尔", "https://www.geonames.org/311046/"],
      ["Antalya", "安塔利亚", "https://www.geonames.org/323777/"],
    ],
    sights: [
      ["Göreme National Park and the Rock Sites of Cappadocia", "希拉波利斯和帕姆卡莱", "https://whc.unesco.org/en/list/357/"],
    ],
  },
  "TWN": {
    sights: [
      ["Sun Moon Lake", "日月潭", "https://www.sunmoonlake.gov.tw/en/guides/ArticlesFull?a=32"],
    ],
    cities: [
      ["Kaohsiung", "高雄", "https://www.geonames.org/1673820/"],
      ["Taichung", "台中", "https://www.geonames.org/1668399/"],
      ["Tainan", "台南", "https://www.geonames.org/1668355/"],
    ],
  },
  "TZA": {
    cities: [
      ["Mwanza", "姆万扎", "https://www.geonames.org/152224/"],
      ["Arusha", "阿鲁沙", "https://www.geonames.org/161325/"],
    ],
    sights: [
      ["Serengeti National Park", "塞伦盖蒂国家公园", "https://whc.unesco.org/en/list/156/"],
    ],
  },
  "UGA": {
    cities: [
      ["Jinja", "金贾", "https://www.geonames.org/233114/"],
    ],
    sights: [
      ["Rwenzori Mountains National Park", "鲁文佐里山国家公园", "https://whc.unesco.org/en/list/684/"],
    ],
  },
  "UKR": {
    cities: [
      ["Kharkiv", "哈尔科夫", "https://www.geonames.org/706483/"],
      ["Odesa", "敖德萨", "https://www.geonames.org/698740/", "Odessa"],
      ["Lviv", "利沃夫", "https://www.geonames.org/702550/"],
    ],
    sights: [
      ["L'viv – the Ensemble of the Historic Centre", "里沃夫历史中心", "https://whc.unesco.org/en/list/865/"],
    ],
  },
  "URY": {
    cities: [
      ["Punta del Este", "埃斯特角城", "https://www.geonames.org/3440939/"],
    ],
    sights: [
      ["Historic Quarter of the City of Colonia del Sacramento", "萨拉门多移民镇的历史区", "https://whc.unesco.org/en/list/747/"],
    ],
  },
  "US-AK": {
    cities: [
      ["Anchorage", "安克雷奇", "https://www.geonames.org/5879400/"],
    ],
    sights: [
      ["Glacier Bay National Park & Preserve", "冰川湾国家公园及保护区", "https://www.nps.gov/glba/index.htm"],
    ],
  },
  "US-AL": {
    cities: [
      ["Birmingham", "伯明翰", "https://www.geonames.org/4049979/"],
      ["Mobile", "莫比尔", "https://www.geonames.org/4076598/"],
    ],
    sights: [
      ["Russell Cave National Monument", "拉塞尔洞穴国家纪念地", "https://www.nps.gov/ruca/index.htm"],
    ],
  },
  "US-AZ": {
    cities: [
      ["Tucson", "图森", "https://www.geonames.org/5318313/"],
    ],
    sights: [
      ["Saguaro National Park", "巨人柱国家公园", "https://www.nps.gov/sagu/index.htm"],
    ],
  },
  "US-CA": {
    cities: [
      ["Los Angeles", "洛杉矶", "https://www.geonames.org/5368361/"],
      ["San Francisco", "旧金山", "https://www.geonames.org/5391959/"],
      ["San Diego", "圣迭戈", "https://www.geonames.org/5391811/"],
    ],
    sights: [
      ["Yosemite National Park", "优胜美地国家公园", "https://whc.unesco.org/en/list/308/", "约塞米蒂", "约塞米提"],
    ],
  },
  "US-CO": {
    cities: [
      ["Colorado Springs", "科罗拉多斯普林斯", "https://www.geonames.org/5417598/"],
    ],
    sights: [
      ["Mesa Verde National Park", "梅萨维德国家公园", "https://whc.unesco.org/en/list/27/"],
    ],
  },
  "US-CT": {
    cities: [
      ["New Haven", "纽黑文", "https://www.geonames.org/4839366/"],
    ],
    sights: [
      ["Weir Farm National Historical Park", "威尔农场国家历史公园", "https://www.nps.gov/wefa/index.htm"],
    ],
  },
  "US-DE": {
    cities: [
      ["Wilmington", "威尔明顿", "https://www.geonames.org/4145381/"],
    ],
    sights: [
      ["First State National Historical Park", "第一州国家历史公园", "https://www.nps.gov/frst/index.htm"],
    ],
  },
  "US-FL": {
    cities: [
      ["Miami", "迈阿密", "https://www.geonames.org/4164138/"],
      ["Tampa", "坦帕", "https://www.geonames.org/4174757/"],
      ["Orlando", "奥兰多", "https://www.geonames.org/4167147/"],
    ],
    sights: [
      ["Everglades National Park", "大沼泽国家公园", "https://whc.unesco.org/en/list/76/", "Everglades"],
    ],
  },
  "US-GA": {
    cities: [
      ["Savannah", "萨凡纳", "https://www.geonames.org/4221552/"],
    ],
    sights: [
      ["Ocmulgee Mounds National Historical Park", "奥克穆尔吉土丘国家历史公园", "https://www.nps.gov/ocmu/index.htm"],
    ],
  },
  "US-IA": {
    cities: [
      ["Cedar Rapids", "锡达拉皮兹", "https://www.geonames.org/4850751/"],
    ],
    sights: [
      ["Effigy Mounds National Monument", "动物形土丘国家纪念地", "https://www.nps.gov/efmo/index.htm"],
    ],
  },
  "US-IL": {
    cities: [
      ["Chicago", "芝加哥", "https://www.geonames.org/4887398/"],
    ],
    sights: [
      ["Pullman National Historical Park", "普尔曼国家历史公园", "https://www.nps.gov/pull/index.htm"],
    ],
  },
  "US-IN": {
    cities: [
      ["Fort Wayne", "韦恩堡", "https://www.geonames.org/4920423/"],
    ],
    sights: [
      ["Indiana Dunes National Park", "印第安纳沙丘国家公园", "https://www.nps.gov/indu/index.htm"],
    ],
  },
  "US-KS": {
    cities: [
      ["Wichita", "威奇托", "https://www.geonames.org/4281730/"],
    ],
    sights: [
      ["Tallgrass Prairie National Preserve", "高草草原国家保护区", "https://www.nps.gov/tapr/index.htm"],
    ],
  },
  "US-KY": {
    cities: [
      ["Louisville", "路易维尔", "https://www.geonames.org/4299276/"],
      ["Lexington", "列克星敦", "https://www.geonames.org/4297983/"],
    ],
    sights: [
      ["Abraham Lincoln Birthplace National Historical Park", "亚伯拉罕·林肯出生地国家历史公园", "https://www.nps.gov/abli/index.htm"],
    ],
  },
  "US-LA": {
    cities: [
      ["New Orleans", "新奥尔良", "https://www.geonames.org/4335045/"],
    ],
    sights: [
      ["Jean Lafitte National Historical Park and Preserve", "让·拉菲特国家历史公园及保护区", "https://www.nps.gov/jela/index.htm"],
    ],
  },
  "US-MA": {
    cities: [
      ["Springfield", "斯普林菲尔德", "https://www.geonames.org/4951788/"],
    ],
    sights: [
      ["Minute Man National Historical Park", "民兵国家历史公园", "https://www.nps.gov/mima/index.htm"],
    ],
  },
  "US-MD": {
    cities: [
      ["Baltimore", "巴尔的摩", "https://www.geonames.org/4347778/"],
    ],
    sights: [
      ["Catoctin Mountain Park", "卡托克廷山公园", "https://www.nps.gov/cato/index.htm"],
    ],
  },
  "US-MI": {
    cities: [
      ["Detroit", "底特律", "https://www.geonames.org/4990729/"],
      ["Grand Rapids", "大急流城", "https://www.geonames.org/4994358/"],
    ],
    sights: [
      ["Pictured Rocks National Lakeshore", "彩岩国家湖岸", "https://www.nps.gov/piro/index.htm"],
    ],
  },
  "US-MN": {
    cities: [
      ["Minneapolis", "明尼阿波利斯", "https://www.geonames.org/5037649/"],
    ],
    sights: [
      ["Voyageurs National Park", "航海者国家公园", "https://www.nps.gov/voya/index.htm"],
    ],
  },
  "US-MO": {
    cities: [
      ["St. Louis", "圣路易斯", "https://www.geonames.org/4407066/", "Saint Louis"],
      ["Kansas City", "堪萨斯城", "https://www.geonames.org/4393217/"],
    ],
    sights: [
      ["Ozark National Scenic Riverways", "欧扎克国家风景河道", "https://www.nps.gov/ozar/index.htm"],
    ],
  },
  "US-NC": {
    cities: [
      ["Charlotte", "夏洛特", "https://www.geonames.org/4460243/"],
    ],
    sights: [
      ["Wright Brothers National Memorial", "莱特兄弟国家纪念地", "https://www.nps.gov/wrbr/index.htm"],
    ],
  },
  "US-ND": {
    cities: [
      ["Fargo", "法戈", "https://www.geonames.org/5059163/"],
    ],
    sights: [
      ["Knife River Indian Villages National Historic Site", "奈夫河印第安村落国家历史遗址", "https://www.nps.gov/knri/index.htm"],
    ],
  },
  "US-NE": {
    cities: [
      ["Omaha", "奥马哈", "https://www.geonames.org/5074472/"],
    ],
    sights: [
      ["Scotts Bluff National Monument", "斯科茨布拉夫国家纪念地", "https://www.nps.gov/scbl/index.htm"],
    ],
  },
  "US-NH": {
    cities: [
      ["Manchester", "曼彻斯特", "https://www.geonames.org/5089178/"],
    ],
    sights: [
      ["Saint-Gaudens National Historical Park", "圣戈当斯国家历史公园", "https://www.nps.gov/saga/index.htm"],
    ],
  },
  "US-NJ": {
    cities: [
      ["Newark", "纽瓦克", "https://www.geonames.org/5101798/"],
    ],
    sights: [
      ["Paterson Great Falls National Historical Park", "帕特森大瀑布国家历史公园", "https://www.nps.gov/pagr/index.htm"],
    ],
  },
  "US-NM": {
    cities: [
      ["Albuquerque", "阿尔伯克基", "https://www.geonames.org/5454711/"],
    ],
    sights: [
      ["Carlsbad Caverns National Park", "卡尔斯巴德洞窟国家公园", "https://www.nps.gov/cave/index.htm"],
    ],
  },
  "US-NV": {
    cities: [
      ["Las Vegas", "拉斯维加斯", "https://www.geonames.org/5506956/"],
      ["Reno", "雷诺", "https://www.geonames.org/5511077/"],
    ],
    sights: [
      ["Great Basin National Park", "大盆地国家公园", "https://www.nps.gov/grba/index.htm"],
    ],
  },
  "US-NY": {
    cities: [
      ["New York City", "纽约", "https://www.geonames.org/5128581/", "New York", "纽约市"],
      ["Buffalo", "布法罗", "https://www.geonames.org/5110629/", "水牛城"],
      ["Rochester", "罗彻斯特", "https://www.geonames.org/5134086/"],
    ],
    sights: [
      ["Saratoga National Historical Park", "萨拉托加国家历史公园", "https://www.nps.gov/sara/index.htm"],
    ],
  },
  "US-OH": {
    cities: [
      ["Cleveland", "克里夫兰", "https://www.geonames.org/5150529/"],
      ["Cincinnati", "辛辛那提", "https://www.geonames.org/4508722/"],
    ],
    sights: [
      ["Cuyahoga Valley National Park", "凯霍加谷国家公园", "https://www.nps.gov/cuva/index.htm"],
    ],
  },
  "US-OK": {
    cities: [
      ["Tulsa", "塔尔萨", "https://www.geonames.org/4553433/"],
    ],
    sights: [
      ["Chickasaw National Recreation Area", "奇克索国家游憩区", "https://www.nps.gov/chic/index.htm"],
    ],
  },
  "US-OR": {
    cities: [
      ["Portland", "波特兰", "https://www.geonames.org/5746545/"],
    ],
    sights: [
      ["Oregon Caves National Monument & Preserve", "俄勒冈洞穴国家纪念地及保护区", "https://www.nps.gov/orca/index.htm"],
    ],
  },
  "US-PA": {
    cities: [
      ["Philadelphia", "费城", "https://www.geonames.org/4560349/"],
      ["Pittsburgh", "匹兹堡", "https://www.geonames.org/5206379/"],
    ],
    sights: [
      ["Gettysburg National Military Park", "葛底斯堡国家军事公园", "https://www.nps.gov/gett/index.htm"],
    ],
  },
  "US-SC": {
    cities: [
      ["Charleston", "查尔斯顿", "https://www.geonames.org/4574324/"],
    ],
    sights: [
      ["Congaree National Park", "康加里国家公园", "https://www.nps.gov/cong/index.htm"],
    ],
  },
  "US-SD": {
    cities: [
      ["Sioux Falls", "苏瀑", "https://www.geonames.org/5231851/"],
    ],
    sights: [
      ["Badlands National Park", "恶地国家公园", "https://www.nps.gov/badl/index.htm"],
    ],
  },
  "US-TN": {
    cities: [
      ["Memphis", "孟菲斯", "https://www.geonames.org/4641239/"],
      ["Knoxville", "诺克斯维尔", "https://www.geonames.org/4634946/"],
    ],
    sights: [
      ["Shiloh National Military Park", "夏洛国家军事公园", "https://www.nps.gov/shil/index.htm"],
    ],
  },
  "US-TX": {
    cities: [
      ["Houston", "休斯敦", "https://www.geonames.org/4699066/"],
      ["Dallas", "达拉斯", "https://www.geonames.org/4684888/"],
      ["San Antonio", "圣安东尼奥", "https://www.geonames.org/4726206/"],
    ],
    sights: [
      ["Big Bend National Park", "大弯国家公园", "https://www.nps.gov/bibe/index.htm"],
    ],
  },
  "US-VA": {
    cities: [
      ["Virginia Beach", "弗吉尼亚海滩", "https://www.geonames.org/4791259/"],
    ],
    sights: [
      ["Shenandoah National Park", "仙纳度国家公园", "https://www.nps.gov/shen/index.htm"],
    ],
  },
  "US-WA": {
    cities: [
      ["Seattle", "西雅图", "https://www.geonames.org/5809844/"],
      ["Tacoma", "塔科马", "https://www.geonames.org/5812944/"],
    ],
    sights: [
      ["Mount Rainier National Park", "雷尼尔山国家公园", "https://www.nps.gov/mora/index.htm"],
    ],
  },
  "US-WI": {
    cities: [
      ["Milwaukee", "密尔沃基", "https://www.geonames.org/5263045/"],
    ],
    sights: [
      ["Apostle Islands National Lakeshore", "阿波斯尔群岛国家湖岸", "https://www.nps.gov/apis/index.htm"],
    ],
  },
  "USA": {
    cities: [
      ["New York City", "纽约", "https://www.geonames.org/5128581/", "New York", "纽约市"],
      ["Los Angeles", "洛杉矶", "https://www.geonames.org/5368361/"],
      ["Chicago", "芝加哥", "https://www.geonames.org/4887398/"],
      ["San Francisco", "旧金山", "https://www.geonames.org/5391959/"],
      ["Miami", "迈阿密", "https://www.geonames.org/4164138/"],
    ],
    sights: [
      ["Yosemite National Park", "优胜美地国家公园", "https://whc.unesco.org/en/list/308/", "约塞米蒂", "约塞米提"],
      ["Everglades National Park", "大沼泽国家公园", "https://whc.unesco.org/en/list/76/", "Everglades"],
      ["Mesa Verde National Park", "梅萨维德国家公园", "https://whc.unesco.org/en/list/27/"],
    ],
  },
  "UZB": {
    cities: [
      ["Samarkand", "撒马尔罕", "https://www.geonames.org/1216265/"],
      ["Bukhara", "布哈拉", "https://www.geonames.org/1217662/"],
    ],
    sights: [
      ["Historic Centre of Bukhara", "布哈拉历史中心", "https://whc.unesco.org/en/list/602/"],
    ],
  },
  "VEN": {
    cities: [
      ["Maracaibo", "马拉开波", "https://www.geonames.org/3633009/"],
      ["Valencia", "瓦伦西亚", "https://www.geonames.org/3625549/", "巴伦西亚"],
    ],
    sights: [
      ["Coro and its Port", "科罗及其港口", "https://whc.unesco.org/en/list/658/"],
    ],
  },
  "VNM": {
    cities: [
      ["Ho Chi Minh City", "胡志明市", "https://www.geonames.org/1566083/", "Saigon", "西贡"],
      ["Da Nang", "岘港", "https://www.geonames.org/1583992/"],
      ["Haiphong", "海防", "https://www.geonames.org/1581298/"],
    ],
    sights: [
      ["Hoi An Ancient Town", "会安古镇", "https://whc.unesco.org/en/list/948/"],
    ],
  },
  "VUT": {
    sights: [
      ["Chief Roi Mata’s Domain", "罗伊·玛塔酋长领地", "https://whc.unesco.org/en/list/1280/"],
    ],
  },
  "YEM": {
    sights: [
      ["Old Walled City of Shibam", "城墙环绕的希巴姆古城", "https://whc.unesco.org/en/list/192/"],
    ],
  },
  "ZAF": {
    cities: [
      ["Johannesburg", "约翰内斯堡", "https://www.geonames.org/993800/"],
      ["Durban", "德班", "https://www.geonames.org/1007311/"],
    ],
    sights: [
      ["Robben Island", "罗布恩岛", "https://whc.unesco.org/en/list/916/"],
    ],
  },
  "ZMB": {
    cities: [
      ["Kitwe", "基特韦", "https://www.geonames.org/911148/"],
      ["Ndola", "恩多拉", "https://www.geonames.org/901344/"],
    ],
  },
  "ZWE": {
    cities: [
      ["Bulawayo", "布拉瓦约", "https://www.geonames.org/894701/"],
    ],
    sights: [
      ["Matobo Hills", "马托博山", "https://whc.unesco.org/en/list/306/"],
    ],
  },
  "US-AR": {
    sights: [
      ["Buffalo National River", "布法罗国家河流", "https://www.nps.gov/buff/index.htm"],
    ],
  },
  "US-HI": {
    sights: [
      ["Hawaiʻi Volcanoes National Park", "夏威夷火山国家公园", "https://www.nps.gov/havo/index.htm"],
    ],
  },
  "US-ID": {
    sights: [
      ["Craters of the Moon National Monument & Preserve", "月球陨石坑国家纪念地及保护区", "https://www.nps.gov/crmo/index.htm"],
    ],
  },
  "US-ME": {
    sights: [
      ["Katahdin Woods and Waters National Monument", "卡塔丁森林与水域国家纪念地", "https://www.nps.gov/kaww/index.htm"],
    ],
  },
  "US-MS": {
    sights: [
      ["Natchez National Historical Park", "纳奇兹国家历史公园", "https://www.nps.gov/natc/index.htm"],
    ],
  },
  "US-MT": {
    sights: [
      ["Little Bighorn Battlefield National Monument", "小比格霍恩战场国家纪念地", "https://www.nps.gov/libi/index.htm"],
    ],
  },
  "US-RI": {
    sights: [
      ["Roger Williams National Memorial", "罗杰·威廉斯国家纪念地", "https://www.nps.gov/rowi/index.htm"],
    ],
  },
  "US-UT": {
    sights: [
      ["Zion National Park", "锡安国家公园", "https://www.nps.gov/zion/index.htm"],
    ],
  },
  "US-VT": {
    sights: [
      ["Marsh–Billings–Rockefeller National Historical Park", "马什—比林斯—洛克菲勒国家历史公园", "https://www.nps.gov/mabi/index.htm"],
    ],
  },
  "US-WV": {
    sights: [
      ["Harpers Ferry National Historical Park", "哈珀斯费里国家历史公园", "https://www.nps.gov/hafe/index.htm"],
    ],
  },
  "US-WY": {
    sights: [
      ["Devils Tower National Monument", "魔鬼塔国家纪念地", "https://www.nps.gov/deto/index.htm"],
    ],
  },
};

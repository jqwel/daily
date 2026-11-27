"use strict";

// A country and its states share the same media for each source record.
const SUPPLEMENT_MEDIA = {
  "https://www.geonames.org/1138336/": {
    "ipa": "/ˈkændəˌhɑr/",
    "illustration": {
      "subject": "Aerial view of a section of Kandahar in 2013.jpg",
      "credit": "Karla Marshall",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_a_section_of_Kandahar_in_2013.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1138336.webp"
    },
    "introduction": "坎大哈位于阿富汗南部，商路从这里向西通往赫拉特、向东南通往奎达。城外的灌溉绿洲以石榴闻名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kandahar",
    "coords": [
      65.71013,
      31.61332
    ]
  },
  "https://www.geonames.org/1140026/": {
    "ipa": "/hɛˈrɑt/",
    "illustration": {
      "subject": "View of Herat in 2009.jpg",
      "credit": "Employee of the U.S. State Department",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:View_of_Herat_in_2009.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1140026.webp"
    },
    "introduction": "赫拉特坐落在哈里河谷的绿洲中，向西通往伊朗高原。帖木儿王朝时期，这里曾汇集诗人、书法家和细密画家。",
    "introductionSource": "https://en.wikipedia.org/wiki/Herat",
    "coords": [
      62.19967,
      34.34817
    ]
  },
  "https://whc.unesco.org/en/list/208/": {
    "ipa": "/ˈkʌltʃɚəl ˈlænˌskeɪp ənd ˌɑrkiəˈlɑdʒɪkəl riˈmeɪnz əv ðə ˌbɑmiˈjɑn ˈvæli/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Buddha of Bamiyan.jpg",
      "credit": "Fars Media Corporation",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Buddha_of_Bamiyan.jpg",
      "kind": "commons",
      "src": "assets/supplements/u208.webp",
      "caption": "巴米扬大佛在 2001 年被毁前的历史照片。"
    },
    "introduction": "巴米扬山谷位于阿富汗中部的兴都库什山地。丝路沿线的佛教僧侣曾在崖壁开凿石窟与巨像，巨像毁坏后，佛龛和部分壁画仍然可见。",
    "coords": [
      67.460628,
      34.823799
    ]
  },
  "https://www.geonames.org/3348313/": {
    "ipa": "/ˈwɑmboʊ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Huambo, Jardim da Cultura.jpg",
      "credit": "Abanul",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Huambo,_Jardim_da_Cultura.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3348313.webp"
    },
    "introduction": "万博位于安哥拉中部高原。本格拉铁路穿城而过，把内陆农产区与大西洋沿岸连在一起。",
    "introductionSource": "https://en.wikipedia.org/wiki/Huambo",
    "coords": [
      15.73917,
      -12.77611
    ]
  },
  "https://www.geonames.org/3351663/": {
    "ipa": "/bɛnˈɡɛlə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Igreja Benguela, Angola.jpg",
      "credit": "F H Mira",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Igreja_Benguela,_Angola.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3351663.webp"
    },
    "introduction": "本格拉是安哥拉大西洋岸的历史港城。它与北面的洛比托相邻，后者是本格拉铁路的海边起点。",
    "introductionSource": "https://en.wikipedia.org/wiki/Benguela",
    "coords": [
      13.40268,
      -12.57674
    ]
  },
  "https://whc.unesco.org/en/list/1511/": {
    "ipa": "/ˈmbɑnzə ˈkɑŋɡoʊ ˈvɛstɪdʒɪz əv ðə ˈkæpətəl əv ðə ˈfɔrmɚ ˈkɪŋdəm əv ˈkɑŋɡoʊ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "kind": "photo",
      "subject": "View from the right angle of the Cathedral",
      "source": "https://whc.unesco.org/en/documents/158853/",
      "credit": "INPC",
      "license": "Nomination File · BY–ND",
      "licenseUrl": "https://whc.unesco.org/en/licenses/13",
      "src": "assets/supplements/u1511.jpg"
    },
    "introduction": "姆班扎刚果曾是刚果王国的政治和宗教中心。高原上的王室遗址、墓地和教堂记录了中非王国与欧洲早期接触的历史。",
    "coords": [
      14.249722,
      -6.268889
    ]
  },
  "https://www.geonames.org/3184081/": {
    "ipa": "/ˈʃkoʊdɚ/",
    "illustration": {
      "subject": "Rozafa Fortress 8.jpg",
      "credit": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rozafa_Fortress_8.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3184081.webp"
    },
    "introduction": "斯库台位于阿尔巴尼亚北部，湖泊与河流在城旁交会。从罗扎法城堡向下，可以俯瞰通往亚得里亚海的低地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Shkod%C3%ABr",
    "coords": [
      19.51258,
      42.06828
    ]
  },
  "https://whc.unesco.org/en/list/570/": {
    "ipa": "/bʊˈtrɪnt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Butrint, Albania.jpg",
      "credit": "Marc Morell",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Butrint,_Albania.jpg",
      "kind": "commons",
      "src": "assets/supplements/u570.webp"
    },
    "introduction": "布特林特位于阿尔巴尼亚南端的潟湖岸边。剧场、洗礼池和城墙留下了从古希腊聚落到中世纪港城的多层遗迹。",
    "coords": [
      20.02095,
      39.745732
    ]
  },
  "https://whc.unesco.org/en/list/1160/": {
    "ipa": "/məˈdriu ˌpɛrəˈfitə kləˈrɔr ˈvæli/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Perafita.jpg",
      "credit": "Joan Simon",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Perafita.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1160.webp"
    },
    "introduction": "安道尔东南部的这条冰川谷保存着高山牧场、石屋和旧冶铁设施，显示居民如何在短暂的夏季利用比利牛斯山的草地。",
    "coords": [
      1.595556,
      42.494722
    ]
  },
  "https://www.geonames.org/292223/": {
    "ipa": "/duˈbaɪ/",
    "illustration": {
      "subject": "Dubai Skyline mit Burj Khalifa (cropped).jpg",
      "credit": "Tim Reckmann from Hamm, Deutschland",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dubai_Skyline_mit_Burj_Khalifa_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g292223.webp"
    },
    "introduction": "迪拜沿一条深入陆地的潮汐水道发展。传统市场和木帆船码头分布在河湾两岸，保留着海湾贸易城市的格局。",
    "introductionSource": "https://en.wikipedia.org/wiki/Dubai",
    "coords": [
      55.30927,
      25.07725
    ]
  },
  "https://www.geonames.org/292672/": {
    "ipa": "/ˈʃɑrdʒə/",
    "illustration": {
      "subject": "Sharjah city skyline in 2015.jpg",
      "credit": "Mueed Ahmed",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sharjah_city_skyline_in_2015.jpg",
      "kind": "commons",
      "src": "assets/supplements/g292672.webp"
    },
    "introduction": "沙迦老城围绕海湾一处潟湖展开。修复的商宅和市场如今用来展示阿联酋沿海地区的商贸与手工艺传统。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sharjah",
    "coords": [
      55.41221,
      25.3342
    ]
  },
  "https://www.geonames.org/292913/": {
    "ipa": "/æl ˈaɪn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Qasr Al Muwaiji 1.jpg",
      "credit": "Michael Peter Glenister",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Qasr_Al_Muwaiji_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/g292913.webp"
    },
    "introduction": "艾因是靠近阿曼边界的内陆绿洲城。传统水渠把水引入枣椰园，适合与海滨的迪拜对照。",
    "introductionSource": "https://en.wikipedia.org/wiki/Al_Ain",
    "coords": [
      55.76056,
      24.19167
    ]
  },
  "https://whc.unesco.org/en/list/1343/": {
    "ipa": "/ˈkʌltʃɚəl saɪts əv æl aɪn həˈfit ˈhili bɪˈdɑ bɪnt sɑˈud ənd oʊˈeɪsiz ˈɛriəz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Beehive Tombs Jebel Hafeet District 1.jpg",
      "credit": "Michael Peter Glenister",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Beehive_Tombs_Jebel_Hafeet_District_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1343.webp"
    },
    "introduction": "艾恩绿洲位于阿拉伯半岛干旱的内陆。墓葬、土坯聚落和地下引水渠记录了人们如何获取地下水，维持沙漠边缘的定居生活。",
    "coords": [
      55.76213,
      24.242754
    ]
  },
  "https://www.geonames.org/3860259/": {
    "ipa": "/ˈkɔrdəbə/",
    "illustration": {
      "subject": "Montaje CBA 9.jpg",
      "credit": "Alakasam",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Montaje_CBA_9.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3860259.webp"
    },
    "introduction": "科尔多瓦位于阿根廷中部的山地边缘。市中心的大学和耶稣会建筑群记录了这里作为内陆教育中心的历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/C%C3%B3rdoba%2C_Argentina",
    "coords": [
      -64.18853,
      -31.40648
    ]
  },
  "https://www.geonames.org/3838583/": {
    "ipa": "/roʊˈzɑrioʊ/",
    "illustration": {
      "subject": "Montaje Rosario 01.jpg",
      "credit": "Bleff",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Montaje_Rosario_01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3838583.webp"
    },
    "introduction": "罗萨里奥是巴拉那河西岸的港城，潘帕斯草原的谷物经此装船。临河的国旗纪念碑是当地地标。",
    "introductionSource": "https://en.wikipedia.org/wiki/Rosario",
    "coords": [
      -60.63932,
      -32.94682
    ]
  },
  "https://www.geonames.org/3844421/": {
    "ipa": "/mɛnˈdoʊzə/",
    "illustration": {
      "subject": "Ciudad de Mendoza, la cuarta ciudad más poblada del país..jpg",
      "credit": "Itsmemarttin",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ciudad_de_Mendoza,_la_cuarta_ciudad_m%C3%A1s_poblada_del_pa%C3%ADs..jpg",
      "kind": "commons",
      "src": "assets/supplements/g3844421.webp"
    },
    "introduction": "门多萨位于安第斯山东麓的干旱地带。山地融水通过灌渠进入河谷，让城市周围形成大片葡萄园。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mendoza%2C_Argentina",
    "coords": [
      -68.84582,
      -32.88946
    ]
  },
  "https://whc.unesco.org/en/list/145/": {
    "ipa": "/loʊs ɡlɑˈsjɑrɛs ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Perito moreno argentinië.JPEG",
      "credit": "Emesbe",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Perito_moreno_argentini%C3%AB.JPEG",
      "kind": "commons",
      "src": "assets/supplements/u145.webp"
    },
    "introduction": "阿根廷巴塔哥尼亚的南部冰原向东伸出多条冰舌。佩里托莫雷诺冰川前端直抵阿根廷湖，冰块会从高耸的冰壁崩入湖中。",
    "coords": [
      -73.24944,
      -50
    ]
  },
  "https://whc.unesco.org/en/list/937/": {
    "ipa": "/pɛˈninsulə vɑlˈdɛs/",
    "illustration": {
      "subject": "Península Valdés Caleta Valdés 1.jpg",
      "credit": "Scann",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pen%C3%ADnsula_Vald%C3%A9s_Caleta_Vald%C3%A9s_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u937.webp"
    },
    "introduction": "瓦尔德斯半岛伸入南大西洋，两侧海湾为南露脊鲸繁殖提供了庇护。海岸上也有海狮与南象海豹的繁殖地。",
    "coords": [
      -64,
      -42.5
    ]
  },
  "https://whc.unesco.org/en/list/777/": {
    "ipa": "/ˈmɑnəˌstɛriz əv ˈhɑɡpɑt ənd ˌsɑnɑˈhin/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Haghpat aerial 2023.3.jpg",
      "credit": "Yerevantsi",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Haghpat_aerial_2023.3.jpg",
      "kind": "commons",
      "src": "assets/supplements/u777.webp"
    },
    "introduction": "哈格帕特与萨那欣是亚美尼亚北部的两座中世纪修道院。教堂、藏书室和聚会厅记录了当时的教育传统与石砌建筑技艺。",
    "coords": [
      44.67898,
      41.093438
    ]
  },
  "https://whc.unesco.org/en/list/1603/": {
    "ipa": "/frɛntʃ ˈɔstrəl lændz ənd siz/",
    "illustration": {
      "subject": "Mount Werth, Grande Terre, Kerguelen Archipelago. The Georgapher.jpg",
      "credit": "Armand Patoir",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mount_Werth,_Grande_Terre,_Kerguelen_Archipelago._The_Georgapher.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1603.webp"
    },
    "introduction": "克罗泽群岛、凯尔盖朗群岛等陆地散布在南印度洋。偏远的岛岸及周围富饶的海域支撑着王企鹅、信天翁和海豹的繁殖群体。",
    "coords": [
      65.94986,
      -44.645212
    ]
  },
  "https://www.geonames.org/2147714/": {
    "ipa": "/ˈsɪdni/",
    "illustration": {
      "subject": "00 3178 Sydney, Australia.jpg",
      "credit": "W. Bulach",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:00_3178_Sydney,_Australia.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2147714.webp"
    },
    "introduction": "悉尼环绕澳大利亚东岸的天然海港展开。渡轮穿行于岸线曲折的海湾，经过歌剧院和悉尼海港大桥。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sydney",
    "coords": [
      151.20732,
      -33.86785
    ]
  },
  "https://www.geonames.org/2158177/": {
    "ipa": "/ˈmɛlbɚn/",
    "illustration": {
      "subject": "Melbourne CBD and Ceremonial Avenue (in 2024) as seen from the rooftop of Shrine of Remembrance.jpg",
      "credit": "Shkuru Afshar",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Melbourne_CBD_and_Ceremonial_Avenue_(in_2024)_as_seen_from_the_rooftop_of_Shrine_of_Remembrance.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2158177.webp"
    },
    "introduction": "墨尔本位于雅拉河下游，面向菲利普港湾。十九世纪淘金潮推动城区扩张，市中心至今有密集的有轨电车线路。",
    "introductionSource": "https://en.wikipedia.org/wiki/Melbourne",
    "coords": [
      144.96332,
      -37.814
    ]
  },
  "https://www.geonames.org/2174003/": {
    "ipa": "/ˈbrɪzbən/",
    "illustration": {
      "subject": "Skyline of Brisbane from Kangaroo Point Cliffs Park, Nov 2020, 05.jpg",
      "credit": "Chris Olszewski",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_Brisbane_from_Kangaroo_Point_Cliffs_Park,_Nov_2020,_05.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2174003.webp"
    },
    "introduction": "布里斯班沿昆士兰东南部一条蜿蜒的同名河流展开。河水流入摩顿湾，桥梁和渡船连接多个河湾街区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Brisbane",
    "coords": [
      153.02809,
      -27.46794
    ]
  },
  "https://www.geonames.org/2063523/": {
    "ipa": "/pɝθ/",
    "illustration": {
      "subject": "Elizabeth Quay February 2016 (cropped).jpg",
      "credit": "Samuel Wiki",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Elizabeth_Quay_February_2016_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2063523.webp"
    },
    "introduction": "珀斯坐落在澳大利亚西部的天鹅河畔。沿河向西到弗里曼特尔，便抵达印度洋沿岸的港口。",
    "introductionSource": "https://en.wikipedia.org/wiki/Perth",
    "coords": [
      115.8614,
      -31.95224
    ]
  },
  "https://whc.unesco.org/en/list/154/": {
    "ipa": "/ɡreɪt ˈbæriɚ rif/",
    "illustration": {
      "subject": "Aerial shots of The Great Barrier Reef, Queensland, Australia (Ank Kumar) 02.jpg",
      "credit": "Ank Kumar",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_shots_of_The_Great_Barrier_Reef,_Queensland,_Australia_(Ank_Kumar)_02.jpg",
      "kind": "commons",
      "src": "assets/supplements/u154.webp"
    },
    "introduction": "大堡礁沿澳大利亚昆士兰州外海延伸，由许多珊瑚礁、沙洲和岛屿组成。珊瑚虫建造的礁体为鱼类与海龟提供了庇护。",
    "coords": [
      147.7,
      -18.286111
    ]
  },
  "https://whc.unesco.org/en/list/447/": {
    "ipa": "/ˌuləˈru ˈkɑtə ˈtʃʊtə ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Petermann Ranges (AU), Uluru-Kata Tjuta National Park, Uluru -- 2019 -- 3679-83.jpg",
      "credit": "Dietmar Rabich",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Petermann_Ranges_(AU),_Uluru-Kata_Tjuta_National_Park,_Uluru_--_2019_--_3679-83.jpg",
      "kind": "commons",
      "src": "assets/supplements/u447.webp"
    },
    "introduction": "乌卢鲁是拔起于澳大利亚中部平原的巨大砂岩体，卡塔丘塔由一组圆顶岩丘构成。两处地貌都与阿南古人的传统和故事紧密相连。",
    "coords": [
      131,
      -25.333333
    ]
  },
  "https://www.geonames.org/2766824/": {
    "ipa": "/ˈsɑltsbɝɡ/",
    "illustration": {
      "subject": "Salzburg (48489551981).jpg",
      "credit": "Jorge Franganillo",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Salzburg_(48489551981).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2766824.webp"
    },
    "introduction": "萨尔茨堡隔萨尔察赫河而建，山上的城堡俯瞰巴洛克式老城。莫扎特出生在河畔老城区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Salzburg",
    "coords": [
      13.04399,
      47.79941
    ]
  },
  "https://www.geonames.org/2778067/": {
    "ipa": "/ɡrɑts/",
    "illustration": {
      "subject": "16-07-06-Rathaus Graz Turmblick-RR2 0275.jpg",
      "credit": "Ralf Roletschek",
      "license": "CC BY-SA 3.0 at",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/at/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:16-07-06-Rathaus_Graz_Turmblick-RR2_0275.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2778067.webp"
    },
    "introduction": "格拉茨在穆尔河两岸展开，是奥地利施蒂里亚州首府。城堡山上的钟楼俯瞰中世纪街巷和文艺复兴时期的庭院。",
    "introductionSource": "https://en.wikipedia.org/wiki/Innere_Stadt_(Graz)",
    "coords": [
      15.44197,
      47.06733
    ]
  },
  "https://www.geonames.org/2772400/": {
    "ipa": "/lɪnts/",
    "illustration": {
      "subject": "PlacodeLinz.jpg",
      "credit": "Kani",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:PlacodeLinz.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2772400.webp"
    },
    "introduction": "林茨是多瑙河上的奥地利港城。河岸既有钢铁工业设施，也有专门展示电子艺术的文化场馆。",
    "introductionSource": "https://en.wikipedia.org/wiki/Linz",
    "coords": [
      14.28611,
      48.30639
    ]
  },
  "https://whc.unesco.org/en/list/784/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv ðə ˈsɪti əv ˈsɑltsbɝɡ/",
    "illustration": {
      "subject": "SalzburgerAltstadt02b.jpg",
      "credit": "Thomas Pintaric (= Pintaric )",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:SalzburgerAltstadt02b.jpg",
      "kind": "commons",
      "src": "assets/supplements/u784.webp"
    },
    "introduction": "萨尔茨堡老城夹在萨尔察赫河与山丘之间。大主教主持修建的巴洛克教堂、广场和山顶要塞构成了这座音乐名城的天际线。",
    "coords": [
      13.043333,
      47.800556
    ]
  },
  "https://whc.unesco.org/en/list/806/": {
    "ipa": "/ˈhɑlʃtɑt ˈdɑkʃtaɪn ˈzɑltskɑmɚɡʊt ˈkʌltʃɚəl ˈlænˌskeɪp/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Hallstatt - Zentrum .JPG",
      "credit": "C.Stadler/Bwag",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Hallstatt_-_Zentrum_.JPG",
      "kind": "commons",
      "src": "assets/supplements/u806.webp"
    },
    "introduction": "哈尔施塔特位于奥地利阿尔卑斯山区的湖岸。史前盐矿带来了财富，当地墓葬出土的器物使哈尔施塔特成为欧洲早期铁器文化的命名地。",
    "coords": [
      13.646389,
      47.559444
    ]
  },
  "https://www.geonames.org/586523/": {
    "ipa": "/ˈɡændʒə/",
    "illustration": {
      "subject": "Montage of Ganja 2019.jpg",
      "credit": "Sefer azeri",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Montage_of_Ganja_2019.jpg",
      "kind": "commons",
      "src": "assets/supplements/g586523.webp"
    },
    "introduction": "占贾位于阿塞拜疆西部、小高加索山北麓。诗人尼扎米的名字与这座商路古城紧密相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ganja%2C_Azerbaijan",
    "coords": [
      46.36134,
      40.68157
    ]
  },
  "https://whc.unesco.org/en/list/1076/": {
    "ipa": "/ˌɡoʊbuˈstɑn rɑk ɑrt ˈkʌltʃɚəl ˈlænˌskeɪp/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Qobustan giriş qayası 2026 (1).jpg",
      "credit": "Rəcəb Yaxşı",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Qobustan_giri%C5%9F_qayas%C4%B1_2026_(1).jpg",
      "kind": "commons",
      "src": "assets/supplements/u1076.webp"
    },
    "introduction": "戈布斯坦位于里海西岸的半荒漠地带。岩面上刻着狩猎、舞蹈和船只，记录了这里的居民与不断变化的环境。",
    "coords": [
      49.380224,
      40.119243
    ]
  },
  "https://www.geonames.org/2803138/": {
    "ipa": "/ˈæntwɝp/",
    "illustration": {
      "subject": "City of Antwerp.jpg",
      "credit": "Peter Köves",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:City_of_Antwerp.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2803138.webp"
    },
    "introduction": "安特卫普的港区沿斯海尔德河伸展，海轮可以从北海驶入内陆。钻石贸易也是这座比利时城市的重要传统。",
    "introductionSource": "https://en.wikipedia.org/wiki/Antwerp",
    "coords": [
      4.40026,
      51.22047
    ]
  },
  "https://www.geonames.org/2797656/": {
    "ipa": "/ˈɡɛnt/",
    "illustration": {
      "subject": "Gent vanuit Meestentoren1.JPG",
      "credit": "Torsade de Pointes",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Gent_vanuit_Meestentoren1.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2797656.webp"
    },
    "introduction": "根特在斯海尔德河与莱厄河交会处发展起来。中世纪羊毛与布匹贸易留下了沿河的行会建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ghent",
    "coords": [
      3.71667,
      51.05
    ]
  },
  "https://www.geonames.org/2792413/": {
    "ipa": "/liˈɛʒ/",
    "illustration": {
      "subject": "Liège depuis le Belvédère.jpg",
      "credit": "Edison McCullen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Li%C3%A8ge_depuis_le_Belv%C3%A9d%C3%A8re.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2792413.webp"
    },
    "introduction": "列日位于比利时东部的默兹河谷。河谷的煤矿和钢铁工业曾吸引工厂沿水岸聚集。",
    "introductionSource": "https://en.wikipedia.org/wiki/Li%C3%A8ge",
    "coords": [
      5.56749,
      50.63373
    ]
  },
  "https://whc.unesco.org/en/list/996/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv ˈbrʊɡə/",
    "illustration": {
      "subject": "Brugge-CanalRozenhoedkaai.JPG",
      "credit": "Jean-Christophe BENOIST",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Brugge-CanalRozenhoedkaai.JPG",
      "kind": "commons",
      "src": "assets/supplements/u996.webp"
    },
    "introduction": "布鲁日的运河穿过中世纪商业城区。钟楼、集市广场与沿河商宅见证了这座佛兰德城市借水路贸易兴盛的历史。",
    "coords": [
      3.22527,
      51.20891
    ]
  },
  "https://www.geonames.org/2362344/": {
    "ipa": "/ˈboʊboʊ ˌdjuˈlɑsoʊ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Bobo-Dioulasso TownHall2.jpg",
      "credit": "Maarten van der Bent",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bobo-Dioulasso_TownHall2.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2362344.webp"
    },
    "introduction": "博博迪乌拉索是布基纳法索西部的商贸城市。老城区的大清真寺采用土筑墙体，外墙伸出的木杆也便于维修。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bobo-Dioulasso",
    "coords": [
      -4.29489,
      11.18064
    ]
  },
  "https://whc.unesco.org/en/list/1602/": {
    "ipa": "/ˈeɪnʃənt ˈfɛrəs ˈmɛtəlɚdʒi saɪts əv bɚˈkinə ˈfɑsoʊ/",
    "illustration": {
      "kind": "photo",
      "subject": "Tiwêga furnace, near Kaya",
      "source": "https://whc.unesco.org/en/documents/166675/",
      "credit": "Sébastien Moriset · © DSCPM/MCAT",
      "license": "Nomination File · BY–ND",
      "licenseUrl": "https://whc.unesco.org/en/licenses/13",
      "src": "assets/supplements/u1602.jpg"
    },
    "introduction": "布基纳法索的古冶铁遗址保留了炉塔、矿渣和采矿痕迹。这些遗存让人得以追溯西非工匠如何就地取矿、制炭并炼铁。",
    "coords": [
      -2.369522,
      12.670949
    ]
  },
  "https://www.geonames.org/1205733/": {
    "ipa": "/ˈtʃætəɡrɑm/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Jamburi park, Agrabad, Chittagong 2.jpg",
      "credit": "Great Hero32",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Jamburi_park,_Agrabad,_Chittagong_2.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1205733.webp"
    },
    "introduction": "吉大港位于孟加拉国东南部。远洋货轮从孟加拉湾驶入卡纳普利河，在沿岸码头装卸。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chittagong",
    "coords": [
      91.83168,
      22.3384
    ]
  },
  "https://www.geonames.org/1336135/": {
    "ipa": "/ˈkʊlnə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Zero point, khulna.jpg",
      "credit": "Ferdous",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Zero_point,_khulna.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1336135.webp"
    },
    "introduction": "库尔纳是孟加拉国西南部的河港。沿河向南可进入潮汐水道密布的孙德尔本斯红树林地区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Khulna",
    "coords": [
      89.56439,
      22.80979
    ]
  },
  "https://whc.unesco.org/en/list/322/": {
    "ipa": "/ˈruɪnz əv ðə ˈbudɪst vɪˈhɑrə æt pəˈhɑrpʊr/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "পাহাড়পুর বৌদ্ধ বিহার 22.jpg",
      "credit": "Abdulmominbd",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%E0%A6%AA%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%AC%E0%A7%8C%E0%A6%A6%E0%A7%8D%E0%A6%A7_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0_22.jpg",
      "kind": "commons",
      "src": "assets/supplements/u322.webp"
    },
    "introduction": "帕哈尔普尔遗址位于孟加拉国西北部。僧房围成庞大的方形庭院，中央佛寺的布局影响了南亚和东南亚的佛教建筑。",
    "coords": [
      88.983333,
      25.033333
    ]
  },
  "https://www.geonames.org/728193/": {
    "ipa": "/ˈplɔvdɪv/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Plovdiv view.jpg",
      "credit": "Ilia Markov from Sofia, Bulgaria",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Plovdiv_view.jpg",
      "kind": "commons",
      "src": "assets/supplements/g728193.webp"
    },
    "introduction": "普罗夫迪夫位于保加利亚的马里查河畔。老城依山而建，古罗马剧场利用山坡形成半圆形看台。",
    "introductionSource": "https://en.wikipedia.org/wiki/Plovdiv",
    "coords": [
      24.75001,
      42.15387
    ]
  },
  "https://www.geonames.org/726050/": {
    "ipa": "/ˈvɑrnə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "City of Varna.jpg",
      "credit": "Balkanregion",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:City_of_Varna.jpg",
      "kind": "commons",
      "src": "assets/supplements/g726050.webp"
    },
    "introduction": "瓦尔纳是保加利亚的黑海港城。当地墓地出土的史前金器，见证了黑海西岸早期的金属加工技艺。",
    "introductionSource": "https://en.wikipedia.org/wiki/Varna%2C_Bulgaria",
    "coords": [
      27.91024,
      43.21912
    ]
  },
  "https://whc.unesco.org/en/list/217/": {
    "ipa": "/ˈeɪnʃənt ˈsɪti əv nəˈsɛbɚ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Nessebar Pantocrator.jpg",
      "credit": "Gérard Janot",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Nessebar_Pantocrator.jpg",
      "kind": "commons",
      "src": "assets/supplements/u217.webp"
    },
    "introduction": "内塞巴尔老城占据黑海岸边一处狭小的岩石半岛。古城墙、拜占庭教堂和木楼记录了这座港口不同年代的面貌。",
    "coords": [
      27.736028,
      42.659111
    ]
  },
  "https://whc.unesco.org/en/list/225/": {
    "ipa": "/ˈpɪrɪn ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Pirin - Vlahini Lakes (Влахини езера) (3 lakes).JPG",
      "credit": "Pudelek (Marcin Szala)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pirin_-_Vlahini_Lakes_(%D0%92%D0%BB%D0%B0%D1%85%D0%B8%D0%BD%D0%B8_%D0%B5%D0%B7%D0%B5%D1%80%D0%B0)_(3_lakes).JPG",
      "kind": "commons",
      "src": "assets/supplements/u225.webp"
    },
    "introduction": "皮林山位于保加利亚西南部。冰川侵蚀留下了冰斗、湖泊和陡峭山脊，高山草甸与山地针叶林随海拔分布。",
    "coords": [
      23.430472,
      41.742722
    ]
  },
  "https://whc.unesco.org/en/list/1542/": {
    "ipa": "/ˈdɪlmʊn ˈbɛriəl maʊndz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Burial Mounds in Bahrain 1918.jpg",
      "credit": "Storrs-Fox, Edwin Aubrey",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Burial_Mounds_in_Bahrain_1918.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1542.webp"
    },
    "introduction": "巴林岛上的迪尔穆恩墓葬由大量土石墓丘构成。墓地的规模和不同等级的墓型，反映了这个海湾贸易中心早期社会的组织方式。",
    "coords": [
      50.511176,
      26.152028
    ]
  },
  "https://www.geonames.org/3194828/": {
    "ipa": "/mɑˈstɑr/",
    "illustration": {
      "subject": "Mostar Old Town Panorama 2007.jpg",
      "credit": "Ramirez",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mostar_Old_Town_Panorama_2007.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3194828.webp"
    },
    "introduction": "莫斯塔尔横跨内雷特瓦河，石拱老桥把两岸街区连在一起。这座桥的毁坏与重建也成为城市近代史的一部分。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mostar",
    "coords": [
      17.80806,
      43.34333
    ]
  },
  "https://www.geonames.org/3204541/": {
    "ipa": "/ˈbɑnjə ˈlukə/",
    "illustration": {
      "subject": "NKD115 Saborna crkva Hrista spasitelja Banja Luka RS BiH.jpg",
      "credit": "Tomas Damjanovic Banjaluka",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:NKD115_Saborna_crkva_Hrista_spasitelja_Banja_Luka_RS_BiH.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3204541.webp"
    },
    "introduction": "巴尼亚卢卡沿弗尔巴斯河发展。河流从南面的山谷进入较开阔的盆地，城中的卡斯特尔堡就在河岸。",
    "introductionSource": "https://en.wikipedia.org/wiki/Banja_Luka",
    "coords": [
      17.20629,
      44.77879
    ]
  },
  "https://whc.unesco.org/en/list/1260/": {
    "ipa": "/ˈmɛhmɛd ˈpɑʃə soʊˈkoʊləvɪtʃ brɪdʒ ɪn ˈviʃɛɡrɑd/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Visegrad Drina Bridge 1.jpg",
      "credit": "Julian Nyča",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Visegrad_Drina_Bridge_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1260.webp"
    },
    "introduction": "维舍格勒的石桥横跨德里纳河。奥斯曼建筑师锡南设计的连续石拱，把巴尔干山地的道路与河谷两岸连接起来。",
    "coords": [
      19.288025,
      43.781444
    ]
  },
  "https://www.geonames.org/627907/": {
    "ipa": "/ˈɡoʊməl/",
    "illustration": {
      "subject": "DJI 0137 Edit (51152843462).jpg",
      "credit": "Andrey Kukharenko from Gomel, Belarus",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:DJI_0137_Edit_(51152843462).jpg",
      "kind": "commons",
      "src": "assets/supplements/g627907.webp"
    },
    "introduction": "戈梅利位于白俄罗斯东南部的索日河畔。河岸高地上的宫殿和公园是旧城的标志。",
    "introductionSource": "https://en.wikipedia.org/wiki/Gomel",
    "coords": [
      30.9754,
      52.4345
    ]
  },
  "https://whc.unesco.org/en/list/1196/": {
    "ipa": "/ˌɑrkəˈtɛktʃɚəl ˌrɛzɪˈdɛnʃəl ənd ˈkʌltʃɚəl ˈkɑmplɛks əv ðə ˈrædzɪvɪl ˈfæməli æt ˈnɛsvɪʒ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Замак-палац у Нясьвіжы знутры.jpg",
      "credit": "Dmitry Gerasimov",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1196.webp"
    },
    "introduction": "涅斯维日城堡长期属于拉济维乌家族。城堡、壕沟、水池和园林共同构成庄园，记录了中东欧贵族住宅从防御要地向宫邸的演变。",
    "coords": [
      26.69139,
      53.22278
    ]
  },
  "https://www.geonames.org/3904906/": {
    "ipa": "/ˈsæntə kruz də lɑ siˈɛrə/",
    "illustration": {
      "subject": "Northern Skyline Santa Cruz.jpg",
      "credit": "Rodolfo Barriga",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Northern_Skyline_Santa_Cruz.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3904906.webp"
    },
    "introduction": "圣克鲁斯位于玻利维亚东部低地，与高原上的拉巴斯地貌迥异。周围的农业区与公路网支撑了城市的商业发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Santa_Cruz_de_la_Sierra",
    "coords": [
      -63.18117,
      -17.78629
    ]
  },
  "https://www.geonames.org/3919968/": {
    "ipa": "/ˌkoʊtʃəˈbɑmbə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Cochabamba City.jpg",
      "credit": "Parallelepiped09",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cochabamba_City.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3919968.webp"
    },
    "introduction": "科恰班巴坐落在玻利维亚安第斯山间的宽阔河谷。谷地气候温和、适宜耕作，长期向高原矿区供应粮食。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cochabamba",
    "coords": [
      -66.15995,
      -17.38195
    ]
  },
  "https://whc.unesco.org/en/list/567/": {
    "ipa": "/ˌtiwəˈnɑku ˈspɪrɪˌtʃuəl ənd pəˈlɪtəkəl ˈsɛntɚ əv ðə ˌtiwəˈnɑku ˈkʌltʃɚ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Zonnepoort tiwanaku.jpg",
      "credit": "Mhwater",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Zonnepoort_tiwanaku.jpg",
      "kind": "commons",
      "src": "assets/supplements/u567.webp"
    },
    "introduction": "蒂瓦纳科遗址位于玻利维亚的的喀喀湖附近的高原上。台基、下沉庭院和巨石雕刻是安第斯地区前印加文明留下的遗迹。",
    "coords": [
      -68.673278,
      -16.555003
    ]
  },
  "https://www.geonames.org/3448439/": {
    "ipa": "/ˌsaʊ ˈpaʊloʊ/",
    "illustration": {
      "subject": "Marginal Pinheiros e Jockey Club.jpg",
      "credit": "Agent010",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Marginal_Pinheiros_e_Jockey_Club.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3448439.webp"
    },
    "introduction": "圣保罗位于巴西东南部高原。昔日的咖啡贸易和通往桑托斯港的铁路，为这座工业与金融城市的成长奠定基础。",
    "introductionSource": "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo",
    "coords": [
      -46.63611,
      -23.5475
    ]
  },
  "https://www.geonames.org/3451190/": {
    "ipa": "/ˈrioʊ dɪ ʒəˈnɪɚoʊ/",
    "illustration": {
      "subject": "Cidade Maravilhosa.jpg",
      "credit": "Rafael Rabello de Barros",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cidade_Maravilhosa.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3451190.webp"
    },
    "introduction": "里约热内卢沿瓜纳巴拉湾展开，花岗岩山峰直抵海岸。甜面包山守在湾口，科帕卡巴纳海滩则面向大西洋。",
    "introductionSource": "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
    "coords": [
      -43.18223,
      -22.90642
    ]
  },
  "https://www.geonames.org/3450554/": {
    "ipa": "/ˈsælvədɔr/",
    "illustration": {
      "subject": "Salvador BA (cropped) 2.jpg",
      "credit": "Fotos Gov/Ba",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Salvador_BA_(cropped)_2.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3450554.webp"
    },
    "introduction": "萨尔瓦多坐落在巴西万圣湾入口。陡坡分隔上下城区，港口历史与非洲裔巴西人的音乐、宗教传统在这里交织。",
    "introductionSource": "https://en.wikipedia.org/wiki/Salvador%2C_Bahia",
    "coords": [
      -38.49096,
      -12.97563
    ]
  },
  "https://whc.unesco.org/en/list/124/": {
    "ipa": "/hɪˈstɔrɪk taʊn əv ˈoʊru ˈpreɪtu/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ouro Preto, Brazil, 2011 (6288971321).jpg",
      "credit": "Rosino",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ouro_Preto,_Brazil,_2011_(6288971321).jpg",
      "kind": "commons",
      "src": "assets/supplements/u124.webp"
    },
    "introduction": "欧鲁普雷图坐落在巴西米纳斯吉拉斯州的山间。淘金带来的财富资助了巴洛克教堂和雕塑，老城街道顺着陡坡起伏。",
    "coords": [
      -43.505556,
      -20.388889
    ]
  },
  "https://whc.unesco.org/en/list/998/": {
    "ipa": "/ˈsɛntrəl ˈæməˌzɑn ˌkɑnsɚˈveɪʃən ˈkɑmplɛks/",
    "illustration": {
      "subject": "Florestas na margem do Rio Unini.jpg",
      "credit": "Jecogeo",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Florestas_na_margem_do_Rio_Unini.jpg",
      "kind": "commons",
      "src": "assets/supplements/u998.webp"
    },
    "introduction": "亚马逊中部保护区涵盖河流、湖泊与季节性淹水森林。洪水期，鱼类能游入树木之间觅食，森林与河流由此连成一个生态系统。",
    "coords": [
      -62.068366,
      -2.28817
    ]
  },
  "https://whc.unesco.org/en/list/999/": {
    "ipa": "/ˈpɑntəˌnɑl ˌkɑnsɚˈveɪʃən ˈɛriə/",
    "illustration": {
      "subject": "Pantanal, south-central South America 5170.jpg",
      "credit": "Alicia Yo at the English-language Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Pantanal,_south-central_South_America_5170.jpg",
      "kind": "commons",
      "src": "assets/supplements/u999.webp"
    },
    "introduction": "潘塔奈尔是南美洲内陆的大型湿地。季节性洪水淹没低处草原，退水后形成密布的浅湖，为水鸟和凯门鳄提供栖息地。",
    "coords": [
      -57.359,
      -17.656
    ]
  },
  "https://whc.unesco.org/en/list/1376/": {
    "ipa": "/hɪˈstɔrɪk ˈbrɪdʒˌtaʊn ənd ɪts ˈɡærɪsən/",
    "illustration": {
      "subject": "Bridgetown aerial.JPG",
      "credit": "P.Lechien",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Bridgetown_aerial.JPG",
      "kind": "commons",
      "src": "assets/supplements/u1376.webp"
    },
    "introduction": "布里奇顿是巴巴多斯的海港。殖民时期的商业城区与驻军区相邻，码头、兵营和炮台记录了英国在加勒比海的航运与防务。",
    "coords": [
      -59.613889,
      13.096667
    ]
  },
  "https://whc.unesco.org/en/list/1021/": {
    "ipa": "/tsoʊˈdiloʊ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Tsodilo rock paintings 1.jpg",
      "credit": "cj Huo",
      "license": "CC BY-SA 1.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/1.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tsodilo_rock_paintings_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1021.webp"
    },
    "introduction": "措迪洛的数座山丘突起于博茨瓦纳西北部的平地。岩壁上的动物和人物图像跨越多个时期，这片山地至今仍是当地社群的圣地。",
    "coords": [
      21.733333,
      -18.75
    ]
  },
  "https://www.geonames.org/6167865/": {
    "ipa": "/təˈrɑntoʊ/",
    "illustration": {
      "subject": "Sunset Toronto Skyline Panorama Crop from Snake Island.jpg",
      "credit": "Jchmrt",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg",
      "kind": "commons",
      "src": "assets/supplements/g6167865.webp"
    },
    "introduction": "多伦多位于安大略湖西北岸，是安大略省省会。湖滨铁路用地改建的街区和加拿大国家电视塔构成鲜明的天际线。",
    "introductionSource": "https://en.wikipedia.org/wiki/Toronto",
    "coords": [
      -79.38389,
      43.65333
    ]
  },
  "https://www.geonames.org/6077243/": {
    "ipa": "/ˌmɑntriˈɔl/",
    "illustration": {
      "subject": "Montreal-canada-parc-urban.jpg",
      "credit": "https://www.pxfuel.com/",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Montreal-canada-parc-urban.jpg",
      "kind": "commons",
      "src": "assets/supplements/g6077243.webp"
    },
    "introduction": "蒙特利尔的核心城区坐落在圣劳伦斯河中的岛屿上。皇家山俯瞰这座法语城市，也给城市留下了名字。",
    "introductionSource": "https://en.wikipedia.org/wiki/Montreal",
    "coords": [
      -73.58781,
      45.50884
    ]
  },
  "https://www.geonames.org/6173331/": {
    "ipa": "/vænˈkuvɚ/",
    "illustration": {
      "subject": "Skyline of Vancouver, Canada.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_Vancouver,_Canada.jpg",
      "kind": "commons",
      "src": "assets/supplements/g6173331.webp"
    },
    "introduction": "温哥华位于加拿大太平洋沿岸，港湾与北岸山脉隔水相望。铁路在这里连接远洋航线。",
    "introductionSource": "https://en.wikipedia.org/wiki/Vancouver",
    "coords": [
      -123.11934,
      49.24966
    ]
  },
  "https://whc.unesco.org/en/list/24/": {
    "ipa": "/nəˈhæni ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Nahanni - VirginiaFalls.jpg",
      "credit": "Paul Gierszewski",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Nahanni_-_VirginiaFalls.jpg",
      "kind": "commons",
      "src": "assets/supplements/u24.webp"
    },
    "introduction": "南纳汉尼河切穿加拿大西北地区的山地，形成深峡谷和弗吉尼亚瀑布。周围还分布着石灰岩洞穴、温泉与北方森林。",
    "coords": [
      -125.589444,
      61.547222
    ]
  },
  "https://whc.unesco.org/en/list/71/": {
    "ipa": "/ˈdaɪnəˌsɔr prəˈvɪnʃəl pɑrk/",
    "illustration": {
      "subject": "DinosaurProvincialParkHoodoo.jpg",
      "credit": "Joanne Merriam",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:DinosaurProvincialParkHoodoo.jpg",
      "kind": "commons",
      "src": "assets/supplements/u71.webp"
    },
    "introduction": "加拿大艾伯塔省的恶地由流水切割沉积岩形成。裸露地层保存了丰富的白垩纪恐龙骨骼，让人得以研究当时的河流平原生态。",
    "coords": [
      -111.492222,
      50.767778
    ]
  },
  "https://whc.unesco.org/en/list/304/": {
    "ipa": "/kəˈneɪdiən ˈrɑki ˈmaʊntən pɑrks/",
    "illustration": {
      "subject": "Moraine Lake-Banff NP.JPG",
      "credit": "Tobias Alt, Tobi 87",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Moraine_Lake-Banff_NP.JPG",
      "kind": "commons",
      "src": "assets/supplements/u304.webp"
    },
    "introduction": "加拿大落基山公园群横跨大陆分水岭。冰川雕刻出峡谷与湖盆，伯吉斯页岩中的化石则保存了寒武纪海洋动物的细部。",
    "coords": [
      -116.479722,
      51.424722
    ]
  },
  "https://www.geonames.org/2657896/": {
    "ipa": "/ˈzʊrɪk/",
    "illustration": {
      "subject": "Altstadt Zürich 2015.jpg",
      "credit": "Thomas Wolf, www.foto-tw.de",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Altstadt_Z%C3%BCrich_2015.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2657896.webp"
    },
    "introduction": "苏黎世坐落在苏黎世湖西北端，利马特河从湖中流出、穿过老城。两岸教堂的尖塔是辨认市中心的标志。",
    "introductionSource": "https://en.wikipedia.org/wiki/Zurich",
    "coords": [
      8.55,
      47.36667
    ]
  },
  "https://www.geonames.org/2660646/": {
    "ipa": "/dʒəˈnivə/",
    "illustration": {
      "subject": "Geneve 2005 001 Ork.ch.jpg",
      "credit": "fr:Utilisateur:Stéphane_Pecorini",
      "license": "CC BY-SA 2.0 fr",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Geneve_2005_001_Ork.ch.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2660646.webp"
    },
    "introduction": "日内瓦位于日内瓦湖西南端，罗讷河从城中流出。湖畔聚集着联合国机构和国际红十字运动的重要组织。",
    "introductionSource": "https://en.wikipedia.org/wiki/Geneva",
    "coords": [
      6.14569,
      46.20222
    ]
  },
  "https://www.geonames.org/2661604/": {
    "ipa": "/ˈbɑzəl/",
    "illustration": {
      "subject": "Basel Cathedral dominating river Rhine.jpg",
      "credit": "Lucazzitto",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Basel_Cathedral_dominating_river_Rhine.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2661604.webp"
    },
    "introduction": "巴塞尔地处瑞士、法国和德国交界附近。莱茵河在这里转向北流，河港把瑞士内陆接入欧洲水运网。",
    "introductionSource": "https://en.wikipedia.org/wiki/Basel",
    "coords": [
      7.57327,
      47.55839
    ]
  },
  "https://whc.unesco.org/en/list/268/": {
    "ipa": "/ˈæbi əv seɪnt ɡɔl/",
    "illustration": {
      "subject": "Abbey church St. Gallen.jpg",
      "credit": "Sana Tajangi",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Abbey_church_St._Gallen.jpg",
      "kind": "commons",
      "src": "assets/supplements/u268.webp"
    },
    "introduction": "圣加尔修道院曾是欧洲重要的抄书与学习中心。馆中保存着中世纪手稿和著名的修道院规划图，现有图书馆以巴洛克大厅闻名。",
    "coords": [
      9.37778,
      47.42333
    ]
  },
  "https://www.geonames.org/3868626/": {
    "ipa": "/ˌvælpəˈraɪzoʊ/",
    "illustration": {
      "subject": "Valparaíso 9451.jpg",
      "credit": "Draceane",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Valpara%C3%ADso_9451.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3868626.webp"
    },
    "introduction": "瓦尔帕莱索是智利太平洋岸的港城。平地狭窄，住宅层层爬上山坡，缆索升降机把港区和高处街区连起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Valpara%C3%ADso",
    "coords": [
      -71.62963,
      -33.036
    ]
  },
  "https://www.geonames.org/3893894/": {
    "ipa": "/kənˌsɛpsiˈoʊn/",
    "illustration": {
      "subject": "Plaza de la Independencia de Concepción.jpg",
      "credit": "TomasVial",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Plaza_de_la_Independencia_de_Concepci%C3%B3n.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3893894.webp"
    },
    "introduction": "康塞普西翁位于智利中南部的比奥比奥河下游。它与附近的塔尔卡瓦诺港共同构成沿海工业区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Concepci%C3%B3n%2C_Chile",
    "coords": [
      -73.04977,
      -36.82699
    ]
  },
  "https://whc.unesco.org/en/list/959/": {
    "ipa": "/hɪˈstɔrɪk ˈkwɔrtɚ əv ðə ˈsiˌpɔrt ˈsɪti əv ˌvælpəˈraɪzoʊ/",
    "illustration": {
      "subject": "Historic Quarter of the Seaport City of Valparaíso 04.jpg",
      "credit": "Julia Sumangil",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Historic_Quarter_of_the_Seaport_City_of_Valpara%C3%ADso_04.jpg",
      "kind": "commons",
      "src": "assets/supplements/u959.webp"
    },
    "introduction": "瓦尔帕莱索依智利太平洋岸的海湾与陡坡而建。港区街道贴近海面，山坡居民区由阶梯和轨道缆车与码头连接。",
    "coords": [
      -71.628,
      -33.040639
    ]
  },
  "https://www.geonames.org/1796236/": {
    "ipa": "/ˌʃæŋˈhaɪ/",
    "illustration": {
      "subject": "上海·上海市·（俯拍）.jpg",
      "credit": "Legolas1024",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E6%B5%B7%C2%B7%E4%B8%8A%E6%B5%B7%E5%B8%82%C2%B7%EF%BC%88%E4%BF%AF%E6%8B%8D%EF%BC%89.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1796236.webp"
    },
    "introduction": "上海位于长江入海口南侧。黄浦江穿过市区，外滩的近代建筑与对岸陆家嘴的高楼隔江相望。",
    "introductionSource": "https://en.wikipedia.org/wiki/Shanghai",
    "coords": [
      121.45806,
      31.22222
    ]
  },
  "https://www.geonames.org/1809858/": {
    "ipa": "/ˌɡwɑŋˈdʒoʊ/",
    "illustration": {
      "subject": "Canton Tower 20220626 (cropped).jpg",
      "credit": "Tim Wu",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Canton_Tower_20220626_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1809858.webp"
    },
    "introduction": "广州是珠江三角洲北部的港城，海船可经珠江水道抵达。沿江西关商宅和沙面建筑保留了对外贸易的痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Guangzhou",
    "coords": [
      113.25,
      23.11667
    ]
  },
  "https://www.geonames.org/1795565/": {
    "ipa": "/ˌʃɛnˈdʒɛn/",
    "illustration": {
      "subject": "Commercial area of futian to east2020.jpg",
      "credit": "Charlie fong",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Commercial_area_of_futian_to_east2020.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1795565.webp"
    },
    "introduction": "深圳位于珠江口东岸，与香港陆地相连。经济特区设立后，原先的边境城镇发展成电子制造与科技产业中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Shenzhen",
    "coords": [
      114.0683,
      22.54554
    ]
  },
  "https://www.geonames.org/1815286/": {
    "ipa": "/ˌtʃʌŋˈdu/",
    "illustration": {
      "subject": "雪山下的成都市天际线 Chengdu skyline with snow capped mountains.jpg",
      "credit": "FISU",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1815286.webp"
    },
    "introduction": "成都位于四川盆地西部。都江堰引岷江水灌溉成都平原，城市的繁荣与这片农田长期相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chengdu",
    "coords": [
      104.06667,
      30.66667
    ]
  },
  "https://www.geonames.org/1814906/": {
    "ipa": "/ˌtʃʊŋˈtʃɪŋ/",
    "illustration": {
      "subject": "Chaotianmen Bridge, Nan'an District of Chongqing.jpg",
      "credit": "Juukeihc at English Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chaotianmen_Bridge,_Nan%27an_District_of_Chongqing.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1814906.webp"
    },
    "introduction": "重庆主城区建在长江与嘉陵江交会处。江岸与山坡高差明显，桥梁、索道和层叠街道构成了山城的交通格局。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chongqing",
    "coords": [
      106.55771,
      29.56026
    ]
  },
  "https://www.geonames.org/1790630/": {
    "ipa": "/ˌʃiˈɑn/",
    "illustration": {
      "subject": "西安钟楼2020 (1).jpg",
      "credit": "ScareCriterion12",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E5%AE%89%E9%92%9F%E6%A5%BC2020_(1).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1790630.webp"
    },
    "introduction": "西安坐落在关中平原。汉唐都城长安曾由此连接向西的丝绸之路，今天城中心仍保存着明代城墙。",
    "introductionSource": "https://en.wikipedia.org/wiki/Xi'an",
    "coords": [
      108.92861,
      34.25833
    ]
  },
  "https://whc.unesco.org/en/list/437/": {
    "ipa": "/maʊnt ˌtaɪˈʃɑn/",
    "illustration": {
      "subject": "泰山 南天门.jpg",
      "credit": "Charlie fong",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:%E6%B3%B0%E5%B1%B1_%E5%8D%97%E5%A4%A9%E9%97%A8.jpg",
      "kind": "commons",
      "src": "assets/supplements/u437.webp"
    },
    "introduction": "泰山位于山东中部。历代帝王曾在这里举行封禅仪式，从山麓至山顶的石阶沿途分布着庙宇、碑刻和摩崖题字。",
    "coords": [
      117.1,
      36.26667
    ]
  },
  "https://whc.unesco.org/en/list/439/": {
    "ipa": "/ɪmˈpɪriəl ˈpæləsəz əv ðə mɪŋ ənd tʃɪŋ ˈdaɪnəstiz ɪn ˌbeɪˈʒɪŋ ənd ˌʃɛnˈjɑŋ/",
    "illustration": {
      "subject": "Forbidden city 07.jpg",
      "credit": "Jacob Ehnmark from Sendai, Japan",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Forbidden_city_07.jpg",
      "kind": "commons",
      "src": "assets/supplements/u439.webp"
    },
    "introduction": "北京故宫和沈阳故宫同属这项遗产。北京宫城以中轴串联大殿和宫门，沈阳的早期清宫则保存了满族统治初期的建筑布局。",
    "coords": [
      119.926547,
      40.857141
    ]
  },
  "https://whc.unesco.org/en/list/440/": {
    "ipa": "/ˌmoʊˈɡaʊ keɪvz/",
    "illustration": {
      "subject": "Dunhuang Mogao Ku 2013.12.31 12-30-18.jpg",
      "credit": "Zhangzhugang",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dunhuang_Mogao_Ku_2013.12.31_12-30-18.jpg",
      "kind": "commons",
      "src": "assets/supplements/u440.webp"
    },
    "introduction": "敦煌莫高窟开凿在河谷一侧的崖壁上。窟内的彩塑和壁画描绘佛教故事、供养人及往来丝路的商旅，年代横跨多个朝代。",
    "coords": [
      94.81667,
      40.13333
    ]
  },
  "https://whc.unesco.org/en/list/441/": {
    "ipa": "/ˌmɔsəˈliəm əv ðə fɝst tʃɪn ˈɛmpərɚ/",
    "illustration": {
      "subject": "China (Xian) Terracotta army, more than 8000 warriors and horses had been discovered (26279806738).jpg",
      "credit": "Güldem Üstün from Istanbul, TURKEY",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:China_(Xian)_Terracotta_army,_more_than_8000_warriors_and_horses_had_been_discovered_(26279806738).jpg",
      "kind": "commons",
      "src": "assets/supplements/u441.webp"
    },
    "introduction": "秦始皇陵位于陕西临潼。陵园东侧的陪葬坑内，陶制步兵、车兵与战马排列成阵，盔甲和姿态体现了军队分工。",
    "coords": [
      109.263556,
      34.383306
    ]
  },
  "https://whc.unesco.org/en/list/547/": {
    "ipa": "/maʊnt ˌhwɑŋˈʃɑn/",
    "illustration": {
      "subject": "Huangshan pic 4.jpg",
      "credit": "Chi King",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Huangshan_pic_4.jpg",
      "kind": "commons",
      "src": "assets/supplements/u547.webp"
    },
    "introduction": "黄山的花岗岩峰丛因断裂与风化形成，松树常从岩缝中伸出。山谷云雾聚散，让这些山峰成为中国山水画的重要题材。",
    "coords": [
      118.155083,
      30.145333
    ]
  },
  "https://whc.unesco.org/en/list/637/": {
    "ipa": "/ˌdʒjoʊdʒaɪˈɡoʊ ˈvæli ˈsinɪk ənd hɪˈstɔrɪk ˈɪntɚəst ˈɛriə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "1 nuorilang jiuzhaigou 2023.jpg",
      "credit": "Chensiyuan",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:1_nuorilang_jiuzhaigou_2023.jpg",
      "kind": "commons",
      "src": "assets/supplements/u637.webp"
    },
    "introduction": "九寨沟位于四川北部山地。富含碳酸钙的水在谷中形成钙华堤坝，使一串清澈的湖泊以浅滩和瀑布相连。",
    "coords": [
      103.91667,
      33.08333
    ]
  },
  "https://www.geonames.org/2290956/": {
    "ipa": "/bwɑˈkeɪ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Cibkechu.JPG",
      "credit": "Zenman",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cibkechu.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2290956.webp"
    },
    "introduction": "布瓦凯位于科特迪瓦中部，是连接南部港口与北方内陆的交通节点。周边棉花种植也带动了当地的纺织业。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bouak%C3%A9",
    "coords": [
      -5.03031,
      7.69385
    ]
  },
  "https://whc.unesco.org/en/list/195/": {
    "ipa": "/tɑˈi ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Taï National Park (24148248710).jpg",
      "credit": "yakovlev.alexey from Moscow, Russia",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ta%C3%AF_National_Park_(24148248710).jpg",
      "kind": "commons",
      "src": "assets/supplements/u195.webp"
    },
    "introduction": "塔伊国家公园保护科特迪瓦西南部的低地热带雨林。这里的黑猩猩会借助石块或木槌敲开坚果。",
    "coords": [
      -7.095278,
      5.648889
    ]
  },
  "https://www.geonames.org/2232593/": {
    "ipa": "/duˈɑlə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Douala.JPG",
      "credit": "Njeimosestimah",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Douala.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2232593.webp"
    },
    "introduction": "杜阿拉沿喀麦隆的武里河口发展。河港连接大西洋航线与通向内陆的铁路，是当地货物集散的重要节点。",
    "introductionSource": "https://en.wikipedia.org/wiki/Douala",
    "coords": [
      9.70428,
      4.04827
    ]
  },
  "https://whc.unesco.org/en/list/407/": {
    "ipa": "/dʒɑ ˈfɔnəl rɪˈzɝv/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Dja River and pirogue.JPG",
      "credit": "Amcaja",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Dja_River_and_pirogue.JPG",
      "kind": "commons",
      "src": "assets/supplements/u407.webp"
    },
    "introduction": "德贾保护区位于喀麦隆南部，德贾河环绕着大部分边界。连续的热带森林为低地大猩猩和多种灵长类动物提供栖息地。",
    "coords": [
      12.995,
      3.125
    ]
  },
  "https://www.geonames.org/922704/": {
    "ipa": "/ˌlubumˈbɑʃi/",
    "illustration": {
      "subject": "Square in Lubumbashi, 2011.jpg",
      "credit": "T. Thielemans",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Square_in_Lubumbashi,_2011.jpg",
      "kind": "commons",
      "src": "assets/supplements/g922704.webp"
    },
    "introduction": "卢本巴希位于刚果民主共和国东南部的铜矿带。铜矿开发和矿石运输深刻影响了这座城市的形成。",
    "introductionSource": "https://en.wikipedia.org/wiki/Lubumbashi",
    "coords": [
      27.47938,
      -11.66089
    ]
  },
  "https://www.geonames.org/209228/": {
    "ipa": "/ˈmbudʒi ˈmɑji/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Mbuji-Mayi.jpg",
      "credit": "Kitangaza.1953",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Mbuji-Mayi.jpg",
      "kind": "commons",
      "src": "assets/supplements/g209228.webp"
    },
    "introduction": "姆布吉马伊位于刚果民主共和国中南部的开赛地区。周围的金刚石矿床吸引人口聚集，形成矿业城市。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mbuji-Mayi",
    "coords": [
      23.58979,
      -6.13603
    ]
  },
  "https://whc.unesco.org/en/list/280/": {
    "ipa": "/səˈlɔŋɡə ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "La rivière Lulilaka, parc national de Salonga, 2005.jpg",
      "credit": "Radio Okapi",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:La_rivi%C3%A8re_Lulilaka,_parc_national_de_Salonga,_2005.jpg",
      "kind": "commons",
      "src": "assets/supplements/u280.webp"
    },
    "introduction": "萨隆加位于刚果盆地腹地。河流穿过广阔的低地雨林，当地保护着倭黑猩猩和刚果孔雀等刚果盆地特有动物。",
    "coords": [
      21.280402,
      -1.948186
    ]
  },
  "https://www.geonames.org/2255414/": {
    "ipa": "/pwɛnt nwɑr/",
    "illustration": {
      "subject": "Pointe-Noire downtown.jpg",
      "credit": "David Stanley",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pointe-Noire_downtown.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2255414.webp"
    },
    "introduction": "黑角是刚果共和国的大西洋港城。刚果－大洋铁路从这里通向内陆的布拉柴维尔。",
    "introductionSource": "https://en.wikipedia.org/wiki/Pointe-Noire",
    "coords": [
      11.86352,
      -4.77609
    ]
  },
  "https://whc.unesco.org/en/list/692/": {
    "ipa": "/ˈfɔrəst ˈmæsɪf əv oʊˈdzɑlə koʊˈkuə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Primage2.jpg",
      "credit": "Leighcn",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Primage2.jpg",
      "kind": "commons",
      "src": "assets/supplements/u692.webp"
    },
    "introduction": "奥扎拉－科科阿处于中非雨林与稀树草原交汇处。森林、草地和林中湿地交错，是森林象和多种灵长类动物的栖息地。",
    "coords": [
      14.860278,
      1.335556
    ]
  },
  "https://www.geonames.org/3674962/": {
    "ipa": "/ˌmɛdəˈjin/",
    "illustration": {
      "subject": "Centro de Medellín en dron 04.jpg",
      "credit": "Juan Gómez",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Centro_de_Medell%C3%ADn_en_dron_04.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3674962.webp"
    },
    "introduction": "麦德林坐落在哥伦比亚安第斯山脉的阿布拉河谷。城区从谷底向两侧山坡延伸，空中缆车连接山坡社区与地铁。",
    "introductionSource": "https://en.wikipedia.org/wiki/Medell%C3%ADn",
    "coords": [
      -75.57151,
      6.245
    ]
  },
  "https://www.geonames.org/3687925/": {
    "ipa": "/ˈkɑli/",
    "illustration": {
      "subject": "Santiago de Cali.jpg",
      "credit": "Aleko | David Alejandro Rendón ©",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Santiago_de_Cali.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3687925.webp"
    },
    "introduction": "卡利位于哥伦比亚西部的考卡河谷。河谷甘蔗种植支撑了地区经济，萨尔萨音乐和舞蹈则塑造了城市文化。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cali",
    "coords": [
      -76.5199,
      3.43054
    ]
  },
  "https://www.geonames.org/3689147/": {
    "ipa": "/ˌbærəŋˈkiə/",
    "illustration": {
      "subject": "Antigua Aduana de Barranquilla.jpg",
      "credit": "Jdvillalobos",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Antigua_Aduana_de_Barranquilla.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3689147.webp"
    },
    "introduction": "巴兰基亚位于马格达莱纳河下游，靠近加勒比海。船运把内陆与海岸连接起来，年度狂欢节汇集多种舞乐传统。",
    "introductionSource": "https://en.wikipedia.org/wiki/Barranquilla",
    "coords": [
      -74.78132,
      10.96854
    ]
  },
  "https://whc.unesco.org/en/list/285/": {
    "ipa": "/pɔrt ˈfɔrtrəsɪz ənd ɡrup əv ˈmɑnjəmənts ˌkɑrtəˈdʒinə/",
    "illustration": {
      "subject": "Sunset-cartagena-tower-dewired.jpg",
      "credit": "Igvir Ramirez",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sunset-cartagena-tower-dewired.jpg",
      "kind": "commons",
      "src": "assets/supplements/u285.webp"
    },
    "introduction": "卡塔赫纳坐落在哥伦比亚加勒比海岸。港湾入口和老城周围的城墙、炮台与堡垒曾共同守护西班牙殖民时期的航线。",
    "coords": [
      -75.533333,
      10.416667
    ]
  },
  "https://whc.unesco.org/en/list/1768/": {
    "ipa": "/ðə məˈdinəz əv ðə hɪˈstɔrɪk ˈsʌltən əv ðə kɔˈmɔˌroʊs/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Mutsamudu Medina (9983189305).jpg",
      "credit": "David Stanley from Nanaimo, Canada",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mutsamudu_Medina_(9983189305).jpg",
      "kind": "commons",
      "src": "assets/supplements/u1768.webp"
    },
    "introduction": "科摩罗群岛上六座历史城镇保存了苏丹国时代的街区。清真寺、广场与民居的布局记录了群岛参与印度洋贸易的历史。",
    "coords": [
      43.657825,
      -11.869148
    ]
  },
  "https://whc.unesco.org/en/list/1310/": {
    "ipa": "/sɪˈdɑdə ˈvɛljə hɪˈstɔrɪk ˈsɛntɚ əv rɪˈbeɪrə ˈɡrɑndə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Cidade Velha-Bord de mer (2).jpg",
      "credit": "Ji-Elle",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cidade_Velha-Bord_de_mer_(2).jpg",
      "kind": "commons",
      "src": "assets/supplements/u1310.webp"
    },
    "introduction": "圣地亚哥岛上的旧城原名里贝拉格兰德，是欧洲人在热带大西洋较早建立的殖民据点。港口遗存也记录了跨大西洋奴隶贸易。",
    "coords": [
      -23.605194,
      14.915139
    ]
  },
  "https://whc.unesco.org/en/list/820/": {
    "ipa": "/ˈkoʊkoʊs ˈaɪlənd ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Isla del Coco-chatham beach.jpg",
      "credit": "J RAWLS",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Isla_del_Coco-chatham_beach.jpg",
      "kind": "commons",
      "src": "assets/supplements/u820.webp"
    },
    "introduction": "科科斯岛孤悬于哥斯达黎加以西的太平洋。潮湿山地覆盖着森林，岛周围的洋流吸引成群锤头鲨等大型海洋动物。",
    "coords": [
      -87.066667,
      5.533333
    ]
  },
  "https://www.geonames.org/3536729/": {
    "ipa": "/ˌsæntiˈɑɡoʊ də ˈkjubə/",
    "illustration": {
      "subject": "Santiago de cuba al atardecer.jpg",
      "credit": "Alex Cano",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Santiago_de_cuba_al_atardecer.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3536729.webp"
    },
    "introduction": "古巴圣地亚哥依托古巴东南岸的深水海湾发展。海湾入口有莫罗城堡，城区也是古巴传统音乐的重要发源地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Santiago_de_Cuba",
    "coords": [
      -75.82171,
      20.02287
    ]
  },
  "https://www.geonames.org/3566067/": {
    "ipa": "/ˌkɑməˈɡweɪ/",
    "illustration": {
      "subject": "Camaguey rooftops 2.jpg",
      "credit": "No machine-readable author provided. Danleo~commonswiki assumed (based on copyright claims).",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Camaguey_rooftops_2.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3566067.webp"
    },
    "introduction": "卡马圭位于古巴中东部内陆。旧城街巷曲折，庭院里曾用称为 tinajón 的大型陶缸储存雨水。",
    "introductionSource": "https://en.wikipedia.org/wiki/Camag%C3%BCey",
    "coords": [
      -77.91694,
      21.38083
    ]
  },
  "https://whc.unesco.org/en/list/840/": {
    "ipa": "/vɪnˈjælɛs ˈvæli/",
    "illustration": {
      "subject": "Viñales Valley.jpg",
      "credit": "Severin.stalder",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vi%C3%B1ales_Valley.jpg",
      "kind": "commons",
      "src": "assets/supplements/u840.webp"
    },
    "introduction": "比尼亚莱斯谷底遍布传统烟田，四周耸立着突出的石灰岩残丘。红色土壤和圆顶岩丘构成古巴西部鲜明的喀斯特景观。",
    "coords": [
      -83.71667,
      22.61667
    ]
  },
  "https://whc.unesco.org/en/list/819/": {
    "ipa": "/hɪˈstɔrɪk ˈɛriə əv ˈwɪləmstɑt ˈɪnɚ ˈsɪti ənd ˈhɑrbɚ ˈkjʊrəˌsaʊ/",
    "illustration": {
      "subject": "Handelskade Willemstad.jpg",
      "credit": "Rodry 1",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Handelskade_Willemstad.jpg",
      "kind": "commons",
      "src": "assets/supplements/u819.webp"
    },
    "introduction": "威廉斯塔德围绕库拉索岛的一处天然港湾发展。两岸的街区将荷兰城市布局与加勒比气候下的建筑形式结合起来。",
    "coords": [
      -68.90222,
      12.10194
    ]
  },
  "https://www.geonames.org/146384/": {
    "ipa": "/ˈlɪməsɑl/",
    "illustration": {
      "subject": "Limassol Skyline.jpg",
      "credit": "Στέφανος Νικολάου",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Limassol_Skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g146384.webp"
    },
    "introduction": "利马索尔坐落在塞浦路斯南岸，是地中海港城。向内陆走，沿山麓分布着传统酿酒村庄。",
    "introductionSource": "https://en.wikipedia.org/wiki/Limassol",
    "coords": [
      33.03794,
      34.68406
    ]
  },
  "https://whc.unesco.org/en/list/351/": {
    "ipa": "/ˈpeɪntɪd ˈtʃɝtʃɪz ɪn ðə ˈtroʊədɔs ˈridʒən/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Pedoulas Konstantin.jpg",
      "credit": "Unbekannte Künstler zwischen 1200 und 1400",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Pedoulas_Konstantin.jpg",
      "kind": "commons",
      "src": "assets/supplements/u351.webp"
    },
    "introduction": "塞浦路斯特罗多斯山区的教堂外观朴素，部分覆有陡斜木屋顶。内部保存着跨越多个时期的拜占庭和后拜占庭壁画。",
    "coords": [
      32.936108,
      34.972876
    ]
  },
  "https://www.geonames.org/3078610/": {
    "ipa": "/ˈbɝnoʊ/",
    "illustration": {
      "subject": "Brno, Štýřice, Pražákova, výhled z AZ Toweru (2013-05-22; 28).jpg",
      "credit": "Harold",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Brno,_%C5%A0t%C3%BD%C5%99ice,_Pra%C5%BE%C3%A1kova,_v%C3%BDhled_z_AZ_Toweru_(2013-05-22;_28).jpg",
      "kind": "commons",
      "src": "assets/supplements/g3078610.webp"
    },
    "introduction": "布尔诺位于捷克东南部的摩拉维亚地区。山上的什皮尔贝克城堡俯瞰旧城，图根哈特别墅则展现了现代主义建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Brno",
    "coords": [
      16.60796,
      49.19522
    ]
  },
  "https://www.geonames.org/3068799/": {
    "ipa": "/ˈɔstrəvə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Katedrála Božského Spasitele, Nová Karolina a Dolní oblast Vítkovic, pohled z Nové radnice, srpen 2011.jpg",
      "credit": "Lukáš Mižoch",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Katedr%C3%A1la_Bo%C5%BEsk%C3%A9ho_Spasitele,_Nov%C3%A1_Karolina_a_Doln%C3%AD_oblast_V%C3%ADtkovic,_pohled_z_Nov%C3%A9_radnice,_srpen_2011.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3068799.webp"
    },
    "introduction": "俄斯特拉发靠近捷克与波兰边界。煤矿、高炉和钢厂曾构成城市中心景观，部分厂区现已开放参观。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ostrava",
    "coords": [
      18.28204,
      49.83465
    ]
  },
  "https://whc.unesco.org/en/list/617/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv ˈtʃɛski ˈkrʊmlɔv/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Český Krumlov, zámek celý z vyhlídky.jpg",
      "credit": "VitVit",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%C4%8Cesk%C3%BD_Krumlov,_z%C3%A1mek_cel%C3%BD_z_vyhl%C3%ADdky.jpg",
      "kind": "commons",
      "src": "assets/supplements/u617.webp"
    },
    "introduction": "捷克克鲁姆洛夫老城坐落在伏尔塔瓦河的曲流之中。高处的城堡俯瞰河岸，桥梁连接中世纪街区与城堡山脚。",
    "coords": [
      14.315028,
      48.810694
    ]
  },
  "https://www.geonames.org/2911298/": {
    "ipa": "/ˈhæmbɝɡ/",
    "illustration": {
      "subject": "Hamburg view St. Nikolai.jpg",
      "credit": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Hamburg_view_St._Nikolai.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2911298.webp"
    },
    "introduction": "汉堡坐落在易北河下游，远洋船可由北海溯河入港。仓库城的红砖货栈沿运河排列，见证了转口贸易。",
    "introductionSource": "https://en.wikipedia.org/wiki/Hamburg",
    "coords": [
      9.99302,
      53.55073
    ]
  },
  "https://www.geonames.org/2867714/": {
    "ipa": "/ˈmjunɪk/",
    "illustration": {
      "subject": "Stadtbild München.jpg",
      "credit": "Thomas Wolf, www.foto-tw.de",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Stadtbild_M%C3%BCnchen.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2867714.webp"
    },
    "introduction": "慕尼黑位于巴伐利亚的伊萨尔河畔，向南可通往阿尔卑斯山。玛利亚广场周围保留着旧城的街道格局。",
    "introductionSource": "https://en.wikipedia.org/wiki/Munich",
    "coords": [
      11.57549,
      48.13743
    ]
  },
  "https://www.geonames.org/2886242/": {
    "ipa": "/kəˈloʊn/",
    "illustration": {
      "subject": "Kranhäuser Cologne, April 2018 -01.jpg",
      "credit": "Martin Falbisoner",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kranh%C3%A4user_Cologne,_April_2018_-01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2886242.webp"
    },
    "introduction": "科隆横跨莱茵河。双塔大教堂紧邻铁路桥，水运和桥梁让这里长期承担德国西部的交通枢纽功能。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cologne",
    "coords": [
      6.95,
      50.93333
    ]
  },
  "https://www.geonames.org/2925533/": {
    "ipa": "/ˈfræŋkfɝt/",
    "illustration": {
      "subject": "Blick vom Kaiserdom über Frankfurt zur Skyline.jpg",
      "credit": "Jörg Braukmann",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Blick_vom_Kaiserdom_%C3%BCber_Frankfurt_zur_Skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2925533.webp"
    },
    "introduction": "法兰克福位于美因河畔，是德国的金融与会展城市。河名也用来和德国东部奥得河畔的同名城相区分。",
    "introductionSource": "https://en.wikipedia.org/wiki/Frankfurt",
    "coords": [
      8.68417,
      50.11552
    ]
  },
  "https://whc.unesco.org/en/list/3/": {
    "ipa": "/ˈɑkən kəˈθidrəl/",
    "illustration": {
      "subject": "Aachen Germany Imperial-Cathedral-01.jpg",
      "credit": "Photo by CEphoto, Uwe Aranas or alternatively © CEphoto, Uwe Aranas",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aachen_Germany_Imperial-Cathedral-01.jpg",
      "kind": "commons",
      "src": "assets/supplements/u3.webp"
    },
    "introduction": "亚琛大教堂的核心是查理曼时期的八角形宫廷礼拜堂。后世扩建的唱诗班席与礼拜堂并存，这里也曾举行王室加冕仪式。",
    "coords": [
      6.08392,
      50.774747
    ]
  },
  "https://www.geonames.org/2624652/": {
    "ipa": "/ˈɑrhus/",
    "illustration": {
      "subject": "Drone photo of Dokk1 in Aarhus, Denmark.jpg",
      "credit": "SmartDrones Aarhus",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Drone_photo_of_Dokk1_in_Aarhus,_Denmark.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2624652.webp"
    },
    "introduction": "奥胡斯位于日德兰半岛东岸。城市由河口附近的维京时代聚落发展而来，港湾至今仍是城市地理的中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Aarhus",
    "coords": [
      10.21076,
      56.15674
    ]
  },
  "https://www.geonames.org/2615876/": {
    "ipa": "/ˈoʊdənsə/",
    "illustration": {
      "subject": "Odense rådhus.jpg",
      "credit": "Emelie Graven",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Odense_r%C3%A5dhus.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2615876.webp"
    },
    "introduction": "欧登塞位于丹麦菲英岛内陆。作家安徒生出生在这里，旧城区的博物馆与街巷记录了他的童年生活。",
    "introductionSource": "https://en.wikipedia.org/wiki/Odense",
    "coords": [
      10.38831,
      55.39594
    ]
  },
  "https://whc.unesco.org/en/list/696/": {
    "ipa": "/ˈkroʊnbɔrɡ ˈkæsəl/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "KronborgCastle HCS.jpg",
      "credit": "Dr.Splif at English Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:KronborgCastle_HCS.jpg",
      "kind": "commons",
      "src": "assets/supplements/u696.webp"
    },
    "introduction": "克伦堡扼守丹麦与瑞典之间的厄勒海峡。城堡曾控制过往船只缴纳海峡通行税，也是莎士比亚《哈姆雷特》中埃尔西诺的原型。",
    "coords": [
      12.620833,
      56.03889
    ]
  },
  "https://www.geonames.org/3492914/": {
    "ipa": "/ˌsæntiˈɑɡoʊ də loʊs ˌkɑbəˈjɛroʊs/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "SantiagoCitySkyline2.jpg",
      "credit": "derivative work: Fogster ( talk ) [2] : ChezSant",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:SantiagoCitySkyline2.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3492914.webp"
    },
    "introduction": "圣地亚哥-德洛斯卡瓦列罗斯位于多米尼加共和国北部的锡瓦奥谷地。周边烟草产区使这里成为雪茄加工中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Santiago_de_los_Caballeros",
    "coords": [
      -70.69085,
      19.45036
    ]
  },
  "https://www.geonames.org/2485926/": {
    "ipa": "/ɔˈrɑn/",
    "illustration": {
      "subject": "ORAN City & Coast.jpg",
      "credit": "Benba.d.mourad",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:ORAN_City_%26_Coast.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2485926.webp"
    },
    "introduction": "瓦赫兰是阿尔及利亚西北部的地中海港城。山上的圣克鲁斯堡可以俯瞰海湾，当地也以莱伊音乐传统闻名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Oran",
    "coords": [
      -0.63588,
      35.69906
    ]
  },
  "https://www.geonames.org/2501152/": {
    "ipa": "/ˌkɑnstənˈtin/",
    "illustration": {
      "subject": "1 Pont de Sidi M'Cid.JPG",
      "credit": "Yelles",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:1_Pont_de_Sidi_M%27Cid.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2501152.webp"
    },
    "introduction": "君士坦丁建在阿尔及利亚东北部一座岩石高台上。鲁梅尔河切出深峡，多座桥梁连接峡谷两侧街区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Constantine%2C_Algeria",
    "coords": [
      6.61472,
      36.365
    ]
  },
  "https://whc.unesco.org/en/list/191/": {
    "ipa": "/ˈdʒɛmɪlə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Roman Ruins of Djemila in Sétif, Algeria.jpg",
      "credit": "Alioueche Mokhtar",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Roman_Ruins_of_Djemila_in_S%C3%A9tif,_Algeria.jpg",
      "kind": "commons",
      "src": "assets/supplements/u191.webp"
    },
    "introduction": "杰米拉位于阿尔及利亚内陆山地。古罗马城镇将广场、剧场与浴场布置在起伏地势上，石铺街道仍勾勒出旧城格局。",
    "coords": [
      5.73667,
      36.32056
    ]
  },
  "https://www.geonames.org/3657509/": {
    "ipa": "/ˌɡwaɪəˈkil/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Gye13.jpg",
      "credit": "Yyntl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Gye13.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3657509.webp"
    },
    "introduction": "瓜亚基尔坐落在厄瓜多尔西部的瓜亚斯河旁。通往太平洋的河道让香蕉、可可等内陆物产可以由此出口。",
    "introductionSource": "https://en.wikipedia.org/wiki/Guayaquil",
    "coords": [
      -79.88621,
      -2.19616
    ]
  },
  "https://www.geonames.org/3658666/": {
    "ipa": "/ˈkwɛnkə/",
    "illustration": {
      "subject": "Cuenca Old Cathedral Interior 02.jpg",
      "credit": "Ymblanter",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cuenca_Old_Cathedral_Interior_02.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3658666.webp"
    },
    "introduction": "昆卡位于厄瓜多尔南部的安第斯山间盆地。多条河流穿城而过，老城保留着广场、教堂和棋盘式街道。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cuenca%2C_Ecuador",
    "coords": [
      -78.9963,
      -2.8953
    ]
  },
  "https://whc.unesco.org/en/list/260/": {
    "ipa": "/sæŋˈɡaɪ ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sangay Volcano ash plume, Ecuador - August 14th, 2022 (52286139098).jpg",
      "credit": "Pierre Markuse from Hamm, Germany",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sangay_Volcano_ash_plume,_Ecuador_-_August_14th,_2022_(52286139098).jpg",
      "kind": "commons",
      "src": "assets/supplements/u260.webp"
    },
    "introduction": "桑盖国家公园从厄瓜多尔安第斯高山延伸到亚马逊流域的湿润山麓。活火山、冰雪峰和不同海拔的森林集中在这片地区。",
    "coords": [
      -78.33333,
      -1.83333
    ]
  },
  "https://www.geonames.org/361058/": {
    "ipa": "/æləkˈzændriə/",
    "illustration": {
      "subject": "AlexandriaSkyline.jpg",
      "credit": "ASaber91",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:AlexandriaSkyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g361058.webp"
    },
    "introduction": "亚历山大港位于尼罗河三角洲西缘。古代法罗斯灯塔曾为入港船只导航，卡特贝城堡后来建在灯塔原址一带。",
    "introductionSource": "https://en.wikipedia.org/wiki/Alexandria",
    "coords": [
      29.91582,
      31.20176
    ]
  },
  "https://www.geonames.org/360502/": {
    "ipa": "/ˈlʌksɔr/",
    "illustration": {
      "subject": "LuxorHotelsIbnWalidSt.jpg",
      "credit": "Roland Unger",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:LuxorHotelsIbnWalidSt.jpg",
      "kind": "commons",
      "src": "assets/supplements/g360502.webp"
    },
    "introduction": "卢克索位于尼罗河两岸的古底比斯遗址区。东岸保存着卡纳克神庙，西岸山谷中分布着法老陵墓。",
    "introductionSource": "https://en.wikipedia.org/wiki/Luxor",
    "coords": [
      32.6421,
      25.69893
    ]
  },
  "https://www.geonames.org/359792/": {
    "ipa": "/ˈæswɑn/",
    "illustration": {
      "subject": "Panoramic view of Aswan 2, Egypt.jpg",
      "credit": "© Vyacheslav Argenberg",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Aswan_2,_Egypt.jpg",
      "kind": "commons",
      "src": "assets/supplements/g359792.webp"
    },
    "introduction": "阿斯旺位于埃及南部尼罗河第一瀑布附近。花岗岩岛屿分隔河道，上游的阿斯旺高坝拦出了纳赛尔湖。",
    "introductionSource": "https://en.wikipedia.org/wiki/Aswan",
    "coords": [
      32.89942,
      24.09082
    ]
  },
  "https://whc.unesco.org/en/list/87/": {
    "ipa": "/ˈeɪnʃənt θibz wɪð ɪts nəˈkrɑpələs/",
    "illustration": {
      "subject": "Luxor temple27.JPG",
      "credit": "I, Rémih",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Luxor_temple27.JPG",
      "kind": "commons",
      "src": "assets/supplements/u87.webp"
    },
    "introduction": "古底比斯遗址分布在今天卢克索附近的尼罗河两岸。东岸有卡尔纳克和卢克索神庙，西岸的山谷保存着法老及贵族墓葬。",
    "coords": [
      32.631102,
      25.716731
    ]
  },
  "https://whc.unesco.org/en/list/88/": {
    "ipa": "/ˈnjubiən ˈmɑnjəmənts frʌm ˈæbu ˈsɪmbəl tə ˈfaili/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kiosk of Qertassi by Dennis Jarvis.jpg",
      "credit": "Dennis G. Jarvis",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kiosk_of_Qertassi_by_Dennis_Jarvis.jpg",
      "kind": "commons",
      "src": "assets/supplements/u88.webp"
    },
    "introduction": "这项遗产包括阿布辛拜勒神庙和菲莱神庙等努比亚古迹。为躲避阿斯旺高坝蓄水造成的淹没，多座建筑被分块迁至高处重建。",
    "coords": [
      32.662441,
      23.628458
    ]
  },
  "https://www.geonames.org/3128760/": {
    "ipa": "/ˌbɑrsəˈloʊnə/",
    "illustration": {
      "subject": "Evening light over Barcelona.jpg",
      "credit": "M McBey",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Evening_light_over_Barcelona.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3128760.webp"
    },
    "introduction": "巴塞罗那面向地中海，老城外的扩展区以切去四角的方形街区著称。高迪设计的圣家堂就坐落在这一带。",
    "introductionSource": "https://en.wikipedia.org/wiki/Barcelona",
    "coords": [
      2.15899,
      41.38879
    ]
  },
  "https://www.geonames.org/2510911/": {
    "ipa": "/səˈvɪl/",
    "illustration": {
      "subject": "Plaza Virgen de los Reyes, Seville, Spain - Sep 2009.jpg",
      "credit": "Diliff",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Plaza_Virgen_de_los_Reyes,_Seville,_Spain_-_Sep_2009.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2510911.webp"
    },
    "introduction": "塞维利亚位于瓜达尔基维尔河畔。海船能够沿河深入西班牙内陆，这使它曾成为通往美洲的重要贸易港。",
    "introductionSource": "https://en.wikipedia.org/wiki/Seville",
    "coords": [
      -5.97317,
      37.38283
    ]
  },
  "https://www.geonames.org/2509954/": {
    "ipa": "/vəˈlɛnsiə/",
    "illustration": {
      "subject": "Vista cap a l'ajuntament des de l'edifici Roca, València.JPG",
      "credit": "Joanbanjo",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vista_cap_a_l%27ajuntament_des_de_l%27edifici_Roca,_Val%C3%A8ncia.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2509954.webp"
    },
    "introduction": "瓦伦西亚位于西班牙地中海岸。城市周围的传统灌渠滋养果园，南面的潟湖湿地与稻田相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Valencia",
    "coords": [
      -0.37966,
      39.47391
    ]
  },
  "https://www.geonames.org/2517117/": {
    "ipa": "/ɡrəˈnɑdə/",
    "illustration": {
      "subject": "Granada (25987961022).jpg",
      "credit": "Brett Hodnett",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Granada_(25987961022).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2517117.webp"
    },
    "introduction": "格拉纳达坐落在内华达山脉山麓。阿尔罕布拉宫与阿尔拜辛老街区分别占据达罗河谷两侧的山丘。",
    "introductionSource": "https://en.wikipedia.org/wiki/Granada",
    "coords": [
      -3.60667,
      37.18817
    ]
  },
  "https://whc.unesco.org/en/list/311/": {
    "ipa": "/oʊld taʊn əv sɛˈɡoʊviə ənd ɪts ˈækwəˌdʌkt/",
    "illustration": {
      "subject": "Aqueduct of Segovia 08.jpg",
      "credit": "Bernard Gagnon",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aqueduct_of_Segovia_08.jpg",
      "kind": "commons",
      "src": "assets/supplements/u311.webp"
    },
    "introduction": "塞哥维亚老城位于西班牙中部高地。古罗马渡槽用多层石拱跨过低地，将城外水源引到居民区。",
    "coords": [
      -4.11675,
      40.948472
    ]
  },
  "https://whc.unesco.org/en/list/313/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv ˈkɔrdəbə/",
    "illustration": {
      "subject": "Centro Histórico, 16.9 -- 2023 -- Córdoba, España.jpg",
      "credit": "Jose María Ligero Loarte",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Centro_Hist%C3%B3rico,_16.9_--_2023_--_C%C3%B3rdoba,_Espa%C3%B1a.jpg",
      "kind": "commons",
      "src": "assets/supplements/u313.webp"
    },
    "introduction": "科尔多瓦老城沿瓜达尔基维尔河展开。大清真寺改建而成的主教座堂保存了成排的双色拱券，周边街巷见证了城市的多层历史。",
    "coords": [
      -4.779722,
      37.879194
    ]
  },
  "https://whc.unesco.org/en/list/314/": {
    "ipa": "/ælˈhæmbrə ˌhɛnərəˈlifeɪ ənd ˌælbaɪˈzin ɡrəˈnɑdə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Alhambra detail.jpg",
      "credit": "Jebulon",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Alhambra_detail.jpg",
      "kind": "commons",
      "src": "assets/supplements/u314.webp"
    },
    "introduction": "格拉纳达的阿尔罕布拉宫坐落在山脊上，与赫内拉利费园林相邻。庭院中的水渠、水池和雕花灰泥是纳斯里王朝建筑的代表。",
    "coords": [
      -3.589917,
      37.176778
    ]
  },
  "https://www.geonames.org/338832/": {
    "ipa": "/ˈdirɛ ˈdɑwə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Dire dawa, edificio circolare.jpg",
      "credit": "Sailko",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dire_dawa,_edificio_circolare.jpg",
      "kind": "commons",
      "src": "assets/supplements/g338832.webp"
    },
    "introduction": "德雷达瓦位于埃塞俄比亚东部，坐落在高原向低地过渡的山麓。通向吉布提港的铁路促成了这座商贸城市的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Dire_Dawa",
    "coords": [
      41.86611,
      9.59306
    ]
  },
  "https://www.geonames.org/336014/": {
    "ipa": "/ˈɡɑndɚ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Gonder from the Goha hotel.jpg",
      "credit": "Giustino",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Gonder_from_the_Goha_hotel.jpg",
      "kind": "commons",
      "src": "assets/supplements/g336014.webp"
    },
    "introduction": "贡德尔曾是埃塞俄比亚帝国的都城。王宫区保存着带圆形塔楼的城堡群，与周围高地的教堂相呼应。",
    "introductionSource": "https://en.wikipedia.org/wiki/Gondar",
    "coords": [
      37.46667,
      12.6
    ]
  },
  "https://whc.unesco.org/en/list/9/": {
    "ipa": "/ˈsɪmiən ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Simienské hory.jpg",
      "credit": "I, Ondřej Žváček",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Simiensk%C3%A9_hory.jpg",
      "kind": "commons",
      "src": "assets/supplements/u9.webp"
    },
    "introduction": "塞米恩山地位于埃塞俄比亚北部。高原边缘经长期侵蚀形成陡崖与深谷，埃塞俄比亚野山羊等动物生活在高海拔环境中。",
    "coords": [
      38.066667,
      13.183333
    ]
  },
  "https://www.geonames.org/634963/": {
    "ipa": "/ˈtæmpərə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Tammerkoski in Tampere, Finland, 2024 July.jpg",
      "credit": "Pete",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tammerkoski_in_Tampere,_Finland,_2024_July.jpg",
      "kind": "commons",
      "src": "assets/supplements/g634963.webp"
    },
    "introduction": "坦佩雷坐落在芬兰两座湖泊之间。湖面高差形成的急流曾为工厂供能，沿岸保留着红砖工业建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tampere_urban_area",
    "coords": [
      23.78712,
      61.49911
    ]
  },
  "https://www.geonames.org/633679/": {
    "ipa": "/ˈtʊrku/",
    "illustration": {
      "subject": "View from Turku Cathedral tower.jpg",
      "credit": "Markus Koljonen ( Dilaudid ) with thanks to Jontts and Turku Cathedral",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:View_from_Turku_Cathedral_tower.jpg",
      "kind": "commons",
      "src": "assets/supplements/g633679.webp"
    },
    "introduction": "图尔库位于芬兰西南海岸，奥拉河穿过城区流向波罗的海。河口城堡和河畔大教堂见证了中世纪的港城历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Turku",
    "coords": [
      22.26869,
      60.45148
    ]
  },
  "https://whc.unesco.org/en/list/582/": {
    "ipa": "/oʊld ˈraʊmə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Rauma 3.jpg",
      "credit": "pjt56",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rauma_3.jpg",
      "kind": "commons",
      "src": "assets/supplements/u582.webp"
    },
    "introduction": "老劳马保存了芬兰传统木城的街道和院落。沿街木屋多作店面或住宅，狭长地块的后部曾设有作坊与储藏空间。",
    "coords": [
      21.51167,
      61.12806
    ]
  },
  "https://whc.unesco.org/en/list/1399/": {
    "ipa": "/lɛˈvukə hɪˈstɔrɪkəl pɔrt taʊn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "ChurchLevuka.jpg",
      "credit": "Anton Leddin",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:ChurchLevuka.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1399.webp"
    },
    "introduction": "莱武卡位于斐济奥瓦劳岛，曾是殖民时期的首府。城镇被陡坡与海岸夹成狭长的一带，沿海街道保留了早期港口建筑。",
    "coords": [
      178.834533,
      -17.683378
    ]
  },
  "https://www.geonames.org/2995469/": {
    "ipa": "/mɑrˈseɪ/",
    "illustration": {
      "subject": "View of Marseille from Notre-Dame de la Garde 4.jpg",
      "credit": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:View_of_Marseille_from_Notre-Dame_de_la_Garde_4.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2995469.webp"
    },
    "introduction": "马赛是法国地中海岸的港城，历史核心围绕老港展开。港口以南的石灰岩海岸被海水切成狭长的峡湾。",
    "introductionSource": "https://en.wikipedia.org/wiki/Marseille",
    "coords": [
      5.38107,
      43.29695
    ]
  },
  "https://www.geonames.org/2996944/": {
    "ipa": "/liˈoʊn/",
    "illustration": {
      "subject": "01. Panorama de Lyon pris depuis le toit de la Basilique de Fourvière.jpg",
      "credit": "Otourly",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:01._Panorama_de_Lyon_pris_depuis_le_toit_de_la_Basilique_de_Fourvi%C3%A8re.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2996944.webp"
    },
    "introduction": "里昂建在罗讷河与索恩河交会处。老城与山坡街区中的穿楼通道，和当地长期的丝织业传统相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Lyon",
    "coords": [
      4.84789,
      45.74906
    ]
  },
  "https://www.geonames.org/2990440/": {
    "ipa": "/nis/",
    "illustration": {
      "subject": "Port Of Nice, Côte d'Azur.jpg",
      "credit": "Moody Dreiza ( Moody751 at English Wikipedia )",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Port_Of_Nice,_C%C3%B4te_d%27Azur.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2990440.webp"
    },
    "introduction": "尼斯坐落在法国蔚蓝海岸的天使湾。狭窄的老城街巷与沿卵石海滩延伸的英国人漫步大道相邻。",
    "introductionSource": "https://en.wikipedia.org/wiki/Nice",
    "coords": [
      7.26608,
      43.70313
    ]
  },
  "https://www.geonames.org/3031582/": {
    "ipa": "/bɔrˈdoʊ/",
    "illustration": {
      "subject": "138 - Place de la Bourse et le miroir d'eau - Bordeaux.jpg",
      "credit": "Patrick Despoix",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:138_-_Place_de_la_Bourse_et_le_miroir_d%27eau_-_Bordeaux.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3031582.webp"
    },
    "introduction": "波尔多沿加龙河的一处弯道发展。河运把周边葡萄园与大西洋市场连接起来，临河街区保留着成片石砌建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bordeaux",
    "coords": [
      -0.58046,
      44.84124
    ]
  },
  "https://whc.unesco.org/en/list/80/": {
    "ipa": "/ˌmɔn sæn miˈʃɛl ənd ɪts beɪ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Mont Saint-Michel, Frankreich15.jpg",
      "credit": "Nikater",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Mont_Saint-Michel,_Frankreich15.jpg",
      "kind": "commons",
      "src": "assets/supplements/u80.webp"
    },
    "introduction": "圣米歇尔山是法国诺曼底潮汐海湾中的岩石小岛。修道院层叠在山顶，巨大的潮差周期性改变岛周围的水面和沙滩。",
    "coords": [
      -1.508349,
      48.610405
    ]
  },
  "https://whc.unesco.org/en/list/83/": {
    "ipa": "/ˈpæləs ənd pɑrk əv vɛrˈsaɪ/",
    "illustration": {
      "subject": "Vue aérienne du domaine de Versailles par ToucanWings - Creative Commons By Sa 3.0 - 083.jpg",
      "credit": "ToucanWings",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_083.jpg",
      "kind": "commons",
      "src": "assets/supplements/u83.webp"
    },
    "introduction": "凡尔赛宫位于巴黎西南。路易十四时期的宫殿、镜厅和几何式园林共同围绕轴线布置，影响了欧洲多座王室宫苑的设计。",
    "coords": [
      2.119444,
      48.805
    ]
  },
  "https://whc.unesco.org/en/list/1653/": {
    "ipa": "/ɪˈvɪndoʊ ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Waterfall ivindo gabon.jpg",
      "credit": "Jefe Le Gran",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Waterfall_ivindo_gabon.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1653.webp"
    },
    "introduction": "伊温多国家公园位于加蓬的热带森林中。河流和瀑布穿过林地，开阔湿地又吸引森林象等动物来到河岸活动。",
    "coords": [
      12.648,
      0.113
    ]
  },
  "https://www.geonames.org/2643123/": {
    "ipa": "/ˈmæntʃɛstɚ/",
    "illustration": {
      "subject": "Manchester from the Sky, 2008.jpg",
      "credit": "Daniel Nisbet from Manchester, United Kingdom",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Manchester_from_the_Sky,_2008.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2643123.webp"
    },
    "introduction": "曼彻斯特位于英格兰西北部。棉纺厂、运河和铁路让它成为工业革命时期的制造中心，旧仓库至今仍可见。",
    "introductionSource": "https://en.wikipedia.org/wiki/Manchester",
    "coords": [
      -2.23743,
      53.48095
    ]
  },
  "https://www.geonames.org/2655603/": {
    "ipa": "/ˈbɝmɪŋəm/",
    "illustration": {
      "subject": "Birmingham-Skyline-from-Edgbaston-crop.jpg",
      "credit": "JimmyGuano",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Birmingham-Skyline-from-Edgbaston-crop.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2655603.webp"
    },
    "introduction": "英格兰中部的伯明翰长期以金属加工闻名。密集的运河曾把燃料和原料送进工厂，珠宝区保留着传统作坊。",
    "introductionSource": "https://en.wikipedia.org/wiki/Birmingham",
    "coords": [
      -1.89983,
      52.48142
    ]
  },
  "https://www.geonames.org/2644210/": {
    "ipa": "/ˈlɪvɚˌpul/",
    "illustration": {
      "subject": "Pier Head, Liverpool - geograph.org.uk - 3059094.jpg",
      "credit": "Pier Head, Liverpool by Peter Tarleton",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pier_Head,_Liverpool_-_geograph.org.uk_-_3059094.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2644210.webp"
    },
    "introduction": "利物浦坐落在默西河口东岸。老船坞和仓库记录了这座大西洋港城的历史，披头士乐队也从这里起步。",
    "introductionSource": "https://en.wikipedia.org/wiki/Liverpool",
    "coords": [
      -2.97794,
      53.41058
    ]
  },
  "https://www.geonames.org/2648579/": {
    "ipa": "/ˈɡlæsɡoʊ/",
    "illustration": {
      "subject": "Glasgow - aerial - 2025-04-17 12.jpg",
      "credit": "瑞丽江的河水",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Glasgow_-_aerial_-_2025-04-17_12.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2648579.webp"
    },
    "introduction": "格拉斯哥沿苏格兰的克莱德河发展。造船厂曾在河岸连成一片，河畔的工业遗存记录了这段历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Glasgow",
    "coords": [
      -4.25763,
      55.86515
    ]
  },
  "https://whc.unesco.org/en/list/369/": {
    "ipa": "/dʒaɪənts ˈkɑzˌweɪ ənd ˈkɑzˌweɪ koʊst/",
    "illustration": {
      "subject": "Giant's Causeway (36834542085).jpg",
      "credit": "Lindy Buckley from Nanjing, China",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Giant%27s_Causeway_(36834542085).jpg",
      "kind": "commons",
      "src": "assets/supplements/u369.webp"
    },
    "introduction": "北爱尔兰的巨人之路由大量多边形玄武岩柱组成。古代熔岩冷却收缩时产生裂隙，海浪又使岸边的石柱逐渐显露。",
    "coords": [
      -6.511667,
      55.240833
    ]
  },
  "https://www.geonames.org/615532/": {
    "ipa": "/bɑˈtumi/",
    "illustration": {
      "subject": "1071 - Kaukasus 2014 - Georgien - Batumi (16728246174).jpg",
      "credit": "Uwe Brodrecht",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:1071_-_Kaukasus_2014_-_Georgien_-_Batumi_(16728246174).jpg",
      "kind": "commons",
      "src": "assets/supplements/g615532.webp"
    },
    "introduction": "巴统是格鲁吉亚西南部的黑海港口。沿海的湿润气候让棕榈和茶树都能在这一带生长。",
    "introductionSource": "https://en.wikipedia.org/wiki/Batumi",
    "coords": [
      41.6306,
      41.64077
    ]
  },
  "https://www.geonames.org/613607/": {
    "ipa": "/kuˈtaɪsi/",
    "illustration": {
      "subject": "Downtown Kutaisi & White Bridge as seen from Mt Gora (August 2011)-cropped.jpg",
      "credit": "Kober",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Kutaisi_%26_White_Bridge_as_seen_from_Mt_Gora_(August_2011)-cropped.jpg",
      "kind": "commons",
      "src": "assets/supplements/g613607.webp"
    },
    "introduction": "库塔伊西坐落在格鲁吉亚西部的里奥尼河畔。它曾是当地王国的都城，附近的格拉特修道院保存着壁画和马赛克。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kutaisi",
    "coords": [
      42.69459,
      42.26791
    ]
  },
  "https://whc.unesco.org/en/list/709/": {
    "ipa": "/ˈʌpɚ svɑˈnɛti/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Mestia. regio Svaneti.jpg",
      "credit": "Martijn Munneke from Netherlands",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mestia._regio_Svaneti.jpg",
      "kind": "commons",
      "src": "assets/supplements/u709.webp"
    },
    "introduction": "上斯瓦涅季坐落在格鲁吉亚高加索山脉的高山峡谷中。传统村落将石塔与住宅并置，塔楼曾用于防御和避难。",
    "coords": [
      43.009,
      42.914
    ]
  },
  "https://www.geonames.org/2298890/": {
    "ipa": "/kuˈmɑsi/",
    "illustration": {
      "subject": "Kumasi.jpg",
      "credit": "Dave Ley",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Kumasi.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2298890.webp"
    },
    "introduction": "库马西位于加纳内陆林区，是阿散蒂王国的历史中心。王宫与市场保留了宫廷工艺和地区贸易的痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kumasi",
    "coords": [
      -1.62443,
      6.68848
    ]
  },
  "https://whc.unesco.org/en/list/35/": {
    "ipa": "/əˈsɑnteɪ trəˈdɪʃənəl ˈbɪldɪŋz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kentikrono Shrine (2).jpg",
      "credit": "Noahalorwu",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kentikrono_Shrine_(2).jpg",
      "kind": "commons",
      "src": "assets/supplements/u35.webp"
    },
    "introduction": "加纳库马西附近保存的阿散蒂传统建筑以土、木和植物材料组成。庭院周围的建筑外墙饰有浮雕纹样，多与宗教仪式有关。",
    "coords": [
      -1.625833,
      6.401111
    ]
  },
  "https://www.geonames.org/2310046/": {
    "ipa": "/ˈbɑtə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Bata, 2015-02 -i---i- (16325440088).jpg",
      "credit": "Ben Sutherland from Crystal Palace, London, UK",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bata,_2015-02_-i---i-_(16325440088).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2310046.webp"
    },
    "introduction": "巴塔坐落在赤道几内亚大陆部分的几内亚湾岸。它与位于比奥科岛上的马拉博隔海相望。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bata%2C_Equatorial_Guinea",
    "coords": [
      9.76582,
      1.86391
    ]
  },
  "https://www.geonames.org/734077/": {
    "ipa": "/ˌθɛsələˈniki/",
    "illustration": {
      "subject": "Tessaloniki BW 2017-10-05 18-22-47.jpg",
      "credit": "Berthold Werner",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tessaloniki_BW_2017-10-05_18-22-47.jpg",
      "kind": "commons",
      "src": "assets/supplements/g734077.webp"
    },
    "introduction": "塞萨洛尼基位于希腊北部的塞尔迈湾畔。滨海的白塔和散布城中的拜占庭教堂记录了这座港城的不同历史时期。",
    "introductionSource": "https://en.wikipedia.org/wiki/Thessaloniki",
    "coords": [
      22.93493,
      40.64072
    ]
  },
  "https://www.geonames.org/255683/": {
    "ipa": "/pəˈtræs/",
    "illustration": {
      "subject": "Patras Montage L.png",
      "credit": "SilentResident (compilation, sources to attribute see above; if any of the sources used in the Montage are removed from Wikimedia Commons, or better ones are found, please inform its creator so that they can update it. You can contact the creator by leaving a message here: [1] )",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Patras_Montage_L.png",
      "kind": "commons",
      "src": "assets/supplements/g255683.webp"
    },
    "introduction": "帕特雷位于伯罗奔尼撒半岛西北岸。港口面向通往爱奥尼亚海的水道，设有跨亚得里亚海的渡轮航线。",
    "introductionSource": "https://en.wikipedia.org/wiki/Patras",
    "coords": [
      21.73508,
      38.2462
    ]
  },
  "https://whc.unesco.org/en/list/393/": {
    "ipa": "/ˌɑrkiəˈlɑdʒɪkəl saɪt əv ˈdɛlfaɪ/",
    "illustration": {
      "subject": "Delphi-Archaeological Site.jpg",
      "credit": "F. Harbin",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Delphi-Archaeological_Site.jpg",
      "kind": "commons",
      "src": "assets/supplements/u393.webp"
    },
    "introduction": "德尔斐圣地位于帕尔纳索斯山的山坡上。古希腊人远道前来向阿波罗神谕求问，圣道沿着山势通往神庙。",
    "coords": [
      22.49617,
      38.48149
    ]
  },
  "https://whc.unesco.org/en/list/1149/": {
    "ipa": "/ɪˌluliˈsæt ˈaɪsfjɔrd/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ilulissat Icefjord.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ilulissat_Icefjord.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1149.webp"
    },
    "introduction": "伊卢利萨特冰峡湾位于格陵兰西岸。冰川将大块冰山排入狭长峡湾，冰山随后漂向迪斯科湾。",
    "coords": [
      -49.5,
      69.133333
    ]
  },
  "https://www.geonames.org/3590979/": {
    "ipa": "/ˌkɛtsæltəˈnæŋɡoʊ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Palacio Municipal de Quetzaltenango.jpg",
      "credit": "PabloRosado",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Palacio_Municipal_de_Quetzaltenango.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3590979.webp"
    },
    "introduction": "克萨尔特南戈坐落在危地马拉西部高地的山间盆地。周围聚集着基切玛雅社区，城市也常被称为 Xela。",
    "introductionSource": "https://en.wikipedia.org/wiki/Quetzaltenango",
    "coords": [
      -91.52316,
      14.84462
    ]
  },
  "https://whc.unesco.org/en/list/65/": {
    "ipa": "/ænˈtiɡwə ˌɡwɑtəˈmɑlə/",
    "illustration": {
      "subject": "Antigua - Arco.jpg",
      "credit": "Juan Francisco",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Antigua_-_Arco.jpg",
      "kind": "commons",
      "src": "assets/supplements/u65.webp"
    },
    "introduction": "安提瓜危地马拉曾是中美洲的殖民行政中心。反复发生的地震留下了教堂和修道院废墟，城市仍保存规整的街道网格。",
    "coords": [
      -90.741952,
      14.540506
    ]
  },
  "https://whc.unesco.org/en/list/577/": {
    "ipa": "/hɝd ənd məkˈdɑnəld ˈaɪləndz/",
    "illustration": {
      "subject": "Heard Island (cropped).jpg",
      "credit": "Tristannew (original) Derivative: SHB2000 (cropped)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Heard_Island_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/u577.webp"
    },
    "introduction": "赫德岛和麦克唐纳群岛位于南印度洋。火山活动仍在改变岛屿地形，赫德岛上可见冰川与活火山并存的景象。",
    "coords": [
      73.5,
      -53.1
    ]
  },
  "https://www.discoverhongkong.com/eng/place-to-go/travel.guide-the-peak.html": {
    "ipa": "/vɪkˈtɔriə pik/",
    "illustration": {
      "subject": "High West and Victoria Peak from Victoria Gap (crop1).jpg",
      "credit": "Daniel Case",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:High_West_and_Victoria_Peak_from_Victoria_Gap_(crop1).jpg",
      "kind": "commons",
      "src": "assets/supplements/hkg.webp"
    },
    "introduction": "太平山顶位于香港岛西部，从山脊可俯瞰维多利亚港和九龙半岛。山顶缆车沿北坡攀升，把中环一带与高处连接起来。",
    "coords": [
      114.143889,
      22.275556
    ],
    "coordSource": "https://en.wikipedia.org/wiki/Victoria_Peak"
  },
  "https://www.geonames.org/3601782/": {
    "ipa": "/sæn ˈpeɪdroʊ ˈsulə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Panoramica general sps 05.jpg",
      "credit": "Gervaldez",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Panoramica_general_sps_05.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3601782.webp"
    },
    "introduction": "圣佩德罗苏拉位于洪都拉斯西北部的苏拉谷地。公路把工厂和农产品产地接到加勒比海岸的科尔特斯港。",
    "introductionSource": "https://en.wikipedia.org/wiki/San_Pedro_Sula",
    "coords": [
      -88.02588,
      15.50585
    ]
  },
  "https://whc.unesco.org/en/list/196/": {
    "ipa": "/ˈrioʊ ˈplɑtənoʊ ˈbaɪoʊsfɪr rɪˈzɝv/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Rio platano.jpg",
      "credit": "Hjvannes",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Rio_platano.jpg",
      "kind": "commons",
      "src": "assets/supplements/u196.webp"
    },
    "introduction": "雷奥普拉塔诺保护区沿洪都拉斯普拉塔诺河分布。从山地雨林到加勒比海岸的湿地，河流串联了多种生态环境和沿岸聚落。",
    "coords": [
      -84.675,
      15.744444
    ]
  },
  "https://www.geonames.org/3190261/": {
    "ipa": "/splɪt/",
    "illustration": {
      "subject": "Split 080620-133710-IMG 0968x.jpg",
      "credit": "Tatyana Peshkova",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Split_080620-133710-IMG_0968x.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3190261.webp"
    },
    "introduction": "斯普利特坐落在克罗地亚的达尔马提亚海岸。古罗马皇帝戴克里先的宫墙被后来的住宅、商铺和教堂纳入老城。",
    "introductionSource": "https://en.wikipedia.org/wiki/Split%2C_Croatia",
    "coords": [
      16.43915,
      43.50891
    ]
  },
  "https://www.geonames.org/3201047/": {
    "ipa": "/duˈbrɔvnɪk/",
    "illustration": {
      "subject": "The walls of the fortress and View of the old city. panorama.jpg",
      "credit": "Zysko serhii",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3201047.webp"
    },
    "introduction": "杜布罗夫尼克的城墙沿亚得里亚海岸围起老城。这里曾是拉古萨海上共和国的中心，港湾紧贴着城门。",
    "introductionSource": "https://en.wikipedia.org/wiki/Dubrovnik",
    "coords": [
      18.10909,
      42.64125
    ]
  },
  "https://whc.unesco.org/en/list/98/": {
    "ipa": "/ˈplɪtvɪtsə leɪks ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Plitvice Lakes National Park (2).jpg",
      "credit": "Pablo BM from London, England",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Plitvice_Lakes_National_Park_(2).jpg",
      "kind": "commons",
      "src": "assets/supplements/u98.webp"
    },
    "introduction": "普利特维采湖群位于克罗地亚喀斯特山区。水中的碳酸钙不断沉积，长成天然堤坝，令不同高度的湖泊以瀑布相连。",
    "coords": [
      15.61444,
      44.87778
    ]
  },
  "https://www.geonames.org/3728474/": {
    "ipa": "/kæp ˈheɪʃən/",
    "illustration": {
      "subject": "Cap-Haitien seen from Morne Jean.jpg",
      "credit": "Rémi Kaupp",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Cap-Haitien_seen_from_Morne_Jean.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3728474.webp"
    },
    "introduction": "海地角是海地北岸的港城。它曾是法属圣多明各的重要城市，向南进入山地可到拉费里埃城堡。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cap-Ha%C3%AFtien",
    "coords": [
      -72.19815,
      19.75938
    ]
  },
  "https://www.geonames.org/721472/": {
    "ipa": "/ˈdɛbrətsən/",
    "illustration": {
      "subject": "Facade of Great Protestant Church of Debrecen.jpg",
      "credit": "Nicu Farcaș",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Facade_of_Great_Protestant_Church_of_Debrecen.jpg",
      "kind": "commons",
      "src": "assets/supplements/g721472.webp"
    },
    "introduction": "德布勒森位于匈牙利大平原东部。改革宗大教堂俯瞰市中心，城市与匈牙利的新教教育传统关系密切。",
    "introductionSource": "https://en.wikipedia.org/wiki/Debrecen",
    "coords": [
      21.62444,
      47.53167
    ]
  },
  "https://www.geonames.org/715429/": {
    "ipa": "/ˈsɛɡɛd/",
    "illustration": {
      "subject": "Szegedi Dóm 5.JPG",
      "credit": "V.Mariann",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Szegedi_D%C3%B3m_5.JPG",
      "kind": "commons",
      "src": "assets/supplements/g715429.webp"
    },
    "introduction": "塞格德坐落在匈牙利南部的蒂萨河畔。十九世纪大洪水后重建的城区，以环路和放射状道路为特征。",
    "introductionSource": "https://en.wikipedia.org/wiki/Szeged",
    "coords": [
      20.14824,
      46.253
    ]
  },
  "https://whc.unesco.org/en/list/474/": {
    "ipa": "/ˈhɔrtoʊbɑdʒ ˈnæʃənəl pɑrk ðə ˈpʊstə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Hortobagy-ziehbrunnen.jpg",
      "credit": "self2",
      "license": "CC BY 2.0 at",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/at/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Hortobagy-ziehbrunnen.jpg",
      "kind": "commons",
      "src": "assets/supplements/u474.webp"
    },
    "introduction": "霍尔托巴吉是匈牙利大平原的一部分。开阔的草地和沼泽长期用于放牧，水井、牧棚与牲畜迁移路线记录了牧民的生活。",
    "coords": [
      21.15678,
      47.59458
    ]
  },
  "https://www.geonames.org/1625822/": {
    "ipa": "/ˌsʊrəˈbɑjə/",
    "illustration": {
      "subject": "Surabaya skyline.jpg",
      "credit": "Davidelit",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Surabaya_skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1625822.webp"
    },
    "introduction": "泗水位于爪哇岛东北岸，隔狭窄海峡与马都拉岛相望。深水港将东爪哇腹地与印度尼西亚其他岛屿连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Surabaya",
    "coords": [
      112.75083,
      -7.24917
    ]
  },
  "https://www.geonames.org/1650357/": {
    "ipa": "/ˈbɑndʊŋ/",
    "illustration": {
      "subject": "Bandung View dari Gedung Wisma HSBC Asia Afrika 4.jpg",
      "credit": "F1fans",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Bandung_View_dari_Gedung_Wisma_HSBC_Asia_Afrika_4.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1650357.webp"
    },
    "introduction": "万隆坐落在西爪哇火山环绕的高原盆地，比沿海城市凉爽。1955 年的亚非会议在这里举行。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bandung",
    "coords": [
      107.60694,
      -6.92222
    ]
  },
  "https://www.geonames.org/1621177/": {
    "ipa": "/ˌjoʊɡjəˈkɑrtə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Yogyakarta Indonesia Tugu-Yogyakarta-02.jpg",
      "credit": "Photo by CEphoto, Uwe Aranas or alternatively © CEphoto, Uwe Aranas",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1621177.webp"
    },
    "introduction": "日惹的老城围绕苏丹王宫布局。蜡染、皮影戏和甘美兰音乐至今仍是当地爪哇文化的重要组成部分。",
    "introductionSource": "https://en.wikipedia.org/wiki/Yogyakarta",
    "coords": [
      110.36472,
      -7.80139
    ]
  },
  "https://whc.unesco.org/en/list/609/": {
    "ipa": "/kəˈmoʊdoʊ ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Komodo dragon at Komodo National Park.jpg",
      "credit": "Adhi Rachdian from Indonesia",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Komodo_dragon_at_Komodo_National_Park.jpg",
      "kind": "commons",
      "src": "assets/supplements/u609.webp"
    },
    "introduction": "科莫多国家公园包括印度尼西亚多座干旱岛屿及其周围海域。岛上稀树草原是科莫多巨蜥的栖息地，近海则分布着珊瑚礁。",
    "coords": [
      119.48944,
      -8.54333
    ]
  },
  "https://www.geonames.org/1275339/": {
    "ipa": "/mʊmˈbaɪ/",
    "illustration": {
      "subject": "Panoramic view of Taj Palace Hotel and Taj Tower with the iconic Gateway of India in the background (cropped).jpg",
      "credit": "iMahesh",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Taj_Palace_Hotel_and_Taj_Tower_with_the_iconic_Gateway_of_India_in_the_background_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1275339.webp"
    },
    "introduction": "孟买位于印度西海岸。城区由多个岛屿经填海逐渐连成，天然港湾推动了海运、棉纺和金融业的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mumbai",
    "coords": [
      72.88261,
      19.07283
    ]
  },
  "https://www.geonames.org/1275004/": {
    "ipa": "/koʊlˈkɑtə/",
    "illustration": {
      "subject": "Hooghly River and the Howrah Bridge, Kolkata, India.jpg",
      "credit": "© Vyacheslav Argenberg",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Hooghly_River_and_the_Howrah_Bridge,_Kolkata,_India.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1275004.webp"
    },
    "introduction": "加尔各答位于恒河三角洲的胡格利河东岸。豪拉大桥把市区与西岸铁路枢纽连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kolkata",
    "coords": [
      88.36304,
      22.56263
    ]
  },
  "https://www.geonames.org/1277333/": {
    "ipa": "/ˌbɛŋɡəˈlʊru/",
    "illustration": {
      "subject": "UB City, Bangalore.JPG",
      "credit": "Prateek Karandikar",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:UB_City,_Bangalore.JPG",
      "kind": "commons",
      "src": "assets/supplements/g1277333.webp"
    },
    "introduction": "班加罗尔坐落在印度南部的德干高原上。科研机构、航空工业与软件企业相继在这里集聚。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bengaluru",
    "coords": [
      77.59369,
      12.97194
    ]
  },
  "https://www.geonames.org/1264527/": {
    "ipa": "/ˈtʃɛnaɪ/",
    "illustration": {
      "subject": "Ripon Building aerial view.jpg",
      "credit": "Saiphani02",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ripon_Building_aerial_view.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1264527.webp"
    },
    "introduction": "金奈坐落在印度东南部的科罗曼德海岸。滨海沙滩沿孟加拉湾延伸，这座港城也是泰米尔语文化的重要中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chennai",
    "coords": [
      80.27847,
      13.08784
    ]
  },
  "https://www.geonames.org/1269843/": {
    "ipa": "/ˈhaɪdɚəbɑd/",
    "illustration": {
      "subject": "Aerial view of Durgam cheruvu and Hitech CIty.jpg",
      "credit": "iMahesh",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Durgam_cheruvu_and_Hitech_CIty.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1269843.webp"
    },
    "introduction": "海德拉巴沿穆西河发展，位于印度南部内陆。老城的查米纳四塔门和附近的戈尔康达城堡见证了德干地区的王朝历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Hyderabad",
    "coords": [
      78.45636,
      17.38405
    ]
  },
  "https://whc.unesco.org/en/list/231/": {
    "ipa": "/rɛd fɔrt ˈkɑmplɛks/",
    "illustration": {
      "subject": "Delhi fort.jpg",
      "credit": "PerSona77",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Delhi_fort.jpg",
      "kind": "commons",
      "src": "assets/supplements/u231.webp"
    },
    "introduction": "德里红堡曾是莫卧儿皇帝沙贾汗新都的宫城。高大的红砂岩围墙内有一系列亭阁，水渠贯穿皇室起居空间。",
    "coords": [
      77.240833,
      28.655556
    ]
  },
  "https://whc.unesco.org/en/list/233/": {
    "ipa": "/kʊtəb mɪˈnɑr ənd ɪts ˈmɑnjəmənts ˈdɛli/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Qutub Minar or Qutb Minar or Qutab Minar 3.jpg",
      "credit": "Virusism",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Qutub_Minar_or_Qutb_Minar_or_Qutab_Minar_3.jpg",
      "kind": "commons",
      "src": "assets/supplements/u233.webp"
    },
    "introduction": "德里顾特卜建筑群以逐层收窄的高塔最为醒目。塔身刻有铭文和装饰纹样，周边还保留了早期清真寺遗址与铁柱。",
    "coords": [
      77.18528,
      28.52583
    ]
  },
  "https://whc.unesco.org/en/list/243/": {
    "ipa": "/ɛˈlɔrə keɪvz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ellora Caves, India, Kailasanatha Temple 2.jpg",
      "credit": "© Vyacheslav Argenberg",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ellora_Caves,_India,_Kailasanatha_Temple_2.jpg",
      "kind": "commons",
      "src": "assets/supplements/u243.webp"
    },
    "introduction": "埃洛拉石窟在德干高原的岩壁中开凿，包含佛教、印度教和耆那教建筑。凯拉萨神庙从整块岩体自上而下凿成。",
    "coords": [
      75.17917,
      20.02639
    ]
  },
  "https://whc.unesco.org/en/list/242/": {
    "ipa": "/əˈdʒʌntə keɪvz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ajanta (63).jpg",
      "credit": "No machine-readable author provided. Soman assumed (based on copyright claims).",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Ajanta_(63).jpg",
      "kind": "commons",
      "src": "assets/supplements/u242.webp"
    },
    "introduction": "阿旃陀石窟开凿在印度一处马蹄形河谷的崖壁中。礼拜堂、僧房和描绘佛教故事的壁画保存了古代石窟寺的面貌。",
    "coords": [
      75.70025,
      20.553111
    ]
  },
  "https://www.geonames.org/2965140/": {
    "ipa": "/kɔrk/",
    "illustration": {
      "subject": "Centre, Cork, Ireland - panoramio (5).jpg",
      "credit": "K.ristof",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Centre,_Cork,_Ireland_-_panoramio_(5).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2965140.webp"
    },
    "introduction": "科克位于爱尔兰南部，市中心坐落在利河两条河汊之间。河水向东流入岸线曲折的科克港湾。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cork_(city)",
    "coords": [
      -8.47061,
      51.89797
    ]
  },
  "https://www.geonames.org/2964180/": {
    "ipa": "/ˈɡɔlweɪ/",
    "illustration": {
      "subject": "Galway cathedral.jpg",
      "credit": "Unknown author Unknown author",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Galway_cathedral.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2964180.webp"
    },
    "introduction": "戈尔韦位于爱尔兰西岸，科里布河在这里汇入戈尔韦湾。港区和旧城紧靠河口，是进入康尼马拉地区的门户。",
    "introductionSource": "https://en.wikipedia.org/wiki/Galway",
    "coords": [
      -9.05095,
      53.27245
    ]
  },
  "https://whc.unesco.org/en/list/659/": {
    "ipa": "/bru nə ˈboʊnjə ˌɑrkiəˈlɑdʒɪkəl ɑnˈsɑmbəl əv ðə bɛnd əv ðə bɔɪn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Bru na Boinne - Newgrange.jpg",
      "credit": "Barbara y Eugenio - https://www.flickr.com/photos/12482011@N00",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bru_na_Boinne_-_Newgrange.jpg",
      "kind": "commons",
      "src": "assets/supplements/u659.webp"
    },
    "introduction": "爱尔兰博恩河河曲内分布着纽格莱奇等史前墓冢。石砌通道通向内部墓室，纽格莱奇的开口能让冬至前后的晨光照入。",
    "coords": [
      -6.4755,
      53.694694
    ]
  },
  "https://www.geonames.org/124665/": {
    "ipa": "/məˈʃæd/",
    "illustration": {
      "subject": "Aerial view of imam reza shrine - 1976.jpg",
      "credit": "photo.aqr.ir (unknown photographer)",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_imam_reza_shrine_-_1976.jpg",
      "kind": "commons",
      "src": "assets/supplements/g124665.webp"
    },
    "introduction": "马什哈德位于伊朗东北部，老城围绕伊玛目礼萨圣陵发展。各地朝圣者的到来塑造了当地的街市与交通。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mashhad",
    "coords": [
      59.60567,
      36.29807
    ]
  },
  "https://www.geonames.org/418863/": {
    "ipa": "/ˌɪsfəˈhɑn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Naghshe jahan 01.jpg",
      "credit": "Pedram forouzanfar",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Naghshe_jahan_01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g418863.webp"
    },
    "introduction": "伊斯法罕位于伊朗高原，历史城区以广场、清真寺和集市相连。扎因代河上的历史桥梁也是城市的重要地标。",
    "introductionSource": "https://en.wikipedia.org/wiki/Isfahan",
    "coords": [
      51.67462,
      32.65246
    ]
  },
  "https://www.geonames.org/115019/": {
    "ipa": "/ʃɪˈrɑz/",
    "illustration": {
      "subject": "Darvaze Ghoran11.jpg",
      "credit": "آرش (Arche)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Darvaze_Ghoran11.jpg",
      "kind": "commons",
      "src": "assets/supplements/g115019.webp"
    },
    "introduction": "西菈子位于伊朗南部的山间盆地。哈菲兹和萨迪的陵园坐落在这里，使城市与波斯诗歌传统紧密相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Shiraz",
    "coords": [
      52.53113,
      29.61031
    ]
  },
  "https://whc.unesco.org/en/list/115/": {
    "ipa": "/meɪˈdɑn ɪˈmɑm ˌɛsfəˈhɑn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Naghshe Jahan Square Isfahan modified2.jpg",
      "credit": "Arad Mojtahedi",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Naghshe_Jahan_Square_Isfahan_modified2.jpg",
      "kind": "commons",
      "src": "assets/supplements/u115.webp"
    },
    "introduction": "伊斯法罕的王侯广场是萨法维王朝营建的大型公共空间。王宫、清真寺和巴扎入口分别位于广场边缘，以连续的拱廊相接。",
    "coords": [
      51.677778,
      32.65745
    ]
  },
  "https://www.geonames.org/99072/": {
    "ipa": "/ˈmoʊsəl/",
    "illustration": {
      "subject": "مدينة الموصل.jpg",
      "credit": "Copyright © 2013 Younus Alhamdani",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D8%B5%D9%84.jpg",
      "kind": "commons",
      "src": "assets/supplements/g99072.webp"
    },
    "introduction": "摩苏尔横跨伊拉克北部的底格里斯河。古城尼尼微的遗址位于东岸，与西岸的历史城区相望。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mosul",
    "coords": [
      43.11889,
      36.335
    ]
  },
  "https://www.geonames.org/99532/": {
    "ipa": "/ˈbɑsrɑ/",
    "illustration": {
      "subject": "Basra-Shatt-Al-Arab.jpg",
      "credit": "Aziz1005",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Basra-Shatt-Al-Arab.jpg",
      "kind": "commons",
      "src": "assets/supplements/g99532.webp"
    },
    "introduction": "巴士拉坐落在伊拉克南部的阿拉伯河畔。向下游可达波斯湾，河运和沿岸的枣椰种植长期支撑当地经济。",
    "introductionSource": "https://en.wikipedia.org/wiki/Basra",
    "coords": [
      47.7804,
      30.50852
    ]
  },
  "https://www.geonames.org/95446/": {
    "ipa": "/ɚˈbil/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Citadel (old city) of Hewlêr (Erbil).jpg",
      "credit": "Jim Gordon",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Citadel_(old_city)_of_Hewl%C3%AAr_(Erbil).jpg",
      "kind": "commons",
      "src": "assets/supplements/g95446.webp"
    },
    "introduction": "埃尔比勒的老城堡建在高出平原的土丘上。这座丘是长期居住、反复营建逐层堆积形成的。",
    "introductionSource": "https://en.wikipedia.org/wiki/Erbil",
    "coords": [
      44.00943,
      36.19117
    ]
  },
  "https://whc.unesco.org/en/list/278/": {
    "ipa": "/ˈbæbɪlɑn/",
    "illustration": {
      "subject": "Ruins of the North Palace of king Nebuchadnezzar II at Babylon, Iraq.jpg",
      "credit": "Osama Shukir Muhammed Amin FRCP(Glasg)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ruins_of_the_North_Palace_of_king_Nebuchadnezzar_II_at_Babylon,_Iraq.jpg",
      "kind": "commons",
      "src": "assets/supplements/u278.webp"
    },
    "introduction": "巴比伦遗址位于伊拉克幼发拉底河附近。城墙、宫殿和巡游大道留下了这座古代都城的布局，也记录了两河流域的城市传统。",
    "coords": [
      44.420833,
      32.541969
    ]
  },
  "https://whc.unesco.org/en/list/1152/": {
    "ipa": "/ˈθɪŋvɛtlɪr ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Thingvellir.jpg",
      "credit": "Andreas Tille",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Thingvellir.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1152.webp"
    },
    "introduction": "辛格维利尔坐落在冰岛的裂谷地带，是古代议会集会的场所。在这里可以同时观察板块张裂的地形与露天议会留下的遗迹。",
    "coords": [
      -21.03725,
      64.253806
    ]
  },
  "https://whc.unesco.org/en/list/1604/": {
    "ipa": "/ˈvɑtnəˌjɝkʊl ˈnæʃənəl pɑrk daɪˈnæmɪk ˈneɪtʃɚ əv faɪɚ ənd aɪs/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Skaftafellsjökull 2010.jpg",
      "credit": "Justraveling.com",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skaftafellsj%C3%B6kull_2010.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1604.webp"
    },
    "introduction": "瓦特纳冰盖覆盖冰岛东南部的多座火山。冰下喷发能融化大量冰雪，引发冰川洪水，并不断改造下游的砾石平原。",
    "coords": [
      -16.88154,
      64.577363
    ]
  },
  "https://www.geonames.org/294801/": {
    "ipa": "/ˈhaɪfə/",
    "illustration": {
      "subject": "Haifa Shrine and Port.jpg",
      "credit": "Michael Paul Gollmer de:Benutzer:Mipago",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Haifa_Shrine_and_Port.jpg",
      "kind": "commons",
      "src": "assets/supplements/g294801.webp"
    },
    "introduction": "海法从地中海岸沿迦密山坡向上延伸。山坡上的巴哈伊花园通过层层台地与下方港区形成鲜明对照。",
    "introductionSource": "https://en.wikipedia.org/wiki/Haifa",
    "coords": [
      34.99928,
      32.81303
    ]
  },
  "https://www.geonames.org/294098/": {
    "ipa": "/ˈnæzɚəθ/",
    "illustration": {
      "subject": "Habsora from selezian.jpg",
      "credit": "Almog",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Habsora_from_selezian.jpg",
      "kind": "commons",
      "src": "assets/supplements/g294098.webp"
    },
    "introduction": "拿撒勒位于加利利地区的山丘间。在基督宗教传统中，这里与耶稣的成长经历有关，老城有多处朝圣地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Nazareth",
    "coords": [
      35.29719,
      32.70087
    ]
  },
  "https://whc.unesco.org/en/list/1040/": {
    "ipa": "/məˈsɑdə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Israel-2013-Aerial 21-Masada.jpg",
      "credit": "Andrew Shiva / Wikipedia",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Israel-2013-Aerial_21-Masada.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1040.webp"
    },
    "introduction": "马萨达是死海西岸一座孤立的岩石台地。高处保存了希律时期的宫殿和蓄水池，山脚仍可辨认罗马军队的围城营地。",
    "coords": [
      35.353611,
      31.315556
    ]
  },
  "https://www.geonames.org/3173435/": {
    "ipa": "/mɪˈlæn/",
    "illustration": {
      "subject": "Milano, Duomo with Milan Cathedral and Galleria Vittorio Emanuele II, 2016.jpg",
      "credit": "© Steffen Schmitz ( Carschten ) / Wikimedia Commons / CC BY-SA 4.0",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Milano,_Duomo_with_Milan_Cathedral_and_Galleria_Vittorio_Emanuele_II,_2016.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3173435.webp"
    },
    "introduction": "米兰位于意大利北部的波河平原。大教堂广场是老城中心，历史运河曾为城区输送石材和货物。",
    "introductionSource": "https://en.wikipedia.org/wiki/Milan",
    "coords": [
      9.18951,
      45.46427
    ]
  },
  "https://www.geonames.org/3172394/": {
    "ipa": "/ˈneɪpəlz/",
    "illustration": {
      "subject": "Napoli - Maschio Angioino - 202209302342 3.jpg",
      "credit": "Richard Nevell",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Napoli_-_Maschio_Angioino_-_202209302342_3.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3172394.webp"
    },
    "introduction": "那不勒斯围绕意大利西南岸的海湾展开，隔湾可见维苏威火山。老城的部分街道沿用了古希腊聚落的布局。",
    "introductionSource": "https://en.wikipedia.org/wiki/Naples",
    "coords": [
      14.26811,
      40.85216
    ]
  },
  "https://www.geonames.org/3164603/": {
    "ipa": "/ˈvɛnɪs/",
    "illustration": {
      "subject": "Venezia aerial view.jpg",
      "credit": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Venezia_aerial_view.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3164603.webp"
    },
    "introduction": "威尼斯建在亚得里亚海北端的潟湖岛屿上。桥梁连接岛屿，运河承担交通，大运河两岸排列着昔日商人的宅邸。",
    "introductionSource": "https://en.wikipedia.org/wiki/Venice",
    "coords": [
      12.33265,
      45.43713
    ]
  },
  "https://www.geonames.org/3176959/": {
    "ipa": "/ˈflorəns/",
    "illustration": {
      "subject": "Firenze - Piazzale Michelangelo, Firenze, Italy - April 6, 2015 02.jpg",
      "credit": "Giorgio Galeotti",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Firenze_-_Piazzale_Michelangelo,_Firenze,_Italy_-_April_6,_2015_02.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3176959.webp"
    },
    "introduction": "佛罗伦萨位于阿尔诺河畔。纺织贸易和银行业积累的财富，曾资助当地文艺复兴时期的建筑、绘画与雕塑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Florence",
    "coords": [
      11.24626,
      43.77925
    ]
  },
  "https://whc.unesco.org/en/list/174/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv ˈflorəns/",
    "illustration": {
      "subject": "Piazza Signoria - Firenze.jpg",
      "credit": "Zolli",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Piazza_Signoria_-_Firenze.jpg",
      "kind": "commons",
      "src": "assets/supplements/u174.webp"
    },
    "introduction": "佛罗伦萨沿阿尔诺河发展。大教堂穹顶、商人宫邸与公共广场记录了文艺复兴时期建筑、艺术和商业在城内的交汇。",
    "coords": [
      11.25611,
      43.77306
    ]
  },
  "https://whc.unesco.org/en/list/395/": {
    "ipa": "/piˈæzə dɛl ˈdwoʊmoʊ ˈpisə/",
    "illustration": {
      "subject": "Italy - Pisa - Leaning Tower of Pisa.jpg",
      "credit": "Arne Müseler / www.arne-mueseler.com",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Italy_-_Pisa_-_Leaning_Tower_of_Pisa.jpg",
      "kind": "commons",
      "src": "assets/supplements/u395.webp"
    },
    "introduction": "比萨大教堂广场集中了教堂、洗礼堂、钟楼和墓园。著名的斜塔原是独立钟楼，在施工阶段就因地基不均匀沉降而倾斜。",
    "coords": [
      10.396389,
      43.723056
    ]
  },
  "https://whc.unesco.org/en/list/394/": {
    "ipa": "/ˈvɛnɪs ənd ɪts ləˈɡun/",
    "illustration": {
      "subject": "Venizi - lanscape from San Giorgio Maggiore.jpg",
      "credit": "Pierbou",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Venizi_-_lanscape_from_San_Giorgio_Maggiore.jpg",
      "kind": "commons",
      "src": "assets/supplements/u394.webp"
    },
    "introduction": "威尼斯建在亚得里亚海潟湖的岛屿上。运河充当街道，桥梁连接街区，城市的建造和生活始终取决于潮汐与潟湖水道。",
    "coords": [
      12.338944,
      45.434306
    ]
  },
  "https://whc.unesco.org/en/list/1356/": {
    "ipa": "/blu ənd dʒɑn kroʊ ˈmaʊntənz/",
    "illustration": {
      "subject": "Blue Mountains, Jamaica.jpg",
      "credit": "Wolmadrian",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Blue_Mountains,_Jamaica.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1356.webp"
    },
    "introduction": "牙买加的蓝山与约翰·克罗山保留了湿润山林。逃离奴役的马龙社群利用险峻地形定居、防守，并发展出自己的路线和文化传统。",
    "coords": [
      -76.571111,
      18.0775
    ]
  },
  "https://www.geonames.org/248946/": {
    "ipa": "/ˈɪrbɪd/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Irbid1.jpg",
      "credit": "Mazim82 at English Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Irbid1.jpg",
      "kind": "commons",
      "src": "assets/supplements/g248946.webp"
    },
    "introduction": "伊尔比德位于约旦北部的农业区，往西北可到约旦河谷。城区也是当地高等教育的重要中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Irbid",
    "coords": [
      35.85,
      32.55556
    ]
  },
  "https://www.geonames.org/250774/": {
    "ipa": "/ˈɑkəbə/",
    "illustration": {
      "subject": "Aqaba, Southern Jordan 2012 25.jpg",
      "credit": "Sana Janakat",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aqaba,_Southern_Jordan_2012_25.jpg",
      "kind": "commons",
      "src": "assets/supplements/g250774.webp"
    },
    "introduction": "亚喀巴坐落在红海亚喀巴湾的北端，是约旦的出海口。沿岸珊瑚礁紧邻荒漠山地和港区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Aqaba",
    "coords": [
      35.00778,
      29.52667
    ]
  },
  "https://whc.unesco.org/en/list/327/": {
    "ipa": "/kʊˈseɪr ˈæmrə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Qusayr Amra.jpg",
      "credit": "​ English Wikipedia user Daniel Case",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Qusayr_Amra.jpg",
      "kind": "commons",
      "src": "assets/supplements/u327.webp"
    },
    "introduction": "约旦沙漠中的库塞尔阿姆拉是倭马亚时期的建筑。浴室和接待厅的壁画描绘了狩猎、工匠、人物和星空。",
    "coords": [
      36.587306,
      31.801806
    ]
  },
  "https://www.geonames.org/1853909/": {
    "ipa": "/oʊˈsɑkə/",
    "illustration": {
      "subject": "Osaka Castle 02bs3200.jpg",
      "credit": "663highland",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Osaka_Castle_02bs3200.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1853909.webp"
    },
    "introduction": "大阪位于本州西部的大阪湾岸。河道和运河把港口、仓库与商铺相连，使它长期充当日本各地物产的集散地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Osaka",
    "coords": [
      135.50107,
      34.69379
    ]
  },
  "https://www.geonames.org/1848354/": {
    "ipa": "/ˌjoʊkəˈhɑmə/",
    "illustration": {
      "subject": "Minato-mirai from Yamashita Park at night.jpg",
      "credit": "Takuro1202",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Minato-mirai_from_Yamashita_Park_at_night.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1848354.webp"
    },
    "introduction": "横滨位于东京湾西岸。十九世纪开港后，山下码头一带逐步形成仓储区、外商街区和中华街。",
    "introductionSource": "https://en.wikipedia.org/wiki/Yokohama",
    "coords": [
      139.65,
      35.43333
    ]
  },
  "https://www.geonames.org/1857910/": {
    "ipa": "/kiˈoʊtoʊ/",
    "illustration": {
      "subject": "Pedestrian road with pavements, paper umbrellas and people in yukata, Higashiyama-ku, Kyoto, Japan.jpg",
      "credit": "Basile Morin",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pedestrian_road_with_pavements,_paper_umbrellas_and_people_in_yukata,_Higashiyama-ku,_Kyoto,_Japan.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1857910.webp"
    },
    "introduction": "京都坐落在山地环绕的盆地，鸭川穿城而过。作为日本长期的都城，城区保留了方格街道、寺院与传统町屋。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kyoto",
    "coords": [
      135.75385,
      35.02107
    ]
  },
  "https://www.geonames.org/1856057/": {
    "ipa": "/nəˈɡɔɪə/",
    "illustration": {
      "subject": "Japan Nagoya.png",
      "credit": "File:Ferris Wheel - Port of Nagoya.JPG by Gnsin File:Higashiyama botanical gardens-01.jpg by KAMUI File:Nagoya (2015-11-03).JPG by Alpsdake File:Nagoya TV Tower.jpg by Benjamin Hollis upload by File Upload Bot (Magnus Manske) File:Nagoya csl snow piled up.jpg by 名古屋太郎 Composition by ASDFGH",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_Nagoya.png",
      "kind": "commons",
      "src": "assets/supplements/g1856057.webp"
    },
    "introduction": "名古屋位于日本中部的浓尾平原，南面临伊势湾。城堡周围发展起来的市街，后来成为中京制造业区的中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Nagoya",
    "coords": [
      136.90641,
      35.18147
    ]
  },
  "https://whc.unesco.org/en/list/661/": {
    "ipa": "/hɪˈmɛdʒi dʒoʊ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Himeji castle in may 2015.jpg",
      "credit": "Nikos Kitsakis",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Himeji_castle_in_may_2015.jpg",
      "kind": "commons",
      "src": "assets/supplements/u661.webp"
    },
    "introduction": "姬路城以白色墙面和层叠的天守群闻名。城门、弯折通道和多重院落共同控制进入主楼的路线，展现了日本木构城郭的防御设计。",
    "coords": [
      134.7,
      34.833333
    ]
  },
  "https://whc.unesco.org/en/list/662/": {
    "ipa": "/ˌjɑkuˈʃimə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Yakushima from Ferry Amami 20121116.jpg",
      "credit": "tsuda from Tsushima, Aichi, Japan",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Yakushima_from_Ferry_Amami_20121116.jpg",
      "kind": "commons",
      "src": "assets/supplements/u662.webp"
    },
    "introduction": "屋久岛位于日本九州以南，湿润海风遇山带来丰沛降雨。植被从海岸向山顶分带，高处森林中生长着树龄很长的屋久杉。",
    "coords": [
      130.508611,
      30.315
    ]
  },
  "https://whc.unesco.org/en/list/688/": {
    "ipa": "/hɪˈstɔrɪk ˈmɑnjəmənts əv ˈeɪnʃənt kiˈoʊtoʊ kiˈoʊtoʊ ˈudʒi ənd ˈoʊtsu ˈsɪtiz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kinkakuji 2004-09-21.jpg",
      "credit": "Keith Pomakis",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Kinkakuji_2004-09-21.jpg",
      "kind": "commons",
      "src": "assets/supplements/u688.webp"
    },
    "introduction": "古京都的文化遗产分布在京都、宇治和大津。寺院、神社和庭园展现了日本木构建筑以及借山水营造园林空间的传统。",
    "coords": [
      135.755168,
      35.005006
    ]
  },
  "https://www.geonames.org/1526384/": {
    "ipa": "/ˌælməˈti/",
    "illustration": {
      "subject": "13 Вид на Алма-Ату с горы Кок Тюбе.jpg",
      "credit": "Marat Rysbekov",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:13_%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%90%D0%BB%D0%BC%D0%B0-%D0%90%D1%82%D1%83_%D1%81_%D0%B3%D0%BE%D1%80%D1%8B_%D0%9A%D0%BE%D0%BA_%D0%A2%D1%8E%D0%B1%D0%B5.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1526384.webp"
    },
    "introduction": "阿拉木图位于天山北麓，城区南面可以看见雪山。它曾是哈萨克斯坦首都，仍是重要的商业与文化中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Almaty",
    "coords": [
      76.9115,
      43.25249
    ]
  },
  "https://www.geonames.org/1518980/": {
    "ipa": "/ʃɪmˈkɛnt/",
    "illustration": {
      "subject": "Shymkent independence square in 2023.jpg",
      "credit": "ほっきー",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Shymkent_independence_square_in_2023.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1518980.webp"
    },
    "introduction": "希姆肯特位于哈萨克斯坦南部，靠近通往塔什干的商路。山麓灌溉农业与区域贸易支撑了这座城市的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Shymkent",
    "coords": [
      69.60042,
      42.30988
    ]
  },
  "https://whc.unesco.org/en/list/1103/": {
    "ipa": "/ˌmɔsəˈliəm əv ˈkoʊdʒə ˈɑməd jəˈsɑwi/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ханака Ахмеда Ясави 2010 003.jpg",
      "credit": "Yuriy75",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%A5%D0%B0%D0%BD%D0%B0%D0%BA%D0%B0_%D0%90%D1%85%D0%BC%D0%B5%D0%B4%D0%B0_%D0%AF%D1%81%D0%B0%D0%B2%D0%B8_2010_003.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1103.webp"
    },
    "introduction": "亚萨维陵墓位于哈萨克斯坦的突厥斯坦。帖木儿为纪念苏菲派诗人亚萨维下令兴建，巨大的门户与穹顶成为建筑的显著特征。",
    "coords": [
      68.271056,
      43.297694
    ]
  },
  "https://www.geonames.org/186301/": {
    "ipa": "/mɑmˈbæsə/",
    "illustration": {
      "subject": "Downtown Mombasa.jpg",
      "credit": "Victor Ochieng",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Mombasa.jpg",
      "kind": "commons",
      "src": "assets/supplements/g186301.webp"
    },
    "introduction": "蒙巴萨的历史核心位于肯尼亚印度洋岸的一座岛上。老港和耶稣堡留存着斯瓦希里海岸贸易的痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mombasa",
    "coords": [
      39.66359,
      -4.05466
    ]
  },
  "https://www.geonames.org/191245/": {
    "ipa": "/kiˈsumu/",
    "illustration": {
      "subject": "Aerial view of Kisumu.jpg",
      "credit": "DEMOSH",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Kisumu.jpg",
      "kind": "commons",
      "src": "assets/supplements/g191245.webp"
    },
    "introduction": "基苏木坐落在维多利亚湖东北部的海湾边。湖运与通往肯尼亚海岸的铁路曾在这里衔接。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kisumu",
    "coords": [
      34.76171,
      -0.10221
    ]
  },
  "https://whc.unesco.org/en/list/801/": {
    "ipa": "/leɪk tɝˈkɑnə ˈnæʃənəl pɑrks/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Series of lava rock pools at southern end of Lake Turkana.jpg",
      "credit": "Thomas Kujawa",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Series_of_lava_rock_pools_at_southern_end_of_Lake_Turkana.jpg",
      "kind": "commons",
      "src": "assets/supplements/u801.webp"
    },
    "introduction": "肯尼亚的图尔卡纳湖坐落在东非裂谷的干旱地带。湖区为鳄鱼和水鸟提供栖息地，附近沉积层也保存了早期人类化石。",
    "coords": [
      36.331574,
      3.374722
    ]
  },
  "https://www.geonames.org/1527534/": {
    "ipa": "/ɑʃ/",
    "illustration": {
      "subject": "Osh, Kyrgyzstan - panoramio (4).jpg",
      "credit": "AmanovDmitry",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Osh,_Kyrgyzstan_-_panoramio_(4).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1527534.webp"
    },
    "introduction": "奥什位于费尔干纳谷地东缘，苏莱曼山从城区拔起。山麓集市和朝圣路线见证了当地悠久的商路历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Osh",
    "coords": [
      72.7985,
      40.52828
    ]
  },
  "https://whc.unesco.org/en/list/1230/": {
    "ipa": "/suˈleɪmɑn tu ˈseɪkrəd ˈmaʊntən/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Сулайман-Тоо с дрона.jpg",
      "credit": "Nefesh03",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%A1%D1%83%D0%BB%D0%B0%D0%B9%D0%BC%D0%B0%D0%BD-%D0%A2%D0%BE%D0%BE_%D1%81_%D0%B4%D1%80%D0%BE%D0%BD%D0%B0.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1230.webp"
    },
    "introduction": "苏莱曼圣山从吉尔吉斯斯坦奥什城中隆起。山上的洞穴、岩刻、礼拜场所和步道记录了延续至今的朝圣传统。",
    "coords": [
      72.782778,
      40.531111
    ]
  },
  "https://www.geonames.org/1822214/": {
    "ipa": "/ˌsiəm ˈriəp/",
    "illustration": {
      "subject": "Street scene, Siem Reap, 2018 (12).jpg",
      "credit": "Bahnfrend",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Street_scene,_Siem_Reap,_2018_(12).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1822214.webp"
    },
    "introduction": "暹粒位于柬埔寨西北部，南邻洞里萨湖。向北不远就是吴哥古都遗址，游客多从这里前往各座寺庙。",
    "introductionSource": "https://en.wikipedia.org/wiki/Siem_Reap",
    "coords": [
      103.86056,
      13.36179
    ]
  },
  "https://www.geonames.org/1831797/": {
    "ipa": "/ˌbɑtəmˈbɑŋ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Battambang..JPG",
      "credit": "Milei.vencel , Hungary",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Battambang..JPG",
      "kind": "commons",
      "src": "assets/supplements/g1831797.webp"
    },
    "introduction": "马德望沿柬埔寨西北部的桑凯河展开。周边冲积平原盛产稻米，河岸街区留有传统商铺和殖民时期建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Battambang",
    "coords": [
      103.19822,
      13.10271
    ]
  },
  "https://whc.unesco.org/en/list/1224/": {
    "ipa": "/ˈtɛmpəl əv prɛə viˈhɪə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "03 Prasat Preah Vihear-nX-06478.jpg",
      "credit": "PsamatheM",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:03_Prasat_Preah_Vihear-nX-06478.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1224.webp"
    },
    "introduction": "柏威夏寺位于柬埔寨北部扁担山脉的悬崖顶。参拜者沿一连串阶梯和门楼向主殿前进，轴线顺应山势展开。",
    "coords": [
      104.680325,
      14.390841
    ]
  },
  "https://whc.unesco.org/en/list/1325/": {
    "ipa": "/ˈfinɪks ˈaɪləndz prəˈtɛktɪd ˈɛriə/",
    "illustration": {
      "kind": "photo",
      "subject": "Phoenix Islands Protected Area (Kiribati)",
      "source": "https://whc.unesco.org/en/documents/114879/",
      "credit": "Ron Van Oers · © UNESCO",
      "license": "CC BY-SA 3.0 IGO",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/igo/",
      "src": "assets/supplements/u1325.jpg"
    },
    "introduction": "菲尼克斯群岛保护区位于基里巴斯的中太平洋海域。环礁、珊瑚礁和海底山环绕深海水域，是研究偏远海洋生态的重要地点。",
    "coords": [
      -172.650203,
      -3.864454
    ]
  },
  "https://www.geonames.org/1838524/": {
    "ipa": "/buˈsɑn/",
    "illustration": {
      "subject": "Korea-Busan-Busan Tower-01.jpg",
      "credit": "by lwy",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Korea-Busan-Busan_Tower-01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1838524.webp"
    },
    "introduction": "釜山位于朝鲜半岛东南端，朝向对马海峡。山地将城区分隔在不同海湾，港口和鱼市紧靠水岸。",
    "introductionSource": "https://en.wikipedia.org/wiki/Busan",
    "coords": [
      129.03004,
      35.10168
    ]
  },
  "https://www.geonames.org/1843564/": {
    "ipa": "/ˈɪntʃʌn/",
    "illustration": {
      "subject": "Songdo Central Park and Posco Tower Songdo.jpg",
      "credit": "Jaehyuk Lee",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Songdo_Central_Park_and_Posco_Tower_Songdo.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1843564.webp"
    },
    "introduction": "仁川面向朝鲜半岛西岸的黄海，是首尔通海的港口。沿岸潮差显著，港区采用船闸调节水位。",
    "introductionSource": "https://en.wikipedia.org/wiki/Incheon",
    "coords": [
      126.70515,
      37.45646
    ]
  },
  "https://www.geonames.org/1835329/": {
    "ipa": "/dæˈɡu/",
    "illustration": {
      "subject": "Daegu skyline as seen from KNU's Technopark.jpg",
      "credit": "Mobius One",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Daegu_skyline_as_seen_from_KNU%27s_Technopark.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1835329.webp"
    },
    "introduction": "大邱位于韩国东南部的内陆盆地。纺织业和传统药材市场长期在这里聚集，与海滨的釜山形成鲜明对照。",
    "introductionSource": "https://en.wikipedia.org/wiki/Daegu",
    "coords": [
      128.60121,
      35.87102
    ]
  },
  "https://whc.unesco.org/en/list/736/": {
    "ipa": "/ˈsʌkɡʊrɑm ˈɡrɑˌtoʊ ənd bʊlˈɡʊksɑ ˈtɛmpəl/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Many colorful flowerpots in front of Bulguksa temple in Gyeongju South Korea.jpg",
      "credit": "Basile Morin",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Many_colorful_flowerpots_in_front_of_Bulguksa_temple_in_Gyeongju_South_Korea.jpg",
      "kind": "commons",
      "src": "assets/supplements/u736.webp"
    },
    "introduction": "韩国庆州的石窟庵以石块构筑圆形佛殿，佛国寺则利用石台和阶梯布置寺院。两处共同展现了统一新罗时期的佛教艺术。",
    "coords": [
      129.349029,
      35.791498
    ]
  },
  "https://whc.unesco.org/en/list/816/": {
    "ipa": "/ˌtʃɑŋdʌkˈɡʊŋ ˈpæləs ˈkɑmplɛks/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Exterior front view of Daejojeon Hall of Changdeokgung Palace with blue sky in Seoul.jpg",
      "credit": "Basile Morin",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Exterior_front_view_of_Daejojeon_Hall_of_Changdeokgung_Palace_with_blue_sky_in_Seoul.jpg",
      "kind": "commons",
      "src": "assets/supplements/u816.webp"
    },
    "introduction": "首尔昌德宫的殿阁顺着山麓地形分布。后苑将树林、池塘和亭阁纳入宫中，是朝鲜王朝宫苑利用自然地形的例子。",
    "coords": [
      126.991111,
      37.578889
    ]
  },
  "https://www.geonames.org/1655559/": {
    "ipa": "/luˈɑŋ prəˈbɑŋ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Luang Prabang, Laos. III.jpg",
      "credit": "Shelly Zohar (שלי זוהר)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Luang_Prabang,_Laos._III.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1655559.webp"
    },
    "introduction": "琅勃拉邦的历史城区位于湄公河与南康河之间的半岛上。寺院、木屋和近代街区记录了老挝旧王都的历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Luang_Prabang",
    "coords": [
      102.1525,
      19.8933
    ]
  },
  "https://whc.unesco.org/en/list/479/": {
    "ipa": "/taʊn əv luˈɑŋ prəˈbɑŋ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Luang Prabang, Laos. III.jpg",
      "credit": "Shelly Zohar (שלי זוהר)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Luang_Prabang,_Laos._III.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1655559.webp"
    },
    "introduction": "琅勃拉邦位于湄公河与南康河汇合处。低层木屋、佛寺和法国殖民时期建筑沿半岛分布，共同塑造了老城街区。",
    "coords": [
      102.13333,
      19.88889
    ]
  },
  "https://www.geonames.org/266826/": {
    "ipa": "/ˈtrɪpəli/",
    "illustration": {
      "subject": "The skyline of Tripoli, Lebanon.jpg",
      "credit": "© Vyacheslav Argenberg / http://www.vascoplanet.com/",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:The_skyline_of_Tripoli,_Lebanon.jpg",
      "kind": "commons",
      "src": "assets/supplements/g266826.webp"
    },
    "introduction": "黎巴嫩的的黎波里位于地中海东岸北段。内陆老城围绕城堡和传统市集发展，沿海则是米纳港区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tripoli%2C_Lebanon",
    "coords": [
      35.84415,
      34.43352
    ]
  },
  "https://www.geonames.org/268064/": {
    "ipa": "/ˈsaɪdən/",
    "illustration": {
      "subject": "SidonNewCity.jpg",
      "credit": "Heretiq",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:SidonNewCity.jpg",
      "kind": "commons",
      "src": "assets/supplements/g268064.webp"
    },
    "introduction": "赛达是黎巴嫩南部的古港，历史上称西顿。海边城堡和旧港的位置，反映了这座腓尼基城市面向地中海的格局。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sidon",
    "coords": [
      35.37148,
      33.55751
    ]
  },
  "https://whc.unesco.org/en/list/295/": {
    "ipa": "/ˈbɪblɑs/",
    "illustration": {
      "subject": "Byblos Libanon 2003.JPG",
      "credit": "Orient at de.wikipedia",
      "license": "CC BY-SA 2.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/de/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Byblos_Libanon_2003.JPG",
      "kind": "commons",
      "src": "assets/supplements/u295.webp"
    },
    "introduction": "比布鲁斯位于黎巴嫩地中海岸。港口长期参与木材等商品贸易，层层叠压的聚落和铭文记录了腓尼基城市与字母书写的历史。",
    "coords": [
      35.645556,
      34.11917
    ]
  },
  "https://www.geonames.org/88319/": {
    "ipa": "/bɛnˈɡɑzi/",
    "illustration": {
      "subject": "The Old Town, Benghazi, Libya.jpg",
      "credit": "Dennixo .",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:The_Old_Town,_Benghazi,_Libya.jpg",
      "kind": "commons",
      "src": "assets/supplements/g88319.webp"
    },
    "introduction": "班加西位于利比亚东部、锡尔特湾东侧。这里是昔兰尼加地区通向地中海的主要港城。",
    "introductionSource": "https://en.wikipedia.org/wiki/Benghazi",
    "coords": [
      20.06859,
      32.11486
    ]
  },
  "https://www.geonames.org/2214846/": {
    "ipa": "/mɪsˈrɑtə/",
    "illustration": {
      "subject": "مصراتة.jpg",
      "credit": "عبدالرحمن عبدالمنعم بعيو",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D9%85%D8%B5%D8%B1%D8%A7%D8%AA%D8%A9.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2214846.webp"
    },
    "introduction": "米苏拉塔位于利比亚西北部的地中海岸。商贸传统与现代港口、钢铁生产共同塑造了城市的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Misrata",
    "coords": [
      15.09254,
      32.37535
    ]
  },
  "https://whc.unesco.org/en/list/190/": {
    "ipa": "/ˌɑrkiəˈlɑdʒɪkəl saɪt əv saɪˈrini/",
    "illustration": {
      "subject": "Archaeological Site of Cyrene-109025.jpg",
      "credit": "Giovanni Boccardi",
      "license": "CC BY-SA 3.0 igo",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/igo/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Archaeological_Site_of_Cyrene-109025.jpg",
      "kind": "commons",
      "src": "assets/supplements/u190.webp"
    },
    "introduction": "昔兰尼由希腊移民建立于今利比亚东北部的高地。神庙、公共广场与墓地保存了希腊城市后来纳入罗马世界的痕迹。",
    "coords": [
      21.85833,
      32.825
    ]
  },
  "https://www.geonames.org/1241622/": {
    "ipa": "/ˈkændi/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sri Lanka, Kandy lake.jpg",
      "credit": "© Vyacheslav Argenberg / http://www.vascoplanet.com/",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sri_Lanka,_Kandy_lake.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1241622.webp"
    },
    "introduction": "康提坐落在斯里兰卡中部山地。湖畔的佛牙寺是佛教朝圣地，也见证了康提王国的历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kandy",
    "coords": [
      80.6336,
      7.2906
    ]
  },
  "https://www.geonames.org/1242833/": {
    "ipa": "/ˈdʒæfnə/",
    "illustration": {
      "subject": "Jaffna montage.jpg",
      "credit": "Anton 17",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Jaffna_montage.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1242833.webp"
    },
    "introduction": "贾夫纳位于斯里兰卡北端的半岛，周围是浅潟湖与岛屿。当地的寺庙、语言和饮食延续了泰米尔文化传统。",
    "introductionSource": "https://en.wikipedia.org/wiki/Jaffna",
    "coords": [
      80.00742,
      9.66845
    ]
  },
  "https://whc.unesco.org/en/list/200/": {
    "ipa": "/ˈseɪkrəd ˈsɪti əv əˌnurɑdəˈpʊrə/",
    "illustration": {
      "subject": "Ruwanweli Maha Saaya.jpg",
      "credit": "Thisaru Tharuka",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ruwanweli_Maha_Saaya.jpg",
      "kind": "commons",
      "src": "assets/supplements/u200.webp"
    },
    "introduction": "阿努拉德普勒曾是斯里兰卡古都，也是佛教朝圣地。大型佛塔、僧院与蓄水设施记录了王国的宗教生活和灌溉传统。",
    "coords": [
      80.383333,
      8.333333
    ]
  },
  "https://www.geonames.org/598316/": {
    "ipa": "/ˈkaʊnəs/",
    "illustration": {
      "subject": "Vytautas the Great Bridge from hill, Kaunas, Lithuania - Diliff.jpg",
      "credit": "Diliff",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vytautas_the_Great_Bridge_from_hill,_Kaunas,_Lithuania_-_Diliff.jpg",
      "kind": "commons",
      "src": "assets/supplements/g598316.webp"
    },
    "introduction": "考纳斯建在涅曼河与内里斯河汇流处。两次世界大战之间，它曾作为立陶宛的临时首都，留下成片现代主义建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kaunas",
    "coords": [
      23.90909,
      54.90156
    ]
  },
  "https://www.geonames.org/598098/": {
    "ipa": "/ˈkleɪpɛdə/",
    "illustration": {
      "subject": "Klaipedos Rotuse (02).JPG",
      "credit": "The original uploader was Squareshadow at Lithuanian Wikipedia .",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Klaipedos_Rotuse_(02).JPG",
      "kind": "commons",
      "src": "assets/supplements/g598098.webp"
    },
    "introduction": "克莱佩达位于库尔斯潟湖通往波罗的海的水道旁。港城对岸是细长的库尔斯沙嘴。",
    "introductionSource": "https://en.wikipedia.org/wiki/Klaip%C4%97da",
    "coords": [
      21.13912,
      55.7068
    ]
  },
  "https://whc.unesco.org/en/list/541/": {
    "ipa": "/ˈvɪlniəs hɪˈstɔrɪk ˈsɛntɚ/",
    "illustration": {
      "subject": "Gedimino kalnas 58.jpg",
      "credit": "Gytis Grižas https://www.wikidata.org/wiki/Q16452479",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Gedimino_kalnas_58.jpg",
      "kind": "commons",
      "src": "assets/supplements/u541.webp"
    },
    "introduction": "维尔纽斯老城从山脚的城堡区向外展开。街巷和院落之间并存哥特式、文艺复兴式及巴洛克式建筑，反映了波罗的海内陆的文化往来。",
    "coords": [
      25.29306,
      54.68667
    ]
  },
  "https://whc.unesco.org/en/list/1658/": {
    "ipa": "/oʊld taʊn əv ˈkʊldiɡə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kuldiga 11.JPG",
      "credit": "Vesma",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Kuldiga_11.JPG",
      "kind": "commons",
      "src": "assets/supplements/u1658.webp"
    },
    "introduction": "库尔迪加位于拉脱维亚西部，曾是库尔兰公国的行政中心。老城的街道格局与木屋，保留了波罗的海工匠交流留下的痕迹。",
    "coords": [
      21.971528,
      56.96775
    ]
  },
  "https://whc.unesco.org/en/list/1110/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv məˈkaʊ/",
    "illustration": {
      "subject": "Ruínas de S. Paulo.jpg",
      "credit": "K.Y.K.Z.K.",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ru%C3%ADnas_de_S._Paulo.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1110.webp"
    },
    "introduction": "澳门历史城区由街道与广场串联起庙宇、教堂、民居及炮台。妈阁庙与大三巴牌坊等遗存见证了港口长期的中西文化交流。",
    "coords": [
      113.543472,
      22.194722
    ]
  },
  "https://www.geonames.org/2553604/": {
    "ipa": "/kæsəˈblæŋkə/",
    "illustration": {
      "subject": "Au centre de Casablanca (8177200639).jpg",
      "credit": "Иерей Максим Массалитин from Rabat, Maroc",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Au_centre_de_Casablanca_(8177200639).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2553604.webp"
    },
    "introduction": "卡萨布兰卡坐落在摩洛哥的大西洋海岸。港口带动了商业与工业，哈桑二世清真寺的宣礼塔紧邻海面。",
    "introductionSource": "https://en.wikipedia.org/wiki/Casablanca",
    "coords": [
      -7.61138,
      33.58831
    ]
  },
  "https://www.geonames.org/2542997/": {
    "ipa": "/məˈrækɛʃ/",
    "illustration": {
      "subject": "Djemaa el Fna, evening.JPG",
      "credit": "Donar Reiskoffer",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Djemaa_el_Fna,_evening.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2542997.webp"
    },
    "introduction": "马拉喀什位于阿特拉斯山以北的平原上。红色城墙围起老城，杰马夫纳广场连接市集、街头表演和餐摊。",
    "introductionSource": "https://en.wikipedia.org/wiki/Marrakesh",
    "coords": [
      -7.99994,
      31.63416
    ]
  },
  "https://www.geonames.org/2548885/": {
    "ipa": "/fɛz/",
    "illustration": {
      "subject": "Medina of Fes, Marocco.jpg",
      "credit": "Petar Milošević",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Medina_of_Fes,_Marocco.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2548885.webp"
    },
    "introduction": "非斯是摩洛哥内陆古城。老城的窄巷连接经学院、作坊与皮革鞣制场，保留了传统手工业分区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Fez%2C_Morocco",
    "coords": [
      -5.00028,
      34.03313
    ]
  },
  "https://whc.unesco.org/en/list/170/": {
    "ipa": "/məˈdinə əv fɛz/",
    "illustration": {
      "subject": "Medina of Fes, Marocco.jpg",
      "credit": "Petar Milošević",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Medina_of_Fes,_Marocco.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2548885.webp"
    },
    "introduction": "非斯老城以密集的街巷、宗教学校和手工业作坊闻名。制革和染色工坊保留了传统工艺，狭窄巷道至今仍组织着街区生活。",
    "coords": [
      -4.981486,
      34.058847
    ]
  },
  "https://www.geonames.org/1053384/": {
    "ipa": "/ˌtoʊəməˈsinə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Tamatave - panoramio.jpg",
      "credit": "Hanspeter Limacher",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tamatave_-_panoramio.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1053384.webp"
    },
    "introduction": "图阿马西纳位于马达加斯加东岸，是面向印度洋的港城。铁路从沿海低地爬升，通往内陆高原。",
    "introductionSource": "https://en.wikipedia.org/wiki/Toamasina",
    "coords": [
      49.40234,
      -18.1492
    ]
  },
  "https://whc.unesco.org/en/list/494/": {
    "ipa": "/ˌɑndrəˈfɑnə draɪ ˈfɔrəsts/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Tsingy de Bemaraha.jpg",
      "credit": "My father (who approves of its use)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Tsingy_de_Bemaraha.jpg",
      "kind": "commons",
      "src": "assets/supplements/u494.webp"
    },
    "introduction": "马达加斯加西部的干旱森林横跨多种地貌，其中包括如针林般高耸的石灰岩峰。森林和灌丛为狐猴等岛上特有动物提供栖息地。",
    "coords": [
      46.291598,
      -17.86546
    ]
  },
  "https://visitmaldives.com/index.php/en/places/baa-atoll-biosphere-reserve": {
    "ipa": "/ˌhɑniˈfɑru beɪ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Dharavandhoo Thila - Hanifaru Bay Sharks.jpg",
      "credit": "Shiyam ElkCloner",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dharavandhoo_Thila_-_Hanifaru_Bay_Sharks.jpg",
      "kind": "commons",
      "src": "assets/supplements/mdv.webp"
    },
    "introduction": "哈尼法鲁湾位于马尔代夫芭环礁。季风、潮汐与湾形共同使浮游生物在特定时段聚集，吸引大量蝠鲼前来滤食。",
    "coords": [
      73.146457,
      5.179381
    ],
    "coordSource": "https://protectedareas.environment.gov.mv/en/protected-areas/hanifaru-region"
  },
  "https://www.geonames.org/4005539/": {
    "ipa": "/ˌɡwɑdələˈhɑrə/",
    "illustration": {
      "subject": "Panorámica Guadalajara desde edificio Bansi hacia norte (cropped).jpg",
      "credit": "Isacdaavid",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Panor%C3%A1mica_Guadalajara_desde_edificio_Bansi_hacia_norte_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4005539.webp"
    },
    "introduction": "瓜达拉哈拉位于墨西哥西部高原，是哈利斯科州的首府。当地与马里亚奇乐队的演奏传统关系密切。",
    "introductionSource": "https://en.wikipedia.org/wiki/Guadalajara",
    "coords": [
      -103.34749,
      20.67738
    ]
  },
  "https://www.geonames.org/3995465/": {
    "ipa": "/ˌmɑntəˈreɪ/",
    "illustration": {
      "subject": "Cerro de la Silla.jpg",
      "credit": "Spangineer",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cerro_de_la_Silla.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3995465.webp"
    },
    "introduction": "蒙特雷位于墨西哥东北部的山地边缘，马鞍形山峰是城市的地标。钢铁和制造业是这里的重要产业。",
    "introductionSource": "https://en.wikipedia.org/wiki/Monterrey",
    "coords": [
      -100.31721,
      25.68435
    ]
  },
  "https://www.geonames.org/3521081/": {
    "ipa": "/ˈpweɪblə ˈsɪti/",
    "illustration": {
      "subject": "Catedral puebla nocturna.jpg",
      "credit": "Alejandro Quintanar",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Catedral_puebla_nocturna.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3521081.webp"
    },
    "introduction": "普埃布拉位于墨西哥中部高原。老城许多教堂和住宅以彩色釉面砖装饰，延续当地塔拉韦拉陶艺传统。",
    "introductionSource": "https://en.wikipedia.org/wiki/Puebla_(city)",
    "coords": [
      -98.20723,
      19.04778
    ]
  },
  "https://whc.unesco.org/en/list/414/": {
    "ipa": "/pri hɪˈspænɪk ˈsɪti əv ˈteɪoʊˌtiwɑˈkɑn/",
    "illustration": {
      "subject": "ZA77 Teotihuacán edo de mex Herberto de la rosa.jpg",
      "credit": "Hdlrosa",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:ZA77_Teotihuac%C3%A1n_edo_de_mex_Herberto_de_la_rosa.jpg",
      "kind": "commons",
      "src": "assets/supplements/u414.webp"
    },
    "introduction": "特奥蒂瓦坎位于墨西哥盆地东北部。亡灵大道串起太阳金字塔、月亮金字塔和大型建筑群，成片住宅区反映出古城的规模。",
    "coords": [
      -98.84167,
      19.69167
    ]
  },
  "https://whc.unesco.org/en/list/411/": {
    "ipa": "/pri hɪˈspænɪk ˈsɪti ənd ˈnæʃənəl pɑrk əv pəˈlɛŋkeɪ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "055 Palenque Pakal Maji (29).JPG",
      "credit": "Ljuba brank at Slovenian Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:055_Palenque_Pakal_Maji_(29).JPG",
      "kind": "commons",
      "src": "assets/supplements/u411.webp"
    },
    "introduction": "帕伦克位于墨西哥恰帕斯州的热带山麓。宫殿与神庙上保存着玛雅文字，铭文神庙内的墓室安葬着统治者帕卡尔。",
    "coords": [
      -92.05,
      17.48333
    ]
  },
  "https://whc.unesco.org/en/list/119/": {
    "ipa": "/ˌtɪmbəkˈtu/",
    "illustration": {
      "subject": "Donkeys, Timbuktu.jpg",
      "credit": "Flickr user: Emilio Labrador Santiago de Chile https://www.flickr.com/people/3059349393/",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Donkeys,_Timbuktu.jpg",
      "kind": "commons",
      "src": "assets/supplements/u119.webp"
    },
    "introduction": "廷巴克图位于撒哈拉南缘，靠近尼日尔河与跨沙漠商路的交会地带。土筑清真寺和手稿收藏见证了这里的学术与贸易传统。",
    "coords": [
      -2.999444,
      16.773333
    ]
  },
  "https://whc.unesco.org/en/list/132/": {
    "ipa": "/ˌmɛɡəˈlɪθɪk ˈtɛmpəlz əv ˈmɔltə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ggantija Temples, Xaghra, Gozo.jpg",
      "credit": "BoneA",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ggantija_Temples,_Xaghra,_Gozo.jpg",
      "kind": "commons",
      "src": "assets/supplements/u132.webp"
    },
    "introduction": "马耳他群岛的史前巨石神庙由大型石块围出相连的弧形空间。入口、内室与雕刻石板显示了建造者处理石材和组织仪式空间的能力。",
    "coords": [
      14.400832,
      35.902082
    ]
  },
  "https://www.geonames.org/1298824/": {
    "ipa": "/jɑŋˈɡɑn/",
    "illustration": {
      "subject": "2016 Rangun, Dawny budynek Sądu Najwyższego (15).jpg",
      "credit": "Photo: Marcin Konsek / Wikimedia Commons",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:2016_Rangun,_Dawny_budynek_S%C4%85du_Najwy%C5%BCszego_(15).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1298824.webp"
    },
    "introduction": "仰光位于缅甸南部的河口低地。港口连接安达曼海航线，立在山丘上的大金塔是全城地标。",
    "introductionSource": "https://en.wikipedia.org/wiki/Yangon",
    "coords": [
      96.15611,
      16.80528
    ]
  },
  "https://www.geonames.org/1311874/": {
    "ipa": "/ˌmændəˈleɪ/",
    "illustration": {
      "subject": "Mandalay, Moat, Myanmar.jpg",
      "credit": "© Vyacheslav Argenberg",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mandalay,_Moat,_Myanmar.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1311874.webp"
    },
    "introduction": "曼德勒位于缅甸中部的伊洛瓦底江东岸。它曾是缅甸王朝的都城，王宫旧址周围保留着方形护城河。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mandalay",
    "coords": [
      96.08359,
      21.97473
    ]
  },
  "https://whc.unesco.org/en/list/1588/": {
    "ipa": "/ˈbeɪɡən/",
    "illustration": {
      "subject": "Old Bagan, Myanmar, Bagan plains at sunset.jpg",
      "credit": "© Vyacheslav Argenberg",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Old_Bagan,_Myanmar,_Bagan_plains_at_sunset.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1588.webp"
    },
    "introduction": "蒲甘坐落在缅甸伊洛瓦底江畔的平原上。数以千计的佛塔、寺庙与僧院散布其间，部分寺内保留了叙述佛教故事的壁画。",
    "coords": [
      94.90038,
      21.142753
    ]
  },
  "https://whc.unesco.org/en/list/100/": {
    "ipa": "/ˈdʊrmɪtɔr ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Durmitor B1 (2).jpg",
      "credit": "Jerzy Opioła",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Durmitor_B1_(2).jpg",
      "kind": "commons",
      "src": "assets/supplements/u100.webp"
    },
    "introduction": "杜米托尔山地位于黑山北部。冰川塑成的山峰与湖盆上覆森林，塔拉河则在山地边缘切出深邃峡谷。",
    "coords": [
      19.0166,
      43.133
    ]
  },
  "https://whc.unesco.org/en/list/1081/": {
    "ipa": "/ɔrˈkɔn ˈvæli ˈkʌltʃɚəl ˈlænˌskeɪp/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Orchon-mongolei.JPG",
      "credit": "He-ba-mue",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Orchon-mongolei.JPG",
      "kind": "commons",
      "src": "assets/supplements/u1081.webp"
    },
    "introduction": "蒙古鄂尔浑河谷长期支撑游牧生活，也曾是多个草原政权的中心。古代石碑、聚落以及哈剌和林遗址沿谷地分布。",
    "coords": [
      102.678482,
      47.479214
    ]
  },
  "https://www.geonames.org/1052373/": {
    "ipa": "/ˈbeɪrə/",
    "illustration": {
      "subject": "Beira center 2000.jpg",
      "credit": "SSgt Robert Talenti, USAF",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Beira_center_2000.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1052373.webp"
    },
    "introduction": "贝拉位于莫桑比克中部的蓬圭河口。港口通过铁路和公路连接津巴布韦等内陆地区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Beira%2C_Mozambique",
    "coords": [
      34.83889,
      -19.84361
    ]
  },
  "https://www.geonames.org/1033356/": {
    "ipa": "/næmˈpulə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Nampula Airport.jpg",
      "credit": "Gustavo Sugahara",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Nampula_Airport.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1033356.webp"
    },
    "introduction": "楠普拉位于莫桑比克北部内陆，周围平原散布着陡峭的岩丘。铁路向东连接印度洋岸的纳卡拉港。",
    "introductionSource": "https://en.wikipedia.org/wiki/Nampula",
    "coords": [
      39.2666,
      -15.11646
    ]
  },
  "https://whc.unesco.org/en/list/506/": {
    "ipa": "/bɑn dɑrˈɡɛn ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "PNBA 43.JPG",
      "credit": "Kokopelado",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:PNBA_43.JPG",
      "kind": "commons",
      "src": "assets/supplements/u506.webp"
    },
    "introduction": "毛里塔尼亚大西洋岸的阿尔金浅滩由沙洲、潮滩和岛屿组成。退潮时显露的泥滩富含食物，是候鸟越冬和停歇的重要场所。",
    "coords": [
      -16.10889,
      20.23472
    ]
  },
  "https://whc.unesco.org/en/list/1657/": {
    "ipa": "/vɑlˈkeɪnoʊz ənd ˈfɔrəsts əv maʊnt pəˈleɪ ənd ðə ˈpitɑnz əv ˈnɔrðɚn mɑrtɪˈnik/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Mont Pelée.jpg",
      "credit": "Hans maas at Dutch Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Mont_Pel%C3%A9e.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1657.webp"
    },
    "introduction": "马提尼克北部的培雷山和卡尔贝群峰展现了火山塑造岛屿的过程。林地从海岸延伸到山顶，培雷山的喷发史也影响了火山学研究。",
    "coords": [
      -61.134975,
      14.772854
    ]
  },
  "https://whc.unesco.org/en/list/1227/": {
    "ipa": "/ˌɑprəˈvɑsi ɡɑt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Aapravasi Ghat Museum, Mauritius (41).jpg",
      "credit": "Suyash Dwivedi",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aapravasi_Ghat_Museum,_Mauritius_(41).jpg",
      "kind": "commons",
      "src": "assets/supplements/u1227.webp"
    },
    "introduction": "毛里求斯路易港的阿普拉瓦西移民站曾接收跨洋而来的契约劳工。码头、台阶和旧建筑是印度洋劳工迁移史的实物见证。",
    "coords": [
      57.503167,
      -20.158639
    ]
  },
  "https://www.geonames.org/931755/": {
    "ipa": "/ˈblænˌtaɪr/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Blantyre City.jpg",
      "credit": "SMuyila",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Blantyre_City.jpg",
      "kind": "commons",
      "src": "assets/supplements/g931755.webp"
    },
    "introduction": "布兰太尔位于马拉维南部希雷高地。它与相邻的林贝共同发展为商业、加工与铁路运输中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Blantyre",
    "coords": [
      35.00854,
      -15.78499
    ]
  },
  "https://whc.unesco.org/en/list/476/": {
    "ipa": "/tʃɔŋˈɡoʊni rɑk ɑrt ˈɛriə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Chongoni rock art.jpg",
      "credit": "「Malawi」",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Chongoni_rock_art.jpg",
      "kind": "commons",
      "src": "assets/supplements/u476.webp"
    },
    "introduction": "马拉维琼戈尼的花岗岩山地中保留了大量岩画。图像既有狩猎采集者的传统，也有与切瓦人仪式有关的绘画。",
    "coords": [
      34.207074,
      -14.218521
    ]
  },
  "https://www.geonames.org/1735106/": {
    "ipa": "/dʒɔrdʒ taʊn/",
    "illustration": {
      "subject": "Skyline of George Town, Penang at night January 2025 02-01.jpg",
      "credit": "HundenvonPenang",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_George_Town,_Penang_at_night_January_2025_02-01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1735106.webp"
    },
    "introduction": "乔治市位于马来西亚槟榔屿东北角。海峡贸易汇聚不同社群，老城的店屋、会馆、清真寺和教堂彼此相邻。",
    "introductionSource": "https://en.wikipedia.org/wiki/George_Town%2C_Penang",
    "coords": [
      100.33543,
      5.41123
    ]
  },
  "https://www.geonames.org/1732752/": {
    "ipa": "/dʒəˈhɔr ˈbɑru/",
    "illustration": {
      "subject": "Johor Bahru city in 2015.jpg",
      "credit": "Azharsofii",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Johor_Bahru_city_in_2015.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1732752.webp"
    },
    "introduction": "新山是马来半岛南端的柔佛州首府。隔柔佛海峡便是新加坡，两岸由公路和铁路相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Johor_Bahru",
    "coords": [
      103.7578,
      1.4655
    ]
  },
  "https://whc.unesco.org/en/list/1012/": {
    "ipa": "/ˌkɪnəˈbɑlu pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kinabalu Sabah Borneo Kampong Kundasang 2.jpg",
      "credit": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kinabalu_Sabah_Borneo_Kampong_Kundasang_2.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1012.webp"
    },
    "introduction": "京那巴鲁山位于婆罗洲北部。海拔与地质条件的变化使山脚雨林、山地森林和高山植被依次出现，山上分布着多种特有植物。",
    "coords": [
      116.642,
      6.147
    ]
  },
  "https://whc.unesco.org/en/list/1013/": {
    "ipa": "/ˈɡunʊŋ ˈmulu ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Mulu.JPG",
      "credit": "Juanita",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Mulu.JPG",
      "kind": "commons",
      "src": "assets/supplements/u1013.webp"
    },
    "introduction": "穆鲁山国家公园位于砂拉越。水流在石灰岩中形成庞大的洞穴与地下水道，地表则可见锋利的石灰岩尖峰。",
    "coords": [
      114.91667,
      4.13333
    ]
  },
  "https://whc.unesco.org/en/list/1255/": {
    "ipa": "/ˌtweɪfəlˈfɔnteɪn/",
    "readingNote": "Twyfelfontein 的近似读音",
    "illustration": {
      "subject": "Rock Paintig Twyfelfontein Namibia.jpg",
      "credit": "Thomas Schoch",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rock_Paintig_Twyfelfontein_Namibia.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1255.webp"
    },
    "introduction": "纳米比亚的推菲尔泉一带保存了大量岩刻。砂岩表面可辨认长颈鹿、犀牛、动物足迹等图案，记录了当地狩猎采集社群的传统。",
    "coords": [
      14.375097,
      -20.594769
    ]
  },
  "https://whc.unesco.org/en/list/1115/": {
    "ipa": "/ləˈɡunz əv nu ˌkæləˈdoʊniə rif daɪˈvɝsɪti ənd əˈsoʊsiˌeɪtɪd ˈikoʊˌsɪstəmz/",
    "illustration": {
      "subject": "Lagoons and Reefs of New Caledonia May 10, 2001.jpg",
      "credit": "the Enhanced Thematic Mapper Plus on NASA’s Landsat 7 satellite, Jesse Allen, Michon Scott.",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Lagoons_and_Reefs_of_New_Caledonia_May_10,_2001.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1115.webp"
    },
    "introduction": "新喀里多尼亚的堡礁在主岛周围围出浅海潟湖。珊瑚礁、海草床与红树林相邻，为海龟、儒艮和大量鱼类提供了不同的生活环境。",
    "coords": [
      165.047917,
      -20.49588
    ]
  },
  "https://www.geonames.org/2437798/": {
    "ipa": "/ˈzɪndɚ/",
    "illustration": {
      "subject": "Zinder-du ciel.jpg",
      "credit": "Mab.black",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Zinder-du_ciel.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2437798.webp"
    },
    "introduction": "津德尔位于尼日尔南部、萨赫勒地带。老城比尔尼的苏丹宫殿与土筑建筑保留了跨撒哈拉商路的痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Zinder",
    "coords": [
      8.9881,
      13.80716
    ]
  },
  "https://whc.unesco.org/en/list/573/": {
    "ipa": "/ɑˈir ənd ˌtɛnəˈreɪ ˈnætʃɚəl riˈzɝvz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Montagnes Bleus1.jpg",
      "credit": "Jacques Taberlet",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Montagnes_Bleus1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u573.webp"
    },
    "introduction": "尼日尔的阿伊尔山地与泰内雷沙漠相接。火山岩山体、山谷和沙丘在水分条件上差异显著，让多种沙漠植物与野生动物得以共存。",
    "coords": [
      9.662,
      19.076193
    ]
  },
  "https://www.geonames.org/2332459/": {
    "ipa": "/ˈleɪɡɑs/",
    "illustration": {
      "subject": "Skywater.jpg",
      "credit": "Ernestblinqz",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skywater.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2332459.webp"
    },
    "introduction": "拉各斯从尼日利亚西南部的潟湖岛屿向大陆扩展。桥梁连接岛区、港区和人口稠密的内陆城区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Lagos",
    "coords": [
      3.39467,
      6.45407
    ]
  },
  "https://www.geonames.org/2335204/": {
    "ipa": "/ˈkɑnoʊ/",
    "illustration": {
      "subject": "KanofromDalaHill.jpg",
      "credit": "Shiraz Chakera",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:KanofromDalaHill.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2335204.webp"
    },
    "introduction": "卡诺是尼日利亚北部的豪萨古城。城墙、染坊和市场见证了长期连接萨赫勒与撒哈拉商队的贸易网络。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kano_(city)",
    "coords": [
      8.51672,
      12.00012
    ]
  },
  "https://www.geonames.org/2339354/": {
    "ipa": "/ɪˈbɑdən/",
    "illustration": {
      "subject": "Aerial view of Ibadan from the top of Mapo Hall 1.jpg",
      "credit": "Lafemo 123",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Ibadan_from_the_top_of_Mapo_Hall_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2339354.webp"
    },
    "introduction": "伊巴丹位于尼日利亚西南部的丘陵地带。它是约鲁巴地区的重要城市，周围的可可产区曾推动当地商业发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ibadan",
    "coords": [
      3.90591,
      7.37756
    ]
  },
  "https://whc.unesco.org/en/list/1118/": {
    "ipa": "/ˈoʊʃun oʊˈʃoʊɡboʊ ˈseɪkrəd ɡroʊv/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Templo Osun3.jpg",
      "credit": "Alex Mazzeto - Jurema Oliveira ( talk ) 18:15, 16 November 2009 (UTC)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Templo_Osun3.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1118.webp"
    },
    "introduction": "奥孙圣林位于尼日利亚奥索博城郊的河岸。林中的神龛、雕塑和祭祀场地与约鲁巴人敬奉奥孙河神的传统相连。",
    "coords": [
      4.55222,
      7.75556
    ]
  },
  "https://www.geonames.org/3618030/": {
    "ipa": "/leɪˈoʊn/",
    "illustration": {
      "kind": "photo",
      "subject": "Nicaragua_Leon Catedral",
      "source": "https://www.flickr.com/photos/javier_losa/3522741729/",
      "credit": "Javier Losa",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "src": "assets/supplements/g3618030.webp"
    },
    "introduction": "尼加拉瓜的莱昂靠近太平洋火山带。今天的城区与东边湖畔的老莱昂遗址分处两地，后者保存了早期殖民城市的遗迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Le%C3%B3n%2C_Nicaragua",
    "coords": [
      -86.87862,
      12.43527
    ]
  },
  "https://whc.unesco.org/en/list/613/": {
    "ipa": "/ˈruɪnz əv leɪˈoʊn viˈɛdʒoʊ/",
    "illustration": {
      "subject": "Leon Viejo - panoramio.jpg",
      "credit": "pr47",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Leon_Viejo_-_panoramio.jpg",
      "kind": "commons",
      "src": "assets/supplements/u613.webp"
    },
    "introduction": "莱昂别霍是尼加拉瓜较早的西班牙殖民城镇遗址。地震等灾害促使居民迁往新址，旧城的街道与建筑基址保留在地下。",
    "coords": [
      -86.616336,
      12.40047
    ]
  },
  "https://www.geonames.org/2747891/": {
    "ipa": "/ˈrɑtɚˌdæm/",
    "illustration": {
      "subject": "Erasmusbrug seen from Euromast.jpg",
      "credit": "Mlefter",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Erasmusbrug_seen_from_Euromast.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2747891.webp"
    },
    "introduction": "鹿特丹是莱茵河－马斯河三角洲的港城。航道向西接入北海，货物又可沿内河转运到欧洲腹地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Rotterdam",
    "coords": [
      4.47917,
      51.9225
    ]
  },
  "https://www.geonames.org/2745912/": {
    "ipa": "/ˈjutrɛkt/",
    "illustration": {
      "subject": "Utrecht (16295236803).jpg",
      "credit": "Sebastiaan ter Burg from Utrecht, The Netherlands",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Utrecht_(16295236803).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2745912.webp"
    },
    "introduction": "乌得勒支位于荷兰中部。老运河两岸设有低于街面的码头和仓库，货物过去可以直接从船上搬入地窖。",
    "introductionSource": "https://en.wikipedia.org/wiki/Utrecht",
    "coords": [
      5.12222,
      52.09083
    ]
  },
  "https://www.geonames.org/2756253/": {
    "ipa": "/ˈaɪnthoʊvən/",
    "illustration": {
      "subject": "Centrum Eindhoven.jpg",
      "credit": "Arno van den Tillaart from Eindhoven, Netherlands",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Centrum_Eindhoven.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2756253.webp"
    },
    "introduction": "埃因霍温位于荷兰南部。飞利浦早期的灯泡工厂在这里起步，旧厂区后来转作设计与技术创新空间。",
    "introductionSource": "https://en.wikipedia.org/wiki/Eindhoven",
    "coords": [
      5.47778,
      51.44083
    ]
  },
  "https://whc.unesco.org/en/list/818/": {
    "ipa": "/mɪl ˈnɛtˌwɝk æt ˈkɪndɚdaɪk ˈɛlshaʊt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "KinderdijkMolens02.jpg",
      "credit": "Lucas Hirschegger",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:KinderdijkMolens02.jpg",
      "kind": "commons",
      "src": "assets/supplements/u818.webp"
    },
    "introduction": "荷兰金德代克的风车曾逐级将低洼圩田的水排入较高的水道。风车与堤坝、水闸和蓄水池一起构成了低地排水系统。",
    "coords": [
      4.649444,
      51.8825
    ]
  },
  "https://www.geonames.org/3161732/": {
    "ipa": "/ˈbɝɡən/",
    "illustration": {
      "subject": "00 4400 View over the store Lungegårdsvann - Bergen (Norway).jpg",
      "credit": "W. Bulach",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:00_4400_View_over_the_store_Lungeg%C3%A5rdsvann_-_Bergen_(Norway).jpg",
      "kind": "commons",
      "src": "assets/supplements/g3161732.webp"
    },
    "introduction": "卑尔根是挪威西岸港城。布吕根码头的木制商屋列在港湾一侧，记录了汉萨商人在北大西洋的贸易。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bergen",
    "coords": [
      5.32415,
      60.39299
    ]
  },
  "https://www.geonames.org/3133880/": {
    "ipa": "/ˈtrɑndhaɪm/",
    "illustration": {
      "subject": "Overview of Trondheim 2008 03.jpg",
      "credit": "Åge Hojem/Trondheim Havn from Trondheim, Norway",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Overview_of_Trondheim_2008_03.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3133880.webp"
    },
    "introduction": "特隆赫姆坐落在尼德河入峡湾处。尼达罗斯主教座堂曾吸引朝圣者，也使这里成为挪威中世纪的重要城市。",
    "introductionSource": "https://en.wikipedia.org/wiki/Trondheim",
    "coords": [
      10.39506,
      63.43049
    ]
  },
  "https://whc.unesco.org/en/list/59/": {
    "ipa": "/ˈbrɪɡən/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Bryggen, Bergen, Noruega, 2019-09-08, DD 115-117 PAN.jpg",
      "credit": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bryggen,_Bergen,_Noruega,_2019-09-08,_DD_115-117_PAN.jpg",
      "kind": "commons",
      "src": "assets/supplements/u59.webp"
    },
    "introduction": "布吕根位于挪威卑尔根的港湾边。汉萨商人曾在狭长的木屋中储藏和交易干鳕鱼，沿码头排列的尖顶屋仍保有商站格局。",
    "coords": [
      5.325066,
      60.396706
    ]
  },
  "https://www.geonames.org/1282898/": {
    "ipa": "/ˈpoʊkərə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Pokhara1.JPG",
      "credit": "जनक राज भट्ट",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pokhara1.JPG",
      "kind": "commons",
      "src": "assets/supplements/g1282898.webp"
    },
    "introduction": "博克拉位于尼泊尔中部、安纳普尔纳山群以南。费瓦湖与近处山谷相连，这里是进入喜马拉雅徒步路线的起点之一。",
    "introductionSource": "https://en.wikipedia.org/wiki/Pokhara",
    "coords": [
      83.96851,
      28.26689
    ]
  },
  "https://whc.unesco.org/en/list/284/": {
    "ipa": "/ˈtʃɪtwɑn ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Chitwan swamp.jpg",
      "credit": "Vadim Tolbatov",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chitwan_swamp.jpg",
      "kind": "commons",
      "src": "assets/supplements/u284.webp"
    },
    "introduction": "奇特旺国家公园位于尼泊尔南部特莱低地。河岸林、草地与沼泽为独角犀牛、孟加拉虎和恒河鳄提供栖息地。",
    "coords": [
      84.33333,
      27.5
    ]
  },
  "https://www.geonames.org/2193733/": {
    "ipa": "/ˈɔklənd/",
    "illustration": {
      "subject": "Auckland CBD.jpg",
      "credit": "ChewyPineapple",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Auckland_CBD.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2193733.webp"
    },
    "introduction": "奥克兰横跨新西兰北岛的一段狭窄地峡。两侧分属不同海岸的港湾，城区中还散布着火山锥。",
    "introductionSource": "https://en.wikipedia.org/wiki/Auckland",
    "coords": [
      174.76349,
      -36.84853
    ]
  },
  "https://www.geonames.org/2192362/": {
    "ipa": "/ˈkraɪsttʃɝtʃ/",
    "illustration": {
      "subject": "NZL-christchurch-peac-f-arts-c.jpg",
      "credit": "User: Bgabel at  wikivoyage shared",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:NZL-christchurch-peac-f-arts-c.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2192362.webp"
    },
    "introduction": "基督城位于新西兰南岛的坎特伯雷平原东缘。雅芳河穿过城区，南面的波特丘陵分隔市区与利特尔顿港。",
    "introductionSource": "https://en.wikipedia.org/wiki/Christchurch",
    "coords": [
      172.63333,
      -43.53333
    ]
  },
  "https://www.geonames.org/2191562/": {
    "ipa": "/dəˈnidɪn/",
    "illustration": {
      "subject": "NZL-dunedin-octogon-rath-stpauls.jpg",
      "credit": "User: Bgabel at  wikivoyage shared",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:NZL-dunedin-octogon-rath-stpauls.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2191562.webp"
    },
    "introduction": "达尼丁位于新西兰南岛东南部的奥塔哥港湾内端。十九世纪的苏格兰移民和奥塔哥淘金潮都在城中留下痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Dunedin",
    "coords": [
      170.50361,
      -45.87416
    ]
  },
  "https://whc.unesco.org/en/list/421/": {
    "ipa": "/ˈtɑŋɡərɪroʊ ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Tongariro National Park (109045641).jpeg",
      "credit": "Pol Puig Collderram",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tongariro_National_Park_(109045641).jpeg",
      "kind": "commons",
      "src": "assets/supplements/u421.webp"
    },
    "introduction": "汤加里罗国家公园位于新西兰北岛中部。活火山和熔岩地形十分醒目，多座山峰与当地毛利社群的祖源和信仰相连。",
    "coords": [
      175.650105,
      -39.146257
    ]
  },
  "https://www.geonames.org/286621/": {
    "ipa": "/səˈlɑlə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Downtown Salalah Oman.jpg",
      "credit": "StellarD",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Salalah_Oman.jpg",
      "kind": "commons",
      "src": "assets/supplements/g286621.webp"
    },
    "introduction": "塞拉莱位于阿曼南部佐法尔海岸。夏季季风给山坡带来雾雨和绿意，与阿拉伯半岛常见的干旱景观不同。",
    "introductionSource": "https://en.wikipedia.org/wiki/Salalah",
    "coords": [
      54.09237,
      17.01505
    ]
  },
  "https://www.geonames.org/286282/": {
    "ipa": "/soʊˈhɑr/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sohar-castle.jpg",
      "credit": "Blue chi at English Wikipedia",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sohar-castle.jpg",
      "kind": "commons",
      "src": "assets/supplements/g286282.webp"
    },
    "introduction": "苏哈尔面向阿曼湾，背靠哈杰尔山脉。古代港口和内陆铜矿之间的往来，见证了这一带悠久的航海贸易。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sohar",
    "coords": [
      56.70937,
      24.34745
    ]
  },
  "https://whc.unesco.org/en/list/433/": {
    "ipa": "/ˈbɑhlə fɔrt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Bahla Fort.jpg",
      "credit": "Francisco Anzola",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Bahla_Fort.jpg",
      "kind": "commons",
      "src": "assets/supplements/u433.webp"
    },
    "introduction": "巴赫莱要塞坐落在阿曼内陆的一处绿洲。土坯城墙沿山脚延伸，保护着堡垒、住宅以及依靠引水渠灌溉的椰枣园。",
    "coords": [
      57.30111,
      22.96417
    ]
  },
  "https://www.geonames.org/1174872/": {
    "ipa": "/kəˈrɑtʃi/",
    "illustration": {
      "subject": "Karachi from above.jpg",
      "credit": "Bilalhassan88",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Karachi_from_above.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1174872.webp"
    },
    "introduction": "卡拉奇位于巴基斯坦南部的阿拉伯海岸。天然港湾、铁路和制造业带动城市向周围的干旱平原扩展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Karachi",
    "coords": [
      67.0104,
      24.8608
    ]
  },
  "https://www.geonames.org/1172451/": {
    "ipa": "/ləˈhɔr/",
    "illustration": {
      "subject": "Eye Of Lahore (Minar e Pakistan) evening.jpg",
      "credit": "Lime.adeel",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Eye_Of_Lahore_(Minar_e_Pakistan)_evening.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1172451.webp"
    },
    "introduction": "拉合尔位于旁遮普地区的拉维河畔。拉合尔堡与沙利马尔花园保留了莫卧儿王朝的建筑和园林传统。",
    "introductionSource": "https://en.wikipedia.org/wiki/Lahore",
    "coords": [
      74.35071,
      31.558
    ]
  },
  "https://www.geonames.org/1179400/": {
    "ipa": "/faɪˌsɑləˈbɑd/",
    "illustration": {
      "subject": "Clocktower Faisalabad, Panorama.jpg",
      "credit": "Minhajian",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Clocktower_Faisalabad,_Panorama.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1179400.webp"
    },
    "introduction": "费萨拉巴德坐落在巴基斯坦旁遮普平原的灌溉区。棉纺工业是城市特色，老城区八条街道从钟楼向外放射。",
    "introductionSource": "https://en.wikipedia.org/wiki/Faisalabad",
    "coords": [
      73.08969,
      31.41554
    ]
  },
  "https://whc.unesco.org/en/list/138/": {
    "ipa": "/ˌɑrkiəˈlɑdʒɪkəl ˈruɪnz æt moʊˌhɛndʒoʊ ˈdɑroʊ/",
    "illustration": {
      "subject": "Mohenjodaro - view of the stupa mound.JPG",
      "credit": "Saqib Qayyum",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mohenjodaro_-_view_of_the_stupa_mound.JPG",
      "kind": "commons",
      "src": "assets/supplements/u138.webp"
    },
    "introduction": "摩亨佐达罗位于印度河流域。规整街道、砖砌住宅、排水沟和大型浴池，显示印度河文明已发展出系统的城市建设方式。",
    "coords": [
      68.138889,
      27.329167
    ]
  },
  "https://whc.unesco.org/en/list/159/": {
    "ipa": "/ˈdɛriən ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Darien National Park wikivoyage banner.jpg",
      "credit": "Mdf",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Darien_National_Park_wikivoyage_banner.jpg",
      "kind": "commons",
      "src": "assets/supplements/u159.webp"
    },
    "introduction": "达连国家公园位于巴拿马与哥伦比亚交界处。太平洋海岸的红树林向内陆雨林和山地过渡，处于中南美洲物种交流的狭长地带。",
    "coords": [
      -77.547222,
      7.736111
    ]
  },
  "https://www.geonames.org/3947322/": {
    "ipa": "/ˌɑrɛˈkipɑ/",
    "illustration": {
      "subject": "Arequipa, Plaza de Armas, 2023 (10).jpg",
      "credit": "Draceane",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Arequipa,_Plaza_de_Armas,_2023_(10).jpg",
      "kind": "commons",
      "src": "assets/supplements/g3947322.webp"
    },
    "introduction": "阿雷基帕位于秘鲁南部安第斯山麓，附近耸立着米斯蒂火山。老城区许多建筑采用浅色火山凝灰岩砌筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Arequipa",
    "coords": [
      -71.53747,
      -16.39899
    ]
  },
  "https://www.geonames.org/3941584/": {
    "ipa": "/ˈkʊskoʊ/",
    "illustration": {
      "subject": "Cusco, Sacsayhuamán - panoramio.jpg",
      "credit": "gertrudis2010",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cusco,_Sacsayhuam%C3%A1n_-_panoramio.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3941584.webp"
    },
    "introduction": "库斯科坐落在秘鲁安第斯高地，曾是印加帝国都城。老城区中，殖民时期建筑常直接建在精密咬合的印加石墙之上。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cusco",
    "coords": [
      -71.96701,
      -13.53188
    ]
  },
  "https://www.geonames.org/3691175/": {
    "ipa": "/truˈhioʊ/",
    "illustration": {
      "subject": "Freedom Monument, Trujillo.jpg",
      "credit": "Bernard Gagnon",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Freedom_Monument,_Trujillo.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3691175.webp"
    },
    "introduction": "秘鲁的特鲁希略位于太平洋沿岸干旱平原。附近的昌昌古城以大规模土筑宫墙和浮雕记录了奇穆文明。",
    "introductionSource": "https://en.wikipedia.org/wiki/Trujillo%2C_Peru",
    "coords": [
      -79.02998,
      -8.11599
    ]
  },
  "https://whc.unesco.org/en/list/330/": {
    "ipa": "/tʃɑˈvin ˌɑrkiəˈlɑdʒɪkəl saɪt/",
    "illustration": {
      "subject": "Chavin de Huantar El Castillo 06122009.jpg",
      "credit": "Dtarazona",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chavin_de_Huantar_El_Castillo_06122009.jpg",
      "kind": "commons",
      "src": "assets/supplements/u330.webp"
    },
    "introduction": "查文遗址位于秘鲁安第斯山间的河谷。石构神庙内部有狭窄通道，雕刻石碑和复杂的祭祀空间反映了查文文化的宗教生活。",
    "coords": [
      -77.178454,
      -9.592773
    ]
  },
  "https://www.geonames.org/1717512/": {
    "ipa": "/sɛˈbu ˈsɪti/",
    "illustration": {
      "subject": "Cebu Cathedral 2024-07-07.jpg",
      "credit": "LMP 2001",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cebu_Cathedral_2024-07-07.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1717512.webp"
    },
    "introduction": "宿雾市位于菲律宾宿雾岛东岸，与麦克坦岛隔水相望。老港区附近保留了西班牙殖民早期的宗教和防御遗迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cebu_City",
    "coords": [
      123.89071,
      10.31672
    ]
  },
  "https://www.geonames.org/1715348/": {
    "ipa": "/ˈdɑvaʊ ˈsɪti/",
    "illustration": {
      "subject": "Victoria Plaza Davao.JPG",
      "credit": "Pascalll",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Victoria_Plaza_Davao.JPG",
      "kind": "commons",
      "src": "assets/supplements/g1715348.webp"
    },
    "introduction": "达沃坐落在菲律宾棉兰老岛南部的达沃湾岸。港口连接周边种植区，当地以榴莲和香蕉等热带作物闻名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Davao_City",
    "coords": [
      125.61278,
      7.07306
    ]
  },
  "https://whc.unesco.org/en/list/652/": {
    "ipa": "/ˈpɔrtə prɪnˈsɛsə səbtɚˈeɪniən ˈrɪvɚ ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Puerto Princesa Underground River.jpg",
      "credit": "Mike Gonzalez",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Puerto_Princesa_Underground_River.jpg",
      "kind": "commons",
      "src": "assets/supplements/u652.webp"
    },
    "introduction": "菲律宾巴拉望岛的地下河穿过石灰岩山地后直接流入海中。靠近出口的地下河段受潮汐影响，洞厅中分布着钟乳石。",
    "coords": [
      118.916667,
      10.166667
    ]
  },
  "https://whc.unesco.org/en/list/887/": {
    "ipa": "/kʌk ˈɝli ˌæɡrəˈkʌltʃɚəl saɪt/",
    "illustration": {
      "subject": "Kuk New Guinea 2002.jpg",
      "credit": "NASA: JPL",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Kuk_New_Guinea_2002.jpg",
      "kind": "commons",
      "src": "assets/supplements/u887.webp"
    },
    "introduction": "巴布亚新几内亚高地的库克湿地保存了古代农业痕迹。地层中的土丘、沟渠和植物遗存显示，人们很早就开始排水并栽培作物。",
    "coords": [
      144.331722,
      -5.783711
    ]
  },
  "https://www.geonames.org/3094802/": {
    "ipa": "/ˈkrækaʊ/",
    "illustration": {
      "subject": "Zamek Królewski na Wawelu (1).jpg",
      "credit": "XEvansGambitx",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Zamek_Kr%C3%B3lewski_na_Wawelu_(1).jpg",
      "kind": "commons",
      "src": "assets/supplements/g3094802.webp"
    },
    "introduction": "克拉科夫位于波兰南部的维斯瓦河畔。瓦维尔山上的王宫和大教堂，见证了它作为波兰旧都的历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Krak%C3%B3w",
    "coords": [
      19.93658,
      50.06143
    ]
  },
  "https://www.geonames.org/3099434/": {
    "ipa": "/ɡəˈdænsk/",
    "illustration": {
      "subject": "Calle Dlugie Pobrzeze, Gdansk, Polonia, 2013-05-20, DD 05.jpg",
      "credit": "Diego Delso",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Calle_Dlugie_Pobrzeze,_Gdansk,_Polonia,_2013-05-20,_DD_05.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3099434.webp"
    },
    "introduction": "格但斯克是波罗的海港城。谷物曾沿维斯瓦河运到这里出海，旧港吊机和粮仓记录了这段贸易史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Gda%C5%84sk",
    "coords": [
      18.64912,
      54.35227
    ]
  },
  "https://www.geonames.org/3081368/": {
    "ipa": "/ˈvrɔtswɑf/",
    "illustration": {
      "subject": "Rynek Starego Miasta We Wroclawiu (152991773).jpeg",
      "credit": "Hrs Poland",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rynek_Starego_Miasta_We_Wroclawiu_(152991773).jpeg",
      "kind": "commons",
      "src": "assets/supplements/g3081368.webp"
    },
    "introduction": "弗罗茨瓦夫位于波兰西南部的奥得河畔。河汊分隔出多个岛屿，桥梁把主教座堂区与老市场广场一带连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Wroc%C5%82aw",
    "coords": [
      17.03006,
      51.10286
    ]
  },
  "https://whc.unesco.org/en/list/32/": {
    "ipa": "/vjɛˈlɪtʃkə ənd ˈbɔknjə rɔɪəl sɔlt maɪnz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Αλατωρυχεία Βιελίτσκα 4950.jpg",
      "credit": "C messier",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%CE%91%CE%BB%CE%B1%CF%84%CF%89%CF%81%CF%85%CF%87%CE%B5%CE%AF%CE%B1_%CE%92%CE%B9%CE%B5%CE%BB%CE%AF%CF%84%CF%83%CE%BA%CE%B1_4950.jpg",
      "kind": "commons",
      "src": "assets/supplements/u32.webp"
    },
    "introduction": "波兰南部的维利奇卡与博赫尼亚曾长期采掘岩盐。层层巷道内设有地下礼拜堂，矿工直接在盐岩中雕出了雕像与装饰。",
    "coords": [
      20.180343,
      49.977407
    ]
  },
  "https://www.geonames.org/4566880/": {
    "ipa": "/ˈpoʊnseɪ/",
    "illustration": {
      "subject": "Parque de Bombas-Ponce Puerto Rico.jpg",
      "credit": "The original uploader was Jmoliver at English Wikipedia .",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Parque_de_Bombas-Ponce_Puerto_Rico.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4566880.webp"
    },
    "introduction": "庞塞位于波多黎各南岸。港口曾向外运送咖啡和蔗糖，市中心的红黑条纹旧消防站是城市地标。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ponce_Historic_Zone",
    "coords": [
      -66.62398,
      18.01031
    ]
  },
  "https://www.geonames.org/4566385/": {
    "ipa": "/ˌmaɪəˈɡwɛs/",
    "illustration": {
      "subject": "Plaza Mayaguez.jpg",
      "credit": "Joseacaraballo",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Plaza_Mayaguez.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4566385.webp"
    },
    "introduction": "马亚圭斯位于波多黎各西海岸的海湾边。港口与内陆咖啡种植区相连，当地也以大学的工程与农业教育闻名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mayag%C3%BCez%2C_Puerto_Rico",
    "coords": [
      -67.13962,
      18.20107
    ]
  },
  "https://www.geonames.org/1877449/": {
    "ipa": "/hɑmˈhʊŋ/",
    "illustration": {
      "subject": "Hamhung-north-korea-september-2015.jpg",
      "credit": "Mario Micklisch",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Hamhung-north-korea-september-2015.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1877449.webp"
    },
    "introduction": "咸兴位于朝鲜半岛东北部的城川江平原。城区与靠海的兴南港区相连，是当地的重要工业中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Hamhung",
    "coords": [
      127.53639,
      39.91833
    ]
  },
  "https://www.geonames.org/2044757/": {
    "ipa": "/ˈtʃʌŋdʒɪn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Chongjin.jpg",
      "credit": "Raymond K. Cunningham, Jr.",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chongjin.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2044757.webp"
    },
    "introduction": "清津位于朝鲜半岛东北岸。海港与通往内陆矿区的铁路相连，钢铁工业是当地城市发展的重要背景。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chongjin",
    "coords": [
      129.77583,
      41.79556
    ]
  },
  "https://whc.unesco.org/en/list/1642/": {
    "ipa": "/maʊnt ˈkʊmɡɑŋ ˈdaɪmənd ˈmaʊntən frʌm ðə si/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "0438 - Nordkorea 2015 - Kumgang Gebirge - Kuryong Fasserfall (22543108597).jpg",
      "credit": "Uwe Brodrecht",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:0438_-_Nordkorea_2015_-_Kumgang_Gebirge_-_Kuryong_Fasserfall_(22543108597).jpg",
      "kind": "commons",
      "src": "assets/supplements/u1642.webp"
    },
    "introduction": "朝鲜半岛东部的金刚山由浅色花岗岩峰、深谷和瀑布组成。山中寺庙、石刻与隐修处记录了延续多世纪的山岳佛教传统。",
    "coords": [
      128.219583,
      38.672778
    ]
  },
  "https://www.geonames.org/2735943/": {
    "ipa": "/ˈpɔrtoʊ/",
    "illustration": {
      "subject": "Puente Don Luis I, Oporto, Portugal, 2012-05-09, DD 13.JPG",
      "credit": "Diego Delso",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Puente_Don_Luis_I,_Oporto,_Portugal,_2012-05-09,_DD_13.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2735943.webp"
    },
    "introduction": "波尔图位于葡萄牙北部的杜罗河下游。沿河上溯是葡萄产区，对岸加亚新城的酒窖则用于储存波特酒。",
    "introductionSource": "https://en.wikipedia.org/wiki/Porto",
    "coords": [
      -8.61097,
      41.1485
    ]
  },
  "https://www.geonames.org/2742032/": {
    "ipa": "/ˈbrɑɡə/",
    "illustration": {
      "subject": "Braga-Arca da Porta Nova-02-2011-gje.jpg",
      "credit": "Gerd Eichmann",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Braga-Arca_da_Porta_Nova-02-2011-gje.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2742032.webp"
    },
    "introduction": "布拉加是葡萄牙北部的历史城市。老城有中世纪主教座堂，郊外山坡上的仁慈耶稣朝圣所因层层石阶而著名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Braga",
    "coords": [
      -8.42311,
      41.5514
    ]
  },
  "https://www.geonames.org/2267827/": {
    "ipa": "/fʊnˈʃɑl/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Funchal, Praça do Município.jpg",
      "credit": "Dr. Thomas Liptak",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Funchal,_Pra%C3%A7a_do_Munic%C3%ADpio.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2267827.webp"
    },
    "introduction": "丰沙尔是马德拉岛南岸的港城。街区依火山岛山坡向上延伸，梯田、花园和港湾构成典型的岛屿景观。",
    "introductionSource": "https://en.wikipedia.org/wiki/Funchal",
    "coords": [
      -16.92547,
      32.66568
    ]
  },
  "https://whc.unesco.org/en/list/264/": {
    "ipa": "/ˈmɑnəˌstɛri əv bəˈtɑljə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Batalha September 2021-53.jpg",
      "credit": "Alvesgaspar",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Batalha_September_2021-53.jpg",
      "kind": "commons",
      "src": "assets/supplements/u264.webp"
    },
    "introduction": "葡萄牙巴塔利亚修道院为纪念阿尔茹巴罗塔战役的胜利而建。晚期哥特式结构与细密石雕相结合，部分礼拜堂至今保留着未封顶的状态。",
    "coords": [
      -8.82694,
      39.65778
    ]
  },
  "https://whc.unesco.org/en/list/648/": {
    "ipa": "/ˈdʒɛʒuɪt ˈmɪʃənz əv lɑ sænˈtisimə ˈtrɪnɪˌdæd də pɚˈɑnə ənd heɪˈsus də ˌtɑvəˈrɑŋɡɛ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "J37 730 Jesús de Tavarangüe, colegio.jpg",
      "credit": "Falk2",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:J37_730_Jes%C3%BAs_de_Tavarang%C3%BCe,_colegio.jpg",
      "kind": "commons",
      "src": "assets/supplements/u648.webp"
    },
    "introduction": "巴拉圭的特立尼达和赫苏斯两处传教聚落留下了教堂、中央广场与住宅遗迹。它们见证了耶稣会传教士与瓜拉尼人共同生活的殖民时期。",
    "coords": [
      -55.727512,
      -27.094278
    ]
  },
  "https://www.geonames.org/285066/": {
    "ipa": "/ˈhibrən/",
    "illustration": {
      "subject": "BTS Hebron Tour 280215 24.jpg",
      "credit": "Oren Rozen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:BTS_Hebron_Tour_280215_24.jpg",
      "kind": "commons",
      "src": "assets/supplements/g285066.webp"
    },
    "introduction": "希伯仑位于约旦河西岸南部的山地。老城保留着石砌市场，玻璃吹制和陶器制作是当地传统手艺。",
    "introductionSource": "https://en.wikipedia.org/wiki/Hebron",
    "coords": [
      35.0938,
      31.52935
    ]
  },
  "https://www.geonames.org/282615/": {
    "ipa": "/ˈnæbləs/",
    "illustration": {
      "subject": "البلدة القديمة - نابلس.jpg",
      "credit": "Hadi Hijjawi",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D8%A7%D9%84%D8%A8%D9%84%D8%AF%D8%A9_%D8%A7%D9%84%D9%82%D8%AF%D9%8A%D9%85%D8%A9_-_%D9%86%D8%A7%D8%A8%D9%84%D8%B3.jpg",
      "kind": "commons",
      "src": "assets/supplements/g282615.webp"
    },
    "introduction": "纳布卢斯位于约旦河西岸两座山之间的谷地。老城的集市和传统肥皂作坊，与周边橄榄种植区密切相关。",
    "introductionSource": "https://en.wikipedia.org/wiki/Nablus",
    "coords": [
      35.25444,
      32.22111
    ]
  },
  "https://whc.unesco.org/en/list/1687/": {
    "ipa": "/ˈeɪnʃənt ˈdʒɛrɪˌkoʊ tɛl ɛs ˈsʌltən/",
    "illustration": {
      "subject": "Tell es-sultan.jpg",
      "credit": "Fullo88 at Italian Wikipedia",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Tell_es-sultan.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1687.webp"
    },
    "introduction": "古耶利哥遗址位于约旦河谷的一处泉水旁。长期定居形成的土丘中叠压着早期住宅、城墙和石塔，是研究农业社会形成的重要地点。",
    "coords": [
      35.444056,
      31.871306
    ]
  },
  "https://whc.unesco.org/en/list/1529/": {
    "ipa": "/ˌtɑputɑpuɑˈtɛə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Taputapu marae Raiatea little man.jpg",
      "credit": "Kulia Petz",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Taputapu_marae_Raiatea_little_man.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1529.webp"
    },
    "introduction": "塔普塔普阿泰阿位于赖阿特阿岛岸边。石砌礼仪场地曾把来自遥远岛屿的航海者与祭司聚集在一起，是理解波利尼西亚远洋联系的重要地点。",
    "coords": [
      -151.372378,
      -16.8414
    ]
  },
  "https://whc.unesco.org/en/list/1402/": {
    "ipa": "/æl zʊˈbɑrə ˌɑrkiəˈlɑdʒɪkəl saɪt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ruins in Zubarah on a cloudy day.jpg",
      "credit": "Alex Sergeev (www.asergeev.com)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Ruins_in_Zubarah_on_a_cloudy_day.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1402.webp"
    },
    "introduction": "卡塔尔西北海岸的祖巴拉曾靠采珠和贸易繁荣。废弃后，沙层覆盖了城墙、市集和院落，留下较完整的海湾港镇遗址。",
    "coords": [
      51.029722,
      25.978056
    ]
  },
  "https://whc.unesco.org/en/list/1317/": {
    "ipa": "/ˈpitɑnz sɝks ənd rɑmˈpɑr əv riˈjunjən ˈaɪlənd/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Piton des neiges vu de la plaine des cafres.jpg",
      "credit": "Jijipowa",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Piton_des_neiges_vu_de_la_plaine_des_cafres.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1317.webp"
    },
    "introduction": "留尼汪岛的火山与流水共同塑造了岛内地貌。高耸山峰被陡壁、深沟和巨大的盆状谷地环绕，不同高度仍有原生森林分布。",
    "coords": [
      55.48,
      -21.099444
    ]
  },
  "https://www.geonames.org/681290/": {
    "ipa": "/kludʒ nəˈpoʊkə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "CJROCluj-Napoca 19.jpg",
      "credit": "Alexmandru",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:CJROCluj-Napoca_19.jpg",
      "kind": "commons",
      "src": "assets/supplements/g681290.webp"
    },
    "introduction": "克卢日-纳波卡位于罗马尼亚的特兰西瓦尼亚地区，小索梅什河穿城而过。大学和历史广场构成城市中心的重要部分。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cluj-Napoca",
    "coords": [
      23.6,
      46.76667
    ]
  },
  "https://www.geonames.org/665087/": {
    "ipa": "/ˌtimiˈʃwɑrɑ/",
    "illustration": {
      "subject": "Catedrala Romano-Catolica Timisoara.jpg",
      "credit": "Silviunastase",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Catedrala_Romano-Catolica_Timisoara.jpg",
      "kind": "commons",
      "src": "assets/supplements/g665087.webp"
    },
    "introduction": "蒂米什瓦拉位于罗马尼亚西部的巴纳特平原。贝加运河曾承担货运，老城广场保留着中欧风格的建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Timi%C8%99oara",
    "coords": [
      21.22571,
      45.75372
    ]
  },
  "https://www.geonames.org/675810/": {
    "ipa": "/jɑʃ/",
    "illustration": {
      "subject": "Palatul Culturii Iași - seara din lateral (cropped).jpg",
      "credit": "Andrei Lucian Vaida",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Palatul_Culturii_Ia%C8%99i_-_seara_din_lateral_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g675810.webp"
    },
    "introduction": "雅西坐落在罗马尼亚东北部丘陵间，曾是摩尔达维亚公国的都城。大学、修道院和文化宫构成当地的重要地标。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ia%C8%99i",
    "coords": [
      27.6,
      47.16667
    ]
  },
  "https://whc.unesco.org/en/list/588/": {
    "ipa": "/ˈdænjub ˈdɛltə/",
    "illustration": {
      "subject": "The Danube Delta Channels - Canalele Deltei Dunarii - panoramio.jpg",
      "credit": "Ioan Cepaliga",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:The_Danube_Delta_Channels_-_Canalele_Deltei_Dunarii_-_panoramio.jpg",
      "kind": "commons",
      "src": "assets/supplements/u588.webp"
    },
    "introduction": "多瑙河在汇入黑海前分成多条水道。河流搬运的泥沙不断造陆，形成芦苇荡、湖泊与沙洲，也是鹈鹕等水鸟繁殖的场所。",
    "coords": [
      29.5,
      45.08333
    ]
  },
  "https://www.geonames.org/498817/": {
    "ipa": "/sənt ˈpitɚzˌbɝɡ/",
    "illustration": {
      "subject": "Peter & Paul fortress in SPB 03.jpg",
      "credit": "Alex 'Florstein' Fedorov",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Peter_%26_Paul_fortress_in_SPB_03.jpg",
      "kind": "commons",
      "src": "assets/supplements/g498817.webp"
    },
    "introduction": "圣彼得堡位于涅瓦河三角洲，面向芬兰湾。桥梁和运河连起岛屿，冬宫等建筑记录了俄国帝都时期的历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Saint_Petersburg",
    "coords": [
      30.31413,
      59.93863
    ]
  },
  "https://www.geonames.org/1496747/": {
    "ipa": "/ˌnoʊvəsɪˈbɪrsk/",
    "illustration": {
      "subject": "Novosibirsk view.jpg",
      "credit": "Alex Polezhaev",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Novosibirsk_view.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1496747.webp"
    },
    "introduction": "新西伯利亚位于西西伯利亚的鄂毕河畔。西伯利亚大铁路在这里跨河，桥梁和铁路枢纽促成了城市的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Novosibirsk",
    "coords": [
      82.93175,
      55.02259
    ]
  },
  "https://www.geonames.org/2013348/": {
    "ipa": "/ˌvlædɪˈvɑstɑk/",
    "illustration": {
      "subject": "Views of Vladivostok (October 2024)-0 3.jpg",
      "credit": "Vyacheslav Bukharov",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Views_of_Vladivostok_(October_2024)-0_3.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2013348.webp"
    },
    "introduction": "符拉迪沃斯托克环绕金角湾而建，是俄罗斯远东港城。西伯利亚大铁路的东端在这里接上太平洋航线。",
    "introductionSource": "https://en.wikipedia.org/wiki/Vladivostok",
    "coords": [
      131.87353,
      43.10562
    ]
  },
  "https://whc.unesco.org/en/list/540/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv seɪnt ˈpitɚzbɚɡ ənd ˌriˈleɪtɪd ɡrups əv ˈmɑnjəmənts/",
    "illustration": {
      "subject": "Petersburg-square.jpg",
      "credit": "Walter Smith from Seattle, WA, USA",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Petersburg-square.jpg",
      "kind": "commons",
      "src": "assets/supplements/u540.webp"
    },
    "introduction": "圣彼得堡建在涅瓦河三角洲的岛屿与河岸上。运河、桥梁、宫殿和开阔广场构成了彼得大帝建都后逐步发展的城市格局。",
    "coords": [
      30.018329,
      59.910548
    ]
  },
  "https://whc.unesco.org/en/list/1697/": {
    "ipa": "/ˈnjʊŋɡweɪ ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sunrisenyungwe.jpg",
      "credit": "Jonkmania",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sunrisenyungwe.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1697.webp"
    },
    "introduction": "卢旺达纽恩威国家公园保留了中非山地雨林，也包括泥炭沼泽和草地。森林为黑猩猩及多种阿尔伯丁裂谷特有鸟类提供栖息地。",
    "coords": [
      29.107309,
      -2.519348
    ]
  },
  "https://www.geonames.org/105343/": {
    "ipa": "/ˈdʒɛdə/",
    "illustration": {
      "subject": "الواجهة البحرية في مدينة جدة غرب السعودية (2025).jpg",
      "credit": "Saudi Press Agency (SPA)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%A9_%D9%81%D9%8A_%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%AC%D8%AF%D8%A9_%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9_(2025).jpg",
      "kind": "commons",
      "src": "assets/supplements/g105343.webp"
    },
    "introduction": "吉达是沙特阿拉伯红海岸的港城，也是朝圣者前往麦加的传统门户。老城商宅的木制窗格有利于遮阳通风。",
    "introductionSource": "https://en.wikipedia.org/wiki/Jeddah",
    "coords": [
      39.18624,
      21.49012
    ]
  },
  "https://www.geonames.org/104515/": {
    "ipa": "/ˈmɛkə/",
    "illustration": {
      "subject": "Great Mosque of Mecca1.jpg",
      "credit": "Saudipics.com",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Mecca1.jpg",
      "kind": "commons",
      "src": "assets/supplements/g104515.webp"
    },
    "introduction": "麦加位于阿拉伯半岛西部山谷中。禁寺内的克尔白是穆斯林礼拜的朝向，也是朝觐的重要地点。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mecca",
    "coords": [
      39.82563,
      21.42664
    ]
  },
  "https://www.geonames.org/109223/": {
    "ipa": "/məˈdinə/",
    "illustration": {
      "subject": "Madeena masjid nabavi 12122008230.jpg",
      "credit": "Bluemangoa2z at Malayalam Wikipedia",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Madeena_masjid_nabavi_12122008230.jpg",
      "kind": "commons",
      "src": "assets/supplements/g109223.webp"
    },
    "introduction": "麦地那是阿拉伯半岛西部的绿洲城市。先知穆罕默德从麦加迁到这里，先知寺坐落在城中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Medina",
    "coords": [
      39.61417,
      24.46861
    ]
  },
  "https://whc.unesco.org/en/list/1293/": {
    "ipa": "/ˈhɛɡrə ˌɑrkiəˈlɑdʒɪkəl saɪt æl ˈhɪdʒr məˈdɑɪn ˈsɑlɪh/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Qasr al-Farid, Hegra (Madain Salih), 1st cent. CE, Saudi Arabia (9).jpg",
      "credit": "Richard Mortel",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Qasr_al-Farid,_Hegra_(Madain_Salih),_1st_cent._CE,_Saudi_Arabia_(9).jpg",
      "kind": "commons",
      "src": "assets/supplements/u1293.webp"
    },
    "introduction": "黑格拉位于沙特阿拉伯西北部的绿洲商路上。纳巴泰人将墓室凿进独立的砂岩山体，入口刻有柱式立面、装饰和铭文。",
    "coords": [
      37.955,
      26.783611
    ]
  },
  "https://whc.unesco.org/en/list/1073/": {
    "ipa": "/ˈdʒɛbəl ˈbɑrkəl ənd ðə saɪts əv ðə ˈnæpətə ˈridʒən/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Amun Tempel Barkal SW.jpg",
      "credit": "Bertramz",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Amun_Tempel_Barkal_SW.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1073.webp"
    },
    "introduction": "博尔戈尔山耸立于苏丹尼罗河一侧。山脚的神庙以及周边王城、墓地与金字塔，记录了库施王国的宗教与政治中心。",
    "coords": [
      31.815217,
      18.472622
    ]
  },
  "https://www.geonames.org/2244802/": {
    "ipa": "/tjɛs/",
    "illustration": {
      "subject": "La gare de Thiès.jpg",
      "credit": "Babacar Dioum",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:La_gare_de_Thi%C3%A8s.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2244802.webp"
    },
    "introduction": "捷斯位于塞内加尔首都达喀尔以东。通往沿海与内陆的铁路在这里衔接，铁路工人和维修车间构成了城市历史的一部分。",
    "introductionSource": "https://en.wikipedia.org/wiki/Thi%C3%A8s",
    "coords": [
      -16.92602,
      14.78944
    ]
  },
  "https://whc.unesco.org/en/list/26/": {
    "ipa": "/ˈaɪlənd əv ˈɡɔˈri/",
    "illustration": {
      "subject": "Île de Gorée vue de la chaloupe 15.jpg",
      "credit": "Fawaz.tairou",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%C3%8Ele_de_Gor%C3%A9e_vue_de_la_chaloupe_15.jpg",
      "kind": "commons",
      "src": "assets/supplements/u26.webp"
    },
    "introduction": "戈雷岛位于塞内加尔达喀尔近海。岛上的堡垒、商宅和囚禁设施见证了欧洲殖民竞争与跨大西洋奴隶贸易的历史。",
    "coords": [
      -17.40083,
      14.66722
    ]
  },
  "https://whc.unesco.org/en/list/1483/": {
    "ipa": "/ˈsɪŋəˌpɔr bəˈtænɪk ˈɡɑrdənz/",
    "illustration": {
      "subject": "Singapore Botanic Gardens Palm Valley.jpg",
      "credit": "Calvin teo",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Singapore_Botanic_Gardens_Palm_Valley.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1483.webp"
    },
    "introduction": "新加坡植物园是热带植物研究与引种的重要场所。园中保存雨林，在橡胶树栽培和东南亚橡胶产业发展中也曾发挥作用。",
    "coords": [
      103.816111,
      1.315278
    ]
  },
  "https://whc.unesco.org/en/list/854/": {
    "ipa": "/ist ˈrɛnəl/",
    "readingNote": "英语近似读音",
    "illustration": {
      "kind": "photo",
      "subject": "East Rennell (Solomon Islands)",
      "source": "https://whc.unesco.org/en/documents/175097/",
      "credit": "Robbert Casier · © UNESCO",
      "license": "CC BY-SA 3.0 IGO",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/igo/",
      "src": "assets/supplements/u854.jpg"
    },
    "introduction": "所罗门群岛的东伦内尔位于隆起的珊瑚环礁上。原来的潟湖如今形成带有咸味的特加诺湖，湖中散布石灰岩小岛，周围覆盖密林。",
    "coords": [
      160.33333,
      -11.68333
    ]
  },
  "https://whc.unesco.org/en/list/1746/": {
    "ipa": "/ˈɡoʊlə ˈtiwaɪ ˈkɑmplɛks/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Tiwai Island River.jpg",
      "credit": "Stephanie Zito",
      "license": "CC BY-SA 1.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/1.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tiwai_Island_River.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1746.webp"
    },
    "introduction": "塞拉利昂的戈拉雨林与莫阿河上的蒂瓦伊岛共同保护上几内亚森林。河流和林地为倭河马、灵长类和多种珍稀鸟类提供栖息地。",
    "coords": [
      -11.020306,
      7.589458
    ]
  },
  "https://www.geonames.org/3583334/": {
    "ipa": "/ˌsæntə ˈænə/",
    "illustration": {
      "subject": "ES Santa Ana 06 2011 2543.jpg",
      "credit": "Mariordo  (Mario Roberto Durán Ortiz)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:ES_Santa_Ana_06_2011_2543.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3583334.webp"
    },
    "introduction": "圣安娜位于萨尔瓦多西部，附近山坡盛产咖啡。城市广场周边的剧院和主教座堂见证了咖啡贸易带来的繁荣。",
    "introductionSource": "https://en.wikipedia.org/wiki/Santa_Ana%2C_El_Salvador",
    "coords": [
      -89.55685,
      13.98827
    ]
  },
  "https://www.geonames.org/3194360/": {
    "ipa": "/ˈnɔvi ˈsɑd/",
    "illustration": {
      "subject": "Gradska kuca u Novom Sadu 5.jpg",
      "credit": "Vanja Kovac",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Gradska_kuca_u_Novom_Sadu_5.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3194360.webp"
    },
    "introduction": "诺维萨德坐落在塞尔维亚北部的多瑙河畔。彼得罗瓦拉丁要塞位于对岸高地，俯瞰通航河道。",
    "introductionSource": "https://en.wikipedia.org/wiki/Novi_Sad",
    "coords": [
      19.83694,
      45.25167
    ]
  },
  "https://www.geonames.org/787657/": {
    "ipa": "/ˈniʃ/",
    "illustration": {
      "subject": "Nis Srbija Centar.jpg",
      "credit": "Cveleglg at Serbian Wikipedia",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Nis_Srbija_Centar.jpg",
      "kind": "commons",
      "src": "assets/supplements/g787657.webp"
    },
    "introduction": "尼什位于塞尔维亚南部的尼沙瓦河谷。通往巴尔干半岛不同方向的道路在此交会，河岸要塞保留了军事重镇的痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ni%C5%A1",
    "coords": [
      21.90333,
      43.32472
    ]
  },
  "https://whc.unesco.org/en/list/389/": {
    "ipa": "/ˈstudɛnɪtsə ˈmɑnəˌstɛri/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Studenica monastery (Manastir Studenica) - by Pudelek.jpg",
      "credit": "Pudelek (Marcin Szala)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Studenica_monastery_(Manastir_Studenica)_-_by_Pudelek.jpg",
      "kind": "commons",
      "src": "assets/supplements/u389.webp"
    },
    "introduction": "塞尔维亚的斯图德尼察修道院依山而建。白色大理石外墙结合罗马式装饰，教堂内保留了中世纪拜占庭传统的壁画。",
    "coords": [
      20.531667,
      43.486528
    ]
  },
  "https://whc.unesco.org/en/list/1808/": {
    "ipa": "/ˈboʊmə ˌbædɪŋˈɡiloʊ ˈmaɪɡrəˌtɔri ˈlænˌskeɪp/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "South Sudan WV banner.jpg",
      "credit": "USAID Africa Bureau",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:South_Sudan_WV_banner.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1808.webp"
    },
    "introduction": "南苏丹的博马与巴丁吉罗之间分布着草原、林地和季节性泛滥平原。降雨改变水草分布，大批羚羊随之在这片连通的景观中迁徙。",
    "coords": [
      33.2775,
      6.941667
    ]
  },
  "https://whc.unesco.org/en/list/1750/": {
    "ipa": "/ðə ˈrɔsəs əv saʊ toʊˈmeɪ ənd ˈprinsɪpə kəˈloʊniəl ˌæɡrɪˈkʌltʃərəl ˈsɪstəm ənd fɔrst maɪˈɡreɪʃən/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Roça S.João dos Angolares .jpg",
      "credit": "Aspegic1961",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ro%C3%A7a_S.Jo%C3%A3o_dos_Angolares_.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1750.webp"
    },
    "introduction": "圣多美和普林西比的罗萨是殖民时期种植咖啡和可可的庄园。加工设施、管理者住宅和工人住区记录了这种依赖强迫迁移与劳动的生产制度。",
    "coords": [
      6.889764,
      0.721745
    ]
  },
  "https://whc.unesco.org/en/list/940/": {
    "ipa": "/hɪˈstɔrɪk ˈɪnɚ ˈsɪti əv ˌpɑrəˈmɑrəˌboʊ/",
    "illustration": {
      "subject": "Officiers Woning Paramaribo Suriname.jpg",
      "credit": "Rafaeljantz",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Officiers_Woning_Paramaribo_Suriname.jpg",
      "kind": "commons",
      "src": "assets/supplements/u940.webp"
    },
    "introduction": "帕拉马里博老城位于苏里南河西岸。荷兰规划的街区采用当地木材建屋，木制住宅与公共建筑体现了欧洲和南美建造传统的结合。",
    "coords": [
      -55.15,
      5.82611
    ]
  },
  "https://www.geonames.org/724443/": {
    "ipa": "/ˈkoʊʃɪtseɪ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Cathedral of St. Elizabeth in Košice.jpg",
      "credit": "Ville Miettinen",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cathedral_of_St._Elizabeth_in_Ko%C5%A1ice.jpg",
      "kind": "commons",
      "src": "assets/supplements/g724443.webp"
    },
    "introduction": "科希策位于斯洛伐克东部的霍尔纳德河畔。圣伊丽莎白主教座堂坐落在狭长的老城主街上。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ko%C5%A1ice",
    "coords": [
      21.25802,
      48.71441
    ]
  },
  "https://whc.unesco.org/en/list/622/": {
    "ipa": "/ˈvʊlkɔlinjɛts/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Vlkolinec, Ružomberok, okres Ružomberok, Žilinský kraj 10.jpg",
      "credit": "Fry72",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Vlkolinec,_Ru%C5%BEomberok,_okres_Ru%C5%BEomberok,_%C5%BDilinsk%C3%BD_kraj_10.jpg",
      "kind": "commons",
      "src": "assets/supplements/u622.webp"
    },
    "introduction": "斯洛伐克的弗尔科利内茨位于山坡上，保留了传统原木住宅、柴房和木钟楼。狭长院落与周围农地展现了喀尔巴阡山地村落的布局。",
    "coords": [
      19.278333,
      49.039167
    ]
  },
  "https://whc.unesco.org/en/list/390/": {
    "ipa": "/ˈʃkɔtsjɑn keɪvz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "SkocjanskeJame 2013jpg.jpg",
      "credit": "Lander at Slovenian Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:SkocjanskeJame_2013jpg.jpg",
      "kind": "commons",
      "src": "assets/supplements/u390.webp"
    },
    "introduction": "斯科契扬溶洞位于斯洛文尼亚喀斯特地区。雷卡河潜入地下，切出巨大峡谷，洞厅、天然桥和塌陷洼地把地表与地下水系连在一起。",
    "coords": [
      14,
      45.66667
    ]
  },
  "https://www.geonames.org/2711537/": {
    "ipa": "/ˈɡɑθənbɝɡ/",
    "illustration": {
      "subject": "Göteborg 2503 stitch (28573994096).jpg",
      "credit": "Bengt Nyman from Vaxholm, Sweden",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:G%C3%B6teborg_2503_stitch_(28573994096).jpg",
      "kind": "commons",
      "src": "assets/supplements/g2711537.webp"
    },
    "introduction": "哥德堡建在约塔河入海处，是瑞典西岸港口。面向北海的海运和造船业在当地留下了码头与船坞。",
    "introductionSource": "https://en.wikipedia.org/wiki/Gothenburg",
    "coords": [
      11.96679,
      57.70716
    ]
  },
  "https://www.geonames.org/2692969/": {
    "ipa": "/ˈmælmoʊ/",
    "illustration": {
      "subject": "Centrala Malmö.jpg",
      "credit": "Johan Jönsson ( Julle )",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Centrala_Malm%C3%B6.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2692969.webp"
    },
    "introduction": "马尔默位于瑞典南端的厄勒海峡东岸。公路铁路两用的跨海通道把它与丹麦哥本哈根连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Malm%C3%B6",
    "coords": [
      13.00073,
      55.60587
    ]
  },
  "https://whc.unesco.org/en/list/557/": {
    "ipa": "/rɑk ˈkɑrvɪŋz ɪn ˈtɑnʊm/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Tanum 4 carvings.jpg",
      "credit": "Danapit",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tanum_4_carvings.jpg",
      "kind": "commons",
      "src": "assets/supplements/u557.webp"
    },
    "introduction": "瑞典西部的塔努姆岩刻描绘了船只、车辆、动物与人物。雕刻时当地海岸线比今天更靠近岩面，为理解青铜时代的航行和生活提供了线索。",
    "coords": [
      11.34111,
      58.70111
    ]
  },
  "https://whc.unesco.org/en/list/185/": {
    "ipa": "/ælˈdæbrə ˈæˌtɑl/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Seychelles outer islands 25.08.2009 10-19-35.jpg",
      "credit": "Simisa",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Seychelles_outer_islands_25.08.2009_10-19-35.jpg",
      "kind": "commons",
      "src": "assets/supplements/u185.webp"
    },
    "introduction": "阿尔达布拉是一座偏远的珊瑚环礁，狭窄水道把中央潟湖与印度洋相连。岛上生活着规模很大的野生阿尔达布拉象龟种群。",
    "coords": [
      46.416667,
      -9.416667
    ]
  },
  "https://www.geonames.org/170063/": {
    "ipa": "/əˈlɛpoʊ/",
    "illustration": {
      "subject": "Aleppo, View of the city, Syria.jpg",
      "credit": "© Vyacheslav Argenberg",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aleppo,_View_of_the_city,_Syria.jpg",
      "kind": "commons",
      "src": "assets/supplements/g170063.webp"
    },
    "introduction": "阿勒颇坐落在叙利亚北部古商路交会处。高地上的城堡和脚下的集市，记录了商队贸易与城市防御的关系。",
    "introductionSource": "https://en.wikipedia.org/wiki/Aleppo",
    "coords": [
      37.16117,
      36.20124
    ]
  },
  "https://www.geonames.org/169577/": {
    "ipa": "/hɑms/",
    "illustration": {
      "subject": "Homs syria3.JPG",
      "credit": "No machine-readable author provided. Ss6sam6 assumed (based on copyright claims).",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Homs_syria3.JPG",
      "kind": "commons",
      "src": "assets/supplements/g169577.webp"
    },
    "introduction": "霍姆斯位于叙利亚西部的奥龙特斯河畔。附近山地间的通道把内陆平原与地中海岸联系起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Homs",
    "coords": [
      36.72559,
      34.72405
    ]
  },
  "https://whc.unesco.org/en/list/21/": {
    "ipa": "/ˈeɪnʃənt ˈsɪti əv əˈlɛpoʊ/",
    "illustration": {
      "subject": "Aleppo 03.jpg",
      "credit": "Bernard Gagnon",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aleppo_03.jpg",
      "kind": "commons",
      "src": "assets/supplements/u21.webp"
    },
    "introduction": "叙利亚阿勒颇古城环绕山丘上的城堡发展。带顶市场、客栈和清真寺记录了它在地中海与西亚内陆商路之间的枢纽地位。",
    "coords": [
      37.162778,
      36.199167
    ]
  },
  "https://whc.unesco.org/en/list/1475/": {
    "ipa": "/ˈɛnədi ˈmæsɪf ˈnætʃɚəl ənd ˈkʌltʃɚəl ˈlænˌskeɪp/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "24 Kamele ziehen zur Wasserstelle im Ennedi-Gebirge im Tschad.jpg",
      "credit": "Desertman",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:24_Kamele_ziehen_zur_Wasserstelle_im_Ennedi-Gebirge_im_Tschad.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1475.webp"
    },
    "introduction": "乍得恩内迪高原上的砂岩经风水侵蚀形成石拱、岩柱和峡谷。崖壁上的岩画描绘了动物和人群，也记录了撒哈拉环境的变迁。",
    "coords": [
      21.862778,
      17.041667
    ]
  },
  "https://www.geonames.org/1153671/": {
    "ipa": "/ˌtʃjɑŋ ˈmaɪ/",
    "illustration": {
      "subject": "Panoramic view of Chiang Mai City.jpg",
      "credit": "Supanut Arunoprayote",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Chiang_Mai_City.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1153671.webp"
    },
    "introduction": "清迈位于泰国北部的宾河谷地，曾是兰纳王国的都城。方形护城河圈出老城边界，城内分布着多座寺院。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chiang_Mai",
    "coords": [
      98.98468,
      18.79038
    ]
  },
  "https://www.geonames.org/1151254/": {
    "ipa": "/puˈkɛt/",
    "illustration": {
      "subject": "Phuket City.jpg",
      "credit": "Myinternationalwikipedia",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Phuket_City.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1151254.webp"
    },
    "introduction": "普吉市位于普吉岛东南部。老城区的骑楼店屋记录了锡矿贸易和华人移民的历史，海滨度假区多在岛的另一侧。",
    "introductionSource": "https://en.wikipedia.org/wiki/Phuket_(city)",
    "coords": [
      98.3981,
      7.89059
    ]
  },
  "https://whc.unesco.org/en/list/574/": {
    "ipa": "/hɪˈstɔrɪk taʊn əv ˌsʊkoʊˈtaɪ ənd əˈsoʊsiˌeɪtɪd hɪˈstɔrɪk taʊnz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sukhothai historical park1.jpg",
      "credit": "Ahoerstemeier",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Sukhothai_historical_park1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u574.webp"
    },
    "introduction": "泰国素可泰及其周边古城保存了城墙、佛塔和水利工程。蓄水池、堤坝与水渠曾一起为城市生活和周围农田供水。",
    "coords": [
      99.667878,
      16.980029
    ]
  },
  "https://www.geonames.org/1514879/": {
    "ipa": "/huˈdʒænd/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "View to Khujand.JPG",
      "credit": "User:EH",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:View_to_Khujand.JPG",
      "kind": "commons",
      "src": "assets/supplements/g1514879.webp"
    },
    "introduction": "苦盏位于塔吉克斯坦北部、费尔干纳谷地西缘。锡尔河穿城而过，河岸要塞曾守护沿河商路。",
    "introductionSource": "https://en.wikipedia.org/wiki/Khujand",
    "coords": [
      69.62216,
      40.28256
    ]
  },
  "https://whc.unesco.org/en/list/1685/": {
    "ipa": "/tuˈɡaɪ ˈfɔrəsts əv ðə tɪˈɡroʊvəyə ˈbɑlkə ˈneɪtʃɚ riˈzɝv/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Дарёкул-1.jpg",
      "credit": "Мухаммадсолех Оев",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%94%D0%B0%D1%80%D1%91%D0%BA%D1%83%D0%BB-1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1685.webp"
    },
    "introduction": "塔吉克斯坦西南部的托喀依林生长在河流泛滥平原上。河水滋养的胡杨林与周边沙漠形成鲜明对照，是中亚干旱地区珍贵的河岸森林。",
    "coords": [
      68.341389,
      37.204722
    ]
  },
  "https://www.geonames.org/1219649/": {
    "ipa": "/ˌtʊrkmənɑˈbɑt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Центр Туркменабада.jpg",
      "credit": "Eldar Yagmurov",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%A6%D0%B5%D0%BD%D1%82%D1%80_%D0%A2%D1%83%D1%80%D0%BA%D0%BC%D0%B5%D0%BD%D0%B0%D0%B1%D0%B0%D0%B4%D0%B0.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1219649.webp"
    },
    "introduction": "土库曼纳巴德位于阿姆河畔。跨河渡口和后来的铁路把卡拉库姆沙漠西侧与中亚河中地区连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/T%C3%BCrkmenabat",
    "coords": [
      63.57861,
      39.07328
    ]
  },
  "https://whc.unesco.org/en/list/886/": {
    "ipa": "/steɪt hɪˈstɔrɪkəl ənd ˈkʌltʃɚəl pɑrk ˈeɪnʃənt mɝv/",
    "illustration": {
      "subject": "Merv City Walls (10) (44747325714).jpg",
      "credit": "Hans Birger Nilsen",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Merv_City_Walls_(10)_(44747325714).jpg",
      "kind": "commons",
      "src": "assets/supplements/u886.webp"
    },
    "introduction": "梅尔夫是土库曼斯坦穆尔加布河绿洲中的古城群。历代城市的城墙在相邻地点分别留下遗迹，记录了丝路商贸中心多次迁建的过程。",
    "coords": [
      62.132778,
      37.794794
    ]
  },
  "https://www.geonames.org/2467454/": {
    "ipa": "/səˈfæks/",
    "illustration": {
      "subject": "Murailles de sfax vue casbah sfax avenue ali balhaouane.jpg",
      "credit": "Csisc",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Murailles_de_sfax_vue_casbah_sfax_avenue_ali_balhaouane.jpg",
      "kind": "commons",
      "src": "assets/supplements/g2467454.webp"
    },
    "introduction": "斯法克斯位于突尼斯东岸。城墙围起传统老城，港口长期向外运送周围橄榄产区的产品。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sfax",
    "coords": [
      10.76028,
      34.74056
    ]
  },
  "https://www.geonames.org/2464915/": {
    "ipa": "/sus/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sousse Kasbah.JPG",
      "credit": "BishkekRocks 15:01, 29 December 2005 (UTC)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Sousse_Kasbah.JPG",
      "kind": "commons",
      "src": "assets/supplements/g2464915.webp"
    },
    "introduction": "苏塞坐落在突尼斯东海岸。老城临近港湾，城墙与兼具防御功能的里巴特修道堡见证了中世纪的海防体系。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sousse",
    "coords": [
      10.63699,
      35.82539
    ]
  },
  "https://whc.unesco.org/en/list/37/": {
    "ipa": "/ˌɑrkiəˈlɑdʒɪkəl saɪt əv ˈkɑrθədʒ/",
    "illustration": {
      "subject": "Archaeological Site of Carthage-130237.jpg",
      "credit": "Christian Manhart",
      "license": "CC BY-SA 3.0 igo",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/igo/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Archaeological_Site_of_Carthage-130237.jpg",
      "kind": "commons",
      "src": "assets/supplements/u37.webp"
    },
    "introduction": "迦太基坐落在今天突尼斯市附近的海岸。腓尼基人建立的港口曾是西地中海的强权中心，城址上还保存着后来罗马城市的遗迹。",
    "coords": [
      10.328122,
      36.851658
    ]
  },
  "https://www.geonames.org/745044/": {
    "ipa": "/ˌɪstænˈbʊl/",
    "illustration": {
      "subject": "Historical peninsula and modern skyline of Istanbul.jpg",
      "credit": "Hunanuk",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Historical_peninsula_and_modern_skyline_of_Istanbul.jpg",
      "kind": "commons",
      "src": "assets/supplements/g745044.webp"
    },
    "introduction": "伊斯坦布尔跨越博斯普鲁斯海峡，两岸分属欧洲和亚洲。金角湾南侧的历史半岛曾是拜占庭与奥斯曼帝国的都城核心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Istanbul",
    "coords": [
      28.94966,
      41.01384
    ]
  },
  "https://www.geonames.org/311046/": {
    "ipa": "/ɪzˈmɪr/",
    "illustration": {
      "subject": "Izmir (15383066346).jpg",
      "credit": "Rafaela Ely",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Izmir_(15383066346).jpg",
      "kind": "commons",
      "src": "assets/supplements/g311046.webp"
    },
    "introduction": "伊兹密尔位于土耳其西部爱琴海的一处深湾内。它古称士麦那，港口长期把安纳托利亚内陆与地中海航线联系起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/%C4%B0zmir",
    "coords": [
      27.13838,
      38.41273
    ]
  },
  "https://www.geonames.org/323777/": {
    "ipa": "/ˌɑntəlˈjɑ/",
    "illustration": {
      "subject": "Antalya city.jpg",
      "credit": "Lower Duden Falls.jpg:Saffron Blaze\nYivli Minaret Mosque Antalya.jpg:Saffron Blaze\nAntalya dusk.JPG:Mbilgen\nAntalyabeach.JPG:دانقولا\nHadrianstor Antalya.JPG:Elelicht Antalya - Hidirlik Tower.jpg:Imehling",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Antalya_city.jpg",
      "kind": "commons",
      "src": "assets/supplements/g323777.webp"
    },
    "introduction": "安塔利亚位于土耳其南部地中海岸。卡莱伊奇老城围绕古港展开，城区后方可见托罗斯山脉。",
    "introductionSource": "https://en.wikipedia.org/wiki/Antalya",
    "coords": [
      30.69556,
      36.90812
    ]
  },
  "https://whc.unesco.org/en/list/357/": {
    "ipa": "/ˈɡɝɛmeɪ ˈnæʃənəl pɑrk ənd ðə rɑk saɪts əv kæpəˈdoʊʃə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Vallegoreme2.jpg",
      "credit": "Samoano",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Vallegoreme2.jpg",
      "kind": "commons",
      "src": "assets/supplements/u357.webp"
    },
    "introduction": "帕姆卡莱的温泉水沿坡流淌，析出碳酸钙，逐层长成白色梯田。旁边的希拉波利斯古城保留了利用温泉建造的浴场和其他建筑。",
    "coords": [
      34.898873,
      38.525063
    ]
  },
  "https://www.sunmoonlake.gov.tw/en/guides/ArticlesFull?a=32": {
    "ipa": "/sʌn mun leɪk/",
    "illustration": {
      "subject": "Sun Moon Lake, Taiwan 20230202.jpg",
      "credit": "Ken Marshall",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sun_Moon_Lake,_Taiwan_20230202.jpg",
      "kind": "commons",
      "src": "assets/supplements/twn.webp"
    },
    "introduction": "日月潭位于台湾中部南投的山间盆地。湖畔有邵族聚落，拉鲁岛是其传统圣地，近代水利工程又改变了湖面的范围。",
    "coords": [
      120.916667,
      23.866667
    ],
    "coordSource": "https://en.wikipedia.org/wiki/Sun_Moon_Lake"
  },
  "https://www.geonames.org/1673820/": {
    "ipa": "/ˌkaʊ ˈʃjʊŋ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kaohsiung Skyline 2020.jpg",
      "credit": "毛貓大少爺",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kaohsiung_Skyline_2020.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1673820.webp"
    },
    "introduction": "高雄位于台湾岛西南部。狭长的旗津岛为港湾遮蔽风浪，旧码头与仓库记录了港口工业的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kaohsiung",
    "coords": [
      120.31333,
      22.61626
    ]
  },
  "https://www.geonames.org/1668399/": {
    "ipa": "/ˌtaɪˈdʒʊŋ/",
    "illustration": {
      "subject": "Taichung skyline.png",
      "credit": "毛貓大少爺 from Taipei, Taiwan",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Taichung_skyline.png",
      "kind": "commons",
      "src": "assets/supplements/g1668399.webp"
    },
    "introduction": "台中位于台湾岛西部的台中盆地。市区向西联系海岸港区，向东则沿河谷进入中央山地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Taichung",
    "coords": [
      120.6839,
      24.1469
    ]
  },
  "https://www.geonames.org/1668355/": {
    "ipa": "/ˌtaɪˈnɑn/",
    "illustration": {
      "subject": "Downtown Tainan(2012).jpg",
      "credit": "Mersh",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Tainan(2012).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1668355.webp"
    },
    "introduction": "台南位于台湾岛西南平原。安平旧港、赤嵌楼和传统街巷保存着早期贸易与城市发展的痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tainan",
    "coords": [
      120.20507,
      22.99259
    ]
  },
  "https://www.geonames.org/152224/": {
    "ipa": "/ˈmwɑnzə/",
    "illustration": {
      "subject": "Mwanza from Capri Point, Tanzania.jpg",
      "credit": "Jonathan Stonehouse",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mwanza_from_Capri_Point,_Tanzania.jpg",
      "kind": "commons",
      "src": "assets/supplements/g152224.webp"
    },
    "introduction": "姆万扎位于维多利亚湖南岸。花岗岩巨石散落在湖边和山坡，渔业与湖上运输支撑着城市生活。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mwanza",
    "coords": [
      32.9,
      -2.51667
    ]
  },
  "https://www.geonames.org/161325/": {
    "ipa": "/əˈruʃə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Arusha, Tanzania (Explored) - Flickr - romanboed.jpg",
      "credit": "Roman Boed from The Netherlands",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Arusha,_Tanzania_(Explored)_-_Flickr_-_romanboed.jpg",
      "kind": "commons",
      "src": "assets/supplements/g161325.webp"
    },
    "introduction": "阿鲁沙坐落在坦桑尼亚北部的梅鲁山麓，是前往周边火山高地和野生动物保护区的重要出发地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Arusha",
    "coords": [
      36.68333,
      -3.36667
    ]
  },
  "https://whc.unesco.org/en/list/156/": {
    "ipa": "/ˌsɛrənˈɡɛti ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Serengeti-Landscape-2012.JPG",
      "credit": "Bjørn Christian Tørrissen",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Serengeti-Landscape-2012.JPG",
      "kind": "commons",
      "src": "assets/supplements/u156.webp"
    },
    "introduction": "塞伦盖蒂位于坦桑尼亚北部。角马、斑马等兽群随季节性降雨迁徙，在短草平原、疏林与邻近保护区之间寻找新生草场。",
    "coords": [
      34.81,
      -2.691
    ]
  },
  "https://www.geonames.org/233114/": {
    "ipa": "/ˈdʒɪndʒə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Jinja PICT0177.JPG",
      "credit": "Ina96",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Jinja_PICT0177.JPG",
      "kind": "commons",
      "src": "assets/supplements/g233114.webp"
    },
    "introduction": "金贾位于乌干达东南部，维多利亚湖的湖水从附近流入维多利亚尼罗河。河流落差也被用于水力发电。",
    "introductionSource": "https://en.wikipedia.org/wiki/Jinja%2C_Uganda",
    "coords": [
      33.20317,
      0.43902
    ]
  },
  "https://whc.unesco.org/en/list/684/": {
    "ipa": "/ˌrwɛnzˈɔri ˈmaʊntənz ˈnæʃənəl pɑrk/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ruwenpflanzen.jpg",
      "credit": "Manuel Werner",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Ruwenpflanzen.jpg",
      "kind": "commons",
      "src": "assets/supplements/u684.webp"
    },
    "introduction": "鲁文佐里山地位于乌干达与刚果民主共和国边境。山坡上的植被从森林过渡到高山湿地，巨型半边莲等植物适应了寒冷潮湿的环境。",
    "coords": [
      29.924167,
      0.223611
    ]
  },
  "https://www.geonames.org/706483/": {
    "ipa": "/ˈkɑrkɪv/",
    "illustration": {
      "subject": "Успенський собор взимку, аерофото.jpg",
      "credit": "Ekaterina Polischuk",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%B2%D0%B7%D0%B8%D0%BC%D0%BA%D1%83,_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE.jpg",
      "kind": "commons",
      "src": "assets/supplements/g706483.webp"
    },
    "introduction": "哈尔科夫位于乌克兰东北部，多条河流在此交会。机械制造、大学和科研机构长期在城中集聚。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kharkiv",
    "coords": [
      36.25475,
      49.98177
    ]
  },
  "https://www.geonames.org/698740/": {
    "ipa": "/oʊˈdɛsə/",
    "illustration": {
      "subject": "Воронцовський маяк 17.jpg",
      "credit": "Nata Naval",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B0%D1%8F%D0%BA_17.jpg",
      "kind": "commons",
      "src": "assets/supplements/g698740.webp"
    },
    "introduction": "敖德萨面向黑海，旧城坐落在港口上方的台地。滨海大阶梯把高处的街区与下方港区连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Odesa",
    "coords": [
      30.74383,
      46.48572
    ]
  },
  "https://www.geonames.org/702550/": {
    "ipa": "/ləˈviv/",
    "illustration": {
      "subject": "Lwów - Widok z wieży ratuszowej 01.jpg",
      "credit": "Lestat (Jan Mehlich)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Lw%C3%B3w_-_Widok_z_wie%C5%BCy_ratuszowej_01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g702550.webp"
    },
    "introduction": "利沃夫位于乌克兰西部，古商路把它与中欧各地相连。市场广场周围保留着不同社群建造的教堂和商宅。",
    "introductionSource": "https://en.wikipedia.org/wiki/Lviv",
    "coords": [
      24.02324,
      49.83826
    ]
  },
  "https://whc.unesco.org/en/list/865/": {
    "ipa": "/ləˈviv ðə ɑnˈsɑmbəl əv ðə hɪˈstɔrɪk ˈsɛntɚ/",
    "illustration": {
      "subject": "1 Market Square, Lviv (05).jpg",
      "credit": "Aeou",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:1_Market_Square,_Lviv_(05).jpg",
      "kind": "commons",
      "src": "assets/supplements/u865.webp"
    },
    "introduction": "利沃夫老城位于中东欧贸易路线的交汇地带。广场周边的住宅与不同社群的教堂，记录了多种建筑传统在此并存的历史。",
    "coords": [
      24.023194,
      49.840139
    ]
  },
  "https://www.geonames.org/3440939/": {
    "ipa": "/ˈpʊntə dɛl ˈɛsteɪ/",
    "illustration": {
      "subject": "Panorama Punta Drone - 200510-0899-jikatu-Pano.jpg",
      "credit": "Jimmy Baikovicius",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Panorama_Punta_Drone_-_200510-0899-jikatu-Pano.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3440939.webp"
    },
    "introduction": "埃斯特角城位于乌拉圭南岸的一段半岛。西侧较平静的海滩与东侧迎向大西洋涌浪的海岸紧邻。",
    "introductionSource": "https://en.wikipedia.org/wiki/Punta_del_Este",
    "coords": [
      -54.93382,
      -34.94747
    ]
  },
  "https://whc.unesco.org/en/list/747/": {
    "ipa": "/hɪˈstɔrɪk ˈkwɔrtɚ əv ðə ˈsɪti əv kəˈloʊniə dɛl ˌsækrəˈmɛntoʊ/",
    "illustration": {
      "subject": "ColoniaSacramento.JPG",
      "credit": "I, Fsolda",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:ColoniaSacramento.JPG",
      "kind": "commons",
      "src": "assets/supplements/u747.webp"
    },
    "introduction": "乌拉圭的科洛尼亚－德尔萨克拉门托位于拉普拉塔河口，隔水与布宜诺斯艾利斯相望。葡萄牙与西班牙轮番控制港口，留下不同的街道布局。",
    "coords": [
      -57.849898,
      -34.47119
    ]
  },
  "https://www.geonames.org/5879400/": {
    "ipa": "/ˈæŋkɚɪdʒ/",
    "illustration": {
      "subject": "Anchorage on an April evening.jpg",
      "credit": "Frank K. from Anchorage, Alaska, USA",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Anchorage_on_an_April_evening.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5879400.webp"
    },
    "introduction": "安克雷奇位于阿拉斯加中南部的库克湾边缘，背靠楚加奇山脉。铁路和航空把这座城市与广阔的内陆连接起来。",
    "introductionSource": "https://en.wikipedia.org/wiki/Anchorage%2C_Alaska",
    "coords": [
      -149.90028,
      61.21806
    ]
  },
  "https://www.geonames.org/4049979/": {
    "ipa": "/ˈbɝmɪŋhæm/",
    "illustration": {
      "subject": "Birmingham's skyline from it's highest point.jpg",
      "credit": "acnatta/Andre Natta profile",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Birmingham%27s_skyline_from_it%27s_highest_point.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4049979.webp"
    },
    "introduction": "阿拉巴马州的伯明翰靠近铁矿、煤和石灰石产地，因此发展出钢铁工业。当地也是美国民权运动的重要历史现场。",
    "introductionSource": "https://en.wikipedia.org/wiki/Birmingham%2C_Alabama",
    "coords": [
      -86.80249,
      33.52066
    ]
  },
  "https://www.geonames.org/4076598/": {
    "ipa": "/moʊˈbil/",
    "illustration": {
      "subject": "Mobile, Alabama skyline.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mobile,_Alabama_skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4076598.webp"
    },
    "introduction": "莫比尔位于阿拉巴马州南部的莫比尔湾顶端。河流把内陆货物送入港湾，再转上墨西哥湾的海运航线。",
    "introductionSource": "https://en.wikipedia.org/wiki/Mobile%2C_Alabama",
    "coords": [
      -88.04305,
      30.69436
    ]
  },
  "https://www.geonames.org/5318313/": {
    "ipa": "/ˈtusɑn/",
    "illustration": {
      "subject": "CatalinasAndTucsonAZ.jpg",
      "credit": "unknown; cleaned up, rotated and levels adjustment by Howcheng .",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:CatalinasAndTucsonAZ.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5318313.webp"
    },
    "introduction": "图森坐落在亚利桑那州南部的索诺兰沙漠盆地。周围山坡生长着高大的巨人柱仙人掌。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tucson%2C_Arizona",
    "coords": [
      -110.92648,
      32.22174
    ]
  },
  "https://www.geonames.org/5368361/": {
    "ipa": "/lɔs ˈændʒələs/",
    "illustration": {
      "subject": "Los Angeles with Mount Baldy.jpg",
      "credit": "Alek Leckszas",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Los_Angeles_with_Mount_Baldy.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5368361.webp"
    },
    "introduction": "洛杉矶从南加州沿海盆地延伸到多个山谷。好莱坞的电影工业与南面的太平洋港区共同塑造了这座城市。",
    "introductionSource": "https://en.wikipedia.org/wiki/Los_Angeles",
    "coords": [
      -118.24368,
      34.05223
    ]
  },
  "https://www.geonames.org/5391959/": {
    "ipa": "/ˌsæn frənˈsɪskoʊ/",
    "illustration": {
      "subject": "San Francisco from the Marin Headlands in March 2019.jpg",
      "credit": "Lightandtruth",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5391959.webp"
    },
    "introduction": "旧金山位于太平洋与旧金山湾之间的半岛北端。金门海峡是海湾的出口，跨海大桥连接两岸丘陵。",
    "introductionSource": "https://en.wikipedia.org/wiki/San_Francisco",
    "coords": [
      -122.41942,
      37.77493
    ]
  },
  "https://www.geonames.org/5391811/": {
    "ipa": "/ˌsæn diˈeɪɡoʊ/",
    "illustration": {
      "subject": "San Diego skyline 18 (cropped).jpg",
      "credit": "Boatguy619",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:San_Diego_skyline_18_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g5391811.webp"
    },
    "introduction": "圣迭戈坐落在加州南端的天然海湾边，靠近美墨边界。海军港区、渔港与海滨社区共享这片有半岛屏障的水域。",
    "introductionSource": "https://en.wikipedia.org/wiki/San_Diego",
    "coords": [
      -117.16472,
      32.71571
    ]
  },
  "https://whc.unesco.org/en/list/308/": {
    "ipa": "/joʊˈsɛmɪti ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Half Dome with Eastern Yosemite Valley (50MP).jpg",
      "credit": "Thomas Wolf, www.foto-tw.de",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Half_Dome_with_Eastern_Yosemite_Valley_(50MP).jpg",
      "kind": "commons",
      "src": "assets/supplements/u308.webp"
    },
    "introduction": "优胜美地位于加利福尼亚州内华达山脉。冰川扩大了花岗岩河谷，形成陡壁、悬谷和瀑布，谷底可见酋长岩等巨型岩壁。",
    "coords": [
      -119.596667,
      37.746111
    ]
  },
  "https://www.geonames.org/5417598/": {
    "ipa": "/ˌkɑlɚˈædoʊ sprɪŋz/",
    "illustration": {
      "subject": "CC COSPRINGS.jpg",
      "credit": "The original uploader was Postoak at English Wikipedia .",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:CC_COSPRINGS.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5417598.webp"
    },
    "introduction": "科罗拉多斯普林斯位于落基山脉东麓。派克峰耸立在西侧，附近的众神花园保留着直立的红色砂岩层。",
    "introductionSource": "https://en.wikipedia.org/wiki/Colorado_Springs%2C_Colorado",
    "coords": [
      -104.82136,
      38.83388
    ]
  },
  "https://whc.unesco.org/en/list/27/": {
    "ipa": "/ˈmeɪsə ˈvɝdi ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Mesa Verde.jpg",
      "credit": "Elaine from Sheffield, England",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Mesa_Verde.jpg",
      "kind": "commons",
      "src": "assets/supplements/u27.webp"
    },
    "introduction": "梅萨维德位于科罗拉多州西南部的台地。古代普韦布洛人利用砂岩崖壁的凹处建造多层石屋，居住区与台地上的农地相连。",
    "coords": [
      -108.485556,
      37.261667
    ]
  },
  "https://www.geonames.org/4839366/": {
    "ipa": "/nu ˈheɪvən/",
    "illustration": {
      "subject": "New Haven, Connecticut skyline (cropped).jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:New_Haven,_Connecticut_skyline_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4839366.webp"
    },
    "introduction": "纽黑文是康涅狄格州面向长岛海峡的港城。早期规划以九个街区围绕公共绿地展开，耶鲁大学校园紧邻绿地。",
    "introductionSource": "https://en.wikipedia.org/wiki/New_Haven%2C_Connecticut",
    "coords": [
      -72.92816,
      41.30815
    ]
  },
  "https://www.geonames.org/4145381/": {
    "ipa": "/ˈwɪlmɪŋtən/",
    "illustration": {
      "subject": "Wilmington Delaware skyline.jpg",
      "credit": "Tim Kiser ( User:Malepheasant )",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Wilmington_Delaware_skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4145381.webp"
    },
    "introduction": "特拉华州的威尔明顿位于克里斯蒂娜河与布兰迪万溪交会一带。溪流的水力曾驱动磨坊、造纸和火药生产。",
    "introductionSource": "https://en.wikipedia.org/wiki/Wilmington%2C_Delaware",
    "coords": [
      -75.54659,
      39.74595
    ]
  },
  "https://www.geonames.org/4164138/": {
    "ipa": "/maɪˈæmi/",
    "illustration": {
      "subject": "Downtown Miami aerial 2008.jpg",
      "credit": "Marc Averette",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Miami_aerial_2008.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4164138.webp"
    },
    "introduction": "迈阿密位于佛罗里达州东南部的比斯坎湾西岸。海湾对面是迈阿密海滩，两地分属不同城市。",
    "introductionSource": "https://en.wikipedia.org/wiki/Miami",
    "coords": [
      -80.19366,
      25.77427
    ]
  },
  "https://www.geonames.org/4174757/": {
    "ipa": "/ˈtæmpə/",
    "illustration": {
      "subject": "Downtown Tampa, Florida.jpg",
      "credit": "Clément Bardot",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Tampa,_Florida.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4174757.webp"
    },
    "introduction": "坦帕坐落在佛罗里达半岛西岸的坦帕湾边。伊博城街区由雪茄制造业和来自古巴等地的移民共同塑造。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tampa%2C_Florida",
    "coords": [
      -82.45843,
      27.94752
    ]
  },
  "https://www.geonames.org/4167147/": {
    "ipa": "/ɔrˈlændoʊ/",
    "illustration": {
      "subject": "Orlando, Florida (cropped).jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Orlando,_Florida_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4167147.webp"
    },
    "introduction": "奥兰多位于佛罗里达半岛中部的湖泊地带。周边大型主题公园带动旅游业，市中心则环绕伊奥拉湖展开。",
    "introductionSource": "https://en.wikipedia.org/wiki/Orlando%2C_Florida",
    "coords": [
      -81.37924,
      28.53834
    ]
  },
  "https://whc.unesco.org/en/list/76/": {
    "ipa": "/ˈɛvɚˌɡleɪdz ˈnæʃənəl pɑrk/",
    "illustration": {
      "subject": "Sunset over the River of Grass, NPSphoto, G.Gardner (9255157507).jpg",
      "credit": "Everglades NPS from Homestead, Florida, United States",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Sunset_over_the_River_of_Grass,_NPSphoto,_G.Gardner_(9255157507).jpg",
      "kind": "commons",
      "src": "assets/supplements/u76.webp"
    },
    "introduction": "佛罗里达大沼泽地的浅水缓慢漫过宽广的锯齿草湿地。淡水向南逐渐进入红树林和近岸咸水区，形成连续变化的湿地环境。",
    "coords": [
      -80.996389,
      25.554444
    ]
  },
  "https://www.geonames.org/4221552/": {
    "ipa": "/səˈvænə/",
    "illustration": {
      "subject": "SavannahRooftopViewNW20140422.jpg",
      "credit": "RCraig09",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:SavannahRooftopViewNW20140422.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4221552.webp"
    },
    "introduction": "萨凡纳沿同名河流建在佐治亚州海岸附近。老城以一连串林荫广场组织街区，河边仓库见证了棉花贸易。",
    "introductionSource": "https://en.wikipedia.org/wiki/Savannah%2C_Georgia",
    "coords": [
      -81.09983,
      32.08354
    ]
  },
  "https://www.geonames.org/4850751/": {
    "ipa": "/ˈsidɚ ˈræpədz/",
    "illustration": {
      "subject": "Cedar Rapids skyline.jpg",
      "credit": "Iowahwyman",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Cedar_Rapids_skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4850751.webp"
    },
    "introduction": "锡达拉皮兹位于艾奥瓦州的锡达河两岸。周围农业区供应的玉米和谷物，使这里成为粮食加工中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cedar_Rapids%2C_Iowa",
    "coords": [
      -91.64407,
      42.00833
    ]
  },
  "https://www.geonames.org/4887398/": {
    "ipa": "/ʃɪˈkɑɡoʊ/",
    "illustration": {
      "subject": "Chicago River ferry b.jpg",
      "credit": "File:Chicago River ferry.jpg : John Picken derivative work: Georgfotoart",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chicago_River_ferry_b.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4887398.webp"
    },
    "introduction": "芝加哥位于密歇根湖西南岸。湖港、运河和铁路把五大湖与美国内陆连接起来，芝加哥河沿岸还汇集了多代摩天楼。",
    "introductionSource": "https://en.wikipedia.org/wiki/Chicago",
    "coords": [
      -87.65005,
      41.85003
    ]
  },
  "https://www.geonames.org/4920423/": {
    "ipa": "/fɔrt weɪn/",
    "illustration": {
      "subject": "Downtown Fort Wayne, Indiana Skyline from Old Fort, May 2014.jpg",
      "credit": "Momoneymoproblemz",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Fort_Wayne,_Indiana_Skyline_from_Old_Fort,_May_2014.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4920423.webp"
    },
    "introduction": "韦恩堡位于印第安纳州东北部。圣约瑟夫河与圣玛丽斯河在城中汇成莫米河，通往伊利湖。",
    "introductionSource": "https://en.wikipedia.org/wiki/Fort_Wayne%2C_Indiana",
    "coords": [
      -85.12886,
      41.1306
    ]
  },
  "https://www.geonames.org/4281730/": {
    "ipa": "/ˈwɪtʃɪtɔ/",
    "illustration": {
      "subject": "Wichita, Kansas skyline aerial view.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Wichita,_Kansas_skyline_aerial_view.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4281730.webp"
    },
    "introduction": "威奇托坐落在堪萨斯州南部的阿肯色河畔。多家飞机制造商曾在当地设厂，使它成为美国航空制造业中心之一。",
    "introductionSource": "https://en.wikipedia.org/wiki/Wichita%2C_Kansas",
    "coords": [
      -97.33754,
      37.69224
    ]
  },
  "https://www.geonames.org/4299276/": {
    "ipa": "/ˈluivɪl/",
    "illustration": {
      "subject": "Louisville Skyline 2021 (3).jpg",
      "credit": "Charles Delano of LouisvilleUSACE - Louisville District of the US Army Corp of Engineers",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Louisville_Skyline_2021_(3).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4299276.webp"
    },
    "introduction": "路易维尔坐落在俄亥俄河的瀑布急流旁。早年船只须绕过急流转运，后来运河改善了这段河道的通航条件。",
    "introductionSource": "https://en.wikipedia.org/wiki/Louisville%2C_Kentucky",
    "coords": [
      -85.75941,
      38.25424
    ]
  },
  "https://www.geonames.org/4297983/": {
    "ipa": "/ˈlɛksɪŋtən/",
    "illustration": {
      "subject": "LexingtonDowntown.JPG",
      "credit": "Madgeek1450 at English Wikipedia",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:LexingtonDowntown.JPG",
      "kind": "commons",
      "src": "assets/supplements/g4297983.webp"
    },
    "introduction": "列克星敦位于肯塔基州中部的蓝草地区。周围石灰岩土壤上的牧场，以纯血马育种和赛马传统闻名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Lexington%2C_Kentucky",
    "coords": [
      -84.47772,
      37.98869
    ]
  },
  "https://www.geonames.org/4335045/": {
    "ipa": "/nu ˈɔrlənz/",
    "illustration": {
      "subject": "New Orleans skyline-02.jpg",
      "credit": "thepipe26",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:New_Orleans_skyline-02.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4335045.webp"
    },
    "introduction": "新奥尔良位于密西西比河下游的大河湾。河港汇聚不同文化，法国区街巷和当地爵士乐传统保留着这种交融。",
    "introductionSource": "https://en.wikipedia.org/wiki/New_Orleans",
    "coords": [
      -90.07507,
      29.95465
    ]
  },
  "https://www.geonames.org/4951788/": {
    "ipa": "/ˈsprɪŋˌfild/",
    "illustration": {
      "subject": "Springfield, MA.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Springfield,_MA.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4951788.webp"
    },
    "introduction": "马萨诸塞州的斯普林菲尔德位于康涅狄格河畔。这里有历史悠久的兵工厂，也是现代篮球运动的诞生地。",
    "introductionSource": "https://en.wikipedia.org/wiki/Springfield%2C_Massachusetts",
    "coords": [
      -72.58981,
      42.10148
    ]
  },
  "https://www.geonames.org/4347778/": {
    "ipa": "/ˈbɔltɪmor/",
    "illustration": {
      "subject": "Baltimore, Maryland skyline.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Baltimore,_Maryland_skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4347778.webp"
    },
    "introduction": "巴尔的摩是切萨皮克湾水系中的港城。内港深入市中心，外侧港区通过帕塔普斯科河连接海湾。",
    "introductionSource": "https://en.wikipedia.org/wiki/Baltimore",
    "coords": [
      -76.61219,
      39.29038
    ]
  },
  "https://www.geonames.org/4990729/": {
    "ipa": "/dɪˈtrɔɪt/",
    "illustration": {
      "subject": "Detroit Skyline from Windsor 2025-09-01.jpg",
      "credit": "TheWxResearcher",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Detroit_Skyline_from_Windsor_2025-09-01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4990729.webp"
    },
    "introduction": "底特律坐落在美国与加拿大之间的底特律河畔。汽车工厂及其供应网络影响了二十世纪城区与郊区的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Detroit",
    "coords": [
      -83.04575,
      42.33143
    ]
  },
  "https://www.geonames.org/4994358/": {
    "ipa": "/ɡrænd ˈræpədz/",
    "illustration": {
      "subject": "Downtown Grand Rapids from River House.jpg",
      "credit": "Rachel Kramer",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Grand_Rapids_from_River_House.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4994358.webp"
    },
    "introduction": "大急流城沿密歇根州的格兰德河展开。河运和附近林区提供的木材，曾支撑当地发达的家具制造业。",
    "introductionSource": "https://en.wikipedia.org/wiki/Grand_Rapids%2C_Michigan",
    "coords": [
      -85.66809,
      42.96336
    ]
  },
  "https://www.geonames.org/5037649/": {
    "ipa": "/mɪniˈæpəlɪs/",
    "illustration": {
      "subject": "2008-0712-MPLS-panorama.JPG",
      "credit": "Bobak Ha'Eri",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:2008-0712-MPLS-panorama.JPG",
      "kind": "commons",
      "src": "assets/supplements/g5037649.webp"
    },
    "introduction": "明尼阿波利斯坐落在密西西比河的圣安东尼瀑布旁。早期锯木厂和面粉厂利用落差取能，与邻近的圣保罗合称双子城。",
    "introductionSource": "https://en.wikipedia.org/wiki/Minneapolis",
    "coords": [
      -93.26384,
      44.97997
    ]
  },
  "https://www.geonames.org/4407066/": {
    "ipa": "/seɪnt ˈluɪs/",
    "illustration": {
      "subject": "Gateway Arch - St. Louis - Missouri (17275578342).jpg",
      "credit": "Sam valadi",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Gateway_Arch_-_St._Louis_-_Missouri_(17275578342).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4407066.webp"
    },
    "introduction": "圣路易斯位于密西西比河西岸，靠近密苏里河汇入口。河边的拱门纪念这里在美国向西扩展历史中的作用。",
    "introductionSource": "https://en.wikipedia.org/wiki/St._Louis",
    "coords": [
      -90.19789,
      38.62727
    ]
  },
  "https://www.geonames.org/4393217/": {
    "ipa": "/ˌkænzəs ˈsɪti/",
    "illustration": {
      "subject": "Kansas City - Downtown - panoramio (15).jpg",
      "credit": "Stephen Edmonds",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kansas_City_-_Downtown_-_panoramio_(15).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4393217.webp"
    },
    "introduction": "密苏里州的堪萨斯城坐落在密苏里河与堪萨斯河交会处。跨州都会区两边都有名为堪萨斯城的城市。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kansas_City%2C_Missouri",
    "coords": [
      -94.57857,
      39.09973
    ]
  },
  "https://www.geonames.org/4460243/": {
    "ipa": "/ˈʃɑrlət/",
    "illustration": {
      "subject": "Charlotte collage.jpg",
      "credit": "Greengrass090",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Charlotte_collage.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4460243.webp"
    },
    "introduction": "夏洛特位于北卡罗来纳州的皮德蒙特丘陵区。这里曾有金矿和铸币厂，后来发展成美国重要的银行业中心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Charlotte%2C_North_Carolina",
    "coords": [
      -80.84313,
      35.22709
    ]
  },
  "https://www.geonames.org/5059163/": {
    "ipa": "/ˈfɑrɡoʊ/",
    "illustration": {
      "subject": "Downtown Fargo Aerial - Facing Southeast (51009704407).jpg",
      "credit": "formulanone",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Fargo_Aerial_-_Facing_Southeast_(51009704407).jpg",
      "kind": "commons",
      "src": "assets/supplements/g5059163.webp"
    },
    "introduction": "法戈位于北达科他州东缘，隔向北流的红河与明尼苏达州相望。平坦谷地的农业与铁路共同推动了城市成长。",
    "introductionSource": "https://en.wikipedia.org/wiki/Fargo%2C_North_Dakota",
    "coords": [
      -96.7898,
      46.87719
    ]
  },
  "https://www.geonames.org/5074472/": {
    "ipa": "/ˈoʊməhɑ/",
    "illustration": {
      "subject": "Omaha, Nebraska.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Omaha,_Nebraska.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5074472.webp"
    },
    "introduction": "奥马哈位于内布拉斯加州东部的密苏里河畔。横贯大陆铁路的建设、牲畜交易和肉类加工都在当地留下痕迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/Omaha%2C_Nebraska",
    "coords": [
      -95.94043,
      41.25626
    ]
  },
  "https://www.geonames.org/5089178/": {
    "ipa": "/ˈmæntʃɛstɚ/",
    "illustration": {
      "subject": "Skyline of Manchester, New Hampshire, USA.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_Manchester,_New_Hampshire,_USA.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5089178.webp"
    },
    "introduction": "新罕布什尔州的曼彻斯特沿梅里马克河发展。河岸成排的红砖厂房记录了阿莫斯基格纺织厂利用水力生产的历史。",
    "introductionSource": "https://en.wikipedia.org/wiki/Manchester%2C_New_Hampshire",
    "coords": [
      -71.45479,
      42.99564
    ]
  },
  "https://www.geonames.org/5101798/": {
    "ipa": "/ˈnuɚk/",
    "illustration": {
      "subject": "2021-09-25 10 50 38 View of downtown Newark from the intersection of Essex County Route 510 (Market Street) and Mulberry Street in Newark, Essex County, New Jersey.jpg",
      "credit": "Famartin",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:2021-09-25_10_50_38_View_of_downtown_Newark_from_the_intersection_of_Essex_County_Route_510_(Market_Street)_and_Mulberry_Street_in_Newark,_Essex_County,_New_Jersey.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5101798.webp"
    },
    "introduction": "纽瓦克位于新泽西州东北部的帕塞伊克河畔。靠近纽约湾的集装箱码头、铁路与机场构成交通枢纽。",
    "introductionSource": "https://en.wikipedia.org/wiki/Newark%2C_New_Jersey",
    "coords": [
      -74.17237,
      40.73566
    ]
  },
  "https://www.geonames.org/5454711/": {
    "ipa": "/ˈælbəkɚki/",
    "illustration": {
      "subject": "Albuquerque Infobox Photo.png",
      "credit": "Danae Hurst, Asaavedra32, John Phelan,  Luigi Novi crop, montage and hue/contrast changes: KingCam",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Albuquerque_Infobox_Photo.png",
      "kind": "commons",
      "src": "assets/supplements/g5454711.webp"
    },
    "introduction": "阿尔伯克基位于新墨西哥州中部的格兰德河谷。河岸林地把城市与周围干旱台地分开，东侧可见桑迪亚山脉。",
    "introductionSource": "https://en.wikipedia.org/wiki/Albuquerque%2C_New_Mexico",
    "coords": [
      -106.65114,
      35.08449
    ]
  },
  "https://www.geonames.org/5506956/": {
    "ipa": "/lɑs ˈveɪɡəs/",
    "illustration": {
      "subject": "Downtown Las Vegas from Stratosphere 3.jpg",
      "credit": "Ken Lund from Las Vegas, Nevada, USA",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Las_Vegas_from_Stratosphere_3.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5506956.webp"
    },
    "introduction": "拉斯维加斯位于莫哈韦沙漠盆地。著名的拉斯维加斯大道度假酒店带，大部分在市界以南。",
    "introductionSource": "https://en.wikipedia.org/wiki/Las_Vegas",
    "coords": [
      -115.13722,
      36.17497
    ]
  },
  "https://www.geonames.org/5511077/": {
    "ipa": "/ˈrinoʊ/",
    "illustration": {
      "subject": "Reno, Nevada photo Don Ramey Logan.jpg",
      "credit": "Photograph by Don Ramey Logan",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Reno,_Nevada_photo_Don_Ramey_Logan.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5511077.webp"
    },
    "introduction": "雷诺坐落在内华达州西部的特拉基河畔。河水从太浩湖流出，穿过城市后汇入大盆地中的金字塔湖。",
    "introductionSource": "https://en.wikipedia.org/wiki/Reno%2C_Nevada",
    "coords": [
      -119.8138,
      39.52963
    ]
  },
  "https://www.geonames.org/5128581/": {
    "ipa": "/nu ˈjɔrk ˈsɪti/",
    "illustration": {
      "subject": "NYC Downtown Manhattan Skyline seen from Paulus Hook 2019-12-20 IMG 7347 FRD (cropped).jpg",
      "credit": "Fred Hsu on en.wikipedia",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g5128581.webp"
    },
    "introduction": "纽约围绕哈德孙河入海口的天然港湾发展。五个行政区分布在岛屿和大陆上，渡轮、桥梁和隧道连接各区。",
    "introductionSource": "https://en.wikipedia.org/wiki/New_York_City",
    "coords": [
      -74.00597,
      40.71427
    ]
  },
  "https://www.geonames.org/5110629/": {
    "ipa": "/ˈbʌfəloʊ/",
    "illustration": {
      "subject": "Buffalo, NY skyline.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Buffalo,_NY_skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5110629.webp"
    },
    "introduction": "布法罗位于伊利湖东端，靠近尼亚加拉河起点。伊利运河通航后，湖船运来的谷物曾在这里转装东运。",
    "introductionSource": "https://en.wikipedia.org/wiki/Buffalo%2C_New_York",
    "coords": [
      -78.87837,
      42.88645
    ]
  },
  "https://www.geonames.org/5134086/": {
    "ipa": "/ˈrɑtʃɛstɚ/",
    "illustration": {
      "subject": "Downtown Rochester, NY HDR by patrickashley.jpg",
      "credit": "Patrick Ashley",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Rochester,_NY_HDR_by_patrickashley.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5134086.webp"
    },
    "introduction": "罗彻斯特位于纽约州杰纳西河畔，靠近安大略湖。河上的瀑布为早期面粉厂供能，后来城市又以摄影与光学工业闻名。",
    "introductionSource": "https://en.wikipedia.org/wiki/Rochester%2C_New_York",
    "coords": [
      -77.61556,
      43.15478
    ]
  },
  "https://www.geonames.org/5150529/": {
    "ipa": "/ˈklivlənd/",
    "illustration": {
      "subject": "Cleveland skyline from Lakewood Park, January 2026.jpg",
      "credit": "Erik Drost",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cleveland_skyline_from_Lakewood_Park,_January_2026.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5150529.webp"
    },
    "introduction": "克里夫兰位于伊利湖南岸。凯霍加河在此入湖，铁路和湖运曾把铁矿石、煤炭运到钢铁厂。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cleveland",
    "coords": [
      -81.69541,
      41.4995
    ]
  },
  "https://www.geonames.org/4508722/": {
    "ipa": "/sɪnsɪˈnæti/",
    "illustration": {
      "subject": "Cincinnati Skyline from Devou Park.jpg",
      "credit": "Ynsalh",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cincinnati_Skyline_from_Devou_Park.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4508722.webp"
    },
    "introduction": "辛辛那提位于俄亥俄河北岸，隔水与肯塔基州相望。十九世纪河轮贸易、肉类加工和德裔移民影响了城市街区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Cincinnati",
    "coords": [
      -84.51439,
      39.12711
    ]
  },
  "https://www.geonames.org/4553433/": {
    "ipa": "/ˈtʌlsə/",
    "illustration": {
      "subject": "Tulsa skyline aerial, April 2023.jpg",
      "credit": "Nils Huenerfuerst",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tulsa_skyline_aerial,_April_2023.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4553433.webp"
    },
    "introduction": "塔尔萨沿俄克拉何马州的阿肯色河发展。石油业繁荣时期留下了许多装饰艺术风格的市中心建筑。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tulsa%2C_Oklahoma",
    "coords": [
      -95.99277,
      36.15398
    ]
  },
  "https://www.geonames.org/5746545/": {
    "ipa": "/ˈpɔrtlənd/",
    "illustration": {
      "subject": "Portland, Oregon Collage.jpg",
      "credit": "Kalinparsonsgaming",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Portland,_Oregon_Collage.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5746545.webp"
    },
    "introduction": "俄勒冈州的波特兰位于威拉米特河与哥伦比亚河交会区。远洋货船可沿河抵达内陆港区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Portland%2C_Oregon",
    "coords": [
      -122.67621,
      45.52345
    ]
  },
  "https://www.geonames.org/4560349/": {
    "ipa": "/fɪləˈdɛlfiə/",
    "illustration": {
      "subject": "Philadelphia skyline 20240528 (cropped).jpg",
      "credit": "颐园居",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Philadelphia_skyline_20240528_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4560349.webp"
    },
    "introduction": "费城坐落在特拉华河与斯库尔基尔河之间。《独立宣言》和美国宪法都在市中心的独立厅辩论并通过。",
    "introductionSource": "https://en.wikipedia.org/wiki/Philadelphia",
    "coords": [
      -75.16362,
      39.95238
    ]
  },
  "https://www.geonames.org/5206379/": {
    "ipa": "/ˈpɪtsbɝɡ/",
    "illustration": {
      "subject": "Duquesne Incline (50076338942) (cropped).jpg",
      "credit": "Russell Sekeet",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Duquesne_Incline_(50076338942)_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g5206379.webp"
    },
    "introduction": "匹兹堡建在阿勒格尼河与莫农加希拉河交会处，两河在此汇成俄亥俄河。河运和煤田曾支撑当地钢铁工业。",
    "introductionSource": "https://en.wikipedia.org/wiki/Pittsburgh",
    "coords": [
      -79.99589,
      40.44062
    ]
  },
  "https://www.geonames.org/4574324/": {
    "ipa": "/ˈtʃɑrlstən/",
    "illustration": {
      "subject": "BroadStreetCharleston.jpg",
      "credit": "Khanrak",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:BroadStreetCharleston.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4574324.webp"
    },
    "introduction": "查尔斯顿旧城坐落在南卡罗来纳州两条潮汐河流之间的半岛上。海港与种植园经济的历史至今可在码头和商宅中看到。",
    "introductionSource": "https://en.wikipedia.org/wiki/Charleston%2C_South_Carolina",
    "coords": [
      -79.93275,
      32.77632
    ]
  },
  "https://www.geonames.org/5231851/": {
    "ipa": "/su fɔlz/",
    "illustration": {
      "subject": "Downtown Sioux Falls 61.jpg",
      "credit": "Jon Platek",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Sioux_Falls_61.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5231851.webp"
    },
    "introduction": "苏瀑因大苏河穿过石英岩河床时形成的瀑布得名。瀑布曾为磨坊提供动力，现位于市区公园内。",
    "introductionSource": "https://en.wikipedia.org/wiki/Sioux_Falls%2C_South_Dakota",
    "coords": [
      -96.72796,
      43.54369
    ]
  },
  "https://www.geonames.org/4641239/": {
    "ipa": "/ˈmɛmfɪs/",
    "illustration": {
      "subject": "Skyline of Memphis, TN.jpg",
      "credit": "Quintin Soloviev",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_Memphis,_TN.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4641239.webp"
    },
    "introduction": "孟菲斯位于田纳西州西部、密西西比河东岸的高地。河港曾集散棉花，比尔街则见证了当地布鲁斯音乐的发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Memphis%2C_Tennessee",
    "coords": [
      -90.04898,
      35.14953
    ]
  },
  "https://www.geonames.org/4634946/": {
    "ipa": "/ˈnɑksˌvɪl/",
    "illustration": {
      "subject": "Downtown Knoxville (cropped).jpg",
      "credit": "Will Fisher",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Downtown_Knoxville_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g4634946.webp"
    },
    "introduction": "诺克斯维尔位于田纳西州东部。上游两河汇成的田纳西河穿过城区，向东南可通往大烟山地区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Knoxville%2C_Tennessee",
    "coords": [
      -83.92074,
      35.96064
    ]
  },
  "https://www.geonames.org/4699066/": {
    "ipa": "/ˈhjustən/",
    "illustration": {
      "subject": "Texas medical center.jpg",
      "credit": "Katie Haugland Brown",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Texas_medical_center.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4699066.webp"
    },
    "introduction": "休斯敦位于得克萨斯州东南部的沿海平原。航道把内陆市区接入加尔维斯顿湾，能源和航天产业也在这里集聚。",
    "introductionSource": "https://en.wikipedia.org/wiki/Houston",
    "coords": [
      -95.36327,
      29.76328
    ]
  },
  "https://www.geonames.org/4684888/": {
    "ipa": "/ˈdæləs/",
    "illustration": {
      "subject": "Dallas Skyline with Arts District.jpg",
      "credit": "Gattacal",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dallas_Skyline_with_Arts_District.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4684888.webp"
    },
    "introduction": "达拉斯位于得克萨斯州北部的特里尼蒂河畔。铁路贸易带动了早期发展，它与西侧的沃思堡共同形成都会区。",
    "introductionSource": "https://en.wikipedia.org/wiki/Dallas",
    "coords": [
      -96.80667,
      32.78306
    ]
  },
  "https://www.geonames.org/4726206/": {
    "ipa": "/ˌsæn ænˈtoʊnioʊ/",
    "illustration": {
      "subject": "San Antonio Botanical Garden Overlook View.jpg",
      "credit": "Jouaienttoi",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:San_Antonio_Botanical_Garden_Overlook_View.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4726206.webp"
    },
    "introduction": "圣安东尼奥沿得克萨斯州南部的同名河流发展。阿拉莫和河岸其他传教站，留存了西班牙殖民时期的建筑与灌溉遗迹。",
    "introductionSource": "https://en.wikipedia.org/wiki/San_Antonio",
    "coords": [
      -98.49363,
      29.42412
    ]
  },
  "https://www.geonames.org/4791259/": {
    "ipa": "/vɚˈdʒɪnjə bitʃ/",
    "illustration": {
      "subject": "Virginia Beach from Fishing Pier.jpg",
      "credit": "SchuminWeb",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "source": "https://commons.wikimedia.org/wiki/File:Virginia_Beach_from_Fishing_Pier.jpg",
      "kind": "commons",
      "src": "assets/supplements/g4791259.webp"
    },
    "introduction": "弗吉尼亚海滩位于切萨皮克湾口南侧。面向大西洋的是沙滩与沙丘，向南则过渡为湿地和浅水海湾。",
    "introductionSource": "https://en.wikipedia.org/wiki/Virginia_Beach%2C_Virginia",
    "coords": [
      -75.97799,
      36.85293
    ]
  },
  "https://www.geonames.org/5809844/": {
    "ipa": "/siˈætəl/",
    "illustration": {
      "subject": "Seattle aerial 2, May 2023.png",
      "credit": "Spicypepper999",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Seattle_aerial_2,_May_2023.png",
      "kind": "commons",
      "src": "assets/supplements/g5809844.webp"
    },
    "introduction": "西雅图位于普吉特海湾与华盛顿湖之间。埃利奥特湾的码头连接太平洋航线，众多桥梁和渡轮跨越周围水域。",
    "introductionSource": "https://en.wikipedia.org/wiki/Seattle",
    "coords": [
      -122.33207,
      47.60621
    ]
  },
  "https://www.geonames.org/5812944/": {
    "ipa": "/təˈkoʊmə/",
    "illustration": {
      "subject": "Tacoma Washington Aerial, June 2025.jpg",
      "credit": "Spicypepper999",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Tacoma_Washington_Aerial,_June_2025.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5812944.webp"
    },
    "introduction": "塔科马坐落在华盛顿州普吉特海湾南端。深水港、铁路和木材运输推动了城市发展，晴天可望见雷尼尔山。",
    "introductionSource": "https://en.wikipedia.org/wiki/Tacoma%2C_Washington",
    "coords": [
      -122.44429,
      47.25288
    ]
  },
  "https://www.geonames.org/5263045/": {
    "ipa": "/mɪlˈwɔki/",
    "illustration": {
      "subject": "Dji fly 20241201 160430 0031 1733092392756 photo-edit1.jpg",
      "credit": "Isaac Rowlett",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dji_fly_20241201_160430_0031_1733092392756_photo-edit1.jpg",
      "kind": "commons",
      "src": "assets/supplements/g5263045.webp"
    },
    "introduction": "密尔沃基位于密歇根湖西岸的河口地带。德裔移民的酿酒传统和沿河工业建筑都是城市历史的一部分。",
    "introductionSource": "https://en.wikipedia.org/wiki/Milwaukee",
    "coords": [
      -87.90647,
      43.0389
    ]
  },
  "https://www.geonames.org/1216265/": {
    "ipa": "/ˈsæmɚkænd/",
    "illustration": {
      "subject": "Sherdor madrasah 3.jpg",
      "credit": "Adam Harangozó",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sherdor_madrasah_3.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1216265.webp"
    },
    "introduction": "撒马尔罕位于泽拉夫尚河谷的绿洲上。丝绸之路商旅曾在此交会，雷吉斯坦广场三面的经学院保留着大面积釉砖装饰。",
    "introductionSource": "https://en.wikipedia.org/wiki/Samarkand",
    "coords": [
      66.96445,
      39.65456
    ]
  },
  "https://www.geonames.org/1217662/": {
    "ipa": "/buˈkɑrə/",
    "illustration": {
      "subject": "Kalon-Ensemble Buchara.jpg",
      "credit": "Euyasik",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kalon-Ensemble_Buchara.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1217662.webp"
    },
    "introduction": "布哈拉位于乌兹别克斯坦内陆绿洲。清真寺、经学院和有穹顶的集市沿古商路聚集，形成紧密相连的老城。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bukhara",
    "coords": [
      64.43069,
      39.77026
    ]
  },
  "https://whc.unesco.org/en/list/602/": {
    "ipa": "/hɪˈstɔrɪk ˈsɛntɚ əv buˈkɑrə/",
    "illustration": {
      "subject": "Po-i-Kalân Mosque.jpg",
      "credit": "I, Piero d'Houin",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Po-i-Kal%C3%A2n_Mosque.jpg",
      "kind": "commons",
      "src": "assets/supplements/u602.webp"
    },
    "introduction": "布哈拉位于乌兹别克斯坦中部的绿洲。经学院、清真寺和有顶集市聚集在老城，见证了这里作为丝路商贸与学习中心的历史。",
    "coords": [
      64.42861,
      39.77472
    ]
  },
  "https://www.geonames.org/3633009/": {
    "ipa": "/ˌmærəˈkaɪboʊ/",
    "illustration": {
      "subject": "Maracaibo panoramica avenida Cecilio Acosta cuted.jpg",
      "credit": "Maracaibo_panoramica_avenida_Cecilio_Acosta.jpg : Wilfredor derivative work: Wilfredor",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Maracaibo_panoramica_avenida_Cecilio_Acosta_cuted.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3633009.webp"
    },
    "introduction": "马拉开波坐落在委内瑞拉马拉开波湖通向海湾的水道西侧。周围油田和航运共同塑造了城市的工业发展。",
    "introductionSource": "https://en.wikipedia.org/wiki/Maracaibo",
    "coords": [
      -71.61089,
      10.64232
    ]
  },
  "https://www.geonames.org/3625549/": {
    "ipa": "/vəˈlɛnsiə/",
    "illustration": {
      "subject": "Valencia (Venezuela) Skyline.jpg",
      "credit": "Ccmaracay2",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Valencia_(Venezuela)_Skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g3625549.webp"
    },
    "introduction": "委内瑞拉的瓦伦西亚位于北部山间盆地，靠近同名湖泊。它通过山地通道连接加勒比海岸的卡贝略港。",
    "introductionSource": "https://en.wikipedia.org/wiki/Valencia%2C_Venezuela",
    "coords": [
      -68.00044,
      10.16153
    ]
  },
  "https://whc.unesco.org/en/list/658/": {
    "ipa": "/ˈkɔroʊ ənd ɪts pɔrt/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Casco central Santa Ana de Coro, estado Falcon, Venezuela.jpg",
      "credit": "Luisontiveros",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Casco_central_Santa_Ana_de_Coro,_estado_Falcon,_Venezuela.jpg",
      "kind": "commons",
      "src": "assets/supplements/u658.webp"
    },
    "introduction": "科罗位于委内瑞拉西北部，与拉韦拉港相连。城中以泥土建造的住宅结合了当地工艺与西班牙、荷兰等地的建筑影响。",
    "coords": [
      -69.623722,
      11.434215
    ]
  },
  "https://www.geonames.org/1566083/": {
    "ipa": "/ˌhoʊ tʃi ˌmɪn ˈsɪti/",
    "illustration": {
      "subject": "Ho Chi Minh City Skyline.jpg",
      "credit": "Pimnl",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "source": "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_City_Skyline.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1566083.webp"
    },
    "introduction": "胡志明市沿越南南部的西贡河发展。堤岸一带的华人商贸街区与西贡旧城，共同构成现代城市的历史核心。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City",
    "coords": [
      106.62965,
      10.82302
    ]
  },
  "https://www.geonames.org/1583992/": {
    "ipa": "/ˌdɑ ˈnæŋ/",
    "illustration": {
      "subject": "Dragon Bridge, Da Nang during day - 20230819 (cropped).jpg",
      "credit": "Somerset999",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dragon_Bridge,_Da_Nang_during_day_-_20230819_(cropped).jpg",
      "kind": "commons",
      "src": "assets/supplements/g1583992.webp"
    },
    "introduction": "岘港位于越南中部海岸，汉江在这里入海。北面的海云岭把沿海平原分隔开来，港湾则为船只提供屏障。",
    "introductionSource": "https://en.wikipedia.org/wiki/Da_Nang",
    "coords": [
      108.22083,
      16.06778
    ]
  },
  "https://www.geonames.org/1581298/": {
    "ipa": "/ˈhaɪfɑŋ/",
    "illustration": {
      "subject": "Sông Cấm Hải Phòng Về Đêm năm 2025.jpg",
      "credit": "HP1992",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:S%C3%B4ng_C%E1%BA%A5m_H%E1%BA%A3i_Ph%C3%B2ng_V%E1%BB%81_%C4%90%C3%AAm_n%C4%83m_2025.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1581298.webp"
    },
    "introduction": "海防位于越南北部红河三角洲东缘。河汊与沿海港区相连，是河内通往北部湾的海运门户。",
    "introductionSource": "https://en.wikipedia.org/wiki/Haiphong",
    "coords": [
      106.68345,
      20.86481
    ]
  },
  "https://whc.unesco.org/en/list/948/": {
    "ipa": "/hɔɪ ɑn ˈeɪnʃənt taʊn/",
    "illustration": {
      "subject": "Hội An, Chùa Cầu, 2020-01 CN-02.jpg",
      "credit": "© Steffen Schmitz ( Carschten ) / Wikimedia Commons / CC BY-SA 4.0",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:H%E1%BB%99i_An,_Ch%C3%B9a_C%E1%BA%A7u,_2020-01_CN-02.jpg",
      "kind": "commons",
      "src": "assets/supplements/u948.webp"
    },
    "introduction": "越南会安古城位于秋盆河畔。木构商宅、会馆、码头和有顶桥保存了东亚与东南亚商人在此经商定居的痕迹。",
    "coords": [
      108.333333,
      15.883333
    ]
  },
  "https://whc.unesco.org/en/list/1280/": {
    "ipa": "/tʃif rɔɪ ˈmɑtəz doʊˈmeɪn/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Fels Cave Drawings 1.jpg",
      "credit": "Phillip Capper from Wellington, New Zealand",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Fels_Cave_Drawings_1.jpg",
      "kind": "commons",
      "src": "assets/supplements/u1280.webp"
    },
    "introduction": "瓦努阿图的罗伊·玛塔酋长领地跨越数座岛屿。聚落、岩洞与墓地分别关联酋长的生平，并与当地代代相传的口述历史相互印证。",
    "coords": [
      168.177719,
      -17.628069
    ]
  },
  "https://whc.unesco.org/en/list/192/": {
    "ipa": "/oʊld wɔld ˈsɪti əv ʃɪˈbɑm/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "مدينة شبام حضرموت.jpg",
      "credit": "Bkar6190",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%B4%D8%A8%D8%A7%D9%85_%D8%AD%D8%B6%D8%B1%D9%85%D9%88%D8%AA.jpg",
      "kind": "commons",
      "src": "assets/supplements/u192.webp"
    },
    "introduction": "也门希巴姆坐落在哈德拉毛河谷。城墙内密集的多层塔屋以泥砖砌成，用有限的占地容纳住宅、仓储等功能。",
    "coords": [
      48.62667,
      15.92694
    ]
  },
  "https://www.geonames.org/993800/": {
    "ipa": "/dʒoʊˈhænɪsbɝɡ/",
    "illustration": {
      "subject": "Johannesburg CBD.jpg",
      "credit": "Evan Bench",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Johannesburg_CBD.jpg",
      "kind": "commons",
      "src": "assets/supplements/g993800.webp"
    },
    "introduction": "约翰内斯堡位于南非内陆的威特沃特斯兰德高地。十九世纪发现金矿后，矿区聚落迅速扩展成大城市。",
    "introductionSource": "https://en.wikipedia.org/wiki/Johannesburg",
    "coords": [
      28.04363,
      -26.20227
    ]
  },
  "https://www.geonames.org/1007311/": {
    "ipa": "/ˈdɝbən/",
    "illustration": {
      "subject": "Durban - panoramio - ---=XEON=---.jpg",
      "credit": "---=XEON=---",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Durban_-_panoramio_-_---%3DXEON%3D---.jpg",
      "kind": "commons",
      "src": "assets/supplements/g1007311.webp"
    },
    "introduction": "德班是南非印度洋岸的港城。港湾和甘蔗种植区吸引了来自南亚的劳工与商人，影响了当地饮食和街区文化。",
    "introductionSource": "https://en.wikipedia.org/wiki/Durban",
    "coords": [
      31.0292,
      -29.8579
    ]
  },
  "https://whc.unesco.org/en/list/916/": {
    "ipa": "/ˈrɑbən ˈaɪlənd/",
    "illustration": {
      "subject": "Robben Island - Cape Town, South Africa (3883849594).jpg",
      "credit": "South African Tourism from South Africa",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Robben_Island_-_Cape_Town,_South_Africa_(3883849594).jpg",
      "kind": "commons",
      "src": "assets/supplements/u916.webp"
    },
    "introduction": "罗布恩岛位于南非开普敦近海。岛上监狱曾关押反对种族隔离的政治犯，包括纳尔逊·曼德拉，现保留为纪念与教育场所。",
    "coords": [
      18.366667,
      -33.8
    ]
  },
  "https://www.geonames.org/911148/": {
    "ipa": "/ˈkɪtweɪ/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Kitwe cityscape2 - Flickr.jpg",
      "credit": "Mike Rosenberg from London, England",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kitwe_cityscape2_-_Flickr.jpg",
      "kind": "commons",
      "src": "assets/supplements/g911148.webp"
    },
    "introduction": "基特韦位于赞比亚铜带省。矿山、冶炼厂和为矿工服务的商业街区，使城市与周围铜矿带紧密相连。",
    "introductionSource": "https://en.wikipedia.org/wiki/Kitwe",
    "coords": [
      28.21323,
      -12.80243
    ]
  },
  "https://www.geonames.org/901344/": {
    "ipa": "/ənˈdoʊlə/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Ndola01.jpg",
      "credit": "User:Vberger",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Ndola01.jpg",
      "kind": "commons",
      "src": "assets/supplements/g901344.webp"
    },
    "introduction": "恩多拉位于赞比亚铜带地区东南部，靠近刚果民主共和国边界。这里是矿区货物运输、加工和商业服务的节点。",
    "introductionSource": "https://en.wikipedia.org/wiki/Ndola",
    "coords": [
      28.63659,
      -12.95867
    ]
  },
  "https://www.geonames.org/894701/": {
    "ipa": "/bʊləˈwɑjoʊ/",
    "illustration": {
      "subject": "Bulawayo CBD.jpg",
      "credit": "Prince Phumulani Nyoni",
      "license": "Public domain",
      "licenseUrl": "",
      "source": "https://commons.wikimedia.org/wiki/File:Bulawayo_CBD.jpg",
      "kind": "commons",
      "src": "assets/supplements/g894701.webp"
    },
    "introduction": "布拉瓦约位于津巴布韦西南部，是铁路和工业城市。邻近的马托博丘陵以裸露花岗岩和史前岩画著称。",
    "introductionSource": "https://en.wikipedia.org/wiki/Bulawayo",
    "coords": [
      28.58333,
      -20.15
    ]
  },
  "https://whc.unesco.org/en/list/306/": {
    "ipa": "/məˈtoʊboʊ hɪlz/",
    "readingNote": "英语近似读音",
    "illustration": {
      "subject": "Sunrise Matobo Zimbabwe.jpg",
      "credit": "Macvivo at English Wikipedia",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Sunrise_Matobo_Zimbabwe.jpg",
      "kind": "commons",
      "src": "assets/supplements/u306.webp"
    },
    "introduction": "津巴布韦马托博山以遍布圆石和岩丘的花岗岩地貌闻名。岩棚内的绘画和延续至今的圣地，记录了当地社群与山地的长期联系。",
    "coords": [
      28.5,
      -20.5
    ]
  },
  "https://www.nps.gov/ruca/index.htm": {
    "ipa": "/ˈrʌsəl ˈkeɪv ˈnæʃənəl ˈmɑnjəmənt/",
    "introduction": "洞口的岩棚曾为先民遮风避雨。历次考古发掘出土的工具与生活遗存，记录了美国东南部跨越数千年的人类活动。",
    "coords": [-85.8156, 34.97402]
  },
  "https://www.nps.gov/glba/index.htm": {
    "ipa": "/ˈɡleɪʃɚ ˈbeɪ ˈnæʃənəl ˈpɑrk ənd prəˈzɝv/",
    "introduction": "潮水冰川从山地伸入峡湾，冰块崩落后漂向海面。冰川退缩所裸露的地带，也见证了森林如何逐步重新生长。",
    "coords": [-136.84076, 58.80087]
  },
  "https://www.nps.gov/sagu/index.htm": {
    "ipa": "/səˈɡwɔroʊ ˈnæʃənəl ˈpɑrk/",
    "introduction": "图森两侧的索诺兰沙漠各有一片保护区。高大的巨人柱仙人掌是当地标志，主干和分枝能储水，经受漫长的干季。",
    "coords": [-110.7575, 32.2091]
  },
  "https://www.nps.gov/buff/index.htm": {
    "ipa": "/ˈbʌfəloʊ ˈnæʃənəl ˈrɪvɚ/",
    "introduction": "布法罗河自由流过欧扎克高地，沿岸可见高耸的石灰岩崖壁。急流和缓水潭交替出现，是理解高地河谷地貌的好例子。",
    "coords": [-92.90762, 36.04116]
  },
  "https://www.nps.gov/wefa/index.htm": {
    "ipa": "/ˈwir ˈfɑrm ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "美国印象派画家朱利安·奥尔登·威尔曾在这里生活和创作。农舍、画室与周边田野一起保存下来，可以对照作品辨认取景地。",
    "coords": [-73.45453, 41.25886]
  },
  "https://www.nps.gov/frst/index.htm": {
    "ipa": "/ˈfɝst ˈsteɪt ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "公园由几处分散的历史地点组成，涵盖特拉华河谷的早期集镇与乡野。名字纪念特拉华于 1787 年率先批准美国宪法。",
    "coords": [-75.56354, 39.83077]
  },
  "https://www.nps.gov/ocmu/index.htm": {
    "ipa": "/oʊkˈmʌlɡi ˈmaʊndz ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "readingNote": "英语近似读音",
    "introduction": "乔治亚州梅肯的这片土丘出自北美原住民之手。土丘、地屋和广场留下了古代聚落组织与仪式活动的痕迹。",
    "coords": [-83.60225, 32.83817]
  },
  "https://www.nps.gov/havo/index.htm": {
    "ipa": "/həˈwaɪi vɑlˈkeɪnoʊz ˈnæʃənəl ˈpɑrk/",
    "readingNote": "英语近似读音",
    "introduction": "公园横跨夏威夷大岛从海岸到高山的地带，保护基拉韦厄与冒纳罗亚两座活火山。熔岩冷却后形成黑色岩地，植物随时间重新定殖。",
    "coords": [-155.47003, 19.3355]
  },
  "https://www.nps.gov/crmo/index.htm": {
    "ipa": "/ˈkreɪtɚz əv ðə ˈmun ˈnæʃənəl ˈmɑnjəmənt ənd prəˈzɝv/",
    "introduction": "这个名字来自地表外观。黑色熔岩原野、火山渣锥与熔岩洞由地球上的火山活动形成。",
    "coords": [-113.47916, 43.20346]
  },
  "https://www.nps.gov/pull/index.htm": {
    "ipa": "/ˈpʊlmən ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "芝加哥南部的普尔曼围绕卧铺车厢工厂兴建，保留了成片工人住宅。它也是理解美国铁路工业、工人组织与劳工运动的重要地点。",
    "coords": [-87.60874, 41.69429]
  },
  "https://www.nps.gov/indu/index.htm": {
    "ipa": "/ˌɪndiˈænə ˈdunz ˈnæʃənəl ˈpɑrk/",
    "introduction": "密歇根湖南岸的湖浪和风搬运沙粒，逐渐堆起沙丘。穿过沙丘便能看到湿地、草地和林地，几种生境在很短的距离内相接。",
    "coords": [-87.09647, 41.63766]
  },
  "https://www.nps.gov/efmo/index.htm": {
    "ipa": "/ˈɛfɪdʒi ˈmaʊndz ˈnæʃənəl ˈmɑnjəmənt/",
    "introduction": "密西西比河上游的原住民筑起了鸟形、熊形等土丘。这些土丘兼具仪式与纪念意义，至今仍是当地多个原住民族的圣地。",
    "coords": [-91.19688, 43.08095]
  },
  "https://www.nps.gov/tapr/index.htm": {
    "ipa": "/ˈtɑlˌɡræs ˈprɛri ˈnæʃənəl prəˈzɝv/",
    "introduction": "弗林特丘陵的石质地表使大规模耕作较难开展，留下北美高草草原的重要遗存。季节性火烧和野牛放牧帮助维持草原。",
    "coords": [-96.56708, 38.44024]
  },
  "https://www.nps.gov/abli/index.htm": {
    "ipa": "/ˈeɪbrəˌhæm ˈlɪŋkən ˈbɝθˌpleɪs ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "肯塔基中部的泉水与农地见证了林肯的早年。山丘上的纪念馆以一座象征性的木屋展示边疆农家生活。",
    "coords": [-85.67331, 37.58587]
  },
  "https://www.nps.gov/jela/index.htm": {
    "ipa": "/ʒɑn ləˈfɪt ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk ənd prəˈzɝv/",
    "introduction": "保护区的巴拉塔里亚地段位于密西西比河三角洲，木栈道穿过沼泽和水道。公园的其他地点讲述阿卡迪亚移民与当地社区的历史。",
    "coords": [-90.14022, 29.8174]
  },
  "https://www.nps.gov/kaww/index.htm": {
    "ipa": "/kəˈtɑdən ˈwʊdz ənd ˈwɔtɚz ˈnæʃənəl ˈmɑnjəmənt/",
    "readingNote": "英语近似读音",
    "introduction": "这片缅因州北部林地临近卡塔丁山，河流与支流切穿森林。少有灯光干扰的夜空，也是当地自然景观的一部分。",
    "coords": [-68.71229, 45.95676]
  },
  "https://www.nps.gov/cato/index.htm": {
    "ipa": "/kəˈtɑktən ˈmaʊntən ˈpɑrk/",
    "readingNote": "英语近似读音",
    "introduction": "这片山地曾受采伐影响，后来在大萧条时期通过公共项目恢复林地。如今步道串联起山脊、溪谷与岩石眺望点。",
    "coords": [-77.46418, 39.65068]
  },
  "https://www.nps.gov/mima/index.htm": {
    "ipa": "/ˈmɪnət ˈmæn ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "公园保存列克星敦和康科德之间的战斗旧址。1775 年 4 月 19 日，殖民地民兵与英军在这条道路沿线交战。",
    "coords": [-71.30739, 42.45628]
  },
  "https://www.nps.gov/piro/index.htm": {
    "ipa": "/ˈpɪktʃɚd ˈrɑks ˈnæʃənəl ˈleɪkˌʃɔr/",
    "introduction": "苏必利尔湖的波浪侵蚀砂岩，形成峭壁、海蚀洞与石拱。矿物随渗水在崖面留下红、黄和褐色条纹。",
    "coords": [-86.31629, 46.56436]
  },
  "https://www.nps.gov/voya/index.htm": {
    "ipa": "/ˌvwɑjɑˈʒɝz ˈnæʃənəl ˈpɑrk/",
    "readingNote": "英语近似读音",
    "introduction": "明尼苏达州北端的湖泊与森林相连，公园不少地点需乘船抵达。名称纪念曾沿这些水路运送毛皮的法裔加拿大船夫。",
    "coords": [-92.83829, 48.48371]
  },
  "https://www.nps.gov/natc/index.htm": {
    "ipa": "/ˈnæˌtʃɛz ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "纳奇兹坐落在密西西比河高岸上。历史建筑和遗址讲述了河港贸易、棉花经济与奴隶制度怎样塑造这座城。",
    "coords": [-91.39041, 31.54698]
  },
  "https://www.nps.gov/ozar/index.htm": {
    "ipa": "/ˈoʊˌzɑrk ˈnæʃənəl ˈsinɪk ˈrɪvɚˌweɪz/",
    "introduction": "卡伦特河和杰克斯福克河由泉水补给，穿过欧扎克高地的石灰岩河谷。沿岸洞穴与大泉体现了当地的喀斯特地貌。",
    "coords": [-91.2571, 37.13969]
  },
  "https://www.nps.gov/libi/index.htm": {
    "ipa": "/ˈlɪtəl ˈbɪɡˌhɔrn ˈbætəlˌfild ˈnæʃənəl ˈmɑnjəmənt/",
    "introduction": "1876 年，拉科塔、夏延等原住民战士在此与美国第七骑兵团交战。纪念设施呈现了这场冲突的不同历史经验。",
    "coords": [-107.41836, 45.55633]
  },
  "https://www.nps.gov/scbl/index.htm": {
    "ipa": "/ˈskɑts ˈblʌf ˈnæʃənəl ˈmɑnjəmənt/",
    "introduction": "这道地势突出的陡壁俯瞰北普拉特河谷，曾为俄勒冈小径上的西行队伍指示方位。附近仍能看到历史路线在地表留下的痕迹。",
    "coords": [-103.70714, 41.83464]
  },
  "https://www.nps.gov/grba/index.htm": {
    "ipa": "/ˈɡreɪt ˈbeɪsən ˈnæʃənəl ˈpɑrk/",
    "introduction": "公园从蒿丛山麓一直延伸到惠勒峰，海拔差让沙漠与高山生态并存。山上有长寿的刺果松，山腹有莱曼洞穴。",
    "coords": [-114.25798, 38.94617]
  },
  "https://www.nps.gov/saga/index.htm": {
    "ipa": "/ˈseɪnt ˈɡoʊdənz ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "readingNote": "英语近似读音",
    "introduction": "这里保存雕塑家奥古斯都·圣戈当斯的住所和工作室。园中展出的青铜作品可与他为美国城市创作的纪念雕塑对照。",
    "coords": [-72.37334, 43.49972]
  },
  "https://www.nps.gov/pagr/index.htm": {
    "ipa": "/ˈpætɚsən ˈɡreɪt ˈfɔlz ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "帕塞伊克河从玄武岩断崖倾泻而下。人们通过引水渠利用落差，为早期纺织厂和其他工厂提供动力。",
    "coords": [-74.18021, 40.91585]
  },
  "https://www.nps.gov/cave/index.htm": {
    "ipa": "/ˈkɑrlsbæd ˈkævɚnz ˈnæʃənəl ˈpɑrk/",
    "introduction": "奇瓦瓦沙漠下方的石灰岩被含硫酸的水溶蚀，形成庞大洞窟。洞内有钟乳石和石笋，暖季傍晚常见蝙蝠飞出洞口。",
    "coords": [-104.55297, 32.14089]
  },
  "https://www.nps.gov/sara/index.htm": {
    "ipa": "/ˌsɛrəˈtoʊɡə ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "1777 年，英军在哈得孙河谷作战失利，最终向大陆军投降。这场战役是美国独立战争走向的重要转折点。",
    "coords": [-73.63386, 42.99523]
  },
  "https://www.nps.gov/wrbr/index.htm": {
    "ipa": "/ˈraɪt ˈbrʌðɚz ˈnæʃənəl məˈmɔriəl/",
    "introduction": "北卡外滩群岛的海风和沙地为飞行实验提供了条件。1903 年，莱特兄弟在基尔德维尔山附近完成了受控的动力飞行。",
    "coords": [-75.66997, 36.01638]
  },
  "https://www.nps.gov/knri/index.htm": {
    "ipa": "/ˈnaɪf ˈrɪvɚ ˈɪndiən ˈvɪlədʒəz ˈnæʃənəl hɪˈstɔrɪk ˈsaɪt/",
    "introduction": "奈夫河与密苏里河附近曾有农业村落和贸易网络。遗址保留了土屋留下的圆形轮廓，展示了大平原河谷的定居生活。",
    "coords": [-101.38605, 47.35402]
  },
  "https://www.nps.gov/cuva/index.htm": {
    "ipa": "/ˌkaɪəˈhoʊɡə ˈvæli ˈnæʃənəl ˈpɑrk/",
    "introduction": "克利夫兰与阿克伦之间的凯霍加河谷里，可见旧运河纤道、林地和瀑布。欧几里运河曾让内陆货物沿水路进入五大湖市场。",
    "coords": [-81.57117, 41.26094]
  },
  "https://www.nps.gov/chic/index.htm": {
    "ipa": "/ˈtʃɪkəˌsɔ ˈnæʃənəl ˌrɛkriˈeɪʃən ˈɛriə/",
    "introduction": "在俄克拉何马州南部的这片游憩区，矿泉、溪流和湖泊串起多种水景。早期的泉水保护区后来与周边水库和林地合并。",
    "coords": [-97.00716, 34.46051]
  },
  "https://www.nps.gov/orca/index.htm": {
    "ipa": "/ˈɔrɪɡən ˈkeɪvz ˈnæʃənəl ˈmɑnjəmənt ənd prəˈzɝv/",
    "introduction": "锡斯基尤山脉的酸性渗水沿裂隙溶解大理岩，雕出洞室与狭窄通道。洞外的山地林地与洞内环境形成鲜明对照。",
    "coords": [-123.40186, 42.10319]
  },
  "https://www.nps.gov/gett/index.htm": {
    "ipa": "/ˈɡɛtizbɝɡ ˈnæʃənəl ˈmɪləˌtɛri ˈpɑrk/",
    "introduction": "1863 年的葛底斯堡战役阻止了南军进一步北进。战场和墓园分别记录了战斗经过，以及林肯发表葛底斯堡演说的历史背景。",
    "coords": [-77.23247, 39.81557]
  },
  "https://www.nps.gov/rowi/index.htm": {
    "ipa": "/ˈrɑdʒɚ ˈwɪljəmz ˈnæʃənəl məˈmɔriəl/",
    "introduction": "普罗维登斯这座小型纪念地包括早期居民使用过的泉水遗址。它纪念创建当地聚落并倡导宗教自由的罗杰·威廉斯。",
    "coords": [-71.41057, 41.8299]
  },
  "https://www.nps.gov/cong/index.htm": {
    "ipa": "/ˌkɑŋɡəˈri ˈnæʃənəl ˈpɑrk/",
    "readingNote": "英语近似读音",
    "introduction": "康加里河与沃特里河的洪水不时漫过林地，带来养分并塑造林下生境。公园保存了美国东南部少有的大面积低地老龄阔叶林。",
    "coords": [-80.74868, 33.79188]
  },
  "https://www.nps.gov/badl/index.htm": {
    "ipa": "/ˈbædˌlændz ˈnæʃənəl ˈpɑrk/",
    "introduction": "风雨侵蚀不同颜色的沉积岩，留下层层崖壁和尖峰。岩层中发现的古哺乳动物化石记录了北美草原成形之前的生态。",
    "coords": [-102.48294, 43.68585]
  },
  "https://www.nps.gov/shil/index.htm": {
    "ipa": "/ˈʃaɪloʊ ˈnæʃənəl ˈmɪləˌtɛri ˈpɑrk/",
    "introduction": "战场位于田纳西河西岸。1862 年双方围绕渡口与内陆交通线交战，后来改变了西部战区的推进方向。",
    "coords": [-88.34211, 35.13851]
  },
  "https://www.nps.gov/bibe/index.htm": {
    "ipa": "/ˈbɪɡ ˈbɛnd ˈnæʃənəl ˈpɑrk/",
    "introduction": "公园得名于格兰德河在得州西南部的大弯。河流沿美墨边界切出峡谷，周边同时分布奇瓦瓦沙漠和奇索斯山地。",
    "coords": [-103.22979, 29.29818]
  },
  "https://www.nps.gov/zion/index.htm": {
    "ipa": "/ˈzaɪən ˈnæʃənəl ˈpɑrk/",
    "introduction": "维尔京河切穿砂岩高原，在犹他州西南部形成高壁峡谷。河道收窄处叫作 The Narrows，两侧岩壁靠得很近。",
    "coords": [-113.02651, 37.29839]
  },
  "https://www.nps.gov/mabi/index.htm": {
    "ipa": "/ˈmɑrʃ ˈbɪlɪŋz ˈrɑkəˌfɛlɚ ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "公园保护伍德斯托克附近的历史庄园和汤姆山林地。林地从砍伐到重新栽植与经营的过程，是美国早期森林保护的实例。",
    "coords": [-72.53425, 43.63349]
  },
  "https://www.nps.gov/shen/index.htm": {
    "ipa": "/ˌʃɛnənˈdoʊə ˈnæʃənəl ˈpɑrk/",
    "introduction": "蓝岭山脉的山脊上有天际线公路，向西可俯瞰仙纳度河谷。山脊两侧分布树林、溪谷与瀑布，阿巴拉契亚步道也从这里经过。",
    "coords": [-78.46908, 38.49237]
  },
  "https://www.nps.gov/mora/index.htm": {
    "ipa": "/ˈmaʊnt reɪˈnɪr ˈnæʃənəl ˈpɑrk/",
    "introduction": "雷尼尔山是喀斯喀特山脉的活火山。山顶周围的冰川给多条河流供水，较低海拔的亚高山草甸在夏季开满野花。",
    "coords": [-121.70439, 46.86075]
  },
  "https://www.nps.gov/hafe/index.htm": {
    "ipa": "/ˈhɑrpɚz ˈfɛri ˈnæʃənəl hɪˈstɔrɪkəl ˈpɑrk/",
    "introduction": "波托马克河与仙纳度河在这里汇合。镇上的联邦军械库曾是约翰·布朗反奴隶制行动的目标，铁路和水路则推动了它的早期发展。",
    "coords": [-77.74089, 39.31866]
  },
  "https://www.nps.gov/apis/index.htm": {
    "ipa": "/əˈpɑsəl ˈaɪləndz ˈnæʃənəl ˈleɪkˌʃɔr/",
    "introduction": "苏必利尔湖西南部的一组岛屿，由砂岩崖壁、湖蚀洞与沙滩构成。岛上灯塔记录了蒸汽船时代湖上航路的历史。",
    "coords": [-90.66046, 46.9624]
  },
  "https://www.nps.gov/deto/index.htm": {
    "ipa": "/ˈdɛvəlz ˈtaʊɚ ˈnæʃənəl ˈmɑnjəmənt/",
    "introduction": "怀俄明州东北部的这根岩柱高出周边草原，外壁有密集的纵向裂隙。北部平原多个原住民族视这里为圣地。",
    "coords": [-104.71563, 44.59065]
  },
};

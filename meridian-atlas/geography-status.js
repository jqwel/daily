"use strict";

// Geographic reference, independent of Geo Book's game IDs and regional groupings.
// Sources are listed under "Political geography" in data-sources.txt.
const geographyStatusLabel = "Political status · 归属与地位";
const geographyStatus = new Map([
  ["REU GLP", "法国 · 海外省和海外大区"],
  ["GUF MTQ", "法国 · 行使海外省与大区职权的单一地方行政区"],
  ["MYT", "法国管辖的海外省级和大区级行政区。科摩罗主张对马约特拥有主权。"],
  ["BLM MAF PYF SPM WLF", "法国 · 海外集体，具体自治权限由各地立法规约确定"],
  ["NCL", "法国 · 具有特殊地位的新喀里多尼亚"],
  ["ATF", "法国管理的海外领地，其中阿德利地的领土主张受《南极条约》约束。"],
  ["AIA BMU VGB CYM MSR PCN SHN TCA", "英国 · 海外领土"],
  ["FLK SGS", "英国实际管辖，英国和阿根廷均主张主权。"],
  ["GIB", "英国实际管辖，英国和西班牙对主权持不同立场。"],
  ["IOT", "查戈斯群岛由英国实际管理。英国与毛里求斯已签署承认毛里求斯主权的协定，截至 2026 年 11 月 25 日尚未生效。"],
  ["GGY IMN JEY", "英国王室属地 · 自治，由英国负责防务和国际代表事务"],
  ["ASM GUM VIR", "美国 · 海外领地"],
  ["PRI MNP", "美国 · 具有自治邦地位的领地"],
  ["UMI", "美国 · 多个由美国管辖的离岛的合称"],
  ["US-DC", "美国 · 联邦首都特区"],
  ["ABW CUW SXM", "荷兰王国 · 王国内的自治构成国"],
  ["BES", "荷兰 · 博奈尔、圣尤斯特歇斯和萨巴是荷兰在加勒比地区的三个公共实体"],
  ["ALA", "芬兰 · 自治地区"],
  ["GRL FRO", "丹麦王国 · 自治地区"],
  ["BVT", "挪威 · 南大西洋属地"],
  ["SJM", "挪威 · 斯瓦尔巴群岛和扬马延分别管辖，地图将两地合列"],
  ["CXR CCK HMD NFK", "澳大利亚 · 海外领地"],
  ["TKL", "由新西兰管理的非自治领土"],
  ["COK NIU", "与新西兰自由联系的自治国家"],
  ["HKG MAC", "中国 · 特别行政区"],
  ["ATA", "南极洲适用《南极条约》。条约保留各方原有的主权立场，冻结新的领土主张。"],
  ["ESH", "联合国列为非自治领土，最终地位尚未确定。"],
  ["MNE", "独立国家 · 联合国会员国"],
].flatMap(([ids, status]) => ids.split(" ").map((id) => [id, status])));

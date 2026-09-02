import { JRPass } from '@/types/pass';

// Production pass catalogue: every record below is maintained from the
// operator's own product page. Do not add reseller/aggregator copy here.
export const OFFICIAL_PASSES: JRPass[] = [
  {
    id: 'japan-rail-pass-7',
    sortOrder: 1,
    name: { en: 'JAPAN RAIL PASS (7-Day)', jp: 'ジャパン・レール・パス（7日間）', cn: '日本全国铁路周游券（7日）' },
    description: '覆盖日本六家 JR 客运公司的全国型通票。适合短期内跨越多个 JR 区域的长距离行程；单次东京—关西往返通常应先比较普通票。',
    price: { adult: { regular: 50000 }, child: { regular: 25000 }, freeText: '官网在线购买普通车厢：成人 ¥50,000；海外指定代理自 2026-10-01 起为 ¥53,000' },
    bestFor: ['跨 3 个以上 JR 区域', '7 天高频长距离移动'],
    duration: [7],
    validityPeriod: { startDate: '', endDate: '', description: '连续 7 日' },
    coverage: { regions: ['全国'], map: '', description: 'JR 集团铁路、部分 JR 巴士与宫岛渡轮；Nozomi/Mizuho 需另购专用追加票。' },
    targetAudience: ['符合官方资格条件的访日旅客'],
    trainTypes: ['新干线', '特急列车', '普通列车', 'JR巴士'],
    officialLinks: [{ name: 'JR 集团官方价格与条件', url: 'https://japanrailpass.net/en/purchase/price/' }],
    purchaseLinks: [{ name: 'JR 集团官方在线购买', url: 'https://japanrailpass.net/en/purchase/online/', type: 'official' }],
    category: 'national', popularity: 5, company: 'JR Group',
    sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01',
    ticket_note: '价格和适用条件可能变化，付款前请在 JR 集团官网再次确认。'
  },
  {
    id: 'jr-east-pass-5', sortOrder: 2,
    name: { en: 'JR EAST PASS (5-Day)', jp: 'JR EAST PASS（5日間）', cn: 'JR 东日本铁路周游券（5日）' },
    description: '覆盖东京及 JR 东日本主要区域的连续 5 日通票，适合从东京前往东北、长野或新潟方向的高频移动。',
    price: { adult: { regular: 35000 }, child: { regular: 17500 }, freeText: '5 日：成人 ¥35,000 / 儿童 ¥17,500' },
    bestFor: ['东京 + 东北', '东京 + 长野/新潟'], duration: [5],
    validityPeriod: { startDate: '', endDate: '', description: '连续 5 日' },
    coverage: { regions: ['関東', '東北', '北信越'], map: '', description: 'JR 东日本官方有效区间；具体列车与合作线路以官方地图为准。' },
    targetAudience: ['持非日本护照旅客'], trainTypes: ['新干线', '特急列车', '普通列车'],
    officialLinks: [{ name: 'JR 东日本官方通票列表', url: 'https://www.jreast.co.jp/multi/pass/?lng=en' }],
    purchaseLinks: [{ name: 'JR-EAST Train Reservation', url: 'https://www.eki-net.com/en/jreast-train-reservation/Top/Index', type: 'official' }],
    category: 'regional', popularity: 5, company: 'JR East', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01'
  },
  {
    id: 'hokkaido-rail-pass-5', sortOrder: 3,
    name: { en: 'Hokkaido Rail Pass (5-Day)', jp: '北海道レールパス（5日間）', cn: '北海道铁路周游券（5日）' },
    description: '覆盖 JR 北海道主要铁路线路的连续 5 日通票，不含北海道新干线、札幌地铁与路面电车。',
    price: { adult: { regular: 22000 }, child: { regular: 11000 }, freeText: '预购：成人 ¥22,000；在站购买：成人 ¥23,000' },
    bestFor: ['札幌 + 函馆', '道东/道北多城市'], duration: [5],
    validityPeriod: { startDate: '', endDate: '', description: '连续 5 日' },
    coverage: { regions: ['北海道'], map: '', description: 'JR 北海道全线（不含北海道新干线）及部分 JR 北海道巴士。' },
    targetAudience: ['持非日本护照旅客'], trainTypes: ['特急列车', '普通列车', 'JR巴士'],
    officialLinks: [{ name: 'JR 北海道官方详情', url: 'https://www.jrhokkaido.co.jp/global/english/ticket/railpass/' }],
    purchaseLinks: [{ name: 'JR-EAST Train Reservation', url: 'https://www.eki-net.com/en/jreast-train-reservation/Top/Index', type: 'official' }],
    category: 'regional', popularity: 5, company: 'JR Hokkaido', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01'
  },
  {
    id: 'kansai-hiroshima-5', sortOrder: 4,
    name: { en: 'Kansai-Hiroshima Area Pass', jp: '関西・広島エリアパス', cn: '关西—广岛地区铁路周游券' },
    description: '连接关西、冈山与广岛，包含有效区间内的山阳新干线指定席与 JR 西日本宫岛渡轮。',
    price: { adult: { regular: 17000 }, child: { regular: 8500 }, freeText: '5 日：成人 ¥17,000 / 儿童 ¥8,500' },
    bestFor: ['大阪/京都 + 广岛', '姬路 + 冈山 + 宫岛'], duration: [5],
    validityPeriod: { startDate: '', endDate: '', description: '连续 5 日' },
    coverage: { regions: ['近畿', '中国'], map: '', description: '新大阪—广岛山阳新干线、指定范围 JR 线路及 JR 西日本宫岛渡轮。' },
    targetAudience: ['以短期停留身份访日的外国旅客'], trainTypes: ['新干线', '特急列车', '普通列车', '渡轮'],
    officialLinks: [{ name: 'JR 西日本官方详情', url: 'https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_hiroshima/' }],
    purchaseLinks: [{ name: 'JR 西日本官方预约', url: 'https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_hiroshima/', type: 'official' }],
    category: 'regional', popularity: 5, company: 'JR West', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01'
  },
  {
    id: 'kansai-wide-5', sortOrder: 5,
    name: { en: 'Kansai WIDE Area Pass', jp: '関西ワイドエリアパス', cn: '关西广域铁路周游券' },
    description: '适合从大阪、京都前往冈山、高松、城崎温泉、天桥立、鸟取或白滨的区域通票。',
    price: { adult: { regular: 12000 }, child: { regular: 6000 }, freeText: '5 日：成人 ¥12,000 / 儿童 ¥6,000' },
    bestFor: ['关西放射状旅行', '冈山/高松/城崎温泉'], duration: [5],
    validityPeriod: { startDate: '', endDate: '', description: '连续 5 日' },
    coverage: { regions: ['近畿', '中国', '四国'], map: '', description: '新大阪—冈山山阳新干线及官方地图标示的 JR 西日本/JR 四国线路。' },
    targetAudience: ['以短期停留身份访日的外国旅客'], trainTypes: ['新干线', '特急列车', '普通列车'],
    officialLinks: [{ name: 'JR 西日本官方详情', url: 'https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_wide/' }],
    purchaseLinks: [{ name: 'JR 西日本官方预约', url: 'https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_wide/', type: 'official' }],
    category: 'regional', popularity: 4, company: 'JR West', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01'
  },
  {
    id: 'all-kyushu-3', sortOrder: 6,
    name: { en: 'All Kyushu Rail Pass (3-Day)', jp: '全九州レールパス（3日間）', cn: '全九州铁路周游券（3日）' },
    description: '覆盖九州地区 JR 普通列车、特急列车及九州新干线指定范围，适合三天内跨多个九州城市。',
    price: { adult: { regular: 22000 }, child: { regular: 11000 }, freeText: '现场/代理：成人 ¥22,000；官网预订价格可能更低' },
    bestFor: ['福冈 + 熊本 + 鹿儿岛', '九州多城市'], duration: [3],
    validityPeriod: { startDate: '', endDate: '', description: '连续 3 日' },
    coverage: { regions: ['九州'], map: '', description: 'JR 九州官方有效区间；不含博多—小仓间山阳新干线。' },
    targetAudience: ['符合短期停留条件的国际旅客'], trainTypes: ['新干线', '特急列车', '普通列车'],
    officialLinks: [{ name: 'JR 九州官方详情', url: 'https://www.jrkyushu.co.jp/english/railpass/' }],
    purchaseLinks: [{ name: 'JR 九州官方预约', url: 'https://kyushurailpass.jrkyushu.co.jp/reserve/TopPage', type: 'official' }],
    category: 'regional', popularity: 5, company: 'JR Kyushu', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01'
  },
  {
    id: 'northern-kyushu-3', sortOrder: 7,
    name: { en: 'Northern Kyushu Rail Pass (3-Day)', jp: '北部九州レールパス（3日間）', cn: '北九州铁路周游券（3日）' },
    description: '适合福冈、佐贺、长崎、熊本、大分方向的集中旅行。',
    price: { adult: { regular: 15000 }, child: { regular: 7500 }, freeText: '现场/代理：成人 ¥15,000；官网预订价格可能更低' },
    bestFor: ['福冈 + 长崎', '由布院/别府 + 熊本'], duration: [3],
    validityPeriod: { startDate: '', endDate: '', description: '连续 3 日' },
    coverage: { regions: ['九州'], map: '', description: 'JR 九州北部官方有效区间。' },
    targetAudience: ['符合短期停留条件的国际旅客'], trainTypes: ['新干线', '特急列车', '普通列车'],
    officialLinks: [{ name: 'JR 九州官方详情', url: 'https://www.jrkyushu.co.jp/english/railpass/' }],
    purchaseLinks: [{ name: 'JR 九州官方预约', url: 'https://kyushurailpass.jrkyushu.co.jp/reserve/TopPage', type: 'official' }],
    category: 'regional', popularity: 4, company: 'JR Kyushu', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01'
  },
  {
    id: 'all-shikoku-3', sortOrder: 8,
    name: { en: 'ALL SHIKOKU Rail Pass (3-Day)', jp: 'ALL SHIKOKU Rail Pass（3日間）', cn: '四国铁路周游券（3日）' },
    description: '覆盖 JR 四国及多家四国地方铁路的访日旅客通票。2026 年 10 月起产品范围将调整，出发前应再次确认。',
    price: { adult: { regular: 9000 }, child: { regular: 4500 }, freeText: '海外购买：成人 ¥9,000；日本购买：成人 ¥9,500（2026-10 起有调整）' },
    bestFor: ['高松 + 松山 + 高知', '四国铁路环游'], duration: [3],
    validityPeriod: { startDate: '', endDate: '', description: '连续 3 日' },
    coverage: { regions: ['四国'], map: '', description: 'JR 四国及官方列明的合作铁路；2026-10 起覆盖范围调整。' },
    targetAudience: ['符合短期停留条件的国际旅客'], trainTypes: ['特急列车', '普通列车', '私铁'],
    officialLinks: [{ name: 'JR 四国官方条件与价格', url: 'https://www.jr-shikoku.co.jp/global/pdf_railpass/ALL_SHIKOKU_Rail_Pass_en.pdf' }],
    purchaseLinks: [{ name: 'JR 四国官方入口', url: 'https://www.jr-shikoku.co.jp/global/en/', type: 'official' }],
    category: 'regional', popularity: 4, company: 'JR Shikoku', sourceAuthority: 'operator', lastVerifiedAt: '2026-09-01', isLimitedPeriod: true
  }
];

import { JRPass } from '@/types/pass';

// 统一的周游券数据
export const unifiedPasses: JRPass[] = [
  // 全国版周游券
  {
    id: 'japan-rail-pass-7day',
    name: {
      en: 'Japan Rail Pass 7-Day',
      jp: 'ジャパンレールパス 7日券'
    },
    description: '日本全国JR线路的7日周游券，包含新干线（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 50000,
        green: 70000
      },
      child: {
        regular: 25000,
        green: 35000
      }
    },
    duration: [7],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-7day.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线（除Nozomi和Mizuho）',
      '7天连续使用',
      '可乘坐JR巴士',
      '机场快线包含'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://www.japanrailpass.net/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['全国旅行', '新干线体验', '多城市游览']
  },
  {
    id: 'japan-rail-pass-14day',
    name: {
      en: 'Japan Rail Pass 14-Day',
      jp: 'ジャパンレールパス 14日券'
    },
    description: '日本全国JR线路的14日周游券，包含新干线（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 80000,
        green: 110000
      },
      child: {
        regular: 40000,
        green: 55000
      }
    },
    duration: [14],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-14day.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线（除Nozomi和Mizuho）',
      '14天连续使用',
      '可乘坐JR巴士',
      '机场快线包含'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://www.japanrailpass.net/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['全国旅行', '新干线体验', '多城市游览']
  },
  {
    id: 'japan-rail-pass-21day',
    name: {
      en: 'Japan Rail Pass 21-Day',
      jp: 'ジャパンレールパス 21日券'
    },
    description: '日本全国JR线路的21日周游券，包含新干线（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 105000,
        green: 145000
      },
      child: {
        regular: 52500,
        green: 72500
      }
    },
    duration: [21],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-21day.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线（除Nozomi和Mizuho）',
      '21天连续使用',
      '可乘坐JR巴士',
      '机场快线包含'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://www.japanrailpass.net/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['全国旅行', '新干线体验', '多城市游览']
  },
  {
    id: 'japan-rail-green-pass-7day',
    name: {
      en: 'Japan Rail Green Pass 7-Day',
      jp: 'ジャパンレールグリーンパス 7日券'
    },
    description: '日本全国JR线路的7日绿色车厢周游券，包含新干线绿色车厢（除Nozomi和Mizuho），覆盖日本全国JR线路，高级版本。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [7],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-green-pass-7day.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '可乘坐绿色车厢',
      '包含所有新干线绿色车厢（除Nozomi和Mizuho）',
      '7天连续使用',
      '可乘坐JR巴士',
      '机场快线包含'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '绿色车厢体验更舒适',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://www.japanrailpass.net/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'national',
    popularity: 4,
    bestFor: ['全国旅行', '绿色车厢体验', '舒适旅行']
  },
  {
    id: 'japan-rail-green-pass-14day',
    name: {
      en: 'Japan Rail Green Pass 14-Day',
      jp: 'ジャパンレールグリーンパス 14日券'
    },
    description: '日本全国JR线路的14日绿色车厢周游券，包含新干线绿色车厢（除Nozomi和Mizuho），覆盖日本全国JR线路，高级版本。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [14],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-green-pass-14day.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '可乘坐绿色车厢',
      '包含所有新干线绿色车厢（除Nozomi和Mizuho）',
      '14天连续使用',
      '可乘坐JR巴士',
      '机场快线包含'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '绿色车厢体验更舒适',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://www.japanrailpass.net/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'national',
    popularity: 4,
    bestFor: ['全国旅行', '绿色车厢体验', '舒适旅行']
  },
  {
    id: 'japan-rail-green-pass-21day',
    name: {
      en: 'Japan Rail Green Pass 21-Day',
      jp: 'ジャパンレールグリーンパス 21日券'
    },
    description: '日本全国JR线路的21日绿色车厢周游券，包含新干线绿色车厢（除Nozomi和Mizuho），覆盖日本全国JR线路，高级版本。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [21],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-green-pass-21day.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '可乘坐绿色车厢',
      '包含所有新干线绿色车厢（除Nozomi和Mizuho）',
      '21天连续使用',
      '可乘坐JR巴士',
      '机场快线包含'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '绿色车厢体验更舒适',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://www.japanrailpass.net/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'national',
    popularity: 4,
    bestFor: ['全国旅行', '绿色车厢体验', '舒适旅行']
  },
  {
    id: 'japan-bus-pass-3day',
    name: {
      en: 'Japan Bus Pass 3-Day (WILLER EXPRESS)',
      jp: 'ジャパンバスパス 3日券（WILLER EXPRESS）'
    },
    description: '全国WILLER巴士的3日周游券，可搭乘多地巴士，适合长途预算旅行。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [3],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-bus-pass-3day.png'
    },
    trainTypes: ['巴士'],
    advantages: [
      '覆盖全国WILLER巴士',
      '可搭乘多地巴士',
      '适合长途预算旅行',
      '3天连续使用',
      '价格经济实惠'
    ],
    disadvantages: [
      '仅限WILLER巴士',
      '不包含JR线路',
      '不包含新干线',
      '速度较慢'
    ],
    tips: [
      '适合预算旅行',
      '可游览多个城市',
      '建议提前预订座位',
      '注意巴士时刻表'
    ],
    officialLinks: [
      { name: 'WILLER EXPRESS', url: 'https://willerexpress.com/' }
    ],
    category: 'national',
    popularity: 3,
    bestFor: ['预算旅行', '长途巴士', '多地游览']
  },
  {
    id: 'japan-bus-pass-5day',
    name: {
      en: 'Japan Bus Pass 5-Day (WILLER EXPRESS)',
      jp: 'ジャパンバスパス 5日券（WILLER EXPRESS）'
    },
    description: '全国WILLER巴士的5日周游券，可搭乘多地巴士，适合长途预算旅行。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [5],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-bus-pass-5day.png'
    },
    trainTypes: ['巴士'],
    advantages: [
      '覆盖全国WILLER巴士',
      '可搭乘多地巴士',
      '适合长途预算旅行',
      '5天连续使用',
      '价格经济实惠'
    ],
    disadvantages: [
      '仅限WILLER巴士',
      '不包含JR线路',
      '不包含新干线',
      '速度较慢'
    ],
    tips: [
      '适合预算旅行',
      '可游览多个城市',
      '建议提前预订座位',
      '注意巴士时刻表'
    ],
    officialLinks: [
      { name: 'WILLER EXPRESS', url: 'https://willerexpress.com/' }
    ],
    category: 'national',
    popularity: 3,
    bestFor: ['预算旅行', '长途巴士', '多地游览']
  },
  {
    id: 'japan-bus-pass-7day',
    name: {
      en: 'Japan Bus Pass 7-Day (WILLER EXPRESS)',
      jp: 'ジャパンバスパス 7日券（WILLER EXPRESS）'
    },
    description: '全国WILLER巴士的7日周游券，可搭乘多地巴士，适合长途预算旅行。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [7],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-bus-pass-7day.png'
    },
    trainTypes: ['巴士'],
    advantages: [
      '覆盖全国WILLER巴士',
      '可搭乘多地巴士',
      '适合长途预算旅行',
      '7天连续使用',
      '价格经济实惠'
    ],
    disadvantages: [
      '仅限WILLER巴士',
      '不包含JR线路',
      '不包含新干线',
      '速度较慢'
    ],
    tips: [
      '适合预算旅行',
      '可游览多个城市',
      '建议提前预订座位',
      '注意巴士时刻表'
    ],
    officialLinks: [
      { name: 'WILLER EXPRESS', url: 'https://willerexpress.com/' }
    ],
    category: 'national',
    popularity: 3,
    bestFor: ['预算旅行', '长途巴士', '多地游览']
  },

  // 北海道地区周游券
  {
    id: 'hokkaido-rail-pass',
    name: {
      en: 'Hokkaido Rail Pass',
      jp: '北海道铁路周游券'
    },
    description: '北海道全域的3/5/7日周游券，最经典北海道通票，覆盖北海道所有JR线路。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [3, 5, 7],
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖北海道全域',
      '最经典北海道通票',
      '3/5/7日灵活选择',
      '覆盖北海道所有JR线路',
      '性价比高'
    ],
    disadvantages: [
      '仅限北海道地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行',
      '可游览北海道所有景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/' }
    ],
    category: 'regional',
    popularity: 5,
    bestFor: ['北海道全域', '经典通票', '全岛旅行']
  },
  {
    id: 'sapporo-furano-area-pass',
    name: {
      en: 'Sapporo-Furano Area Pass',
      jp: '札幌・富良野地区周游券'
    },
    description: '札幌、富良野、美瑛的4日周游券，夏季花田热门路线，适合夏季北海道旅行。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [4],
    coverage: {
      regions: ['札幌', '富良野', '美瑛'],
      map: '/images/coverage/sapporo-furano-area-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖札幌、富良野、美瑛',
      '夏季花田热门路线',
      '4天连续使用',
      '适合夏季北海道旅行',
      '价格合理'
    ],
    disadvantages: [
      '仅限札幌、富良野、美瑛地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合夏季北海道旅行',
      '可游览札幌、富良野、美瑛',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['夏季花田', '札幌富良野', '美瑛观光']
  },
  {
    id: 'sapporo-noboribetsu-pass',
    name: {
      en: 'Sapporo-Noboribetsu Pass',
      jp: '札幌・登别周游券'
    },
    description: '札幌、登别的2日周游券，温泉观光向，适合温泉度假之旅。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [2],
    coverage: {
      regions: ['札幌', '登别'],
      map: '/images/coverage/sapporo-noboribetsu-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖札幌、登别',
      '温泉观光向',
      '2天连续使用',
      '适合温泉度假之旅',
      '价格合理'
    ],
    disadvantages: [
      '仅限札幌、登别地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合温泉度假之旅',
      '可游览札幌、登别',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['温泉度假', '札幌登别', '温泉观光']
  },
  {
    id: 'jr-east-south-hokkaido-rail-pass-6day',
    name: {
      en: 'JR East-South Hokkaido Rail Pass 6-Day',
      jp: 'JR东日本・南北海道铁路周游券 6日券'
    },
    description: '东日本 + 南北海道的6日周游券，连接东京、仙台、函馆，覆盖东北和北海道南部地区。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [6],
    coverage: {
      regions: ['东京', '仙台', '函馆', '东北', '北海道南部'],
      map: '/images/coverage/jr-east-south-hokkaido-rail-pass-6day.png'
    },
    trainTypes: ['东北新干线', '北海道新干线', '特急列车', '普通列车'],
    advantages: [
      '连接东京、仙台、函馆',
      '覆盖东北和北海道南部',
      '包含东北新干线和北海道新干线',
      '6天连续使用',
      '跨地区旅行便利'
    ],
    disadvantages: [
      '仅限东北和北海道南部',
      '不包含北海道北部',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合东北和北海道南部旅行',
      '可游览东京、仙台、函馆',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东日本・南北海道铁路周游券', url: 'https://www.jreast.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东北北海道', '东京仙台函馆', '跨地区旅行']
  },

  // 东北地区周游券
  {
    id: 'jr-east-tohoku-pass',
    name: {
      en: 'JR East Pass (Tohoku Area)',
      jp: 'JR东日本铁路周游券（东北地区）'
    },
    description: '东京→青森、仙台、秋田、山形、福岛等东北地区的周游券，任意5天内自由使用。',
    price: {
      adult: {
        regular: 30000,
        green: 30000
      },
      child: {
        regular: 15000,
        green: 15000
      }
    },
    duration: [5],
    coverage: {
      regions: ['东京', '青森', '仙台', '秋田', '山形', '福岛'],
      map: '/images/coverage/jr-east-tohoku-pass.png'
    },
    trainTypes: ['东北新干线', '上越新干线', '特急列车', '普通列车'],
    advantages: [
      '覆盖东北地区全境',
      '包含东北新干线',
      '任意5天内自由使用',
      '可游览青森、仙台、秋田等地',
      '价格合理'
    ],
    disadvantages: [
      '仅限东北地区',
      '不包含东海道新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合东北地区深度游',
      '可游览青森、仙台、秋田、山形、福岛',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东日本铁路周游券（东北地区）', url: 'https://www.jreast.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东北地区', '青森仙台', '秋田山形']
  },
  {
    id: 'jr-east-nagano-niigata-pass',
    name: {
      en: 'JR East Pass (Nagano & Niigata Area)',
      jp: 'JR东日本铁路周游券（长野・新潟地区）'
    },
    description: '东京、长野、新潟、轻井泽、上越等地区的周游券，任意5天内自由使用。',
    price: {
      adult: {
        regular: 27000,
        green: 27000
      },
      child: {
        regular: 13500,
        green: 13500
      }
    },
    duration: [5],
    coverage: {
      regions: ['东京', '长野', '新潟', '轻井泽', '上越'],
      map: '/images/coverage/jr-east-nagano-niigata-pass.png'
    },
    trainTypes: ['北陆新干线', '上越新干线', '特急列车', '普通列车'],
    advantages: [
      '覆盖长野、新潟地区',
      '包含北陆新干线',
      '任意5天内自由使用',
      '可游览轻井泽、上越等地',
      '价格合理'
    ],
    disadvantages: [
      '仅限长野、新潟地区',
      '不包含东海道新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合长野、新潟地区旅行',
      '可游览轻井泽、上越、长野、新潟',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东日本铁路周游券（长野・新潟地区）', url: 'https://www.jreast.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['长野新潟', '轻井泽', '上越地区']
  },
  {
    id: 'jr-east-south-hokkaido-pass',
    name: {
      en: 'JR East & South Hokkaido Pass',
      jp: 'JR东日本・南北海道铁路周游券'
    },
    description: '从东京至函馆、札幌之间通行（包含东北・北海道南部）的周游券，任意6天内自由使用。',
    price: {
      adult: {
        regular: 35000,
        green: 35000
      },
      child: {
        regular: 17500,
        green: 17500
      }
    },
    duration: [6],
    coverage: {
      regions: ['东京', '东北', '函馆', '札幌', '北海道南部'],
      map: '/images/coverage/jr-east-south-hokkaido-pass.png'
    },
    trainTypes: ['东北新干线', '北海道新干线', '特急列车', '普通列车'],
    advantages: [
      '覆盖东北和北海道南部',
      '包含东北新干线和北海道新干线',
      '任意6天内自由使用',
      '可游览函馆、札幌等地',
      '跨地区旅行便利'
    ],
    disadvantages: [
      '仅限东北和北海道南部',
      '不包含北海道北部',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合东北和北海道南部旅行',
      '可游览函馆、札幌、青森、仙台',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东日本・南北海道铁路周游券', url: 'https://www.jreast.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东北北海道', '函馆札幌', '跨地区旅行']
  },

  // 关东地区周游券
  {
    id: 'tokyo-wide-pass',
    name: {
      en: 'JR Tokyo Wide Pass',
      jp: 'JR東京广域周游券'
    },
    description: '东京、富士山、日光、轻井泽、伊豆等关东近郊地区的周游券，连续3天有效。',
    price: {
      adult: {
        regular: 15000,
        green: 15000
      },
      child: {
        regular: 7500,
        green: 7500
      }
    },
    duration: [3],
    coverage: {
      regions: ['东京', '富士山', '日光', '轻井泽', '伊豆'],
      map: '/images/coverage/tokyo-wide-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车', '成田特快'],
    advantages: [
      '覆盖东京及关东近郊',
      '可到富士山、日光、轻井泽、伊豆',
      '包含成田特快',
      '连续3天使用',
      '价格合理'
    ],
    disadvantages: [
      '仅限关东地区',
      '不包含新干线',
      '连续使用不可中断'
    ],
    tips: [
      '适合东京周边旅行',
      '可游览富士山、日光、轻井泽、伊豆',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东京广域周游券', url: 'https://www.jreast.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东京周边', '富士山', '日光轻井泽', '伊豆']
  },
  {
    id: 'kansai-one-day-pass',
    name: {
      en: 'Kansai One-day Pass',
      jp: '関西一日券'
    },
    description: '大阪、京都、神户等关西地区的1日周游券，适合短途深度游，含部分特快列车。',
    price: {
      adult: {
        regular: 2800,
        green: 2800
      },
      child: {
        regular: 1400,
        green: 1400
      }
    },
    duration: [1],
    coverage: {
      regions: ['关西', '大阪', '京都', '神户'],
      map: '/images/coverage/kansai-one-day-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖关西主要城市',
      '包含部分特快列车',
      '价格便宜',
      '适合短途深度游',
      '当日有效'
    ],
    disadvantages: [
      '仅限1天使用',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西地区一日游',
      '可游览大阪、京都、神户',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '関西一日券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西一日游', '大阪京都', '短途旅行']
  },
  {
    id: 'kansai-two-day-pass',
    name: {
      en: 'Kansai Two-day Pass',
      jp: '関西2日券'
    },
    description: '大阪、京都、奈良等关西地区的2日周游券，可连续或分开使用，灵活度高，覆盖关西主要城市。',
    price: {
      adult: {
        regular: 5600,
        green: 5600
      },
      child: {
        regular: 2800,
        green: 2800
      }
    },
    duration: [2],
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良'],
      map: '/images/coverage/kansai-two-day-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖关西主要城市',
      '可连续或分开使用',
      '灵活度高',
      '价格合理',
      '适合2日游'
    ],
    disadvantages: [
      '仅限2天使用',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西地区2日游',
      '可游览大阪、京都、奈良',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '関西2日券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西2日游', '大阪京都奈良', '灵活旅行']
  },
  {
    id: 'kansai-three-day-pass',
    name: {
      en: 'Kansai Three-day Pass',
      jp: '関西3日券'
    },
    description: '关西主要城市的3日周游券，3日内无限乘坐，适合广泛游览。',
    price: {
      adult: {
        regular: 7000,
        green: 7000
      },
      child: {
        regular: 3500,
        green: 3500
      }
    },
    duration: [3],
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户'],
      map: '/images/coverage/kansai-three-day-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖关西主要城市',
      '3日内无限乘坐',
      '适合广泛游览',
      '价格合理',
      '灵活使用'
    ],
    disadvantages: [
      '仅限3天使用',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西地区3日游',
      '可游览大阪、京都、奈良、神户',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '関西3日券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西3日游', '广泛游览', '深度体验']
  },
  {
    id: 'kansai-four-day-pass',
    name: {
      en: 'Kansai Four-day Pass',
      jp: '関西4日券'
    },
    description: '关西广泛区域的4日周游券，适合深度旅游，覆盖范围更广。',
    price: {
      adult: {
        regular: 8500,
        green: 8500
      },
      child: {
        regular: 4250,
        green: 4250
      }
    },
    duration: [4],
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户', '和歌山'],
      map: '/images/coverage/kansai-four-day-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖关西广泛区域',
      '适合深度旅游',
      '4日内无限乘坐',
      '覆盖范围更广',
      '价格合理'
    ],
    disadvantages: [
      '仅限4天使用',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西地区深度游',
      '可游览大阪、京都、奈良、神户、和歌山',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '関西4日券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西深度游', '广泛区域', '4日旅行']
  },
  {
    id: 'kansai-wide-area-pass',
    name: {
      en: 'Kansai Wide Area Pass',
      jp: '関西広域鉄道周遊券'
    },
    description: '大阪、京都、神户、仓敷、冈山等更大范围的周游券，连续使用，含JR新干线、特快列车、私铁部分线路。',
    price: {
      adult: {
        regular: 12000,
        green: 12000
      },
      child: {
        regular: 6000,
        green: 6000
      }
    },
    duration: [5],
    coverage: {
      regions: ['关西', '大阪', '京都', '神户', '仓敷', '冈山'],
      map: '/images/coverage/kansai-wide-area-pass.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', '私铁'],
    advantages: [
      '覆盖更大范围',
      '包含JR新干线',
      '含特快列车和私铁部分线路',
      '连续使用',
      '适合广泛游览'
    ],
    disadvantages: [
      '价格较高',
      '连续使用不可中断',
      '部分私铁线路需额外费用'
    ],
    tips: [
      '适合关西广泛区域旅行',
      '可游览大阪、京都、神户、仓敷、冈山',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '関西広域鉄道周遊券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西广泛区域', '新干线体验', '深度游览']
  },
  {
    id: 'kansai-area-rail-pass',
    name: {
      en: 'Kansai Area Rail Pass',
      jp: '关西地区铁路周游券'
    },
    description: '大阪、京都、奈良、神户等关西地区的周游券，1/2/3/4天任选，可连续多天使用，可搭乘关空特急HARUKA指定席。',
    price: {
      adult: {
        regular: 2800,
        green: 2800
      },
      child: {
        regular: 1400,
        green: 1400
      }
    },
    duration: [1, 2, 3, 4],
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户'],
      map: '/images/coverage/kansai-area-rail-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车', '关空特急HARUKA'],
    advantages: [
      '覆盖关西主要城市',
      '1/2/3/4天任选',
      '可连续多天使用',
      '可搭乘关空特急HARUKA指定席',
      '价格灵活'
    ],
    disadvantages: [
      '仅限关西地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西地区旅行',
      '可游览大阪、京都、奈良、神户',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '关西地区铁路周游券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西旅行', '大阪京都奈良', '灵活选择']
  },
  {
    id: 'kansai-wide-area-rail-pass',
    name: {
      en: 'Kansai Wide Area Rail Pass',
      jp: '关西广域铁路周游券'
    },
    description: '关西地区+冈山、仓敷、城崎温泉、和歌山、姬路等更大范围的周游券，5天连续使用，覆盖面更广，包括部分新干线。',
    price: {
      adult: {
        regular: 12000,
        green: 12000
      },
      child: {
        regular: 6000,
        green: 6000
      }
    },
    duration: [5],
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户', '冈山', '仓敷', '城崎温泉', '和歌山', '姬路'],
      map: '/images/coverage/kansai-wide-area-rail-pass.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖面更广',
      '包括部分新干线',
      '5天连续使用',
      '可游览更多城市',
      '性价比高'
    ],
    disadvantages: [
      '连续使用不可中断',
      '价格较高',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西广泛区域旅行',
      '可游览大阪、京都、奈良、神户、冈山、仓敷、城崎温泉、和歌山、姬路',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '关西广域铁路周游券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西广泛区域', '新干线体验', '深度游览']
  },
  {
    id: 'kansai-hiroshima-pass',
    name: {
      en: 'Kansai & Hiroshima/北陆/高山/山阳山阴 Area Pass',
      jp: '关西&广岛/北陆/高山/山阳山阴地区券'
    },
    description: '关西+相应扩展区域的周游券，5~7天有效期，如关西至广岛、山阳新干线区间等，覆盖范围更广。',
    price: {
      adult: {
        regular: 17000,
        green: 17000
      },
      child: {
        regular: 8500,
        green: 8500
      }
    },
    duration: [5, 6, 7],
    coverage: {
      regions: ['关西', '广岛', '北陆', '高山', '山阳', '山阴'],
      map: '/images/coverage/kansai-hiroshima-pass.png'
    },
    trainTypes: ['山阳新干线', '特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖关西+扩展区域',
      '包含山阳新干线',
      '5~7天灵活选择',
      '可游览更多地区',
      '跨地区旅行便利'
    ],
    disadvantages: [
      '价格较高',
      '路线复杂需合理规划',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合关西+扩展区域旅行',
      '可游览关西、广岛、北陆、高山、山阳、山阴',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '关西&广岛/北陆/高山/山阳山阴地区券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西扩展区域', '山阳新干线', '跨地区旅行']
  },
  {
    id: 'sanyo-sanin-area-pass',
    name: {
      en: 'Sanyo & Sanin Area Rail Pass',
      jp: '山阳&山阴地区铁路周游券'
    },
    description: '大阪、冈山、广岛、博多等山阳・山阴地区的周游券，7天有效期，山阳・山阴新干线，覆盖极其宽广。',
    price: {
      adult: {
        regular: 20400,
        green: 20400
      },
      child: {
        regular: 10200,
        green: 10200
      }
    },
    duration: [7],
    coverage: {
      regions: ['大阪', '冈山', '广岛', '博多', '山阳', '山阴'],
      map: '/images/coverage/sanyo-sanin-area-pass.png'
    },
    trainTypes: ['山阳新干线', '山阴新干线', '特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖山阳・山阴地区',
      '包含山阳・山阴新干线',
      '7天有效期',
      '覆盖极其宽广',
      '可游览多个城市'
    ],
    disadvantages: [
      '价格较高',
      '仅限山阳・山阴地区',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合山阳・山阴地区旅行',
      '可游览大阪、冈山、广岛、博多',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '山阳&山阴地区铁路周游券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['山阳山阴地区', '新干线体验', '广泛游览']
  },
  {
    id: 'jr-west-all-area-pass',
    name: {
      en: 'JR West All Area Rail Pass',
      jp: 'JR西日本全地区铁路周游券'
    },
    description: '关西、北陆、山阳山阴、九州至博多的JR西日本全地区周游券，7天有效期，JR西日本业务区域全面覆盖。',
    price: {
      adult: {
        regular: 26000,
        green: 26000
      },
      child: {
        regular: 13000,
        green: 13000
      }
    },
    duration: [7],
    coverage: {
      regions: ['关西', '北陆', '山阳', '山阴', '九州', '博多'],
      map: '/images/coverage/jr-west-all-area-pass.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车'],
    advantages: [
      'JR西日本业务区域全面覆盖',
      '包含所有新干线',
      '7天有效期',
      '覆盖范围最广',
      '可游览多个地区'
    ],
    disadvantages: [
      '价格最高',
      '路线复杂需合理规划',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合JR西日本全地区旅行',
      '可游览关西、北陆、山阳、山阴、九州、博多',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR西日本全地区铁路周游券', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['JR西日本全地区', '新干线体验', '广泛游览']
  },
  {
    id: 'hiroshima-yamaguchi-area-pass',
    name: {
      en: 'Hiroshima-Yamaguchi Area Pass',
      jp: '广岛・山口地区周游券'
    },
    description: '广岛、山口地区的5日周游券，适合西日本海岸游，覆盖广岛和山口县主要景点。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [5],
    coverage: {
      regions: ['广岛', '山口', '西日本海岸'],
      map: '/images/coverage/hiroshima-yamaguchi-area-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖广岛和山口地区',
      '适合西日本海岸游',
      '5天连续使用',
      '可游览广岛、山口主要景点',
      '价格合理'
    ],
    disadvantages: [
      '仅限广岛、山口地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合西日本海岸游',
      '可游览广岛、山口主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR西日本', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['西日本海岸游', '广岛山口', '海岸观光']
  },
  {
    id: 'hokuriku-arch-pass',
    name: {
      en: 'Hokuriku Arch Pass',
      jp: '北陆拱形周游券'
    },
    description: '东京→金泽→大阪的7日周游券，适合东京进、大阪出路线，覆盖北陆地区主要城市。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [7],
    coverage: {
      regions: ['东京', '金泽', '大阪', '北陆地区'],
      map: '/images/coverage/hokuriku-arch-pass.png'
    },
    trainTypes: ['北陆新干线', '特急列车', '急行列车', '普通列车'],
    advantages: [
      '适合东京进、大阪出路线',
      '覆盖北陆地区主要城市',
      '包含北陆新干线',
      '7天连续使用',
      '跨地区旅行便利'
    ],
    disadvantages: [
      '仅限北陆地区',
      '路线相对固定',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合东京进、大阪出路线',
      '可游览东京、金泽、大阪',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东日本', url: 'https://www.jreast.co.jp/' },
      { name: 'JR西日本', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东京进大阪出', '北陆地区', '金泽观光']
  },

  // JR Central（东海地区）周游券
  {
    id: 'takayama-hokuriku-area-tourist-pass',
    name: {
      en: 'Takayama-Hokuriku Area Tourist Pass',
      jp: '高山・北陆地区周游券'
    },
    description: '名古屋、金泽、飞驒高山的5日周游券，热门山地路线，适合探索日本中部山区。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [5],
    coverage: {
      regions: ['名古屋', '金泽', '飞驒高山', '北陆地区'],
      map: '/images/coverage/takayama-hokuriku-area-tourist-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖名古屋、金泽、飞驒高山',
      '热门山地路线',
      '5天连续使用',
      '适合探索日本中部山区',
      '价格合理'
    ],
    disadvantages: [
      '仅限中部地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合探索日本中部山区',
      '可游览名古屋、金泽、飞驒高山',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东海', url: 'https://www.jr-central.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['中部山区', '名古屋金泽', '高山探索']
  },
  {
    id: 'mt-fuji-shizuoka-area-pass',
    name: {
      en: 'Mt. Fuji-Shizuoka Area Pass',
      jp: '富士山・静冈地区周游券'
    },
    description: '静冈、富士山周边的3日周游券，适合富士山观光，覆盖静冈县主要景点。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [3],
    coverage: {
      regions: ['静冈', '富士山周边'],
      map: '/images/coverage/mt-fuji-shizuoka-area-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖静冈、富士山周边',
      '适合富士山观光',
      '3天连续使用',
      '可游览静冈县主要景点',
      '价格合理'
    ],
    disadvantages: [
      '仅限静冈地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合富士山观光',
      '可游览静冈县主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东海', url: 'https://www.jr-central.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['富士山观光', '静冈地区', '山景体验']
  },
  {
    id: 'ise-kumano-wakayama-area-pass',
    name: {
      en: 'Ise-Kumano-Wakayama Area Pass',
      jp: '伊势・熊野・和歌山地区周游券'
    },
    description: '伊势、熊野、和歌山的5日周游券，深度关西南部探索，适合文化历史之旅。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [5],
    coverage: {
      regions: ['伊势', '熊野', '和歌山', '关西南部'],
      map: '/images/coverage/ise-kumano-wakayama-area-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖伊势、熊野、和歌山',
      '深度关西南部探索',
      '5天连续使用',
      '适合文化历史之旅',
      '价格合理'
    ],
    disadvantages: [
      '仅限关西南部',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合文化历史之旅',
      '可游览伊势、熊野、和歌山',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR东海', url: 'https://www.jr-central.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西南部', '文化历史', '伊势熊野']
  },

  // JR Kyushu（九州）周游券
  {
    id: 'jr-kyushu-rail-pass-all-kyushu',
    name: {
      en: 'JR Kyushu Rail Pass (All Kyushu)',
      jp: 'JR九州铁路周游券（全九州）'
    },
    description: '九州全岛的3/5/7日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [3, 5, 7],
    coverage: {
      regions: ['九州全岛', '熊本', '鹿儿岛', '博多'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖九州全岛',
      '包含新干线',
      '3/5/7日灵活选择',
      '可游览熊本、鹿儿岛、博多',
      '九州最全面的周游券'
    ],
    disadvantages: [
      '仅限九州地区',
      '价格较高',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合九州全岛旅行',
      '可游览熊本、鹿儿岛、博多',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    category: 'regional',
    popularity: 5,
    bestFor: ['九州全岛', '新干线体验', '熊本鹿儿岛']
  },
  {
    id: 'jr-northern-kyushu-pass',
    name: {
      en: 'JR Northern Kyushu Pass',
      jp: 'JR北九州周游券'
    },
    description: '北九州（博多→长崎）的3/5日周游券，北部专用，适合北九州地区旅行。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [3, 5],
    coverage: {
      regions: ['北九州', '博多', '长崎'],
      map: '/images/coverage/jr-northern-kyushu-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖北九州地区',
      '3/5日灵活选择',
      '适合北九州地区旅行',
      '价格合理',
      '北部专用'
    ],
    disadvantages: [
      '仅限北九州地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合北九州地区旅行',
      '可游览博多、长崎',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北九州地区', '博多长崎', '北部旅行']
  },
  {
    id: 'jr-southern-kyushu-pass',
    name: {
      en: 'JR Southern Kyushu Pass',
      jp: 'JR南九州周游券'
    },
    description: '鹿儿岛、宫崎的3日周游券，热带南部风光，适合南九州地区旅行。',
    price: {
      adult: {
        regular: 0,
        green: 0
      },
      child: {
        regular: 0,
        green: 0
      }
    },
    duration: [3],
    coverage: {
      regions: ['鹿儿岛', '宫崎', '南九州'],
      map: '/images/coverage/jr-southern-kyushu-pass.png'
    },
    trainTypes: ['特急列车', '急行列车', '普通列车'],
    advantages: [
      '覆盖鹿儿岛、宫崎',
      '热带南部风光',
      '3日连续使用',
      '适合南九州地区旅行',
      '价格合理'
    ],
    disadvantages: [
      '仅限南九州地区',
      '不包含新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合南九州地区旅行',
      '可游览鹿儿岛、宫崎',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['南九州地区', '鹿儿岛宫崎', '热带风光']
  },

  // 城市地铁一日券
  {
    id: 'tokyo-metro-24hour',
    name: {
      en: 'Tokyo Metro 24-hour Ticket',
      jp: '東京Metro地铁24小时乘车券'
    },
    description: '东京Metro全9条线路的24小时乘车券，适合东京市内一日游。',
    price: {
      adult: {
        regular: 700,
        green: 700
      },
      child: {
        regular: 350,
        green: 350
      }
    },
    duration: [1],
    coverage: {
      regions: ['东京', '东京Metro全9条线路'],
      map: '/images/coverage/tokyo-metro-24hour.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖东京Metro全9条线路',
      '24小时有效',
      '价格便宜',
      '适合东京市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限东京Metro线路',
      '不包含JR线路',
      '不包含都营地铁'
    ],
    tips: [
      '适合东京市内一日游',
      '可游览东京主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '东京Metro', url: 'https://www.tokyometro.jp/' }
    ],
    category: 'city',
    popularity: 4,
    bestFor: ['东京一日游', '市内观光', '地铁体验']
  },
  {
    id: 'toei-subway-1day',
    name: {
      en: 'Toei Subway One-day Pass',
      jp: '都营地铁一日通票'
    },
    description: '东京都内都营地铁线路的一日通票，可与东京Metro联合使用。',
    price: {
      adult: {
        regular: 900,
        green: 900
      },
      child: {
        regular: 450,
        green: 450
      }
    },
    duration: [1],
    coverage: {
      regions: ['东京', '都营地铁线路'],
      map: '/images/coverage/toei-subway-1day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖都营地铁线路',
      '可与东京Metro联合使用',
      '一日有效',
      '价格合理',
      '购买方便'
    ],
    disadvantages: [
      '仅限都营地铁线路',
      '不包含JR线路',
      '需与东京Metro联合使用'
    ],
    tips: [
      '适合东京市内一日游',
      '可与东京Metro联合使用',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '都营地铁', url: 'https://www.kotsu.metro.tokyo.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['东京一日游', '都营地铁', '联合使用']
  },
  {
    id: 'tokyo-metro-2day',
    name: {
      en: 'Tokyo Metro Two-day Pass',
      jp: '東京Metro二日券'
    },
    description: '东京Metro全9条线路的二日券，适合东京市内二日游。',
    price: {
      adult: {
        regular: 1200,
        green: 1200
      },
      child: {
        regular: 600,
        green: 600
      }
    },
    duration: [2],
    coverage: {
      regions: ['东京', '东京Metro全9条线路'],
      map: '/images/coverage/tokyo-metro-2day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖东京Metro全9条线路',
      '二日有效',
      '价格合理',
      '适合东京市内二日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限东京Metro线路',
      '不包含JR线路',
      '不包含都营地铁'
    ],
    tips: [
      '适合东京市内二日游',
      '可游览东京主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '东京Metro', url: 'https://www.tokyometro.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['东京二日游', '市内观光', '地铁体验']
  },
  {
    id: 'tokyo-metro-3day',
    name: {
      en: 'Tokyo Metro Three-day Pass',
      jp: '東京Metro三日券'
    },
    description: '东京Metro全9条线路的三日券，适合东京市内三日游。',
    price: {
      adult: {
        regular: 1500,
        green: 1500
      },
      child: {
        regular: 750,
        green: 750
      }
    },
    duration: [3],
    coverage: {
      regions: ['东京', '东京Metro全9条线路'],
      map: '/images/coverage/tokyo-metro-3day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖东京Metro全9条线路',
      '三日有效',
      '价格合理',
      '适合东京市内三日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限东京Metro线路',
      '不包含JR线路',
      '不包含都营地铁'
    ],
    tips: [
      '适合东京市内三日游',
      '可游览东京主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '东京Metro', url: 'https://www.tokyometro.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['东京三日游', '市内观光', '地铁体验']
  },
  {
    id: 'osaka-subway-1day',
    name: {
      en: 'Osaka Subway One-day Pass',
      jp: '大阪地铁一日券'
    },
    description: '大阪市营地铁全线的一日券，适合大阪市内一日游。',
    price: {
      adult: {
        regular: 800,
        green: 800
      },
      child: {
        regular: 400,
        green: 400
      }
    },
    duration: [1],
    coverage: {
      regions: ['大阪', '大阪市营地铁全线'],
      map: '/images/coverage/osaka-subway-1day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖大阪市营地铁全线',
      '一日有效',
      '价格便宜',
      '适合大阪市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限大阪市营地铁',
      '不包含JR线路',
      '不包含私铁'
    ],
    tips: [
      '适合大阪市内一日游',
      '可游览大阪主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '大阪地铁官方', url: 'https://www.osakametro.co.jp/' }
    ],
    category: 'city',
    popularity: 4,
    bestFor: ['大阪一日游', '市内观光', '地铁体验']
  },
  {
    id: 'kansai-railway-1day',
    name: {
      en: 'Kansai Railway One-day Pass',
      jp: '关西铁路一日券'
    },
    description: '大阪多条私铁和JR区间的一日券，覆盖范围更广。',
    price: {
      adult: {
        regular: 3500,
        green: 3500
      },
      child: {
        regular: 1750,
        green: 1750
      }
    },
    duration: [1],
    coverage: {
      regions: ['大阪', '关西', '多条私铁和JR区间'],
      map: '/images/coverage/kansai-railway-1day.png'
    },
    trainTypes: ['地铁', '私铁', 'JR'],
    advantages: [
      '覆盖大阪多条私铁和JR区间',
      '覆盖范围更广',
      '一日有效',
      '适合关西地区一日游',
      '性价比高'
    ],
    disadvantages: [
      '价格较高',
      '路线复杂需合理规划',
      '部分线路需额外费用'
    ],
    tips: [
      '适合关西地区一日游',
      '可游览大阪及周边地区',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '关西铁路', url: 'https://www.westjr.co.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['关西一日游', '广泛覆盖', '多线路体验']
  },
  {
    id: 'osaka-subway-2day',
    name: {
      en: 'Osaka Subway Two-day Pass',
      jp: '大阪地铁二日券'
    },
    description: '大阪市营地铁全线的二日券，适合大阪市内二日游。',
    price: {
      adult: {
        regular: 1600,
        green: 1600
      },
      child: {
        regular: 800,
        green: 800
      }
    },
    duration: [2],
    coverage: {
      regions: ['大阪', '大阪市营地铁全线'],
      map: '/images/coverage/osaka-subway-2day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖大阪市营地铁全线',
      '二日有效',
      '价格合理',
      '适合大阪市内二日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限大阪市营地铁',
      '不包含JR线路',
      '不包含私铁'
    ],
    tips: [
      '适合大阪市内二日游',
      '可游览大阪主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '大阪地铁官方', url: 'https://www.osakametro.co.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['大阪二日游', '市内观光', '地铁体验']
  },
  {
    id: 'kyoto-subway-1day',
    name: {
      en: 'Kyoto Subway One-day Pass',
      jp: '京都市营地铁一日券'
    },
    description: '京都市营地铁全线及公交的一日券，适合京都一日游。',
    price: {
      adult: {
        regular: 900,
        green: 900
      },
      child: {
        regular: 450,
        green: 450
      }
    },
    duration: [1],
    coverage: {
      regions: ['京都', '京都市营地铁全线及公交'],
      map: '/images/coverage/kyoto-subway-1day.png'
    },
    trainTypes: ['地铁', '巴士'],
    advantages: [
      '覆盖京都市营地铁全线及公交',
      '一日有效',
      '价格合理',
      '适合京都一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限京都市营地铁和公交',
      '不包含JR线路',
      '不包含私铁'
    ],
    tips: [
      '适合京都一日游',
      '可游览京都主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '京都市官方售票处', url: 'https://www.city.kyoto.lg.jp/' }
    ],
    category: 'city',
    popularity: 4,
    bestFor: ['京都一日游', '市内观光', '地铁巴士体验']
  },
  {
    id: 'kyoto-subway-2day',
    name: {
      en: 'Kyoto Subway Two-day Pass',
      jp: '京都市营地铁二日券'
    },
    description: '京都市营地铁全线及公交的二日券，适合京都二日游。',
    price: {
      adult: {
        regular: 1700,
        green: 1700
      },
      child: {
        regular: 850,
        green: 850
      }
    },
    duration: [2],
    coverage: {
      regions: ['京都', '京都市营地铁全线及公交'],
      map: '/images/coverage/kyoto-subway-2day.png'
    },
    trainTypes: ['地铁', '巴士'],
    advantages: [
      '覆盖京都市营地铁全线及公交',
      '二日有效',
      '价格合理',
      '适合京都二日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限京都市营地铁和公交',
      '不包含JR线路',
      '不包含私铁'
    ],
    tips: [
      '适合京都二日游',
      '可游览京都主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '京都市官方售票处', url: 'https://www.city.kyoto.lg.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['京都二日游', '市内观光', '地铁巴士体验']
  },
  {
    id: 'sapporo-subway-1day',
    name: {
      en: 'Sapporo Subway One-day Pass',
      jp: '札幌地铁一日券'
    },
    description: '札幌地铁全线路的一日券，适合札幌市内一日游。',
    price: {
      adult: {
        regular: 830,
        green: 830
      },
      child: {
        regular: 415,
        green: 415
      }
    },
    duration: [1],
    coverage: {
      regions: ['札幌', '札幌地铁全线路'],
      map: '/images/coverage/sapporo-subway-1day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖札幌地铁全线路',
      '一日有效',
      '价格合理',
      '适合札幌市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌地铁',
      '不包含JR线路',
      '不包含巴士'
    ],
    tips: [
      '适合札幌市内一日游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌地铁官方', url: 'https://www.city.sapporo.jp/st/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '市内观光', '地铁体验']
  },
  {
    id: 'sapporo-subway-2day',
    name: {
      en: 'Sapporo Subway Two-day Pass',
      jp: '札幌地铁二日券'
    },
    description: '札幌地铁全线路的二日券，适合札幌市内二日游。',
    price: {
      adult: {
        regular: 1500,
        green: 1500
      },
      child: {
        regular: 750,
        green: 750
      }
    },
    duration: [2],
    coverage: {
      regions: ['札幌', '札幌地铁全线路'],
      map: '/images/coverage/sapporo-subway-2day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖札幌地铁全线路',
      '二日有效',
      '价格合理',
      '适合札幌市内二日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌地铁',
      '不包含JR线路',
      '不包含巴士'
    ],
    tips: [
      '适合札幌市内二日游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌地铁官方', url: 'https://www.city.sapporo.jp/st/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌二日游', '市内观光', '地铁体验']
  },
  {
    id: 'nagoya-subway-1day',
    name: {
      en: 'Nagoya Subway One-day Pass',
      jp: '名古屋地铁一日券'
    },
    description: '名古屋市营地铁全线的一日券，适合名古屋市内一日游。',
    price: {
      adult: {
        regular: 740,
        green: 740
      },
      child: {
        regular: 370,
        green: 370
      }
    },
    duration: [1],
    coverage: {
      regions: ['名古屋', '名古屋市营地铁全线'],
      map: '/images/coverage/nagoya-subway-1day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖名古屋市营地铁全线',
      '一日有效',
      '价格便宜',
      '适合名古屋市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限名古屋市营地铁',
      '不包含JR线路',
      '不包含私铁'
    ],
    tips: [
      '适合名古屋市内一日游',
      '可游览名古屋主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '名古屋市交通局', url: 'https://www.kotsu.city.nagoya.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['名古屋一日游', '市内观光', '地铁体验']
  },
  {
    id: 'fukuoka-subway-1day',
    name: {
      en: 'Fukuoka Subway One-day Pass',
      jp: '福冈市地铁一日券'
    },
    description: '福冈市地铁所有线路的一日券，适合福冈市内一日游。',
    price: {
      adult: {
        regular: 640,
        green: 640
      },
      child: {
        regular: 320,
        green: 320
      }
    },
    duration: [1],
    coverage: {
      regions: ['福冈', '福冈市地铁所有线路'],
      map: '/images/coverage/fukuoka-subway-1day.png'
    },
    trainTypes: ['地铁'],
    advantages: [
      '覆盖福冈市地铁所有线路',
      '一日有效',
      '价格便宜',
      '适合福冈市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限福冈市地铁',
      '不包含JR线路',
      '不包含私铁'
    ],
    tips: [
      '适合福冈市内一日游',
      '可游览福冈主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '福冈地铁官方网站', url: 'https://subway.city.fukuoka.lg.jp/' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['福冈一日游', '市内观光', '地铁体验']
  },
  
];

// 按类别分组的周游券
export const passesByCategory = {
  national: unifiedPasses.filter(pass => pass.category === 'national'),
  regional: unifiedPasses.filter(pass => pass.category === 'regional'),
  city: unifiedPasses.filter(pass => pass.category === 'city')
};

// 按地区分组的周游券
export const passesByRegion = {
  '全国': unifiedPasses.filter(pass => pass.coverage.regions.includes('全国')),
  '关东': unifiedPasses.filter(pass => pass.coverage.regions.includes('关东')),
  '东北': unifiedPasses.filter(pass => pass.coverage.regions.includes('东北')),
  '关西': unifiedPasses.filter(pass => pass.coverage.regions.includes('关西')),
  '中国': unifiedPasses.filter(pass => pass.coverage.regions.includes('中国')),
  '四国': unifiedPasses.filter(pass => pass.coverage.regions.includes('四国')),
  '九州': unifiedPasses.filter(pass => pass.coverage.regions.includes('九州')),
  '北海道': unifiedPasses.filter(pass => pass.coverage.regions.includes('北海道')),
  '中部': unifiedPasses.filter(pass => pass.coverage.regions.includes('中部'))
};

// 热门周游券（按人气排序）
export const popularPasses = unifiedPasses
  .sort((a, b) => b.popularity - a.popularity)
  .slice(0, 6);

// 地区列表
export const regions = [
  '全国', '关东', '关西', '东北', '九州', '中国', '四国', '北海道', '中部'
];

// 列车类型列表
export const trainTypes = [
  '新干线', '特急列车', '急行列车', '普通列车', '地铁', '巴士', '观光列车', '私铁', 'JR'
];

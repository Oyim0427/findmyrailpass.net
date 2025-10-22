import { JRPass } from '@/types/pass';

// 东北/关东地区周游券
export const tohokuKantoPasses: JRPass[] = [
  // 东北地区周游券
  {
    id: 'jr-east-tohoku-pass',
    name: {
      en: 'JR East Pass (Tohoku Area)',
      jp: 'JR东日本铁路周游券（东北地区）',
      cn: 'JR东日本铁路周游券（东北地区）'
    },
    description: '东京→青森、仙台、秋田、山形、福岛等东北地区的周游券，任意5天内自由使用。',
    price: {
      adult: {
        regular: 30000,
      },
      child: {
        regular: 15000,
      }
    },
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['東北'],
      map: '/images/coverage/jr-east-tohoku-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['东北新干线', '上越新干线', '特急电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR东日本官方', url: 'https://www.jreast.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/50-jr-east-tohoku-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/50-jr-east-tohoku-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/jr-east-tohoku-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东北地区', '青森仙台', '秋田山形'],
    sortOrder: 1
  },
  {
    id: 'jr-east-nagano-niigata-pass',
    name: {
      en: 'JR East Pass (Nagano & Niigata Area)',
      jp: 'JR东日本铁路周游券（长野・新潟地区）',
      cn: 'JR东日本铁路周游券（长野・新潟地区）'
    },
    description: '东京、长野、新潟、轻井泽、上越等地区的周游券，任意5天内自由使用。',
    price: {
      adult: {
        regular: 27000,
      },
      child: {
        regular: 13500,
      }
    },
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['関東', '北信越'],
      map: '/images/coverage/jr-east-nagano-niigata-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['北陆新干线', '上越新干线', '特急电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR东日本官方', url: 'https://www.jreast.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/51-jr-east-nagano-niigata-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/51-jr-east-nagano-niigata-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/jr-east-nagano-niigata-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['长野新潟', '轻井泽', '上越地区'],
    sortOrder: 2
  },
  
  // 关东地区周游券
  {
    id: 'tokyo-wide-pass',
    name: {
      en: 'JR Tokyo Wide Pass',
      jp: 'JR東京广域周游券',
      cn: 'JR东京广域周游券'
    },
    description: '东京、富士山、日光、轻井泽、伊豆等关东近郊地区的周游券，连续3天有效。',
    price: {
      adult: {
        regular: 15000,
      },
      child: {
        regular: 7500,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['関東'],
      map: '/images/coverage/tokyo-wide-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '成田特快'],
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
    purchaseLinks: [
      { name: 'JR东日本官方', url: 'https://www.jreast.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/52-tokyo-wide-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/52-tokyo-wide-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/tokyo-wide-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东京周边', '富士山', '日光轻井泽', '伊豆'],
    sortOrder: 3
  }
];

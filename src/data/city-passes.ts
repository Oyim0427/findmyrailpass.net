import { JRPass } from '@/types/pass';

// 城市地铁周游券
export const cityPasses: JRPass[] = [
  {
    id: 'tokyo-metro-24hour',
    name: {
      en: 'Tokyo Metro 24-hour Ticket',
      jp: '東京Metro地铁24小时乘车券',
      cn: '东京Metro地铁24小时乘车券'
    },
    description: '东京Metro全9条线路的24小时乘车券，适合东京市内一日游。',
    price: {
      adult: {
        regular: 700,
      },
      child: {
        regular: 350,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['东京', '东京Metro全9条线路'],
      map: '/images/coverage/tokyo-metro-24hour.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
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
    purchaseLinks: [
      { name: '东京Metro官方', url: 'https://www.tokyometro.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/48-tokyo-metro-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/48-tokyo-metro-pass' }
    ],
    category: 'city',
    popularity: 4,
    bestFor: ['东京一日游', '市内观光', '地铁体验'],
    sortOrder: 1
  },
  {
    id: 'toei-subway-1day',
    name: {
      en: 'Toei Subway One-day Pass',
      jp: '都营地铁一日周游券',
      cn: '都营地铁一日周游券'
    },
    description: '东京都内都营地铁线路的一日周游券，可与东京Metro联合使用。',
    price: {
      adult: {
        regular: 900,
      },
      child: {
        regular: 450,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['东京', '都营地铁线路'],
      map: '/images/coverage/toei-subway-1day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
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
    purchaseLinks: [
      { name: '都营地铁官方', url: 'https://www.kotsu.metro.tokyo.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/66-toei-subway-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/66-toei-subway-pass' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['东京一日游', '都营地铁', '联合使用'],
    sortOrder: 2
  },
  {
    id: 'tokyo-metro-2day',
    name: {
      en: 'Tokyo Metro Two-day Pass',
      jp: '東京Metro二日券',
      cn: '东京Metro二日券'
    },
    description: '东京Metro全9条线路的二日券，适合东京市内二日游。',
    price: {
      adult: {
        regular: 1200,
      },
      child: {
        regular: 600,
      }
    },
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['东京', '东京Metro全9条线路'],
      map: '/images/coverage/tokyo-metro-2day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
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
    purchaseLinks: [
      { name: '东京Metro官方', url: 'https://www.tokyometro.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/48-tokyo-metro-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/48-tokyo-metro-pass' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['东京二日游', '市内观光', '地铁体验'],
    sortOrder: 3
  },
  {
    id: 'tokyo-metro-3day',
    name: {
      en: 'Tokyo Metro Three-day Pass',
      jp: '東京Metro三日券',
      cn: '东京Metro三日券'
    },
    description: '东京Metro全9条线路的三日券，适合东京市内三日游。',
    price: {
      adult: {
        regular: 1500,
      },
      child: {
        regular: 750,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['东京', '东京Metro全9条线路'],
      map: '/images/coverage/tokyo-metro-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
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
    purchaseLinks: [
      { name: '东京Metro官方', url: 'https://www.tokyometro.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/48-tokyo-metro-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/48-tokyo-metro-pass' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['东京三日游', '市内观光', '地铁体验'],
    sortOrder: 4
  },
  {
    id: 'osaka-subway-1day',
    name: {
      en: 'Osaka Subway One-day Pass',
      jp: '大阪地铁一日券',
      cn: '大阪地铁一日券'
    },
    description: '大阪市营地铁全线的一日券，适合大阪市内一日游。',
    price: {
      adult: {
        regular: 800,
      },
      child: {
        regular: 400,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['大阪', '大阪市营地铁全线'],
      map: '/images/coverage/osaka-subway-1day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
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
    purchaseLinks: [
      { name: '大阪地铁官方', url: 'https://www.osakametro.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/67-osaka-subway-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/67-osaka-subway-pass' }
    ],
    category: 'city',
    popularity: 4,
    bestFor: ['大阪一日游', '市内观光', '地铁体验'],
    sortOrder: 5
  },
  {
    id: 'kyoto-subway-1day',
    name: {
      en: 'Kyoto Subway One-day Pass',
      jp: '京都市营地铁一日券',
      cn: '京都市营地铁一日券'
    },
    description: '京都市营地铁全线及公交的一日券，适合京都一日游。',
    price: {
      adult: {
        regular: 900,
      },
      child: {
        regular: 450,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['京都', '京都市营地铁全线及公交'],
      map: '/images/coverage/kyoto-subway-1day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
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
    purchaseLinks: [
      { name: '京都市官方售票处', url: 'https://www.city.kyoto.lg.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/70-kyoto-subway-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/70-kyoto-subway-pass' }
    ],
    category: 'city',
    popularity: 4,
    bestFor: ['京都一日游', '市内观光', '地铁巴士体验'],
    sortOrder: 6
  }
];

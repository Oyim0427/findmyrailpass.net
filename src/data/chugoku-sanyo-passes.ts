import { JRPass } from '@/types/pass';

// 中国/山阳地区周游券
export const chugokuSanyoPasses: JRPass[] = [
  {
    id: 'hiroshima-tourist-pass-2day',
    name: {
      en: 'Hiroshima Tourist Pass 2-Day',
      jp: '廣島旅遊周游券2日券',
      cn: '廣島旅遊周游券2日券'
    },
    description: '广岛地区的2日巴士周游券，适合探索广岛历史文化和自然风光，包含WILLER巴士服务。',
    price: {
      adult: {
        regular: 0,
      },
      child: {
        regular: 0,
      }
    },
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['广岛', '中国地区'],
      map: '/images/coverage/hiroshima-tourist-pass-2day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['巴士'],
    advantages: [
      '覆盖广岛地区',
      '历史文化体验',
      '包含WILLER巴士服务',
      '2日有效',
      '适合中国地区探索'
    ],
    disadvantages: [
      '仅限WILLER巴士',
      '不包含JR线路',
      '不包含新干线',
      '速度较慢'
    ],
    tips: [
      '适合广岛地区旅行',
      '可探索广岛历史文化',
      '建议提前预订座位',
      '注意巴士时刻表'
    ],
    officialLinks: [
      { name: 'WILLER EXPRESS', url: 'https://willerexpress.com/' }
    ],
    purchaseLinks: [
      { name: 'WILLER EXPRESS官方', url: 'https://willerexpress.com/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/58-hiroshima-tourist-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/58-hiroshima-tourist-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/hiroshima-tourist-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['广岛地区', '历史文化', '2日旅行'],
    sortOrder: 1
  },
  {
    id: 'hiroshima-tourist-pass-3day',
    name: {
      en: 'Hiroshima Tourist Pass 3-Day',
      jp: '廣島旅遊周游券3日券',
      cn: '廣島旅遊周游券3日券'
    },
    description: '广岛地区的3日巴士周游券，适合探索广岛历史文化和自然风光，包含WILLER巴士服务。',
    price: {
      adult: {
        regular: 0,
      },
      child: {
        regular: 0,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['广岛', '中国地区'],
      map: '/images/coverage/hiroshima-tourist-pass-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['巴士'],
    advantages: [
      '覆盖广岛地区',
      '历史文化体验',
      '包含WILLER巴士服务',
      '3日有效',
      '适合中国地区探索'
    ],
    disadvantages: [
      '仅限WILLER巴士',
      '不包含JR线路',
      '不包含新干线',
      '速度较慢'
    ],
    tips: [
      '适合广岛地区旅行',
      '可探索广岛历史文化',
      '建议提前预订座位',
      '注意巴士时刻表'
    ],
    officialLinks: [
      { name: 'WILLER EXPRESS', url: 'https://willerexpress.com/' }
    ],
    purchaseLinks: [
      { name: 'WILLER EXPRESS官方', url: 'https://willerexpress.com/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/58-hiroshima-tourist-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/58-hiroshima-tourist-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/hiroshima-tourist-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['广岛地区', '历史文化', '3日旅行'],
    sortOrder: 2
  },
  {
    id: 'sanyo-sanin-area-pass',
    name: {
      en: 'Sanyo & Sanin Area Rail Pass',
      jp: '山阳&山阴地区铁路周游券',
      cn: '山阳&山阴地区铁路周游券'
    },
    description: '大阪、冈山、广岛、博多等山阳・山阴地区的周游券，7天有效期，山阳・山阴新干线，覆盖极其宽广。',
    price: {
      adult: {
        regular: 20400,
      },
      child: {
        regular: 10200,
      }
    },
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['大阪', '冈山', '广岛', '博多', '山阳', '山阴'],
      map: '/images/coverage/sanyo-sanin-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['山阳新干线', '山阴新干线', '特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/60-sanyo-sanin-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/60-sanyo-sanin-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/sanyo-sanin-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['山阳山阴地区', '新干线体验', '广泛游览'],
    sortOrder: 3
  },
  {
    id: 'hiroshima-yamaguchi-area-pass',
    name: {
      en: 'Hiroshima-Yamaguchi Area Pass',
      jp: '广岛・山口地区周游券',
      cn: '广岛・山口地区周游券'
    },
    description: '广岛、山口地区的5日周游券，适合西日本海岸游，覆盖广岛和山口县主要景点。',
    price: {
      adult: {
        regular: 0,
      },
      child: {
        regular: 0,
      }
    },
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['广岛', '山口', '西日本海岸'],
      map: '/images/coverage/hiroshima-yamaguchi-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/62-hiroshima-yamaguchi-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/62-hiroshima-yamaguchi-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/hiroshima-yamaguchi-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['西日本海岸游', '广岛山口', '海岸观光'],
    sortOrder: 4
  }
];

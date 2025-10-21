import { JRPass } from '@/types/pass';

// 中部/北陆地区周游券
export const chubuHokurikuPasses: JRPass[] = [
  {
    id: 'takayama-hokuriku-area-tourist-pass',
    name: {
      en: 'Takayama-Hokuriku Area Tourist Pass',
      jp: '高山・北陆地区周游券',
      cn: '高山・北陆地区周游券'
    },
    description: '名古屋、金泽、飞驒高山的5日周游券，热门山地路线，适合探索日本中部山区。',
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
      regions: ['名古屋', '金泽', '飞驒高山', '北陆地区'],
      map: '/images/coverage/takayama-hokuriku-area-tourist-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR东海官方', url: 'https://www.jr-central.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/53-takayama-hokuriku-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/53-takayama-hokuriku-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/takayama-hokuriku-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['中部山区', '名古屋金泽', '高山探索'],
    sortOrder: 1
  },
  {
    id: 'mt-fuji-shizuoka-area-pass',
    name: {
      en: 'Mt. Fuji-Shizuoka Area Pass',
      jp: '富士山・静冈地区周游券',
      cn: '富士山・静冈地区周游券'
    },
    description: '静冈、富士山周边的3日周游券，适合富士山观光，覆盖静冈县主要景点。',
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
      regions: ['静冈', '富士山周边'],
      map: '/images/coverage/mt-fuji-shizuoka-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR东海官方', url: 'https://www.jr-central.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/54-mt-fuji-shizuoka-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/54-mt-fuji-shizuoka-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/mt-fuji-shizuoka-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['富士山观光', '静冈地区', '山景体验'],
    sortOrder: 2
  },
  {
    id: 'ise-kumano-wakayama-area-pass',
    name: {
      en: 'Ise-Kumano-Wakayama Area Pass',
      jp: '伊势・熊野・和歌山地区周游券',
      cn: '伊势・熊野・和歌山地区周游券'
    },
    description: '伊势、熊野、和歌山的5日周游券，深度关西南部探索，适合文化历史之旅。',
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
      regions: ['伊势', '熊野', '和歌山', '关西南部'],
      map: '/images/coverage/ise-kumano-wakayama-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR东海官方', url: 'https://www.jr-central.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/55-ise-kumano-wakayama-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/55-ise-kumano-wakayama-pass' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/ise-kumano-wakayama-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西南部', '文化历史', '伊势熊野'],
    sortOrder: 3
  }
];

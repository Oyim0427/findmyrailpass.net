import { JRPass } from '@/types/pass';

// 关西地区周游券
export const kansaiPasses: JRPass[] = [
  {
    id: 'kansai-one-day-pass',
    name: {
      en: 'Kansai One-day Pass',
      jp: '関西一日券',
      cn: '关西一日券'
    },
    description: '大阪、京都、神户等关西地区的1日周游券，适合短途深度游，含部分特快电车。',
    price: {
      adult: {
        regular: 2800,
      },
      child: {
        regular: 1400,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '神户'],
      map: '/images/coverage/kansai-one-day-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖关西主要城市',
      '包含部分特快电车',
      '价格便宜',
      '适合短途深度游',
      '当日有效'
    ],
    disadvantages: [
      '仅限1天使用',
      '不包含新干线',
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西一日游', '大阪京都', '短途旅行'],
    sortOrder: 1
  },
  {
    id: 'kansai-two-day-pass',
    name: {
      en: 'Kansai Two-day Pass',
      jp: '関西2日券',
      cn: '关西2日券'
    },
    description: '大阪、京都、奈良等关西地区的2日周游券，可连续或分开使用，灵活度高，覆盖关西主要城市。',
    price: {
      adult: {
        regular: 5600,
      },
      child: {
        regular: 2800,
      }
    },
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良'],
      map: '/images/coverage/kansai-two-day-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西2日游', '大阪京都奈良', '灵活旅行'],
    sortOrder: 2
  },
  {
    id: 'kansai-three-day-pass',
    name: {
      en: 'Kansai Three-day Pass',
      jp: '関西3日券',
      cn: '关西3日券'
    },
    description: '关西主要城市的3日周游券，3日内无限乘坐，适合广泛游览。',
    price: {
      adult: {
        regular: 7000,
      },
      child: {
        regular: 3500,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户'],
      map: '/images/coverage/kansai-three-day-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西3日游', '广泛游览', '深度体验'],
    sortOrder: 3
  },
  {
    id: 'kansai-four-day-pass',
    name: {
      en: 'Kansai Four-day Pass',
      jp: '関西4日券',
      cn: '关西4日券'
    },
    description: '关西广泛区域的4日周游券，适合深度旅游，覆盖范围更广。',
    price: {
      adult: {
        regular: 8500,
      },
      child: {
        regular: 4250,
      }
    },
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户', '和歌山'],
      map: '/images/coverage/kansai-four-day-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['关西深度游', '广泛区域', '4日旅行'],
    sortOrder: 4
  },
  {
    id: 'kansai-wide-area-pass',
    name: {
      en: 'Kansai Wide Area Pass',
      jp: '関西広域鉄道周遊券',
      cn: '关西广域铁道周游券'
    },
    description: '大阪、京都、神户、仓敷、冈山等更大范围的周游券，连续使用，含JR新干线、特快电车、私铁部分线路。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '神户', '仓敷', '冈山'],
      map: '/images/coverage/kansai-wide-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', '私铁'],
    advantages: [
      '覆盖更大范围',
      '包含JR新干线',
      '含特快电车和私铁部分线路',
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西广泛区域', '新干线体验', '深度游览'],
    sortOrder: 5
  },
  {
    id: 'kansai-area-rail-pass-1day',
    name: {
      en: 'Kansai Area Rail Pass 1-Day',
      jp: '关西地区铁路周游券1日券',
      cn: '关西地区铁路周游券1日券'
    },
    description: '大阪、京都、奈良、神户等关西地区的1日周游券，可搭乘关空特急HARUKA指定席。',
    price: {
      adult: {
        regular: 2800,
      },
      child: {
        regular: 1400,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户'],
      map: '/images/coverage/kansai-area-rail-pass-1day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '关空特急HARUKA'],
    advantages: [
      '覆盖关西主要城市',
      '1日有效',
      '可搭乘关空特急HARUKA指定席',
      '价格合理',
      '购买方便'
    ],
    disadvantages: [
      '仅限关西地区',
      '不包含新干线',
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西旅行', '大阪京都奈良', '1日旅行'],
    sortOrder: 6
  },
  {
    id: 'kansai-area-rail-pass-2day',
    name: {
      en: 'Kansai Area Rail Pass 2-Day',
      jp: '关西地区铁路周游券2日券',
      cn: '关西地区铁路周游券2日券'
    },
    description: '大阪、京都、奈良、神户等关西地区的2日周游券，可连续使用，可搭乘关空特急HARUKA指定席。',
    price: {
      adult: {
        regular: 5600,
      },
      child: {
        regular: 2800,
      }
    },
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户'],
      map: '/images/coverage/kansai-area-rail-pass-2day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '关空特急HARUKA'],
    advantages: [
      '覆盖关西主要城市',
      '2日有效',
      '可连续使用',
      '可搭乘关空特急HARUKA指定席',
      '价格合理'
    ],
    disadvantages: [
      '仅限关西地区',
      '不包含新干线',
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西旅行', '大阪京都奈良', '2日旅行'],
    sortOrder: 7
  },
  {
    id: 'kansai-area-rail-pass-3day',
    name: {
      en: 'Kansai Area Rail Pass 3-Day',
      jp: '关西地区铁路周游券3日券',
      cn: '关西地区铁路周游券3日券'
    },
    description: '大阪、京都、奈良、神户等关西地区的3日周游券，可连续使用，可搭乘关空特急HARUKA指定席。',
    price: {
      adult: {
        regular: 8400,
      },
      child: {
        regular: 4200,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['关西', '大阪', '京都', '奈良', '神户'],
      map: '/images/coverage/kansai-area-rail-pass-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '关空特急HARUKA'],
    advantages: [
      '覆盖关西主要城市',
      '3日有效',
      '可连续使用',
      '可搭乘关空特急HARUKA指定席',
      '价格合理'
    ],
    disadvantages: [
      '仅限关西地区',
      '不包含新干线',
      '部分特急电车需额外费用'
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
    purchaseLinks: [
      { name: 'JR西日本官方', url: 'https://www.westjr.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/46-kansai-area-pass/' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/46-kansai-area-pass' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西旅行', '大阪京都奈良', '3日旅行'],
    sortOrder: 8
  }
];

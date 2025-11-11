import { JRPass } from '@/types/pass';

// 全国地区周游券
export const nationalPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'japan-rail-pass-7day-ordinary',
    name: {
      en: '日本全国周游券7日券(普通车用)',
      jp: '日本全国周游券7日券(普通车用)',
      cn: '日本全国周游券7日券(普通车用)'
    },
    description: '日本全国JR线路的7日周游券，包含新干线普通车厢（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 50000
      },
      child: {
        regular: 25000
      }
    },
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-7day-ordinary.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线普通车厢（除Nozomi和Mizuho）',
      '7天连续使用',
      '可乘坐JR巴士',
      '包含机场快线',
      '性价比高'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线',
      '仅限普通车厢'
    ],
    tips: [
      '适合跨地区长途旅行',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://japanrailpass.net/cn/purchase/price/' }
    ],
    purchaseLinks: [
      { name: '官方购买', url: 'https://japanrailpass.net/cn/purchase/online/', type: 'official' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['新干线体验', '中型旅游']
  },

  {
    sortOrder: 2,
    id: 'japan-rail-pass-14day-ordinary',
    name: {
      en: '日本全国周游券14日券(普通车用)',
      jp: '日本全国周游券14日券(普通车用)',
      cn: '日本全国周游券14日券(普通车用)'
    },
    description: '日本全国JR线路的14日周游券，包含新干线普通车厢（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 80000
      },
      child: {
        regular: 40000
      }
    },
    duration: [14],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-14day-ordinary.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线普通车厢（除Nozomi和Mizuho）',
      '14天连续使用',
      '可乘坐JR巴士',
      '包含机场快线',
      '性价比高'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线',
      '仅限普通车厢'
    ],
    tips: [
      '适合跨地区长途旅行',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://japanrailpass.net/cn/purchase/price/' }
    ],
    purchaseLinks: [
      { name: '官方购买', url: 'https://japanrailpass.net/cn/purchase/online/', type: 'official' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['新干线体验', '长途旅游']
  },

  {
    sortOrder: 3,
    id: 'japan-rail-pass-21day-ordinary',
    name: {
      en: '日本全国周游券21日券(普通车用)',
      jp: '日本全国周游券21日券(普通车用)',
      cn: '日本全国周游券21日券(普通车用)'
    },
    description: '日本全国JR线路的21日周游券，包含新干线普通车厢（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 100000
      },
      child: {
        regular: 50000
      }
    },
    duration: [21],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-21day-ordinary.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线普通车厢（除Nozomi和Mizuho）',
      '21天连续使用',
      '可乘坐JR巴士',
      '包含机场快线',
      '性价比高'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线',
      '仅限普通车厢'
    ],
    tips: [
      '适合跨地区长途旅行',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://japanrailpass.net/cn/purchase/price/' }
    ],
    purchaseLinks: [
      { name: '官方购买', url: 'https://japanrailpass.net/cn/purchase/online/', type: 'official' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['新干线体验', '超长途旅游']
  },

  {
    sortOrder: 4,
    id: 'japan-rail-pass-7day-green',
    name: {
      en: '日本全国周游券7日券(绿车用)',
      jp: '日本全国周游券7日券(绿车用)',
      cn: '日本全国周游券7日券(绿车用)'
    },
    description: '日本全国JR线路的7日绿色车厢周游券，包含新干线绿色车厢（除Nozomi和Mizuho），覆盖日本全国JR线路的高级版本。',
    price: {
      adult: {
        regular: 70000
      },
      child: {
        regular: 35000
      }
    },
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-7day-green.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '可乘坐绿色车厢',
      '包含所有新干线绿色车厢（除Nozomi和Mizuho）',
      '7天连续使用',
      '可乘坐JR巴士',
      '包含机场快线',
      '快捷舒适体验'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '高级车厢体验更舒适',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://japanrailpass.net/cn/purchase/price/' }
    ],
    purchaseLinks: [
      { name: '官方购买', url: 'https://japanrailpass.net/cn/purchase/online/', type: 'official' }
    ],
    category: 'national',
    popularity: 5,
    bestFor: ['高级车厢体验', '中途旅游']
  },

  {
    sortOrder: 5,
    id: 'japan-rail-pass-14day-green',
    name: {
      en: '日本全国周游券14日券(绿车用)',
      jp: '日本全国周游券14日券(绿车用)',
      cn: '日本全国周游券14日券(绿车用)'
    },
    description: '日本全国JR线路的14日绿色车厢周游券，包含新干线绿色车厢（除Nozomi和Mizuho），覆盖日本全国JR线路的高级版本。',
    price: {
      adult: {
        regular: 110000
      },
      child: {
        regular: 55000
      }
    },
    duration: [14],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-14day-green.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '可乘坐绿色车厢',
      '包含所有新干线绿色车厢（除Nozomi和Mizuho）',
      '14天连续使用',
      '可乘坐JR巴士',
      '包含机场快线',
      '快捷舒适体验'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '高级车厢体验更舒适',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://japanrailpass.net/cn/purchase/price/' }
    ],
    purchaseLinks: [
      { name: '官方购买', url: 'https://japanrailpass.net/cn/purchase/online/', type: 'official' }
    ],
    category: 'national',
    popularity: 4,
    bestFor: ['高级车厢体验', '长途旅游']
  },

  {
    sortOrder: 6,
    id: 'japan-rail-pass-21day-green',
    name: {
      en: '日本全国周游券21日券(绿车用)',
      jp: '日本全国周游券21日券(绿车用)',
      cn: '日本全国周游券21日券(绿车用)'
    },
    description: '日本全国JR线路的21日绿色车厢周游券，包含新干线绿色车厢（除Nozomi和Mizuho），覆盖日本全国JR线路的高级版本。',
    price: {
      adult: {
        regular: 140000
      },
      child: {
        regular: 70000
      }
    },
    duration: [21],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass-21day-green.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '可乘坐绿色车厢',
      '包含所有新干线绿色车厢（除Nozomi和Mizuho）',
      '21天连续使用',
      '可乘坐JR巴士',
      '包含机场快线',
      '快捷舒适体验'
    ],
    disadvantages: [
      '价格较高',
      '仅限外国游客购买',
      '需在海外购买兑换券',
      '不能乘坐Nozomi和Mizuho新干线'
    ],
    tips: [
      '适合跨地区长途旅行',
      '高级车厢体验更舒适',
      '建议提前计算路线费用',
      '可在JR车站兑换',
      '首次使用需激活'
    ],
    officialLinks: [
      { name: 'JR官方', url: 'https://japanrailpass.net/cn/purchase/price/' }
    ],
    purchaseLinks: [
      { name: '官方购买', url: 'https://japanrailpass.net/cn/purchase/online/', type: 'official' }
    ],
    category: 'national',
    popularity: 4,
    bestFor: ['高级车厢体验', '超长途旅游']
  }
];
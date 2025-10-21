import { JRPass } from '@/types/pass';

// 全国版周游券
export const nationalPasses: JRPass[] = [
  // 普通车用周游券
  {
    id: 'japan-rail-pass-7day-ordinary',
    name: {
      en: 'Japan Rail Pass 7-Day (Ordinary Car)',
      jp: 'ジャパンレールパス 7日券（普通車用）',
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
    bestFor: ['新干线体验', '中型旅游'],
    sortOrder: 1
  },
  {
    id: 'japan-rail-pass-14day-ordinary',
    name: {
      en: 'Japan Rail Pass 14-Day (Ordinary Car)',
      jp: 'ジャパンレールパス 14日券（普通車用）',
      cn: '日本全国周游券14日券(普通车用)'
    },
    description: '日本全国JR线路的14日周游券，包含新干线普通车厢（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 80000,
      },
      child: {
        regular: 40000,
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
    bestFor: ['新干线体验', '长途旅游'],
    sortOrder: 2
  },
  {
    id: 'japan-rail-pass-21day-ordinary',
    name: {
      en: 'Japan Rail Pass 21-Day (Ordinary Car)',
      jp: 'ジャパンレールパス 21日券（普通車用）',
      cn: '日本全国周游券21日券(普通车用)'
    },
    description: '日本全国JR线路的21日周游券，包含新干线普通车厢（除Nozomi和Mizuho），覆盖日本全国JR线路。',
    price: {
      adult: {
        regular: 100000,
      },
      child: {
        regular: 50000,
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
    bestFor: ['新干线体验', '超长途旅游'],
    sortOrder: 3
  },
  // 绿车用周游券
  {
    id: 'japan-rail-pass-7day-green',
    name: {
      en: 'Japan Rail Pass 7-Day (Green Car)',
      jp: 'ジャパンレールパス 7日券（グリーン車用）',
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
    bestFor: ['高级车厢体验','中途旅游'],
    sortOrder: 4
  },
  {
    id: 'japan-rail-pass-14day-green',
    name: {
      en: 'Japan Rail Pass 14-Day (Green Car)',
      jp: 'ジャパンレールパス 14日券（グリーン車用）',
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
    bestFor: ['高级车厢体验','长途旅游'],
    sortOrder: 5
  },
  {
    id: 'japan-rail-pass-21day-green',
    name: {
      en: 'Japan Rail Pass 21-Day (Green Car)',
      jp: 'ジャパンレールパス 21日券（グリーン車用）',
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
    bestFor: ['高级车厢体验', '超长途旅游'],
    sortOrder: 6
  },
  {
    id: 'jr-east-south-hokkaido-rail-pass-6day',
    name: {
      en: 'JR East-South Hokkaido Rail Pass 6-Day',
      jp: 'JR东日本・南北海道铁路周游券 6日券',
      cn: 'JR东日本・南北海道铁路周游券6日券'
    },
    description: '东日本 + 南北海道的6日周游券，连接东京、仙台、函馆，覆盖东北和北海道南部地区。',
    price: {
      adult: {
        regular: 35370,
      },
      child: {
        regular: 17680,
      }
    },
    duration: [6],
    coverage: {
      regions: ['东京', '仙台', '函馆', '东北', '北海道南部'],
      map: '/images/coverage/jr-east-south-hokkaido-rail-pass-6day.png'
    },
    targetAudience: ['跨地区旅行者', '新干线体验者', '深度游爱好者'],
    trainTypes: ['东北新干线', '北海道新干线', '特急电车', '普通电车'],
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
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合东北和北海道南部旅行',
      '可游览东京、仙台、函馆',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jreast.co.jp/zh-CHS/multi/pass/easthokkaido.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.eki-net.com/zh-CHS/jreast-train-reservation/reserve/wb/PurchaseTicketSelect/Index', type: 'official' }
    ],
    category: 'national',
    popularity: 4,
    bestFor: ['东北北海道', '东京仙台函馆', '跨地区旅行'],
    sortOrder: 7
  },

];

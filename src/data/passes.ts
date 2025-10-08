import { JRPass } from '@/types/pass';

export const jrPasses: JRPass[] = [
  {
    id: 'japan-rail-pass',
    name: {
      en: 'Japan Rail Pass',
      jp: 'ジャパンレールパス'
    },
    description: 'The most comprehensive pass for unlimited travel on JR trains throughout Japan, including all Shinkansen lines.',
    price: {
      adult: {
        regular: 29650,
        green: 39650
      },
      child: {
        regular: 14825,
        green: 19825
      }
    },
    duration: [7, 14, 21],
    coverage: {
      regions: ['全国'],
      map: '/images/coverage/japan-rail-pass.png'
    },
    trainTypes: ['新干线', '特急列车', '急行列车', '普通列车', 'JR巴士'],
    advantages: [
      '覆盖日本全国JR线路',
      '包含所有新干线（除Nozomi和Mizuho）',
      '7/14/21天灵活选择',
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
    id: 'jr-east-pass',
    name: {
      en: 'JR East Pass',
      jp: 'JR東日本パス'
    },
    description: 'Perfect for exploring Tokyo and the Tohoku region, including the famous Tohoku Shinkansen.',
    price: {
      adult: {
        regular: 20000,
        green: 28000
      },
      child: {
        regular: 10000,
        green: 14000
      }
    },
    duration: [5, 14],
    coverage: {
      regions: ['关东', '东北'],
      map: '/images/coverage/jr-east-pass.png'
    },
    trainTypes: ['东北新干线', '上越新干线', '北陆新干线', '特急列车', '普通列车'],
    advantages: [
      '覆盖关东和东北地区',
      '包含东北新干线',
      '价格相对便宜',
      '5天或14天选择',
      '可乘坐成田特快'
    ],
    disadvantages: [
      '仅限关东和东北地区',
      '不能乘坐东海道新干线',
      '部分特急列车需额外费用'
    ],
    tips: [
      '适合东京周边和东北旅行',
      '可游览仙台、青森等地',
      '成田机场往返便利',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: 'JR东日本', url: 'https://www.jreast.co.jp/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关东旅行', '东北地区', '东京周边']
  },
  {
    id: 'kansai-area-pass',
    name: {
      en: 'Kansai Area Pass',
      jp: '関西エリアパス'
    },
    description: 'Ideal for exploring the Kansai region including Osaka, Kyoto, Nara, and Kobe.',
    price: {
      adult: {
        regular: 2400,
        green: 0
      },
      child: {
        regular: 1200,
        green: 0
      }
    },
    duration: [1, 2, 3, 4],
    coverage: {
      regions: ['关西'],
      map: '/images/coverage/kansai-area-pass.png'
    },
    trainTypes: ['关空特急', '特急列车', '普通列车', '关西机场线'],
    advantages: [
      '价格便宜',
      '关西地区全覆盖',
      '1-4天灵活选择',
      '包含关西机场线',
      '可乘坐关空特急'
    ],
    disadvantages: [
      '仅限关西地区',
      '不能乘坐新干线',
      '部分特急需额外费用'
    ],
    tips: [
      '适合关西深度游',
      '大阪、京都、奈良通用',
      '关西机场往返便利',
      '性价比极高'
    ],
    officialLinks: [
      { name: 'JR西日本', url: 'https://www.westjr.co.jp/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['关西旅行', '大阪京都', '短期游览']
  },
  {
    id: 'tokyo-wide-pass',
    name: {
      en: 'Tokyo Wide Pass',
      jp: '東京ワイドパス'
    },
    description: 'Great for day trips from Tokyo to nearby destinations like Nikko, Karuizawa, and the Fuji Five Lakes.',
    price: {
      adult: {
        regular: 10180,
        green: 0
      },
      child: {
        regular: 5090,
        green: 0
      }
    },
    duration: [3],
    coverage: {
      regions: ['关东'],
      map: '/images/coverage/tokyo-wide-pass.png'
    },
    trainTypes: ['北陆新干线', '特急列车', '普通列车', '成田特快'],
    advantages: [
      '3天连续使用',
      '覆盖东京周边',
      '可到日光、轻井泽',
      '包含成田特快',
      '富士五湖地区'
    ],
    disadvantages: [
      '仅限3天使用',
      '不能乘坐东海道新干线',
      '部分特急需额外费用'
    ],
    tips: [
      '适合东京周边一日游',
      '可游览日光、轻井泽',
      '富士五湖地区覆盖',
      '成田机场往返便利'
    ],
    officialLinks: [
      { name: 'JR东日本', url: 'https://www.jreast.co.jp/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['东京周边', '一日游', '富士山地区']
  },
  {
    id: 'jr-kyushu-pass',
    name: {
      en: 'JR Kyushu Pass',
      jp: 'JR九州パス'
    },
    description: 'Explore the beautiful island of Kyushu with unlimited travel on JR Kyushu trains.',
    price: {
      adult: {
        regular: 10000,
        green: 0
      },
      child: {
        regular: 5000,
        green: 0
      }
    },
    duration: [3, 5],
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-pass.png'
    },
    trainTypes: ['九州新干线', '特急列车', '普通列车', '观光列车'],
    advantages: [
      '九州地区全覆盖',
      '包含九州新干线',
      '可乘坐特色观光列车',
      '3天或5天选择',
      '福冈机场便利'
    ],
    disadvantages: [
      '仅限九州地区',
      '不能乘坐其他地区新干线',
      '部分观光列车需预约'
    ],
    tips: [
      '适合九州深度游',
      '可体验特色观光列车',
      '福冈、熊本、鹿儿岛',
      '温泉和美食之旅'
    ],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' },
      { name: 'Klook', url: 'https://www.klook.com/' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['九州旅行', '温泉之旅', '特色列车']
  }
];

export const regions = [
  '全国', '关东', '关西', '东北', '九州', '中国', '四国', '北海道'
];

export const trainTypes = [
  '新干线', '特急列车', '急行列车', '普通列车', 'JR巴士', '观光列车'
];

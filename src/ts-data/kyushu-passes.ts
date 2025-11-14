import { JRPass } from '@/types/pass';

// 九州地区周游券
export const kyushuPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'jr-kyushu-rail-pass-all-kyushu-3day',
    name: {
      en: 'JR九州铁路周游券（全九州）3日券',
      jp: 'JR九州铁路周游券（全九州）3日券',
      cn: 'JR九州铁路周游券（全九州）3日券'
    },
    description: '九州全岛的3日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['九州全岛', '新干线体验', '3日旅行'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/47-kyushu-rail-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/47-kyushu-rail-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/kyushu-rail-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 2,
    id: 'jr-kyushu-rail-pass-all-kyushu-5day',
    name: {
      en: 'JR九州铁路周游券（全九州）5日券',
      jp: 'JR九州铁路周游券（全九州）5日券',
      cn: 'JR九州铁路周游券（全九州）5日券'
    },
    description: '九州全岛的5日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['九州全岛', '新干线体验', '5日旅行'],
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu-5day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/47-kyushu-rail-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/47-kyushu-rail-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/kyushu-rail-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 3,
    id: 'jr-kyushu-rail-pass-all-kyushu-7day',
    name: {
      en: 'JR九州铁路周游券（全九州）7日券',
      jp: 'JR九州铁路周游券（全九州）7日券',
      cn: 'JR九州铁路周游券（全九州）7日券'
    },
    description: '九州全岛的7日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['九州全岛', '新干线体验', '7日旅行'],
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu-7day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/47-kyushu-rail-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/47-kyushu-rail-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/kyushu-rail-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 4,
    id: 'jr-northern-kyushu-pass-3day',
    name: {
      en: 'JR北九州周游券3日券',
      jp: 'JR北九州周游券3日券',
      cn: 'JR北九州周游券3日券'
    },
    description: '北九州（博多→长崎）的3日周游券，北部专用，适合北九州地区旅行。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['北九州地区', '博多长崎', '3日旅行'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-northern-kyushu-pass-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/64-northern-kyushu-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/64-northern-kyushu-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/northern-kyushu-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 4
  },

  {
    sortOrder: 5,
    id: 'jr-southern-kyushu-pass',
    name: {
      en: 'JR南九州周游券',
      jp: 'JR南九州周游券',
      cn: 'JR南九州周游券'
    },
    description: '鹿儿岛、宫崎的3日周游券，热带南部风光，适合南九州地区旅行。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['南九州地区', '鹿儿岛宫崎', '热带风光'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-southern-kyushu-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/65-southern-kyushu-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/65-southern-kyushu-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/southern-kyushu-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 3
  }
];
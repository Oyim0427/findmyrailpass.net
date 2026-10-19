import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';
import type { SupportedLocale } from '@/lib/seo';
import type { JRPass } from '@/types/pass';

type PlaceLabel = Record<SupportedLocale, string>;

export type PassAreaStop = {
  key: string;
  label: string;
  x: number;
  y: number;
};

const PLACE_LABELS: Record<string, PlaceLabel> = {
  '札幌': { ja: '札幌', en: 'Sapporo', zh: '札幌' },
  '大通': { ja: '大通', en: 'Odori', zh: '大通' },
  'すすきの': { ja: 'すすきの', en: 'Susukino', zh: '薄野' },
  '新札幌': { ja: '新札幌', en: 'Shin-Sapporo', zh: '新札幌' },
  '福住': { ja: '福住', en: 'Fukuzumi', zh: '福住' },
  '宮の沢': { ja: '宮の沢', en: 'Miyanosawa', zh: '宫之泽' },
  '新千歳空港': { ja: '新千歳空港', en: 'New Chitose Airport', zh: '新千岁机场' },
  '新函館北斗': { ja: '新函館北斗', en: 'Shin-Hakodate-Hokuto', zh: '新函馆北斗' },
  '函館': { ja: '函館', en: 'Hakodate', zh: '函馆' },
  '旭川': { ja: '旭川', en: 'Asahikawa', zh: '旭川' },
  '稚内': { ja: '稚内', en: 'Wakkanai', zh: '稚内' },
  '網走': { ja: '網走', en: 'Abashiri', zh: '网走' },
  '釧路': { ja: '釧路', en: 'Kushiro', zh: '钏路' },
  '帯広': { ja: '帯広', en: 'Obihiro', zh: '带广' },
  '青森': { ja: '青森', en: 'Aomori', zh: '青森' },
  '新青森': { ja: '新青森', en: 'Shin-Aomori', zh: '新青森' },
  '盛岡': { ja: '盛岡', en: 'Morioka', zh: '盛冈' },
  '秋田': { ja: '秋田', en: 'Akita', zh: '秋田' },
  '仙台': { ja: '仙台', en: 'Sendai', zh: '仙台' },
  '泉中央': { ja: '泉中央', en: 'Izumi-Chuo', zh: '泉中央' },
  '勾当台公園': { ja: '勾当台公園', en: 'Kotodai-Koen', zh: '勾当台公园' },
  '青葉山': { ja: '青葉山', en: 'Aobayama', zh: '青叶山' },
  '八木山動物公園': { ja: '八木山動物公園', en: 'Yagiyama Zoological Park', zh: '八木山动物公园' },
  '荒井': { ja: '荒井', en: 'Arai', zh: '荒井' },
  '山形': { ja: '山形', en: 'Yamagata', zh: '山形' },
  '福島': { ja: '福島', en: 'Fukushima', zh: '福岛' },
  '東京': { ja: '東京', en: 'Tokyo', zh: '东京' },
  '上野': { ja: '上野', en: 'Ueno', zh: '上野' },
  '新宿': { ja: '新宿', en: 'Shinjuku', zh: '新宿' },
  '渋谷': { ja: '渋谷', en: 'Shibuya', zh: '涩谷' },
  '池袋': { ja: '池袋', en: 'Ikebukuro', zh: '池袋' },
  '品川': { ja: '品川', en: 'Shinagawa', zh: '品川' },
  '横浜': { ja: '横浜', en: 'Yokohama', zh: '横滨' },
  '新横浜': { ja: '新横浜', en: 'Shin-Yokohama', zh: '新横滨' },
  '桜木町': { ja: '桜木町', en: 'Sakuragicho', zh: '樱木町' },
  '関内': { ja: '関内', en: 'Kannai', zh: '关内' },
  '元町・中華街': { ja: '元町・中華街', en: 'Motomachi-Chukagai', zh: '元町·中华街' },
  '大宮': { ja: '大宮', en: 'Omiya', zh: '大宫' },
  '千葉': { ja: '千葉', en: 'Chiba', zh: '千叶' },
  '水戸': { ja: '水戸', en: 'Mito', zh: '水户' },
  '成田空港': { ja: '成田空港', en: 'Narita Airport', zh: '成田机场' },
  '日光': { ja: '日光', en: 'Nikko', zh: '日光' },
  '新潟': { ja: '新潟', en: 'Niigata', zh: '新潟' },
  '長野': { ja: '長野', en: 'Nagano', zh: '长野' },
  '富山': { ja: '富山', en: 'Toyama', zh: '富山' },
  '電鉄富山': { ja: '電鉄富山', en: 'Dentetsu-Toyama', zh: '电铁富山' },
  '南富山': { ja: '南富山', en: 'Minami-Toyama', zh: '南富山' },
  '岩瀬浜': { ja: '岩瀬浜', en: 'Iwasehama', zh: '岩濑滨' },
  '金沢': { ja: '金沢', en: 'Kanazawa', zh: '金泽' },
  '北鉄金沢': { ja: '北鉄金沢', en: 'Hokutetsu-Kanazawa', zh: '北铁金泽' },
  '野町': { ja: '野町', en: 'Nomachi', zh: '野町' },
  '鶴来': { ja: '鶴来', en: 'Tsurugi', zh: '鹤来' },
  '福井': { ja: '福井', en: 'Fukui', zh: '福井' },
  '田原町': { ja: '田原町', en: 'Tawaramachi', zh: '田原町' },
  'たけふ新': { ja: 'たけふ新', en: 'Takefu-shin', zh: '武生新' },
  '三国港': { ja: '三国港', en: 'Mikuni-Minato', zh: '三国港' },
  '静岡': { ja: '静岡', en: 'Shizuoka', zh: '静冈' },
  '浜松': { ja: '浜松', en: 'Hamamatsu', zh: '滨松' },
  '名古屋': { ja: '名古屋', en: 'Nagoya', zh: '名古屋' },
  '栄': { ja: '栄', en: 'Sakae', zh: '荣' },
  '金山': { ja: '金山', en: 'Kanayama', zh: '金山' },
  '藤が丘': { ja: '藤が丘', en: 'Fujigaoka', zh: '藤丘' },
  '名古屋港': { ja: '名古屋港', en: 'Nagoyako', zh: '名古屋港' },
  '岐阜': { ja: '岐阜', en: 'Gifu', zh: '岐阜' },
  '京都': { ja: '京都', en: 'Kyoto', zh: '京都' },
  '四条': { ja: '四条', en: 'Shijo', zh: '四条' },
  '烏丸御池': { ja: '烏丸御池', en: 'Karasuma Oike', zh: '乌丸御池' },
  '出町柳': { ja: '出町柳', en: 'Demachiyanagi', zh: '出町柳' },
  '嵐山': { ja: '嵐山', en: 'Arashiyama', zh: '岚山' },
  '新大阪': { ja: '新大阪', en: 'Shin-Osaka', zh: '新大阪' },
  '大阪': { ja: '大阪', en: 'Osaka', zh: '大阪' },
  '大阪・梅田': { ja: '大阪・梅田', en: 'Osaka / Umeda', zh: '大阪／梅田' },
  'なんば': { ja: 'なんば', en: 'Namba', zh: '难波' },
  '天王寺': { ja: '天王寺', en: 'Tennoji', zh: '天王寺' },
  '京橋': { ja: '京橋', en: 'Kyobashi', zh: '京桥' },
  '神戸': { ja: '神戸', en: 'Kobe', zh: '神户' },
  '新神戸': { ja: '新神戸', en: 'Shin-Kobe', zh: '新神户' },
  '三宮': { ja: '三宮', en: 'Sannomiya', zh: '三宫' },
  '有馬温泉': { ja: '有馬温泉', en: 'Arima Onsen', zh: '有马温泉' },
  '姫路': { ja: '姫路', en: 'Himeji', zh: '姬路' },
  '奈良': { ja: '奈良', en: 'Nara', zh: '奈良' },
  '和歌山': { ja: '和歌山', en: 'Wakayama', zh: '和歌山' },
  '城崎温泉': { ja: '城崎温泉', en: 'Kinosaki Onsen', zh: '城崎温泉' },
  '天橋立': { ja: '天橋立', en: 'Amanohashidate', zh: '天桥立' },
  '白浜': { ja: '白浜', en: 'Shirahama', zh: '白滨' },
  '鳥取': { ja: '鳥取', en: 'Tottori', zh: '鸟取' },
  '岡山': { ja: '岡山', en: 'Okayama', zh: '冈山' },
  '岡山駅前': { ja: '岡山駅前', en: 'Okayama-ekimae', zh: '冈山站前' },
  '倉敷': { ja: '倉敷', en: 'Kurashiki', zh: '仓敷' },
  '児島': { ja: '児島', en: 'Kojima', zh: '儿岛' },
  '広島': { ja: '広島', en: 'Hiroshima', zh: '广岛' },
  '横川': { ja: '横川', en: 'Yokogawa', zh: '横川' },
  '宮島口': { ja: '宮島口', en: 'Miyajimaguchi', zh: '宫岛口' },
  '呉': { ja: '呉', en: 'Kure', zh: '吴' },
  '松江': { ja: '松江', en: 'Matsue', zh: '松江' },
  '下関': { ja: '下関', en: 'Shimonoseki', zh: '下关' },
  '高松': { ja: '高松', en: 'Takamatsu', zh: '高松' },
  '高松築港': { ja: '高松築港', en: 'Takamatsu-Chikko', zh: '高松筑港' },
  '徳島': { ja: '徳島', en: 'Tokushima', zh: '德岛' },
  '高知': { ja: '高知', en: 'Kochi', zh: '高知' },
  'はりまや橋': { ja: 'はりまや橋', en: 'Harimayabashi', zh: '播磨屋桥' },
  '後免': { ja: '後免', en: 'Gomen', zh: '后免' },
  '伊野': { ja: '伊野', en: 'Ino', zh: '伊野' },
  '松山': { ja: '松山', en: 'Matsuyama', zh: '松山' },
  '松山市': { ja: '松山市', en: 'Matsuyama City', zh: '松山市' },
  '道後温泉': { ja: '道後温泉', en: 'Dogo Onsen', zh: '道后温泉' },
  '高浜': { ja: '高浜', en: 'Takahama', zh: '高滨' },
  '宇和島': { ja: '宇和島', en: 'Uwajima', zh: '宇和岛' },
  '琴平': { ja: '琴平', en: 'Kotohira', zh: '琴平' },
  '博多': { ja: '博多', en: 'Hakata', zh: '博多' },
  '福岡空港': { ja: '福岡空港', en: 'Fukuoka Airport', zh: '福冈机场' },
  '天神': { ja: '天神', en: 'Tenjin', zh: '天神' },
  '西新': { ja: '西新', en: 'Nishijin', zh: '西新' },
  '貝塚': { ja: '貝塚', en: 'Kaizuka', zh: '贝冢' },
  '佐賀': { ja: '佐賀', en: 'Saga', zh: '佐贺' },
  '長崎': { ja: '長崎', en: 'Nagasaki', zh: '长崎' },
  '浦上': { ja: '浦上', en: 'Urakami', zh: '浦上' },
  '新地中華街': { ja: '新地中華街', en: 'Shinchi Chinatown', zh: '新地中华街' },
  '赤迫': { ja: '赤迫', en: 'Akasako', zh: '赤迫' },
  '熊本': { ja: '熊本', en: 'Kumamoto', zh: '熊本' },
  '辛島町': { ja: '辛島町', en: 'Karashimacho', zh: '辛岛町' },
  '通町筋': { ja: '通町筋', en: 'Torichosuji', zh: '通町筋' },
  '水前寺': { ja: '水前寺', en: 'Suizenji', zh: '水前寺' },
  '大分': { ja: '大分', en: 'Oita', zh: '大分' },
  '別府': { ja: '別府', en: 'Beppu', zh: '别府' },
  '由布院': { ja: '由布院', en: 'Yufuin', zh: '由布院' },
  '宮崎': { ja: '宮崎', en: 'Miyazaki', zh: '宫崎' },
  '鹿児島中央': { ja: '鹿児島中央', en: 'Kagoshima-Chuo', zh: '鹿儿岛中央' },
  '那覇空港': { ja: '那覇空港', en: 'Naha Airport', zh: '那霸机场' },
  '県庁前': { ja: '県庁前', en: 'Prefectural Office', zh: '县厅前' },
  'おもろまち': { ja: 'おもろまち', en: 'Omoromachi', zh: '歌町' },
  '首里': { ja: '首里', en: 'Shuri', zh: '首里' },
};

// Hand-drawn schematic coordinates for the site map (not geographic GIS data).
// City networks are slightly expanded around their city so labels remain readable.
const PLACE_COORDS: Record<string, [number, number]> = {
  '札幌': [626, 59], '大通': [632, 66], 'すすきの': [628, 74], '新札幌': [643, 68], '福住': [640, 78], '宮の沢': [615, 65],
  '新千歳空港': [650, 84], '新函館北斗': [574, 94], '函館': [566, 102], '旭川': [653, 45], '稚内': [621, 17], '網走': [704, 48], '釧路': [699, 83], '帯広': [670, 76],
  '青森': [553, 112], '新青森': [559, 106], '盛岡': [538, 139], '秋田': [508, 139], '仙台': [520, 178], '泉中央': [518, 154], '勾当台公園': [514, 168], '青葉山': [505, 181], '八木山動物公園': [509, 193], '荒井': [538, 187], '山形': [494, 174], '福島': [505, 198],
  '東京': [500, 249], '上野': [501, 239], '新宿': [488, 250], '渋谷': [489, 260], '池袋': [486, 239], '品川': [502, 263], '横浜': [493, 279], '新横浜': [484, 274], '桜木町': [496, 284], '関内': [499, 289], '元町・中華街': [505, 294], '大宮': [494, 222], '千葉': [529, 257], '水戸': [531, 228], '成田空港': [552, 259], '日光': [505, 215],
  '新潟': [452, 186], '長野': [440, 221], '富山': [395, 218], '電鉄富山': [401, 221], '南富山': [397, 229], '岩瀬浜': [408, 214], '金沢': [373, 232], '北鉄金沢': [377, 235], '野町': [368, 242], '鶴来': [360, 250], '福井': [349, 249], '田原町': [352, 244], 'たけふ新': [340, 260], '三国港': [340, 235],
  '静岡': [445, 272], '浜松': [418, 279], '名古屋': [390, 272], '栄': [395, 274], '金山': [393, 281], '藤が丘': [405, 266], '名古屋港': [392, 291], '岐阜': [380, 258],
  '京都': [342, 267], '四条': [344, 273], '烏丸御池': [340, 270], '出町柳': [348, 263], '嵐山': [330, 270], '新大阪': [326, 277], '大阪': [316, 285], '大阪・梅田': [318, 281], 'なんば': [317, 293], '天王寺': [322, 300], '京橋': [329, 286],
  '神戸': [292, 285], '新神戸': [294, 278], '三宮': [291, 283], '有馬温泉': [303, 273], '姫路': [263, 280], '奈良': [347, 290], '和歌山': [322, 317], '城崎温泉': [295, 247], '天橋立': [319, 240], '白浜': [311, 342],
  '鳥取': [249, 251], '岡山': [238, 282], '岡山駅前': [241, 286], '倉敷': [227, 286], '児島': [241, 298], '広島': [181, 282], '横川': [176, 278], '宮島口': [164, 290], '呉': [188, 298], '松江': [202, 252], '下関': [130, 291],
  '高松': [248, 310], '高松築港': [251, 307], '徳島': [286, 319], '高知': [230, 342], 'はりまや橋': [233, 346], '後免': [244, 342], '伊野': [217, 347], '松山': [183, 326], '松山市': [186, 330], '道後温泉': [191, 323], '高浜': [174, 319], '宇和島': [164, 352], '琴平': [232, 319],
  '博多': [105, 311], '福岡空港': [111, 309], '天神': [101, 315], '西新': [94, 318], '貝塚': [113, 317], '佐賀': [84, 326], '長崎': [55, 344], '浦上': [59, 337], '新地中華街': [54, 350], '赤迫': [60, 331],
  '熊本': [105, 351], '辛島町': [108, 355], '通町筋': [111, 349], '水前寺': [118, 355], '大分': [145, 335], '別府': [140, 327], '由布院': [128, 330], '宮崎': [129, 374], '鹿児島中央': [92, 381],
  '那覇空港': [23, 372], '県庁前': [31, 369], 'おもろまち': [39, 365], '首里': [48, 361],
};

const VERIFIED_PRESETS: Record<string, string[]> = {
  'japan-rail-pass-7': ['札幌', '新函館北斗', '東京', '長野', '金沢', '名古屋', '京都', '新大阪', '広島', '博多', '鹿児島中央', '高松'],
  'jr-east-pass-5': ['東京', '成田空港', '大宮', '日光', '仙台', '盛岡', '新青森', '秋田', '長野', '新潟'],
  'hokkaido-rail-pass-5': ['札幌', '新千歳空港', '函館', '旭川', '稚内', '網走', '釧路', '帯広'],
  'kansai-hiroshima-5': ['京都', '新大阪', '大阪', '神戸', '姫路', '岡山', '広島', '宮島口'],
  'kansai-wide-5': ['京都', '新大阪', '大阪', '神戸', '姫路', '岡山', '高松', '鳥取', '城崎温泉', '白浜'],
  'all-kyushu-3': ['博多', '長崎', '熊本', '大分', '宮崎', '鹿児島中央'],
  'northern-kyushu-3': ['博多', '佐賀', '長崎', '熊本', '由布院', '別府', '大分'],
  'all-shikoku-3': ['高松', '徳島', '高知', '松山', '宇和島', '琴平'],
};

const DIRECTORY_PRESETS: Record<string, string[]> = {
  sendai01: ['泉中央', '勾当台公園', '仙台', '青葉山', '八木山動物公園', '荒井'],
  sendai03: ['泉中央', '勾当台公園', '仙台', '青葉山', '八木山動物公園', '荒井'],
  jrhokkaido88: ['新千歳空港', '札幌', '旭川', '稚内'],
  jrhokkaido86: ['新千歳空港', '札幌', '旭川', '稚内'],
  jrhokkaido95: ['新千歳空港', '札幌', '旭川', '稚内'],
  jrhokkaido87: ['新千歳空港', '札幌', '帯広', '釧路', '網走'],
  jrhokkaido93: ['新千歳空港', '札幌', '帯広', '釧路', '網走'],
};

const CITY_GROUPS: Array<{ pattern: RegExp; stops: string[] }> = [
  { pattern: /札幌/, stops: ['札幌', '大通', 'すすきの', '新札幌', '福住', '宮の沢'] },
  { pattern: /仙台/, stops: DIRECTORY_PRESETS.sendai01 },
  { pattern: /東京|都営|東京メトロ/, stops: ['東京', '上野', '新宿', '渋谷', '池袋', '品川'] },
  { pattern: /横浜/, stops: ['横浜', '新横浜', '桜木町', '関内', '元町・中華街'] },
  { pattern: /名古屋/, stops: ['名古屋', '栄', '金山', '藤が丘', '名古屋港'] },
  { pattern: /京都/, stops: ['京都', '四条', '烏丸御池', '出町柳', '嵐山'] },
  { pattern: /大阪|大阪市/, stops: ['新大阪', '大阪・梅田', 'なんば', '天王寺', '京橋'] },
  { pattern: /神戸/, stops: ['新神戸', '三宮', '神戸', '有馬温泉'] },
  { pattern: /広島/, stops: ['広島', '横川', '宮島口', '呉'] },
  { pattern: /福岡|博多/, stops: ['福岡空港', '博多', '天神', '西新', '貝塚'] },
  { pattern: /熊本/, stops: ['熊本', '辛島町', '通町筋', '水前寺'] },
  { pattern: /長崎/, stops: ['長崎', '浦上', '新地中華街', '赤迫'] },
  { pattern: /岡山/, stops: ['岡山', '岡山駅前', '倉敷', '児島'] },
  { pattern: /高松/, stops: ['高松', '高松築港', '琴平'] },
  { pattern: /松山/, stops: ['松山', '松山市', '道後温泉', '高浜'] },
  { pattern: /高知/, stops: ['高知', 'はりまや橋', '後免', '伊野'] },
  { pattern: /沖縄|那覇|ゆいレール/, stops: ['那覇空港', '県庁前', 'おもろまち', '首里'] },
  { pattern: /金沢/, stops: ['金沢', '北鉄金沢', '野町', '鶴来'] },
  { pattern: /富山/, stops: ['富山', '電鉄富山', '南富山', '岩瀬浜'] },
  { pattern: /福井/, stops: ['福井', '田原町', 'たけふ新', '三国港'] },
];

const REGION_HUBS: Record<string, string[]> = {
  '北海道': ['札幌', '函館', '旭川', '帯広', '釧路', '網走'],
  '東北': ['青森', '盛岡', '秋田', '仙台', '山形', '福島'],
  '関東': ['東京', '新宿', '横浜', '大宮', '千葉', '水戸'],
  '東海': ['名古屋', '静岡', '浜松', '岐阜'],
  '北信越': ['新潟', '長野', '富山', '金沢', '福井'],
  '近畿': ['京都', '大阪', '神戸', '姫路', '奈良', '和歌山'],
  '中国': ['岡山', '広島', '鳥取', '松江', '下関'],
  '四国': ['高松', '徳島', '高知', '松山'],
  '九州': ['博多', '長崎', '熊本', '大分', '宮崎', '鹿児島中央'],
};

function localize(stops: readonly string[], locale: SupportedLocale): PassAreaStop[] {
  return [...new Set(stops)].slice(0, 12).map((stop, index) => {
    const [x, y] = PLACE_COORDS[stop] || [100 + (index * 50), 210];
    return { key: stop, label: PLACE_LABELS[stop]?.[locale] || stop, x, y };
  });
}

function regionStops(regions: readonly string[]): string[] {
  const normalized = regions.includes('全国') ? Object.keys(REGION_HUBS) : regions.map(region => region === '関西' ? '近畿' : region);
  const groups = normalized.map(region => REGION_HUBS[region] || []).filter(group => group.length > 0);
  const stops: string[] = [];
  for (let index = 0; stops.length < 10 && groups.some(group => index < group.length); index += 1) {
    for (const group of groups) {
      if (group[index] && !stops.includes(group[index])) stops.push(group[index]);
      if (stops.length === 10) break;
    }
  }
  return stops;
}

export function getVerifiedPassAreaStops(pass: JRPass, locale: SupportedLocale): PassAreaStop[] {
  return localize(VERIFIED_PRESETS[pass.id] || regionStops(pass.coverage.regions), locale);
}

export function getDirectoryPassAreaStops(pass: DomesticDirectoryPass, locale: SupportedLocale): PassAreaStop[] {
  const preset = DIRECTORY_PRESETS[pass.id];
  if (preset) return localize(preset, locale);

  const text = `${pass.name} ${pass.company}`.normalize('NFKC');
  const city = CITY_GROUPS.find(group => group.pattern.test(text));
  if (city && (pass.category === 'city' || pass.category === 'bus')) return localize(city.stops, locale);

  const explicit = Object.keys(PLACE_LABELS)
    .filter(place => text.includes(place))
    .sort((a, b) => b.length - a.length)
    .filter((place, index, places) => !places.slice(0, index).some(parent => parent.includes(place)));
  const fallback = regionStops(pass.majorRegions.length > 0 ? pass.majorRegions : [pass.region]);
  const stops = city
    ? [...explicit, ...city.stops, ...fallback]
    : [...explicit, ...fallback];
  return localize(stops, locale);
}

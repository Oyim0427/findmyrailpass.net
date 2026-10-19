import type { JRPass } from '@/types/pass';
import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';

export type PassImageAsset = {
  key: string;
  region: string;
  title: string;
  author: string;
  license: 'CC BY-SA 4.0' | 'CC BY-SA 3.0' | 'CC0 1.0';
  licenseUrl: string;
  sourceUrl: string;
  localPath: string;
};

const CC_BY_SA_4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const CC0_1 = 'https://creativecommons.org/publicdomain/zero/1.0/';

// Pinned Wikimedia Commons files. We keep local thumbnails for fast, stable
// rendering and retain the complete credit line here for license compliance.
export const PASS_IMAGE_LIBRARY: PassImageAsset[] = [
  {
    key: 'nationwide', region: '全国', title: 'Fujikawa Bridge (Tōkaidō Shinkansen) and Mount Fuji',
    author: 'Alpsdake', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fujikawa_Bridge_(T%C5%8Dkaid%C5%8D_Shinkansen)_and_Mount_Fuji.jpg',
    localPath: '/images/regions/nationwide.jpg',
  },
  {
    key: 'hokkaido', region: '北海道', title: 'Furano-Biei-Norokko Series50',
    author: 'MaedaAkihiko', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Furano-Biei-Norokko_Series50.jpg',
    localPath: '/images/regions/hokkaido.jpg',
  },
  {
    key: 'hokkaido-sekihoku', region: '北海道', title: 'Sekihoku-line Kiha183-1550',
    author: 'MaedaAkihiko', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sekihoku-line_Kiha183-1550.jpg',
    localPath: '/images/regions/hokkaido-sekihoku.jpg',
  },
  {
    key: 'hokkaido-hokuto', region: '北海道', title: 'Series Kiha261-1000 Hokuto-4',
    author: 'MaedaAkihiko', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Series_Kiha261-1000_Hokuto-4.jpg',
    localPath: '/images/regions/hokkaido-hokuto.jpg',
  },
  {
    key: 'hokkaido-streetcar', region: '北海道', title: 'Sapporo Streetcar Type 8500 8501',
    author: 'Toshinori baba', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sapporo_Streetcar_Type_8500_8501.JPG',
    localPath: '/images/regions/hokkaido-streetcar.jpg',
  },
  {
    key: 'tohoku', region: '東北', title: 'Resort Shirakami Aoike at Senjōjiki Station',
    author: 'Calistemon', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:HB-E300_Resort_Shirakami_Aoike_at_Senj%C5%8Djiki_Station,_April_2023_03.jpg',
    localPath: '/images/regions/tohoku.jpg',
  },
  {
    key: 'kanto', region: '関東', title: 'Marunouchi & Tokyo Station 1',
    author: 'Zairon', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Marunouchi_%26_Tokyo_Station_1.jpg',
    localPath: '/images/regions/kanto.jpg',
  },
  {
    key: 'tokai', region: '東海', title: 'Mount Fuji and Shinkansen N700',
    author: 'Alpsdake', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mount_Fuji_and_Shinkansen_N700.jpg',
    localPath: '/images/regions/tokai.jpg',
  },
  {
    key: 'hokushinetsu', region: '北信越', title: 'Tsuzumimon Gate in front of Kanazawa Station',
    author: 'そらみみ', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tsuzumimon_Gate_in_front_of_Kanazawa_Station_20150120.JPG',
    localPath: '/images/regions/hokushinetsu.jpg',
  },
  {
    key: 'kansai', region: '近畿', title: 'Kyoto Station November 2016 -02',
    author: 'Martin Falbisoner', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kyoto_Station_November_2016_-02.jpg',
    localPath: '/images/regions/kansai.jpg',
  },
  {
    key: 'chugoku', region: '中国', title: 'Train of Hiroden Miyajima Line at Hiroden-Hatsukaichi Station',
    author: 'そらみみ', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Train_of_Hiroden_Miyajima_Line_on_east_side_of_Hiroden-Hatsukaichi_Station.jpg',
    localPath: '/images/regions/chugoku.jpg',
  },
  {
    key: 'shikoku', region: '四国', title: 'Dosan Line Asō–Ōnogō',
    author: 'Gohachiyasu1214', license: 'CC BY-SA 4.0', licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dosan_Line_As%C5%8D-%C5%8Cnog%C5%8D-01.jpg',
    localPath: '/images/regions/shikoku.jpg',
  },
  {
    key: 'kyushu', region: '九州', title: 'JRK Yufuin-no-Mori Kiha71 Kiha72',
    author: 'MaedaAkihiko', license: 'CC0 1.0', licenseUrl: CC0_1,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:JRK_Yufuin-no-Mori_Kiha71_Kiha72.jpg',
    localPath: '/images/regions/kyushu.jpg',
  },
  {
    key: 'tohoku-sendai', region: '東北', title: 'Sendai-City-Subway Tozai-Line-Series2504.jpg',
    author: 'MaedaAkihiko', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sendai-City-Subway_Tozai-Line-Series2504.jpg',
    localPath: '/images/regions/tohoku-sendai.jpg',
  },
  {
    key: 'tohoku-aizu', region: '東北', title: 'Series583 AIZU LINER.jpg',
    author: 'MaedaAkihiko', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Series583_AIZU_LINER.jpg',
    localPath: '/images/regions/tohoku-aizu.jpg',
  },
  {
    key: 'kanto-enoden', region: '関東', title: 'Enoden-Type1251.jpg',
    author: 'MaedaAkihiko', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Enoden-Type1251.jpg',
    localPath: '/images/regions/kanto-enoden.jpg',
  },
  {
    key: 'kanto-yokohama', region: '関東', title: 'Yokohama waterfront.jpg',
    author: 'Ymblanter', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yokohama_waterfront.jpg',
    localPath: '/images/regions/kanto-yokohama.jpg',
  },
  {
    key: 'tokai-nagoya', region: '東海', title: 'Nagoya Castle(Larger).jpg',
    author: 'Base64', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nagoya_Castle(Larger).jpg',
    localPath: '/images/regions/tokai-nagoya.jpg',
  },
  {
    key: 'tokai-hamamatsu', region: '東海', title: '230126 Hamanako Garden Park Hamamatsu Japan16s3.jpg',
    author: '663highland', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:230126_Hamanako_Garden_Park_Hamamatsu_Japan16s3.jpg',
    localPath: '/images/regions/tokai-hamamatsu.jpg',
  },
  {
    key: 'hokushinetsu-toyama', region: '北信越', title: 'Toyama chihou railway 9000形.JPG',
    author: 'Toshinori baba', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyama_chihou_railway_9000%E5%BD%A2.JPG',
    localPath: '/images/regions/hokushinetsu-toyama.jpg',
  },
  {
    key: 'hokushinetsu-nagano', region: '北信越', title: 'Nagano Station 2023-05-27.jpg',
    author: '快速踊り子', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nagano_Station_2023-05-27.jpg',
    localPath: '/images/regions/hokushinetsu-nagano.jpg',
  },
  {
    key: 'kansai-osaka', region: '近畿', title: 'Osaka Castle Outer Moat and Osaka Business Park, November 2016.jpg',
    author: 'Martin Falbisoner', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Osaka_Castle_Outer_Moat_and_Osaka_Business_Park,_November_2016.jpg',
    localPath: '/images/regions/kansai-osaka.jpg',
  },
  {
    key: 'kansai-kobe', region: '近畿', title: 'Kobe Port Tower and Maritime Museum, November 2016.jpg',
    author: 'Martin Falbisoner', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kobe_Port_Tower_and_Maritime_Museum,_November_2016.jpg',
    localPath: '/images/regions/kansai-kobe.jpg',
  },
  {
    key: 'chugoku-matsue', region: '中国', title: 'Matsue Castle in 2013-11-09.jpg',
    author: 'Cyfal', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Matsue_Castle_in_2013-11-09.jpg',
    localPath: '/images/regions/chugoku-matsue.jpg',
  },
  {
    key: 'chugoku-okayama', region: '中国', title: '211231 Omizu-en garden Okayama Okayama pref Japan04s3.jpg',
    author: '663highland', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:211231_Omizu-en_garden_Okayama_Okayama_pref_Japan04s3.jpg',
    localPath: '/images/regions/chugoku-okayama.jpg',
  },
  {
    key: 'shikoku-kochi', region: '四国', title: 'Castle tower and stone wall of Kochi Castle.jpg',
    author: 'Tōjichi', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Castle_tower_and_stone_wall_of_Kochi_Castle.jpg',
    localPath: '/images/regions/shikoku-kochi.jpg',
  },
  {
    key: 'shikoku-matsuyama', region: '四国', title: 'JR Matsuyama station tram stop platform.jpg',
    author: 'Niiryoku2910', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:JR_Matsuyama_station_tram_stop_platform.jpg',
    localPath: '/images/regions/shikoku-matsuyama.jpg',
  },
  {
    key: 'kyushu-kumamoto', region: '九州', title: 'Kumamoto Castle 2024 1.jpg',
    author: 'Smiley.toerist', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kumamoto_Castle_2024_1.jpg',
    localPath: '/images/regions/kyushu-kumamoto.jpg',
  },
  {
    key: 'kyushu-nagasaki', region: '九州', title: 'Nagasaki-ekimae tram stop.jpg',
    author: 'Niiryoku2910', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nagasaki-ekimae_tram_stop.jpg',
    localPath: '/images/regions/kyushu-nagasaki.jpg',
  },
];

const imageByKey = new Map(PASS_IMAGE_LIBRARY.map(image => [image.key, image]));
const imageByRegion = new Map<string, PassImageAsset>();
const imagesByRegion = new Map<string, PassImageAsset[]>();
for (const image of PASS_IMAGE_LIBRARY) {
  if (!imageByRegion.has(image.region)) imageByRegion.set(image.region, image);
  imagesByRegion.set(image.region, [...(imagesByRegion.get(image.region) || []), image]);
}

// Prefer a named city or operator when a corresponding local photograph exists.
const regionalImageRules: Array<{ region: string; pattern: RegExp; key: string }> = [
  { region: '東北', pattern: /仙台|sendai/, key: 'tohoku-sendai' },
  { region: '東北', pattern: /会津|福島|飯坂|aizu|fukusima/, key: 'tohoku-aizu' },
  { region: '関東', pattern: /江ノ|江之|鎌倉|湘南|enoden|kamakura|syonan/, key: 'kanto-enoden' },
  { region: '関東', pattern: /横浜|ヨコハマ|みなとみらい|港湾|yokohama/, key: 'kanto-yokohama' },
  { region: '東海', pattern: /名古屋|名鉄|愛知|あおなみ|nagoya|meitetu/, key: 'tokai-nagoya' },
  { region: '東海', pattern: /浜松|浜名湖|遠州|天竜浜名湖|entetu|tenhama/, key: 'tokai-hamamatsu' },
  { region: '北信越', pattern: /富山|万葉|toyama|titetu|manyo/, key: 'hokushinetsu-toyama' },
  { region: '北信越', pattern: /長野|信州|しなの|軽井沢|上高地|ながでん|nagaden|sinano|matuden/, key: 'hokushinetsu-nagano' },
  { region: '近畿', pattern: /神戸|三宮|須磨|有馬|明石|姫路|sanyo|sanhime/, key: 'kansai-kobe' },
  { region: '近畿', pattern: /大阪|Osaka|osaka/, key: 'kansai-osaka' },
  { region: '中国', pattern: /松江|出雲|山陰|一畑|itibata/, key: 'chugoku-matsue' },
  { region: '中国', pattern: /岡山|倉敷|井原|水島|岡電|okaden|ibara|mizushima/, key: 'chugoku-okayama' },
  { region: '四国', pattern: /松山|伊予|内子|大洲|iyotetu/, key: 'shikoku-matsuyama' },
  { region: '四国', pattern: /高知|土佐|とさでん|tosaden|tosakuro/, key: 'shikoku-kochi' },
  { region: '九州', pattern: /熊本|阿蘇|人吉|球磨|kumamoto|kumagawa|minamiaso/, key: 'kyushu-kumamoto' },
  { region: '九州', pattern: /長崎|島原|松浦|nagasaki|simabara|matuura/, key: 'kyushu-nagasaki' },
];

function stableImageIndex(id: string, count: number): number {
  let hash = 0;
  for (const character of id) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  return hash % count;
}

export function getPassImageAsset(pass: JRPass | DomesticDirectoryPass): PassImageAsset {
  const region = 'salesPeriod' in pass
    ? pass.region
    : pass.category === 'national' || pass.coverage.regions.includes('全国')
      ? '全国'
      : pass.coverage.regions[0];

  if (region === '北海道') {
    const name = 'salesPeriod' in pass ? pass.name : pass.name.jp;
    if (/札幌市電|市電24時間/.test(name)) return imageByKey.get('hokkaido-streetcar')!;
    if (/遠軽|北見|網走|石北|オホーツク/.test(name)) return imageByKey.get('hokkaido-sekihoku')!;
    if (/北海道フリーパス|北海道レールパス/.test(name)) return imageByKey.get('hokkaido-hokuto')!;
    // Stable selection reduces repetition without changing on reload.
    const variants = ['hokkaido', 'hokkaido-sekihoku', 'hokkaido-hokuto'];
    return imageByKey.get(variants[stableImageIndex(pass.id, variants.length)])!;
  }

  const name = 'salesPeriod' in pass ? pass.name : pass.name.jp;
  const context = `${name} ${pass.company || ''} ${pass.id}`.normalize('NFKC');
  const rule = regionalImageRules.find(rule => rule.region === region && rule.pattern.test(context));
  if (rule) return imageByKey.get(rule.key)!;

  const variants = imagesByRegion.get(region);
  return variants?.[stableImageIndex(pass.id, variants.length)] || imageByRegion.get('全国')!;
}

export function getPassImage(pass: JRPass | DomesticDirectoryPass): string {
  return getPassImageAsset(pass).localPath;
}

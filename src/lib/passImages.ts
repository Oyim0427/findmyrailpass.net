import type { JRPass } from '@/types/pass';
import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';

export type PassImageAsset = {
  key: string;
  region: string;
  title: string;
  author: string;
  license: 'CC BY-SA 4.0' | 'CC0 1.0';
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
];

const imageByRegion = new Map(PASS_IMAGE_LIBRARY.map(image => [image.region, image]));

export function getPassImageAsset(pass: JRPass | DomesticDirectoryPass): PassImageAsset {
  const region = 'salesPeriod' in pass
    ? pass.region
    : pass.category === 'national' || pass.coverage.regions.includes('全国')
      ? '全国'
      : pass.coverage.regions[0];
  return imageByRegion.get(region) || imageByRegion.get('全国')!;
}

export function getPassImage(pass: JRPass | DomesticDirectoryPass): string {
  return getPassImageAsset(pass).localPath;
}

import { JRPass } from '@/types/pass';

// 导入各地区周游券
import { nationalPasses } from './national-passes';
import { hokkaidoPasses } from './hokkaido-passes';
import { tohokuKantoPasses } from './tohoku-kanto-passes';
import { tohokuPasses } from './tohoku-passes';
import { hokurikuPasses } from './hokuriku-passes';
import { kinkiPasses } from './kinki-passes';
import { chugokuSanyoPasses } from './chugoku-sanyo-passes';
import { kyushuPasses } from './kyushu-passes';
import { cityPasses } from './city-passes';

// 统一的周游券数据
export const unifiedPasses: JRPass[] = [
  ...nationalPasses,
  ...hokkaidoPasses,
  ...tohokuKantoPasses,
  ...tohokuPasses,
  ...hokurikuPasses,
  ...kinkiPasses,
  ...chugokuSanyoPasses,
  ...kyushuPasses,
  ...cityPasses
];

// 按类别分组的周游券
export const passesByCategory = {   
  national: unifiedPasses.filter(pass => pass.category === 'national'),
  regional: unifiedPasses.filter(pass => pass.category === 'regional'),
  city: unifiedPasses.filter(pass => pass.category === 'city')
};

// 按地区分组的周游券
export const passesByRegion = {
  '全国': unifiedPasses.filter(pass => pass.coverage.regions.includes('全国')),
  '北海道': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('北海道') || region.includes('札幌') || region.includes('富良野') || region.includes('美瑛') || region.includes('登别')
  )),
  '東北': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('东北') || region.includes('東北') || region.includes('青森') || region.includes('仙台') || region.includes('秋田') || region.includes('山形') || region.includes('福岛')
  )),
  '関東': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('关东') || region.includes('関東') || region.includes('东京') || region.includes('東京') || region.includes('富士山') || region.includes('日光') || region.includes('轻井泽') || region.includes('軽井沢') || region.includes('伊豆')
  )),
  '東海': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('东海') || region.includes('東海') || region.includes('名古屋') || region.includes('静冈') || region.includes('静岡') || region.includes('伊势') || region.includes('伊勢') || region.includes('熊野') || region.includes('和歌山')
  )),
  '北信越': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('北信越') || region.includes('金泽') || region.includes('金沢') || region.includes('飞驒高山') || region.includes('飛騨高山') || region.includes('白川鄉') || region.includes('白川郷') || region.includes('合掌村')
  )),
  '近畿': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('近畿') || region.includes('关西') || region.includes('関西') || region.includes('大阪') || region.includes('京都') || region.includes('奈良') || region.includes('神户') || region.includes('神戸') || region.includes('仓敷') || region.includes('倉敷') || region.includes('冈山') || region.includes('岡山') || region.includes('丹後地区')
  )),
  '中国': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('中国') || region.includes('广岛') || region.includes('広島') || region.includes('山口') || region.includes('山阳') || region.includes('山陽') || region.includes('山阴') || region.includes('山陰')
  )),
  '四国': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('四国')
  )),
  '九州': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('九州') || region.includes('福冈') || region.includes('福岡') || region.includes('博多') || region.includes('熊本') || region.includes('鹿儿岛') || region.includes('鹿児島') || region.includes('长崎') || region.includes('長崎') || region.includes('宫崎') || region.includes('宮崎')
  ))
};

// 热门周游券（全国版优先，地区按列表顺序，每个地区内按人气排序）
export const popularPasses = unifiedPasses
  .sort((a, b) => {
    // 首先按地区排序：全国版优先
    const aIsNational = a.coverage.regions.includes('全国');
    const bIsNational = b.coverage.regions.includes('全国');
    
    if (aIsNational && !bIsNational) return -1; // a是全国版，b不是，a排在前面
    if (!aIsNational && bIsNational) return 1;  // b是全国版，a不是，b排在前面
    
    // 如果都是全国版，则按人气排序
    if (aIsNational && bIsNational) {
      return b.popularity - a.popularity;
    }
    
    // 如果都不是全国版，则按地区列表顺序排列
    const regionOrder = ['北海道','東北', '関東', '東海', '北信越', '近畿','中国', '四国', '九州'];
    
    // 获取周游券的主要地区
    const getMainRegion = (pass: JRPass) => {
      // 检查每个地区关键词
      const regionKeywords = {
        '北海道': ['北海道', '札幌', '富良野', '美瑛', '登别', '函館'],
        '東北': ['东北', '東北', '青森', '仙台', '秋田', '山形', '福岛'],
        '関東': ['关东', '関東', '东京', '東京', '富士山', '日光', '轻井泽', '軽井沢', '伊豆'],
        '東海': ['东海', '東海', '名古屋', '静冈', '静岡', '伊势', '伊勢', '熊野', '和歌山'],
        '北信越': ['北信越', '金泽', '金沢', '飞驒高山', '飛騨高山', '白川鄉', '白川郷', '合掌村'],
        '近畿': ['近畿', '关西', '関西', '大阪', '京都', '奈良', '神户', '神戸', '仓敷', '倉敷', '冈山', '岡山', '丹後地区'],
        '中国': ['中国', '广岛', '広島', '山口', '山阳', '山陽', '山阴', '山陰'],
        '四国': ['四国'],
        '九州': ['九州', '福冈', '福岡', '博多', '熊本', '鹿儿岛', '鹿児島', '长崎', '長崎', '宫崎', '宮崎']
      };
      
      for (const [region, keywords] of Object.entries(regionKeywords)) {
        if (pass.coverage.regions.some((r: string) => 
          keywords.some(keyword => r.includes(keyword))
        )) {
          return region;
        }
      }
      return '其他'; // 如果不在列表中，归为其他
    };
    
    const aRegion = getMainRegion(a);
    const bRegion = getMainRegion(b);
    
    // 按地区列表顺序排序
    const aRegionIndex = regionOrder.indexOf(aRegion);
    const bRegionIndex = regionOrder.indexOf(bRegion);
    
    if (aRegionIndex !== bRegionIndex) {
      return aRegionIndex - bRegionIndex;
    }
    
    // 如果地区相同，则按sortOrder排序，如果没有sortOrder则按人气排序
    if (a.sortOrder !== undefined && b.sortOrder !== undefined) {
      return a.sortOrder - b.sortOrder;
    }
    if (a.sortOrder !== undefined && b.sortOrder === undefined) {
      return -1; // a有sortOrder，b没有，a排在前面
    }
    if (a.sortOrder === undefined && b.sortOrder !== undefined) {
      return 1; // b有sortOrder，a没有，b排在前面
    }
    // 都没有sortOrder，按人气排序
    return b.popularity - a.popularity;
  })
  .slice(0, 6);

// 地区列表
export const regions = [
  '全国','北海道','東北', '関東', '東海', '北信越', '近畿','中国', '四国', '九州' 
];

// 电车类型列表
export const trainTypes = [
  '新干线', '特急电车', '急行电车', '普通电车', '地铁', '巴士', '观光电车', '私铁', 'JR'
];
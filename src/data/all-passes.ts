import { JRPass } from '@/types/pass';

// 导入各地区周游券
import { nationalPasses } from './national-passes';
import { hokkaidoPasses } from './hokkaido-passes';
import { tohokuKantoPasses } from './tohoku-kanto-passes';
import { chubuHokurikuPasses } from './chubu-hokuriku-passes';
import { kansaiPasses } from './kansai-passes';
import { chugokuSanyoPasses } from './chugoku-sanyo-passes';
import { kyushuPasses } from './kyushu-passes';
import { cityPasses } from './city-passes';

// 统一的周游券数据
export const unifiedPasses: JRPass[] = [
  ...nationalPasses,
  ...hokkaidoPasses,
  ...tohokuKantoPasses,
  ...chubuHokurikuPasses,
  ...kansaiPasses,
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
  '东北': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('东北') || region.includes('青森') || region.includes('仙台') || region.includes('秋田') || region.includes('山形') || region.includes('福岛')
  )),
  '关东': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('关东') || region.includes('东京') || region.includes('富士山') || region.includes('日光') || region.includes('轻井泽') || region.includes('伊豆')
  )),
  '中部': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('中部') || region.includes('名古屋') || region.includes('金泽') || region.includes('飞驒高山') || region.includes('静冈') || region.includes('伊势') || region.includes('熊野') || region.includes('和歌山') || region.includes('白川鄉') || region.includes('合掌村')
  )),
  '关西': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('关西') || region.includes('大阪') || region.includes('京都') || region.includes('奈良') || region.includes('神户') || region.includes('仓敷') || region.includes('冈山') || region.includes('丹後地区')
  )),
  '中国': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('中国') || region.includes('广岛') || region.includes('山口') || region.includes('山阳') || region.includes('山阴')
  )),
  '四国': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('四国')
  )),
  '九州': unifiedPasses.filter(pass => pass.coverage.regions.some(region => 
    region.includes('九州') || region.includes('博多') || region.includes('熊本') || region.includes('鹿儿岛') || region.includes('长崎') || region.includes('宫崎')
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
    const regionOrder = ['北海道','东北', '关东', '中部','关西','中国', '四国', '九州'];
    
    // 获取周游券的主要地区
    const getMainRegion = (pass: JRPass) => {
      // 检查每个地区关键词
      const regionKeywords = {
        '北海道': ['北海道', '札幌', '富良野', '美瑛', '登别', '函館'],
        '东北': ['东北', '青森', '仙台', '秋田', '山形', '福岛'],
        '关东': ['关东', '东京', '富士山', '日光', '轻井泽', '伊豆'],
        '中部': ['中部', '名古屋', '金泽', '飞驒高山', '静冈', '伊势', '熊野', '和歌山', '白川鄉', '合掌村'],
        '关西': ['关西', '大阪', '京都', '奈良', '神户', '仓敷', '冈山', '丹後地区'],
        '中国': ['中国', '广岛', '山口', '山阳', '山阴'],
        '四国': ['四国'],
        '九州': ['九州', '福冈', '博多', '熊本', '鹿儿岛', '长崎', '宫崎']
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
  '全国','北海道','东北', '关东', '中部','关西','中国', '四国', '九州' 
];

// 电车类型列表
export const trainTypes = [
  '新干线', '特急电车', '急行电车', '普通电车', '地铁', '巴士', '观光电车', '私铁', 'JR'
];
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { JRPass } from '@/types/pass';

function determineCategory(row: Record<string, string>): 'nationwide' | 'regional' | 'city' | 'bus' | 'private_railway' | 'special' {
  const name = row['车票名称'] || '';
  const company = row['公司名'] || '';
  const region = row['地区'] || '';

  if (name.includes('巴士') || name.includes('バス') || name.toLowerCase().includes('bus') || company.includes('バス') || company.includes('巴士')) {
    return 'bus';
  }

  if (region.includes('全国') || name.includes('JAPAN RAIL PASS') || name.includes('青春18')) {
    return 'nationwide';
  }

  if (name.includes('套票') || name.includes('组合') || name.toLowerCase().includes('package') || name.toLowerCase().includes('set')) {
    return 'special';
  }

  const isJR = company.toUpperCase().includes('JR') || company.includes('ＪＲ') || company.includes('旅客铁道') || company.includes('旅客鉄道');

  if (!isJR && /(一日|1日|2日|24小时|48小时|地下铁|地铁|地下鉄|市营|市営|Metro|Subway|乘车券|乗車券)/i.test(name)) {
    return 'city';
  }

  if (!isJR) {
    return 'private_railway';
  }

  return 'regional';
}

export function getAllPasses(): JRPass[] {
  const dataDir = path.join(process.cwd(), 'save_data/excel-data_sitedata');
  let files: string[] = [];
  try {
    files = fs.readdirSync(dataDir).filter(f => f.endsWith('.csv') && f !== 'manifest.csv');
  } catch (e) {
    console.error("Could not read data directory", e);
    return [];
  }

  const allPasses: JRPass[] = [];
  let idCounter = 1;

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const records: Record<string, string>[] = parse(content, { columns: true, skip_empty_lines: true, bom: true });

    for (const row of records) {
      if (!row['车票名称']) continue;

      // Extract adult regular price if possible
      let adultPrice = 0;
      const priceText = row['价格'] || '';
      const priceMatch = priceText.match(/(?:大人|大人：|大人:|)[^\d]*(\d{1,3}(?:,\d{3})*|\d+)/);
      if (priceMatch && priceMatch[1]) {
        adultPrice = parseInt(priceMatch[1].replace(/,/g, ''), 10);
      }

      // Duration parsing (try to find numbers)
      const durationMatch = (row['有效期间'] || '').match(/\d+/g);
      const duration = durationMatch ? durationMatch.map(d => parseInt(d, 10)) : [1];

      // Links parsing
      const officialLinks: { name: string, url: string }[] = [];
      if (row['详情页链接']) {
        const links = row['详情页链接'].split('|').map(s => s.trim()).filter(Boolean);
        links.forEach(l => officialLinks.push({ name: '官方详情', url: l }));
      }
      if (row['详情页内链接']) {
        const links = row['详情页内链接'].split('|').map(s => s.trim()).filter(Boolean);
        links.forEach(l => officialLinks.push({ name: '相关链接', url: l }));
      }

      // Map image
      let mapUrl = '';
      if (row['详情页图片链接']) {
        const images = row['详情页图片链接'].split('|').map(s => s.trim()).filter(Boolean);
        if (images.length > 0) mapUrl = images[0];
      }

      const pass: JRPass = {
        id: `pass_${idCounter++}`,
        sortOrder: idCounter,
        name: {
          en: row['车票名称'],
          jp: row['车票名称'],
          cn: row['车票名称']
        },
        description: row['详情全文'] || row['限制事项'] || '',
        price: {
          adult: { regular: isNaN(adultPrice) ? 0 : adultPrice },
          child: { regular: 0 },
          freeText: priceText
        },
        bestFor: [],
        duration: duration,
        validityPeriod: {
          startDate: '',
          endDate: '',
          description: row['利用期间'] || row['有效期间'] || ''
        },
        coverage: {
          regions: row['地区'] ? row['地区'].split(/[,，|]/).map(s => s.trim()).filter(Boolean) : [],
          map: mapUrl,
          description: row['自由乘车区间'] || ''
        },
        targetAudience: ['所有游客'],
        trainTypes: row['可利用设备'] ? row['可利用设备'].split(/[,，|]/).map(s => s.trim()).filter(Boolean) : [],
        officialLinks,
        purchaseLinks: [], // Can map if needed
        category: determineCategory(row),
        popularity: 5,
        isLimitedPeriod: !!row['详情发售期间'] && row['详情发售期间'] !== '通年',
        ticket_note: [row['发售处'], row['相关信息'], row['限制事项']].filter(Boolean).join('\n'),
        company: row['公司名']
      };

      allPasses.push(pass);
    }
  }

  return allPasses.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

export function getPopularPasses(limit: number = 6): JRPass[] {
  return getAllPasses()
    .filter(pass => pass.popularity >= 4)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

export function getPassById(id: string): JRPass | undefined {
  return getAllPasses().find(pass => pass.id === id);
}

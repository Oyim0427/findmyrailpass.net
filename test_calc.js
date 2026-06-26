const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Mock passData.ts
const dataDir = 'save_data/excel-data_sitedata';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.csv') && f !== 'manifest.csv');
const passes = [];
let idCounter = 1;
for (const file of files) {
  const content = fs.readFileSync(`${dataDir}/${file}`, 'utf-8');
  const records = parse(content, { columns: true, skip_empty_lines: true, bom: true });
  for (const row of records) {
    if (!row['车票名称']) continue;
    let adultPrice = 0;
    const priceMatch = (row['价格'] || '').match(/(?:大人|大人：|大人:|)[^\d]*(\d{1,3}(?:,\d{3})*|\d+)/);
    if (priceMatch && priceMatch[1]) adultPrice = parseInt(priceMatch[1].replace(/,/g, ''), 10);
    const durationMatch = (row['有效期间'] || '').match(/\d+/g);
    const duration = durationMatch ? durationMatch.map(d => parseInt(d, 10)) : [1];
    passes.push({
      id: `pass_${idCounter++}`,
      name: row['车票名称'],
      price: { adult: { regular: adultPrice } },
      duration,
      coverage: { regions: row['地区'] ? row['地区'].split(/[,，|]/).map(s => s.trim()).filter(Boolean) : [] },
      category: 'regional',
      popularity: 5
    });
  }
}
console.log(`Loaded ${passes.length} passes.`);

// Mock AdvancedCalculator.tsx logic
const PREFECTURE_TO_REGION = { "东京都": "関東", "北海道": "北海道" };
const route = { from: "东京都", to: "東北", duration: 2 };
const travelers = 2;
const fromRegion = PREFECTURE_TO_REGION[route.from];
const toRegion = route.to;
let individualCost = 10000 * route.duration * travelers; // 40000

const regionFilteredPasses = passes.filter(pass => {
  const passRegions = pass.coverage.regions || [];
  const isNational = pass.category === 'national' || passRegions.includes('全国') || passRegions.includes('全日本');
  if (isNational) return true;
  if (toRegion === '全国') return isNational;
  if (fromRegion && fromRegion !== toRegion && toRegion !== '全国') {
      return passRegions.includes(fromRegion) || passRegions.includes(toRegion);
  }
  return passRegions.some(region => region === toRegion || region.includes(toRegion) || toRegion.includes(region));
});
console.log(`regionFilteredPasses: ${regionFilteredPasses.length}`);

const results = [];
regionFilteredPasses.forEach(pass => {
  if (!pass.price.adult.regular || pass.price.adult.regular <= 0) return;
  let score = 0;
  const passRegions = pass.coverage.regions;
  const isNational = pass.category === 'national' || passRegions.includes('全国') || passRegions.includes('全日本');
  
  if (toRegion === '全国') score += 60;
  else if (fromRegion && fromRegion !== toRegion) {
      if (passRegions.includes(fromRegion) && passRegions.includes(toRegion)) score += 60;
      else if (isNational) score += 50;
      else if (passRegions.includes(toRegion) || passRegions.includes(fromRegion)) score += 50;
  } else score += 60;
  
  const validDurations = pass.duration.filter(d => d <= route.duration);
  if (pass.duration.includes(route.duration)) score += 40;
  else if (validDurations.length > 0) score += 25;
  else score += 5;
  
  const passCost = pass.price.adult.regular * travelers;
  const savings = individualCost - passCost;
  if (savings > 0) score += (savings >= 10000 ? 35 : savings >= 5000 ? 30 : 20);
  else score -= 25;
  
  score += 20; // coverageRatio >= 0.9
  
  const dailyCost = pass.price.adult.regular / Math.min(...pass.duration);
  if (dailyCost < 5000) score += 15;
  else if (dailyCost < 10000) score += 10;
  else score += 5;
  
  score += pass.popularity * 2;
  
  if (score > 50) results.push({ name: pass.name, score, savings });
});
console.log(`results: ${results.length}`);
console.log(results.slice(0,3));

// Fallback logic
if (results.length === 0) {
  const fallbackPasses = passes.filter(pass => pass.coverage.regions.some(r => r === toRegion || r.includes(toRegion) || toRegion.includes(r)));
  console.log(`fallbackPasses: ${fallbackPasses.length}`);
  fallbackPasses.forEach(pass => {
    if (!pass.price.adult.regular || pass.price.adult.regular <= 0) return;
    let score = 40;
    const validDurations = pass.duration.filter(d => d <= route.duration);
    if (validDurations.length > 0) score += 20; else score += 5;
    const passCost = pass.price.adult.regular * travelers;
    const savings = individualCost - passCost;
    if (savings > 0) score += 25; else score -= 10;
    const dailyCost = pass.price.adult.regular / Math.min(...pass.duration);
    if (dailyCost < 10000) score += 10;
    score += pass.popularity * 2;
    if (score > 30) results.push({ name: pass.name, score, savings, isFallback: true });
  });
  console.log(`Fallback results: ${results.length}`);
  console.log(results.slice(0,3));
}


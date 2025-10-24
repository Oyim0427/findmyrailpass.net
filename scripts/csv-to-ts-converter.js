const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/**
 * CSV到TS转换器
 * 将CSV文件转换为TypeScript格式的JRPass数组
 */

// 读取CSV文件并转换为TS格式
function convertCsvToTs(csvFilePath, outputTsFilePath) {
  const results = [];
  
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => {
        // 处理每一行数据
        const passData = processCsvRow(data);
        results.push(passData);
      })
      .on('end', () => {
        // 生成TS文件内容
        const tsContent = generateTsContent(results);
        
        // 写入TS文件
        fs.writeFileSync(outputTsFilePath, tsContent, 'utf8');
        
        console.log(`✅ 转换完成: ${csvFilePath} -> ${outputTsFilePath}`);
        console.log(`📊 共转换 ${results.length} 条记录`);
        
        resolve(results);
      })
      .on('error', (error) => {
        console.error('❌ 转换失败:', error);
        reject(error);
      });
  });
}

// 处理CSV行数据
function processCsvRow(row) {
  return {
    sortOrder: parseInt(row.sortOrder) || 0,
    id: row.id || '',
    name: {
      en: row.name_en || '',
      jp: row.name_jp || '',
      cn: row.name_cn || ''
    },
    description: row.description || '',
    price: {
      adult: {
        regular: parseInt(row.price_adult_regular) || 0,
        advance: row.price_adult_advance ? parseInt(row.price_adult_advance) : undefined
      },
      child: {
        regular: parseInt(row.price_child_regular) || 0,
        advance: row.price_child_advance ? parseInt(row.price_child_advance) : undefined
      },
      under25: row.price_under25 ? parseInt(row.price_under25) : undefined,
      under18: row.price_under18 ? parseInt(row.price_under18) : undefined
    },
    duration: row.duration ? row.duration.split(',').map(d => parseInt(d.trim())) : [1],
    validityPeriod: {
      startDate: row.startDate || '',
      endDate: row.endDate || '',
      description: row.validityDescription || '全年可用'
    },
    coverage: {
      regions: row.regions ? row.regions.split(';').map(r => r.trim()) : ['北海道'],
      map: row.mapPath || ''
    },
    targetAudience: row.targetAudience ? row.targetAudience.split(',').map(a => a.trim()) : ['不问国籍所有游客皆可购买'],
    trainTypes: row.trainTypes ? row.trainTypes.split(';').map(t => t.trim()) : ['普通电车'],
    advantages: row.advantages ? row.advantages.split('|').map(a => a.trim()) : [],
    disadvantages: row.disadvantages ? row.disadvantages.split('|').map(d => d.trim()) : [],
    tips: row.tips ? row.tips.split('|').map(t => t.trim()) : [],
    officialLinks: row.officialLinks ? parseLinks(row.officialLinks) : [],
    purchaseLinks: row.purchaseLinks ? parseLinks(row.purchaseLinks) : [],
    category: row.category || 'regional',
    popularity: parseInt(row.popularity) || 3,
    bestFor: row.bestFor ? row.bestFor.split(',').map(b => b.trim()) : [],
    isLimitedPeriod: row.isLimitedPeriod === 'true' || row.isLimitedPeriod === '1'
  };
}

// 解析链接字符串
function parseLinks(linksString) {
  if (!linksString) return [];
  
  return linksString.split('|').map(linkStr => {
    const [name, url, type] = linkStr.split(';');
    return {
      name: name || '',
      url: url || '',
      type: type || 'official'
    };
  });
}

// 生成TS文件内容
function generateTsContent(passes) {
  const header = `import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
`;

  const footer = `
];`;

  const passObjects = passes.map(pass => {
    return `  {
    sortOrder: ${pass.sortOrder},
    id: '${pass.id}',
    name: {
      en: '${pass.name.en}',
      jp: '${pass.name.jp}',
      cn: '${pass.name.cn}'
    },
    description: '${pass.description}',
    price: {
      adult: {
        regular: ${pass.price.adult.regular}${pass.price.adult.advance ? `,\n        advance: ${pass.price.adult.advance}` : ''}
      },
      child: {
        regular: ${pass.price.child.regular}${pass.price.child.advance ? `,\n        advance: ${pass.price.child.advance}` : ''}
      }${pass.price.under25 ? `,\n      under25: ${pass.price.under25}` : ''}${pass.price.under18 ? `,\n      under18: ${pass.price.under18}` : ''}
    },
    duration: [${pass.duration.join(', ')}],
    validityPeriod: {
      startDate: '${pass.validityPeriod.startDate}',
      endDate: '${pass.validityPeriod.endDate}',
      description: '${pass.validityPeriod.description}'
    },
    coverage: {
      regions: [${pass.coverage.regions.map(r => `'${r}'`).join(', ')}],
      map: '${pass.coverage.map}'
    },
    targetAudience: [${pass.targetAudience.map(a => `'${a}'`).join(', ')}],
    trainTypes: [${pass.trainTypes.map(t => `'${t}'`).join(', ')}],
    advantages: [
      ${pass.advantages.map(a => `'${a}'`).join(',\n      ')}
    ],
    disadvantages: [
      ${pass.disadvantages.map(d => `'${d}'`).join(',\n      ')}
    ],
    tips: [
      ${pass.tips.map(t => `'${t}'`).join(',\n      ')}
    ],
    officialLinks: [
      ${pass.officialLinks.map(link => `{ name: '${link.name}', url: '${link.url}' }`).join(',\n      ')}
    ],
    purchaseLinks: [
      ${pass.purchaseLinks.map(link => `{ name: '${link.name}', url: '${link.url}', type: '${link.type}' }`).join(',\n      ')}
    ],
    category: '${pass.category}',
    popularity: ${pass.popularity},
    bestFor: [${pass.bestFor.map(b => `'${b}'`).join(', ')}]${pass.isLimitedPeriod ? ',\n    isLimitedPeriod: true' : ''}
  }`;
  }).join(',\n\n');

  return header + passObjects + footer;
}

// 批量转换文件夹中的所有CSV文件
function convertAllCsvFiles(csvDir, outputDir) {
  const csvFiles = fs.readdirSync(csvDir).filter(file => file.endsWith('.csv'));
  
  if (csvFiles.length === 0) {
    console.log('📁 没有找到CSV文件');
    return;
  }

  console.log(`📁 找到 ${csvFiles.length} 个CSV文件:`);
  csvFiles.forEach(file => console.log(`  - ${file}`));

  const promises = csvFiles.map(csvFile => {
    const csvPath = path.join(csvDir, csvFile);
    const tsFileName = csvFile.replace('.csv', '-passes.ts');
    const tsPath = path.join(outputDir, tsFileName);
    
    return convertCsvToTs(csvPath, tsPath);
  });

  return Promise.all(promises);
}

// 主函数
async function main() {
  const csvDir = path.join(__dirname, '../data/csv');
  const outputDir = path.join(__dirname, '../src/data');
  
  console.log('🚀 开始CSV到TS转换...');
  console.log(`📂 CSV文件夹: ${csvDir}`);
  console.log(`📂 输出文件夹: ${outputDir}`);
  
  try {
    await convertAllCsvFiles(csvDir, outputDir);
    console.log('🎉 所有文件转换完成!');
  } catch (error) {
    console.error('❌ 转换过程中出现错误:', error);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = {
  convertCsvToTs,
  convertAllCsvFiles,
  processCsvRow,
  generateTsContent
};

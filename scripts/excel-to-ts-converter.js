const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

/**
 * Excel到TS转换器
 * 将Excel文件转换为TypeScript格式的JRPass数组
 */

// 读取Excel文件并转换为TS格式
function convertExcelToTs(excelFilePath, outputTsFilePath) {
  try {
    // 读取Excel文件
    const workbook = XLSX.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // 转换为JSON格式
    const data = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
    
    if (data.length === 0) {
      console.log('⚠️  Excel文件中没有数据');
      return [];
    }
    
    // 过滤空行（所有字段都为空的行）
    const validData = data.filter(row => {
      const hasId = row.id && String(row.id).trim() !== '';
      const hasName = (row.name_cn || row.name_en || row.name_jp) && 
                     (String(row.name_cn || row.name_en || row.name_jp).trim() !== '');
      return hasId || hasName;
    });
    
    console.log(`📊 Excel原始行数: ${data.length}, 有效数据行数: ${validData.length}`);
    
    // 处理每一行数据
    const results = validData.map((row, index) => {
      try {
        return processExcelRow(row);
      } catch (error) {
        console.error(`⚠️  处理第 ${index + 2} 行时出错:`, error.message);
        return null;
      }
    }).filter(item => item !== null);
    
    // 如果目标文件已存在，先删除它以确保完全覆盖
    if (fs.existsSync(outputTsFilePath)) {
      fs.unlinkSync(outputTsFilePath);
      console.log(`🗑️  已删除旧文件: ${outputTsFilePath}`);
    }
    
    // 生成TS文件内容
    const tsContent = generateTsContent(results, excelFilePath);
    
    // 写入TS文件（完全覆盖）
    fs.writeFileSync(outputTsFilePath, tsContent, 'utf8');
    
    console.log(`✅ 转换完成: ${excelFilePath} -> ${outputTsFilePath}`);
    console.log(`📊 共转换 ${results.length} 条记录`);
    
    return results;
  } catch (error) {
    console.error('❌ 转换失败:', error);
    throw error;
  }
}

// 处理Excel行数据
function processExcelRow(row) {
  const note = row.note ? String(row.note).trim() : '';
  const pass = {
    sortOrder: parseInt(row.sortOrder) || 0,
    id: row.id || '',
    name: {
      en: row.name_en || row.name_cn || '',
      jp: row.name_jp || row.name_cn || '',
      cn: row.name_cn || ''
    },
    description: row.description || '',
    price: {
      adult: {
        regular: parseInt(row.price_adult_regular) || 0,
        advance: row.price_adult_advance ? parseInt(row.price_adult_advance) : undefined,
        phone: row.price_adult_phone ? parseInt(row.price_adult_phone) : undefined
      },
      child: {
        regular: parseInt(row.price_child_regular) || 0,
        advance: row.price_child_advance ? parseInt(row.price_child_advance) : undefined,
        phone: row.price_child_phone ? parseInt(row.price_child_phone) : undefined
      },
      under25: row.price_under25 ? parseInt(row.price_under25) : undefined,
      under18: row.price_under18 ? parseInt(row.price_under18) : undefined
    },
    duration: row.duration ? (typeof row.duration === 'string' ? row.duration.split(',').map(d => parseInt(d.trim())) : [parseInt(row.duration)]) : [1],
    validityPeriod: {
      startDate: row.validityPeriod_startDate || row.startDate || '',
      endDate: row.validityPeriod_endDate || row.endDate || '',
      description: row.validityPeriod_description || row.validityDescription || '全年可用'
    },
    coverage: {
      regions: row.coverage_regions || row.regions 
        ? (typeof (row.coverage_regions || row.regions) === 'string' 
          ? (row.coverage_regions || row.regions).split(/[;，]/).map(r => r.trim()).filter(r => r)
          : [row.coverage_regions || row.regions])
        : ['北海道'],
      map: row.coverage_map || row.mapPath || ''
    },
    targetAudience: row.targetAudience 
      ? (typeof row.targetAudience === 'string' 
        ? row.targetAudience.split(/[,，]/).map(a => a.trim()).filter(a => a)
        : [row.targetAudience])
      : ['不问国籍所有游客皆可购买'],
    trainTypes: row.trainTypes 
      ? (typeof row.trainTypes === 'string' 
        ? row.trainTypes.split(/[;；]/).map(t => t.trim()).filter(t => t)
        : [row.trainTypes])
      : ['普通电车'],
    advantages: row.advantages 
      ? (typeof row.advantages === 'string' 
        ? row.advantages.split('|').map(a => a.trim()).filter(a => a)
        : [row.advantages])
      : [],
    disadvantages: row.disadvantages 
      ? (typeof row.disadvantages === 'string' 
        ? row.disadvantages.split('|').map(d => d.trim()).filter(d => d)
        : [row.disadvantages])
      : [],
    tips: row.tips 
      ? (typeof row.tips === 'string' 
        ? row.tips.split('|').map(t => t.trim()).filter(t => t)
        : [row.tips])
      : [],
    officialLinks: row.officialLinks ? parseLinks(row.officialLinks) : [],
    purchaseLinks: row.purchaseLinks ? parseLinks(row.purchaseLinks) : [],
    category: row.category || 'regional',
    popularity: parseInt(row.popularity) || 3,
    bestFor: row.bestFor 
      ? (typeof row.bestFor === 'string' 
        ? row.bestFor.split(/[,，]/).map(b => b.trim()).filter(b => b)
        : [row.bestFor])
      : [],
    isLimitedPeriod: row.isLimitedPeriod === true || row.isLimitedPeriod === 'TRUE' || row.isLimitedPeriod === 'true' || row.isLimitedPeriod === '1'
  };

  if (note) {
    pass.note = note;
  }

  return pass;
}

// 解析链接字符串
function parseLinks(linksString) {
  if (!linksString) return [];
  
  if (typeof linksString !== 'string') {
    return [];
  }
  
  return linksString.split('|').map(linkStr => {
    const parts = linkStr.split(';');
    const name = parts[0] ? parts[0].trim() : '';
    const url = parts[1] ? parts[1].trim() : '';
    const type = parts[2] ? parts[2].replace('type:', '').trim() : 'official';
    return {
      name: name,
      url: url,
      type: type
    };
  }).filter(link => link.name && link.url);
}

// 生成TS文件内容
function generateTsContent(passes, excelFilePath) {
  // 从Excel文件名推断地区名称
  const fileName = path.basename(excelFilePath, '.xlsx');
  const regionMap = {
    'national': '全国',
    'hokkaido': '北海道',
    'tohoku': '东北',
    'hokuriku': '北陆',
    'kinki': '近畿',
    'tokyo': '东京',
    'kyushu': '九州'
  };
  const regionName = regionMap[fileName] || fileName;
  
  const constName = fileName.replace(/-/g, '') + 'Passes';
  const header = `import { JRPass } from '@/types/pass';

// ${regionName}地区周游券
export const ${constName}: JRPass[] = [
`;

  const footer = `
];`;

  const passObjects = passes.map(pass => {
    return `  {
    sortOrder: ${pass.sortOrder},
    id: '${String(pass.id || '').replace(/'/g, "\\'")}',
    name: {
      en: '${String(pass.name.en || '').replace(/'/g, "\\'")}',
      jp: '${String(pass.name.jp || '').replace(/'/g, "\\'")}',
      cn: '${String(pass.name.cn || '').replace(/'/g, "\\'")}'
    },
    description: '${String(pass.description || '').replace(/'/g, "\\'")}',
    price: {
      adult: {
        regular: ${pass.price.adult.regular}${pass.price.adult.advance ? `,\n        advance: ${pass.price.adult.advance}` : ''}${pass.price.adult.phone ? `,\n        phone: ${pass.price.adult.phone}` : ''}
      },
      child: {
        regular: ${pass.price.child.regular}${pass.price.child.advance ? `,\n        advance: ${pass.price.child.advance}` : ''}${pass.price.child.phone ? `,\n        phone: ${pass.price.child.phone}` : ''}
      }${pass.price.under25 ? `,\n      under25: ${pass.price.under25}` : ''}${pass.price.under18 ? `,\n      under18: ${pass.price.under18}` : ''}
    },
    duration: [${pass.duration.join(', ')}],
    validityPeriod: {
      startDate: '${String(pass.validityPeriod.startDate || '').replace(/'/g, "\\'")}',
      endDate: '${String(pass.validityPeriod.endDate || '').replace(/'/g, "\\'")}',
      description: '${String(pass.validityPeriod.description || '').replace(/'/g, "\\'")}'
    },
    coverage: {
      regions: [${pass.coverage.regions.map(r => `'${String(r || '').replace(/'/g, "\\'")}'`).join(', ')}],
      map: '${String(pass.coverage.map || '').replace(/'/g, "\\'")}'
    },
    targetAudience: [${pass.targetAudience.map(a => `'${String(a || '').replace(/'/g, "\\'")}'`).join(', ')}],
    trainTypes: [${pass.trainTypes.map(t => `'${String(t || '').replace(/'/g, "\\'")}'`).join(', ')}],
    advantages: [
      ${pass.advantages.length > 0 ? pass.advantages.map(a => `'${String(a || '').replace(/'/g, "\\'")}'`).join(',\n      ') : ''}
    ],
    disadvantages: [
      ${pass.disadvantages.length > 0 ? pass.disadvantages.map(d => `'${String(d || '').replace(/'/g, "\\'")}'`).join(',\n      ') : ''}
    ],
    tips: [
      ${pass.tips.length > 0 ? pass.tips.map(t => `'${String(t || '').replace(/'/g, "\\'")}'`).join(',\n      ') : ''}
    ],
    officialLinks: [
      ${pass.officialLinks.length > 0 ? pass.officialLinks.map(link => `{ name: '${String(link.name || '').replace(/'/g, "\\'")}', url: '${String(link.url || '').replace(/'/g, "\\'")}' }`).join(',\n      ') : ''}
    ],
    purchaseLinks: [
      ${pass.purchaseLinks.length > 0 ? pass.purchaseLinks.map(link => `{ name: '${String(link.name || '').replace(/'/g, "\\'")}', url: '${String(link.url || '').replace(/'/g, "\\'")}', type: '${link.type || 'official'}' }`).join(',\n      ') : ''}
    ],
    category: '${pass.category}',
    popularity: ${pass.popularity},
    bestFor: [${pass.bestFor.map(b => `'${String(b || '').replace(/'/g, "\\'")}'`).join(', ')}]${pass.isLimitedPeriod ? ',\n    isLimitedPeriod: true' : ''}${pass.note ? `,\n    note: '${String(pass.note || '').replace(/'/g, "\\'")}'` : ''}
  }`;
  }).join(',\n\n');

  return header + passObjects + footer;
}

// 批量转换文件夹中的所有Excel文件
function convertAllExcelFiles(excelDir, outputDir) {
  const excelFiles = fs.readdirSync(excelDir).filter(file => file.endsWith('.xlsx') && !file.startsWith('~$'));
  
  if (excelFiles.length === 0) {
    console.log('📁 没有找到Excel文件');
    return;
  }

  console.log(`📁 找到 ${excelFiles.length} 个Excel文件:`);
  excelFiles.forEach(file => console.log(`  - ${file}`));

  const results = excelFiles.map(excelFile => {
    const excelPath = path.join(excelDir, excelFile);
    const tsFileName = excelFile.replace('.xlsx', '-passes.ts');
    const tsPath = path.join(outputDir, tsFileName);
    
    return convertExcelToTs(excelPath, tsPath);
  });

  return results;
}

// 主函数
async function main() {
  const excelDir = path.join(__dirname, '../data/excel');
  const outputDir = path.join(__dirname, '../src/ts-data');
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🚀 开始Excel到TS转换...');
  console.log(`📂 Excel文件夹: ${excelDir}`);
  console.log(`📂 输出文件夹: ${outputDir}`);
  
  try {
    convertAllExcelFiles(excelDir, outputDir);
    console.log('🎉 所有文件转换完成!');
  } catch (error) {
    console.error('❌ 转换过程中出现错误:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = {
  convertExcelToTs,
  convertAllExcelFiles,
  processExcelRow,
  generateTsContent
};


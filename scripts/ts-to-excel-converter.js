const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

/**
 * TS到Excel转换器
 * 将TypeScript格式的JRPass数组转换为Excel文件
 */

// 使用更简单的方法：直接eval TS文件（需要先处理import）
async function convertTsToExcel(tsFilePath, outputExcelPath) {
  try {
    // 读取TS文件内容
    let content = fs.readFileSync(tsFilePath, 'utf8');
    
    // 移除import语句
    content = content.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g, '');
    
    // 移除所有注释（先移除多行注释，再移除单行注释）
    // 注意：需要小心处理，避免误删URL中的//
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    // 只移除行首的注释，避免误删字符串中的//
    content = content.replace(/^\s*\/\/.*$/gm, '');
    
    // 提取数组内容 - 找到export const开始，到最后一个];结束
    const exportMatch = content.match(/export\s+const\s+\w+Passes:\s*JRPass\[\]\s*=\s*\[/);
    if (!exportMatch) {
      throw new Error('无法找到export const声明');
    }
    
    const startIndex = exportMatch.index + exportMatch[0].length;
    // 从开始位置找到匹配的结束括号
    let bracketCount = 1;
    let endIndex = startIndex;
    let inString = false;
    let stringChar = null;
    
    for (let i = startIndex; i < content.length; i++) {
      const char = content[i];
      const prevChar = i > 0 ? content[i - 1] : '';
      
      // 处理字符串
      if (!inString && (char === '"' || char === "'")) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
        stringChar = null;
      }
      
      // 只有在不在字符串中时才计算括号
      if (!inString) {
        if (char === '[') bracketCount++;
        if (char === ']') bracketCount--;
        if (bracketCount === 0) {
          endIndex = i;
          break;
        }
      }
    }
    
    if (bracketCount !== 0) {
      throw new Error('无法找到匹配的结束括号');
    }
    
    const arrayContent = content.substring(startIndex, endIndex).trim();
    
    // 使用vm模块安全地执行代码
    const vm = require('vm');
    
    // 创建一个安全的执行环境
    const context = vm.createContext({});
    let passes;
    try {
      // 将数组内容包装在数组中
      passes = vm.runInContext(`[${arrayContent}]`, context);
    } catch (e) {
      // 如果失败，尝试写入临时文件以便调试
      const debugFile = path.join(__dirname, 'debug-array-content.js');
      fs.writeFileSync(debugFile, `const passes = [${arrayContent}];\nconsole.log(JSON.stringify(passes, null, 2));`);
      console.error('解析TS数据时出错:', e.message);
      console.error('已创建调试文件:', debugFile);
      throw e;
    }
    
    // 转换为Excel行数据
    function convertToRows(passes) {
      const headers = [
        'sortOrder', 'id', 'name_cn', 'description',
      'price_adult_regular', 'price_adult_advance', 'price_adult_phone',
      'price_child_regular', 'price_child_advance', 'price_child_phone',
        'price_under25', 'price_under18', 'duration',
        'validityPeriod_startDate', 'validityPeriod_endDate', 'validityPeriod_description',
        'coverage_regions', 'coverage_map',
        'targetAudience', 'trainTypes', 'advantages', 'disadvantages', 'tips',
      'officialLinks', 'purchaseLinks', 'category', 'popularity', 'bestFor', 'isLimitedPeriod', 'note'
      ];
      
      const rows = [headers];
      
      passes.forEach(pass => {
        const row = headers.map(header => {
          let value = '';
          
          switch(header) {
            case 'name_cn':
              value = pass.name?.cn || '';
              break;
            case 'price_adult_regular':
              value = pass.price?.adult?.regular || '';
              break;
            case 'price_adult_advance':
              value = pass.price?.adult?.advance || '';
              break;
            case 'price_child_regular':
              value = pass.price?.child?.regular || '';
              break;
            case 'price_child_advance':
              value = pass.price?.child?.advance || '';
              break;
            case 'price_adult_phone':
              value = pass.price?.adult?.phone || '';
              break;
            case 'price_child_phone':
              value = pass.price?.child?.phone || '';
              break;
            case 'price_under25':
              value = pass.price?.under25 || '';
              break;
            case 'price_under18':
              value = pass.price?.under18 || '';
              break;
            case 'duration':
              value = Array.isArray(pass.duration) ? pass.duration.join(',') : '';
              break;
            case 'validityPeriod_startDate':
              value = pass.validityPeriod?.startDate || '';
              break;
            case 'validityPeriod_endDate':
              value = pass.validityPeriod?.endDate || '';
              break;
            case 'validityPeriod_description':
              value = pass.validityPeriod?.description || '';
              break;
            case 'coverage_regions':
              value = Array.isArray(pass.coverage?.regions) ? pass.coverage.regions.join('; ') : '';
              break;
            case 'coverage_map':
              value = pass.coverage?.map || '';
              break;
            case 'targetAudience':
              value = Array.isArray(pass.targetAudience) ? pass.targetAudience.join(', ') : '';
              break;
            case 'trainTypes':
              value = Array.isArray(pass.trainTypes) ? pass.trainTypes.join('; ') : '';
              break;
            case 'advantages':
              value = Array.isArray(pass.advantages) ? pass.advantages.join('|') : '';
              break;
            case 'disadvantages':
              value = Array.isArray(pass.disadvantages) ? pass.disadvantages.join('|') : '';
              break;
            case 'tips':
              value = Array.isArray(pass.tips) ? pass.tips.join('|') : '';
              break;
            case 'bestFor':
              value = Array.isArray(pass.bestFor) ? pass.bestFor.join(', ') : '';
              break;
            case 'officialLinks':
              value = Array.isArray(pass.officialLinks) 
                ? pass.officialLinks.map(l => `${l.name}; ${l.url}`).join('|')
                : '';
              break;
            case 'purchaseLinks':
              value = Array.isArray(pass.purchaseLinks)
                ? pass.purchaseLinks.map(l => `${l.name}; ${l.url}; type:${l.type || 'official'}`).join('|')
                : '';
              break;
            case 'isLimitedPeriod':
              value = pass.isLimitedPeriod ? 'TRUE' : '';
              break;
            case 'note':
              value = pass.note || '';
              break;
            default:
              value = pass[header] || '';
          }
          
          return value;
        });
        rows.push(row);
      });
      
      return rows;
    }
    
    const rows = convertToRows(passes);
    const count = passes.length;
    
    // 从文件名提取地区名称
    const fileName = path.basename(tsFilePath, '.ts');
    const regionName = extractRegionName(fileName);
    
    // 转换为Excel格式
    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, regionName);
    
    // 写入Excel文件
    XLSX.writeFile(workbook, outputExcelPath);
    
    console.log(`✅ 转换完成: ${tsFilePath} -> ${outputExcelPath}`);
    console.log(`📊 共转换 ${count} 条记录`);
    
  } catch (error) {
    console.error('❌ 转换失败:', error);
    throw error;
  }
}

// 从文件名提取地区名称
function extractRegionName(fileName) {
  const regionMap = {
    'national': '全国周游券',
    'hokkaido': '北海道周游券',
    'tohoku': '东北周游券',
    'hokuriku': '北陆周游券',
    'kinki': '近畿周游券',
    'kyushu': '九州周游券',
    'city': '城市周游券',
    'chugoku-sanyo': '中国·山阳周游券',
    'tohoku-kanto': '东北·关东周游券'
  };
  
  // 移除 -passes 后缀
  const baseName = fileName.replace(/-passes$/, '');
  return regionMap[baseName] || baseName + '周游券';
}

// 批量转换文件夹中的所有TS文件
async function convertAllTsFiles(tsDir, outputDir) {
  const tsFiles = fs.readdirSync(tsDir).filter(file => 
    file.endsWith('-passes.ts') && file !== 'all-passes.ts'
  );
  
  if (tsFiles.length === 0) {
    console.log('📁 没有找到TS文件');
    return;
  }

  console.log(`📁 找到 ${tsFiles.length} 个TS文件:`);
  tsFiles.forEach(file => console.log(`  - ${file}`));

  const results = [];
  for (const tsFile of tsFiles) {
    try {
      const tsPath = path.join(tsDir, tsFile);
      // 将 hokkaido-passes.ts 转换为 hokkaido.xlsx
      const excelFileName = tsFile.replace(/-passes\.ts$/, '.xlsx');
      const excelPath = path.join(outputDir, excelFileName);
      
      await convertTsToExcel(tsPath, excelPath);
      results.push({ tsFile, excelFile: excelFileName, success: true });
    } catch (error) {
      console.error(`❌ 转换 ${tsFile} 时出错:`, error.message);
      results.push({ tsFile, success: false, error: error.message });
    }
  }

  return results;
}

// 主函数
async function main() {
  const tsDir = path.join(__dirname, '../src/ts-data');
  const outputDir = path.join(__dirname, '../data/excel');
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🚀 开始TS到Excel转换...');
  console.log(`📂 TS文件夹: ${tsDir}`);
  console.log(`📂 输出文件夹: ${outputDir}`);
  
  try {
    await convertAllTsFiles(tsDir, outputDir);
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
  convertTsToExcel,
  convertAllTsFiles
};


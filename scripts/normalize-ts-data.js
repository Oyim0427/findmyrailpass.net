const fs = require('fs');
const path = require('path');

const { loadPassesFromTsFile } = require('./ts-to-excel-converter');
const { generateTsContent } = require('./excel-to-ts-converter');

function normalizeTsData() {
  const tsDir = path.join(__dirname, '../src/ts-data');
  const tsFiles = fs.readdirSync(tsDir).filter(file => 
    file.endsWith('-passes.ts') && file !== 'all-passes.ts'
  );

  if (tsFiles.length === 0) {
    console.log('📁 没有找到需要规范化的 TS 数据文件');
    return;
  }

  let hasError = false;

  tsFiles.forEach(file => {
    const tsPath = path.join(tsDir, file);
    console.log(`🔄 正在处理 ${file} ...`);
    try {
      const passes = loadPassesFromTsFile(tsPath);
      const pseudoExcelPath = path.join(tsDir, file.replace('-passes.ts', '.xlsx'));
      const content = generateTsContent(passes, pseudoExcelPath);
      fs.writeFileSync(tsPath, content, 'utf8');
      console.log(`✅ 已规范化 ${file}`);
    } catch (error) {
      hasError = true;
      console.error(`❌ 处理 ${file} 时失败: ${error.message}`);
    }
  });

  if (hasError) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  normalizeTsData();
}

module.exports = {
  normalizeTsData
};


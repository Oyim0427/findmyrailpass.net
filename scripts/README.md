# CSV到TS转换工具使用说明

## 🎯 功能概述
这个工具可以将CSV格式的周游券数据自动转换为TypeScript格式，方便导入到项目中。

## 📁 文件夹结构
```
data/
├── csv/                           # 📂 CSV文件存储文件夹
│   ├── hokkaido-passes-template.csv  # 📄 北海道周游券模板
│   ├── your-data.csv              # 📄 你的数据文件
│   └── README.md                  # 📖 详细说明文档
└── excel/                         # 📂 Excel文件存储文件夹

scripts/
└── csv-to-ts-converter.js         # 🔧 CSV到TS转换脚本

src/data/
├── hokkaido-passes.ts             # 📄 原始TS文件
└── generated-files/               # 📂 生成的TS文件
```

## 🚀 快速开始

### 1. 准备CSV文件
将你的数据按照模板格式整理成CSV文件，保存到 `data/csv/` 文件夹中。

### 2. 运行转换脚本
```bash
# 方法1：在项目根目录运行npm脚本（推荐）
npm run convert-csv

# 方法2：在项目根目录直接运行node命令
node scripts/csv-to-ts-converter.js

# 方法3：在scripts目录下直接运行node命令
cd scripts
node csv-to-ts-converter.js

# 方法4：在scripts目录下运行npm脚本（新增）
cd scripts
npm run convert
```

### 3. 查看结果
转换完成后，TS文件会生成在 `src/data/` 文件夹中，文件名格式为：`原文件名-passes.ts`

## 📋 CSV模板格式

### 必需字段
- `sortOrder`: 排序顺序 (数字)
- `id`: 唯一标识符 (字符串)
- `name_en`: 英文名称
- `name_jp`: 日文名称  
- `name_cn`: 中文名称
- `description`: 描述
- `price_adult_regular`: 成人普通价格 (数字)
- `price_child_regular`: 儿童普通价格 (数字)

### 可选字段
- `price_adult_advance`: 成人预购价格 (数字)
- `price_child_advance`: 儿童预购价格 (数字)
- `duration`: 使用天数，多个用逗号分隔 (如: 5,7,10)
- `startDate`: 开始日期 (YYYY-MM-DD格式)
- `endDate`: 结束日期 (YYYY-MM-DD格式)
- `validityDescription`: 有效期描述
- `regions`: 覆盖地区，多个用分号分隔 (如: 北海道;東北)
- `mapPath`: 地图图片路径
- `targetAudience`: 目标用户，多个用逗号分隔
- `trainTypes`: 交通类型，多个用分号分隔 (如: 特急电车;急行电车;普通电车)
- `advantages`: 优点，多个用竖线分隔 (|)
- `disadvantages`: 缺点，多个用竖线分隔 (|)
- `tips`: 使用提示，多个用竖线分隔 (|)
- `officialLinks`: 官方链接，格式: 名称;URL
- `purchaseLinks`: 购买链接，格式: 名称;URL;类型
- `category`: 分类 (regional/city/national)
- `popularity`: 受欢迎程度 (1-5)
- `bestFor`: 适用场景，多个用逗号分隔
- `isLimitedPeriod`: 是否限定期限 (true/false)

## 🔧 字段分隔符说明

| 字段类型 | 分隔符 | 示例 |
|---------|--------|------|
| 多个地区 | `;` | `北海道;東北` |
| 多个交通类型 | `;` | `特急电车;急行电车;普通电车` |
| 多个目标用户 | `,` | `持有旅游签证的外国护照游客,学生` |
| 多个适用场景 | `,` | `北海道全域,预购有1000円优惠` |
| 多个天数 | `,` | `5,7,10` |
| 优点/缺点/提示 | `|` | `覆盖北海道全域|最经典北海道周游券` |
| 链接信息 | `;` | `JR北海道;https://example.com` |

## 📝 示例数据

参考 `data/csv/hokkaido-passes-template.csv` 文件中的示例数据格式。

## ⚠️ 注意事项

1. **CSV编码**: 请确保CSV文件使用UTF-8编码
2. **特殊字符**: 如果内容包含分隔符，请用引号包围
3. **空字段**: 可选字段如果为空可以不填写
4. **数字字段**: 如果为空会默认为0
5. **数组字段**: 如果为空会默认为空数组

## 🛠️ 自定义修改

如果需要修改转换逻辑，可以编辑 `scripts/csv-to-ts-converter.js` 文件：

- `processCsvRow()`: 处理CSV行数据
- `parseLinks()`: 解析链接字符串
- `generateTsContent()`: 生成TS文件内容

## 📞 支持

如果遇到问题，请检查：
1. CSV文件格式是否正确
2. 字段分隔符是否使用正确
3. 文件编码是否为UTF-8
4. 依赖包是否已安装 (`npm install csv-parser`)

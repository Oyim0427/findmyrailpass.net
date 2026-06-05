import csv
import glob
import os

new_headers = "sortOrder\tid\tname_cn\tdescription\tprice_adult_regular\tprice_adult_phone\tprice_child_regular\tprice_child_phone\tprice_over65\tprice_under25\tprice_under18\tprice_under15\tprice_free\tbestFor\tduration\tvalidityPeriod_startDate\tvalidityPeriod_endDate\tvalidityPeriod_description\tcoverage_regions\tcoverage_map\ttargetAudience\ttrainTypes\tofficialLinks\tpurchaseLinks\tcategory\tpopularity\tisLimitedPeriod\tticket_note".split('\t')

mapping = {
    'name_cn': '车票名称',
    'description': '详情全文',
    'price_adult_regular': '价格',
    'duration': '有效期间',
    'validityPeriod_startDate': '详情发售期间',
    'validityPeriod_description': '利用期间',
    'coverage_regions': '地区',
    'coverage_map': '详情页图片链接',
    'trainTypes': '可利用设备',
    'officialLinks': '详情页链接',
    'purchaseLinks': '发售处',
    'ticket_note': '抓取错误'
}

csv_files = glob.glob('src/excel-data/*.csv')

for file_path in csv_files:
    if 'manifest.csv' in file_path:
        continue
        
    print(f"Processing {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        old_headers = reader.fieldnames
        rows = list(reader)
        
    with open(file_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=new_headers)
        writer.writeheader()
        
        for i, row in enumerate(rows):
            new_row = {}
            for nh in new_headers:
                old_key = mapping.get(nh, '')
                if old_key and old_key in row:
                    new_row[nh] = row[old_key]
                else:
                    new_row[nh] = ''
            
            new_row['sortOrder'] = str(i + 1)
            # generate simple id based on region and index
            # hokkaido.csv -> hokkaido_1
            base_name = os.path.basename(file_path).replace('.csv', '')
            new_row['id'] = f"{base_name}_{i+1}"
            
            # Additional logic to merge columns not directly mapped but useful
            extra_desc = []
            if '限制事项' in row and row['限制事项']:
                extra_desc.append(f"限制事项: {row['限制事项']}")
            if '其他详情字段' in row and row['其他详情字段']:
                extra_desc.append(f"其他详情: {row['其他详情字段']}")
            if '相关信息' in row and row['相关信息']:
                extra_desc.append(f"相关信息: {row['相关信息']}")
            if '咨询' in row and row['咨询']:
                extra_desc.append(f"咨询: {row['咨询']}")
            
            if extra_desc:
                if new_row['description']:
                    new_row['description'] += "\n" + "\n".join(extra_desc)
                else:
                    new_row['description'] = "\n".join(extra_desc)
                    
            if '详情页内链接' in row and row['详情页内链接']:
                if new_row['officialLinks']:
                    new_row['officialLinks'] += " | " + row['详情页内链接']
                else:
                    new_row['officialLinks'] = row['详情页内链接']
                    
            writer.writerow(new_row)

print("All CSV files transformed.")

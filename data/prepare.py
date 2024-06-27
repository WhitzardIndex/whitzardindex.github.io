import csv 


reader = csv.reader(open('full_asr.csv', encoding='utf-8'))

models = []
levels = []
data = []

header = next(reader)
levels = header[1:]
for idx, row in enumerate(reader):
    models.append(row[0])
    for jdx, val in enumerate(row[1:]):
        data.append([idx, jdx, float(val.replace('%', ''))])

print(','.join([f"\"{x}\"" for x in models]))
print(levels)
print(data)
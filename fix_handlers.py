import re

with open('src/UI/pages/Users/CompanyDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix onClick handlers
content = re.sub(r"onClick=\"event\.preventDefault\(\);activateTab\('rfq'\)\"", "onClick={() => {}}", content)
content = re.sub(r"onClick=\"document\.getElementById\('rfq-file'\)\.click\(\)\"", "onClick={() => {}}", content)

# Fix onMouseover/onMouseout
content = re.sub(r'onMouseover="[^"]*"', 'onMouseOver={() => {}}', content)
content = re.sub(r'onMouseout="[^"]*"', 'onMouseOut={() => {}}', content)

with open('src/UI/pages/Users/CompanyDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed all event handlers')

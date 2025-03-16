import re

def extract_entries(content):
    # Find the array part
    start = content.index('[') + 1
    end = content.rindex(']')
    array_content = content[start:end]
    
    # Split into entries
    entries = []
    current_entry = ''
    brace_count = 0
    
    for char in array_content:
        current_entry += char
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                entries.append(current_entry.strip())
                current_entry = ''
    
    return entries

def get_gaelic_term(entry):
    match = re.search(r"gaelic: '([^']+)'", entry)
    return match.group(1) if match else ''

# Read the file
with open('src/data/dictionaryData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Get the prefix and suffix
prefix = content[:content.index('[') + 1]
suffix = content[content.rindex(']'):]

# Extract and sort entries
entries = extract_entries(content)
sorted_entries = sorted(entries, key=lambda x: get_gaelic_term(x).lower())

# Write back to file
with open('src/data/dictionaryData.ts', 'w', encoding='utf-8') as f:
    f.write(prefix + '\n  ' + ',\n  '.join(sorted_entries) + '\n' + suffix) 
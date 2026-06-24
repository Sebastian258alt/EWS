"""
Split UNITS array in data.js into modular per-level files.
  js/data/a0.js  →  UNITS_A0  (u0)
  js/data/a1.js  →  UNITS_A1  (u1, u2, u3, u4, u5)
  js/data/b1.js  →  UNITS_B1  (u6, u7, u8, u9, u10, u11, u12, u13)

Aggregator in data.js:
  const UNITS = [...UNITS_A0, ...UNITS_A1, ...UNITS_B1];
"""

import re, os

SRC = 'js/data.js'
OUT_DIR = 'js/data'
os.makedirs(OUT_DIR, exist_ok=True)

with open(SRC, 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. Extract raw text of each unit object ──────────────────────────────────

def extract_top_level_objects(text, start_marker='const UNITS = ['):
    """
    Parse a JS array and return the raw text of each top-level object,
    plus the character range of the entire array (marker … ];).
    """
    start = text.find(start_marker)
    if start == -1:
        raise ValueError(f"Marker '{start_marker}' not found")

    array_open = text.index('[', start)  # the '[' of the array
    pos = array_open + 1
    n = len(text)
    objects = []

    while pos < n:
        # skip whitespace
        while pos < n and text[pos] in ' \r\n\t':
            pos += 1
        if pos >= n:
            break
        if text[pos] == ']':           # end of array
            array_close = pos
            break
        if text[pos] != '{':           # skip stray commas etc.
            pos += 1
            continue

        # ── brace-depth parser ──
        obj_start = pos
        depth = 0
        in_str = False
        str_ch = None
        esc = False

        while pos < n:
            c = text[pos]
            if esc:
                esc = False
                pos += 1
                continue
            if c == '\\' and in_str:
                esc = True
                pos += 1
                continue
            if in_str:
                if c == str_ch:
                    in_str = False
                pos += 1
                continue
            if c in ('"', "'", '`'):
                in_str = True
                str_ch = c
                pos += 1
                continue
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    pos += 1
                    break
            pos += 1

        obj_text = text[obj_start:pos].rstrip()
        objects.append(obj_text)

        # skip trailing comma / whitespace
        while pos < n and text[pos] in ', \r\n\t':
            pos += 1

    return objects, start, array_close + 1   # +1 to include the ']'

units_raw, arr_start, arr_end = extract_top_level_objects(content)

print(f"Extracted {len(units_raw)} unit objects")

# ── 2. Identify each unit's id ───────────────────────────────────────────────

def get_unit_id(raw):
    m = re.search(r"id:\s*['\"]([^'\"]+)['\"]", raw)
    return m.group(1) if m else None

unit_ids = [get_unit_id(u) for u in units_raw]
print("Unit IDs:", unit_ids)

# ── 3. Group into per-level buckets ─────────────────────────────────────────
# a0.js  → u0
# a1.js  → u1, u2, u3, u4, u5   (u3 is A2 but sits here to preserve order)
# b1.js  → u6 … u13             (u10 is B2 but sits here to preserve order)

GROUPS = {
    'a0': ['u0'],
    'a1': ['u1', 'u2', 'u3', 'u4', 'u5'],
    'b1': ['u6', 'u7', 'u8', 'u9', 'u10', 'u11', 'u12', 'u13'],
}

CONST_NAMES = {
    'a0': 'UNITS_A0',
    'a1': 'UNITS_A1',
    'b1': 'UNITS_B1',
}

unit_map = {uid: raw for uid, raw in zip(unit_ids, units_raw)}

# Verify all units are accounted for
all_assigned = [uid for ids in GROUPS.values() for uid in ids]
missing = [uid for uid in unit_ids if uid not in all_assigned]
extra   = [uid for uid in all_assigned if uid not in unit_ids]
if missing or extra:
    print(f"WARNING — missing from groups: {missing}, extra in groups: {extra}")

# ── 4. Write per-level files ─────────────────────────────────────────────────

HEADERS = {
    'a0': '// A0 — Beginner Zero\n// Edit this file to update A0 lesson content.\n',
    'a1': '// A1 / A2 — Core Grammar (Present, Past, Future, Vocabulary, Daily Life)\n// u3 is tagged A2 but included here to preserve curriculum order.\n// Edit this file to update A1 and A2 lesson content.\n',
    'b1': '// B1 / B2 — Advanced Grammar\n// u10 is tagged B2 but included here to preserve curriculum order.\n// Edit this file to update B1 and B2 lesson content.\n',
}

for level, uids in GROUPS.items():
    const_name = CONST_NAMES[level]
    file_path  = os.path.join(OUT_DIR, f'{level}.js')
    items = []
    for uid in uids:
        if uid in unit_map:
            items.append('  ' + unit_map[uid].replace('\n', '\n  ').rstrip())
        else:
            print(f"  WARNING: {uid} not found in extracted data")

    body = ',\n'.join(items)
    file_content = (
        '// ═══════════════════════════════════════════════════════\n'
        f'//  English With Sebastian v2.0 — {file_path}\n'
        '// ═══════════════════════════════════════════════════════\n'
        f'{HEADERS[level]}\n'
        f'const {const_name} = [\n{body}\n];\n'
    )
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(file_content)
    total_lessons = sum(
        len(re.findall(r"id:\s*'l[^']*'", unit_map.get(uid,''))) for uid in uids
    )
    print(f"Wrote {file_path}  ({len(uids)} units, ~{total_lessons} lessons)")

# ── 5. Replace UNITS array in data.js with thin aggregator ──────────────────

# Find the full "const UNITS = [...  ];" span (including the semicolon)
# arr_start = position of 'c' in 'const UNITS'
# arr_end   = position just after the closing ']'
# Grab the ';' too
end_with_semi = arr_end
if content[end_with_semi:end_with_semi+1] == ';':
    end_with_semi += 1

AGGREGATOR = (
    '// ── UNITS (assembled from modular per-level files) ────────────────────────\n'
    '// Load order in index.html: a0.js → a1.js → b1.js → data.js\n'
    '// To edit lesson content, open js/data/a0.js, a1.js, or b1.js\n'
    'const UNITS = [...UNITS_A0, ...UNITS_A1, ...UNITS_B1];'
)

new_content = content[:arr_start] + AGGREGATOR + content[end_with_semi:]

with open(SRC, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\nRewrote {SRC}")
print(f"  Before: {len(content)} chars | After: {len(new_content)} chars")
print(f"  Removed: {len(content) - len(new_content)} chars from UNITS array")

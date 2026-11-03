"""Bangun globals.css Corvid dari CSS crawl lama (legacy/). Jalankan sekali: python scripts/build-css.py"""
import re, sys, pathlib
root = pathlib.Path(__file__).resolve().parents[3]
src = root / 'legacy/_next/static/css'
out = root / 'apps/web/src/app/globals.css'
css = ''.join((src / f).read_text(encoding='utf8') for f in ['26024aa7322dbbc3.css', '1a7689e1e9ca8bda.css', '8e56cc1227e22602.css'])

def split_rules(s):
    i, n, res = 0, len(s), []
    while i < n:
        j = i; depth = 0; in_str = None
        while j < n:
            ch = s[j]
            if ch == '{': depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0: j += 1; break
            elif ch == ';' and depth == 0: j += 1; break
            j += 1
        res.append(s[i:j]); i = j
    return res

def keep(rule):
    if '{' not in rule or '}' not in rule: return rule
    head = rule.split('{', 1)[0]
    if head.startswith('@media') or head.startswith('@supports') or head.startswith('@layer'):
        body = rule[rule.index('{')+1:rule.rindex('}')]
        inner = ''.join(r for r in map(keep, split_rules(body)))
        return f"{head}{{{inner}}}" if inner else ''
    if '{' not in rule: return rule
    if 'data-brand=' in head:
        sels = [x for x in head.split(',')]
        ok = [x for x in sels if 'data-brand=apevisor' in x or 'data-brand=' not in x]
        if not ok: return ''
        return ','.join(ok) + rule[len(head):]
    return rule

css = ''.join(keep(r) for r in split_rules(css))
css = css.replace('data-brand=apevisor', 'data-brand=corvid').replace('ape-', 'crv-')

# Token default :root --v2 (palet Corvid; lihat CLAUDE.md bagian 5)
PAL = {
 '--v2-bg-0':'#1b1b1b','--v2-bg-1':'#262626','--v2-bg-2':'#2f3031','--v2-bg-3':'#383a3b','--v2-bg-4':'#424546',
 '--v2-panel-grad':'linear-gradient(180deg,#ffffff06,#fff0),#2f3031',
 '--v2-panel-hover-grad':'linear-gradient(180deg,#ffffff0a,#ffffff03),#383a3b',
 '--v2-line-1':'#3a3d3e','--v2-line-2':'#4b4f50','--v2-line-3':'#676b6c',
 '--v2-t-0':'#fff','--v2-t-1':'#eef1f3','--v2-t-2':'#c9d3d9','--v2-t-3':'#aabbc5','--v2-t-4':'#8e979b','--v2-t-5':'#8e979b',
 '--v2-accent':'#aabbc5','--v2-accent-rgb':'170,187,197','--v2-accent-text':'#c0cdd5','--v2-btn-text':'#262626',
 '--v2-accent-hover':'#c0cdd5','--v2-accent-dim':'#aabbc524','--v2-accent-bg':'#aabbc514','--v2-accent-glow':'0 0 24px #aabbc538',
 '--v2-accent-grad':'linear-gradient(180deg,#c0cdd5,#aabbc5)','--v2-cyan':'#aabbc5','--v2-cyan-dim':'#aabbc51f','--v2-accent-2':'#c9d3d9',
 '--v2-section-bg':'#e8ecee','--v2-section-fg-rgb':'38,38,38',
}
def setvar(m):
    k = m.group(1)
    return f"{k}:{PAL[k]}" if k in PAL else m.group(0)
# blok :root default (tanpa data-brand) saja
def fix_root(m):
    return re.sub(r'(--v2-[a-z0-9-]+):[^;}]+', setvar, m.group(0))
css = re.sub(r':root\{--v2-bg-0:[^}]*\}', fix_root, css)

# warna hardcode brand lama -> turunan palet Corvid
REPL = [(r'#ff6b00','#aabbc5'),(r'#ff8426','#c0cdd5'),(r'#ffa057','#c0cdd5'),(r'#ff7a18','#aabbc5'),(r'#ff8018','#aabbc5'),
        (r'255,\s?107,\s?0','170,187,197'),(r'#0a0a0f','#1b1b1b'),(r'#111118','#262626'),(r'#16161f','#2f3031'),(r'#121217','#262626'),
        (r'#22d3ee','#aabbc5'),(r'#8b6fff','#c9d3d9')]
for a,b in REPL: css = re.sub(a, b, css, flags=re.I)

for h in 'ff6b2b ff8a2b ff871a ff8a1f ff9940 ff9a3c ffa04d ffa24d ffa83d ffb054 ff8f4a ffb347 ffa94d ffb073 ffa559 ff7a3a ff4d14'.split():
    css = re.sub('#'+h, '#aabbc5', css, flags=re.I)
for h in 'ffbe80 ffc27a ffc878 ffd08a ffd0a8 ffd29a ffd9b3 ffc078'.split():
    css = re.sub('#'+h, '#c9d3d9', css, flags=re.I)
for h in 'ffe5c8 fff1d6 fff6e8'.split():
    css = re.sub('#'+h, '#eef1f3', css, flags=re.I)
css = css.replace('--font-sans:var(--font-geist-sans)', '--font-sans:var(--font-geist-sans)')
css = css.replace('/_next/static/media/','/fonts/')
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(css, encoding='utf8')
print(len(css), 'bytes;', 'sisa data-brand:', len(re.findall('data-brand=', css)))
left = re.findall(r'#(?:ff[0-9a-f]{4}|f[0-9a-f]5[0-9a-f]{3})\b', css, flags=re.I)
print('sisa warna hangat:', sorted(set(left))[:30])

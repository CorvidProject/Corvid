"""Konversi HTML crawl (legacy/) -> halaman TSX Next.js dengan brand Corvid.
Jalankan di apps/web: python scripts/html-to-tsx.py
Layar /application/* dan /auth/* tidak dikonversi (SSR hanya skeleton; UI aslinya di chunk JS)."""
import re, pathlib, json, html as H
from urllib.parse import unquote, urlparse, parse_qs
from bs4 import BeautifulSoup, Comment, NavigableString

ROOT = pathlib.Path(__file__).resolve().parents[3]
LEG = ROOT / 'legacy'
APP = ROOT / 'apps/web/src/app'
VOID = {'img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'wbr', 'col', 'area', 'track'}
SPECIAL = {'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'srcset': 'srcSet', 'crossorigin': 'crossOrigin',
           'charset': 'charSet', 'autocomplete': 'autoComplete', 'maxlength': 'maxLength', 'readonly': 'readOnly',
           'colspan': 'colSpan', 'rowspan': 'rowSpan', 'autofocus': 'autoFocus', 'viewbox': 'viewBox',
           'playsinline': 'playsInline', 'fetchpriority': 'fetchPriority', 'datetime': 'dateTime',
           'spellcheck': 'spellCheck', 'inputmode': 'inputMode', 'referrerpolicy': 'referrerPolicy', 'autoplay': 'autoPlay',
           'preserveaspectratio': 'preserveAspectRatio', 'gradientunits': 'gradientUnits',
           'gradienttransform': 'gradientTransform', 'stddeviation': 'stdDeviation', 'patternunits': 'patternUnits'}
BOOL = {'hidden', 'disabled', 'checked', 'selected', 'required', 'readonly', 'multiple', 'autofocus', 'autoplay', 'loop',
        'muted', 'controls', 'playsinline', 'open'}
COLORS = [(r'#ff6b00', 'var(--v2-accent)'), (r'255,\s?107,\s?0', 'var(--v2-accent-rgb)'), (r'#0a0a0f', 'var(--v2-bg-0)'),
          (r'#111118', 'var(--v2-bg-1)'), (r'#16161f', 'var(--v2-bg-2)'), (r'#ff8426', 'var(--v2-accent-hover)'),
          (r'#ffa057', 'var(--v2-accent-text)'), (r'rgba\(10,\s?10,\s?15,', 'rgba(27,27,27,')]


SVGTAGS = {t.lower(): t for t in 'feTurbulence feColorMatrix feGaussianBlur feBlend feComposite feOffset feMerge feMergeNode feFlood feDisplacementMap feMorphology feSpecularLighting feDiffuseLighting linearGradient radialGradient clipPath textPath foreignObject animateTransform animateMotion feDropShadow feComponentTransfer feFuncR feFuncG feFuncB feFuncA'.split()}
SVGATTR = {a.lower(): a for a in 'baseFrequency numOctaves stitchTiles stdDeviation gradientUnits gradientTransform patternUnits patternContentUnits clipPathUnits maskUnits maskContentUnits filterUnits primitiveUnits spreadMethod markerWidth markerHeight refX refY tableValues kernelMatrix preserveAspectRatio startOffset attributeName repeatCount keyTimes keySplines calcMode viewBox pathLength xChannelSelector yChannelSelector surfaceScale diffuseConstant specularConstant specularExponent targetX targetY'.split()}

PHRASES = [
 (r'Autonomous trading agents across EVM and Solana\. Analyze tokens with AI, deploy autonomous trading agents, and execute on-chain swaps\. Six networks[^.]*\.', 'Agents that watch smart money, read the risk, then trade from your wallet. Analyze tokens with AI, deploy autonomous trading agents, and execute on-chain swaps on Solana.'),
 (r'Autonomous trading agents across EVM and Solana', 'Agents that watch smart money, read the risk, then trade from your wallet'),
 (r'Token risk reports, smart-money tracking and agents that trade from your own wallet across [^.]*\.', 'Token risk reports, smart-money tracking and agents that trade from your own wallet on Solana.'),
 (r'Autonomous on-chain trading agents and analysis tools for Ethereum, Base, Arbitrum, BNB Chain and Solana', 'Autonomous on-chain trading agents and analysis tools for Solana'),
 (r'is a multichain trading terminal with autonomous agents, on Solana, Ethereum and Base', 'is a Solana trading terminal with autonomous agents'),
 (r'SOLANA . ETHEREUM . BASE . JUPITER . 0x', 'SOLANA · JUPITER · HELIUS · JITO'),
 (r'Jupiter on Solana, 0x with Flashbots on EVM', 'Jupiter on Solana, broadcast through Jito bundles'),
 (r'Jupiter on Solana or 0x on EVM', 'Jupiter on Solana'),
 (r'Jupiter on Solana, 0x on EVM', 'Jupiter on Solana'),
 (r'through 0x on EVM or Jupiter on Solana', 'through Jupiter on Solana'),
 (r'Base, Ethereum, Arbitrum, BNB Chain, and Robinhood agents use the EVM side', 'Agents run on Solana'),
 (r'Trades route through Jupiter and 0x', 'Trades route through Jupiter'),
 (r'across Solana and EVM', 'on Solana'),
 (r'Corvid runs autonomous trading agents on Ethereum', 'Corvid runs autonomous trading agents on Solana'),
 (r'Ethereum-native', 'Solana-native'),
 (r'\b[Aa] Ethereum wallet', 'A Solana wallet'),
 (r'Ethereum (token|mint|wallet)', r'Solana \1'),
 (r'Real Ethereum tokens', 'Real Solana tokens'),
 (r'Alchemy</strong>: Ethereum RPC and webhook infrastructure', 'Helius</strong>: Solana RPC and wallet data'),
 (r'0x</strong>: DEX routing and swap quotes', 'Jupiter</strong>: DEX routing and swap quotes'),
 (r'Flashbots</strong>[^<]*', 'Jito</strong>: transaction bundle broadcast'),
 (r'\b0x routing', 'Jupiter routing'),
 (r'\bvia 0x\b', 'via Jupiter'),
 (r'taken by 0x', 'taken by Jupiter'),
 (r'\bERC-?20\b', 'SPL'),
 (r'\$APE\b', '$CRVD'),
 (r'\bETH\b', 'SOL'),
 (r'\bAPE\b', 'CRVD'),
 (r'Etherscan', 'Solscan'),
 (r'on Ethereum\b', 'on Solana'),
 (r'^Alchemy$', 'Helius'),
 (r'^Flashbots$', 'Jito'),
 (r'^0x$', 'Jupiter'),
 (r'MetaMask', 'Phantom'),
 (r'Ethereum RPC and webhook infrastructure', 'Solana RPC and wallet data'),
 (r'Live on mainnet\.', 'Live on Solana.'),
]

def brand(t):
    for a, b in PHRASES:
        t = re.sub(a, b, t)
    t = re.sub(r'https?://(www\.)?apevisor\.tech', 'https://corvid.example', t, flags=re.I)
    t = t.replace('APEVISOR', 'CORVID').replace('Apevisor', 'Corvid').replace('apevisor', 'corvid')
    return t.replace('ape-pixel', 'crv-pixel')


def colors(t):
    for a, b in COLORS:
        t = re.sub(a, b, t, flags=re.I)
    return t


def fix_url(u):
    if u.startswith('/_next/image'):
        q = parse_qs(urlparse(H.unescape(u)).query)
        u = unquote(q.get('url', [''])[0])
    return u.replace('/corvid/', '/brand/').replace('/apevisor/', '/brand/')


def camel(s):
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), s)


def style_obj(s):
    items = []
    for d in [x for x in s.split(';') if ':' in x]:
        k, v = d.split(':', 1)
        k = k.strip()
        v = colors(brand(v.strip()))
        if (k == 'opacity' and v in ('0', '0.0')) or (k == 'transform' and re.search(r'translate|scale\(0', v)) or k in ('will-change', 'filter') and v.startswith('blur(') and False:
            continue
        if k.startswith('--'):
            key = json.dumps(k)
        elif k.startswith('-webkit-'):
            c = camel(k[8:])
            key = 'Webkit' + c[0].upper() + c[1:]
        else:
            key = camel(k)
        items.append(key + ':' + json.dumps(v))
    return '{{' + ','.join(items) + '}}'


def attr(k, v):
    lk = k.lower()
    if lk.startswith('on'):
        return ''
    if lk == 'style':
        return ' style=' + style_obj(v)
    if lk.startswith(('data-', 'aria-')):
        name = lk
    elif lk in SPECIAL:
        name = SPECIAL[lk]
    elif lk in SVGATTR:
        name = SVGATTR[lk]
    elif '-' in lk:
        name = camel(lk)
    else:
        name = k
    if lk in BOOL and v in ('', lk):
        return ' ' + name
    if isinstance(v, list):
        v = ' '.join(v)
    if lk in ('src', 'href'):
        v = fix_url(v)
    elif lk == 'srcset':
        v = ', '.join(fix_url(p.strip().split(' ')[0]) + (' ' + p.strip().split(' ')[1] if ' ' in p.strip() else '')
                      for p in v.split(','))
    v = colors(brand(v))
    if name in ('rows', 'cols', 'tabIndex', 'colSpan', 'rowSpan', 'maxLength', 'size', 'span') and v.lstrip('-').isdigit():
        return ' ' + name + '={' + v + '}'
    return ' ' + name + '=' + json.dumps(v, ensure_ascii=False)


def esc(t):
    t = brand(t)
    if not t.strip():
        return ' ' if '\n' in t else t
    return re.sub(r'([{}<>])', lambda m: '{' + json.dumps(m.group(1)) + '}', t)


def ser(n):
    if isinstance(n, Comment):
        return ''
    if isinstance(n, NavigableString):
        return esc(str(n))
    t = n.name
    if t in ('script', 'template', 'noscript'):
        return ''
    if t == 'img' and 'logo-v2' in (n.get('src', '') + n.get('srcset', '')):
        return ''  # logo belum diberikan; teks wordmark di sebelahnya sudah ada (placeholder)
    t = SVGTAGS.get(t, t)
    attrs = ''.join(attr(k, v) for k, v in n.attrs.items())
    if t == 'style':
        return '<style dangerouslySetInnerHTML={{__html:' + json.dumps(colors(brand(n.get_text()))) + '}}/>'
    if t in VOID:
        return '<' + t + attrs + '/>'
    if t == 'textarea':
        return '<textarea' + attrs + ' defaultValue=' + json.dumps(n.get_text()) + '/>'
    inner = ''.join(ser(c) for c in n.children)
    return '<' + t + attrs + '>' + inner + '</' + t + '>'


def page_for(rel):
    f = (LEG / rel / 'index.html') if rel else (LEG / 'index.html')
    soup = BeautifulSoup(f.read_text(encoding='utf8'), 'html.parser')
    title = brand(soup.title.get_text()) if soup.title else 'Corvid'
    md = soup.find('meta', attrs={'name': 'description'})
    desc = brand(md['content']) if md else ''
    body = soup.body
    EVM = re.compile(r'^(Alchemy|Ethereum|Base|Flashbots|0x|Arbitrum|BNB|Robinhood)\b', re.I)
    EVMURL = re.compile(r'(0x\.org|flashbots\.net|base\.org|alchemy\.com|ethereum\.org|arbitrum|bnbchain|robinhood)', re.I)
    for a in list(body.find_all('a')):
        if EVM.match(a.get('aria-label', '')) or EVMURL.search(a.get('href', '')):
            a.decompose()
    for d in list(body.find_all('div', class_=re.compile(r'z-\[9999\]'))):
        d.decompose()
    for d in list(body.find_all('div', class_=re.compile(r'z-\[100\]'))):
        if d.find(style=re.compile('pulse')) is not None and d.find('a') is None:
            d.decompose()
    for d in list(body.find_all('div', hidden=True)):
        if re.match(r'^S:\d+', d.get('id', '')):
            del d.attrs['hidden']
            d.unwrap()
        elif not d.get('id'):
            d.decompose()
    return title, desc, ''.join(ser(c) for c in body.children)


def main():
    pages = []
    for f in sorted(LEG.rglob('index.html')):
        rel = f.parent.relative_to(LEG).as_posix()
        if rel == '.':
            rel = ''
        if rel.startswith(('application', 'auth', '_next')):
            continue
        pages.append(rel)
    for rel in pages:
        title, desc, jsx = page_for(rel)
        route = rel.replace('docs-pages', 'docs')
        d = APP / '(site)' / route if route else APP / '(site)'
        d.mkdir(parents=True, exist_ok=True)
        (d / 'page.tsx').write_text(
            'import type { Metadata } from "next";\n\n'
            'export const metadata: Metadata = { title: ' + json.dumps(title) + ', description: ' + json.dumps(desc) + ' };\n\n'
            'export default function Page() {\n  return (<>' + jsx + '</>);\n}\n', encoding='utf8')
        print('ok', route or '/', len(jsx))


main()

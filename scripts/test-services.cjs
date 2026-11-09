// Offline service gateway checks; uses only installed TypeScript and React.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
let hooks, slug = 'call-center-110';
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = ['.tsx', '.ts', '/index.ts', '/index.tsx'].map(s => file + s).find(p => fs.existsSync(p) && fs.statSync(p).isFile());
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const localRequire = name => {
    if (name.endsWith('.css')) return {};
    if (name === '@iconify/react') return { Icon: () => null };
    if (name === 'react') return { ...React,
      useState(initial) {
        const index = hooks.index++;
        if (!(index in hooks.state)) hooks.state[index] = initial;
        return [hooks.state[index], value => { hooks.state[index] = value; }];
      },
      useRef: () => ({ current: null }),
      useEffect: effect => { hooks.effects.push(effect); },
    };
    if (name === 'react-router-dom') return {
      useParams: () => ({ slug }),
      Link: ({ to, children, ...props }) => React.createElement('a', { ...props, href: to }, children),
    };
    return name.startsWith('.') ? load(path.resolve(path.dirname(file), name)) : require(name);
  };
  new Function('require', 'module', 'exports', source)(localRequire, module, module.exports);
  cache.set(file, module.exports);
  return module.exports;
}
const { servicesData: data, serviceGroups: groups } = load('src/data/servicesData.ts');
const Page = load('src/pages/Services/Services.tsx').default;
const Detail = load('src/pages/ServiceDetail/ServiceDetail.tsx').default;
const Card = load('src/components/services/ServiceCard/ServiceCard.tsx').default;
const Dialog = load('src/components/services/CallCenterDialog.tsx').default;
function start() { hooks = { index: 0, state: [], effects: [] }; }
function tree(Component, props = {}) { hooks.index = 0; return Component(props); }
function expand(node) {
  if (Array.isArray(node)) return node.flatMap(expand);
  if (!node || typeof node !== 'object') return node;
  if (typeof node.type === 'function') return expand(node.type(node.props));
  return { ...node, props: { ...node.props, children: React.Children.toArray(node.props.children).flatMap(expand) } };
}
function nodes(node, predicate) {
  if (Array.isArray(node)) return node.flatMap(n => nodes(n, predicate));
  if (!node || typeof node !== 'object') return [];
  return [...(predicate(node) ? [node] : []), ...nodes(node.props.children, predicate)];
}
function html(Component, props) { return renderToStaticMarkup(tree(Component, props)); }

test('all services share one grid in service order without visible Satker sections', () => {
  start(); const markup = html(Page);
  assert.deepEqual(groups.slice(0, 6).map(g => g.title), ['SPKT', 'INTEL / INTELKAM', 'LANTAS', 'SIBER', 'HUMAS', 'OPS']);
  assert.doesNotMatch(markup, /id="satker-|services-page__group/);
  assert.equal((markup.match(/class="service-grid"/g) || []).length, 1);
  assert.equal((markup.match(/class="service-card"/g) || []).length, data.length);
  const view = expand(tree(Page));
  assert.deepEqual(nodes(view, n => n.props.className === 'service-card__title').map(n => n.props.children.join('')),
    [...data].sort((a, b) => a.sortOrder - b.sortOrder).map(s => s.title));
});
test('every service has its intended allocation and unique ID/slug', () => {
  const expected = { 'spkt-online': 'spkt', 'skck-online': 'intel', 'perizinan-keramaian': 'intel',
    'sim-nasional-presisi': 'lantas', 'stnk-bpkb': 'lantas', samsat: 'lantas',
    'cyber-polda-papua-tengah': 'siber', 'berita-dan-himbauan': 'humas',
    'informasi-pelaksanaan-operasi': 'ops', 'jajaran-polres': 'public', 'call-center-110': 'public' };
  assert.equal(data.length, 11);
  for (const item of data) assert.equal(item.group, expected[item.slug], item.slug);
  assert.equal(new Set(data.map(s => s.id)).size, data.length);
  assert.equal(new Set(data.map(s => s.slug)).size, data.length);
});
test('SIM rename retains slug; loss reports and cyber complaints are scopes, not duplicates', () => {
  assert.equal(data.find(s => s.slug === 'sim-nasional-presisi').title, 'SIM Nasional');
  assert.ok(!data.some(s => s.slug === 'laporan-kehilangan'));
  assert.match(data.find(s => s.slug === 'spkt-online').description, /kehilangan/);
  assert.match(data.find(s => s.group === 'siber').description, /Aduan Siber/);
});
test('planned services are disabled, never fake links or active dashboards', () => {
  for (const service of data.filter(s => !s.active)) {
    start(); const markup = html(Card, { service });
    assert.match(markup, /disabled=""/); assert.match(markup, /Segera Hadir/);
    assert.doesNotMatch(markup, /href=/); assert.equal(service.url, '');
  }
  assert.ok(data.every(s => s.url !== '#' && !s.url.startsWith('tel:')));
  assert.deepEqual(data.filter(s => s.active).map(s => s.slug), ['jajaran-polres', 'call-center-110', 'berita-dan-himbauan']);
});
test('Polres and News have working existing internal routes', () => {
  const routes = fs.readFileSync('src/routes/AppRoutes.tsx', 'utf8');
  for (const url of ['/polres', '/berita', '/layanan', '/layanan/:slug']) assert.ok(routes.includes(`path="${url}"`));
  for (const [slug, url] of [['jajaran-polres', '/polres'], ['berita-dan-himbauan', '/berita']]) {
    start(); assert.ok(html(Card, { service: data.find(s => s.slug === slug) }).includes(`href="${url}"`));
  }
});
test('approved future external URL is retained as direct href without a gateway redirect', () => {
  start(); const markup = html(Card, { service: { ...data[0], active: true, external: true, url: 'https://satker.example.test/app' } });
  assert.match(markup, /href="https:\/\/satker.example.test\/app"/);
  assert.match(markup, /noopener noreferrer/);
});
test('search matches title, description, category and Satker within the unified grid', () => {
  for (const [keyword, expected] of [['intel', 2], ['LANTAS', 3], ['kehilangan', 1], ['siber', 1], ['tidak-ada', 0]]) {
    start(); let view = expand(tree(Page));
    nodes(view, n => n.type === 'input')[0].props.onChange({ target: { value: keyword } });
    view = expand(tree(Page));
    assert.equal(nodes(view, n => n.type === 'article').length, expected, keyword);
    assert.equal(nodes(view, n => n.props.className === 'service-grid').length, expected ? 1 : 0);
    assert.equal(nodes(view, n => n.type === 'h2' && String(n.props.id).startsWith('satker-')).length, 0);
  }
});
test('110 card opens informational modal, close button clears it, no phone link', () => {
  start(); let view = expand(tree(Page));
  const trigger = nodes(view, n => n.type === 'button' && n.props['aria-haspopup'] === 'dialog')[0];
  assert.ok(trigger); trigger.props.onClick();
  view = expand(tree(Page));
  assert.equal(nodes(view, n => n.type === 'dialog').length, 1);
  nodes(view, n => n.type === 'dialog')[0].props.children.at(-1).props.onClick();
  assert.equal(nodes(expand(tree(Page)), n => n.type === 'dialog').length, 0);
  assert.doesNotMatch(html(Page), /tel:/);
});
test('native dialog cancellation (Escape) closes through the parent callback', () => {
  start(); let view = expand(tree(Page));
  nodes(view, n => n.type === 'button' && n.props['aria-haspopup'] === 'dialog')[0].props.onClick();
  view = expand(tree(Page)); let prevented = false;
  nodes(view, n => n.type === 'dialog')[0].props.onCancel({ preventDefault() { prevented = true; } });
  assert.ok(prevented);
  assert.equal(nodes(expand(tree(Page)), n => n.type === 'dialog').length, 0);
});
test('dialog labelled description, initial focus, modal opening and focus restoration', () => {
  start(); let closed = 0, focused = 0, restored = 0;
  const oldDocument = global.document, oldHTMLElement = global.HTMLElement;
  class Element { isConnected = true; focus() { restored++; } }
  global.HTMLElement = Element; global.document = { activeElement: new Element() };
  try {
    const view = tree(Dialog, { onClose() {} });
    assert.equal(view.type, 'dialog'); assert.equal(view.props['aria-modal'], 'true');
    assert.equal(view.props['aria-labelledby'], 'call-center-title');
    assert.equal(view.props['aria-describedby'], 'call-center-message');
    view.props.ref.current = { showModal() { closed--; }, close() { closed++; } };
    const button = React.Children.toArray(view.props.children).at(-1);
    button.props.ref.current = { focus() { focused++; } };
    const cleanup = hooks.effects[0](); assert.equal(closed, -1); assert.equal(focused, 1);
    cleanup(); assert.equal(closed, 0); assert.equal(restored, 1);
  } finally { global.document = oldDocument; global.HTMLElement = oldHTMLElement; }
});
test('direct service detail 110 uses same popup; planned detail has no launch link', () => {
  start(); slug = 'call-center-110'; let view = expand(tree(Detail));
  nodes(view, n => n.type === 'button' && n.props['aria-haspopup'] === 'dialog')[0].props.onClick();
  assert.equal(nodes(expand(tree(Detail)), n => n.type === 'dialog').length, 1);
  start(); slug = 'stnk-bpkb'; const markup = html(Detail);
  assert.match(markup, /Segera Hadir/); assert.doesNotMatch(markup, /Buka Layanan/);
});
test('responsive grid and modal retain desktop/mobile rules', () => {
  const css = fs.readFileSync('src/components/services/ServiceGrid/ServiceGrid.css', 'utf8');
  assert.match(css, /repeat\(4/); assert.match(css, /max-width:1100px/); assert.match(css, /max-width:640px/);
  const modal = fs.readFileSync('src/components/services/CallCenterDialog.css', 'utf8');
  assert.match(modal, /calc\(100% - 32px\)/); assert.match(modal, /overflow-y: auto/);
});

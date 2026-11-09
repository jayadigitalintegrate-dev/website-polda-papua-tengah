// Offline regression checks using installed TypeScript/React; no CMS requests.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const config = { baseUrl: 'https://cms.example.test/api', timeout: 1000 };
let hooks;
let slug = '17';
function load(file) {
  const module = { exports: {} };
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const localRequire = (name) => {
    if (name.endsWith('.css')) return {};
    if (name.endsWith('config/api')) return { API_CONFIG: config };
    if (name === 'react') return {
      ...React,
      useState(initial) {
        const index = hooks.index++;
        if (!(index in hooks.state)) hooks.state[index] = initial;
        return [hooks.state[index], (value) => { hooks.state[index] = value; }];
      },
      useEffect(effect) { if (!hooks.started) hooks.effects.push(effect); },
    };
    if (name === 'react-router-dom') return {
      useParams: () => ({ slug }),
      Link: ({ to, children, ...props }) => React.createElement('a', { ...props, href: to }, children),
    };
    if (name.endsWith('services/polresApi')) return api;
    if (name.startsWith('.')) return load(path.resolve(path.dirname(file), name + '.tsx'));
    return require(name);
  };
  new Function('require', 'module', 'exports', source)(localRequire, module, module.exports);
  return module.exports;
}
const api = load(path.resolve('src/services/polresApi.ts'));
const List = load(path.resolve('src/components/polres/PolresList.tsx')).default;
const Detail = load(path.resolve('src/pages/Polres/DetailPolres.tsx')).default;
const dogiyai = {
  id: 17, name_id: 'POLRES DOGIYAI', status: 'active', sort_order: 1,
  ...Object.fromEntries(['name_en', 'chief_name', 'chief_rank', 'chief_nrp',
    'chief_photo', 'chief_photo_url', 'jurisdiction', 'address', 'phone',
    'email', 'website', 'description'].map(key => [key, null])),
};
async function render(Component) {
  hooks = { index: 0, state: [], effects: [], started: false };
  const loading = renderToStaticMarkup(Component());
  hooks.started = true;
  hooks.effects.forEach(effect => effect());
  await new Promise(resolve => setImmediate(resolve));
  hooks.index = 0;
  return { loading, html: renderToStaticMarkup(Component()) };
}
async function main() {
  const originalFetch = global.fetch;
  try {
    for (const [label, response, expected] of [
      ['DOGIYAI only', () => Response.json([dogiyai]), 'POLRES DOGIYAI'],
      ['empty', () => Response.json([]), 'Belum ada data'],
      ['network failure', () => { throw new TypeError('offline'); }, 'belum dapat dimuat'],
      ['server error', () => new Response('', { status: 503 }), 'belum dapat dimuat'],
      ['malformed envelope', () => Response.json({ data: [] }), 'belum dapat dimuat'],
      ['malformed record', () => Response.json([{ id: 17, name_id: {} }]), 'belum dapat dimuat'],
      ['invalid JSON', () => new Response('<html>'), 'belum dapat dimuat'],
    ]) {
      global.fetch = async () => response();
      const list = await render(List);
      assert.match(list.loading, /Memuat data/);
      assert.ok(list.html.includes(expected), label);
      assert.doesNotMatch(list.html, /Nabire|Mimika|Paniai|Intan Jaya/);
      const detail = await render(Detail);
      assert.match(detail.loading, /Memuat profil/);
      const detailExpected = expected === 'Belum ada data' ? 'tidak ditemukan' : expected;
      assert.ok(detail.html.includes(detailExpected), `detail ${label}`);
      if (label === 'DOGIYAI only') assert.match(list.html, /href="\/polres\/17"/);
      console.log(`PASS list + detail: ${label}`);
    }
    global.fetch = async () => Response.json([dogiyai]);
    slug = '999';
    assert.match((await render(Detail)).html, /Data Polres tidak ditemukan/);
    console.log('PASS unknown detail');
    let calls = 0;
    global.fetch = async () => { calls++; return Response.json([dogiyai]); };
    await Promise.all([api.fetchPolres(), api.fetchPolres()]);
    assert.equal(calls, 1);
    await api.fetchPolres();
    assert.equal(calls, 2);
    console.log('PASS in-flight deduplication and refresh');
    config.baseUrl = '';
    global.fetch = async () => { throw new Error('must not request'); };
    assert.match((await render(List)).html, /belum dapat dimuat/);
    console.log('PASS missing API configuration');
    const routes = fs.readFileSync('src/routes/AppRoutes.tsx', 'utf8');
    assert.match(routes, /path="\/polres"/);
    assert.match(routes, /path="\/polres\/:slug"/);
    console.log('PASS existing Polres routes');
  } finally { global.fetch = originalFetch; }
}
main().catch(error => { console.error(error); process.exitCode = 1; });

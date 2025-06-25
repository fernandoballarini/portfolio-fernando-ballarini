
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1753, hash: 'd0ae98a82d9b2bdb5b79d5247b1bbe85130797034fb8016ddd1453390e3a99c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1594, hash: '09552714afa475237057020a289d15e28dd840080b084f494a4d3fdb856c754c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WWWTLGLN.css': {size: 6948, hash: 'kVW+Gfc08Gk', text: () => import('./assets-chunks/styles-WWWTLGLN_css.mjs').then(m => m.default)}
  },
};

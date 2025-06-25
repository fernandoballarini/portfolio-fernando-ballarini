
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-fernando-ballarini/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1782, hash: 'eced44f4bdbfdb88b696b1f9fdf093eb83f46d2aeff5b19a18c0964155af32aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1623, hash: '6aea18b5916ef0add2370c31eb8d99c7480f248f769dd7f82e1438f34307fac9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WWWTLGLN.css': {size: 6948, hash: 'kVW+Gfc08Gk', text: () => import('./assets-chunks/styles-WWWTLGLN_css.mjs').then(m => m.default)}
  },
};

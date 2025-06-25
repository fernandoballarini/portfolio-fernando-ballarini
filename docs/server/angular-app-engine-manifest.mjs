
export default {
  basePath: '/portfolio-fernando-ballarini',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

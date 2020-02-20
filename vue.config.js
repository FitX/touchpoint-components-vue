const path = require('path')

const PACKAGE_JSON = require('./package.json');

module.exports = {
  pwa: {
    name: 'Toucpoint-Components-Vue',
    themeColor: '#ed6a12',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      clientsClaim: true,
      offlineGoogleAnalytics: true,
      skipWaiting: true,
      runtimeCaching: [
      ],
    },
  },

  // lintOnSave: undefined,

  pages: {
    index: {
      entry: './demo/src/main.js'
    },
  },

  /* devServer: {
    contentBase: path.join(__dirname, 'demo'),
    port: 9000,
  },

  */

  configureWebpack: {
    resolve: {
      alias: {
        'TPCpackages': path.resolve(__dirname, './packages/'),
      },
    },
  },

  chainWebpack: (config) => {
    config.plugin('define')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0]['process.env'].VERSION = JSON.stringify(PACKAGE_JSON.version);
        return args;
      });

    /* const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader'); */
  },
};

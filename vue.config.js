const path = require('path');

module.exports = {
  // baseUrl: '', //By default, Vue CLI assumes your app will be deployed at the root of a domain, e.g. https://www.my-app.com/. If your app is deployed at https://www.foobar.com/my-app/, set baseUrl to '/my-app/'.

  // outputDir: 'build', // Default: 'dist'. The directory where the production build files will be generated in when running vue-cli-service build.

  // assetsDir: '', // A directory (relative to outputDir) to nest generated static assets (js, css, img, fonts) under.

  // indexPath: 'index.html', // Specify the output path for the generated index.html (relative to outputDir). Can also be an absolute path.

  lintOnSave: process.env.NODE_ENV !== 'production',

  // "vue-cli-plugin-style-resources-loader": "^0.1.3",
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: [
  //       '/Users/funcdigital/Projects/vue_test/src/assets/scss/*.scss',
  //     ]
  //   }
  // },

  productionSourceMap: true, //Setting this to false can speed up production builds if you don't need source maps for production.

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },

  configureWebpack: {
    chainWebpack: config => {

      // Изменить svg-loader на inline-svg-loader
      // const svgRule = config.module.rule('svg')
  
      // // clear all existing loaders.
      // // if you don't do this, the loader below will be appended to
      // // existing loaders of the rule.
      // svgRule.uses.clear()
  
      // // add replacement loader(s)
      // svgRule
      //   .use('vue-svg-loader')
      //     .loader('vue-svg-loader')
    }
  },

  css: {
    sourceMap: true,

    // extract: true // Default: true in production, false in development.

    // loaderOptions: {
    //   // pass options to sass-loader
    //   sass: {
    //     // @/ is an alias to src/
    //     // so this assumes you have a file named `src/variables.scss`
    //     data: `@import "@/assets/scss/*.scss";`
    //   }
    // }
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader') // Загружает указанные стили во все стилевые файлы
    .options({
      patterns: [
        // path.resolve(__dirname, './src/assets/scss/style.scss'),
      ],
    })
}
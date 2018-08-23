module.exports = {
  // baseUrl: '', //By default, Vue CLI assumes your app will be deployed at the root of a domain, e.g. https://www.my-app.com/. If your app is deployed at https://www.foobar.com/my-app/, set baseUrl to '/my-app/'.

  // outputDir: 'build', // Default: 'dist'. The directory where the production build files will be generated in when running vue-cli-service build.

  // assetsDir: '', // A directory (relative to outputDir) to nest generated static assets (js, css, img, fonts) under.

  // indexPath: 'index.html', // Specify the output path for the generated index.html (relative to outputDir). Can also be an absolute path.

  lintOnSave: process.env.NODE_ENV !== 'production',

  productionSourceMap: true, //Setting this to false can speed up production builds if you don't need source maps for production.

  css: {
    sourceMap: true,
    // extract: true // Default: true in production, false in development.

    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // Загружает указанные стили во все однофайловые компоненты
        data: `@import "@/assets/scss/variables.scss";`
      }
    },
  },
}

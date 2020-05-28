module.exports = {
  configureWebpack: {
    output: {
      filename: '[name].[hash].js'
    }
  },

  publicPath: ".",

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'pt_BR',
      fallbackLocale: 'pt_BR',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}

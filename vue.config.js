// CSS配置相關: https://cli.vuejs.org/zh/guide/css.html
module.exports = {
  lintOnSave: false, // 排除组件命名未按照驼峰命名法的错误
  css: {
    loaderOptions: {
      scss: {
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData",高版本 additionalData
        prependData: `
          @import "@/style/settings/var.scss";
          @import "@/style/theme/scss/index.scss";
          @import "@/style/tools/_sassMagic.scss";
          `
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({remUnit:35}),
        ]
      }
    }
  }
}

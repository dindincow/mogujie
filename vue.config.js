// CSS配置相關: https://cli.vuejs.org/zh/guide/css.html
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `
          @import "@/style/settings/var.scss";
          @import "@/style/theme/index.scss";
          @import "@/style/tools/_sassMagic.scss";
          `
      }

    }
  }
}

const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/main.scss"
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vue$",
      path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
    );
  },
});

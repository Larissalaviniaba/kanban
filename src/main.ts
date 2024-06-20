import Vue from "vue";
import App from "@/App.vue";

// Libs
import "@/libs/bootstrapVue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

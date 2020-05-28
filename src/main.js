import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { signIn } from "./data";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/, /^web-/];

Vue.mixin({
  methods: {
    language() {
      const dataLang = document.querySelector("body").getAttribute("data-lang");

      i18n.locale = dataLang;
      return dataLang;
    },
  },
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

document.addEventListener("DOMContentLoaded", signIn);

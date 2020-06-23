import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { signIn } from "./data";
import VueCurrencyInput from 'vue-currency-input';
import VueSocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const audio = require("@/audio.js");
audio.loadAudio();

library.add(fab)
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/, /^web-/];

const pluginOptions = {
  globalOptions: { currency: 'USD' }
}

Vue.use(VueCurrencyInput, pluginOptions)
Vue.use(VueSocialSharing);
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

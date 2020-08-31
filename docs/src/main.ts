import Vue from "vue";
import App from "./App.vue";

// prettier-ignore
import TabPlugin from "@vue-material-directive/tab";
Vue.use(TabPlugin);

import RipplePlugin from "@vue-material-directive/ripple";
Vue.use(RipplePlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";

// prettier-ignore
import TabPlugin from "@vue-material-directive/tab";
import RipplePlugin from "@vue-material-directive/ripple";
import IconButtonPlugin from "@vue-material-directive/icon-button";


Vue.use(TabPlugin);
Vue.use(RipplePlugin);
Vue.use(IconButtonPlugin);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from 'vue'

import { IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'

Vue.config.productionTip = false

//Add variable to window scope in which Vue will run
Vue.prototype.window = window;
window.ENTRY = {};
window.ENTRY.PA_LineOfEffort = "money";


// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')



/* For use with custom element implementation */
/*const wrappedElement = wrap(Vue,App);
window.customElements.define("v-money",wrappedElement);
*/
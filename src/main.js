import Vue from 'vue'

/* For use with custom element implementaion */
//import wrap from "@vue/web-component-wrapper"




import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BFormGroup, BFormCheckboxGroup } from 'bootstrap-vue'



import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.window = window;
//window.ENTRY.PA_LineOfEffort = "money";
window.ENTRY = {};
window.ENTRY.PA_LineOfEffort = "money";

// Import Bootstrap and BootstrapVue CSS files (order is important)
/*import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
*/

Vue.component('b-form-group', BFormGroup)
Vue.component('b-form-checkbox-group', BFormCheckboxGroup)

/*
Vue.component('BFormGroup',BFormGroup);
Vue.component('BFormCheckboxGroup',BFormCheckboxGroup);

Vue.directive('b-form-group', BFormGroup)
Vue.directive('b-form-checkbox-group',BFormCheckboxGroup)
*/

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



new Vue({
  render: h => h(App),
}).$mount('#app')



/* For use with custom element implementation */
/*const wrappedElement = wrap(Vue,App);
window.customElements.define("v-money",wrappedElement);
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './SCSS/custom.scss'
import { BootstrapVue, TablePlugin, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(TablePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

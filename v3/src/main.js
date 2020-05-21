import Vue from 'vue'
// BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// BootstrapVue and Bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
// Leaflet css
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
// Installing BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

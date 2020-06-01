import Vue from 'vue'
import './assets/css/global.css'
// BootstrapVue
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// BootstrapVue and Bootstrap CSS files
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Import pureCSS
import './assets/css/pure-min.css'
import './assets/css/grids-responsive-min.css'
import App from './App.vue'
import router from './router'
// Leaflet css
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
// Installing BootstrapVue
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

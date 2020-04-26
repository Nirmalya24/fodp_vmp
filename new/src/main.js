import Vue from 'vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

// App is not in production
Vue.config.productionTip = false

//Install BootstrapVue
Vue.use(BootstrapVue)
//Install BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

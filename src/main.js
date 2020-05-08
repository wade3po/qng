import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible'
import '@/assets/css/reset.css';

import axios from '@/assets/js/axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

require('./mock/mock.js')

Vue.use(ElementUI);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import store from './app/store/main'


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

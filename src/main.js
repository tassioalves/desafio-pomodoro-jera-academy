import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import store from './app/store/main'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

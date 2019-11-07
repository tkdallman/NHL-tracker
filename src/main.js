import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import router from './router'

Vue.config.productionTip = false;
Vue.prototype.$log = window.console.log;
Vue.prototype.$mediaQueries = {
  small: '500px',
  medium: '991px',
  large: '1050px',
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

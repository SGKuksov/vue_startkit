import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import svg4everybody from 'svg4everybody';
svg4everybody();

// инлайнинг svg, пример: background: svg-load('../img/svg/example.svg', fill=#fff, stroke=#f00);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

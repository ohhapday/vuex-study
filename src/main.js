import Vue from 'vue';
import { store } from './store/store';
import router from './routes';

// 별도 파일 분리
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial);

import App from './App';
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
});

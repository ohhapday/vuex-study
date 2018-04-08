import Vue from 'vue';
import {store} from './store/store';
import router from './routes';

import './cssFwork/index';

import App from './App';

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
});

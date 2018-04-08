import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    name: '서정석 짱',
    language: 'javascript',
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});

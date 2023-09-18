import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootAction from './action';
import rootGetters from './getters';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootAction,
  getters: rootGetters,
});

export default store;

import { createStore } from "vuex";

const counterModule = {
    namespaced: true,
    state() {
      return {
        counter: 0,
      };
    },
    mutations: {
      increment(state) {
        state.counter += 2;
      },
      increase(state, payload) {
        state.counter = state.counter + payload.value;
      },
    },
    actions: {
      increment(context) {
        setTimeout(() => {
          context.commit('increment');
        }, 2000);
      },
      increase(context, payload) {
        context.commit('increase', payload);
      },
    },
    getters: {
      finalCouter(stare) {
        return stare.counter * 2;
      },
      normalizedCounter(_, getters) {
        const finalCounter = getters.finalCouter;
        if (finalCounter < 0) return 0;
        if (finalCounter > 100) return 100;
        return finalCounter;
      },
    },
  };
  
  const store = createStore({
    modules: {
      numbers: counterModule
    },
    state() {
      return {
        counter: 0,
        isLogined: false,
      };
    },
    mutations: {
      setAuth(state, payload) {
        state.isLogined = payload.isAuth;
      },
      login(state) {
        state.isLogined = true;
        console.log('state.isLogined', state.isLogined);
      },
      logout(state) {
        state.isLogined = false;
        console.log('state.isLogined', state.isLogined);
      },
    },
    actions: {
      login(context) {
        context.commit('login');
      },
      logout(context) {
        context.commit('logout');
      },
    },
    getters: {
      userIsAuthorized(state) {
        return state.isLogined;
      },
    },
  });

  export default store;
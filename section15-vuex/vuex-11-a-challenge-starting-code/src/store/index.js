import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartModule from './modules/cart';
const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
      console.log('isLoggedIn: ' + state.isLoggedIn);
    },
    logout(state) {
      state.isLoggedIn = false;
      console.log('isLoggedIn: ' + state.isLoggedIn);
    },
  },
});

export default store;

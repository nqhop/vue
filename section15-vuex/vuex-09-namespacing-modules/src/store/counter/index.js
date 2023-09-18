import counterMutations from "./mutations";
import counterAction from "./action";
import counterGetters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterAction,
  getters: counterGetters,
};

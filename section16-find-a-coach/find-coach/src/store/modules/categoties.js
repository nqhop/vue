export default {
  namespaced: true,
  state() {
    return {
      categories: [
        { id: "c1", name: "Fontend" },
        { id: "c2", name: "Backend" },
        { id: "c3", name: "Career" },
      ],
      checkedCategories: ['c1', 'c2', 'c3'],
    };
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    checkedCategories(state) {
      return state.checkedCategories;
    },
  },
  mutations: {
    changeCheckedCategories(state, payload) {
      console.log(payload);
      state.checkedCategories = payload;
    },
  },
};
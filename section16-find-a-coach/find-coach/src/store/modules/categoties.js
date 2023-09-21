export default {
  namespaced: true,
  state() {
    return {
      categories: [
        { id: "c1", name: "Fontend" },
        { id: "c2", name: "Backend" },
        { id: "c3", name: "Career" },
      ],
      checkedCategories: ["c1", "c2", "c3"],
      colors: [],
    };
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    checkedCategories(state) {
      return state.checkedCategories;
    },
    colors(state) {
      return state.colors;
    },
    colorsById: (state) => (id) => {
      return state.colors.find((item) => item.id == id);
    },
    getNameById: (state) => (id) => {
      // return new Promise((resolve) => {
      //   state.categories.forEach((element) => {
      //     if (element.id == id) resolve(element.name);
      //   });
      // });
      return state.categories.find((item) => item.id === id).name;
    },
  },
  mutations: {
    changeCheckedCategories(state, payload) {
      console.log(payload);
      state.checkedCategories = payload;
    },
    setColors(state, payload) {
      state.colors = payload;
    },
  },
};

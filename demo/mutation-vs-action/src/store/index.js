import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      books: [
        { id: "b1", name: "Enterprice system development" },
        { id: "b2", name: "micro service" },
      ],
      authors: [
        { id: "a1", name: "Alex" },
        { id: "a2", name: "Linkly" },
      ],
    };
  },
  getters: {
    books(state) {
      setTimeout(() => {
        return state.books;
      }, 3000);
    },
    authors(state) {
      return state.authors;
    },
  },
  mutations: {
    books(state) {
      return state.books;
    },
  },
  actions: {
    getBooks(context) {
      context.commit("books");
    },
  },
});
export default store;

import { createStore } from "vuex";
import categoties from "./modules/categoties";
import coaches from "./modules/coaches";
import requests from "./modules/requests";

const store = createStore({
  modules: {
    categoties: categoties,
    coaches: coaches,
    requests: requests,
  },
  state() {
    return {
      globalColor: [
        "#7b81ec",
        "#3bd1d3",
        "#fa80d2",
        "#fed757",
        "#8ce0f1",
        "#79f391",
        "#525a69",
        "#898dda",
      ],
    };
  },
  getters: {
    globalColor(state) {
      return state.globalColor;
    },
  },
});

export default store;

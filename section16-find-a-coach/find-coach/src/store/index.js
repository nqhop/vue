import { createStore } from "vuex";
import categoties from "./modules/categoties";
import coaches from "./modules/coaches";

const store = createStore({
  modules: {
    categoties: categoties,
    coaches: coaches,
  },
});

export default store;

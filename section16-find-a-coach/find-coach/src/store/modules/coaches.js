export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Max",
          lastName: "Muller",
          desc: "AWS certified, Professional Web Developer and Instructor",
          rate: 5.0,
          image: "instructor1.jpg",
          categories: ["c1", "c2", "c3"],
        },
        {
          id: "c2",
          firstName: "Angela",
          lastName: "Ya",
          desc: "Developer and Lead Instructor",
          rate: 4.7,
          image: "instructor1.jpg",
          categories: ["c1", "c2", "c3"],
        },
      ],
    };
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    categories: (state) => (id) => {
      console.log("demo");
      console.log(state)
      console.log("payload" + id);
    },

    // getDataById: (state, getters, rootState) => (id) => {
    //   // Access state, getters, rootState, and additional data
    //   return state.data.find(item => item.id === id && item.category === rootState.category);
  },
};

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
          categories: ["c2", "c3"],
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
      console.log("payload:" + id);
      return new Promise((resolve) => {
        setTimeout(() => {
          let data = ["cc"];
          state.coaches.forEach((element) => {
            if (element.id == id) {
              data = element.categories;
            }
          });
          resolve(data);
        }, 0);
      });
    },
    categoriesType2: (state) => (id) => {
      return state.coaches.find((item) => item.id === id).categories;
    },
  },
};

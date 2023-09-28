export default {
  namespaced: true,
  state() {
    return {
      requests: [{ id: "1", email: "test@gmail.com", message: "DOM message" }],
    };
  },
  getters: {
    requestsMessageEmail(state) {
      return state.requests;
    },
  },
  mutations: {
    addRequests(state, payload) {
      console.log("addRequests");
      state.requests.push({
        id: new Date().toISOString(),
        email: payload.email,
        message: payload.message,
      });
    },
  },
};

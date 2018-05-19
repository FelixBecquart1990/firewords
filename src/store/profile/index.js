export default {
  state: {
    modalProfile: false
  },
  mutations: {
    SET_MODAL_PROFILE(state, payload) {
      state.modalProfile = payload;
    }
  },
  getters: {
    modalProfile(state) {
      return state.modalProfile
    }
  }
};

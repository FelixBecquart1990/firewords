
export default {
  state: {
    hand: { page:'',top: 200, right: null, bottom: null, left: 55 }
  },
  mutations: {
    SET_HAND(state, payload) {
      state.hand = payload
    }
  },
  getters: {
    hand(state) {
      return state.hand
    },
  }
}


export default {
  state: {
    speed: 5.2
  },
  mutations: {
    SET_SPEED(state, payload) {
      state.speed = payload
    }
  },
  actions: {
    faster({ commit, state }) {
      if (state.speed > 0.3){
        commit("SET_SPEED", Math.round(10*state.speed)/10 - 1)
      }
    },
    initialSpeed({ commit, state }) {
      commit("SET_SPEED", 5.2)
    }
  },
  getters: {
    speed(state){
      return state.speed
    }
  }
}

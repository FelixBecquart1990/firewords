export default {
  state: {
    modalRewards:false
  },
  mutations: {
    SET_MODAL_REWARDS(state, payload) {
      state.modalRewards = payload;
    },
  },
  actions: {
    rewards({ commit, state, getters, dispatch }) {
      //console.log("rewards");
      // unlock battle mode
      /*if ( !getters.user.rewards.battleMode.unloked && getters.user.bestCombo >= 5 ) {
        commit("SET_MODAL_REWARDS", true);
        commit("SET_UNLOCK_BATTLE_MODE");
        commit("SET_HAND", { page:'Home',top: 200, right: null, bottom: null, left: 55 })
      }*/
      // futur rewards
      //console.log("end rewards");
    }
  },
  getters: {
    modalRewards(state) {
      return state.modalRewards;
    },

  }
};

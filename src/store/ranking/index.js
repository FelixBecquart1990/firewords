import * as firebase from 'firebase'

export default {
  state: {
    users : []
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload
    }
  },
  actions: {
    fetchUsersData({ commit, state }, payload) {
      firebase.database().ref('/users').orderByChild('lastGameDate').limitToLast(30).once('value').then(data => {
        let obj = data.val()
        let array = Object.values(obj).sort(function(a,b) {return (a.elo < b.elo) ? 1 : ((b.elo < a.elo) ? -1 : 0)} )
        commit('SET_USERS', array)
      })
    },
    fetchAllUsersData({ commit, state }, payload) {
      firebase.database().ref('/users').once('value').then(data => {
        let obj = data.val()
        let array = Object.values(obj).sort(function(a,b) {return (a.bestCombo < b.bestCombo) ? 1 : ((b.bestCombo < a.bestCombo) ? -1 : 0)} )
        commit('SET_USERS', array)
      })
    },
  },
  getters: {
    users(state) {
      return state.users
    }
  }
}

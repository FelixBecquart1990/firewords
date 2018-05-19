import * as firebase from "firebase";

export default {
  state: {
    user: {
      battleInProgress: [],
      uid: null,
      displayName: "user",
      elo: 1000,
      lastGameDate: 0,
      bestCombo: 0,
      firstPlay: true,
      lastMistakes: ["empty"],
      settings: { visited: true, version: "", newVersion: false },
      profile: { visited: true },
      notifications: false,
      language: "en-fr",
      rewards: { battleMode: { unloked :false } }
    }
  },
  mutations: {
    SET_SETTINGS_VISITED(state, payload) {
      state.user.settings.visited = payload;
    },
    SET_PROFILE_VISITED(state, payload) {
      state.user.profile.visited = payload;
    },
    SET_SETTINGS_VERSION(state, payload) {
      state.user.settings.version = payload;
    },
    SET_SETTINGS_NEW_VERSION(state, payload) {
      state.user.settings.newVersion = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_UID(state, payload) {
      state.user.uid = payload;
    },
    SET_DISPLAY_NAME(state, payload) {
      state.user.displayName = payload;
    },
    SET_BEST_COMBO(state, payload) {
      state.user.bestCombo = payload;
    },
    SET_FIRST_PLAY(state, payload) {
      state.user.firstPlay = payload;
    },
    SET_NOTIFICATIONS(state, payload) {
      state.user.notifications = payload;
    },
    SET_LAST_MISTAKES(state, payload) {
      state.user.lastMistakes = payload;
    },
    SET_LANGUAGE(state, payload) {
      state.user.language = payload;
    },
    SET_LAST_GAME_DATE(state, payload) {
      state.user.lastGameDate = payload;
    },
    SET_NAME(state, payload) {
      state.user.displayName = payload;
    },
    SET_ELO(state, payload) {
      state.user.elo = payload;
    },
    SET_BATTLE_IN_PROGRESS(state, payload) {
      var mergeBattles = Object.assign({}, state.user.battleInProgress, payload)
      state.user.battleInProgress = mergeBattles
      //console.log("BATTLES MERGED")
      //console.log(state.user.battleInProgress)
    },
  },
  actions: {
    lastMistakes({ commit, state }, payload) {
      let updatedLastMistakesArray = state.user.lastMistakes;
      state.user.lastMistakes.length >= 50
        ? (updatedLastMistakesArray.pop(),
          updatedLastMistakesArray.push(payload))
        : updatedLastMistakesArray.push(payload);
      commit("SET_LAST_MISTAKES", updatedLastMistakesArray);
    },
    /*autoSignIn({ commit, state }, payload) {
      commit('SET_USER', {
        payload
      })
      //console.log(payload.metadata.lastSignInTime)
    },*/
    createAnonymousUser({ commit, state }) {
      firebase
        .auth()
        .signInAnonymously()
        .then(data => {
          commit("SET_FIRST_PLAY", false);
          commit("SET_UID", data.uid);
          firebase
            .database()
            .ref("users/" + data.uid)
            .update(state.user);
        });
    },
    fetchUserData({ commit, state, dispatch }, payload) {
      //console.log("Fetch user's data");
      firebase
        .database()
        .ref("/users/" + payload.uid)
        .once("value")
        .then(data => {
          commit("SET_USER", data.val());
          dispatch("checkLastVersion", "user");
          dispatch("updateUserData")
          commit("SET_SPEED", 30);
          commit("SET_SPLASH_SCREEN", false);
        });
    },
    updateUserData({ commit, getters, state, dispatch }, payload) {
      //console.log("Update user's data");
      firebase
      .database()
      .ref("users/" + getters.user.uid)
      .on("child_changed", snapshot => {
        //console.log(snapshot.key);
        //console.log(snapshot.val());
        if (snapshot.key == "elo") {
          commit("SET_ELO", snapshot.val());
        }
        if (snapshot.key == "battleInProgress") {
          commit("SET_BATTLE_IN_PROGRESS", snapshot.val());
          commit("SET_SNACKBAR", "New battle available");
        }
      });
    },
    saveUserData({ commit, state }) {
      //console.log("User's data saved !");
      firebase
        .database()
        .ref("users/" + state.user.uid)
        .update(state.user);
      //console.log(state.user)
    },
    logout({ commit }) {
      firebase.auth().signOut();
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    currentUser(state) {
      return state.user;
    }
  }
};

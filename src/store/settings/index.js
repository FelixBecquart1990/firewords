import * as firebase from "firebase";
export default {
  state: {
    loading: false,
    version: null,
    splashScreen: true,
    modalSettings: false,
    modalPseudo: false,
    modalBattle: false,
    cloudDirection: "horizontal",
    rocketPosition: 41,
    fireSize:1,
    fireTimer:null,
    displayQuestionAndAnswers: false
  },
  mutations: {
    SET_VERSION(state, payload) {
      state.version = payload;
    },
    SET_SPLASH_SCREEN(state, payload) {
      state.splashScreen = payload;
    },
    SET_MODAL_SETTINGS(state, payload) {
      state.modalSettings = payload;
    },
    SET_MODAL_PSEUDO(state, payload) {
      state.modalPseudo = payload;
    },
    SET_MODAL_BATTLE(state, payload) {
      state.modalBattle = payload;
    },
    SET_CLOUD_DIRECTION(state, payload) {
      state.cloudDirection = payload;
    },
    SET_ROCKET_POSITION(state, payload) {
      state.rocketPosition = payload;
    },
    SET_FIRE_SIZE(state, payload) {
      state.fireSize = payload;
    },
    SET_FIRE_TIMER(state, payload) {
      state.fireTimer = payload;
    },
    SET_DISPLAY_QUESTION_AND_ANSWERS(state, payload) {
      state.displayQuestionAndAnswers = payload;
    }
  },
  actions: {
    checkLastVersion({ commit, getters }, payload) {
      firebase
        .database()
        .ref("/version/")
        .once("value")
        .then(data => {
          commit("SET_VERSION", data.val());
          if (
            payload == "user" &&
            getters.version != getters.user.settings.version
          ) {
            //user already signin
            commit("SET_SETTINGS_VISITED", false);
          } else {
            //new user
            commit("SET_SETTINGS_VERSION", getters.version);
          }
        });
    },
    getLastVersion({ commit, getters, dispatch }) {
      console.log("version pas encore à jour");
      commit("SET_SETTINGS_VERSION", getters.version);
      commit("SET_SETTINGS_NEW_VERSION", true);
      commit("SET_SETTINGS_VISITED", true);
      firebase
        .database()
        .ref("users/" + getters.user.uid)
        .update(getters.user)
        .then(data => {
          console.log("Reload page");
          location.reload();
        });
    },
    unsubscribe({ commit, state }) {
      commit("setSuccess", true),
        setTimeout(function() {
          commit("setSuccess", false);
        }, 3000);
    }
  },
  getters: {
    splashScreen(state) {
      return state.splashScreen;
    },
    modalSettings(state) {
      return state.modalSettings;
    },
    modalPseudo(state) {
      return state.modalPseudo;
    },
    modalBattle(state) {
      return state.modalBattle;
    },
    version(state) {
      return state.version;
    },
    cloudDirection(state) {
      return state.cloudDirection;
    },
    rocketPosition(state) {
      return state.rocketPosition;
    },
    fireSize(state) {
      return state.fireSize;
    },
    fireTimer(state) {
      return state.fireTimer;
    },
    displayQuestionAndAnswers(state) {
      return state.displayQuestionAndAnswers;
    }
  }
};

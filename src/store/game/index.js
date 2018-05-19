import * as firebase from "firebase";

export default {
  state: {
    playing: false,
    endGame: false,
    score: 0,
    timer: null,
    timerPerAnswer: null,
    combo: 0
  },
  mutations: {
    SET_PLAYING(state, payload) {
      state.playing = payload;
    },
    SET_END_GAME(state, payload) {
      state.endGame = payload;
    },
    SET_SCORE(state, payload) {
      state.score = payload;
    },
    SET_COMBO(state, payload) {
      state.combo = payload;
    },
    SET_TIMER(state, payload) {
      state.timer = payload;
    },
    SET_TIMER_PER_ANSWER(state, payload) {
      state.timerPerAnswer = payload;
    }
  },
  actions: {
    startGame({ commit, state, getters, dispatch }) {
      //console.log("startGame");
      //initialization
      dispatch("initialization");
      setTimeout(function() {
        commit("SET_ROCKET_POSITION", 250);
      }, 250);
      //launch after 2.5 sec
      setTimeout(function() {
        dispatch("loadingQuestionAndAnswers");
        commit("SET_DISPLAY_QUESTION_AND_ANSWERS", true);
      }, 1200);
      //end game after 30 sec
      /*commit(
        "SET_TIMER",
        setTimeout(function() {
          dispatch("gameOver");
        }, 30000)
      );*/

      commit("SET_CLOUD_DIRECTION", "vertical");
      commit("SET_SPEED", 3);

      //console.log("end startGame");
    },
    initialization({ commit, state, getters, dispatch }) {
      //console.log("initialization");
      commit("SET_PLAYING", true);
      commit("SET_SCORE", 0);
      commit("SET_COMBO", 0);
      commit("SET_FIRE_SIZE", 1);
      commit("SET_TIMER_PER_ANSWER", clearTimeout(getters.timerPerAnswer));
      //console.log("end initialization");
    },
    gameOver({ commit, state, getters, dispatch }) {
      dispatch("hideSnackbarForSecondes");
      //console.log("gameOver");
      //dispatch("initialSpeed"); //speed of background
      //dispatch("soundLose");
      //navigator.vibrate(200)
      commit("SET_TIMER", clearTimeout(state.timer));
      commit("SET_TIMER_PER_ANSWER", clearTimeout(getters.timerPerAnswer));
      commit("SET_LAST_GAME_DATE", new Date().getTime());
      //dispatch("lastMistakes", getters.lastMistake);
      commit("SET_END_GAME", true);
      commit("SET_PLAYING", false);
      commit("SET_CLOUD_DIRECTION", "horizontal");
      commit("SET_SPEED", 30);
      commit("SET_ROCKET_POSITION", 41);
      commit("SET_DISPLAY_QUESTION_AND_ANSWERS", false);
      dispatch("rewards");

      if (getters.battleState == "revange") {
        //console.log("revange");
        dispatch("elo");
      } else {
        dispatch("updateBattlesOpponent");
        dispatch("updateBattlesUser");
      }

      //console.log("end gameOver");
    },
    checkingCombo({ commit, getters }) {
      if (getters.combo > getters.user.bestCombo) {
        commit("SET_BEST_COMBO", getters.combo);
      }
      let currentCombo = getters.combo + 1;
      commit("SET_COMBO", currentCombo);
    },
    checkingAnswer({ commit, state, getters, dispatch }, payload) {
      //console.log("checkingAnswer");
      if (payload == getters.questionAndAnswers.answer) {
        //dispatch("soundSelect");
        //dispatch("startTimer");
        dispatch("checkingCombo");
        commit("SET_SCORE", getters.score + 1);
        commit("SET_FIRE_SIZE", 1.5);

        commit("SET_FIRE_TIMER", clearTimeout(getters.fireTimer));
        commit(
          "SET_FIRE_TIMER",
          setTimeout(function() {
            commit("SET_FIRE_SIZE", 0);
          }, 2000)
        );
        commit("SET_TIMER_PER_ANSWER", clearTimeout(getters.timerPerAnswer));
        commit(
          "SET_TIMER_PER_ANSWER",
          setTimeout(function() {
            dispatch("gameOver");
          }, 3000)
        );
        return dispatch("loadingQuestionAndAnswers");
      } else {
        dispatch("gameOver");
      }
      //console.log("end checkingAnswer");
    }
  },
  getters: {
    playing(state) {
      return state.playing;
    },
    endGame(state) {
      return state.endGame;
    },
    score(state) {
      return state.score;
    },
    combo(state) {
      return state.combo;
    },
    timerPerAnswer(state) {
      return state.timerPerAnswer;
    }
  }
};

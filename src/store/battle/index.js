import * as firebase from "firebase";

export default {
  state: {
    opponent: null,
    battleState: null,
    addToElo: { user: 0, opponent: 0 }
  },
  mutations: {
    SET_OPPONENT(state, payload) {
      state.opponent = payload;
    },
    SET_BATTLE_STATE(state, payload) {
      state.battleState = payload;
    },
    SET_ADD_TO_ELO(state, payload) {
      state.addToElo = payload;
    },
    SET_OPPONENT_ELO(state, payload) {
      state.opponent.elo = payload;
    }
  },
  actions: {
    elo({ commit, getters, state, dispatch }) {
      let elo = 0;
      let playerAResult, playerBResult; // 0 if lose or 1 if win
      if (getters.score > getters.opponent.score) {
        playerAResult = 1;
        playerBResult = 0;
      } else if (getters.score < getters.opponent.score) {
        playerAResult = 0;
        playerBResult = 1;
      } else {
        if (getters.user.elo > getters.opponent.elo) {
          playerAResult = 0;
          playerBResult = 1;
        } else if (getters.user.elo < getters.opponent.elo) {
          playerAResult = 1;
          playerBResult = 0;
        } else {
          playerAResult = 1;
          playerBResult = 0;
        }
      }

      let playerA = getters.user.elo;
      let playerB = getters.opponent.elo;

      //Gets expected score for first parameter
      let expectedScoreA = 1 / (1 + Math.pow(10, (playerB - playerA) / 400));
      let expectedScoreB = 1 / (1 + Math.pow(10, (playerA - playerB) / 400));

      //update score, 1 if won 0 if lost
      playerA = Math.round(playerA + 32 * (playerAResult - expectedScoreA));
      playerB = Math.round(playerB + 32 * (playerBResult - expectedScoreB));


      commit("SET_ADD_TO_ELO", {
        user: playerA - getters.user.elo,
        opponent: playerB - getters.opponent.elo
      });
      commit("SET_ELO", playerA);

      let eloToUpdate = {};

      //fetch elo from opponent
      firebase
        .database()
        .ref("/users/" + getters.opponent.uid)
        .child("elo")
        .once("value")
        .then(data => {
          commit("SET_OPPONENT_ELO", data.val());
        })
        .then(
          (elo = getters.opponent.elo + getters.addToElo.opponent),
          (eloToUpdate = { elo }),
          firebase
            .database()
            .ref("users/" + getters.opponent.uid)
            .update(eloToUpdate)
        )
        .then(
          //THEN update battle data
          dispatch("updateBattlesOpponent"),
          dispatch("updateBattlesUser")
        );
    },
    updateBattlesOpponent({ commit, getters, state }) {
      let opponentBattleData = {
        score: getters.score,
        date: new Date().getTime(),
        uid: getters.user.uid,
        elo: getters.user.elo,
        state: getters.battleState,
        displayName: getters.user.displayName,
        situation: "received",
        addToElo: getters.addToElo.opponent
      };
      firebase
        .database()
        .ref("users/" + getters.opponent.uid + "/battleInProgress")
        .child(getters.user.uid)
        .update(opponentBattleData);
    },
    updateBattlesUser({ commit, dispatch, getters, state }) {
      let battleInProgress = {};
      battleInProgress[getters.opponent.uid] = {
        score: getters.score,
        date: new Date().getTime(),
        uid: getters.opponent.uid,
        elo: getters.opponent.elo,
        state: getters.battleState,
        displayName: getters.opponent.displayName,
        situation: "sent",
        addToElo: getters.addToElo.user
      };
      commit("SET_BATTLE_IN_PROGRESS", battleInProgress);
      dispatch("saveUserData");
    },
    refreshBattles({ commit, dispatch, getters, state }) {
      dispatch("fetchUsersData");
      firebase
        .database()
        .ref("/users/" + getters.user.uid)
        .once("value")
        .then(data => {
          commit("SET_USER", data.val());
        });
    }
  },
  getters: {
    opponent(state) {
      return state.opponent;
    },
    battleState(state) {
      return state.battleState;
    },
    addToElo(state) {
      return state.addToElo;
    }
  }
};

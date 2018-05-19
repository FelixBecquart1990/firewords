import listOfWords from './listOfWords'

export default {
  modules: {
    listOfWords: listOfWords,
  },
  state: {
    questionAndAnswers: "Q&A",
    lastMistake: null,
  },
  mutations: {
    SET_QUESTION_AND_ANSWERS(state, payload) {
      state.questionAndAnswers = payload
    },
    SET_LAST_MISTAKE(state, payload) {
      state.lastMistake = payload
    }
  },
  actions: {
    /*
    coefficientOfDifficulty({ commit, getters, dispatch }) {
      // computation of the coefficient of difficluty of the word regarding user's level and current combo
      // return figure between 0 and 1 
      let coefficientOfDifficulty = Math.random()
      console.log("ok")
      return coefficientOfDifficulty

    },*/
    loadingQuestionAndAnswers({ commit, dispatch, getters }) {
      //console.log("loadQuestionAndAnswer")

      // computation of the coefficient of difficluty of the word regarding user's level (fast) and current combo (far)
      // return figure between 0 and 1 
      let coefficientOfDifficulty = Math.random()
      let language = getters.user.language
      let words = getters.words
      let fork = 5
      let question = Math.floor(coefficientOfDifficulty * words.length) - fork
      if (question < 0) { question = 0 }
      commit('SET_LAST_MISTAKE', words[question])
      let answer = question + Math.floor(Math.random() * fork) + 1
      let random = Math.floor(Math.random() * 2)
      let questionAndAnswers = {}

      if (language == "en-fr") {
        if (random == 1) {
          questionAndAnswers = {
            "question": words[question].en, "answer1": words[question].fr, "answer2": words[answer].fr, "answer": words[question].fr
          }
        } else {
          questionAndAnswers = {
            "question": words[question].en, "answer2": words[question].fr, "answer1": words[answer].fr, "answer": words[question].fr
          }
        }
      } else if (language == "es-fr") {
        if (random == 1) {
          questionAndAnswers = {
            "question": words[question].es, "answer1": words[question].fr, "answer2": words[answer].fr, "answer": words[question].fr
          }
        } else {
          questionAndAnswers = {
            "question": words[question].es, "answer2": words[question].fr, "answer1": words[answer].fr, "answer": words[question].fr
          }
        }
      } else if (language == "fr-vn") {
        if (random == 1) {
          questionAndAnswers = {
           "question": words[question].fr, "answer1": words[question].vn, "answer2": words[answer].vn, "answer": words[question].vn
          }
        } else {
          questionAndAnswers = {
            "question": words[question].fr, "answer2": words[question].vn, "answer1": words[answer].vn, "answer": words[question].vn
          }
        }
      }      
      //console.log("end loadQuestionAndAnswer")
      return commit('SET_QUESTION_AND_ANSWERS', questionAndAnswers)
    }
  },
  getters: {
    lastMistake(state) {
      return state.lastMistake
    },
    questionAndAnswers(state) {
      return state.questionAndAnswers
    },
    questionTimer(state) {
      return state.questionTimer
    }
  }
}

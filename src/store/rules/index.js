import * as firebase from "firebase";

export default {
  state: {
    languages: ["en-fr", "es-fr", "fr-vn"]
  },
  getters: {
    languages(state){
      return state.languages
    }
  }
};

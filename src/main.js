// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";

import App from "./App";
import * as firebase from "firebase";
import router from "./router";
import { store } from "./store";

import VueAnimateNumber from "vue-animate-number";
Vue.use(VueAnimateNumber);

import SocialSharing from "vue-social-sharing";
Vue.use(SocialSharing);

import VueClipboards from "vue-clipboards";
Vue.use(VueClipboards);

Vue.use(Vuetify, {
  theme: {
    primary: "#f1be2a",
    secondary: "#b0bec5",
    accent: "#244c70",
    error: "#b71c1c"
  }
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBhg60ZCj7TQ9rm5e-MUhSqQeMw1Oa_6R4",
      authDomain: "playmoretolearn.firebaseapp.com",
      databaseURL: "https://playmoretolearn.firebaseio.com",
      projectId: "playmoretolearn",
      storageBucket: "playmoretolearn.appspot.com",
      messagingSenderId: "665967081993"
    });
    // banner
    let self = this;
    window.addEventListener("beforeinstallprompt", function(event) {
      event.preventDefault();
      self.$store.commit("SET_ADD_TO_HOMESCREEN", event);
      return false;
    });
    // auth
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //console.log("User is signed in")
        //console.log(user)
        this.$store.dispatch("fetchUserData", user).then(data => {});
        //this.$router.push("/favorite");
      } else {
        console.log("no user");
        this.$store.commit("SET_SPEED", 30);
        this.$store.dispatch("checkLastVersion");
        this.$store.commit("SET_SPLASH_SCREEN", false);
        //this.$store.dispatch("createAnonymousUser")
        //localStorage.clear();
        //this.$store.dispatch('fetchData')
      }
    });
  }
});

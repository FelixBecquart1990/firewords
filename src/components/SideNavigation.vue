<template>
<div style="position:fixed;top:15px;left:15px">
  <div v-if="!user.firstPlay" @click="select()" style="display:flex;flex-direction:column;align-items:center;">
      
    <transition name="bounce">
      <div v-if="!playing && !endGame" @click="openModalProfile" style="cursor: pointer;" class="button-profile">
        <div v-if="user.profile.visited == false" class="chips-profile"></div>
      </div>
    </transition>
    <transition name="bounce">
      <router-link v-if="!playing && !endGame"  to="/ranking" class="button-ranking" style="cursor: pointer;z-index:2;">
      </router-link>
    </transition>
    <transition name="bounce">
      <div v-if="!playing && !endGame && notYetAddedToHomescreen" @click="dialog = true" class="button-add" style="z-index:2;margin-top:8px">
      </div>
    </transition>
  </div>

      <v-dialog v-model="dialog" max-width="290">
      <v-card class="color-back">
        <v-card-title class="headline" style="color:#fff">Add Firewords to your home screen and get a bonus of 25xp!</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" flat="flat" @click.native="dialog = false">later...</v-btn>
          <v-btn color="secondary" flat="flat" @click.native="dialog = false" @click="addToHomescreen()">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideNavigation",
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["user", "endGame", "playing"]),
    notYetAddedToHomescreen() {
      return this.$store.getters.addToHomescreen;
    }
  },
  methods: {
    addToHomescreen() {
      let self = this;
      if (this.notYetAddedToHomescreen) {
        this.notYetAddedToHomescreen.prompt();
        this.notYetAddedToHomescreen.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome);
          if (choiceResult.outcome === "dismissed") {
            console.log("User cancelled installation");
          } else {
            console.log("User accepted installation");
            self.$store.dispatch("addToHomescreen");
          }
        });
        this.$store.commit("SET_ADD_TO_HOMESCREEN", null);
      }
    },
    openModalProfile() {
      this.$store.commit("SET_MODAL_PROFILE", true);
    },
    select() {
      this.$store.dispatch("soundSelect");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chips-profile {
  background: url("../../static/img/sprite-2.svg") no-repeat -275px -60px;
  width: 19px;
  height: 19px;
  position: relative;
  right: -40px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-ranking {
  background: url("../../static/img/sprite-2.svg") no-repeat -85px -33px;
  width: 53px;
  height: 48px;
  transition: linear 0.3s;
}

.button-add {
  background: url("../../static/img/sprite-2.svg") no-repeat -24px -17px;
	width: 47px;
	height: 70px;
  transition: linear 0.3s;
}
.button-profile:active,
.button-ranking:active {
  transform: scale(1.1);
}

.bouncer {
  animation-name: bounce-in;
  animation-duration: 0.5s;
}

.button-profile {
  background: url("../../static/img/sprite-2.svg") no-repeat -374px -28px;
  width: 58px;
  height: 61px;
  margin-bottom: 15px;
  transition: linear 0.3s;
}

/*{border:solid 1px white}*/
</style>

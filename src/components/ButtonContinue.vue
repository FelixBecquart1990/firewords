<template>
  <v-layout>

    <v-flex @click="stopGame()" style="cursor:pointer;height:400px;position:fixed;bottom:0px;width:100%">
      <div class="play-button">Press to continue</div>
    </v-flex>

    
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonContinue",
  methods: {
    stopGame() {
      this.$store.dispatch("soundSelect");
      this.$store.commit("SET_END_GAME", false);
    }
  }
};
</script>

<style scoped>
* {
  /*border:solid 1px red*/
}
.play-button {
  text-align: center;
  font-size: 25px;
  font-family: primary;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 35px;
  animation: appear 2s, blinker 2s infinite;
  opacity: 0;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blinker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<template>
  <v-layout>

    <v-flex @click="startGame()" style="cursor:pointer;height:400px;position:fixed;bottom:0px;width:100%">
      <div class="play-button">Press to play</div>
    </v-flex>


    <v-dialog v-model="dialogPlay" max-width="500" >
      <v-card @click="dialogPlay = false" style="position:relative; background-color:#244C70;border-radius:6px" class="square pt-4 pb-5">
        <div v-if="!next">
          <Pseudo style="margin-bottom:30px" ref="pseudo"/>
          <Language style="margin-bottom:30px" ref="language"/>
          <div @click="next = !next">
            <ButtonStandard ref="buttonStandard" text="Next"/>
          </div>
        </div>
        <div v-else>
          <div style="font-size:25px" class="pt-4 h2-dark">Only 3 seconds</div>
          <div style="font-size:28px" class="pb-4 h2-dark">to translate</div>
          <div @click="startGame()">
            <ButtonStandard ref="buttonStandard" text="Play"/>
          </div>
        </div>
      </v-card>
    </v-dialog>
    
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonPlay",
  data() {
    return {
      dialogPlay: false,
      next: false
    };
  },
  components: {
    ButtonStandard: () => import("@/components/ButtonStandard"),
    Language: () => import("@/components/Language"),
    Pseudo: () => import("@/components/Pseudo")
  },
  computed: {
    ...mapGetters(["playing", "user", "score", "timePerAnswer"])
  },
  methods: {
    startGame() {
      this.$store.dispatch("soundSelect");
      if (this.user.firstPlay) {
        this.dialogPlay = true;
        this.$store.dispatch("createAnonymousUser");
        this.$store.commit("SET_FIRST_PLAY", false);
      } else {
        this.$store.commit("SET_MODAL_BATTLE", true);
      }
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

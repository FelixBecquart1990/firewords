<template>
<div style="width:100%;height:100vh;display: flex; display: flex; align-items: center; align-items: center;">
<div v-if="splashScreen" style="width:100%">
  <SplashScreen ref="splashScreen"/>
</div>
<div v-else style="width:100%;">

<Background ref="background" :animation="cloudDirection"/>
<Ground home="true" position="bottom" ref="ground"/>

  <Game ref="game"/>


  <transition name="bounce"><ButtonSettings v-if="!playing && !endGame" ref="buttonSettings"/></transition>
  
  <SideNavigation ref="sideNavigation"/>

  <ModalNewVersion ref="modalNewVersion"/>
  <ModalSettings ref="modalSettings"/>
  <ModalProfile ref="modalProfile"/>
  <ModalBattle ref="modalBattle"/>
  <ModalRewards ref="modalRewards"/>

</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import * as firebase from "firebase";

export default {
  name: "Home",
  components: {
    SideNavigation: () => import("@/components/SideNavigation"),
    Ground: () => import("@/components/Ground"),
    Game: () => import("@/components/Game"),
    ButtonSettings: () => import("@/components/ButtonSettings"),
    Background: () => import("@/components/Background"),
    ModalNewVersion: () => import("@/components/ModalNewVersion"),
    ModalSettings: () => import("@/components/ModalSettings"),
    ModalBattle: () => import("@/components/ModalBattle"),
    ModalProfile: () => import("@/components/ModalProfile"),
    ModalRewards: () => import("@/components/ModalRewards"),
    SplashScreen: () => import("@/components/SplashScreen")
  },
  computed: {
    ...mapGetters([
      "splashScreen",
      "playing",
      "endGame",
      "modalSettings",
      "cloudDirection"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*{border:solid 1px red}*/

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.bounce-play-button-enter-active {
  animation: bounce-in 0.5s;
}

.slide-fade-enter-active {
  animation: appear 1s;
}
.slide-fade-leave-active {
  animation: appear 0s reverse;
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
</style>

<template>
  <div>
    <div v-if="!splashScreen && !playing && !endGame" class="light"></div>
    <div :class="{ 'color': playing || endGame}"></div>
    <div :class="{'opacity': playing || endGame }">
      <div :class="{ 'cloud-diagonal':animation=='diagonal', 'cloud-vertical': animation =='vertical', 'cloud-horizontal': animation =='horizontal'}" class="cloud" :style="{ 'animation-duration': speed +'s' }"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Background",
  props: ["activated", "animation"],
  computed: {
    ...mapGetters([
      "playing",
      "endGame",
      "speed",
      "splashScreen",
      "score",
      "displayQuestionAndAnswers"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  animation: colorer 300s;
}

@keyframes colorer {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  5% {
    background-color: rgba(0, 0, 0, 0);
  }
  10% {
    /*background-color: #3D2454;*/
  }
  100% {
    /*background-color: #3D2454;*/
  }
}

.opacity {
  animation: opaciter 300s;
}

@keyframes opaciter {
  0% {
    opacity: 1;
  }
  5% {
    opacity: 1;
  }
  8% {
    /*opacity: 0;*/
  }
  100% {
    /*opacity: 0;*/
  }
}
.light {
  background: url("../../static/img/light.svg") no-repeat -23px -23px;
  width: 158px;
  height: 158px;
  position: fixed;
  bottom: 110px;
  left: calc(50% - 80px);
  animation: rotation infinite linear 8s;
  z-index: 0;
}
@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.cloud {
  background: url("../../static/img/background.svg") repeat;
  width: 300%;
  height: 300%;
  position: fixed;
  top: -1000px;
  opacity: 1;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  z-index: 0;
}
.cloud-vertical {
  -webkit-animation-name: verticalAnimation;
}
.cloud-diagonal {
  -webkit-animation-name: diagonalAnimation;
}
.cloud-horizontal {
  -webkit-animation-name: horizontalAnimation;
}
/*.starsSmall {
  background-image: url("../../static/img/starsSmall.svg");
  background-repeat: repeat;
  width: 100%;
  height: 200%;
  position: fixed;
  top: -800px;
  opacity: 1;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -webkit-animation-name: stars;
  -webkit-animation-duration: 10s;
}*/
@keyframes diagonalAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(800px) translateX(-800px);
  }
}

@keyframes verticalAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(800px);
  }
}

@keyframes horizontalAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-800px);
  }
}
</style>

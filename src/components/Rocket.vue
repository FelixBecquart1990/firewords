<template>
  <div style="position:fixed;bottom:90px;left:calc(50% - 22px)" :class="{ 'bloc-firework-push': playing, 'margin-firework': !playing }">

    <div class="flying-group" :class="{ 'firework-explode': endGame }">
        <div :class="{ 'squashAndStretch': playing }">
          <div class="flying-firework-div">
            <div class="firework"></div>
          </div>
          <div class="flying-waiting">
            <div class="flying" :style="{ 'transform':'scale('+ fireSize +')' }">
              <div :class="{ 'flying-firework-pusher': playing || endGame }"></div>
              <div :class="{ 'flying-firework-push': playing || endGame }"></div>
            </div>
            <div class="waiting">
              <div :class="{ 'waiting-firework-1': !playing && !endGame }"></div>
              <div :class="{ 'waiting-firework-2': !playing && !endGame }"></div>
              <div :class="{ 'waiting-firework-3': !playing && !endGame }"></div>
            </div>
          </div>
        </div>
    </div>
    <div style="position:fixed;right:0px;width:100%;">
      <div style="display:flex;align-items:flex-end;">
        <ButtonPlay v-if="!playing && !endGame" ref="buttonPlay"/>
        <ButtonContinue v-if="endGame" ref="buttonContinue"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Rocket",
  components: {
    ButtonPlay: () => import("@/components/ButtonPlay"),
    ButtonContinue: () => import("@/components/ButtonContinue")
  },
  computed: {
    ...mapGetters(["endGame", "playing", "fireSize"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*{ border:solid 1px red}*/

.flying {
  margin-left: 7px;
  transition: all 1s ease;
  transform-origin: 15px -28px;
}

.squashAndStretch {
  animation: squashAndStretch 1s;
}

@keyframes squashAndStretch {
  40% {
    transform: scaleX(1.5) scaleY(0.5) translateY(90px);
    /*filter: blur(0px);*/
  }
  55% {
    transform: scaleX(1) scaleY(1.3) translateY(-30px);
    /*filter: blur(3px);*/
  }
  100% {
    /*filter: blur(1px);*/
  }
}

.firework {
  background: url("../../static/img/fireworks.svg") no-repeat;
  width: 44px;
  height: 136px;
  background-position: -42px -16px;
}

@keyframes spaceboots {
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(2px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(2px, 1px) rotate(0deg);
  }
}

.flying-firework-push {
  position: absolute;
  transform-origin: 50% 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: url("../../static/img/sprite-2.svg") no-repeat -324px -132px;
  width: 31px;
  height: 49px;
  margin-top: -28px;
  animation: rotating linear 0.2s infinite;
}
.flying-firework-pusher {
  position: absolute;
  transform-origin: 50% 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: url("../../static/img/sprite-2.svg") no-repeat -357px -132px;
  width: 26px;
  height: 50px;
  margin-top: -28px;
  animation: rotating2 linear 0.2s infinite;
}
@keyframes rotating {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
@keyframes rotating2 {
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(450deg);
  }
}

.bloc-firework-push {
  animation-name: spaceboots;
  animation-duration: 1s;
  transform-origin: 50% 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-bottom: 50px;
}

.flying-waiting {
  position: relative;
}

.firework-explode {
  animation-name: explode-fire;
  /*animation-iteration-count: infinite;*/
  animation-timing-function: cubic-bezier(0.1, 0.3, 1);
  animation-duration: 1000s;
}

@keyframes explode-fire {
  0% {
    transform: translateY(0px) scale(1);
  }
  0.1% {
    transform: translateY(-400px) scale(0);
  }
  100% {
    transform: translateY(-400px) scale(0);
  }
}

@keyframes waiting {
  0% {
    opacity: 1;
  }
  35% {
    opacity: 1;
  }
  36% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes waitingg {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  36% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes waitinggg {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  36% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.waiting-firework-1 {
  animation-name: waiting;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: url("../../static/img/sprite-2.svg") no-repeat -344px -102px;
  width: 39px;
  height: 26px;
  margin-top: -27px;
  margin-left: -17px;
}
.waiting-firework-2 {
  animation-name: waitingg;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: url("../../static/img/sprite-2.svg") no-repeat -388px -106px;
  width: 20px;
  height: 25px;
  margin-top: -27px;
  margin-left: 2px;
}
.waiting-firework-3 {
  animation-name: waitinggg;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: url("../../static/img/sprite-2.svg") no-repeat -414px -108px;
  width: 12px;
  height: 19px;
  margin-top: -25px;
  margin-left: 14px;
}
</style>

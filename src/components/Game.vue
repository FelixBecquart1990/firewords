<template>
 
<v-container style="padding:0px;margin:0px;max-width:100%">
  <v-layout row align-center style="height:100%;">
    <v-flex>
      <v-layout style="margin:0px; height:100%;">
        <v-flex xs4 style="position:relative;">
          <Rocket class="rocket-position" :style="{'margin-bottom':rocketPosition+'px'}" ref="rocket"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex>
      <div v-if="displayQuestionAndAnswers" style="position:fixed;bottom:100px;width:100%">
        <transition name="bounce-question"><Question v-if="playing" ref="question"/></transition>
        <div style="display:flex;justify-content:center;align-items:center">
          <transition name="to-left"><ButtonLeft v-if="playing" ref="buttonLeft"/></transition>
          <transition name="to-right"><ButtonRight v-if="playing" ref="buttonRight"/></transition>
        </div>
      </div>
    </v-flex>
  </v-layout>
  <Score v-if="endGame" ref="score"/>
 </v-container>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Rocket: () => import("@/components/Rocket"),
    ButtonLeft: () => import("@/components/ButtonLeft"),
    ButtonRight: () => import("@/components/ButtonRight"),
    Question: () => import("@/components/Question"),
    Score: () => import("@/components/Score")
  },
  computed: {
    ...mapGetters(["playing", "endGame", "rocketPosition", "displayQuestionAndAnswers"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*{border:solid 1px red}*/
.rocket-position {
  transition: all 1.2s ease;
}
.bounce-question-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-question-leave-active {
  opacity: 0;
}

.bounce-play-button-enter-active {
  animation: bounce-in 0.5s;
}

.to-left-enter-active {
  animation: to-left 0.5s;
}
.to-left-leave-active {
  opacity: 0;
}

@keyframes to-left {
  0% {
    transform: translateX(70px);
  }
  50% {
    transform: translateX(0px);
    transform: rotate(10deg);
  }
  100% {
    transform: translateX(0px);
    transform: rotate(0deg);
  }
}

.to-right-enter-active {
  animation: to-right 0.5s;
}
.to-right-leave-active {
  opacity: 0;
}
@keyframes to-right {
  0% {
    transform: translateX(-70px);
  }
  50% {
    transform: translateX(0px);
    transform: rotate(-10deg);
  }
  100% {
    transform: translateX(0px);
    transform: rotate(0deg);
  }
}
</style>

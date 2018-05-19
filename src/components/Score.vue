<template>
  <v-layout v-if="displayQuestionAndAnswers || endGame" row wrap>
    <v-flex>

      <!--template v-if="battleState== 'revange'">
        <h1 v-if="addToElo.user>0">Battle won</h1>
        <h1 v-else>You lose</h1>
        <h1>{{addToElo.user}}</h1>
      </template>
      <template>
        <h2 class="mt-5">
          Combo : 
          <animate-number style="font-family: primary;" from="0" :to="score"></animate-number>
        </h2>
      </template-->
    <template v-if="battleState== 'revange'">
      <v-layout class="score">
        <v-flex v-if="addToElo.user>0">
          <h1>Battle won</h1>
          <h1 class="h1-green">+<animate-number style="font-family: primary;" from="0" :to="addToElo.user"></animate-number></h1>
        </v-flex>
        <v-flex v-else>
          <h1>Battle lost</h1>
          <h1 class="h1-red" style="margin-left:-10px;"><animate-number style="font-family: primary;" from="0" :to="addToElo.user"></animate-number></h1>
        </v-flex>
      </v-layout>
      <v-layout class="vs">
        <v-flex class="xs5">
          <h2>{{user.displayName.split([" "[0]])[0].substring(0,9)}}</h2>
          <h2><animate-number style="font-family: primary;" from="0" :to="score"></animate-number></h2>
        </v-flex>
        <v-flex mt-4 class="xs2">
          <h2>VS</h2>
        </v-flex>
        <v-flex class="xs5">
          <h2>{{opponent.displayName.split([" "[0]])[0].substring(0,9)}}</h2>
          <h2><animate-number style="font-family: primary;" from="0" :to="opponent.score"></animate-number></h2>
        </v-flex>
      </v-layout>
      </template>
      <template v-else>
        <v-layout class="score">
          <v-flex>
            <h1>Battle sent</h1>
          </v-flex>
        </v-layout>
        <v-layout class="vs">
          <v-flex class="xs5">
            <h2>{{user.displayName.split([" "[0]])[0].substring(0,9)}}</h2>
            <h2><animate-number style="font-family: primary;" from="0" :to="score"></animate-number></h2>
          </v-flex>
          <v-flex mt-4 class="xs2">
            <h2>VS</h2>
          </v-flex>
          <v-flex class="xs5">
            <h2>{{opponent.displayName.split([" "[0]])[0].substring(0,9)}}</h2>
            <h2>?</h2>
          </v-flex>
        </v-layout>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Score",
  computed: {
    ...mapGetters([
      "user",
      "score",
      "lastMistakes",
      "playing",
      "endGame",
      "displayQuestionAndAnswers",
      "battleState",
      "addToElo",
      "opponent"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*{border:solid 1px red}*/
.battle {
  background: url("../../static/img/sprite-2.svg") no-repeat -201px -91px;
  width: 54px;
  height: 69px;
  margin-top:8px;
  margin-right:auto;
  margin-left:auto;
  animation: rotating ease-out 2s;
}

@keyframes rotating {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(1440deg);
  }
}

.vs {
  width: 100%;
  position: fixed;
  top: -50px;
  animation: top-to-center 10000s;
}
@keyframes top-to-center {
  0% {
    transform: translateY(0) scale(0.4);
  }
  0.01% {
    transform: translateY(250px) scale(1);
  }
  0.02% {
    transform: translateY(250px) scale(1);
  }
  0.03% {
    transform: translateY(400px) scale(0.7);
  }
  100% {
    transform: translateY(400px) scale(0.7);
  }
}
.score {
  width: 100%;
  position: fixed;
  top: -100px;
  animation: top-to-center-score 10000s;
}
@keyframes top-to-center-score {
  0% {
    transform: translateY(0) scale(0.4);
  }
  0.02% {
    transform: translateY(0px) scale(0.4);
  }
  0.03% {
    transform: translateY(250px) scale(1);
  }
  100% {
    transform: translateY(150px) scale(1);
  }
}

</style>

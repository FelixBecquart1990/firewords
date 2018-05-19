<template>
  <div>
    <div v-if="this.$route.name == hand.page && !splashScreen && !endGame && !playing" class="hand" :style="{'right':hand.right+'px','left':hand.left+'px','bottom':hand.bottom+'px','top':hand.top+'px'}"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Hand",
  computed: {
    ...mapGetters(["splashScreen", "hand", "endGame", "playing"])
  }
};
</script>

<style scoped>
.hand {
  background: url("../../static/img/sprite-2.svg") no-repeat -280px -86px;
  width: 46px;
  height: 47px;
  position: fixed;
  animation: hand 1.5s infinite;
}
@keyframes hand {
  0% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
</style>

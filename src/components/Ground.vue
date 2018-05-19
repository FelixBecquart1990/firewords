<template>
  <div>
    <div class="ground" :class="{'ground-hidden': playing || endGame, 'ground-top': position == 'top', 'ground-bottom': position == 'bottom'}"></div>
    <div class="rocks" :class="{'rocks-hidden': playing || endGame, 'rocks-top': position == 'top', 'rocks-bottom': position == 'bottom'}"></div>
    <div class="grass" :class="{'grass-hidden': playing || endGame, 'grass-top': position == 'top', 'grass-bottom': position == 'bottom'}"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Ground",
  props: ["position", "home"],
  computed: {
    ...mapGetters(["playing", "endGame"])
  }
};
</script>

<style scoped>
.bounce-play-button-enter-active {
  animation: bounce-in 0.5s;
}

.ground {
  background: -webkit-linear-gradient(#ba743e, #895936);
  height: 110px;
  width: 100%;
  position: fixed;
  z-index: 0;
}
.ground-hidden {
  margin-bottom: -500px;
}
.ground-top {
  top: 110px;
  height: 100%;
}
.ground-bottom {
  bottom: 0;
}
.rocks {
  background: url("../../static/img/rocks.svg") repeat;
  height: 110px;
  width: 100%;
  position: fixed;
  z-index: 0;
  opacity: 0.3;
}
.rocks-hidden {
  margin-bottom: -500px;
}
.rocks-top {
  top: 110px;
  height: 100%;
}
.rocks-bottom {
  bottom: 0;
}
.grass {
  background: url("../../static/img/grass.svg") repeat;
  width: 100%;
  height: 59px;
  position: fixed;
  bottom: 105px;
}
.grass-hidden {
  margin-bottom: -500px;
}
.grass-top {
  top: 70px;
}
.grass-bottom {
  bottom: 100px;
}
</style>

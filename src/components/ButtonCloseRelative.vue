<template>
  <div @click="closeModal" class="larger-clickable-area">
    <div style="display:flex;justify-content:flex-end;">
      <router-link to="/" style="padding:30px 20px 30px 30px;cursor: pointer;">
        <div class="button-close"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonCloseRelative",
  computed: {
    ...mapGetters(["modalSettings", "modalProfile", "modalBattle","modalRewards"])
  },
  methods: {
    closeModal() {
      if (this.modalRewards) {
        this.$store.commit("SET_MODAL_REWARDS", false);
      }
      if (this.modalBattle) {
        this.$store.commit("SET_MODAL_BATTLE", false);
      }
      if (this.modalProfile) {
        this.$store.commit("SET_MODAL_PROFILE", false);
        this.$store.commit("SET_PROFILE_VISITED", true);
      }
      if (this.modalSettings) {
        this.$store.commit("SET_MODAL_SETTINGS", false);
        this.$store.commit("SET_SETTINGS_VISITED", true);
      }
    }
  }
};
</script>

<style scoped>
.larger-clickable-area {
  z-index: 1;
  position: absolute;
  top: -50px;
  right: -30px;
  width: 80px;
  transform: scale(0.7);
}
.button-close {
  background: url("../../static/img/sprite-2.svg") no-repeat -159px -33px;
  width: 26px;
  height: 28px;
}
</style>

<template>
    <div v-if="!user.firstPlay" @click="openModalSettings" style="cursor: pointer;" class="button-settings">
      <div v-if="user.settings.visited == false" class="chips-settings"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonSettings",
  methods: {
    openModalSettings() {
      this.$store.commit("SET_MODAL_SETTINGS", true);
    }
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chips-settings {
  background: url("../../static/img/sprite-2.svg") no-repeat -275px -60px;
	width: 19px;
	height: 19px;
  position: relative;
  right: -32px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-settings {
  position: fixed;
  top: 15px;
  right: 15px;
  background: url("../../static/img/sprite-2.svg") no-repeat -205px -25px;
  width: 56px;
  height: 54px;
  transition: linear 0.3s;
}
.button-settings:active {
  transform: scale(1.1);
}
</style>

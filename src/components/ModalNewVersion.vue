<template>
  <v-dialog v-model="modalNewVersion" max-width="350">
    <v-card style="position:relative; background-color:#a0d1f1;border-radius:6px" class="py-4">
      <h2 class="pb-2">Congratulation</h2>
      <div class="stars-container">
      <div class="star"></div>
      <div class="star"></div>
      </div>
      <h4>Firewords is updated</h4>
      <div class="list-feature-container">
        <h4 class="list-feature">- share to recover</h4>
        <h4 class="list-feature">- dashboard created</h4>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalNewVersion",
  computed: {
    modalNewVersion: {
      get() {
        return this.$store.getters.modalNewVersion;
      },
      set() {
        this.$store.commit("SET_SETTINGS_NEW_VERSION", false);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stars-container {
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
}
.star {
  background: url("../../static/img/sprite.svg") no-repeat -557px -154px;
  width: 14px;
  height: 15px;
  margin: 20px;
  margin-top: 10px;
  display: inline-block;
  margin-bottom: 20px;
}
.list-feature-container {
  max-width: 450px;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
}
.list-feature {
  text-align: left;
  margin: 15px 25px 0px 25px;
}
.continue-button {
  width: 250px;
  background-color: #a1d700;
  height: 60px;
  border-radius: 30px;
  margin: 30px -10px;
  -webkit-box-shadow: 0px 5px 15px -1px rgba(101, 127, 5, 1);
  -moz-box-shadow: 0px 15px 0px -1px rgba(101, 127, 5, 1);
  box-shadow: 0px 15px 0px -1px rgba(101, 127, 5, 1);
  color: #17373c;
  font-family: primary;
  font-size: 30px;
  text-shadow: 0px 2px 0px rgba(13, 28, 51, 1);
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  margin-right: auto;
  margin-left: auto;
}
.continue-button:active {
  box-shadow: 0px 0px 0px -1px rgba(101, 127, 5, 1);
  margin-top: 44px;
  margin-bottom: 16px;
}
</style>

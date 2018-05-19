<template>
  <div>
    <div style="font-size:25px" class="pb-2 h2-dark">Enter your pseudo</div>
    <div style="width:90%;margin-right:auto;margin-left:auto">
      <input autofocus v-model="displayName" :maxlength="max"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pseudo",
  data() {
    return {
      max: 20
    };
  },
  computed: {
    ...mapGetters(["user"]),
    displayName: {
      get() {
        if (this.$store.getters.user.displayName == "user") {
          return "";
        } else {
          return this.$store.getters.user.displayName;
        }
      },
      set(value) {
        this.$store.commit("SET_NAME", value);
      }
    }
  }
};
</script>

<style scoped>
input {
  border: solid 1px #143751;
  border-bottom: solid 5px #143751;
  font-size: 25px;
  text-align: center;
  color: #f1be2a;
  margin: 0px;
  width: 100%;
  background-color: #49708e;
  border-radius: 6px;
  user-select:auto;
}
</style>

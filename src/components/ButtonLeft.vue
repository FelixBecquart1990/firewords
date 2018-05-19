<template>
  <v-layout>
    <v-flex style="height:60px;">
      <div class="play-button" @click="answer()" style="width:150px; float:right; margin-right:10px">
        <div class="answer" :class="{ 'small-text': questionAndAnswers.answer1.length>6, 'extra-small-text': questionAndAnswers.answer1.length>9, 'vn-font': user.language == 'fr-vn' }">
        {{questionAndAnswers.answer1}}
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonRight",
  computed: {
    ...mapGetters(["questionAndAnswers", "user"])
  },
  methods: {
    answer() {
      this.$store.dispatch("checkingAnswer", this.questionAndAnswers.answer1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer {
  font-size: 25px;
  text-align: center;
  color: #244c70;
  padding-top: 4px;
}

.play-button {
  transform: rotate(8deg);
  height: 60px;
  padding-top: 5px;
  border-radius: 30px;
  background: -webkit-linear-gradient(#ffed26, #e3902d);

  box-shadow: 0px 4px 0px #244c70;
  transition: all 0.1s;
}
.small-text {
  font-size: 20px;
  padding-top: 8px;
}
.extra-small-text {
  font-size: 15px;
  padding-top: 12px;
}
.vn-font {
  font-family: secondary;
  text-shadow: 0px 1px 0px rgba(13, 28, 51, 1);
  text-transform: uppercase;
}
</style>

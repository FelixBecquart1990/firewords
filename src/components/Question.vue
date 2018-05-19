<template>
  <v-layout>
    <v-flex style="z-index: 2">
    <h2 style="font-family: secondary;margin-bottom:40px;margin-top:0px; font-size:40px;">
      {{ questionAndAnswers.question }}
    </h2>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Question",
  computed: {
    ...mapGetters(["questionAndAnswers"])
  }
};
</script>

<style scoped>
/**{border:solid 1px red}*/

</style>

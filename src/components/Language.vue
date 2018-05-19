<template>
  <v-layout>
    <v-flex center>
      <div style="font-size:15px" class="pb-2 h2-dark">Languages</div>
        <div class="dark-window pa-2 center" style="margin-top:-18px;overflow:hidden; overflow-y: scroll;">      
          <v-menu offset-y center>
          <div slot="activator">
            <div class="languages">{{ user.language }}</div>
          </div>
          <v-list style="padding:0px;border-radius:6px; background:-webkit-linear-gradient(#ffed26, #e3902d);">
            <v-list-tile v-for="lang in languages" :key="lang">
              <v-list-tile-title @click="modifyLanguage(lang)">{{lang}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Language",
  computed: {
    ...mapGetters(["user", "languages"])
  },
  methods: {
    modifyLanguage(payload) {
      this.$store.commit("SET_LANGUAGE", payload);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.languages {
  font-size: 25px;
  text-align: center;
  color: #f1be2a;
}
</style>

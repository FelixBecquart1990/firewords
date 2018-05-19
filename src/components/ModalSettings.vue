<template>
  <v-dialog v-model="modalSettings" max-width="350">
    <v-card style="position:relative; background-color:#244C70;border-radius:6px" class="square py-4">
      <v-layout>
          <v-flex>
            <ButtonCloseRelative style="margin-top:30px;margin-right:20px;" ref="buttonClose"/>
            <div class="h2-dark">Settings</div>
            <h5 style="margin-top:-10px">version {{ user.settings.version }}</h5>
          </v-flex>
      </v-layout>
      <v-layout  v-if="user.settings.version != version" @click="getLastVersion">
        <v-flex mt-3>
        <ButtonStandard ref="buttonStandard" text="Update"/>
        </v-flex>
      </v-layout>

        <Notifications style="margin-top:30px" ref="notifications"/>
        <Language style="margin-top:30px" ref="language"/>
        
        <v-layout>
          <v-flex mt-3>
            <h4 @click="logout" style="width:100%;margin-right:auto;margin-left:auto;">Sign out</h4>
          </v-flex>
        </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalSettings",
  components: {
    ButtonStandard: () => import("@/components/ButtonStandard"),
    ButtonCloseRelative: () => import("@/components/ButtonCloseRelative"),
    Language: () => import("@/components/Language"),
    Notifications: () => import("@/components/Notifications")
  },
  computed: {
    ...mapGetters(["user", "modalSettings", "version"]),
    modalSettings: {
      get() {
        return this.$store.getters.modalSettings;
      },
      set() {
        this.$store.commit("SET_SETTINGS_VISITED", true);
        this.$store.commit("SET_MODAL_SETTINGS", false);
      }
    }
  },
  methods: {
    getLastVersion() {
      this.$router.push("/");
      this.$store.dispatch("getLastVersion");
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
      location.reload();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

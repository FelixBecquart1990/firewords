<template>
  <v-dialog v-model="modalPseudo" max-width="350">
    <v-card style="background-color:#244C70;border-radius:6px" class="py-4 square">
      <Pseudo ref="pseudo"/>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalPseudo",
  components: {
    Pseudo: () => import("@/components/Pseudo")
  },
  computed: {
    ...mapGetters(["modalPseudo"]),
    modalPseudo: {
      get() {
        return this.$store.getters.modalPseudo;
      },
      set() {
        if (this.$store.getters.user.displayName == "" || this.$store.getters.user.displayName == " " || this.$store.getters.user.displayName == "  ") {
          this.$store.commit("SET_NAME", "user");
        }
        this.$store.commit("SET_MODAL_PSEUDO", false);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

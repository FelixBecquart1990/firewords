<template>
  <v-dialog v-model="modalRewards" max-width="350">
    <v-card style="position:relative; background-color:#244C70;border-radius:6px" class="py-4 square">
      <v-layout>
          <v-flex>
            <ButtonCloseRelative style="margin-top:30px;margin-right:20px;" ref="buttonClose"/>
          <div class="h2-dark" style="margin-top:5px">Congratulation</div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex mt-3>
          <div style="font-size:15px" class="pb-2 h2-dark">Battle mode unlocked</div>
          <div class="dark-window pa-3" style="margin-top:-18px;">
            <div class="battle" ></div>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalRewards",
  components: {
    ButtonCloseRelative: () => import("@/components/ButtonCloseRelative")
  },
  computed: {
    ...mapGetters(["modalRewards"]),
    modalRewards: {
      get() {
        return this.$store.getters.modalRewards;
      },
      set() {
        this.$store.commit("SET_MODAL_REWARDS", false);
      }
    }
  },
  methods: {
    openModalRewards() {
      this.$store.commit("SET_MODAL_REWARDS", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.battle {
  background: url("../../static/img/sprite-2.svg") no-repeat -201px -91px;
  width: 54px;
  height: 69px;
  margin-top:8px;
  margin-right:auto;
  margin-left:auto;
  animation: rotating ease-out 2s;
}

@keyframes rotating {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(1440deg);
  }
}
</style>

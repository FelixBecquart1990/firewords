<template>
  <v-dialog v-model="modalProfile" max-width="350">
    <v-card style="position:relative; background-color:#244C70;border-radius:6px" class="py-4 square">
      <v-layout>
          <v-flex>
            <ButtonCloseRelative style="margin-top:30px;margin-right:20px;" ref="buttonClose"/>
            <div class="h2-dark">Profile</div>
            <h5 @click="openModalPseudo" style="font-size:15px;min-height:22px;margin-top:-10px;position:relative">{{ user.displayName }} <div v-if="user.displayName=='user'" class="chips-displayName"></div></h5>
          </v-flex>
      </v-layout>

       <v-layout d-flex justify-center>

          <v-flex mt-3 style="width:100%">
            <div style="font-size:15px" class="pb-2 h2-dark">Score</div>
            <div class="dark-window" style="margin-top:-18px;">
            <v-menu v-model="showMenu" offset-y absolute full-width>
              <div slot="activator" class="h2-dark" style="font-size:60px;">{{ user.elo }}</div>
              <v-card style="position:relative; width:270px; background-color:#244C70;border-radius:6px" class="py-4 square">
              <v-layout>
                <v-flex>
                  <div style="font-size:15px" class="pb-2 h2-dark">Information</div>
                  <div class="dark-window pa-3" style="margin-top:-18px;">
                      <h3>Improve your score by winning battles against other players</h3>
                  </div>
                </v-flex>
            </v-layout>
          </v-card>
        </v-menu>
            </div>
          </v-flex>

      </v-layout>

      <v-layout>
        <v-flex mt-3>
          <div style="font-size:15px" class="pb-2 h2-dark">Best Combo</div>
          <div class="dark-window pa-2" style="margin-top:-18px;">
            <div class="h2-dark" style="margin-top:5px;font-size:28px;">{{ user.bestCombo }}</div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex mt-3>
          <div style="font-size:15px" class="pb-2 h2-dark">Missions</div>
          <div class="dark-window pa-3" style="margin-top:-18px;">
            <router-link to="/dashboard">
              <div class="mission-text" >Feature available soon</div>
            </router-link>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
    <ModalPseudo ref="modalPseudo"/>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalProfile",
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    ButtonSmall: () => import("@/components/ButtonSmall"),
    ButtonCloseRelative: () => import("@/components/ButtonCloseRelative"),
    ModalPseudo: () => import("@/components/ModalPseudo")
  },
  computed: {
    ...mapGetters(["user"]),
    modalProfile: {
      get() {
        return this.$store.getters.modalProfile;
      },
      set() {
        this.$store.commit("SET_PROFILE_VISITED", true);
        this.$store.commit("SET_MODAL_PROFILE", false);
      }
    }
  },
  methods: {
    openModalPseudo() {
      this.$store.commit("SET_MODAL_PSEUDO", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chips-displayName {
  background: url("../../static/img/sprite-2.svg") no-repeat -300px -64px;
  width: 10px;
  height: 11px;
  position: absolute;
  right: calc(50% - 24px);
  top: 2px;
}
.mission-text {
  font-size: 15px;
  text-align: center;
  color: #f1be2a;
}
</style>

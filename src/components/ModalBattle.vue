<template>
  <v-dialog v-model="modalBattle" max-width="350">
    <v-card class="square py-4" style="position:relative; background-color:#244C70;border-radius:6px">
      <v-layout>
          <v-flex>
            <ButtonCloseRelative style="margin-top:30px;margin-right:20px;" ref="buttonClose"/>
            <div @click="refresh">
              <ButtonRefreshRelative style="margin-top:30px;margin-left:20px;" ref="buttonRefresh"/>
            </div>
            <div class="h2-dark">Battle</div>
            <h5 class="select-opponent" style="font-size:15px;margin-top:-10px">Select an opponent</h5>
          </v-flex>
      </v-layout>

      <v-layout v-if="user.battleInProgress">
        <v-flex v-if="Object.keys(user.battleInProgress).length>0" mt-3 style="position:relative">
          <div class="dark-window pa-3" style="margin-top:12px;overflow:hidden; overflow-y: scroll;max-height:230px">
            
            <transition-group name="flip-list" tag="ul">
            <v-layout v-for="user in user.battleInProgress" style="height:44px" :key="user.uid">
              <v-flex xs8>
                <h3 style="float:left;font-size:22px;position:relative">
                  {{user.displayName.split([" "[0]])[0].substring(0,12)}}
                  <span style="width:100px;text-align:left;font-size:12px;position:absolute;left:0px;top:24px;">
                    {{user.elo}}
                    <template v-if="user.state == 'new'">
                    <span style="color:#244c70" >New</span>
                    </template>
                    <template v-else>
                      <span style="color:#BF0A0A" v-if="user.addToElo<0">Lose {{ user.addToElo}}</span>
                      <span style="color:#659C45" v-if="user.addToElo>=0">Win +{{ user.addToElo}}</span>
                    </template>
                  </span>
                </h3>
              </v-flex>
              <v-flex v-if="user.situation != 'sent'" @click="selectOpponent(user, 'revange')" xs4>
                <ButtonSmall v-if="user.state == 'new'" style="height:20px;width:30px;margin-top:-4px;" ref="buttonSmall" text="start"/>
                <ButtonSmall v-else style="height:20px;width:30px;margin-top:-4px;" ref="buttonSmall" text="revange"/>
              </v-flex>
              <v-flex v-else>
                <h4 style="margin-top:6px;">
                  battle sent
                </h4>
              </v-flex>
            </v-layout>
            </transition-group>
            <!--v-layout style="height:44px">
              <v-flex xs8>
                <h3 style="float:left;font-size:22px;position:relative">Félix<span style="width:100px;text-align:left;font-size:12px;position:absolute;left:0px;top:24px;">1403 <span style="color:#244c70">New</span></span></h3>
              </v-flex>
              <v-flex xs4>
                <ButtonSmall style="height:20px;width:30px;margin-top:-4px;" ref="buttonSmall" text="start"/>
              </v-flex>
            </v-layout>

            <v-layout style="height:44px">
              <v-flex xs8>
                <h3 style="float:left;font-size:22px;position:relative">Félix<span style="width:100px;text-align:left;font-size:12px;position:absolute;left:0px;top:24px;">1403 <span style="color:#659C45">win 25</span></span></h3>
              </v-flex>
              <v-flex xs4>
                <ButtonSmall style="height:20px;width:30px;margin-top:-4px;" ref="buttonSmall" text="revange"/>
              </v-flex>
            </v-layout>

            <v-layout style="height:44px">
              <v-flex xs8>
                <h3 style="float:left;font-size:22px;position:relative">Félix<span style="width:100px;text-align:left;font-size:12px;position:absolute;left:0px;top:24px;">1403 <span style="color:#BF0A0A">lose 44</span></span></h3>
              </v-flex>
              <v-flex xs4>
                <ButtonSmall style="height:20px;width:30px;margin-top:-4px;" ref="buttonSmall" text="revange"/>
              </v-flex>
            </v-layout-->

          </div>
          <div style="font-size:15px;position:absolute;top:0px;width:100%" class="h2-dark">Battles in progress</div>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex mt-3 style="position:relative">
          <div class="dark-window pa-3" style="margin-top:12px;overflow:hidden; overflow-y: scroll;">
            
            <v-layout v-if="Math.random()>.5" style="height:44px">
              <v-flex xs8>
                <h3 style="float:left;font-size:22px;position:relative">Invite a friend<span style="text-align:left;width:300px;font-size:12px;position:absolute;left:0px;top:24px">More fun with friends &#10084;</span></h3>
              </v-flex>
              <v-flex xs4 style="position:relative">
                <div @click="share">
                  <ButtonSmall v-clipboard="link" style="height:20px;width:30px;margin-top:-4px;" ref="ButtonSmall" text="Invite" name="buttonSmall"/>
                </div>
                <social-sharing class="hidden-sm-and-up" url="https://playmoretolearn.firebaseapp.com" inline-template style="position:absolute;top:0px;left:10px;width:80px;height:34px">
                  <network network="whatsapp"></network>
                </social-sharing>
              </v-flex>
            </v-layout>
            <transition-group name="flip-list" tag="ul">
            <v-layout v-for="opponent in users" style="height:44px" :key="opponent.uid" v-if="opponent.uid != currentUser.uid && !(currentUser.battleInProgress? (currentUser.battleInProgress[opponent.uid]?true:false):false)">
              <v-flex xs8>
                <h3 style="float:left;font-size:22px;position:relative">{{ opponent.displayName.split([" "[0]])[0].substring(0,12) }}<span style="font-size:12px;position:absolute;left:0px;top:24px">{{opponent.elo}}</span></h3>
              </v-flex>
              <v-flex xs4 @click="selectOpponent(opponent, 'new')">
                <ButtonSmall style="height:20px;width:30px;margin-top:-4px;" ref="buttonSmall" text="Select"/>
              </v-flex>
            </v-layout>
            </transition-group>
          </div>
          <div style="font-size:15px;position:absolute;top:0px;width:100%" class="h2-dark">players</div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalBattle",
  data() {
    return {
      link: "https://playmoretolearn.firebaseapp.com"
    };
  },
  mounted: function() {
    this.$store.dispatch("fetchUsersData");
  },
  components: {
    ButtonSmall: () => import("@/components/ButtonSmall"),
    ButtonCloseRelative: () => import("@/components/ButtonCloseRelative"),
    ButtonRefreshRelative: () => import("@/components/ButtonRefreshRelative")
  },
  computed: {
    ...mapGetters(["modalBattle", "users", "user", "currentUser", "opponent"]),
    modalBattle: {
      get() {
        return this.$store.getters.modalBattle;
      },
      set() {
        this.$store.commit("SET_MODAL_BATTLE", false);
      }
    }
  },
  methods: {
    share() {
      this.$store.commit("SET_SNACKBAR", "Link copied to clipboard");
    },
    selectOpponent(opponent, battleState) {
      this.$store.commit("SET_MODAL_BATTLE", false);
      this.$store.commit("SET_OPPONENT", opponent);
      this.$store.commit("SET_BATTLE_STATE", battleState);
      this.$store.dispatch("startGame");
    },
    refresh() {
      this.$store.dispatch("refreshBattles");
      this.$store.commit("SET_SNACKBAR", "Battles refreshed");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rotation {
  width: 40px;
  height: 47px;
  margin-top:-2px;
  animation: rotation infinite linear 4s;
}
@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.select-opponent {
  text-align: center;
  animation: hand 1.5s infinite;
}
@keyframes hand {
  0% {
    -webkit-transform: scale(0.9);
  }
  50% {
    -webkit-transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.9);
  }
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>

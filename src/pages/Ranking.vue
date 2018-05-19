<template>
  <div>
    <Ground home="false" position="top" ref="ground"/>
    <v-layout>
      <v-flex mt-4 mb->
        <ButtonClose ref="buttonClose"/>
        <v-layout>
          <v-flex>
            <h2>Ranking</h2>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-menu v-model="showMenu" offset-y absolute full-width>

    <v-layout v-if="users.length == 0" class="pt-5">
      <v-progress-linear color="primary" style="position:relative;border-radius:5px;width:30%;margin-top:50px;margin-right:auto;margin-left:auto" :indeterminate="true"></v-progress-linear>
    </v-layout>
    <transition-group slot="activator" v-else name="flip-list" tag="ul" class="mb-4" style="overflow-y: scroll; position:fixed;top:170px;bottom:10px;width:100%">
      <v-layout v-for="(user, index) in users" :key="user.uid" :class="{ 'current-user': user.uid == currentUser.uid }" style="cursor:pointer;max-width:500px; margin-right:auto;margin-left:auto;">
 
              <v-flex class="xs1 offset-xs1" pl-3 style="z-index:4;position:relative;" :class="{ 'border-1': user.uid == currentUser.uid }">
                <h3 :data-text="index+1">{{ index+1 }}</h3>
              </v-flex>
              <v-flex class="xs7" :class="{ 'border-2': user.uid == currentUser.uid }">
                  <div class="pl-2" style="flex-direction:row;display:flex" :class="{ 'border-2': user.uid == currentUser.uid }">
                    <h3 style="margin-left:18px">{{ user.displayName.split([" "[0]])[0].substring(0,9) }}</h3>
                    <div v-if="index == 0" class="crown-1"></div>
                    <div v-if="index == 1" class="crown-2"></div>
                    <div v-if="index == 2" class="crown-3"></div>
                  </div>
              </v-flex>
              <v-flex class="xs2" style="z-index:1" pr-3 :class="{ 'border-3': user.uid == currentUser.uid }">
                <h3 class="score" v-if="rankingCategory == 'score'">{{ user.elo}}</h3>
              </v-flex>
      </v-layout>
    </transition-group>

    <v-card style="position:relative; width:300px; background-color:#244C70;border-radius:6px" class="py-4 square">
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Ranking",
  data() {
    return {
      showMenu: false,
      rankingCategory: "score",
      usersSorted: null
    };
  },
  components: {
    Ground: () => import("@/components/Ground"),
    ButtonClose: () => import("@/components/ButtonClose")
  },
  computed: {
    ...mapGetters(["users", "currentUser"])
  },
  mounted: function() {
    this.$store.dispatch("fetchUsersData");
  }
};
</script>

<style scoped>
/*{border:solid 1px red}*/

.score {
  float: right;
}
.selected {
  cursor: default !important;
  margin-left: 5px;
  padding: 4px 6px 2px;
  border-radius: 6px;
  background-color: #663f24;
  -webkit-text-fill-color: #f1be2a;
}
h4 {
  font-size: 15px;
  text-align: center;
  background-color: #f1be2a;
  filter: drop-shadow(0px 1px #351a07) drop-shadow(0px 1px #351a07);
}
.border-1 {
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  border-radius: 25px 0px 0px 25px;
}
.border-2 {
  background: -webkit-linear-gradient(#ffed26, #e3902d);
}
.border-3 {
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  border-radius: 0px 25px 25px 0px;
}
.border-1 > *,
.border-2 > *,
.border-3 > * {
  color: #7f512e;
}
.crown-1 {
  background: url("../../static/img/sprite-2.svg") no-repeat -288px -8px;
  width: 24px;
  height: 18px;
  margin-top: 9px;
  margin-left: 10px;
  animation: flip 1.4s;
}
.crown-2 {
  background: url("../../static/img/sprite-2.svg") no-repeat -323px -9px;
  width: 22px;
  height: 18px;
  margin-top: 9px;
  margin-left: 10px;
  animation: flip 1.2s;
}
.crown-3 {
  background: url("../../static/img/sprite-2.svg") no-repeat -263px -11px;
  width: 22px;
  height: 12px;
  margin-top: 12px;
  margin-left: 10px;
  animation: flip 1s;
}
@keyframes flip {
  0% {
    transform: rotateY(700deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>

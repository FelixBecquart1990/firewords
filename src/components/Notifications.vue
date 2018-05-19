<template>
  <v-layout v-if="enableNotificationsButtons" @click="askForNotificationPermission">
    <v-flex @click="toggleNotifications">
      <div style="font-size:15px" class="pb-2 h2-dark">Notifications</div>
      <div class="dark-window pa-3 center" style="margin-top:-18px;overflow:hidden; overflow-y: scroll;">
        <div :class="{ 'switch-on': user.notifications, 'switch-off': !user.notifications }"></div>
      </div>
    </v-flex>
  </v-layout>
      
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notifications",
  data() {
    return {
      enableNotificationsButtons: false
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  mounted: function() {
    if ("Notification" in window) {
      this.enableNotificationsButtons = true;
    }
  },
  methods: {
    toggleNotifications() {
      this.$store.commit("SET_NOTIFICATIONS", !this.user.notifications);
    },
    askForNotificationPermission() {
      self = this;
      if (this.user.notifications) {
        Notification.requestPermission(function(result) {
          console.log("User choice", result);
          if (result !== "granted") {
            console.log("No notification permission granted!");
          } else {
            self.displayConfirmNotification();
          }
        });
      }
    },
    displayConfirmNotification() {
      console.log("display notif 1");
      if ("serviceWorker" in navigator) {
        let options = {
          body: "You successfully subscribed to our notification service!",
          icon: "../../static/img/icons/android-chrome-96x96.png",
          //image: "../../static/img/icons/android-chrome-96x96.png",
          vibrate: [30, 30, 30, 30, 30],
          badge: "../../static/img/icons/android-chrome-96x96.png",
          tag: "confirm-notification", // if another notification is created with the same tag, it will replace the former one
          renotify: false, // not vibrate again
          actions: [
            {
              action: "confirm",
              title: "Ok",
              icon: "../../static/img/icons/android-chrome-96x96.png"
            },
            {
              action: "cancel",
              title: "Cancel",
              icon: "../../static/img/icons/android-chrome-96x96.png"
            }
          ]
        };
        console.log("display notif 2");
        //new Notification("Successfully subscribed!", options);
        navigator.serviceWorker.ready.then(function(swreg) {
          console.log(swreg);
          console.log("display notif 3");
          swreg.showNotification("Successfully subscribed!(from SW)", options);
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*{border:solid 1px red}*/
.switch-on {
  background: url("../../static/img/sprite-2.svg") no-repeat -281px -29px;
	width: 29px;
	height: 25px;
  margin-top: 3px;
}
.switch-off {
  margin-left: -13px;
  background: url("../../static/img/sprite-2.svg") no-repeat -323px -29px;
	width: 30px;
	height: 25px;
  margin-top: 3px;
}
</style>

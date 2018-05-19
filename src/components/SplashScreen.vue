<template>
  <div>
    <div class="title"></div>
    <v-progress-linear color="success" style="width:20px;height:20px;border:solid 1px #244C70;background-color:#A0D1F1;transform:rotate(135deg);position:relative;border-radius:50%;margin-top:-52px;margin-right:auto;margin-left:auto" :indeterminate="true"></v-progress-linear>
    <h4 class="appear" style="position:absolute;margin-top:40px;width:100%;text-align:center">Please, check your</h4>
    <h4 class="appear" style="position:absolute;margin-top:60px;width:100%;text-align:center">internet connexion</h4>
    <h4 class="appear-before" style="position:absolute;margin-top:40px;width:100%;text-align:center">a bit long isn't it?</h4>
    <!--h4 style="position:absolute;margin-top:40px;width:100%;text-align:center">Dear player,</h4>
    <h4 style="position:absolute;margin-top:65px;width:100%;text-align:center">Firewords is currently being</h4>
    <h4 style="position:absolute;margin-top:85px;width:100%;text-align:center">improved and will be back soon...</h4>
    <h4 style="position:absolute;margin-top:110px;width:100%;text-align:center;z-index:10"> <a href="https://www.facebook.com/groups/332186590532304/" target="_blank">click here to stay tuned</a></h4-->

    <Background ref="background" animation="diagonal"/>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  components: {
    Background: () => import("@/components/Background")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  background: url("../../static/img/splashscreen.svg") no-repeat 0 0;
	width: 131px;
	height: 114px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -90px;
  z-index: 1;
}
.appear {
  animation: appear 15s;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
.appear-before {
  animation: appear-before 100s infinite;
}
@keyframes appear-before {
  0% {
    opacity: 0;
  }
  7% {
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  9.9% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

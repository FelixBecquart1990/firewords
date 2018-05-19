<template>
  <v-app id="app">
    <main>
      <router-view></router-view>
    </main>
    <Hand ref="hand"/>
    <Snackbar ref="snackbar"/>

  </v-app>
</template>

<script>

export default {
  name: "app",
  components: {
    Hand: () => import("@/components/Hand"),
    Snackbar: () => import("@/components/Snackbar")
  }
};
</script>

<style>
/*{border:solid 1px red}*/
/*body {
  overscroll-behavior-y: none;
}*/

@font-face {
  font-family: primary;
  src: url(../static/font/Nickname.otf);
}
@font-face {
  font-family: secondary;
  src: url(../static/font/gothamrnd-medium.ttf);
}
* {
  font-family: secondary;
}
*,
*:active,
*:focus {
  user-select: none;
  outline: none;
  text-decoration: none;
}
html,
#app,
main {
  height: 100%;
}
a:link {
  text-decoration: none;
}
body {
  /*height: 100%;       remove otherwise, need to scroll*/
  margin: 0;
}
#app {
  /*background-image: url("../static/img/background.svg")*/
  background-color: #a0d1f1;
}

h1 {
  font-family: primary;
  font-size: 50px;
  text-align: center;
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #244c70)
    drop-shadow(0px 2px #244c70) drop-shadow(0px 3px #244c70);
}
.h1-red {
  background: -webkit-linear-gradient(#BF0A0A, #BF0A0A);
  -webkit-background-clip: text;
}
.h1-green {
  background: -webkit-linear-gradient(#659C45, #659C45);
  -webkit-background-clip: text;
}
h2 {
  font-family: primary;
  font-size: 35px;
  text-align: center;
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #244c70)
    drop-shadow(0px 2px #244c70);
}
.h2-dark {
  font-family: primary;
  font-size: 35px;
  text-align: center;
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #000)
    drop-shadow(0px 2px #000);
}

h3 {
  font-size: 25px;
  text-align: center;
  color: #f1be2a;
  /*background: -webkit-linear-gradient(#FFED26, #E3902D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #244C70) drop-shadow(0px 2px #244C70);*/
}

.h3-3d {
  font-size: 25px;
  text-align: center;
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #244c70)
    drop-shadow(0px 2px #244c70);
}

.side-text {
  text-shadow: 1px 0px #657f05, 2px 0px #657f05, 3px 0px #657f05;
}
h4 {
  font-size: 15px;
  text-align: center;
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h5 {
  font-size: 10px;
  text-align: center;
  color: #f1be2a;
}
.h4-dark {
  text-align: center;
  font-size: 15px;
  color: #17373c;
  /*text-shadow: 0px 2px #657f05;*/
}
.right {
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: column;
}
.left {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.no-text-decoration {
  text-decoration: none;
  color: inherit;
}

.figure-in-button {
  font-family: primary;
  font-size: 35px;
  text-align: center;
  background: -webkit-linear-gradient(#ffed26, #e3902d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #244c70)
    drop-shadow(0px 2px #244c70);
  margin-left: -4px;
}
.square {
  background-image: repeating-linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.1),
      transparent 1px,
      transparent 10000px
    ),
    repeating-linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 10000px
    ),
    linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    ),
    linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    );
  background-size: 60px 102px;
  background-repeat: repeat;
}

*::-webkit-scrollbar {
  width: 0px;
}
.dark-window {
  border: solid 1px #143751;
  border-bottom: solid 5px #143751;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  background-color: #49708e;
  border-radius: 6px;
  max-height: 300px;
}

/*{border:solid 1px red}*/
</style>

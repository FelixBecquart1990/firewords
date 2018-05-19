<template>
  <div  class="larger-clickable-area">
    <div class="button-refresh"></div>
  </div>
</template>

<script>

export default {
  name: "ButtonRefreshRelative",
};
</script>

<style scoped>
.larger-clickable-area {
  z-index: 1;
  position: absolute;
  top: -37px;
  left: -28px;
  padding:20px;
  transform: scale(0.7);
  cursor: pointer;
  transition: linear 0.3s;
}
.larger-clickable-area:active {
  transform: scale(1) rotate(-180deg);
}
.button-refresh {
  background: url("../../static/img/sprite-2.svg") no-repeat -159px -2px;
	width: 26px;
	height: 29px;
}
</style>

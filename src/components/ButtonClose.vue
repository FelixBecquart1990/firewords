<template>
  <div class="larger-clickable-area">
    <div style="display:flex;justify-content:flex-end;">
      <router-link to="/" style="padding:30px;cursor: pointer;">
        <div class="button-close"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonClose"
};
</script>

<style scoped>
.larger-clickable-area {
  z-index: 1;
  position: fixed;
  top: -15px;
  right: -15px;
  width: 80px;
}
.button-close {
  background: url("../../static/img/sprite-2.svg") no-repeat -159px -33px;
	width: 26px;
	height: 28px;
}

</style>

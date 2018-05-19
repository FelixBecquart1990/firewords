<template>
<div class="couche0">
  <div class="couche1">
   	<div class="couche2">
   		<div class="couche23">
	   		<div class="couche3">
	    			<div class="battle">{{ text }}</div>
            <div class="couche5"></div>
	    	</div>
		  </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ButtonSmall",
  props: ["text"]
};
</script>

<style scoped>
.couche1 {
  position: relative;
  -webkit-border-radius: 21px;
  -moz-border-radius: 21px;
  border-radius: 21px;
  width: 300px;
  height: 100px;
  margin-right:auto;
  margin-left:auto;
  background: black;
  -webkit-box-shadow: 0px 21px 2px #301c09;
  -moz-box-shadow: 0px 21px 2px #301c09;
  box-shadow: 0px 21px 2px #301c09;
  cursor: pointer;
}

.couche2 {
  position: absolute;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  width: 294px;
  height: 94px;
  margin-top: 3px;
  margin-left: 3px;
  background: #fda80d;
  -webkit-box-shadow: 0px 9px 0px #af6b06;
  -moz-box-shadow: 0px 9px 0px #af6b06;
  box-shadow: 0px 9px 0px #af6b06;
}

.couche23 {
  position: absolute;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  width: 292px;
  height: 80px;
  margin-top: 5px;
  margin-left: 1px;
  -webkit-box-shadow: 0px -4px 5px 0px #ffdc33;
  -moz-box-shadow: 0px -4px 5px 0px #ffdc33;
  box-shadow: 0px -4px 5px 0px #ffdc33;
}

.couche3 {
  position: absolute;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  margin-top: 0px;
  margin-left: 5px;
  width: 281px;
  height: 82px;
  background: rgba(255, 187, 42, 1);
  -webkit-box-shadow: 0px 4px 3px 0px #fe8906;
  -moz-box-shadow: 0px 4px 3px 0px #fe8906;
  box-shadow: 0px 4px 3px 0px #fe8906;
}

.couche4 {
  position: absolute;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  margin-top: 5px;
  margin-left: 3px;
  width: 275px;
  height: 38px;
  background: #ffd053;
}

.couche5 {
  position: absolute;
  -webkit-border-radius: 45%;
  -moz-border-radius: 45%;
  border-radius: 45%;
  top: 0px;
  margin-left: 267px;
  width: 7px;
  height: 9px;
  background: #fff1b6;
}
.couche1:active,
.couche2:active {
  -webkit-box-shadow: 0px 1px 2px #301c09;
  -moz-box-shadow: 0px 1px 2px #301c09;
  box-shadow: 0px 1px 2px #301c09;
}
.couche0:active {
  margin-top: 8px;
  border: solid 1px rgba(0, 0, 0, 0);
  margin-bottom: -5px;
}
.couche0{
  transform: scale(0.25)
}
.battle {
  font-family: primary;
  font-size: 50px;
  text-align: center;
  color: #ffffcc;
  -webkit-background-clip: text;
  filter: drop-shadow(0px -1px #fff) drop-shadow(0px 1px #244c70)
    drop-shadow(0px 2px #244c70);
  padding-top: 7px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}
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
</style>

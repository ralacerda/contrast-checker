<script setup>
import { hex } from "wcag-contrast";

const props = defineProps(["background", "foreground"]);

function passTest(contrast) {
  if (contrast > 4.5) {
    return "Pass";
  } else if (contrast > 3) {
    return "Large Text";
  } else {
    return "Fail";
  }
}

function shadowColor(contrast) {
  if (contrast > 4.5) {
    return "green";
  } else if (contrast > 3) {
    return "yellow";
  } else {
    return "red";
  }
}
</script>

<template>
  <div class="bigger-box">
    <div class="combination-box">
      {{ hex(background, foreground).toFixed(2) }}
    </div>
    {{ passTest(hex(background, foreground)) }}
  </div>
</template>

<style scoped>
.bigger-box {
  width: 120px;
  height: 80px;
  display: grid;
  place-items: center;
  border: solid 1px black;
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 0px 10px v-bind("shadowColor(hex(background, foreground))");
}

.combination-box {
  display: grid;
  place-items: center;
  font-size: 20px;
  height: 60px;
  width: 60px;
  background: v-bind("props.background");
  color: v-bind("props.foreground");
}
</style>

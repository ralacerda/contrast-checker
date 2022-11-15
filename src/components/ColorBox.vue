<script setup>
import { hex } from "wcag-contrast";

const props = defineProps(["background", "foreground"]);
</script>

<template>
  <div class="bigger-box">
    <div class="combination-box">
      {{ hex(background, foreground).toFixed(2) }}
    </div>
  </div>
</template>

<style scoped>
div {
.bigger-box {
  width: 120px;
  height: 80px;
  display: grid;
  place-items: center;
  border: solid 1px black;
  border-radius: 4px;
  margin: 10px;
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

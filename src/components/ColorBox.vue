<script setup>
import { hex } from "wcag-contrast";

const props = defineProps(["background", "foreground"]);
const contrastValue = hex(props.background, props.foreground);
</script>

<template>
  <div>{{ contrastValue.toFixed(2) }}</div>
</template>

<style scoped>
div {
  height: 200px;
  width: 200px;
  background-color: v-bind("props.background");
  color: v-bind("props.foreground");
  display: grid;
  place-content: center;
}
</style>

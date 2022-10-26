<script setup>
import { hex } from "wcag-contrast";

const props = defineProps(["background", "foreground"]);
</script>

<template>
  <div>{{ hex(background, foreground).toFixed(2) }}</div>
</template>

<style scoped>
div {
  height: 60px;
  width: 60px;
  background: v-bind("props.background");
  color: v-bind("props.foreground");
}
</style>

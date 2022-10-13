<script setup>
import { hex } from "wcag-contrast";
import { computed } from "vue";

const props = defineProps(["background", "foreground"]);
const contrastValue = computed(() =>
  hex(props.background.value, props.foreground.value)
);

const scoreValue = computed(() => (contrastValue.value < 3 ? "fail" : "pass"));
</script>

<template>
  <div>{{ contrastValue.toFixed(2) }}</div>
  {{ scoreValue }}
</template>

<style scoped>
div {
  height: 200px;
  width: 200px;
  background-color: v-bind("props.background.value");
  color: v-bind("props.foreground.value");
  display: grid;
  place-content: center;
}
</style>

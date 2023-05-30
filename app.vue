<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const foregroundColors = useColorCollection("foregroundColors", [
  "#900498",
  "#02513c",
]);
const backgroundColors = useColorCollection("backgroundColors", [
  "#eeeeee",
  "#e5ebec",
  "#161414",
]);

const options = useStorage(
  "options",
  reactive({
    showShadows: true,
    showPreview: true,
    showBorders: false,
    showText: false,
    enhancedContrast: false,
  })
);
const colorBackground = ref("#E4E4E4");
const colorForeground = ref("#DD2020");
</script>

<template>
  <div>
    <!-- <div v-for="index in foregroundColors.length" :key="index">
      <ColorButton v-model="foregroundColors[index - 1]" />
    </div> -->

    <button
      @click="backgroundColors.colors.value = ['#eeeeee', '#e5ebec', '#161414']"
    >
      Reset
    </button>

    <ColorPickerRow :colorCollection="foregroundColors" />
    <ColorPickerRow :colorCollection="backgroundColors" />

    <!-- <ColorBox :background="colorBackground" :foreground="colorForeground" /> -->
  </div>
</template>

<style>
html,
body {
  overscroll-behavior-y: contain;
}
</style>

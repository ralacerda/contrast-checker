<script setup>
import { useStorage } from "@vueuse/core";
import ColorBox from "./components/ColorBox.vue";
import ColorButton from "./components/ColorButton.vue";

const foregroundColors = useStorage("foregroundColors", ["#FFF", "#e4e4e4"]);
const backgroundColors = useStorage("backgroundColors", []);
</script>

<template>
  <ColorButton
    v-for="(color, index) in backgroundColors"
    :key="index"
    :modelValue="backgroundColors[index]"
    @update:modelValue="(x) => (backgroundColors[index] = x)"
    @delete="backgroundColors.splice(index, 1)" />
  <button @click="backgroundColors.push('#fff')">new color</button>

  <ColorButton
    v-for="(color, index) in foregroundColors"
    :key="index"
    :modelValue="foregroundColors[index]"
    @update:modelValue="(x) => (foregroundColors[index] = x)"
    @delete="foregroundColors.splice(index, 1)" />
  <button @click="foregroundColors.push('#fff')">new color</button>

  <div class="color-grid">
    <template v-for="(background, index) in backgroundColors" :key="index">
      {{ background }}
    </template>
    <template v-for="(foreground, index) in foregroundColors" :key="index">
      {{ foreground }}
      <template v-for="(background, index) in backgroundColors" :key="index">
        <ColorBox :background="background" :foreground="foreground" />
      </template>
    </template>
  </div>
</template>

<style scoped>
.background-buttons,
.foreground-buttons {
  display: flex;
}
</style>

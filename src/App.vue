<script setup>
import ColorInput from "vue-color-input";
import { useStorage } from "@vueuse/core";
import ColorBox from "./components/ColorBox.vue";

const foregroundColors = useStorage("foregroundColors", []);
const backgroundColors = useStorage("backgroundColors", []);
</script>

<template>
  <div class="color-palettes">
    <div class="foreground-buttons">
      <div v-for="(color, index) in foregroundColors" :key="index">
        <ColorInput v-model="foregroundColors[index]" />
        <input v-model="foregroundColors[index]" />
        <button @click="foregroundColors.splice(index, 1)">del me</button>
      </div>
      <button @click="foregroundColors.push('#fff')">new color</button>
    </div>

    <div class="background-buttons">
      <div v-for="(color, index) in backgroundColors" :key="index">
        <ColorInput v-model="backgroundColors[index]" />
        <input v-model="backgroundColors[index]" />
        <button @click="backgroundColors.splice(index, 1)">del me</button>
      </div>
      <button @click="backgroundColors.push('#000')">new color</button>
    </div>
  </div>

  <div class="color-grid">
    <div>
      <div
        v-for="(foreground, index) in foregroundColors"
        :key="index"
        class="background-columns"
      >
        {{ foreground }}
      </div>
    </div>
    <div
      v-for="(background, index) in backgroundColors"
      :key="index"
      class="background-columns"
    >
      {{ background }}
      <div
        v-for="(foreground, index) in foregroundColors"
        :key="index"
        class="foreground-rows"
      >
        <ColorBox :background="background" :foreground="foreground" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-buttons,
.foreground-buttons {
  display: flex;
}

.color-grid {
  display: flex;
}
</style>

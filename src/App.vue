<script setup>
import { useStorage } from "@vueuse/core";
import ColorBox from "./components/ColorBox.vue";
import ColorButton from "./components/ColorButton.vue";
import { reactive } from "vue";

const foregroundColors = useStorage("foregroundColors", ["#FFF", "#e4e4e4"]);
const backgroundColors = useStorage("backgroundColors", []);

const options = useStorage(
  "options",
  reactive({
    showShadows: true,
    enhancedContrast: false,
    showBorders: true,
    showPreview: true,
    showText: true,
  })
);
</script>

<template>
  <input
    type="checkbox"
    id="switch"
    class="checkbox"
    v-model="options.showShadows" />
  <input
    type="checkbox"
    id="switch"
    class="checkbox"
    v-model="options.showBorders" />
  <input
    type="checkbox"
    id="switch"
    class="checkbox"
    v-model="options.showPreview" />
  <input
    type="checkbox"
    id="switch"
    class="checkbox"
    v-model="options.showText" />

  <input
    type="checkbox"
    id="switch"
    class="checkbox"
    v-model="options.enhancedContrast" />

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
        <ColorBox
          :background="background"
          :foreground="foreground"
          :options="options" />
      </template>
    </template>
  </div>
</template>

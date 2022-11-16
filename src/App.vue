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
  <div class="box">
    <label class="checkbox">
      <input type="checkbox" v-model="options.showShadows" />
      Show colored shadows
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="options.showBorders" />
      Show different border styles
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="options.showPreview" />
      Show colors preview
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="options.showText" />
      Show result in text
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="options.enhancedContrast" />
      Test enhanced contrast level
    </label>
  </div>

  <div class="box">
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
  </div>

  <div class="box">
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
  </div>
</template>

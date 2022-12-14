<script setup>
import { useStorage } from "@vueuse/core";
import ColorBox from "./components/ColorBox.vue";
import ColorButton from "./components/ColorButton.vue";
import NewColor from "./components/NewColor.vue";
import { reactive } from "vue";
import ColorHeader from "./components/ColorHeader.vue";

const foregroundColors = useStorage("foregroundColors", [
  "#900498",
  "#02513c",
  "#114c72",
  "#868686",
  "#aaab8b",
]);
const backgroundColors = useStorage("backgroundColors", [
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
</script>

<template>
  <div class="block">
    <h1 class="title is-1">Multiple Colors Contrast Checker</h1>

    <p class="content">
      This application helps your check if yours colors meet the
      <a href="https://webaim.org/articles/contrast/"
        >WCAG standard for color contrast</a
      >.
    </p>

    <div class="block display-options">
      <label class="checkbox">
        <input type="checkbox" v-model="options.showShadows" />
        Colored shadows
      </label>

      <label class="checkbox">
        <input type="checkbox" v-model="options.showPreview" />
        Preview
      </label>

      <label class="checkbox">
        <input type="checkbox" v-model="options.showBorders" />
        Border styles
      </label>

      <label class="checkbox">
        <input type="checkbox" v-model="options.showText" />
        Result as text
      </label>

      <label class="checkbox">
        <input type="checkbox" v-model="options.enhancedContrast" />
        Enhanced contrast level
      </label>
    </div>
  </div>

  <div class="block">
    <div class="block">
      <h2 class="title is-4 mb-2 mt-4">Backgrounds</h2>
      <div class="button-row block">
        <ColorButton
          v-for="(color, index) in backgroundColors"
          v-model="backgroundColors[index]"
          :key="index"
          @delete="backgroundColors.splice(index, 1)" />
        <NewColor @click="backgroundColors.push('#FFFFFF')" />
      </div>
    </div>

    <div class="block">
      <h2 class="title is-4 mb-2 mt-4">Foregrounds</h2>
      <div class="button-row block">
        <ColorButton
          v-for="(color, index) in foregroundColors"
          v-model="foregroundColors[index]"
          :key="index"
          @delete="foregroundColors.splice(index, 1)" />
        <NewColor @click="foregroundColors.push('#000000')" />
      </div>
    </div>
  </div>

  <div class="block">
    <h2 class="title is-4 mb-5 mt-4">Result Matrix</h2>
    <div class="color-grid">
      <div class="color-grid-row">
        <span />
        <template v-for="(foreground, index) in foregroundColors" :key="index">
          <ColorHeader :color="foreground" />
        </template>
      </div>
      <template v-for="(background, index) in backgroundColors" :key="index">
        <div class="color-grid-row">
          <ColorHeader :color="background" />
          <template
            v-for="(foreground, index) in foregroundColors"
            :key="index">
            <ColorBox
              :background="background"
              :foreground="foreground"
              :options="options" />
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.color-grid-row {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.button-row {
  display: flex;
  gap: 1rem;
}

.button-row .new-color {
  height: 8ch;
  width: 8ch;
  margin-top: 24px;
}

.display-options {
  display: flex;
  flex-direction: column;
  justify-items: start;
}

.display-options .checkbox {
  max-width: 30ch;
}

.block {
  margin-bottom: 2rem;
}

#app > .block + .block {
  border-top: solid 1px #00000010;
}
</style>

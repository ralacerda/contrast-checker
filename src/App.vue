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
    <h1 class="">Multiple Colors Contrast Checker</h1>

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
      <h2 class="">Backgrounds</h2>
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
      <h2 class="">Foregrounds</h2>
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
    <h2 class="">Result Matrix</h2>
    <div
      class="color-grid"
      :style="{ '--columns': foregroundColors.length + 1 }">
      <span />
      <template v-for="(foreground, index) in foregroundColors" :key="index">
        <ColorHeader :color="foreground" />
      </template>
      <template v-for="(background, index) in backgroundColors" :key="index">
        <ColorHeader :color="background" />
        <template v-for="(foreground, index) in foregroundColors" :key="index">
          <ColorBox
            :background="background"
            :foreground="foreground"
            :options="options" />
        </template>
      </template>
    </div>
  </div>
</template>

<style>
.color-grid {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(var(--columns), 120px);
  overflow-x: auto;
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

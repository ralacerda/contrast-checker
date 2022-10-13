<script setup>
import ColorGrid from "./components/ColorGrid.vue";
import { useColorStore } from "./stores/colors";
import ColorsPalette from "./components/ColorsPalette.vue";

const colorStore = useColorStore();
</script>

<template>
  <ColorsPalette
    :colorList="colorStore.backgroundColors"
    :defaultColor="'#E8E8E8'"
  />
  <ColorsPalette
    :colorList="colorStore.foregroundColors"
    :defaultColor="'#151515'"
  />
  <ColorGrid />
  <!-- 
  <div v-for="color in backgrounds" :key="color">
    {{ color }}
    <input type="color" id="favColor" v-model="color.value" />
    <input type="text" id="colorCode" v-model="color.value" />
    <button @click="removeBackground(color)">remove me</button>
    <button @click="copyBackground(color.value)"><file-copy-fill /></button>


  <div class="grid">
    <div
      v-for="backgroundColor in backgrounds"
      :key="backgroundColor"
      class="row"
    >
      <ColorBox
        v-for="foregroundColor in foregrounds"
        :key="foregroundColor"
        :background="backgroundColor.value"
        :foreground="foregroundColor"
        class="box"
      />
    </div>
  </div> -->
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: 1fr;
  gap: 10px;
}

.row {
  display: flex;
  gap: 10px;
}
</style>

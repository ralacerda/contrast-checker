<script setup>
import ColorBox from "./components/ColorBox.vue";

const foregrounds = ["#E9E9E9", "#FF2020", "#ECFF", "#2BF"];
const backgrounds = ["#111", "#222", "#333", "#444"];
</script>

<template>
  <div class="grid">
    <div
      v-for="backgroundColor in backgrounds"
      :key="backgroundColor"
      class="row"
    >
      <ColorBox
        v-for="foregroundColor in foregrounds"
        :key="foregroundColor"
        :background="backgroundColor"
        :foreground="foregroundColor"
        class="box"
      />
    </div>
  </div>
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

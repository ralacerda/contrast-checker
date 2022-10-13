<script setup>
import ColorBox from "./ColorBox.vue";
import { useColorStore } from "../stores/colors";

const colorStore = useColorStore();
</script>

<template>
  <div class="grid">
    <div
      v-for="backgroundColor in colorStore.backgroundColors"
      :key="backgroundColor"
    >
      <ColorBox
        v-for="foregroundColor in colorStore.foregroundColors"
        :key="foregroundColor"
        :background="backgroundColor"
        :foreground="foregroundColor"
      />
    </div>
  </div>
</template>

<style></style>

<script setup>
import ColorButton from "./ColorButton.vue";
import { useColorStore } from "../stores/colors";
import NewColor from "./NewColor.vue";

const colorStore = useColorStore();

function handleChange(color, newValue) {
  color.value = newValue;
}
</script>

<template>
  <ColorButton
    v-for="color in colorStore.foregroundColors"
    :key="color"
    :currentColor="color"
    @delete="colorStore.removeColor(color, colorStore.foregroundColors)"
    @duplicate="colorStore.duplicateColor(color, colorStore.foregroundColors)"
    @change="handleChange"
  />
  <NewColor @add="colorStore.addColor('#000', colorStore.foregroundColors)" />
</template>

<style></style>

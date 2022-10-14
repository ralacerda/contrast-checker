<script setup>
import VueColorInput from "vue-color-input";
import { useStorage } from "@vueuse/core";

const foregroundColors = useStorage("foregroundColors", []);
</script>

<template>
  <div v-for="(color, index) in foregroundColors" :key="index">
    <VueColorInput v-model="foregroundColors[index]" />
    {{ foregroundColors[index] }}
    <button @click="foregroundColors.splice(index, 1)">del me</button>
  </div>
  <button @click="foregroundColors.push('#fff')">new color</button>
</template>

<style scoped></style>

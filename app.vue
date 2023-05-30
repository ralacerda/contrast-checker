<script setup lang="ts">
import { useClipboard, useStorage } from "@vueuse/core";

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

const collection = useColorCollection();
</script>

<template>
  <div>
    <button @click="collection.resetAll">Reset</button>
    <button @click="collection.swap()">Swap</button>

    <ColorPickerRow rowName="foreground" />
    <ColorPickerRow rowName="background" />
  </div>

  <div></div>
</template>

<style>
html,
body {
  overscroll-behavior-y: contain;
}
</style>

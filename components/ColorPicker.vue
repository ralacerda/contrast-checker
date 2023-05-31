<script setup lang="ts">
const collection = useColorCollection();
</script>

<template>
  <!-- <button @click="collection.resetAll">Reset</button>
  <button @click="collection.swap">Swap</button> -->
  <ColorPickerRow rowName="foreground" class="pt-5" />
  <ColorPickerRow rowName="background" class="pt-5" />
</template>

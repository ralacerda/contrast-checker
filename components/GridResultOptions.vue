<script setup lang="ts">
const options = useOptions();
</script>

<template>
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
      <input type="checkbox" v-model="options.showText" />
      Result as text
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="options.enhancedContrast" />
      Enhanced contrast level
    </label>
  </div>
</template>

<style scoped>
.display-options {
  display: flex;
  gap: 0.2rem 1.5rem;
}
</style>

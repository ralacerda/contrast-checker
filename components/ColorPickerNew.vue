<script setup lang="ts">
defineEmits(["click"]);
</script>

<template>
  <button class="new-color button" @click="$emit('click')">
    <Icon name="mdi:water-plus" color="#707070" />
  </button>
</template>

<style scoped>
.new-color {
  height: 10ch;
  aspect-ratio: 1;
  margin-top: 24px;
}

.new-color > svg {
  font-size: 1.5rem;
  opacity: 0.4;
}
</style>

<script setup lang="ts">
defineProps<{
  colorCollection: ReturnType<typeof useColorCollection>;
}>();
</script>

<template>
  <div v-for="number in colorCollection.colors.value.length" :key="number">
    <ColorButton
      v-model="colorCollection.colors.value[number - 1]"
      @delete="colorCollection.deleteAt(number - 1)"
      @clone="colorCollection.clone(number - 1)"
    />
  </div>
</template>

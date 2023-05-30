<script setup lang="ts">
defineProps<{
  rowName: "foreground" | "background";
}>();

const colorCollection = useColorCollection();
</script>

<template>
  <div class="row">
    <div
      v-for="number in colorCollection.getColors(rowName).value.length"
      :key="number"
    >
      <ColorButton
        v-model="colorCollection.getColors(rowName).value[number - 1]"
        @delete="colorCollection.deleteAt(rowName, number - 1)"
        @clone="colorCollection.cloneColor(rowName, number - 1)"
      />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}
</style>

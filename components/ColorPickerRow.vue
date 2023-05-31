<script setup lang="ts">
defineProps<{
  rowName: "foreground" | "background";
}>();

const colorCollection = useColorCollection();
</script>

<template>
  <div>
    <p class="title is-4 mb-3">{{ rowName }} Colors</p>
    <div class="row">
      <div
        v-for="number in colorCollection.getColors(rowName).value.length"
        :key="number"
      >
        <ColorPickerButton
          v-model="colorCollection.getColors(rowName).value[number - 1]"
          @delete="colorCollection.deleteAt(rowName, number - 1)"
          @clone="colorCollection.cloneColor(rowName, number - 1)"
        />
      </div>
      <ColorPickerNew @click="colorCollection.addColor(rowName)" />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
}

p {
  text-transform: capitalize;
}
</style>

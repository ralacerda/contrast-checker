<script setup lang="ts">
const { background, foreground } = useColorCollection();

const inverted = ref(false);

const xAxis = computed(() =>
  inverted.value ? background.value : foreground.value
);
const yAxis = computed(() =>
  inverted.value ? foreground.value : background.value
);
</script>

<template>
  <div class="result-grid">
    <button @click="inverted = !inverted">B</button>
    <div v-for="column in xAxis">{{ column }}</div>

    <template v-for="(row, rowIndex) in yAxis">
      <div>{{ row }}</div>
      <template v-for="(column, columnIndex) in xAxis">
        <ColorBox
          :foreground="foreground[inverted ? rowIndex : columnIndex]"
          :background="background[inverted ? columnIndex : rowIndex]"
        />
      </template>
    </template>
  </div>
</template>

<style scoped>
.result-grid {
  display: grid;
  grid-template-columns: repeat(v-bind("xAxis.length + 1"), 120px);
  align-items: center;
  text-align: center;
  overflow-y: auto;
  gap: 1rem;
}
</style>

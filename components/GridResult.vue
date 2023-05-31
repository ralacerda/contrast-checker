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
  <GridResultOptions class="pt-5" />
  <div class="result-grid pt-2">
    <button @click="inverted = !inverted" class="button">
      <Icon name="mdi:cached" color="#707070" />
    </button>
    <div class="color-code" v-for="column in xAxis">
      <span :style="{ '--hex': column }" />
      {{ column }}
    </div>

    <template v-for="(row, rowIndex) in yAxis">
      <div class="color-code"><span :style="{ '--hex': row }" />{{ row }}</div>
      <template v-for="(column, columnIndex) in xAxis">
        <GridResultBox
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
  grid-template-columns: 80px repeat(v-bind("xAxis.length"), 120px);
  align-items: center;
  /* justify-items: center; */
  text-align: center;
  overflow-y: auto;
  gap: 1rem;
}

.color-code {
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  margin-inline: auto;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  gap: 0.2rem;
}

.color-code span {
  display: block;
  height: 12px;
  width: 12px;
  border: solid 1px #333f4820;
  background-color: var(--hex);
}
</style>

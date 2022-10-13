<script setup>
import ColorButton from "./ColorButton.vue";
import { useColorStore } from "../stores/colors";
import NewColor from "./NewColor.vue";

const props = defineProps(["colorList", "defaultColor"]);

const colorStore = useColorStore();

function handleChange(color, newValue) {
  color.value = newValue;
}
</script>

<template>
  <ColorButton
    v-for="color in props.colorList"
    :key="color"
    :currentColor="color"
    @delete="colorStore.removeColor(color, props.colorList)"
    @duplicate="colorStore.duplicateColor(color, props.colorList)"
    @change="handleChange"
  />
  <NewColor @add="colorStore.addColor(props.defaultColor, props.colorList)" />
</template>

<style></style>

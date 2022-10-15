<script setup>
import ColorInput from "vue-color-input";

const props = defineProps(["color"]);
defineEmits(["update:color"]);
</script>

<template>
  <ColorInput
    :value="color"
    @input="$emit('update:color', $event.target.value)"
  />
  {{ props.color }}
</template>

<style></style>

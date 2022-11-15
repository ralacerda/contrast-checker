<script setup>
import ColorInput from "vue-color-input";

defineProps(["modelValue"]);
defineEmits(["update:modelValue", "delete"]);
</script>

<template>
  <div>
    <ColorInput
      :modelValue="modelValue"
      @update:modelValue="(x) => $emit('update:modelValue', x)"
      format="hex string" />

    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />

    <button @click="$emit('delete')">Del</button>
  </div>
</template>

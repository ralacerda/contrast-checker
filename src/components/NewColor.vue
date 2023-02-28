<script setup>
import PlusColor from "~icons/mdi/water-plus";

defineEmits(["click"]);
</script>

<template>
  <button class="new-color" @click="$emit('click')">
    <plus-color style="font-size: 2em; opacity: 0.2" />
  </button>
</template>

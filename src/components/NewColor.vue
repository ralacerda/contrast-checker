<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["add"]);
</script>

<template>
  <button @click="$emit('add')" class="box">NEW COLOR</button>
</template>

<style scoped>
.box {
  height: 40px;
  width: 40px;
}
</style>

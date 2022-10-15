<script setup>
const props = defineProps(["background", "foreground"]);
</script>

<template>
  <div>TEXT</div>
</template>

<style scoped>
div {
  height: 60px;
  width: 60px;
  background: v-bind("props.background");
  color: v-bind("props.foreground");
}
</style>

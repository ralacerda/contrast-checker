<script setup>
const props = defineProps(["color"]);
</script>

<template>
  <div class="color-header">
    <div class="color-header__box" />
    {{ color }}
  </div>
</template>

<style>
.color-header {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.color-header__box {
  display: inline-block;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 10%;
  background-color: v-bind("props.color");
  position: relative;
}

.color-header__box::after {
  border: solid 1px #333f4820;
  content: "";
  position: absolute;
  inset: 0;
}
</style>

<script setup>
import { ref, watch } from "vue";
import ColorInput from "vue-color-input";
// eslint-disable-next-line no-unused-vars
const props = defineProps(["currentColor"]);
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["delete", "duplicate", "change"]);

const localColor = ref(props.currentColor.value);

watch(localColor, (newColor) => {
  emit("change", props.currentColor, newColor);
});
</script>

<template>
  <div>
    <color-input v-model="localColor" format="hex" disable-text-inputs />
    <input type="text" v-model="localColor" />
    <button @click="$emit('delete', props.currentColor)">Delete</button>
    <button @click="$emit('duplicate', props.currentColor)">Duplicate</button>
  </div>
</template>

<style scoped>
.box {
  height: 40px;
  width: 40px;
  background-color: v-bind("currentColor.value");
}

.color-picker {
  opacity: 0;
  height: 40px;
  width: 40px;
}
</style>

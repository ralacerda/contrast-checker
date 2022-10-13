<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(["currentColor"]);
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["delete", "duplicate", "change"]);
</script>

<template>
  <div>
    <div class="box">
      <input
        class="color-picker"
        type="color"
        :value="props.currentColor.value"
        @input="
          (event) => $emit('change', props.currentColor, event.target.value)
        "
      />
    </div>
    <button @click="$emit('delete', props.currentColor)">Delete</button>
    <button @click="$emit('duplicate', props.currentColor)">Duplicate</button>
    <input
      :value="props.currentColor.value"
      @input="
        (event) => $emit('change', props.currentColor, event.target.value)
      "
    />
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

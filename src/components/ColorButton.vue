<script setup>
import ColorInput from "vue-color-input";

defineProps(["modelValue"]);
defineEmits(["update:modelValue", "delete"]);
</script>

<template>
  <div class="color-button">
    <input
      class="input is-uppercase has-text-centered is-small"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />

    <ColorInput
      :modelValue="modelValue"
      @update:modelValue="(x) => $emit('update:modelValue', x)"
      disable-text-inputs
      format="hex string" />

    <button
      class="button is-small is-light is-danger delete-button"
      @click="$emit('delete')">
      Delete
    </button>
  </div>
</template>

<style>
.delete-button {
  width: 100%;
}

.color-button {
  max-width: 8ch;
}

.color-input {
  height: 8ch;
  width: 100%;
}

.color-input .box {
  height: 100%;
  width: 100%;
  border-radius: 3px;
  position: relative;
}

.color-input .color::after {
  height: 100% - 2px;
  width: 100% - 2px;
  border: solid 1px #333f4820;
  content: "";
  position: absolute;
  inset: 0;
}

.color-button .input {
  padding: 0;
  border: none;
  text-decoration: underline;
  box-shadow: none;
  margin-bottom: 0;
  background-color: unset;
  line-height: 1.2;
  height: 1.5rem;
}
</style>

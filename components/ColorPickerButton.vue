<script setup>
import ColorInput from "vue-color-input";
import { useClipboard } from "@vueuse/core";

const modelValue = defineModel();
defineEmits(["delete", "clone"]);

const { copy: copyToClipboard } = useClipboard();

const hover = ref("false");
</script>

<template>
  <div class="color-button">
    <input
      class="input is-uppercase has-text-centered is-small"
      v-model="modelValue"
    />

    <ColorInput v-model="modelValue" disable-text-inputs format="hex string" />

    <div class="button-row">
      <button
        class="button is-small"
        @click="copyToClipboard(modelValue.toUpperCase())"
      >
        <Icon name="mdi:content-copy" color="#707070" />
      </button>
      <button class="button is-small" @click="$emit('clone')">
        <Icon name="mdi:content-duplicate" color="#707070" />
      </button>
      <button class="button is-small" @click="$emit('delete')">
        <Icon name="mdi:trash" color="#707070" />
      </button>
    </div>
  </div>
</template>

<style>
.color-button {
  max-width: 10ch;
}

.color-button button.button {
  width: 100%;
  border: 1px solid #00000010;
  background: transparent;
}

.color-button button.button:hover {
  background-color: #00000015;
}

.button-row {
  display: flex;
}

.color-input {
  aspect-ratio: 1;
  width: 100%;
}

.color-button .color-input .box {
  height: 100%;
  width: 100%;
  border-radius: 3px;
  position: relative;
  background-color: unset;
  box-shadow: unset;
  color: unset;
  padding: unset;
  margin-bottom: 0;
}

.color-input .color::after {
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
  text-transform: uppercase;
}
</style>

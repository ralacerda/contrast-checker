<script setup>
import { hex } from "wcag-contrast";
import { computed } from "vue";

const props = defineProps(["background", "foreground"]);

const options = useOptions();

const contrastValue = computed(() => hex(props.background, props.foreground));

const contrastTest = computed(() => {
  let passThreshold = 4.5;
  let largeTextThreshold = 3;

  if (options.value.enhancedContrast) {
    passThreshold = 7;
    largeTextThreshold = 4.5;
  }

  if (contrastValue.value > passThreshold) {
    return "Pass";
  } else if (contrastValue.value > largeTextThreshold) {
    return "Large Text";
  } else {
    return "Fail";
  }
});

const shadowClass = computed(() => {
  if (!options.value.showShadows) return;

  if (contrastTest.value == "Pass") {
    return "shadow-green";
  } else if (contrastTest.value == "Large Text") {
    return "shadow-orange";
  } else {
    return "shadow-red";
  }
});
</script>

<template>
  <div class="box-wrapper" :class="shadowClass">
    <div class="color-box" :class="options.showPreview ? 'color-preview' : ''">
      {{ contrastValue.toFixed(2) }}
    </div>
    <div v-if="options.showText">
      {{ contrastTest }}
    </div>
  </div>
</template>

<style scoped>
.box-wrapper {
  display: grid;
  place-items: center;
  border: solid 1px gray;
  border-radius: 4px;
  padding: 6px;
  box-shadow: 0px 0px 20px #00000020;
}

.color-box {
  display: grid;
  place-items: center;
  font-size: 20px;
  height: 60px;
  width: 60px;
  border-radius: 6px;
}

.shadow-green {
  box-shadow: 3px 3px 16px -4px green;
  border-color: green;
}

.shadow-orange {
  box-shadow: 3px 3px 16px -4px orange;
  border-color: orange;
}

.shadow-red {
  box-shadow: 3px 3px 16px -4px red;
  border-color: red;
}

.color-preview {
  background: v-bind("props.background");
  color: v-bind("props.foreground");
}
</style>

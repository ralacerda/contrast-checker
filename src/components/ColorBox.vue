<script setup>
import { hex } from "wcag-contrast";

const props = defineProps(["background", "foreground", "options"]);

function contrastTest(contrast) {
  if (props.options.enhancedContrast.value) {
    return contrast > 7 ? "Pass" : contrast > 4.5 ? "Large Text" : "Fail";
  } else {
    return contrast > 4.5 ? "Pass" : contrast > 3 ? "Large Text" : "Fail";
  }
}

function shadowColor(contrastResult) {
  if (!props.options.showShadows.value) {
    return "0px 0px 20px #00000020";
  }
  switch (contrastResult) {
    case "Pass":
      return "0px 0px 10px green";
    case "Large Text":
      return "0px 0px 10px orange";
    case "Fail":
      return "0px 0px 10px red";
  }
}

function borderStyle(contrastResult) {
  if (!props.options.showBorders.value || contrastResult == "Pass") {
    return "solid";
  } else {
    return contrastResult == "Large Text" ? "dashed" : "dotted";
  }
}

function borderColor(contrastResult) {
  if (!props.options.showShadows.value) {
    return "black";
  } else {
    switch (contrastResult) {
      case "Pass":
        return "green";
      case "Large Text":
        return "orange";
      case "Fail":
        return "red";
    }
  }
}
</script>

<template>
  <div class="box-wrapper">
    <div
      class="color-box"
      :class="{ 'color-preview': options.showPreview.value }">
      {{ hex(background, foreground).toFixed(2) }}
    </div>
    <div v-if="options.showText.value">
      {{ contrastTest(hex(background, foreground)) }}
    </div>
  </div>
</template>

<style scoped>
.box-wrapper {
  width: 120px;
  height: 80px;
  display: grid;
  place-items: center;
  border-width: 1px;
  border-style: v-bind(
    "borderStyle(contrastTest(hex(background, foreground)))"
  );
  border-color: v-bind(
    "borderColor(contrastTest(hex(background, foreground)))"
  );
  border-radius: 4px;
  margin: 10px;
  box-shadow: v-bind("shadowColor(contrastTest(hex(background, foreground)))");
}

.color-box {
  display: grid;
  place-items: center;
  font-size: 20px;
  height: 60px;
  width: 60px;
}

.color-preview {
  background: v-bind("props.background");
  color: v-bind("props.foreground");
}
</style>

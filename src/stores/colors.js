import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useColorStore = defineStore("colors", () => {
  const backgroundColors = reactive([]);

  const foregroundColors = reactive([]);

  function addColor(color, list) {
    list.push(ref(color));
  }

  function removeColor(color, list) {
    list.splice(list.indexOf(color), 1);
  }

  function duplicateColor(color, list) {
    list.splice(list.indexOf(color), 0, ref(color.value));
  }

  return {
    backgroundColors,
    foregroundColors,
    addColor,
    removeColor,
    duplicateColor,
  };
});

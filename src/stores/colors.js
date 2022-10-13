import { defineStore } from "pinia";
import { reactive, ref } from "vue";

// export const useColorStore = defineStore("colors", {
//   state: () => ({ count: 0, name: "Eduardo" }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

export const useColorStore = defineStore("colors", () => {
  const backgroundColors = reactive([
    ref("black"),
    ref("blue"),
    ref("red"),
    ref("red"),
    ref("black"),
    ref("red"),
    ref("black"),
    ref("blue"),
    ref("red"),
  ]);
  function addBackground(color) {
    backgroundColors.push(color);
  }
  function removeBackground(color) {
    backgroundColors.splice(backgroundColors.indexOf(color), 1);
  }

  function duplicateBackground(color) {
    backgroundColors.splice(
      backgroundColors.indexOf(color),
      0,
      ref(color.value)
    );
  }

  return {
    backgroundColors,
    addBackground,
    removeBackground,
    duplicateBackground,
  };
});

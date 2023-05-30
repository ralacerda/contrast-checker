import { useStorage } from "@vueuse/core";

export default function (key: string, defaultColors: string[]) {
  const colors = useStorage(key, defaultColors);

  function deleteAt(index: number) {
    colors.value.splice(index, 1);
  }

  function clone(index: number) {
    const cloneValue = colors.value[index];
    colors.value.splice(index, 0, cloneValue);
  }

  return { colors, deleteAt, clone };
}

import { useStorage } from "@vueuse/core";

export type row = "foreground" | "background";

export default function () {
  const defaultValues = {
    foreground: ["#900498", "#02513c"],
    background: ["#e5ebec", "#161414"],
  };

  const rows = {
    foreground: useStorage("foregroundColors", defaultValues.foreground),
    background: useStorage("backgroundColors", defaultValues.background),
  };

  function getColors(key: row) {
    return rows[key];
  }

  function deleteAt(key: row, index: number) {
    rows[key].value.splice(index, 1);
  }

  function cloneColor(key: row, index: number) {
    const cloneValue = rows[key].value[index];
    rows[key].value.splice(index, 0, cloneValue);
  }

  function setColors(key: row, values: string[]) {
    getColors(key).value = values;
  }

  function addColor(key: row, value: string) {
    rows[key].value.push(value);
  }

  function resetAll() {
    setColors("foreground", defaultValues.foreground);
    setColors("background", defaultValues.background);
  }

  function swap() {
    [rows.background.value, rows.foreground.value] = [
      rows.foreground.value,
      rows.background.value,
    ];
  }

  return {
    getColors,
    deleteAt,
    cloneColor,
    setColors,
    resetAll,
    swap,
    ...rows,
  };
}

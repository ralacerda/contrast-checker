import { useStorage } from "@vueuse/core";

const defaultOptions = {
  showShadows: true,
  showPreview: true,
  showBorders: false,
  showText: false,
  enhancedContrast: false,
};

export default function () {
  const options = useStorage("options", defaultOptions);

  return options;
}

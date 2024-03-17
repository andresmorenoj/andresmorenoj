import { IColors } from "@theme/interfaces/categories/IColors";
import colorPalette from "@theme/baseTheme/colorPaletter";

export const colors: IColors = {
  primary: {
    neutralBlack: colorPalette.primary.neutralBlack,
    neutralWhite: colorPalette.primary.neutralWhite,
    neutral: colorPalette.primary.neutral,
  },
  secondary: {
    zinc100: colorPalette.secondary.zinc100,
    zinc200: colorPalette.secondary.zinc200,
    zinc300: colorPalette.secondary.zinc300,
    zinc500: colorPalette.secondary.zinc500,
    zinc800: colorPalette.secondary.zinc800,
  },
  error: {
    base: colorPalette.error.base,
  },
};

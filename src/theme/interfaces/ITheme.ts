import { ITypography, IColors, IMeasurements, IZIndex } from "./categories";
import { IThemeCategory } from "./IThemeCategory";

interface IThemeBase {
  [category: string]: IThemeCategory<any>;
}

// this is the specific interface that the theme must have

export interface ITheme extends IThemeBase {
  colors: IColors;
  typography: ITypography;
  measurements: IMeasurements;
  zIndex: IZIndex;
}

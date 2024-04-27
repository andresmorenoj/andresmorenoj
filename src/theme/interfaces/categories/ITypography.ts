import { IThemeCategory } from '../IThemeCategory';

type TFont = string;
type TTypographySize = string;
type TWeight = number;
type TTypography = TFont | TTypographySize | TWeight;

export interface ITypography extends IThemeCategory<TTypography> {
  fonts: {
    primary: TFont;
  };
  rootFontSize: TTypographySize;
  sizes: {
    extraExtraJumbo: TTypographySize;
    extraJumbo: TTypographySize;
    extraExtraLarge: TTypographySize;
    extraLarge: TTypographySize;
    extraSmall: TTypographySize;
    jumbo: TTypographySize;
    large: TTypographySize;
    medium: TTypographySize;
    small: TTypographySize;
  };
  weights: {
    xxThin: TWeight;
    xThin: TWeight;
    thin: TWeight;
    normal: TWeight;
    regular: TWeight;
    black: TWeight;
    bold: TWeight;
    extraBold: TWeight
  };
}

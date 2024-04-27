import { ITypography } from '@theme/interfaces/categories/ITypography';
export const typography: ITypography = {
  fonts: {
    primary: 'Sora',
  },
  rootFontSize: '16px', // base for 1rem
  sizes: {
    // https://nekocalc.com/px-to-rem-converter
    extraExtraJumbo: '3.5em', // 56px
    extraJumbo: '3.25rem', // 52px
    jumbo: '2.063rem', // 33px
    extraExtraLarge: '1.563rem', // 25px
    extraLarge: '1.313rem', // 21px
    large: '1.125rem', // 18px
    medium: '1rem', // 16px
    small: '0.875rem', // 14px
    extraSmall: '0.75rem', // 12px
  },
  weights: {
    xxThin: 100,
    xThin: 200,
    thin: 300,
    normal: 400,
    regular: 500,
    black: 600,
    bold: 700,
    extraBold: 800
  },
};

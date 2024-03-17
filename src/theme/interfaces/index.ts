import { DefaultTheme } from 'styled-components';

// import { IColors } from '@theme/abstract/theme.colors';

import { ITheme } from './ITheme';

/**
 * This adds typescript recognition to theme
 */

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export * from './ITheme';
export default DefaultTheme;

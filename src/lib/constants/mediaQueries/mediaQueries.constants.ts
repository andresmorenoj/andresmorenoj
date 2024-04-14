export type TScreenSize = 'small' | 'medium' |'large';

type TBreakPointSizes = {[key in TScreenSize]: number};

/**
 * these are the LOWER bounds for desired screen sizes,
 */

export const breakPointSizes: TBreakPointSizes = {
  large: 1024,
  medium: 680,
  small: 0,
};

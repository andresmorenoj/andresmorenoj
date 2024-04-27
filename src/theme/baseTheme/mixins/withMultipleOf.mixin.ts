import { css } from 'styled-components';

import { ITheme } from '@theme/interfaces';

export type Measures = Exclude<keyof ITheme['measurements'], 'shadows' | 'linewidths'>;

export const withMultipleOf = (measure: Measures, multi = 1) => {
  const calculatedMeasure = css(({ theme }) => {
    const measurement = theme.measurements[measure];
    const value = measurement.toString().split('px')[0];
    const multiple = parseInt(value, 10) * multi;

    return `${multiple}px`;
  });

  return calculatedMeasure as unknown as string;
};

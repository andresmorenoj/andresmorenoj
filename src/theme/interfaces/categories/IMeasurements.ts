import { IThemeCategory } from '../IThemeCategory';

type VerifyCompatibility<T extends Base, Base> = T;

export type IMeasurements = VerifyCompatibility<
  {
    zero: '0';
    extraExtraSmall: string;
    extraSmall: string;
    extraLarge: string;
    extraExtraLarge: string;
    large: string;
    medium: string;
    small: string;
    shadows: {
      'elevation-1': string;
      'elevation-2': string;
      'elevation-3': string;
      'elevation-4': string;
      'elevation-5': string;
      'elevation-6': string;
    };
    linewidths: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
    };
  },
  IThemeCategory<string>
>;

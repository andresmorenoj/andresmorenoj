import { IThemeCategory } from '../IThemeCategory';

export interface IZIndex extends IThemeCategory<number> {
  root: { header: number; main: number; footer: number; };
  navigation: { default: number };
}

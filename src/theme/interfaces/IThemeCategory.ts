import { IThemeState } from "./IThemeState";

type TCategoryValue<TValue> = IThemeState<TValue> | TValue;

export interface IThemeCategory<TValue> {
  [subcategory: string]: TCategoryValue<TValue>;
}

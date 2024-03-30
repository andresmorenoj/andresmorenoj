import { css, RuleSet } from "styled-components";
import { theme } from "@theme/theme.main";

export const withBorder = (
  color: string = theme.colors.primary.neutralBlack,
  size = "1px"
): RuleSet =>
  css`
    border: ${size} solid ${color};
  `;

export const withBorderRadius = (
  borderRadius: string = theme.measurements.extraExtraSmall
): RuleSet =>
  css`
    border-radius: ${borderRadius};
  `;

import { css, RuleSet } from "styled-components";

export const withFlexContentCentered: () => RuleSet =
  () => css`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  `;

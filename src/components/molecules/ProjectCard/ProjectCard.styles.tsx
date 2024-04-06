import { withBorderRadius } from "@theme/baseTheme/mixins";
import styled, { css } from "styled-components";

export const StyledCardContainer = styled.article(({ theme }) => {
  return css`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
  `;
});

export const StyledImageWrapper = styled.div(({ theme }) => {
  return css`
    img {
      -webkit-box-shadow: 0px 0px 30px -6px ${theme.colors.secondary.zinc300};
      -moz-box-shadow: 0px 0px 30px -6px ${theme.colors.secondary.zinc300};
      box-shadow: 0px 0px 30px -6px ${theme.colors.secondary.zinc300};
      ${withBorderRadius(theme.measurements.medium)}
      background: ${theme.colors.primary.neutralWhite};
    }
  `;
});

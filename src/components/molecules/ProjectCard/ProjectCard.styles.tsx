import { withBorderRadius } from "@theme/baseTheme/mixins";
import styled, { css } from "styled-components";

export const StyledCardContainer = styled.article(({ theme }) => {
  return css`
    width: 100%;

    display: flex;
    align-items: center;
    gap: ${theme.measurements.extraExtraLarge};
  `;
});

export const StyledImageWrapper = styled.div(({ theme }) => {
  return css`
    width: 530px;
    height: 400px;

    img {
      ${withBorderRadius(theme.measurements.medium)}
    }
  `;
});

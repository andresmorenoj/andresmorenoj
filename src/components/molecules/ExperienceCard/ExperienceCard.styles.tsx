import styled, { css } from "styled-components";

import { withBorder, withBorderRadius } from "@theme/baseTheme/mixins";

export const StyledItemContainer = styled.li(({ theme }) => {
  return css`
    padding: ${theme.measurements.large};
    letter-spacing: 0.5px;

    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.medium};

    ${withBorder(theme.colors.secondary.zinc500, "1px")};
    ${withBorderRadius("10px")};
  `;
});

export const StyledHeadingWrapper = styled.div(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.measurements.small};

    * {
      color: ${theme.colors.primary.neutralWhite};
    }
  `;
});

export const StyledHeadingWithIcon = styled.div(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    gap: ${theme.measurements.large};
  `;
});


export const StyledDescription = styled.p(({ theme }) => {
  return css`
    color: ${theme.colors.secondary.zinc300};
    line-height: ${theme.measurements.medium};
  `;
});

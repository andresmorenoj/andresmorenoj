import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    padding: 0 ${withMultipleOf("medium", 4)};

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: ${theme.measurements.extraExtraLarge};

    h2 {
      justify-self: center;
    }
  `;
});

export const StyledCardsContainer = styled.ul(({ theme }) => {
  return css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    gap: ${theme.measurements.large};
  `;
});

export const StyledListItem = styled.li(() => {
  return css`
    display: grid;
  `;
});

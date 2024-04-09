import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    width: 100%;
    height: auto;
    padding: 0 ${withMultipleOf("medium", 4)};

    display: grid;
    grid-template-columns: 55% 45%;
    align-items: center;
    box-sizing: border-box;
    row-gap: ${theme.measurements.large};

    figure {
      justify-self: center;

      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 2;
    }

    ul {
      align-self: center;
    }
  `;
});

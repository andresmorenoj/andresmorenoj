import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";

export const StyledFooterContainer = styled.footer(({ theme }) => {
  return css`
    padding: 0 ${withMultipleOf("medium", 4)} ${theme.measurements.extraLarge};
		background: ${theme.colors.secondary.zinc100};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    div:first-child {
      justify-self: center;
    }
  `;
});

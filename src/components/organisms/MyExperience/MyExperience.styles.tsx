import { withMultipleOf } from "@theme/baseTheme/mixins";
import styled, { css } from "styled-components";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    padding: ${theme.measurements.extraExtraLarge} ${withMultipleOf('medium', 4)};

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: ${theme.measurements.extraExtraLarge};

		background: ${theme.colors.primary.neutralBlack};

    h2 {
      justify-self: center;
			color: ${theme.colors.primary.neutralWhite};
    }
  `;
});

export const StyledCardContainer = styled.ol(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.large};
    padding: 0;
    margin: 0;
  `;
});

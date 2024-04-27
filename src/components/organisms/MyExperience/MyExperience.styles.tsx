import { withMultipleOf } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";
import styled, { css } from "styled-components";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    padding-block: ${theme.measurements.extraLarge};
    padding-inline: ${theme.measurements.small};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: ${theme.measurements.extraLarge};

		background: ${theme.colors.primary.neutralBlack};

    h2 {
      justify-self: center;
			color: ${theme.colors.primary.neutralWhite};
    }

    @media ${getMedia('mobileFirst', 'medium')} {
      padding-inline: ${theme.measurements.medium};
    }

    @media ${getMedia('mobileFirst', 'large')} {
      padding-inline: ${withMultipleOf('medium', 4)};
      gap: ${theme.measurements.extraExtraLarge};
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

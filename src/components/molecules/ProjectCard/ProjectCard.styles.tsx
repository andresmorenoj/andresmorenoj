import { withBorderRadius } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";
import styled, { css } from "styled-components";

export const StyledCardContainer = styled.article(({ theme }) => {
  return css`
    width: 90%;
    margin: 0 auto;

    display: grid;
    
    grid-template-columns: 1fr;
    align-items: center;
    gap: ${theme.measurements.large};

    figure {
      max-width: 100%;
    }

    img {
      -webkit-box-shadow: 0px 0px 30px -6px ${theme.colors.secondary.zinc300};
      -moz-box-shadow: 0px 0px 30px -6px ${theme.colors.secondary.zinc300};
      box-shadow: 0px 0px 30px -6px ${theme.colors.secondary.zinc300};
      background: ${theme.colors.primary.neutralWhite};

      ${withBorderRadius(theme.measurements.extraSmall)};
      
      @media ${getMedia('mobileFirst', 'medium')} {
        ${withBorderRadius(theme.measurements.small)};
      }

      @media ${getMedia('mobileFirst', 'large')} {
        ${withBorderRadius(theme.measurements.medium)};
      }
    }

    @media ${getMedia('mobileFirst', 'medium')} {
      gap: ${theme.measurements.extraLarge};
    }

    @media ${getMedia('mobileFirst', 'large')} {
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.measurements.extraExtraLarge};
    }
  `;
});

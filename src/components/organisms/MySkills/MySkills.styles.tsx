import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    padding: 0 ${theme.measurements.medium};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: ${theme.measurements.extraLarge};

    h2 {
      justify-self: center;
    }

    @media ${getMedia("mobileFirst", "large")} {
      gap: ${theme.measurements.extraExtraLarge};
      padding: 0 ${withMultipleOf("medium", 4)};
    }
  `;
});

export const StyledCardsContainer = styled.ul(({ theme }) => {
  return css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    gap: ${theme.measurements.large};

    @media ${getMedia('mobileFirst', 'medium')} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${getMedia('mobileFirst', 'large')} {
      grid-template-columns: repeat(5, 1fr);
    }
  `;
});

export const StyledListItem = styled.li(() => {
  return css`
    display: grid;
    width: 100%;
    // max-width: 50px;
  `;
});

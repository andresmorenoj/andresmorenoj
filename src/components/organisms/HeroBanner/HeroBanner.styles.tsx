import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    width: 100%;
    height: auto;
    padding: 0 ${theme.measurements.small};
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    row-gap: ${theme.measurements.extraLarge};
    
    @media ${getMedia("mobileFirst", "medium")} {
      padding-inline: ${theme.measurements.medium};
    }
    @media ${getMedia("mobileFirst", "large")} {
      grid-template-columns: 55% 45%;
      row-gap: ${theme.measurements.extraLarge};
    }

    ul {
      align-self: center;
    }
  `;
});

export const StyledImageLineContainer = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: ${theme.measurements.extraExtraSmall} solid
      ${theme.colors.primary.neutralBlack};

    grid-row-start: 1;

    @media ${getMedia("mobileFirst", "large")} {
      border: none;

      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 2;
    }
  `;
});

export const StyledLine = styled.hr(({ theme }) => {
  return css`
    width: 100%;
    height: 5px;
    color: ${theme.colors.primary.neutralBlack};

    grid-row-start: 2;
  `;
});

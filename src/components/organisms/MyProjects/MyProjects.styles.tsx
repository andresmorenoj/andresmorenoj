import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

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

    @media ${getMedia("mobileFirst", "medium")} {
      padding-inline: ${theme.measurements.medium};
      gap: ${withMultipleOf("medium", 3)};
    }

    @media ${getMedia("mobileFirst", "large")} {
      padding-inline: ${withMultipleOf("medium", 3)};
      gap: ${withMultipleOf("medium", 5)};
    }
  `;
});

export const StyledCardContainer = styled.ol(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.measurements.extraExtraLarge};
    padding: 0;
    margin: 0;

    @media ${getMedia("mobileFirst", "large")} {
      & li:nth-child(even) {
        article {
          > :first-child {
            order: 2;
            justify-self: end;
          }
        }
      }
    }
  `;
});

export const StyledListItem = styled.li(() => {
  return css`
    width: 100%;
  `;
});

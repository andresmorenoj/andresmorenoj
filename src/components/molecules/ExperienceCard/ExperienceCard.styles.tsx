import styled, { css } from "styled-components";

import { withBorder, withBorderRadius } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

export const StyledItemContainer = styled.li(({ theme }) => {
  return css`
    padding: ${theme.measurements.medium};
    letter-spacing: 0.5px;

    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.medium};

    ${withBorder(theme.colors.secondary.zinc500, "1px")};
    ${withBorderRadius("10px")};

    @media ${getMedia('mobileFirst', 'medium')} {
      padding: ${theme.measurements.large};
    }
  `;
});

export const StyledHeadingWrapper = styled.div(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${theme.measurements.small};

    * {
      color: ${theme.colors.primary.neutralWhite};
    }

    span {
      font-size: ${theme.typography.sizes.small};

      @media ${getMedia("mobileFirst", "medium")} {
        font-size: inherit;
      }
    }

    @media ${getMedia("mobileFirst", "medium")} {
      flex-direction: row;
      align-items: center;
    }
  `;
});

export const StyledHeadingWithIcon = styled.div(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    gap: ${theme.measurements.small};

    h3 {
      @media ${getMedia("mobileFirst", "medium")} {
        max-width: 250px;
      }

      @media ${getMedia("mobileFirst", "large")} {
        max-width: initial;
      }
    }

    @media ${getMedia("mobileFirst", "medium")} {
      gap: ${theme.measurements.medium};
    }

    @media ${getMedia("mobileFirst", "large")} {
      gap: ${theme.measurements.large};
    }
  `;
});

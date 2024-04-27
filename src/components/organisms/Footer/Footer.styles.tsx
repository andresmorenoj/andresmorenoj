import styled, { css } from "styled-components";

import { withMultipleOf } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

export const StyledFooterContainer = styled.footer(({ theme }) => {
  return css`
    padding: 0 ${theme.measurements.small} ${theme.measurements.extraLarge};
    background: ${theme.colors.secondary.zinc100};

    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: ${theme.measurements.extraExtraLarge};

    div:first-child {
      order: 2;
    }

    div:last-child {
      flex-direction: column-reverse;
      h3 {
        line-height: ${withMultipleOf("medium", 2)};
      }
    }

    @media ${getMedia("mobileFirst", "medium")} {
      padding-inline: ${theme.measurements.medium};
    }

    @media ${getMedia("mobileFirst", "large")} {
      grid-template-columns: repeat(2, 1fr);
      padding-inline: ${withMultipleOf("medium", 4)};

      div:first-child {
        order: initial;
        justify-self: center;
      }

      div:last-child {
        flex-direction: column;
      }
    }
  `;
});

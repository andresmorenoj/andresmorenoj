import styled, { css } from "styled-components";

import { getMedia } from "@utils/index";
import { Paragraph } from "@components/atoms";
import { withMultipleOf } from "@theme/baseTheme/mixins";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    padding: 0 ${theme.measurements.small};

    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: ${theme.measurements.extraLarge};

    figure {
      justify-self: center;
      max-width: 85%;

      @media ${getMedia("mobileFirst", "medium")} {
        max-width: 70%;
      }

      @media ${getMedia("mobileFirst", "large")} {
        justify-self: end;
        max-width: 750px;
      }
    }

    @media ${getMedia("mobileFirst", "medium")} {
      padding-inline: ${theme.measurements.medium};
    }

    @media ${getMedia("mobileFirst", "large")} {
      grid-template-columns: repeat(2, 1fr);

      padding-inline: ${withMultipleOf("medium", 4)};
    }
  `;
});

export const StyledTextsWrapper = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: space-evently;
    gap: ${theme.measurements.large};

    h2 {
      margin-bottom: ${theme.measurements.small};
    }

    p {
      letter-spacing: 0.5px;
      line-height: ${theme.measurements.medium};
    }
  `;
});

export const StyledParagraph = styled(Paragraph)(({ theme }) => {
  return css`
    padding: ${theme.measurements.zero};
    margin: ${theme.measurements.zero};
  `;
});

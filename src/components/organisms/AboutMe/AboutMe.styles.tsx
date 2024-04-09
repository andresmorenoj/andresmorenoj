import styled, { css } from "styled-components";

import { Paragraph } from "@components/atoms";
import { withMultipleOf } from "@theme/baseTheme/mixins";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
  padding: 0 ${withMultipleOf("medium", 4)};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: ${theme.measurements.extraLarge};

    figure {
      justify-self: end;
      max-width: 750px;
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

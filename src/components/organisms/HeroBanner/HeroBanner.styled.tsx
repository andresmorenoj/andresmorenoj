import styled, { css } from "styled-components";

export const StyledSectionContainer = styled.section(({theme}) => {
  return css`
    display: grid;
    grid-template-columns: 55% 45%;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 0 90px;
    box-sizing: border-box;
    row-gap: ${theme.measurements.large};

    figure {
      align-self: start;

      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 2;
    }

    ul {
      align-self: center;
    }
  `;
});

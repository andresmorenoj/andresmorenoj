import styled, { css } from "styled-components";

export const StyledIconAnchor = styled.a(({ theme }) => {
  return css`
    width: fit-content;

    &:focus,
    &:hover {
      outline: none;
      * {
        background: ${theme.colors.primary.neutralBlack};
        color: ${theme.colors.primary.neutralWhite};
      }
    }
  `;
});

import styled, { css } from "styled-components";

export const StyledFooterContactContainer = styled.div(({ theme }) => {
  return css`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.extraLarge};
  `;
});

import styled, { css } from "styled-components";

export const StyledFooterContainer = styled.footer(() => {
  return css`
    padding: 0 90px;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;

		div:first-child {
			justify-self: center
		}
  `;
});
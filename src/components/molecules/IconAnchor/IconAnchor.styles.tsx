import styled, { css } from "styled-components";

export const StyledIconAnchor = styled.a(({ theme }) => {
  return css`
	&:focus, &:hover {
		outline: none;

		div, * {
			background: ${theme.colors.primary.neutralBlack};
			color: ${theme.colors.primary.neutralWhite};
		}
	`;
});

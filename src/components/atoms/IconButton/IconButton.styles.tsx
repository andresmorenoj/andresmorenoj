import { withBorder } from "@theme/baseTheme/mixins";
import styled, { css } from "styled-components";

export const StyledButton = styled.button(({ theme }) => {
  return css`
    background: transparent;
		border: none;
		outline: none;
		padding: ${theme.measurements.extraSmall};
		cursor: pointer;
		height: fit-content;

		&:hover, &:focus {
			outline: 2px solid ${theme.colors.primary.neutralBlack} 
		}
  `;
});

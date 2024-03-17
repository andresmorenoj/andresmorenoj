import styled, { css } from "styled-components";

export const StyledNewComponentContainer = styled.div(({theme}) => {
	return css`
		width: 500px;
		height: 200px;
		background-color: green;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.primary.neutralWhite};
		
		h1 {
			font-weight: ${theme.typography.weights.normal}
		}
	`;
})
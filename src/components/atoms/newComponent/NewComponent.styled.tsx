import styled, { css } from "styled-components";

export const StyledNewComponentContainer = styled.div(() => {
	return css`
		width: 500px;
		height: 200px;
		background-color: green;
		display: flex;
		align-items: center;
		justify-content: center;
		color: yellow;
	`;
})
import styled, { css } from "styled-components";

export const StyledSectionContainer = styled.section(({theme}) => {
  return css`
    padding: 0 90px;

		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		gap: ${theme.measurements.extraExtraLarge};

		h2 {
			justify-self: center;
		}
  `;
});

export const StyledCardsContainer = styled.ul(({theme}) => {
	return css`
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: ${theme.measurements.small}
	`;
})

import styled, { css } from "styled-components";

export const StyledMainContainer = styled.main(({ theme }) => {
  return css`
	background: ${theme.colors.secondary.zinc100};
    padding: ${theme.measurements.extraExtraLarge} ${theme.measurements.zero};

		display: flex;
		flex-direction: column;
		gap: ${theme.measurements.extraLarge};
  `;
});

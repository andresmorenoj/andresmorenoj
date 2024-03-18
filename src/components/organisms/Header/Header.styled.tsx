import styled, { css } from "styled-components";
import { withFlexContentCentered } from "@theme/baseTheme/mixins";

export const StyledHeader = styled.header(({ theme }) => {
	return css`
		width: 100%;
		height: 100px;

		${withFlexContentCentered()}
		gap: ${theme.measurements.large};

		position: sticky;
		top: 0;

		background: ${theme.colors.primary.neutralWhite}
	`
})
import styled, { css } from "styled-components";

import { Heading } from "@components/atoms";
import { IconAnchor } from '@components/molecules/IconAnchor/IconAnchor.component'

export const StyledHeading = styled(Heading)(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
		gap: ${theme.measurements.medium};
		
		span:first-child {
			line-height: ${theme.measurements.zero};
			font-size: ${theme.typography.sizes.extraJumbo}
		}
  `;
});

export const StyledDescription = styled.p(({ theme }) => {
  return css`
    color: ${theme.colors.secondary.zinc500};
    line-height: ${theme.measurements.medium};
  `;
});

export const StyledAnchor = styled(IconAnchor)(({theme}) => {
	return css`
		* {
			color: red;
		}
	`
})
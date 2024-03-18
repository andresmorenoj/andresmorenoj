import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledMenuItem = styled(Link)(({ theme }) => {
  return css`
		color: ${theme.colors.primary.neutralBlack};
		font-size: ${theme.typography.sizes.large};

		&:hover {
			color: ${theme.colors.primary.neutral};
			text-decoration: underline;
		}
	`;
});

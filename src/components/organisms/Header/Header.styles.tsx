import styled, { css } from "styled-components";
import { withFlexContentCentered } from "@theme/baseTheme/mixins";

export const StyledHeader = styled.header(({ theme }) => {
  return css`
	position: sticky;
	top: 0;
	z-index: ${theme.zIndex.navigation.default};
}
	`;
});

export const StyledNavList = styled.ul(({ theme }) => {
  return css`
    width: 100%;
    height: 100px;

    ${withFlexContentCentered()}
    gap: ${theme.measurements.large};

    background: ${theme.colors.primary.neutralWhite};
  `;
});

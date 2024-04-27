import styled, { css } from "styled-components";
import { withFlexContentCentered } from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

export const StyledHeader = styled.header(({ theme }) => {
  return css`
	position: sticky;
	top: 0;
	z-index: ${theme.zIndex.navigation.default};
  padding-inline: ${theme.measurements.medium};
  padding-block: ${theme.measurements.extraSmall};
  
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(${theme.measurements.extraSmall});

  @media ${getMedia('mobileFirst', 'large')} {
    padding-block: ${theme.measurements.large};
  }
}
	`;
});

export const StyledNavContainer = styled.nav(() => {
  return css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      align-self: flex-start;
    }

    @media ${getMedia('mobileFirst', 'large')} {
      ${withFlexContentCentered()}
    }
  `;
});

export const StyledNavList = styled.ul(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: ${theme.measurements.small};
    gap: ${theme.measurements.large};

    @media ${getMedia('mobileFirst', 'large')} {
      flex-direction: row;
      padding-block: ${theme.measurements.zero};
      ${withFlexContentCentered()};
    }
  `;
});

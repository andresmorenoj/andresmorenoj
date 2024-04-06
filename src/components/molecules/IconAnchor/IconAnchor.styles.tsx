import styled, { css } from "styled-components";
import { IIconAnchor } from './IconAnchor.component';

export const StyledIconAnchor = styled.a<Pick<IIconAnchor, 'isDarkBackgound'>>(({ theme,  isDarkBackgound}) => {
  return css`
    width: fit-content;

    &:focus,
    &:hover {
      outline: none;

      * {
        ${!isDarkBackgound && `background: ${theme.colors.primary.neutralBlack}`};
        color: ${theme.colors.primary.neutralWhite};
      }
    }
  `;
});

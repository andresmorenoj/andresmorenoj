import styled, { DefaultTheme, css } from "styled-components";
import { IText, TTextVariant } from "./Text.component";
import { getMedia } from "@utils/index";

const styledTextVariant = (theme: DefaultTheme, variant: TTextVariant) => {
  switch (variant) {
    case "normal":
      return css`
        font-weight: ${theme.typography.weights.thin};
      `;
    case "semiBold":
      return css`
        font-weight: ${theme.typography.weights.bold};
      `;
    case "bold":
      return css`
        font-weight: ${theme.typography.weights.extraBold};
      `;
    case "outline":
      return css`
        color: ${theme.colors.primary.neutralWhite};
        text-shadow: 1px 1px 0 ${theme.colors.primary.neutralBlack},
          -1px 1px 0 ${theme.colors.primary.neutralBlack},
          -1px -1px 0 ${theme.colors.primary.neutralBlack},
          1px -1px 0 ${theme.colors.primary.neutralBlack};
          
        @media ${getMedia("mobileFirst", "medium")} {
          text-shadow: 2px 2px 0 ${theme.colors.primary.neutralBlack},
            -2px 2px 0 ${theme.colors.primary.neutralBlack},
            -2px -2px 0 ${theme.colors.primary.neutralBlack},
            2px -2px 0 ${theme.colors.primary.neutralBlack};
        }
      `;
    default:
      return css`
        font-weight: ${theme.typography.weights.normal};
      `;
  }
};

export const StyledText = styled.span<IText>(
  ({ theme, variant }) => css`
    ${styledTextVariant(theme, variant)}
  `
);

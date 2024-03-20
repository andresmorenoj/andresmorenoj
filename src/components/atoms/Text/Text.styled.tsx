import styled, { DefaultTheme, css } from "styled-components";
import { IText, TTextVariant } from "./Text.component";

const styledTextVariant = (theme: DefaultTheme, variant: TTextVariant) => {
  switch (variant) {
    case "normal":
      return css`
        text-weight: ${theme.typography.weights.normal};
      `;
    case "semiBold":
      return css`
        text-weight: ${theme.typography.weights.bold};
      `;
    case "bold":
      return css`
        text-weight: ${theme.typography.weights.extraBold};
      `;
    case "outline":
      return css`
        color: ${theme.colors.primary.neutralWhite};
        text-shadow: 2px 2px 0 ${theme.colors.primary.neutralBlack},
          -2px 2px 0 ${theme.colors.primary.neutralBlack},
          -2px -2px 0 ${theme.colors.primary.neutralBlack},
          2px -2px 0 ${theme.colors.primary.neutralBlack};
      `;
    default:
      return css`
        text-weight: ${theme.typography.weights.normal};
      `;
  }
};

export const StyledText = styled.span<IText>(
  ({ theme, variant }) => css`
    ${styledTextVariant(theme, variant)}
  `
);

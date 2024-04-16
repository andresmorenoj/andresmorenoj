import styled, { DefaultTheme, css } from "styled-components";

import { IIConCard, TVariant } from "./IconCard.component";
import {
  withFlexContentCentered,
  withBorder,
  withBorderRadius,
} from "@theme/baseTheme/mixins";

const variantStyles = (theme: DefaultTheme, variant: TVariant) => {
  if (variant === "default") {
    return css`
      padding: calc(
        ${theme.measurements.medium} - ${theme.measurements.extraExtraSmall}
      );
    `;
  } else {
    return css`
      width: 200px;
      max-width: 300px;
      height: 200px;

      flex-direction: column;
      justify-self: center;
      gap: ${theme.measurements.medium};
    `;
  }
};

export const StyledWrapper = styled.div<Omit<IIConCard, "icon">>(
  ({ theme, variant }) => {
    return css`
    background: ${theme.colors.primary.neutralWhite};
      ${withFlexContentCentered()};
      ${withBorder(theme.colors.primary.neutralBlack, "2px")};
      ${withBorderRadius(theme.measurements.extraSmall)};
      ${variantStyles(theme, variant)};
    `;
  }
);

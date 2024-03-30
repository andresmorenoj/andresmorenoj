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
      flex-direction: column;
      gap: ${theme.measurements.medium};
      padding: calc(
          ${theme.measurements.extraLarge} - ${theme.measurements.medium}
        )
        ${theme.measurements.extraLarge};
    `;
  }
};

export const StyledWrapper = styled.div<Omit<IIConCard, "icon">>(
  ({ theme, variant }) => {
    return css`
      ${withFlexContentCentered()};
      ${withBorder(theme.colors.primary.neutralBlack, "2px")};
      ${withBorderRadius(theme.measurements.extraSmall)};
      ${variantStyles(theme, variant)};
    `;
  }
);

import styled, { DefaultTheme, css } from "styled-components";

import { IIConCard, TVariant } from "./IconCard.component";
import {
  withFlexContentCentered,
  withBorder,
  withBorderRadius,
} from "@theme/baseTheme/mixins";
import { getMedia } from "@utils/index";

const variantStyles = (theme: DefaultTheme, variant: TVariant) => {
  if (variant === "default") {
    return css`
      padding: ${theme.measurements.extraSmall};

      @media ${getMedia("mobileFirst", "medium")} {
        padding: calc(
          ${theme.measurements.medium} - ${theme.measurements.extraExtraSmall}
        );
      }
    `;
  } else {
    return css`
      width: 100%;
      max-width: 150px;
      padding-block: ${theme.measurements.large};

      flex-direction: column;
      justify-self: center;
      gap: ${theme.measurements.medium};

      @media ${getMedia('mobileFirst', 'medium')} {
        max-width: 200px;
        padding-block: ${theme.measurements.large};
      }

      @media ${getMedia('mobileFirst', 'large')} {
        max-width: 300px;
      }
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

import styled, { css } from "styled-components";
import { ITextsContent } from "./TextsContentContainer.component";

export const StyledContainer = styled.div<Pick<ITextsContent, "variant">>(
  ({ theme, variant }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.small};

    & .container__title {
      line-height: ${theme.measurements.extraExtraLarge};
      color: ${variant === "black"
        ? theme.colors.primary.neutralBlack
        : theme.colors.primary.neutralWhite};
    }

    & .container__description {
      font-size: ${theme.typography.sizes.medium};
      color: ${theme.colors.secondary.zinc500};
      line-height: ${theme.measurements.medium};
    }
  `
);

import styled, { css } from "styled-components";
import { ITextsContent } from "./TextsContentContainer.component";
import { getMedia } from "@utils/index";

export const StyledContainer = styled.div<Pick<ITextsContent, "variant">>(
  ({ theme, variant }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.small};

    line-height: ${theme.measurements.large};

    & .container__title {
      @media ${getMedia("mobileFirst", "medium")} {
        line-height: ${theme.measurements.extraLarge};
      }

      @media ${getMedia("mobileFirst", "large")} {
        line-height: ${theme.measurements.extraExtraLarge};
      }
      color: ${variant === "black"
        ? theme.colors.primary.neutralBlack
        : theme.colors.primary.neutralWhite};
    }
  `
);

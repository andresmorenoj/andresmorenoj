import { Heading } from "@components/atoms";
import styled, { css } from "styled-components";
import { ITextsContent } from "./TextsContentContainer.component";

export const StyledContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.measurements.medium};
  `
);

export const StyledTitle = styled(Heading)<ITextsContent>(
  ({ theme, variant }) => css`
    color: ${variant === "black"
      ? theme.colors.primary.neutralBlack
      : theme.colors.primary.neutralWhite};
  `
);

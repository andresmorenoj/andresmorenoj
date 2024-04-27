import { PropsWithChildren } from "react";
import { DefaultTheme } from "styled-components";

import { StyledParagraph } from "./Paragraph.styles";

export interface IParagraph extends PropsWithChildren {
  color?: keyof DefaultTheme["colors"]["secondary"];
}
export const Paragraph: React.FC<IParagraph> = ({ color, children }) => (
  <StyledParagraph color={color}>{children}</StyledParagraph>
);

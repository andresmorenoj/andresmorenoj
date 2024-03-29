import { HTMLAttributes } from "react";
import { StyledText } from "./Text.styled";

export type TTextVariant = "normal" | "bold" | "semiBold" | "outline";

export interface IText extends HTMLAttributes<HTMLSpanElement> {
  variant: TTextVariant;
}

export const Text: React.FC<IText> = ({ variant, children }) => (
  <StyledText variant={variant}>{children}</StyledText>
);

import { HTMLAttributes } from "react";

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./Heading.styled";

type THeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type THeadingWeight = "normal" | "extraBold";
type THeadingSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "extraExtraLarge"
  | "jumbo"
  | "extraJumbo"
  | "extraExtraJumbo";

export interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  level: THeadingLevel;
  fontWeight: THeadingWeight;
  size: THeadingSize;
  className?: string;
}

const variants: Record<THeadingLevel, React.FC<Omit<IHeading, "level">>> = {
  1: StyledH1,
  2: StyledH2,
  3: StyledH3,
  4: StyledH4,
  5: StyledH5,
  6: StyledH6,
};

export const Heading: React.FC<IHeading> = ({
  level,
  size,
  fontWeight,
  className,
  children,
}) => {
  const Component = variants[level];
  return (
    <Component className={className} size={size} fontWeight={fontWeight}>
      {children}
    </Component>
  );
};

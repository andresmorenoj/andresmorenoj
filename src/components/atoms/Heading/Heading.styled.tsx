import styled, { DefaultTheme, css } from "styled-components";

import { IHeading } from "./Heading.component";

const styledHeading = (
  theme: DefaultTheme,
  { size, weight }: Omit<IHeading, "level">
) => css`
  font-size: ${theme.typography.sizes[size]};
  font-weight: ${theme.typography.weights[weight]};
`;
export const StyledH1 = styled.h1<IHeading>(
  ({ theme, size, weight }) => css`
    ${styledHeading(theme, { size, weight })}
  `
);

export const StyledH2 = styled.h2<IHeading>(
  ({ theme, size, weight }) => css`
    ${styledHeading(theme, { size, weight })}
  `
);

export const StyledH3 = styled.h3<IHeading>(
  ({ theme, size, weight }) => css`
    ${styledHeading(theme, { size, weight })}
  `
);

export const StyledH4 = styled.h4<IHeading>(
  ({ theme, size, weight }) => css`
    ${styledHeading(theme, { size, weight })}
  `
);

export const StyledH5 = styled.h5<IHeading>(
  ({ theme, size, weight }) => css`
    ${styledHeading(theme, { size, weight })}
  `
);

export const StyledH6 = styled.h6<IHeading>(
  ({ theme, size, weight }) => css`
    ${styledHeading(theme, { size, weight })}
  `
);

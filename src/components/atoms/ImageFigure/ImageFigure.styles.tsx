import styled from "styled-components";

import { IImage } from "./ImageFigure.component";

export const StyledImageContainer = styled.figure<IImage>(
  ({ width }) => `
	position: relative;
	width: ${width.toString()}%;
	max-width: 600px;
	height: auto;
`
);

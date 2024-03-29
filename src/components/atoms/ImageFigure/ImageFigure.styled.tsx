import styled from "styled-components";

import { IImage } from "./ImageFigure.component";

export const StyledImageContainer = styled.figure<IImage>(
  ({ width }) => `
	position: relative;
	margin: 0;
	padding: 0;
	width: ${width.toString()}%;
	max-width: 420px;
	height: auto;
`
);

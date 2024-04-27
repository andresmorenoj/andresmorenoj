import styled from "styled-components";

import { IImage } from "./ImageFigure.component";
import { getMedia } from "@utils/index";

export const StyledImageContainer = styled.figure<Omit<IImage, 'src' >>(
  ({ width }) => `
	position: relative;
	width: ${width.toString()}%;
	max-width: 60%;
	height: auto;

	@media ${getMedia("mobileFirst", "large")} {
		max-width: 90%;
`
);

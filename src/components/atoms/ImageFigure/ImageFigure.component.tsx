import Image from "next/image";

import { StyledImageContainer } from "./ImageFigure.styles";

export interface IImage {
  width: number;
}

export const ImageFigure: React.FC<IImage> = ({ width }) => {

	const validWidth = width < 0 || width > 100 ? 100 : width;

	return (
		<StyledImageContainer width={ validWidth }>
			<Image
				alt="something"
				src="/images/man.svg"
				sizes="100vw"
				width={100}
				height={100}
				style={{
					width: "100%",
					height: "auto",
				}}
			/>
		</StyledImageContainer>
	)
};

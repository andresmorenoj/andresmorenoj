import { ISection } from "@constants/index";
import { StyledMenuItem } from "./MenuItem.styles";

export const MenuItem: React.FC<ISection> = ({ label, sectionRef }) => {
  return <StyledMenuItem href={sectionRef}>
		{label}
	</StyledMenuItem>;
};

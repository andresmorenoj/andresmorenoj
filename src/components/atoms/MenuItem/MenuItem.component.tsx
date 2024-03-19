import { ISection } from "@constants/index";
import { StyledMenuItem } from "./MenuItem.styled";

export const MenuItem: React.FC<ISection> = ({ label, sectionRef }) => {
  return <StyledMenuItem href={sectionRef}>
		{label}
	</StyledMenuItem>;
};

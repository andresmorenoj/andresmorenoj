import { BsFillBuildingsFill } from "react-icons/bs";

import { INewExperienceData } from "@constants/index";
import {
  StyledItemContainer,
  StyledHeadingWrapper,
  StyledHeadingWithIcon,
} from "./ExperienceCard.styles";
import { Heading, Icon, Paragraph, Text, THeadingSize } from "@components/atoms";
import { useScreenSize } from "@hooks/index";

export const ExperienceCard: React.FC<INewExperienceData> = ({
  title,
  fromDate,
  toDate,
  description,
}) => {
  const { isLargeScreen, isMediumScreen } = useScreenSize();
  const headingSize: THeadingSize = isLargeScreen
    ? "extraLarge"
    : isMediumScreen
    ? "large"
    : "medium";

  return (
    <StyledItemContainer>
      <StyledHeadingWrapper>
        <StyledHeadingWithIcon>
          <Icon iconType={BsFillBuildingsFill} size={2} />
          <Heading level={3} size={headingSize} fontWeight="extraBold">
            {title}
          </Heading>
        </StyledHeadingWithIcon>
        <Text variant="semiBold">{`${fromDate} - ${toDate}`}</Text>
      </StyledHeadingWrapper>
      <Paragraph>{description}</Paragraph>
    </StyledItemContainer>
  );
};

import { BsFillBuildingsFill } from "react-icons/bs";

import { INewExperienceData } from "@constants/index";
import {
  StyledItemContainer,
  StyledHeadingWrapper,
  StyledHeadingWithIcon,
} from "./ExperienceCard.styles";
import { Heading, Icon, Paragraph, Text} from "@components/atoms";

export const ExperienceCard: React.FC<INewExperienceData> = ({
  title,
  fromDate,
  toDate,
  description,
}) => {

  return (
    <StyledItemContainer>
      <StyledHeadingWrapper>
        <StyledHeadingWithIcon>
          <Icon iconType={BsFillBuildingsFill} size={2} />
          <Heading level={3} size="extraLarge" fontWeight="extraBold">
            {title}
          </Heading>
        </StyledHeadingWithIcon>
        <Text variant="semiBold">{`${fromDate} - ${toDate}`}</Text>
      </StyledHeadingWrapper>
      <Paragraph>{description}</Paragraph>
    </StyledItemContainer>
  );
};
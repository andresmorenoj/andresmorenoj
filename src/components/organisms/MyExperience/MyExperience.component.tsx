import { contentData, experienceData, sectionsData } from "@constants/index";

import { useHeadingSize } from "@hooks/index";

import { Heading, Text } from "@components/atoms";
import { ExperienceCard } from "@components/molecules";

import {
  StyledSectionContainer,
  StyledCardContainer,
} from "./MyExperience.styles";

export const MyExperience: React.FC = () => {
  const headingSize = useHeadingSize();
  const cardData = Object.values(experienceData);

  return (
    <StyledSectionContainer id={sectionsData.myExperience.sectionRef}>
      <Heading level={2} size={headingSize}>
        <Text variant="normal">{`${contentData.pre_my.content} `}</Text>
        <Text variant="bold">{contentData.experience.content}</Text>
      </Heading>
      <StyledCardContainer>
        {cardData.map((item) => {
          const { title, fromDate, toDate, description } = item;
          return (
            <ExperienceCard
              key={title}
              title={title}
              fromDate={fromDate}
              toDate={toDate}
              description={description}
            />
          );
        })}
      </StyledCardContainer>
    </StyledSectionContainer>
  );
};

import { contentData, experienceData } from "@constants/index";

import { Heading, Text } from "@components/atoms";
import { ExperienceCard } from "@components/molecules";

import {
  StyledSectionContainer,
  StyledCardContainer,
} from "./MyExperience.styles";

export const MyExperience: React.FC = () => {
  const cardData = Object.values(experienceData);

  return (
    <StyledSectionContainer>
      <Heading level={2} size="extraJumbo">
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

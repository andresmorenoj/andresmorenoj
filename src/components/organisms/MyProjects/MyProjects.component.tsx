import { contentData, projectsData } from "@constants/index";

import { Heading, Text } from "@components/atoms";
import { ProjectCard } from "@components/molecules";

import {
  StyledSectionContainer,
  StyledCardContainer,
  StyledListItem
} from "./MyProjects.styles";

export const MyProjects: React.FC = () => {
  const cardsData = Object.values(projectsData);

  return (
    <StyledSectionContainer>
      <Heading level={2} size="extraJumbo">
        <Text variant="normal">{`${contentData.pre_my.content} `}</Text>
        <Text variant="bold">{contentData.projects.content}</Text>
      </Heading>
      <StyledCardContainer>
        {cardsData.map((item, index) => (
          <StyledListItem key={item.title}>
            <ProjectCard
              indexTitle={(index + 1).toString()}
              title={item.title}
              description={item.description}
              href={item.href}
              imgUrl={item.imgUrl}
            />
          </StyledListItem>
        ))}
      </StyledCardContainer>
    </StyledSectionContainer>
  );
};

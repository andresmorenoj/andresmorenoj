import { contentData, projectsData, sectionsData } from "@constants/index";

import { useHeadingSize } from "@hooks/index";

import { Heading, Text } from "@components/atoms";
import { ProjectCard } from "@components/molecules";

import {
  StyledSectionContainer,
  StyledCardContainer,
  StyledListItem,
} from "./MyProjects.styles";

export const MyProjects: React.FC = () => {
  const headingSize = useHeadingSize();
  const cardsData = Object.values(projectsData);

  return (
    <StyledSectionContainer id={sectionsData.myProjects.sectionRef}>
      <Heading level={2} size={headingSize}>
        <Text variant="normal">{`${contentData.pre_my.content} `}</Text>
        <Text variant="bold">{contentData.projects.content}</Text>
      </Heading>
      <StyledCardContainer>
        {cardsData.map((item, index) => {
          const baseIndex = index + 1;
          const transformedIndex =
            index < 10 ? `0${baseIndex}` : `${baseIndex}`;
          return (
            <StyledListItem key={item.title}>
              <ProjectCard
                indexTitle={transformedIndex}
                title={item.title}
                description={item.description}
                href={item.href}
                imgUrl={item.imgUrl}
              />
            </StyledListItem>
          );
        })}
      </StyledCardContainer>
    </StyledSectionContainer>
  );
};

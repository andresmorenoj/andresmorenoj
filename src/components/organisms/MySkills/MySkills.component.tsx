import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiGit,
  SiStorybook,
  SiJest,
} from "react-icons/si";
import { RxAccessibility } from "react-icons/rx";

import { contentData, skillsData, sectionsData } from "@constants/index";

import { Heading, Text } from "@components/atoms";
import { IconCard } from "@components/atoms";

import {
  StyledSectionContainer,
  StyledCardsContainer,
  StyledListItem,
} from "./MySkills.styles";
import { useHeadingSize, useScreenSize } from "@hooks/index";

export const MySkills: React.FC = () => {
  const { isLargeScreen, isMediumScreen } = useScreenSize();

  const icons = [
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiStyledcomponents,
    SiGit,
    SiStorybook,
    SiJest,
    RxAccessibility,
  ];

  const skills = Object.values(skillsData);
  const headingSize = useHeadingSize();

  return (
    <StyledSectionContainer id={sectionsData.skills.sectionRef}>
      <Heading level={2} size={headingSize}>
        <Text variant="normal">{`${contentData.pre_my.content} `}</Text>
        <Text variant="bold">{contentData.skills.content}</Text>
      </Heading>
      <StyledCardsContainer>
        {skills.map((skill, index) => (
          <StyledListItem key={skill.label}>
            <IconCard
              icon={icons[index]}
              variant="withLabel"
              label={skill.label}
            />
          </StyledListItem>
        ))}
      </StyledCardsContainer>
    </StyledSectionContainer>
  );
};

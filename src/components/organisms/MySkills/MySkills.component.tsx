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
import { IconCard } from "@components/molecules";

import {
  StyledSectionContainer,
  StyledCardsContainer,
} from "./MySkills.styles";

export const MySkills: React.FC = () => {
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
		RxAccessibility
  ];

const skills = Object.values(skillsData);

  return (
    <StyledSectionContainer id={sectionsData.skills.sectionRef}>
      <Heading level={2} size="extraJumbo">
        <Text variant="normal">{`${contentData.pre_my.content} `}</Text>
        <Text variant="bold">{contentData.skills.content}</Text>
      </Heading>
      <StyledCardsContainer>
				{
					skills.map((skill, index) => (
						<li key={skill.label}>
							<IconCard icon={icons[index]} variant="withLabel" label={skill.label}/>
						</li>
					))
				}
			</StyledCardsContainer>
    </StyledSectionContainer>
  );
};

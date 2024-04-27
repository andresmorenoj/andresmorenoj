import { contentData, sectionsData } from "@constants/index";
import { useHeadingSize } from "@hooks/index";

import { Heading, Text, ImageFigure } from "@components/atoms";
import {
  StyledSectionContainer,
  StyledTextsWrapper,
  StyledParagraph,
} from "./AboutMe.styles";

export const AboutMe: React.FC = () => {
  const headingSize = useHeadingSize();

  return (
    <StyledSectionContainer id={sectionsData.aboutMe.sectionRef}>
      <ImageFigure src="/images/man2.svg" width={100} />
      <StyledTextsWrapper>
        <Heading level={2} size={headingSize}>
          <Text variant="normal">{`${contentData.pre_about.content} `}</Text>
          <Text variant="bold">{contentData.post_me.content}</Text>
        </Heading>
        <StyledParagraph color="zinc500">
          <Text variant="normal">{contentData.about_me_p1.content}</Text>
        </StyledParagraph>
        <StyledParagraph color="zinc500">
          <Text variant="normal">{contentData.about_me_p2.content}</Text>
        </StyledParagraph>
        <StyledParagraph color="zinc500">
          <Text variant="normal">{contentData.about_me_p3.content}</Text>
        </StyledParagraph>
        <StyledParagraph color="zinc500">
          <Text variant="normal">{contentData.about_me_p4.content}</Text>
        </StyledParagraph>
      </StyledTextsWrapper>
    </StyledSectionContainer>
  );
};

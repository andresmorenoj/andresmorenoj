import { Heading, Text, ImageFigure } from "@components/atoms";
import { contentData } from "lib";
import {
  StyledSectionContainer,
  StyledTextsWrapper,
  StyledParagraph,
} from "./AboutMe.styles";

export const AboutMe: React.FC = () => (
  <StyledSectionContainer>
		<ImageFigure src="/images/man2.svg" width={100}/>
    <StyledTextsWrapper>
      <Heading level={2} size="extraJumbo">
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

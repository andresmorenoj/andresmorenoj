import { ImageFigure } from "@components/atoms";
import { ProjectTextContainer } from "@components/molecules/ProjectTextContainer/ProjectTextContainer.component";

import { StyledCardContainer, StyledImageWrapper } from "./ProjectCard.styles";

interface IProjectCard {
  indexTitle: string;
  title: string;
  description: string;
  href: string;
  imgUrl: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({indexTitle, title, description, href, imgUrl}) => (
  <StyledCardContainer>
    <StyledImageWrapper>
      <ImageFigure src={imgUrl} width={100} />
    </StyledImageWrapper>
    <ProjectTextContainer
      index={indexTitle}
      title={title}
      description={description}
      href={href}
    />
  </StyledCardContainer>
);

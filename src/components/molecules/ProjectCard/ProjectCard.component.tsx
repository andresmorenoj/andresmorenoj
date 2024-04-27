import { ImageFigure } from "@components/atoms";
import { ProjectTextContainer } from "@components/molecules/ProjectTextContainer/ProjectTextContainer.component";

import { StyledCardContainer } from "./ProjectCard.styles";

interface IProjectCard {
  indexTitle: string;
  title: string;
  description: string;
  href: string;
  imgUrl: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({
  indexTitle,
  title,
  description,
  href,
  imgUrl,
}) => (
  <StyledCardContainer>
    <ImageFigure src={imgUrl} width={100} />
    <ProjectTextContainer
      index={indexTitle}
      title={title}
      description={description}
      href={href}
    />
  </StyledCardContainer>
);

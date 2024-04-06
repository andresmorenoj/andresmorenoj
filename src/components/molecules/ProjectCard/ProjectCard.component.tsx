import { ImageFigure } from "@components/atoms";
import { ProjectTextContainer } from "@components/molecules/ProjectTextContainer/ProjectTextContainer.component";

import { StyledCardContainer, StyledImageWrapper } from "./ProjectCard.styles";

export const ProjectCard: React.FC = () => (
  <StyledCardContainer>
    <StyledImageWrapper>
      <ImageFigure src="/images/gifos.webp" width={100} />
    </StyledImageWrapper>
    <ProjectTextContainer
      index="01"
      title="project title"
      description="Project description"
    />
  </StyledCardContainer>
);

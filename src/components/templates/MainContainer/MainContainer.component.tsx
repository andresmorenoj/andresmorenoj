import { HeroBanner, MySkills, MyExperience, AboutMe, MyProjects } from "@components/organisms";

import { StyledMainContainer } from "./MainContainer.styles";

export const MainContainer: React.FC = () => (
  <StyledMainContainer>
    <HeroBanner />
    <MySkills />
    <MyExperience />
    <AboutMe />
    <MyProjects />
  </StyledMainContainer>
);

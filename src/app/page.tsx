"use client";

import dynamic from "next/dynamic";
import { Header, HeroBanner, MySkills, MyExperience, AboutMe } from "@components/organisms";
import { ProjectCard } from "@components/molecules";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header />
      <main>
        <HeroBanner />
        <MySkills />
        <MyExperience />
        <AboutMe />
        <ProjectCard />
      </main>
    </AppThemeProvider>
  );
}

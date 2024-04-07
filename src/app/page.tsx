"use client";

import dynamic from "next/dynamic";
import { Header, HeroBanner, MySkills, MyExperience, AboutMe, MyProjects, Footer } from "@components/organisms";

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
        <MyProjects />
      </main>
      <Footer/>
    </AppThemeProvider>
  );
}

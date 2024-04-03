"use client";

import dynamic from "next/dynamic";
import { Header, HeroBanner, MySkills, MyExperience, AboutMe } from "@components/organisms";

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
      </main>
    </AppThemeProvider>
  );
}

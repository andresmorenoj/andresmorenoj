"use client";

import dynamic from "next/dynamic";
import { Header, HeroBanner, MySkills } from "@components/organisms";
import { ExperienceCard } from "@components/molecules";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header />
      <main>
        <HeroBanner/>
        <MySkills />
        <ExperienceCard/>
      </main>
    </AppThemeProvider>
  );
}

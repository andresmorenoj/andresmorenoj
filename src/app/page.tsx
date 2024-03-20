"use client";

import dynamic from "next/dynamic";
import { Header, IntroductionSection } from "@components/organisms";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header />
      <main>
        <IntroductionSection/>
      </main>
    </AppThemeProvider>
  );
}

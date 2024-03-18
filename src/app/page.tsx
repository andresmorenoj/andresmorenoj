"use client";

import dynamic from "next/dynamic";
import { Header } from "@components/organisms";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header/>
      <main>
      </main>
    </AppThemeProvider>
  );
}

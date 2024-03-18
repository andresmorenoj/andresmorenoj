"use client";

import dynamic from "next/dynamic";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <main>
        <h1>Hellos world!
        </h1>
      </main>
    </AppThemeProvider>
  );
}

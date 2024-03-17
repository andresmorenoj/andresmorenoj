"use client";

import { NewComponent } from "@components/atoms";
import dynamic from "next/dynamic";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <main>
        <NewComponent />
      </main>
    </AppThemeProvider>
  );
}

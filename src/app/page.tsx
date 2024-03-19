"use client";

import dynamic from "next/dynamic";
import { Header } from "@components/organisms";
import { Heading } from '@components/atoms'

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header/>
      <main>
        <Heading level={5} size="extraJumbo" weight="normal" >Hello world!</Heading>
      </main>
    </AppThemeProvider>
  );
}

"use client";

import dynamic from "next/dynamic";

import { MainContainer } from '@components/templates'

import { Header, Footer } from "@components/organisms";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header />
      <MainContainer/>
      <Footer/>
    </AppThemeProvider>
  );
}

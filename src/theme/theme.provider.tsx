import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme.main";
import { GlobalStyles } from "./globals";

export const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default AppThemeProvider;
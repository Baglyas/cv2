"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "./store";
import { Provider } from "react-redux";
import theme from './theme'
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
    </Provider>;
}

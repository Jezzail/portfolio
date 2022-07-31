import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../components/layout/Layout";

const lightTheme = createTheme({
  type: "light",
  className: "myLightTheme",
  theme: {
    colors: { background: "#ebebeb" }, // override light theme colors
  },
});

const darkTheme = createTheme({
  type: "dark",
  className: "myDarkTheme",
  theme: {
    colors: { background: "#2a2a2a" }, // override dark theme colors
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <Layout title="PAT Portfolio">
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;

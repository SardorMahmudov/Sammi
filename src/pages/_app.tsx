import "../styles/globals.css";
import "@fontsource/roboto";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "react-multi-carousel/lib/styles.css";
import "nprogress/nprogress.css";
import { theme } from "src/config/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "src/i18n";
import { Client, HydrationProvider } from "react-hydration-provider";
import Router from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <Client>
            <Component {...pageProps} />
          </Client>
        </ChakraProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}

export default App;

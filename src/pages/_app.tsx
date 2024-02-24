import "../styles/globals.css";
import "@fontsource/roboto";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "react-multi-carousel/lib/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

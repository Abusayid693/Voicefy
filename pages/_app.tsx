import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "antd/dist/antd.css";

import theme from "../theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {Box} from "@chakra-ui/react"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Box
            backgroundImage={
              "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );"
            }
            height={20}
          />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;

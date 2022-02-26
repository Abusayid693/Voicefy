import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "antd/dist/antd.css";
import { setContext } from "@apollo/client/link/context";
import theme from "../theme";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { AuthProvider } from "../contexts/Auth";
import { Box } from "@chakra-ui/react";
import { createUploadLink } from "apollo-upload-client";
import 'carbon-components/css/carbon-components.min.css';


const uploadLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
});


const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  // @ts-ignore
}).concat(uploadLink);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <AuthProvider>
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
        </AuthProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;

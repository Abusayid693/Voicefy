import {
  ApolloClient, ApolloProvider,
  createHttpLink, InMemoryCache
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Box } from "@chakra-ui/react";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
import 'carbon-components/css/carbon-components.min.css';
import ThemeProvider from "contexts/Theme";
import "style/_reset.css";
import { AuthProvider } from "../contexts/Auth";


const uploadLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
});


const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  // uri: "http://3.110.130.198:4000/graphql"
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
      <ThemeProvider>
        <AuthProvider>
            <Box
              backgroundImage={
                "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );"
              }
              height={20}
            />
            <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;

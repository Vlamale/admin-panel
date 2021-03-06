import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter, Loader } from "./components";
import { useAppContext } from "./hooks";
import theme from "./theme";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache,
});

function App() {
  const { isLoading } = useAppContext();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <AppRouter />

        {isLoading && <Loader />}
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/index";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <LoginPage />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

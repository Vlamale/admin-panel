import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import { AppRouter } from "./components";
import { useAppContext } from "./hooks";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

function App() {
  const { isLoading } = useAppContext();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <AppRouter />

        {isLoading && (
          <Center pos="absolute" top="0" w="100vw" h="100vh">
            <Spinner
              thickness="1px"
              speed="0.6s"
              emptyColor="gray.200"
              color="teal.500"
              size="xl"
            />
          </Center>
        )}
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

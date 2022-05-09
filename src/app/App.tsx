import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute, PublicRoute } from "./hoc";
import { useAppContext } from "./hooks";
import { authRoutes, publicRoutes } from "./routes";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

function App() {
  const { isLoading } = useAppContext();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Routes>
          <Route element={<AuthRoute />}>
            {authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>

          <Route element={<PublicRoute />}>
            {publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>

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

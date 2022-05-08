import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute, PublicRoute } from "./hoc";
import { authRoutes, publicRoutes } from "./routes";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

function App() {
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
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

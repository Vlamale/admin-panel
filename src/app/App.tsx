import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Example } from "./components";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});
console.log(process.env.REACT_APP_API_URL || 'https://graphqlzero.almansi.me/api');

function App() {
  return (
    <ApolloProvider client={client}>
      <Example />
    </ApolloProvider>
  );
}

export default App;

import * as React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loader: React.FC = () => (
  <Center pos="fixed" top="0" w="100vw" h="100vh">
    <Spinner
      thickness="1px"
      speed="0.6s"
      emptyColor="gray.200"
      color="teal.500"
      size="xl"
    />
  </Center>
);

export default Loader;

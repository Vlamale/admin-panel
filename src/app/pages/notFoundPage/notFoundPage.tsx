import * as React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppContext } from "app/hooks";

const NotFoundPage: React.FC = () => {
  const { isAuthorized } = useAppContext();
  return (
    <Box pos="absolute" w="100%" h="100vh" left="0" top="0">
      <Center h="full">
        <VStack spacing="8">
          <Heading as="h1" fontSize="8xl">
            404
          </Heading>
          <Heading as="h2" fontSize="3xl">
            Houston, something went wrong on our end
          </Heading>
          <Text>
            Don&apos;t worry! This is completely on us. Let&apos;s get you back
            on your journey.
          </Text>
          <Button as={Link} to={isAuthorized ? "/" : "/login"}>
            <ChevronLeftIcon h="5" w="5" mr="2" />
            {isAuthorized ? "Go to home" : "Go to the login page"}
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default NotFoundPage;

import * as React from "react";
import { Button, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { useAppContext } from "app/hooks";

const Header: React.FC = () => {
  const { signOut } = useAppContext();

  const signOutHandler = () => {
    signOut();
  };

  return (
    <Flex
      direction="row"
      justify="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      p={3}
    >
      <Flex align="center">
        <Heading as="h3" size="md" m={1} ml="10" mr="5rem">
          <Link href="/">Admin Panel</Link>
        </Heading>
        <Stack size="sm" direction={["column", "row"]} spacing="24px">
          <Link
            href="/albums"
            _hover={{
              color: "teal.500",
            }}
          >
            albums
          </Link>
          <Link
            href="/"
            _hover={{
              color: "teal.500",
            }}
          >
            Menu Item 2
          </Link>
          <Link
            href="/"
            _hover={{
              color: "teal.500",
            }}
          >
            Menu Item 3
          </Link>
        </Stack>
      </Flex>
      <Button
        colorScheme="teal"
        variant="outline"
        mx="10"
        onClick={signOutHandler}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default Header;

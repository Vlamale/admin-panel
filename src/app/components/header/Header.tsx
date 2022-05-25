import * as React from "react";
import {
  Button,
  Flex,
  Heading,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "app/hooks";

const Header: React.FC = () => {
  const { signOut } = useAppContext();
  const navigate = useNavigate();

  const signOutHandler = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Flex
      pos="relative"
      zIndex="1000"
      direction="row"
      justify="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      p={3}
    >
      <Flex align="center">
        <Heading as="h3" size="md" m={1} ml="10" mr="5rem">
          <ChakraLink as={Link} to="/" color="teal.500">
            Admin Panel
          </ChakraLink>
        </Heading>
        <Stack size="sm" direction={["column", "row"]} spacing="24px">
          <ChakraLink
            as={Link}
            to="/albums"
            _hover={{
              color: "teal.500",
            }}
          >
            Albums
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/date-range"
            _hover={{
              color: "teal.500",
            }}
          >
            Date range
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/"
            _hover={{
              color: "teal.500",
            }}
          >
            Menu Item 3
          </ChakraLink>
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

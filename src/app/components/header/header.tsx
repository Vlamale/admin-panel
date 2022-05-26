import * as React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "app/hooks";
import { Consts } from "./duck";

const Header: React.FC = () => {
  const { signOut } = useAppContext();
  const navigate = useNavigate();
  const [display, changeDisplay] = React.useState("none");

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
      align="center"
      borderBottom="1px"
      borderColor="gray.200"
      p={3}
    >
      <Heading as="h3" size="md" ml="10">
        <ChakraLink as={Link} to="/" color="teal.500">
          Admin Panel
        </ChakraLink>
      </Heading>
      <Stack
        size="sm"
        d={["none", "none", "flex", "flex"]}
        direction="row"
        spacing="24px"
      >
        {Consts.navItems.map((item) => (
          <ChakraLink
            key={item.path}
            as={Link}
            to={item.path}
            _hover={{
              color: "teal.500",
            }}
          >
            {item.name}
          </ChakraLink>
        ))}
      </Stack>

      <IconButton
        colorScheme="teal"
        variant="outline"
        aria-label="Open menu"
        size="lg"
        zIndex={30}
        icon={display === "none" ? <HamburgerIcon /> : <CloseIcon />}
        d={["flex", "flex", "none", "none"]}
        onClick={() => changeDisplay(display === "none" ? "flex" : "none")}
      />

      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        align="center"
        justify="flex-start"
      >
        <Stack size="sm" mt="20" textAlign="center" spacing="24px">
          {Consts.navItems.map((item) => (
            <ChakraLink
              key={item.path}
              as={Link}
              to={item.path}
              _hover={{
                color: "teal.500",
              }}
              onClick={() => changeDisplay("none")}
            >
              {item.name}
            </ChakraLink>
          ))}
        </Stack>
      </Flex>

      <Button
        colorScheme="teal"
        variant="outline"
        mx={[5, 5, 10]}
        onClick={signOutHandler}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default Header;

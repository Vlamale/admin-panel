import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "app/components";

const AuthRouterLayout: React.FC = () => {
  return (
    <Box d="flex" flexDirection="column" minH="100vh">
      <Header />
      <Outlet />
    </Box>
  );
};

export default AuthRouterLayout;

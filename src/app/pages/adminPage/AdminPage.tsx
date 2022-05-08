import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Header from "app/components/header";

const AdminPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box minH="100%" mt={7}>
        <Heading as="h1" textAlign="center">
          Dashboard
        </Heading>
      </Box>
    </Box>
  );
};

export default AdminPage;

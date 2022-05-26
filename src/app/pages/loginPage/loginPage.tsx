import * as React from "react";
import { Box, Button, Center, FormLabel, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Form } from "app/components";
import { useAppContext } from "app/hooks";
import { Consts } from "./duck";

const LoginPage: React.FC = () => {
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  const onSubmit = () => {
    signIn(Date.now().toString());
    navigate("/");
  };

  return (
    <Center h="100vh">
      <Box boxShadow="xl" p="10" w="18em">
        <Box textAlign="center" mb="7">
          <Heading fontSize="3xl" fontWeight="normal">
            Login
          </Heading>
        </Box>
        <Form validationSchema={Consts.loginFormSchema} onSubmit={onSubmit}>
          <Form.FormControl name="email" mb="6">
            <FormLabel>Email</FormLabel>
            <Form.Input focus name="email" />
          </Form.FormControl>
          <Form.FormControl name="password" mb="4">
            <FormLabel>Password</FormLabel>
            <Form.Input name="password" type="password" />
          </Form.FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            variant="solid"
            width="full"
            mt={4}
          >
            Sign In
          </Button>
        </Form>
      </Box>
    </Center>
  );
};

export default LoginPage;

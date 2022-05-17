import * as React from "react";
import { Box, Center, FormLabel, Heading } from "@chakra-ui/react";
import { UseFormProps } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Form } from "app/components";
import { useAppContext } from "app/hooks";
import { Types } from "./duck";

const loginFormSchema: yup.SchemaOf<Types.LoginFormFields> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage: React.FC = () => {
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  const onSubmit = () => {
    signIn(Date.now().toString());
    navigate("/");
  };

  const formConfig: UseFormProps = {
    mode: "onBlur",
  };

  return (
    <Center h="100vh">
      <Box boxShadow="xl" p="10" w="18em">
        <Box textAlign="center" mb="7">
          <Heading fontSize="3xl" fontWeight="normal">
            Login
          </Heading>
        </Box>
        <Form
          onSubmit={onSubmit}
          formConfig={formConfig}
          validationSchema={loginFormSchema}
        >
          <Form.FormControl name="email" mb="6">
            <FormLabel>Email</FormLabel>
            <Form.Input name="email" />
          </Form.FormControl>
          <Form.FormControl name="password" mb="4">
            <FormLabel>Password</FormLabel>
            <Form.Input name="password" type="password" />
          </Form.FormControl>

          <Form.SubmitButton>Sign In</Form.SubmitButton>
        </Form>
      </Box>
    </Center>
  );
};

export default LoginPage;

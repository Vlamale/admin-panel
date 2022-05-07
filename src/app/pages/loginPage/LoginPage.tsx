import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import Form from "app/components/form";
import { IFieldProps } from "app/components/form/FormField";

interface LoginFormFields {
  email: string;
  password: string;
}

const loginFormFields: IFieldProps<LoginFormFields>[] = [
  {
    label: "Email",
    id: "email",
    name: "email",
    fieldControlProps: {
      mb: "3",
    },
    fieldInputProps: {
      type: "email",
    },
  },
  {
    label: "Password",
    id: "password",
    name: "password",
    fieldInputProps: {
      type: "password",
    },
  },
];

const loginFormSchema: yup.SchemaOf<LoginFormFields> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage: React.FC = () => {
  const onSubmit: SubmitHandler<LoginFormFields> = () => {
    localStorage.setItem("fake-token", Date.now().toString());
  };

  return (
    <Center h="100vh">
      <Box boxShadow="xl" p="10">
        <Form
          title="Login"
          formFieldsProps={loginFormFields}
          submitBtn="Login"
          formSchema={loginFormSchema}
          onSubmit={onSubmit}
        />
      </Box>
    </Center>
  );
};

export default LoginPage;

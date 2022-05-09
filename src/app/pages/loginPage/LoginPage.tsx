import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Box, Center } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Form } from "app/components";
import { IFieldProps } from "app/components/form/FormField";
import { useAppContext, useTypedLocationState } from "app/hooks";
import { operations, Types } from "./duck";

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
  const { signIn, setIsLoading } = useAppContext();
  const navigate = useNavigate();
  const locationState = useTypedLocationState();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginFormSchema),
  });
  const { data, loading } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  const fromPage = locationState?.from?.pathname || "/";

  useEffect(() => {
    setIsLoading(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const onSubmit: SubmitHandler<LoginFormFields> = (formData) => {
    const condidate = data?.users?.data?.find(
      (user) => user?.email === formData.email
    );

    if (!condidate) {
      setError("email", { type: "custom", message: "" });
      setError("password", {
        type: "custom",
        message: "Пользователя с таким email \n не существует",
      });

      return;
    }

    signIn(Date.now().toString(), () => navigate(fromPage));
  };

  return (
    <Center h="100vh">
      <Box boxShadow="xl" p="10" w="18em">
        <Form
          title="Login"
          submitBtn="Login"
          formFieldsProps={loginFormFields}
          errors={errors}
          loading={loading}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      </Box>
    </Center>
  );
};

export default LoginPage;

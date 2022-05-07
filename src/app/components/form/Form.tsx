import * as React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import FormField, { IFieldProps } from "./FormField";

export interface IFormProps<TFormFields> {
  title: string;
  formFieldsProps: IFieldProps<TFormFields>[];
  submitBtn: string;
  formSchema: yup.AnyObjectSchema;
  onSubmit: SubmitHandler<TFormFields>;
}

const Form = <TFormFields,>({
  title,
  formFieldsProps,
  submitBtn,
  onSubmit,
  formSchema,
}: IFormProps<TFormFields>): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormFields>({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box textAlign="center" mb="7">
        <Heading fontSize="3xl" fontWeight="normal">
          {title}
        </Heading>
      </Box>

      {formFieldsProps.map((fieldProps) => (
        <FormField
          key={fieldProps.id}
          {...fieldProps}
          register={register}
          errors={errors}
        />
      ))}

      <Button
        colorScheme="teal"
        variant="solid"
        width="full"
        mt={4}
        type="submit"
      >
        {submitBtn}
      </Button>
    </form>
  );
};

export default Form;

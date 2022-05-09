import * as React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import {
  DeepMap,
  DeepPartial,
  FieldError,
  UseFormRegister,
} from "react-hook-form";
import FormField, { IFieldProps } from "./FormField";

export interface IFormProps<TFormFields> {
  title: string;
  submitBtn: string;
  formFieldsProps: IFieldProps<TFormFields>[];
  errors: DeepMap<DeepPartial<TFormFields>, FieldError>;
  loading: boolean;
  register: UseFormRegister<TFormFields>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form = <TFormFields,>({
  title,
  submitBtn,
  formFieldsProps,
  errors,
  loading,
  onSubmit,
  register,
}: IFormProps<TFormFields>): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
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
        disabled={loading}
      >
        {submitBtn}
      </Button>
    </form>
  );
};

export default Form;

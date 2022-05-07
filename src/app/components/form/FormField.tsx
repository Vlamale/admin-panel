import * as React from "react";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { get } from "lodash";
import {
  DeepMap,
  DeepPartial,
  FieldError,
  Path,
  UseFormRegister,
} from "react-hook-form";

export interface IFieldProps<TFormFields> {
  id: string;
  label: string;
  name: Path<TFormFields>;
  errors?: DeepMap<DeepPartial<TFormFields>, FieldError>;
  fieldControlProps?: Partial<FormControlProps>;
  fieldInputProps?: Partial<InputProps>;
  register?: UseFormRegister<TFormFields>;
}

const FormField = <TFormFields,>({
  id,
  label,
  name,
  errors,
  fieldControlProps,
  fieldInputProps,
  register,
}: IFieldProps<TFormFields>): JSX.Element => {
  const errorMessages = get(errors, name);
  const isError = !!(errors && errorMessages);

  return (
    <FormControl key={name} isInvalid={isError} {...fieldControlProps}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} {...fieldInputProps} {...(register && register(name))} />
      <FormErrorMessage>{errorMessages?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;

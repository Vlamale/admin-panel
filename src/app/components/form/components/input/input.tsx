import * as React from "react";
import { FormErrorMessage, Input as ChakraInput } from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
import { Types } from "./duck";

const Input: React.FC<Types.IInputProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" });

  return (
    <>
      <ChakraInput
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error?.message && (
        <FormErrorMessage pos="absolute">{error?.message}</FormErrorMessage>
      )}
    </>
  );
};

export default Input;

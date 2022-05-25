/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { FormErrorMessage, Input as ChakraInput } from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
import { Types } from "./duck";

const Input: React.FC<Types.IInputProps> = ({ name, focus, ...props }) => {
  const { control, setFocus } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" });

  React.useEffect(() => {
    if (focus) {
      setFocus(name);
    }
  }, []);

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
        <FormErrorMessage pos="absolute" mt="1">
          {error?.message}
        </FormErrorMessage>
      )}
    </>
  );
};

export default Input;

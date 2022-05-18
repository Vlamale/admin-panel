import * as React from "react";
import { FormErrorMessage, Select as ChakraSelect } from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
import { Types } from "./duck";

const Select: React.FC<Types.ISelectProps> = ({ name, children, ...props }) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <ChakraSelect
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      >
        {children}
      </ChakraSelect>
      {error?.message && (
        <FormErrorMessage pos="absolute" mt="1">
          {error?.message}
        </FormErrorMessage>
      )}
    </>
  );
};

export default Select;

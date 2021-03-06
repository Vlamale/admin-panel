import * as React from "react";
import { FormErrorMessage, Select as ChakraSelect } from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
import { Types } from "./duck";

const Select: React.FC<Types.ISelectProps> = ({
  children,
  name,
  options,
  ...props
}) => {
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
        {options.map((user) => (
          <option key={user?.id} value={user?.id?.toString()}>
            {user?.name}
          </option>
        ))}
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

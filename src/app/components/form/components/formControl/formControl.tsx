import * as React from "react";
import { FormControl as ChakraFormControl } from "@chakra-ui/react";
import { get } from "lodash";
import { useFormContext } from "react-hook-form";
import { Types } from "./duck";

const FormControl: React.FC<Types.IFormControlProps> = ({
  children,
  name,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const errorMessages = get(errors, name);
  const isError = !!(errors && errorMessages);

  return (
    <ChakraFormControl isInvalid={isError} {...props}>
      {children}
    </ChakraFormControl>
  );
};

export default FormControl;

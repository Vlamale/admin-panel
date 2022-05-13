import * as React from "react";
import { Button } from "@chakra-ui/react";
import { ISubmitButtonProps } from "./duck/type";

const SubmitButton: React.FC<ISubmitButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      type="submit"
      colorScheme="teal"
      variant="solid"
      width="full"
      mt={4}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;

import * as React from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ShowPhotoButton: React.FC = ({ data }: any) => {
  return (
    <Button
      as={Link}
      to={`./photos/${data.id}`}
      colorScheme="teal"
      variant="outline"
      justifyContent="space-between"
    >
      <ViewIcon />
    </Button>
  );
};

export default ShowPhotoButton;

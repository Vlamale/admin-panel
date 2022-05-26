import { SelectProps } from "@chakra-ui/react";

interface ISelectOptions {
  id: number;
  name: string;
}

export interface ISelectProps extends SelectProps {
  name: string;
  options: ISelectOptions[];
}

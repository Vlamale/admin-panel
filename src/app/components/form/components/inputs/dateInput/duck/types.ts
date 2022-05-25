import { ReactDatePickerProps } from "react-datepicker";

export interface IDateInputProps
  extends Omit<ReactDatePickerProps, "onChange"> {
  name: string;
  label?: string;
}

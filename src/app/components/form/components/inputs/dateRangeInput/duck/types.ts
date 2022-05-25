import { ReactDatePickerProps } from "react-datepicker";

export interface IDateRangeInputProps
  extends Omit<ReactDatePickerProps, "onChange"> {
  name: string;
  label?: string;
  startLabel?: string;
  endLabel?: string;
}

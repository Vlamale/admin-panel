import * as React from "react";
import { FormLabel } from "@chakra-ui/react";
import DateInput from "../dateInput";
import { Types } from "./duck";

const DateRangeInput: React.FC<Types.IDateRangeInputProps> = ({
  name,
  label,
  startLabel,
  endLabel,
  ...props
}) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <DateInput {...props} name={`${name}.startDate`} label={startLabel} />
      <DateInput {...props} name={`${name}.endDate`} label={endLabel} />
    </>
  );
};

export default DateRangeInput;

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
      <DateInput name={`${name}.startDate`} label={startLabel} {...props} />
      <DateInput name={`${name}.endDate`} label={endLabel} {...props} />
    </>
  );
};

export default DateRangeInput;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { get } from "lodash";
import DatePicker from "react-datepicker";
import { useController, useFormContext } from "react-hook-form";
import { Types } from "./duck";

const DateInput: React.FC<Types.IDateInputProps> = ({
  name,
  label,
  ...props
}) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  const dateReceived = watch(name);
  const errorMessages = get(errors, name);
  const isError = !!(errors && errorMessages);

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{label}</FormLabel>
      {/* @ts-ignore */}
      <Input
        as={DatePicker}
        dateFormat="MM-dd-yyyy"
        ref={ref}
        name={name}
        value={value}
        onBlur={onBlur}
        selected={dateReceived ? new Date(dateReceived) : null}
        {...props}
        onChange={(date) =>
          date instanceof Date &&
          onChange(new Date(new Date(date).setHours(0, 0, 0, 0)))
        }
      />
      {error?.message && (
        <FormErrorMessage pos="absolute" mt="1">
          {error?.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default DateInput;
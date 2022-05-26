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
import "react-datepicker/dist/react-datepicker.css";

const DateInput: React.FC<Types.IDateInputProps> = ({
  name,
  label,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  const isError = !!get(errors, name);

  return (
    <FormControl isInvalid={isError}>
      {label && <FormLabel>{label}</FormLabel>}

      {/* @ts-ignore */}
      <Input
        ref={ref}
        name={name}
        as={DatePicker}
        dateFormat="MM-dd-yyyy"
        value={value}
        selected={value}
        onBlur={onBlur}
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

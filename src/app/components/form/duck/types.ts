import React from "react";
import { SubmitHandler, UseFormProps } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { Types as FormControlTypes } from "../components/formControl/duck";
import { Types as DateInputTypes } from "../components/inputs/dateInput/duck";
import { Types as DateRangeInputTypes } from "../components/inputs/dateRangeInput/duck";
import { Types as InputTypes } from "../components/inputs/input/duck";
import { Types as SelectTypes } from "../components/select/duck";

export interface IFormProps {
  onSubmit?: SubmitHandler<any>;
  validationSchema?: AnyObjectSchema;
  formConfig?: UseFormProps;
}

export interface INamespaceComponents {
  Input: React.FC<InputTypes.IInputProps>;
  DateInput: React.FC<DateInputTypes.IDateInputProps>;
  DateRangeInput: React.FC<DateRangeInputTypes.IDateRangeInputProps>;
  FormControl: React.FC<FormControlTypes.IFormControlProps>;
  Select: React.FC<SelectTypes.ISelectProps>;
}

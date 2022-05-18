import React from "react";
import { SubmitHandler, UseFormProps } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { Types as FormControlTypes } from "../components/formControl/duck";
import { Types as InputTypes } from "../components/input/duck";
import { Types as SelectTypes } from "../components/select/duck";

export interface IFormProps {
  onSubmit: SubmitHandler<any>;
  validationSchema?: AnyObjectSchema;
  formConfig?: UseFormProps;
}

export interface INamespaceComponents {
  Input: React.FC<InputTypes.IInputProps>;
  FormControl: React.FC<FormControlTypes.IFormControlProps>;
  Select: React.FC<SelectTypes.ISelectProps>;
}

import React from "react";
import { UseFormProps } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { Types as FormControlTypes } from "../components/formControl/duck";
import { Types as InputTypes } from "../components/input/duck";
import { Types as SubmitButtonTypes } from "../components/submitButton/duck";

export interface IFormProps {
  onSubmit: () => void;
  validationSchema?: AnyObjectSchema;
  formConfig?: UseFormProps;
}

export interface INamespaceComponents {
  Input: React.FC<InputTypes.IInputProps>;
  SubmitButton: React.FC<SubmitButtonTypes.ISubmitButtonProps>;
  FormControl: React.FC<FormControlTypes.IFormControlProps>;
}

import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { FormControl, Input, Select } from "./components";
import { Types } from "./duck";

const Form: React.FC<Types.IFormProps> & Types.INamespaceComponents = ({
  children,
  onSubmit,
  formConfig,
  validationSchema,
}) => {
  const methods = useForm({
    mode: "onBlur",
    resolver: validationSchema && yupResolver(validationSchema),
    ...formConfig,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.FormControl = FormControl;
Form.Select = Select;

export default Form;

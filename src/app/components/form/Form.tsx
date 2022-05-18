import * as React from "react";
import { FormProvider } from "react-hook-form";
import useForm from "app/hooks/useForm";
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
    ...formConfig,
    schema: validationSchema,
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

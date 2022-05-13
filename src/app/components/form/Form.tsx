import * as React from "react";
import { FormProvider } from "react-hook-form";
import useForm from "app/hooks/useForm";
import { FormControl, Input, SubmitButton } from "./components";
import { Types } from "./duck";

const Form: React.FC<Types.IFormProps> & Types.INamespaceComponents = ({
  children,
  onSubmit,
  formConfig,
  validationSchema,
}) => {
  const methods = useForm({
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
Form.SubmitButton = SubmitButton;
Form.FormControl = FormControl;

export default Form;

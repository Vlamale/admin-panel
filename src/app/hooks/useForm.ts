import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
} from "react-hook-form";
import { AnyObjectSchema } from "yup";

interface UseFormProps extends UseHookFormProps {
  schema?: AnyObjectSchema;
}

const useForm = ({ schema, ...formConfig }: UseFormProps) => {
  return useHookForm({
    ...formConfig,
    resolver: schema && yupResolver(schema),
  });
};

export default useForm;

import * as yup from "yup";
import { LoginFormFields } from "./types";

export const loginFormSchema: yup.SchemaOf<LoginFormFields> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

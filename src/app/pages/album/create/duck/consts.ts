import * as yup from "yup";

export const createAlbumFormSchema = yup.object({
  title: yup.string().required().min(3).max(64),
  userId: yup.string().required(),
});

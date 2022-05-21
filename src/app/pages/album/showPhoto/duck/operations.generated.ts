/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type GetPhotoQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetPhotoQuery = {
  photo?: Types.Maybe<Pick<Types.Photo, "id" | "title" | "url">>;
};

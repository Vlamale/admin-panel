/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type GetAlbumInputQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumInputQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id">>;
    }
  >;
};

export type UpdateAlbumMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  input: Types.UpdateAlbumInput;
}>;

export type UpdateAlbumMutation = {
  updateAlbum?: Types.Maybe<Pick<Types.Album, "id">>;
};

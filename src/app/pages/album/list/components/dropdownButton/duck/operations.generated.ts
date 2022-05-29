/* eslint-disable */
import * as Types from "../../../../../../../schema.generated";

export type DeleteAlbumMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type DeleteAlbumMutation = Pick<Types.Mutation, "deleteAlbum">;

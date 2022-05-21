/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type GetAlbumQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  options?: Types.Maybe<Types.PageQueryOptions>;
}>;

export type GetAlbumQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "name">>;
      photos?: Types.Maybe<{
        data?: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.Photo, "id" | "title" | "thumbnailUrl" | "url">
            >
          >
        >;
        meta?: Types.Maybe<Pick<Types.PageMetadata, "totalCount">>;
      }>;
    }
  >;
};

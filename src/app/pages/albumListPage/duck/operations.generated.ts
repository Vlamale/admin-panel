/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetAlbomsQueryVariables = Types.Exact<{
  options?: Types.Maybe<Types.PageQueryOptions>;
}>;

export type GetAlbomsQuery = {
  albums?: Types.Maybe<{
    data?: Types.Maybe<
      Array<
        Types.Maybe<
          Pick<Types.Album, "id" | "title"> & {
            user?: Types.Maybe<Pick<Types.User, "name">>;
            photos?: Types.Maybe<{
              meta?: Types.Maybe<Pick<Types.PageMetadata, "totalCount">>;
            }>;
          }
        >
      >
    >;
  }>;
};

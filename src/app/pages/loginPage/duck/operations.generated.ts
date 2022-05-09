/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users?: Types.Maybe<{
    data?: Types.Maybe<
      Array<Types.Maybe<Pick<Types.User, "id" | "email" | "username">>>
    >;
  }>;
};

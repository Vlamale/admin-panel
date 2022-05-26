import { GetUsersQuery } from "./operations.generated";

export const getSelectOptions = (data: GetUsersQuery | undefined) =>
  data?.users?.data
    ? data?.users?.data.map((item: any) => ({
        id: item.id,
        name: item.name,
      }))
    : [];

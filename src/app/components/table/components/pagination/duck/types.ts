import { TableInstance } from "react-table";

export interface IPaginationProps<Data extends Record<string, unknown>> {
  tableInstance: TableInstance<Data>;
  totalCount: number;
}

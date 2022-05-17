import { Column, TableOptions } from "react-table";

export interface ITableProps<Data extends Record<string, unknown>>
  extends TableOptions<Data> {
  columns: ReadonlyArray<Column<Data>>;
  data: Data[];
  pagination?: {
    totalCount: number;
  };
}

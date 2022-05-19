import { IColumnProps } from "../components/column/duck/types";

export interface INamespaceComponents {
  Column: React.FC<IColumnProps>;
}

export interface ITableProps {
  data: any[];
  pagination?: {
    totalCount: number;
  };
}

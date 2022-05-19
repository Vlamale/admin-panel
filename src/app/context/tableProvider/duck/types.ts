export interface ITableContext {
  data: Record<string, unknown>[];
  pagination?: {
    totalCount: number;
  };
}

export type ITableContextProps = ITableContext;

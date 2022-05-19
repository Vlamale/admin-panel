import * as React from "react";
import { Types, TableContext } from "./duck";

const TableProvider: React.FC<Types.ITableContextProps> = ({
  children,
  data,
  pagination,
}) => {
  return (
    <TableContext.Provider value={{ data, pagination }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;

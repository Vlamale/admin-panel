import * as React from "react";
import { ITableContext } from "./types";

const TableContext = React.createContext<ITableContext>({
  data: [],
  pagination: {
    totalCount: 0,
  },
});

export default TableContext;

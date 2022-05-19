import React from "react";
import { TableContext } from "app/context/tableProvider/duck";

const useTableContext = () => React.useContext(TableContext);

export default useTableContext;

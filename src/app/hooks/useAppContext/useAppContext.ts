import React from "react";
import { AppContext } from "app/context/appProvider/duck";

const useAppContext = () => React.useContext(AppContext);

export default useAppContext;

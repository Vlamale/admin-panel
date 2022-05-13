import React from "react";
import { AppContext } from "app/context/appProvider";

const useAppContext = () => React.useContext(AppContext);

export default useAppContext;

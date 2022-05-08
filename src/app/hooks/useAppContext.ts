import React from "react";
import { AppContext } from "app/context/app";

const useAppContext = () => React.useContext(AppContext);

export default useAppContext;

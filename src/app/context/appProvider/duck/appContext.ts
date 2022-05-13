import { createContext } from "react";
import { AppContextInterface } from "./types";

const AppContext = createContext<AppContextInterface>({
  isLoading: false,
  isAuthorized: false,
  setIsLoading: () => {},
  signIn: () => {},
  signOut: () => {},
});

export default AppContext;

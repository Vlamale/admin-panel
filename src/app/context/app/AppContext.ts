import { createContext } from "react";

export type AuthCallback = () => void;

interface AppContextInterface {
  isLoading: boolean;
  isAuthorized: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (token: string) => any;
  signOut: () => any;
}

const AppContext = createContext<AppContextInterface>({
  isLoading: false,
  isAuthorized: false,
  setIsLoading: () => {},
  signIn: () => {},
  signOut: () => {},
});

export default AppContext;

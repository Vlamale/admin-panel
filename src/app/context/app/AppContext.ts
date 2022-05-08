import { createContext } from "react";

export type AuthCallback = () => void;

interface AppContextInterface {
  isAuthorized: boolean;
  signIn: (token: string, cb: AuthCallback) => any;
  signOut: (cb: AuthCallback) => any;
}

const AppContext = createContext<AppContextInterface>({
  isAuthorized: false,
  signIn: () => {},
  signOut: () => {},
});

export default AppContext;

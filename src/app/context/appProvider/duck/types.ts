// export type AuthCallback = () => void;

export interface AppContextInterface {
  isLoading: boolean;
  isAuthorized: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (token: string) => any;
  signOut: () => any;
}

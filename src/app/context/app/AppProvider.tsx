import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(
    !!localStorage.getItem("fake-token")
  );

  const signIn = (token: string): void => {
    localStorage.setItem("fake-token", token);
    setIsAuthorized(true);
  };

  const signOut = () => {
    localStorage.removeItem("fake-token");
    setIsAuthorized(false);
  };

  const value = {
    isLoading,
    isAuthorized,
    setIsLoading,
    signIn,
    signOut,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

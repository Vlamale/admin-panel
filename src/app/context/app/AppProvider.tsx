import React, { useState } from "react";
import AppContext, { AuthCallback } from "./AppContext";

const AppProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(
    !!localStorage.getItem("fake-token")
  );

  const signIn = (token: string, cb: AuthCallback): void => {
    localStorage.setItem("fake-token", token);
    setIsAuthorized(true);
    cb();
  };

  const signOut = (cb: AuthCallback) => {
    localStorage.removeItem("fake-token");
    setIsAuthorized(false);
    cb();
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

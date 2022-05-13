import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "app/components";

const AuthRouter: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthRouter;

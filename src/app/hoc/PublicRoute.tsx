import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "app/hooks";

const PublicPage: React.FC = () => {
  const { isAuthorized } = useAppContext();

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicPage;

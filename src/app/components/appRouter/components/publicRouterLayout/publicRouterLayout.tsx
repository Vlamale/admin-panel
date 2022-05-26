import * as React from "react";
import { Outlet } from "react-router-dom";

const PublicRouterLayout: React.FC = () => {
  return <Outlet />;
};

export default PublicRouterLayout;

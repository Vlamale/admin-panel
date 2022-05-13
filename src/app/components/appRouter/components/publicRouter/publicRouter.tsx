import * as React from "react";
import { Outlet } from "react-router-dom";

const PublicRouter: React.FC = () => {
  return <Outlet />;
};

export default PublicRouter;

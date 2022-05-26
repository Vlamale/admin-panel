import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppContext } from "app/hooks";
import { NotFoundPage } from "app/pages";
import { AuthRouterLayout, PublicRouterLayout } from "./components";
import { RoutesConfig } from "./duck";

const AppRouter: React.FC = () => {
  const { isAuthorized } = useAppContext();

  return (
    <Routes>
      <Route
        element={isAuthorized ? <AuthRouterLayout /> : <PublicRouterLayout />}
      >
        {RoutesConfig[isAuthorized ? "authRoutes" : "publicRoutes"].map(
          ({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          )
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

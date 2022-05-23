import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppContext } from "app/hooks";
import { NotFoundPage } from "app/pages";
import { AuthRouter, PublicRouter } from "./components";
import { RoutesConfig } from "./duck";

const AppRouter: React.FC = () => {
  const { isAuthorized } = useAppContext();

  return (
    <Routes>
      <Route element={isAuthorized ? <AuthRouter /> : <PublicRouter />}>
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

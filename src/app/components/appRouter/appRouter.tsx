import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppContext } from "app/hooks";
import { AuthRouter, PublicRouter } from "./components";
import { routesConfig } from "./duck";

const AppRouter: React.FC = () => {
  const { isAuthorized } = useAppContext();

  return (
    <Routes>
      {isAuthorized ? (
        <Route element={<AuthRouter />}>
          {routesConfig.authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      ) : (
        <Route element={<PublicRouter />}>
          {routesConfig.publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;

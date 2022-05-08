import { AdminPage, LoginPage } from "./pages";

interface IRoute {
  path: string;
  Component: React.FC;
}

const publicRoutes: IRoute[] = [
  {
    path: "/login",
    Component: LoginPage,
  },
];

const authRoutes: IRoute[] = [
  {
    path: "/",
    Component: AdminPage,
  },
];

export { publicRoutes, authRoutes };

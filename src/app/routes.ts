import { AdminPage, LoginPage } from "./pages";
import { AlbumListPage } from "./pages/albumListPage";

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
  {
    path: "/albums",
    Component: AlbumListPage,
  },
];

export { publicRoutes, authRoutes };

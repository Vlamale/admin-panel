import { AdminPage, LoginPage, AlbumListPage } from "../../../pages";
import { IRoute } from "./types";

export const publicRoutes: IRoute[] = [
  {
    path: "/login",
    Component: LoginPage,
  },
];

export const authRoutes: IRoute[] = [
  {
    path: "/",
    Component: AdminPage,
  },
  {
    path: "/albums",
    Component: AlbumListPage,
  },
];

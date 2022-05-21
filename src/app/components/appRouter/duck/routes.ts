import {
  AdminPage,
  LoginPage,
  AlbumListPage,
  CreateAlbumPage,
  ShowAlbumPage,
  ShowPhotoPage,
} from "../../../pages";
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
  {
    path: "/albums/create",
    Component: CreateAlbumPage,
  },
  {
    path: "/albums/:id",
    Component: ShowAlbumPage,
  },
  {
    path: "/albums/:id/photos/:id",
    Component: ShowPhotoPage,
  },
];

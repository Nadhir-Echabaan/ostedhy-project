/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteProps } from "react-router-dom";
import { Fragment, lazy } from "react";
import MainLayout from "../../shared/layout/MainLayout/MainLayout";
import AuthGuard from "../../shared/guards/AuthGuard";
import { PATH } from "./paths";

type RouteConfig = {
  exact: boolean | null;
  path: string;
  component: React.ComponentType<any>;
  guard?: React.ComponentType<any> | typeof Fragment | any;
  layout?: React.ComponentType<any> | typeof Fragment;
} & RouteProps;

const routes: RouteConfig[] = [
  {
    exact: true,
    guard: AuthGuard,
    path: PATH.LIBRARY,
    component: lazy(() => import("../features/Library/Library")),
    layout: MainLayout,
  },
];

export default routes;

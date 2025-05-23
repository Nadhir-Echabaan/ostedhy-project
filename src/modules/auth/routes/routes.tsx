/* eslint-disable @typescript-eslint/no-explicit-any */
import GuestLayout from "../../shared/layout/GuestLayout/GuestLayout";
import { Navigate, RouteProps } from "react-router-dom";
import { Fragment, lazy } from "react";
import { PATH } from "./paths";
import GuestGuard from "../../shared/guards/GuestGuard";
import AuthGuard from "../../shared/guards/AuthGuard";

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
    path: PATH.ROOT,
    guard: GuestGuard,
    component: () => <Navigate to="/login" />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH.LOGIN,
    component: lazy(() => import("../features/Login/Login")),
    layout: GuestLayout,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH.REGISTER,
    component: lazy(() => import("../features/Register/Register")),
    layout: GuestLayout,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH.SIGNUP,
    component: lazy(() => import("../features/SignUp/SignUp")),
    layout: GuestLayout,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH.FORGETPASSWORD,
    component: lazy(() => import("../features/ForgetPassword/ForgetPassword")),
    layout: GuestLayout,
  },
  {
    exact: true,
    guard: AuthGuard,
    path: PATH.NEWPASSWORD,
    component: lazy(() => import("../features/NewPassword/NewPassword")),
    layout: GuestLayout,
  },
];

export default routes;

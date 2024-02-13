import { lazy } from "react";

export const Marvel = lazy(() => import("../pages/Marvel/Marvel"));
export const Dc = lazy(() => import("../pages/Dc/Dc"));
export const Humo = lazy(() => import("../pages/Humo/Humo"));
export const User = lazy(() => import("../pages/User/User"));

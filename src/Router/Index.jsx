import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

export const RouterNavigation = () => {
  return <RouterProvider router={router}/>;
};
export default RouterNavigation;

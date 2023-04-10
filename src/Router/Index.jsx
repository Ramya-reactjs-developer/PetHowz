import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import ErrorBoundary from "./ErrorBoundry";

export const RouterNavigation = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />;
    </ErrorBoundary>
  );
};
export default RouterNavigation;

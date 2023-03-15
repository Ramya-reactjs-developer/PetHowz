import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DashBoardLayout } from "../Pages/CustomerDashBoard/Layout/Index";
import { Layout } from "../Layouts/Index";

export const RouterNavigation = () => {
  return (
    <Router>
      <Layout />
      <DashBoardLayout />
    </Router>
  );
};

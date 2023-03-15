import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Layout from "../layout/index";
import { Layout } from "../Layouts/Index";

function RouterNavigation () {
  return (
    <Router>
      <Layout />
    </Router>
  );
};
export default RouterNavigation;
import React from "react";
import ProtectedRoute from "../Pages/CustomerDashBoard/Layout/Layout";
import { navList } from "../Pages/CustomerDashBoard/Layout/sideMenuEntries";

export const CustomerLayout = () => {
  return (
    <main>
      <ProtectedRoute navData={navList} />
    </main>
  );
};

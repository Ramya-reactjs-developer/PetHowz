import React from "react";
import ProtectedRoute from "../Pages/CustomerDashBoard/Layout/Layout";
import { navList2 } from "../Pages/CustomerDashBoard/Layout/sideMenuEntries";

export const HostLayout = () => {
  return (
    <div>
      <ProtectedRoute navData={navList2} />
    </div>
  );
};

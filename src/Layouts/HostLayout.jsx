import React from "react";
import { navList2 } from "../Pages/CustomerDashBoard/Layout/sideMenuEntries";
import ResponsiveDrawer from "../Components/AppBar/ResponsivAppBar";

export const HostLayout = () => {
  return (
    <div>
      <ResponsiveDrawer navData={navList2} />
    </div>
  );
};

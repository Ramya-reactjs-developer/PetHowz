import React from "react";
import { navList } from "../Pages/CustomerDashBoard/Layout/sideMenuEntries";
import ResponsiveDrawer from "../Components/AppBar/ResponsivAppBar";

export const CustomerLayout = () => {
  return (
    <main>
      <ResponsiveDrawer navData={navList} />
    </main>
  );
};

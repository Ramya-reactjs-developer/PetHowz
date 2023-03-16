/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Paper } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";

import "./Layout.css";
import CustomIcons from "../Utils/Icons/Index";
import SideMenu from "./SideMenu";
import { navList } from "./sideMenuEntries";

/**
 *
 * @returns
 */
function ProtectedRoute({ children }) {
  // const token = localStorage.getItem("LoginChecker");
  const [menuCollapse, setMenuCollapse] = React.useState(false);

  const menuItemList = [
    // {
    //   source: customIcons.Customer,
    //   menuText: 'Profile',
    // },
    {
      source: CustomIcons.Logout,
      menuText: "Logout",
    },
  ];
  const onMenuClick = () => {
    alert("sdfasf");
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  // if (!token) {
  //   return <Navigate to={redirectPath} replace />;
  // }
  return (
    <Grid
      container
      item
      md={12}
      lg={12}
      sm={12}
      xs={12}
      className="topMainGrid"
    >
      {/* <Grid item md={12} lg={12} sm={12} xs={12} height="6vh">
        <CustomAppBar
          menuItemList={menuItemList}
          logoImage={customImages.AstroLogo}
          onMenuClick={onMenuClick}
        />
      </Grid> */}
      <Grid
        container
        md={12}
        lg={12}
        sm={12}
        xs={12}
        height="94vh"
        overflow="auto"
        spacing={3}
        flexDirection="row"
      >
        <Grid
          className="Layout_Slidemenu_Size"
          height="93vh"
          item
          md={2}
          xs={2}
          sm={2}
          lg={2}
          sx={{ fontFamily: "Roboto" }}
        >
          <SideMenu navList={navList} menuCollapse={menuCollapse} />
        </Grid>
        <Grid item md={10} xs={10} sm={10} lg={10} className="main_box_div">
          <Paper elevation={2}>{children || <Outlet />}</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProtectedRoute;

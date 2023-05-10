// /* eslint-disable no-unused-expressions */
// /* eslint-disable react/prop-types */
// import React from "react";
// import { Grid, Paper } from "@mui/material";
// import { Outlet, Navigate } from "react-router-dom";
// import CustomAppBar from "../../../Components/AppBar/AppBar";
// import SideMenu from "../../../Components/SideMenu/SideMenu";
// import {
//   navList,

//   dashboard,
// } from "./sideMenuEntries";
// import customImages from "../../../Utils/Images/index";
// import customIcons from "../../../Utils/Icons/Index";
// import "./Layout.css";

// /**
//  *
//  * @returns
//  */
// function ProtectedRoute({ children }) {

//   const [menuCollapse, setMenuCollapse] = React.useState(false);

//   const menuItemList = [

//     {
//       source: customIcons.Logout,
//       menuText: "Logout",
//     },
//   ];
//   const onMenuClick = () => {
//     alert("sdfasf");
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <Grid
//       container
//       item
//       md={12}
//       lg={12}
//       sm={12}
//       xs={12}
//       className="topMainGrid"
//     >

//       <Grid
//         container
//         md={12}
//         lg={12}
//         sm={12}
//         xs={12}
//         height="94vh"
//         overflow="auto"
//         spacing={3}
//         flexDirection="row"
//       >
//         <Grid
//           className="Layout_Slidemenu_Size"
//           height="93vh"
//           item
//           md={2}
//           xs={2}
//           sm={2}
//           lg={2}
//           sx={{ fontFamily: "Roboto-Regular" }}
//         >
//           <SideMenu navList={navList} menuCollapse={menuCollapse} />
//         </Grid>
//         <Grid item md={10} xs={10} sm={10} lg={10} className="main_box_div">
//           <Paper elevation={2}>{children || <Outlet />}</Paper>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// export default ProtectedRoute;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Grid, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
// import CustomAppBar from "../../../Components/AppBar/AppBar";
import SideMenu from "../../../Components/SideMenu/SideMenu";
// import { navList } from "./sideMenuEntries";
import customIcons from "../../../Utils/Icons/Index";
// import "./Layout.css";
/**
 *
 * @returns
 */
function ProtectedRoute({ navData }) {
  const [menuCollapse, setMenuCollapse] = React.useState(false);
  const menuItemList = [
    {
      source: customIcons.Logout,
      menuText: "Logout",
    },
  ];
  const onMenuClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid
        item
        display={"flex"}
        justifyContent={"flex-start"}
        gap={"5px"}
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Grid item xl={2} lg={2} md={2} sm={3} xs={3}>
          <SideMenu navList={navData} menuCollapse={menuCollapse} />
        </Grid>
        <Grid item xl={10} lg={10} md={10} sm={9} xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProtectedRoute;

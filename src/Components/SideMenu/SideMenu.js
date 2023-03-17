// /* eslint-disable no-unused-vars */
// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { Grid } from "@mui/material";
// import customImages from "../../Utils/Images/index"
// import {
//   ProSidebar,
//   Menu,
//   SubMenu,
//   MenuItem,
//   SidebarContent,
// } from "react-pro-sidebar";
// import PropTypes from "prop-types";
// import customIcons from "../../Utils/Icons/Index";
// import "./sideMenu.css";

// /**
//  *
//  * @param {object} props  - required props in NavBar
//  * @returns {React.ReactElement} - returns the NavBar component
//  */
// function SideMenu(props) {
//   const { navList, transactionList, menuCollapse, websiteList, dashboard } =
//     props;
//   const [openMenu, setOpenMenu] = React.useState({ first: "", second: "" });
//   const Location = useLocation();
//   /**
//    *
//    * @param {string} nav - passing nav
//    * @returns {Function} - nav active color
//    */
//   const getNavActiveColor = (nav) => {
//     if (
//       nav === Location.pathname ||
//       `${nav}/astrologers` === Location.pathname
//     ) {
//       return "static";
//     }

//     return "highlight";
//   };
//   const onOpenSubmenu = () => {
//     setOpenMenu(!openMenu);
//   };
//   return (
//     <Grid className="header" container item md={2} lg={2} sm={2} xs={2}>
//       <ProSidebar collapsed={menuCollapse}>
//         <SidebarContent>
//           {/* <Menu iconShape="square">
//             <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
//               <MenuItem>
//                 <span className="icon_size">
//                   <div className="navIconHold">
//                     <img src={customIcons.DashboardIcon} alt="dashboard" />
//                   </div>
//                 </span>
//                 <span>Dashboard</span>
//               </MenuItem>
//             </NavLink>
//           </Menu> */}
//           <Menu>
//             {/* <SubMenu> */}
//             {dashboard?.map((nav) => (
//               <NavLink to={nav?.nav} style={{ textDecoration: "none" }}>
//                 <MenuItem>
//                   <img
//                     src={nav?.imgSrc}
//                     alt=""
//                     style={{ paddingRight: "10px", marginTop: "5px" }}
//                     className="slideMenuImg"
//                   />
//                   <span className={getNavActiveColor(nav.nav)} />
//                   {!menuCollapse ? nav.name : ""}
//                 </MenuItem>
//               </NavLink>
//             ))}

//             <div>
//               <div className="mainMaster">
//               <img src={customImages.Service} alt="" />
//               </div>
//               {navList?.map((nav) => (
//                 <NavLink to={nav?.nav} style={{ textDecoration: "none" }}>
//                   <MenuItem>
//                     <img
//                       src={nav?.imgSrc}
//                       alt=""
//                       style={{ paddingRight: "10px", marginTop: "5px" }}
//                       className="slideMenuImg"
//                     />
//                     <span className={getNavActiveColor(nav.nav)} />
//                     {!menuCollapse ? nav.name : ""}
//                   </MenuItem>
//                 </NavLink>
//               ))}
//             </div>
//           </Menu>
//         </SidebarContent>
//       </ProSidebar>
//     </Grid>
//   );
// }
// export default SideMenu;

// SideMenu.propTypes = {
//   navList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
//   menuCollapse: PropTypes.bool,
// };
// SideMenu.defaultProps = {
//   menuCollapse: false,
// };
import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import PropTypes from "prop-types";
// import customImages from "../../Utils/Images/index";
// import "./sideMenu.css";

/**
 *
 * @param {object} props  - required props in SideMenu
 * @returns {React.ReactElement} - returns the SideMenu component
 */
function SideMenu(props) {
  const { navList, menuCollapse } = props;
  const [rowData1, setRowData1] = React.useState(0);
  /**
   *
   * @param {number} index - passing index
   */
  const NavSelect = (index) => {
    setRowData1(index);
  };

  return (
    <Grid item className="header">
      <Sidebar collapsed={menuCollapse} style={{ width: "100%" }}>
        {/* <Typography>
          <img src={customImages.Dog1} className="praxisLogo" alt="logo" />
        </Typography> */}

        <Menu iconShape="square">
          <Grid item className="headerAlignment">
            {navList?.map((nav, index) => (
              <div
                onClick={() => NavSelect(index)}
                aria-hidden
                className="sideMenuIcon"
              >
                <NavLink to={nav.nav} style={{ textDecoration: "none" }}>
                  <MenuItem>
                    <span
                      className={rowData1 === index ? "static" : "highlight"}
                    />
                    <span className="icon_size">
                      <div className="navIconHold">
                        <img src={nav?.imgSrc} alt="" />
                      </div>
                      {!menuCollapse ? nav.name : ""}
                    </span>
                  </MenuItem>
                </NavLink>
              </div>
            ))}
          </Grid>
        </Menu>
      </Sidebar>
    </Grid>
  );
}
export default SideMenu;

SideMenu.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  menuCollapse: PropTypes.bool,
};
SideMenu.defaultProps = {
  menuCollapse: false,
};

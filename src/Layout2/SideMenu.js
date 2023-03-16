/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Grid, Menu, MenuItem } from "@mui/material";

import "./sideMenu.css";
import { ProSidebar, SidebarContent } from "react-pro-sidebar";
import customImages from "../Utils/Images";

/**
 *
 * @param {object} props  - required props in NavBar
 * @returns {React.ReactElement} - returns the NavBar component
 */
function SideMenu(props) {
  const { navList, transactionList, menuCollapse, websiteList, dashboard } =
    props;
  const [openMenu, setOpenMenu] = React.useState({ first: "", second: "" });
  const Location = useLocation();
  /**
   *
   * @param {string} nav - passing nav
   * @returns {Function} - nav active color
   */
  const getNavActiveColor = (nav) => {
    if (
      nav === Location.pathname ||
      `${nav}/astrologers` === Location.pathname
    ) {
      return "static";
    }

    return "highlight";
  };
  const onOpenSubmenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Grid className="header" container item md={2} lg={2} sm={2} xs={2}>
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          {/* <Menu iconShape="square">
            <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
              <MenuItem>
                <span className="icon_size">
                  <div className="navIconHold">
                    <img src={customIcons.DashboardIcon} alt="dashboard" />
                  </div>
                </span>
                <span>Dashboard</span>
              </MenuItem>
            </NavLink>
          </Menu> */}
          <Menu>
            {/* <SubMenu> */}
            {dashboard?.map((nav) => (
              <NavLink to={nav?.nav} style={{ textDecoration: "none" }}>
                <MenuItem>
                  <img
                    src={nav?.imgSrc}
                    alt=""
                    style={{ paddingRight: "10px", marginTop: "5px" }}
                    className="slideMenuImg"
                  />
                  <span className={getNavActiveColor(nav.nav)} />
                  {!menuCollapse ? nav.name : ""}
                </MenuItem>
              </NavLink>
            ))}

            <div>
              <div className="mainMaster">
                <img src={customImages.Service} alt="" />
              </div>
              {navList?.map((nav) => (
                <NavLink to={nav?.nav} style={{ textDecoration: "none" }}>
                  <MenuItem>
                    <img
                      src={nav?.imgSrc}
                      alt=""
                      style={{ paddingRight: "10px", marginTop: "5px" }}
                      className="slideMenuImg"
                    />
                    <span className={getNavActiveColor(nav.nav)} />
                    {!menuCollapse ? nav.name : ""}
                  </MenuItem>
                </NavLink>
              ))}
            </div>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </Grid>
  );
}
export default SideMenu;

// SideMenu.propTypes = {
//   navList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
//   menuCollapse: PropTypes.bool,
// };
// SideMenu.defaultProps = {
//   menuCollapse: false,
// };

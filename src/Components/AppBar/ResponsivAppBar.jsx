import * as React from "react";
import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { Outlet } from "react-router";
// import { Divider } from "@mui/material";

import { NavLink } from "react-router-dom";

const drawerWidth = 220;

function ResponsiveDrawer(props) {
  const { window, navData } = props;
  const [rowData1, setRowData1] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const NavSelect = (index) => {
    setRowData1(index);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar />
      <Divider /> */}
      <List>
        {navData?.map((nav, index) => (
          <div
            onClick={() => NavSelect(index)}
            aria-hidden
            className="sideMenuIcon"
          >
            <NavLink to={nav.nav} style={{ textDecoration: "none" }}>
              <ListItem key={nav.name} disablePadding>
                <ListItemButton
                  sx={{
                    color: rowData1 === index ? "red" : "Black",
                    backgroundColor:
                      rowData1 === index ? "#FFFFFF" : "transparent",
                    boxShadow:
                      rowData1 === index
                        ? "0px 0px 50px #7042DC3D"
                        : "transparent",
                    borderRadius: rowData1 === index ? "33px" : "0px",
                    "&:hover": {
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                  <span
                    className={rowData1 === index ? "static" : "highlight"}
                  />
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={nav.name}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </div>
        ))}
      </List>

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          textAlign: "center",
          ".css-14mheiv-MuiDrawer-docked .MuiDrawer-paper": {
            zIndex: "auto",
            paddingTop: "90px",
          },
          //   ".css-1wnlm1w-MuiButtonBase-root-MuiListItemButton-root": {
          //     color: "black",
          //   },
          //   ".css-1wnlm1w-MuiButtonBase-root-MuiListItemButton-root:hover": {
          //     color: "red",
          //   },
          //   ".css-1wnlm1w-MuiButtonBase-root-MuiListItemButton-root:active": {
          //     color: "blue",
          //   },
          //   ".css-1wnlm1w-MuiButtonBase-root-MuiListItemButton-root:visited": {
          //     color: "yellow",
          //   },
          //   ".css-1wnlm1w-MuiButtonBase-root-MuiListItemButton-root:nth-child(1):active":
          //     {
          //       color: "blue",
          //     },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {" "}
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Outlet />
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

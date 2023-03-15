import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CustomIcons from "../../Utils/Icons/Index";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const Header = (props) => {
  const { window } = props;
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [openDrawer, setOpenDrawer] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();
    const DashBoard = () => {
      navigate("/Pet-howz");
    };
  
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" sx={{ background: "white" }}>
          <Toolbar>
            <img
              src={CustomIcons.Logo}
              alt="LOGO"
              sx={{ transform: "scale(2)" }}
              height="60px"
              style={{ margin: "10px 0px 10px 0px" }}
            />

            {isMatch ? (
              <>
                <Drawer
                  anchor="left"
                  open={openDrawer}
                  container={container}
                  onClose={() => setOpenDrawer(false)}
                  sx={{
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: 240,
                    },
                  }}
                >
                  <List>
                    <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                      <ListItemIcon>
                        <ListItemText>Home</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                      <ListItemIcon>
                        <ListItemText>Pet Spaces</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                      <ListItemIcon>
                        <ListItemText>Join as Pet Host</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                      <ListItemIcon>
                        <ListItemText>Our Services</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
                      <ListItemIcon>
                        <ListItemText>Contact Us</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <Box>
                      <Button
                        sx={{ marginY: "10px", borderRadius: "50px" }}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => setOpenDrawer(!openDrawer)}
                      >
                        Franchise
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        sx={{ marginY: "10px", borderRadius: "50px" }}
                        variant="contained"
                        fullWidth
                        onClick={() =>alert("gvhvgvg")}
                      >
                        Login
                      </Button>
                    </Box>
                  </List>
                </Drawer>
                <IconButton
                  sx={{ color: "primary", marginLeft: "auto" }}
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  <MenuIcon color="white" />
                </IconButton>
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="Home" />
                  <Tab label="Pet Spaces" />
                  <Tab label="Join as Pet Host" />
                  <Tab label="Our Services" />
                  <Tab label="Contact Us" />
                </Tabs>
                <Button
                  sx={{ marginLeft: "auto", borderRadius: "50px" }}
                  variant="contained"
                  color="secondary"
                >
                  Franchise
                </Button>
                <Button
                  sx={{ marginLeft: "10px", borderRadius: "50px" }}
                    variant="contained"
                    onClick={DashBoard}
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;

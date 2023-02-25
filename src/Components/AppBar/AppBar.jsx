// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CustomIcons from '../../Utils/Icons/Index';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact',"jkjk"];
// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
// <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//   <Typography variant="h6" sx={{ my: 2 }}>
//   <img src={CustomIcons.Logo} alt="LOGO" />
//   </Typography>
//   <Divider />
//   <List>
//     {navItems.map((item) => (
//       <ListItem key={item} disablePadding>
//         <ListItemButton sx={{ textAlign: 'center' }}>
//           <ListItemText primary={item} />
//         </ListItemButton>
//       </ListItem>
//     ))}
//   </List>
// </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* <CssBaseline /> */}
// <ElevationScroll {...props}>

//       <AppBar component="nav"  sx={{ backgroundColor: "white" }}>
//         <Toolbar>

//             <img src={CustomIcons.Logo} alt="LOGO" />

//           <Box sx={{ display: { xs: 'none', sm: 'block' } ,justifyContent:"center" }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: 'primary' }}>
//                 {item}
//               </Button>
//             ))}

//           </Box>

//           <Button sx={{ marginLeft: "auto" ,display: { xs: 'none', sm: 'block' }}} variant="contained">
//                 Login
//               </Button>
//               <Button sx={{ marginLeft: "10px" }} variant="contained">
//                 SignUp
//               </Button>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       </ElevationScroll>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
// <Typography>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
//   fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
//   aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
//   cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
//   at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
//   Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
//   numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
//   asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
//   assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
//   soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
//   ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
//   soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
//   Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
//   delectus quo eius exercitationem tempore. Delectus sapiente, provident
//   corporis dolorum quibusdam aut beatae repellendus est labore quisquam
//   praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
//   deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
//   fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
//   recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
//   debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
//   praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
//   voluptate iure labore, repellendus beatae quia unde est aliquid dolor
//   molestias libero. Reiciendis similique exercitationem consequatur, nobis
//   placeat illo laudantium! Enim perferendis nulla soluta magni error,
//   provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
//   iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
//   Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
//   reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
//   cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
//   consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
//   Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
//   dolores sunt inventore perferendis, aut sapiente modi nesciunt.
// </Typography>
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;

import React, { useState } from "react";
import {
  AppBar,
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
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={{ background: "white" }}>
          <Toolbar>
            <img
              src={CustomIcons.Logo}
              alt="LOGO"
              sx={{ transform: "scale(2)" }}
              height="60px"
              style={{margin:"10px 0px 10px 0px"}}

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
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>Product</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>About Us</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>Pet Space</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>Pet Care </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                    <Button
                      sx={{ marginLeft: "auto", borderRadius: "50px" }}
                      variant="outlined"
                      color="secondary"
                    >
                      Login
                    </Button>
                    <Button
                      sx={{ marginLeft: "10px", borderRadius: "50px" }}
                      variant="contained"
                    >
                      SignUp
                    </Button>
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
                  <Tab label="Products" />
                  <Tab label="Services" />
                  <Tab label="About Us" />
                  <Tab label="Contact" />
                  <Tab label="Petcare" />
                </Tabs>
                <Button
                  sx={{ marginLeft: "auto", borderRadius: "50px" }}
                  variant="outlined"
                  color="secondary"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: "10px", borderRadius: "50px" }}
                  variant="contained"
                >
                  SignUp
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

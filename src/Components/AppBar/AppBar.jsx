import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
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
import PropTypes, { number, string } from "prop-types";
import { Link } from "react-router-dom";
import "./AppBar.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import { loginAction } from "../../Redux/Slices/Login/login";

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
  const dispatch = useDispatch();
  const loginAdmin = useSelector((state) => state?.login?.login);
  const [loginCheck, setLoginCheck] = React.useState(false);
  console.log(loginCheck, "loginCheck");
  const login = localStorage.getItem("LoginChecker");
  const user_type = localStorage.getItem("user_type");
  console.log(login, "login");
  console.log(user_type, "user_type");
  React.useEffect(() => {
    // if (login === undefined) {
    //   setLoginCheck(false);
    // } else {
    //   setLoginCheck(true);
    // }
    if (
      loginAdmin?.data?.data?.user_type !== "" &&
      loginAdmin?.data?.data?.user_type !== undefined
    ) {
      localStorage.setItem("user_type", loginAdmin?.data?.data?.user_type);
    }
    // if (!loginAdmin?.data) {
    //   navigate("/petHowz/Login");
    // }
  }, [loginCheck, login, user_type]);

  const onLogin = () => {
    navigate("/petHowz/Login", {
      state: "/petHowz/CustomerLayout/CustomerDashBoard",
    });
  };
  // const onLogout = () => {
  //   localStorage.clear();
  //   window.onload = function () {
  //     window.reload();
  //   };
  //   navigate("/");
  // };

  const onLogout = () => {
    // const data = { data: {}, method: "get", apiName: "" };
    // dispatch(actions.LOGIN_ADMIN(data));
    dispatch(loginAction.logout());
    localStorage.clear();

    setTimeout(() => {
      navigate("/petHowz/Login");
    }, 2000);
  };
  const onGoToProfile = () => {
    // if (loginAdmin?.data?.data?.user_type === 0) {
    //   navigate("/petHowz/CustomerLayout/CustomerDashBoard");
    // } else if (loginAdmin?.data?.data?.user_type === 1 || user_type === "1") {
    //   navigate("/petHowz/CustomerLayout/CustomerDashBoard");
    // } else if (loginAdmin?.data?.data?.user_type === 2 || user_type === "2") {
    //   navigate("/petHowz/HostLayout/HostDashBoard");
    // }
    if (user_type === "0" || loginAdmin?.data?.data?.user_type === 0) {
      navigate("/petHowz/CustomerLayout/CustomerDashBoard");
    } else if (user_type === "1" || loginAdmin?.data?.data?.user_type === 1) {
      navigate("/petHowz/CustomerLayout/CustomerDashBoard");
    } else if (user_type === "2" || loginAdmin?.data?.data?.user_type === 2) {
      navigate("/petHowz/HostLayout/HostDashBoard");
    } else if (user_type === "3" || loginAdmin?.data?.data?.user_type === 3) {
      navigate("/petHowz/HostLayout/HostDashBoard");
    }
  };
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={{ background: "white" }}>
          <Toolbar>
            <Grid container md={2} lg={2}>
              <img
                src={CustomIcons.Logo}
                alt="LOGO"
                sx={{ transform: "scale(2)" }}
                height="60px"
                style={{ margin: "10px 0px 10px 0px" }}
              />
            </Grid>
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
                        onClick={() => alert("gvhvgvg")}
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
                <Grid
                  container
                  md={8}
                  lg={8}
                  sm={12}
                  xs={12}
                  className="header_text"
                >
                  <Tabs
                    // sx={{ marginLeft: "auto" }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
                    <Link
                      to="/petHowz"
                      activeClassName="active"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Tab className="text_align" label="Home" />
                    </Link>
                    <Link
                      to="/petHowz/AllPetBoarding"
                      activeClassName="active"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Tab className="text_align" label="Pet Spaces" />
                    </Link>
                    <Link
                      exact
                      to="/petHowz/BecomePetHostService"
                      activeClassName="active"
                      className="nav-links"
                      style={{ textDecoration: "none" }}
                    >
                      <Tab className="text_align" label="Join as Pet Host" />
                    </Link>
                    <Link
                      exact
                      to="/petHowz/AllServices"
                      activeClassName="active"
                      className="nav-links"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Tab className="text_align" label="Our Services" />
                    </Link>
                    <Tab className="text_align" label="Contact Us" />
                  </Tabs>
                </Grid>
                <Grid
                  item
                  md={2}
                  lg={2}
                  sm={2}
                  xs={2}
                  pt={1}
                  className="Appbar_btn"
                  display={"flex"}
                  gap={"5px"}
                >
                  {login !== null ? (
                    <Button
                      // sx={{
                      //   marginLeft: "auto",
                      //   borderRadius: "50px",
                      //   height: "40px",
                      // }}
                      variant="contained"
                      color="secondary"
                      onClick={onGoToProfile}
                    >
                      Profile
                    </Button>
                  ) : (
                    ""
                  )}
                  {login === null ? (
                    // <NavLink to="/Login" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        // marginLeft: "10px",
                        // borderRadius: "50px",
                        // height: "40px",
                        fontFamily: "Roboto-Regular",
                      }}
                      variant="contained"
                      onClick={onLogin}
                    >
                      Login
                    </Button>
                  ) : (
                    // </NavLink>
                    <NavLink style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          // marginLeft: "10px",
                          // borderRadius: "50px",
                          // height: "40px",
                          color:"#fff",
                          fontFamily: "Roboto-Regular",
                        }}
                        variant="contained"
                        onClick={onLogout}
                      >
                        Logout
                      </Button>
                    </NavLink>
                  )}
                </Grid>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Grid, Button, Toolbar } from "@mui/material";
// import { Outlet, Link } from "react-router-dom";
// import CustomTypography from "../../Components/Typography/Typography";
// import customIcons from "../../Utils/Icons/Index";
// import "./Appbar.css";
// function NavBar(props) {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);
//   return (
//     <Grid>
//       <Grid className={click ? "main-container" : ""} onClick={() => Close()} />
//       <Grid className="Nav-drop" display="flex">
//         <Toolbar
//           className=" container navbar"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <Grid
//             container
//             md={12}
//             lg={12}
//             sm={12}
//             xs={12}
//             className="nav-container"
//           >
//             <Grid item md={2} lg={2} sm={6} xs={6} className="Logoicon">
//               <Link exact to="/" className="nav-logo">
//                 <Grid className="pethowsLogo">
//                   <img src={customIcons.Logo} alt="" />
//                 </Grid>
//               </Link>
//             </Grid>
//             <Grid item md={8} lg={8} sm={12} xs={12} pt={1} className="Appmenu">
//               <ul className={click ? "nav-menu active" : "nav-menu"}>
//                 <li className="nav-item">
//                   <Link
//                     exact
//                     to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? handleClick : null}
//                   >
//                     <CustomTypography
//                       text="HOME"
//                       customClass="Appbar"
//                       type="header"
//                     />
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     exact
//                     to="/grooming"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? handleClick : null}
//                   >
//                     <CustomTypography
//                       text="BOARDING SPACES"
//                       customClass="Appbar"
//                       type="header"
//                     />
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     exact
//                     to="/petService"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? handleClick : null}
//                   >
//                     <CustomTypography
//                       text="JOIN AS PET HOST"
//                       customClass="Appbar"
//                       type="header"
//                     />
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     exact
//                     to="/AllServices"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? handleClick : null}
//                   >
//                     <CustomTypography
//                       text="PET SERVICES"
//                       customClass="Appbar"
//                       type="header"
//                     />
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     exact
//                     to="/"
//                     activeClassName="active"
//                     className="nav-links"
//                     onClick={click ? handleClick : null}
//                   >
//                     <CustomTypography
//                       text="CONTACT US"
//                       customClass="Appbar"
//                       type="header"
//                     />
//                   </Link>
//                 </li>
//               </ul>
//               {/* <Grid className="nav-icon" onClick={handleClick}>
//                 <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
//               </Grid> */}
//             </Grid>
//             <Grid
//               item
//               md={2}
//               lg={2}
//               sm={6}
//               xs={6}
//               pt={1}
//               className="Appbar_btn"
//             >
//               <Button
//                 sx={{
//                   marginLeft: "auto",
//                   borderRadius: "50px",
//                   height: "45px",
//                 }}
//                 variant="contained"
//                 color="secondary"
//               >
//                 Franchise
//               </Button>
//               <Button
//                 sx={{
//                   marginLeft: "10px",
//                   borderRadius: "50px",
//                   height: "45px",
//                 }}
//                 variant="contained"
//               >
//                 Login
//               </Button>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </Grid>
//       <Outlet />
//     </Grid>
//   );
// }
// export default NavBar;

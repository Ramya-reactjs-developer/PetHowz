import React, { useState } from "react";
import { Grid, Button, Toolbar } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import CustomTypography from "../../Components/Typography/Typography";
import customIcons from '../../Utils/Icons/Index';
import "./Appbar.css";
function NavBar(props) {

  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <Grid>
      <Grid className={click ? "main-container" : ""} onClick={() => Close()} />
      <Grid className="Nav-drop" display="flex">
        <Toolbar
          className=" container navbar"
          onClick={(e) => e.stopPropagation()}
        >
          <Grid
            container
            md={12}
            lg={12}
            sm={12}
            xs={12}
            className="nav-container"
          >
            <Grid item md={2} lg={2} sm={6} xs={6} className="Logoicon">
              <Link exact to="/" className="nav-logo">
                <Grid className="pethowsLogo">
                  <img src={customIcons.Logo} alt="" />
                </Grid>
              </Link>
            </Grid>
            <Grid item md={8} lg={8} sm={12} xs={12} pt={1} className="Appmenu">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    <CustomTypography
                      text="HOME"
                      customClass="Appbar"
                      type="header"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/grooming"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    <CustomTypography
                      text="BOARDING SPACES"
                      customClass="Appbar"
                      type="header"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/petService"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    <CustomTypography
                      text="JOIN AS PET HOST"
                      customClass="Appbar"
                      type="header"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    <CustomTypography
                      text="PET SERVICES"
                      customClass="Appbar"
                      type="header"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    <CustomTypography
                      text="CONTACT US"
                      customClass="Appbar"
                      type="header"
                    />
                  </Link>
                </li>
              </ul>
              {/* <Grid className="nav-icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
              </Grid> */}
            </Grid>
            <Grid
              item
              md={2}
              lg={2}
              sm={6}
              xs={6}
              pt={1}
              className="Appbar_btn"
            >
              <Button
                sx={{
                  marginLeft: "auto",
                  borderRadius: "50px",
                  height: "45px",
                }}
                variant="contained"
                color="secondary"
              >
                Franchise
              </Button>
              <Button
                sx={{
                  marginLeft: "10px",
                  borderRadius: "50px",
                  height: "45px",
                }}
                variant="contained"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Grid>
      <Outlet />
    </Grid>
  );
}
export default NavBar;

import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomTypography from "../Typography/Typography";
import "./Style";
// import CustomImages from "../../Utils/Images";

import PropTypes from "prop-types";
export default function PetBoardImageCards(props) {
  const [go, setGo] = React.useState(false);
  const {
    customClass,
    imagePath,
    text,
    onClick,
    petBoardText,
    CustomImage,
    loginData,
  } = props;
  console.log(imagePath, "imagePath");
  const navigate = useNavigate();
  const login = loginData;
  // const image = Data;
  console.log(login, "login.message");
  console.log(go, "login.message");

  const onNavigate = () => {
    if (login !== null) {
      setGo(true);
    } else {
      setGo(false);
    }
  };
  React.useEffect(() => {
    onNavigate();
  }, [go]);
  return (
    <Grid item md={12} sm={12} lg={12} xs={12} mr={3}>
      {/* {image?.map((item) => {
        return ( */}

      <CardMedia class={customClass}>
        {imagePath.map((nav) => {
          return (
            <NavLink
              // onClick={() => {
              //   if (!login.message) {
              //     navigate(nav.nav1);
              //     alert("nav1");
              //   } else if (login.message === "") {
              //     navigate(nav.nav2);
              //     alert("nav2");
              //   }
              // }}
              // onClick={onNavigate}
              to={go ? nav.nav1 : nav.nav2}
              style={{ textDecoration: "none" }}
            >
              <Grid
                container
                md={12}
                sm={12}
                lg={12}
                xs={12}
                className={CustomImage}
              >
                <img src={nav?.image} alt="" />
                <CustomTypography
                  variant="body2"
                  text={nav.text}
                  type="subHeading"
                  customClass={petBoardText}
                />
              </Grid>
            </NavLink>
          );
        })}
      </CardMedia>
    </Grid>
  );
}
PetBoardImageCards.propTypes = {
  imagePath: PropTypes.array,
  onClick: PropTypes.func,
  PetBoardImage: PropTypes.string,
  CustomImage: PropTypes.string,
  customClass: PropTypes.string,
  text: PropTypes.string,
  petBoardText: PropTypes.string,
  loginData: PropTypes.any,
  // Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
PetBoardImageCards.defaultProps = {
  imagePath: [],
  CustomImage: "",
  onClick: "",
  text: "",
  petBoardText: "",
  customClass: "",
};

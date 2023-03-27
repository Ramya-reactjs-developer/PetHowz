import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import CustomTypography from "../Typography/Typography";
import "./Style";
// import CustomImages from "../../Utils/Images";

import PropTypes from "prop-types";
export default function PetBoardImageCards(props) {
  const { customClass, imagePath, text, onClick, petBoardText, CustomImage } =
    props;
  console.log(imagePath, "imagePath");
  // const image = Data;
  return (
    <Grid item md={12} sm={12} lg={12} xs={12} mr={3}>
      {/* {image?.map((item) => {
        return ( */}
<<<<<<< HEAD
      
        <CardMedia class={customClass}>
          {imagePath.map(( nav) => {
            return (
              <NavLink to={nav.nav} style={{textDecoration: "none"}}>
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
      
=======

      <CardMedia class={customClass}>
        {imagePath.map((item) => {
          return (
            <Grid container md={12} sm={12} lg={12} xs={12} >
              <Grid item md={12} sm={12} lg={12} xs={12} className={CustomImage}>
                <img src={item.image} alt="" onClick={onClick} />
              </Grid>
              <CustomTypography
                variant="body2"
                text={item.text}
                type="subHeading"
                customClass={petBoardText}
              />
            </Grid>
          );
        })}
      </CardMedia>
>>>>>>> 4bb443e51543d3cb5c7db7a52fd50555f68aa702
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

import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import CustomTypography from "../Typography/Typography";
import "./Style";
// import CustomImages from "../../Utils/Images";

import PropTypes from "prop-types";
export default function PetBoardImageCards(props) {
  const { customClass, imagePath, text, petBoardText, CustomImage } = props;
  console.log(imagePath, "imagePath");
  // const image = Data;
  return (
    <Grid item md={12} sm={12} lg={12} xs={12} mr={3}>
      {/* {image?.map((item) => {
        return ( */}

      <CardMedia class={customClass}>
        {imagePath.map((item) => {
          return (
            <Grid item md={12} sm={12} lg={12} xs={12} className={CustomImage}>
              <img src={item.image} alt="" />
              <CustomTypography
                variant="body2"
                text={item.text}
                type="subHeading"
                customClass={petBoardText}
              />
            </Grid>
          );
        })}
{/* 
        <Grid item md={12} sm={12} lg={12} xs={12} className="textWidth">
          <CustomTypography
            variant="body2"
            text={text}
            type="subHeading"
            customClass={petBoardText}
          />
        </Grid> */}
      </CardMedia>

      {/* );
       })} */}
    </Grid>
  );
}
PetBoardImageCards.propTypes = {
  imagePath: PropTypes.array,
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
  text: "",
  petBoardText: "",
  customClass: "",
};

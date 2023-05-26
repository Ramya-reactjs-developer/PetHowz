import React from "react";
import { Grid } from "@mui/material";

import "./ImageList.css";
import CustomTypography from "../../Components/Typography/Typography";
import PropTypes from "prop-types";
export default function ImageList(props) {
  const { imageLists, filteredKeys } = props;

  return (
    <Grid container md={12} sm={12} lg={12} xs={12} pl={2}>
      {imageLists.map((item) => {
        // const isStrikeTrue = item.key && filteredKeys.includes(item.key);
        return (
          <Grid item md={4} lg={4} pt={3} display="flex">
            <Grid item className="ImageAmenities">
              <img src={item.image} alt="icon" />
            </Grid>
            <Grid item pl={2}>
              <CustomTypography
                type="head"
                text={item.text}
                // customClass="aboutPetSpace"
                customClass={item.class}

                // customClass={isStrikeTrue ? "aboutPetSpace" : ""}
                // customClass={props.customClass}
                // className={`${
                //   (type === "NotOverWrite" && "aboutPetSpace") ||
                //   (type === "OverWrite" && "aboutPetSpaceOverWrite")
                // }`}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
ImageList.prototype = {
  imageLists: PropTypes.array,
};
ImageList.defaultProps = {
  imageLists: [],
};

import React from "react";
import PropTypes from "prop-types";
import "./StarRatings.css";
import StarRating from "./StarRatings";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export const CustomizedRatings = ({ Data }) => {
  return (
    <StyledEngineProvider injectFirst>
      <StarRating Data={Data} />
    </StyledEngineProvider>
  );
};
CustomizedRatings.propTypes = {
  Data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

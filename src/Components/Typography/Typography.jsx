import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import colors from "../../Utils/Colors/Index";
import "./Typography.css";

const CustomTypography = (props) => {
  const { type, text, colorType, customClass, customStyle, requiredField ,textAlign,fontSize,fontFamily,fontWeight} =
    props;
  /**
   * @name getFontType
   * @returns {React.ReactElement}  - returns the required  font type of text
   */
  const getFontType = () => {
    switch (type) {
      case "head":
        return "h1";
      case "head1":
        return "h2";
      case "head2":
        return "h3";
      case "head4":
        return "h4";
      case "head5":
        return "h5";
      case "head6":
        return "h6";
      case "sub1":
        return "subtitle1";
      case "sub2":
        return "subtitle2";
      case "b1":
        return "body1";
      case "b2":
        return "body2";
      case "bt":
        return "button";
      case "cap":
        return "caption";
      default:
        return "overline";
    }
  };
  /**
   *@name getColorType
   *@returns {React.ReactElement}- returns the required type of text  colors
   */
  const getColorType = () => {
    switch (colorType) {
      case "orange":
        return colors.orange.primary;
      case "white":
        return colors.white.primary;
      case "red":
        return colors.error.primary;
      case "blue":
        return colors.blue.tertiary;
      case "grey":
        return colors.gray.primary;
      case "grey2":
        return colors.gray.secondary;
      case "text":
        return colors.orange.primary;
      default:
        return colors.black.primary;
    }
  };
  return (
    <Typography
      variant={getFontType(type)}
      color={getColorType(colorType)}
      sx={customStyle}
      className={`${type === "error" && "errorText"} ${customClass}`}
      textAlign={textAlign}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}


    >
      {text}
      {requiredField && <span className="required">*</span>}
    </Typography>
  );
};
export default CustomTypography;

CustomTypography.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorType: PropTypes.string,
  customClass: PropTypes.string,
  customStyle: PropTypes.objectOf(PropTypes.oneOfType),
  requiredField: PropTypes.string,
  textAlign: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
};
CustomTypography.defaultProps = {
  colorType: "",
  customClass: "",
  customStyle: {},
  requiredField: "",
  textAlign: "",
  fontSize: "",
  fontFamily: "",
  fontWeight: "",
};

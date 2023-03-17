import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props --
 * @returns {React.ReactElement} returns the CustomButton
 */
function CustomButton(props) {
  const {
    btnTitle,
    variant,
    color,
    btnStyles,
    customClass,
    onClickHandle,
    image,
  } = props;

  return (
    <Button
      variant={variant}
      color={color}
      sx={btnStyles}
      onClick={onClickHandle}
      className={customClass}
      style={{ textTransform: "none" }}
      type="submit"
    >
      <img src={image} alt="" />
      {btnTitle}
    </Button>
  );
}
export default CustomButton;
CustomButton.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  customClass: PropTypes.string,
  btnStyles: PropTypes.oneOfType([PropTypes.object]),
  onClickHandle: PropTypes.func,
  image: PropTypes.string,
};
CustomButton.defaultProps = {
  variant: "contained",
  color: "",
  customClass: "",
  btnStyles: {},
  onClickHandle: () => null,
  image: "",
};

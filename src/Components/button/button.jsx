import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
/**
 *
 * @param {*} props --
 * @returns {React.ReactElement} returns the CustomButton
 */
function CustomButton(props) {
  const { btnTitle, variant, color, btnStyles, customClass, onClickHandle } =
    props;

  return (
    <Button
      variant={variant}
      color={color}
      sx={btnStyles}
      onClick={onClickHandle}
      className={customClass}
      type="submit"
    >
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
};
CustomButton.defaultProps = {
  variant: "contained",
  color: "",
  customClass: "",
  btnStyles: {},
  onClickHandle: () => null,
};

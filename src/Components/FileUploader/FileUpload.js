//

import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import CustomIcons from "../../Utils/Icons/Index";
import "./fileUpload.css";
import { useEffect } from "react";
import CustomTypography from "../Typography/Typography";
const CustomFileUploader = (props) => {
  const fileRef = useRef();
  const { handleChange, Image, resetValue, defaultValue, label, regForm } =
    props;
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [onChangeValue, setOnChangeValue] = React.useState(defaultValue);
  const [acceptType, setAcceptType] = useState("");

  useEffect(() => {
    setOnChangeValue("");
  }, [resetValue]);
  const dropEvent = () => {};

  return (
    <Grid container item justifyContent={"center"}>
      <Grid item className="AddYourProfile">
        <label htmlFor="upload-button">
          {Image.preview ? (
            <img src={Image.preview} alt="dummy" className="imageProfile" />
          ) : (
            <>
              <span className="">
                <img
                  src={CustomIcons.ProfileAvatar}
                  alt=""
                  className="imageProfile"
                />
              </span>
            </>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          // label="cfhcffc"
          value={onChangeValue}
          accept={props.acceptType}
          onDrop={dropEvent}
          placeholder="choose Image"
          ref={fileRef}
          hidden
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <br />
        <Grid pt={2} onClick={() => fileRef.current.click()}>
          <label className="chooesImage">Store Profile image </label>
        </Grid>
      </Grid>
      {regForm && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomTypography
            text={label}
            type="caption"
            customClass="textLabel"
            style={{ color: "#fff " }}
          />
          <Tooltip
            title="Image size should be below 1 MB"
            placement="top-start"
          >
            <IconButton>
              <img src={CustomIcons.Information} alt="" />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {/* <button onClick={handleUpload}>Upload</button> */}
    </Grid>
  );
};
export default CustomFileUploader;
CustomFileUploader.propTypes = {
  handleChange: propTypes.func,
  Image: propTypes.func,
};

/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CustomTypography from "../Typography/Typography";
import CustomIcons from "../../Utils/Icons/Index";
import "./fileUpload.css";
import { Typography } from "@material-ui/core";
/**
 * @param {*} props defines the prop
 * @name CustomFileUploader
 * @returns {React.ReactElement} return the FileUploader component
 */
function CustomSingleUploader(props) {
  const fileRef = useRef();
  const {
    fileType,
    label,
    upLoad,
    getImage,
    regForm,
    defaultImage,
    // resetValue
  } = props;

  console.log("image", regForm);
  // const [name, setName] = useState();
  // console.log(name, 'setttttt');
  const [selectedImage, setSelectedImage] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const image = "image/png,image/jpeg/image/jpg";
  // const docs = '.pdf';
  // const videos = 'image/*,audio/*,gif/*,video/mp4,video/x-m4v,video/*';
  const video = ".mov,.mp4";
  const [acceptType, setAcceptType] = useState("");
  // const [onChangeValue, setOnChangeValue] = React.useState(defaultImage);
  // console.log('defaultImage', defaultImage);

  // useEffect(() => {
  //   setOnChangeValue(defaultImage);
  // }, [defaultImage]);

  // useEffect(() => {
  //   setOnChangeValue('');
  // }, [resetValue]);

  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   onHandleChange(inputValue);
  //   setOnChangeValue(inputValue);
  // };

  console.log(uploadProgress, "uploadProgress");
  /**
   * @name imageChange
   * @param {Event} e defines the event
   */
  const imageChange = async (e) => {
    console.log(imageChange, "imageChange");

    const arr = [];
    arr.push(e.target.files[0]);
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    // eslint-disable-next-line no-unused-vars
    const url = reader.readAsDataURL(file);
    reader.onloadstart = () => {
      setUploadProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        const diff = 30;
        return Math.min(prev + diff, 40);
      });
    };

    reader.onprogress = () => {
      setUploadProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        const diff = 30;
        return Math.min(prev + diff, 65);
      });
    };
    await getImage(arr);

    reader.onloadend = () => {
      setUploadProgress((prev) => {
        if (prev === 100) {
          return 0;
        }
        const diff = 45;
        return Math.min(prev + diff, 100);
      });
      setSelectedImage([reader.result]);
    };
    setAcceptType(fileType === "image" ? image : video);
  };

  /**
   * @param {*} event defines the event that function
   * @name dragEvent
   */
  const dragEvent = (event) => {
    event.preventDefault();
  };
  /**
   * @name dropEvent
   */
  const dropEvent = () => {};
  console.log("selectedImage", upLoad);

  return (
    <Grid container item xs={12}>
      <Typography>{label}</Typography>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        pt={2}
        xs={12}
      >
        <input
          type="file"
          id="file-upload-button"
          onChange={imageChange}
          onDragOver={dragEvent}
          onDrop={dropEvent}
          accept={acceptType}
        />
      </Grid>
    </Grid>
  );
}
export default CustomSingleUploader;
CustomSingleUploader.propTypes = {
  fileType: propTypes.string,
  label: propTypes.string,
  upLoad: propTypes.string,
  regForm: propTypes.bool,
  getImage: propTypes.func,
  defaultImage: propTypes.string,
};
CustomSingleUploader.defaultProps = {
  fileType: "image",
  label: "",
  upLoad: "image",
  regForm: false,
  getImage: "image",
  defaultImage: "image",
};

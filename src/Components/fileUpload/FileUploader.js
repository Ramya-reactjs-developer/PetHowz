/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CustomTypography from "../Typography/Typography";
// import CustomIcons from "../../utils/icons";
import "./fileUpload.css";
import CustomIcons from "../../Utils/Icons/Index";
/**
 * @param {*} props defines the prop
 * @name CustomFileUploader
 * @returns {React.ReactElement} return the FileUploader component
 */
function CustomImageFileUploader(props) {
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

  console.log("image", defaultImage);
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
    <Grid className="textGrid">
      <Grid md={12} lg={12} sm={12} xs={12} className="ToolTip_Icon">
        {!regForm && (
          <div style={{ display: "flex" }}>
            <CustomTypography
              text={label}
              type="caption"
              customClass="textLabel"
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
      </Grid>
      <Grid
        container
        item
        md={12}
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Grid
          onClick={() => fileRef.current.click()}
          className={regForm ? "uploadimageGrid" : "uploadImageContainer"}
        >
          {selectedImage ? (
            // <div className="logo_image_size">
            <img
              src={(fileType === "image" && selectedImage) || defaultImage}
              alt=""
              className={selectedImage ? "imageUpload" : "none"}
            />
          ) : (
            // </div>
            // <img
            //   // src={defaultImage || upLoad}
            //   src={defaultImage}
            //   alt=""
            //   className={regForm ? 'regFormImageUpload' : 'imageUpload'}
            // />
            //
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <></>
          )}
          {/* {selectedImage ? (
            <video
              className={selectedImage ? 'imageUpload' : 'none'}
              width="100%"
              height="140"
              controls
              src={fileType === 'video'}
            />
          ) : (
            <img src={fileType === 'image'} alt="" className={selectedImage ? 'imageUpload' : 'none'} />
          )} */}
        </Grid>
        <Grid display="inline-flex" >
          <input
            type="file"
            className="fileUploader"
            onChange={imageChange}
            onDragOver={dragEvent}
            onDrop={dropEvent}
            accept={acceptType}
            ref={fileRef}
            hidden
          />
        </Grid>
        <Grid className="file-upload">
        <CustomTypography
          text="Choose File"
          type="caption"
          customClass="file-upload-text"
        />
        </Grid>
      
        {/* <input
          type="file"
          className="fileUploader"
          onChange={imageChange}
          onDragOver={dragEvent}
          onDrop={dropEvent}
          accept={acceptType}
          ref={fileRef}
          hidden
        /> */}
      </Grid>
      {regForm && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomTypography
            text={label}
            type="caption"
            customClass="textLabel"
          />
          <Tooltip
            title="Image size should be below 1 MB"
            placement="top-start"
          >
            <IconButton>
              {/* <img src={CustomIcons.Information} alt="" /> */}
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Grid>
  );
}
export default CustomImageFileUploader;
CustomImageFileUploader.propTypes = {
  fileType: propTypes.string,
  label: propTypes.string,
  upLoad: propTypes.string,
  regForm: propTypes.bool,
  getImage: propTypes.func,
  defaultImage: propTypes.string,
};
CustomImageFileUploader.defaultProps = {
  fileType: "image",
  label: "",
  upLoad: "image",
  regForm: false,
  getImage: "image",
  defaultImage: "image",
};

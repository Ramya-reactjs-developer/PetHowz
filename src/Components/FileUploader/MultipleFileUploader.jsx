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
/**
 * @param {*} props defines the prop
 * @name CustomMultiFileUploader
 * @returns {React.ReactElement} return the FileUploader component
 */
function CustomMultiFileUploader(props) {
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

  const [selectedImage, setSelectedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const image = "image/png,image/jpeg/image/jpg";
  const video = ".mov,.mp4";
  const [acceptType, setAcceptType] = useState("");

  console.log(uploadProgress, "uploadProgress");

  const handleFileChange = async (event) => {
    const arr = Array.from(event.target.files);
    const newImages = [];

    for (let i = 0; i < arr.length; i++) {
      const file = arr[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);

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

      await new Promise((resolve) => {
        reader.onloadend = () => {
          setUploadProgress((prev) => {
            if (prev === 100) {
              return 0;
            }
            const diff = 45;
            return Math.min(prev + diff, 100);
          });

          newImages.push(reader.result);
          setSelectedImages((prevSelectedImages) => [
            ...prevSelectedImages,
            reader.result,
          ]);
          resolve();
        };
      });
    }

    setAcceptType(fileType === "image" ? image : video);
    await getImage(newImages);
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomTypography
              text={label}
              type="caption"
              colorType={"text"}
              customStyle={{ fontFamily: "Roboto-Regular" }}
              // customClass="textLabel"
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
          {selectedImage.map((item) => (
            <img key={item} src={item} alt="" width={200} />
          ))}

          {/* {selectedImage ? (
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
          )} */}
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
        <Grid display="inline-flex">
          <input
            type="file"
            className="fileUploader"
            onChange={handleFileChange}
            onDragOver={dragEvent}
            onDrop={dropEvent}
            accept={acceptType}
            ref={fileRef}
            hidden
            multiple
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
              <img src={CustomIcons.Information} alt="" />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Grid>
  );
}
export default CustomMultiFileUploader;
CustomMultiFileUploader.propTypes = {
  fileType: propTypes.string,
  label: propTypes.string,
  upLoad: propTypes.string,
  regForm: propTypes.bool,
  getImage: propTypes.func,
  defaultImage: propTypes.string,
};
CustomMultiFileUploader.defaultProps = {
  fileType: "image",
  label: "",
  upLoad: "image",
  regForm: false,
  getImage: "image",
  defaultImage: "image",
};

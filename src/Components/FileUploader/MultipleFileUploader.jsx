/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import { Grid, Typography } from "@mui/material";
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
  const [imageupload, SetImageupload] = useState();
  const [file, setFile] = useState([]);
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
    setAcceptType(fileType === "image");
    // setAcceptType(fileType === "image" ? image : video);
    await getImage(newImages);
  };
  // function uploadSingleFile(e) {
  //   const arr = [];
  //   arr.push(e.target.files);
  //   e.preventDefault();
  //   SetImageupload(e.target.files[0]);
  //   const ImagesArray = Object.entries(e.target.files).map((item) =>
  //     URL.createObjectURL(item[1])
  //   );
  //   setFile([...file, ...ImagesArray]);
  //   getImage(arr);
  // }
  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  }

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

  const onDelete = (index) => {
    const newImages = [...selectedImage];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };
  const onClear = () => {
    setSelectedImages([]);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  return (
    <Grid container item md={12} xs={12} display={"inline-block"} rowGap={50}>
      <Grid item>
        <Typography>{label}</Typography>
        <Grid
          onClick={() => fileRef.current.click()}
          className="uploadImageContainerNew"
        >
          <Typography>Choose Images</Typography>
          {/* <img
            src={defaultImage || upLoad}
            alt=""
            // className="uploadImage"

            style={{ display: selectedImage.length ? "none" : "block" }}
          /> */}
        </Grid>
        <input
          type="file"
          className="fileUploader"
          onChange={handleFileChange}
          accept={acceptType}
          ref={fileRef}
          multiple
        />
      </Grid>
      <Grid
        md={6}
        xs={12}
        item
        paddingTop={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"5px"}
      >
        {selectedImage
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((image, index) => (
            <Grid container item md={4} sm={6} xs={12} key={index}>
              <Grid item>
                <Grid item className="selectedImagesTiles">
                  {fileType === "image" ? (
                    <img src={image} alt="" width={100} height={100} />
                  ) : (
                    <video src={image} width="100%" height="140" controls />
                  )}
                </Grid>
                <Tooltip
                  title="Delete"
                  placement="top"
                  className="Button-Position "
                >
                  <IconButton
                    className="Delete-Button-Style"
                    onClick={() => onDelete(index)}
                  >
                    x
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          ))}
      </Grid>
      <Grid item pt={"15px"}>
        {selectedImage.length >= 1 ? (
          <div className="Align-Selsections">
            <p>Total Images Selected : {selectedImage.length} </p>
            <button
              onClick={() => setSelectedImages([])}
              className="Button-Style"
            >
              Clear Selection
            </button>
            <div className="Arrow-Position">
              <button
                onClick={() => prevPage()}
                href="!#"
                disabled={currentPage === 1}
                className="Arrow-Style"
              >
                {" "}
                ←
              </button>
              <button
                onClick={() => nextPage()}
                href="!#"
                disabled={currentPage === Math.ceil(selectedImage.length / 5)}
                className="Arrow-Style"
              >
                →
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </Grid>
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

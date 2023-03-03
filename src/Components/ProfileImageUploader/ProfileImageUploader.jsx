import styled from "styled-components";
// import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import { Button, Grid } from "@mui/material";
import CustomIcons from "../../Utils/Icons/Index";
import CustomButton from "../Button/Button";
export const AvatarInput = styled.div`
  margin-bottom: 10px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    object-fit: cover;
    border-radius: 50%;
  }
  .circle {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`;

export default function ProfileImageUploader() {
  const [url, setUrl] = useState(CustomIcons.ProfileAvatar);

  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };

  return (
    <Grid>
      <AvatarInput>
        <img src={url} alt="Avatar Placeholder" />
      </AvatarInput>

      <ReactFileReader
        fileTypes={[".png", ".jpg"]}
        base64={true}
        handleFiles={handleFiles}
      >
        <Button variant="contained" >sdfs</Button>
        {/* <FiCamera style={{ width: 30, height: 30 }} as={Button} /> */}
      </ReactFileReader>
    </Grid>
  );
}

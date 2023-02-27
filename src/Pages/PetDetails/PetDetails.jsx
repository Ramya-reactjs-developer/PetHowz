import React, { useState } from "react";
import {
  Grid,
  Button,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { makeStyles } from "@mui/styles";
import CustomTypography from "../../Components/Typography/Typography";
import CustomButton from "../../Components/Button/Button";
import CustomTextField from "../../Components/TextField/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
  },
  input: {
    display: "none",
  },
}));
const MyForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or send form data to server
  };
 
  return (
    <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
      <CustomTypography
            type="header"
            text="My Pet Details"
            colorType="senary"
          />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Name of Pet"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input1}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Select Pet Type"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input2}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Brief description about the pet"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input3}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography type="caption" text="Bread" colorType="text" />
          <CustomTextField
            name="name"
            value={formData.input4}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Bate of Birth"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input5}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography type="caption" text="Weight" colorType="text" />
          <CustomTextField
            name="name"
            value={formData.input6}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Interests"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input7}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Food Preference"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input8}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Walking Routine"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input9}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Add Vaccination Card"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input10}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Add License Details(Optional)"
            colorType="text"
          />
          <CustomTextField
            name="name"
            value={formData.input11}
            onChange={handleInputChange}
            placeholder="hii"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTypography
            type="caption"
            text="Add Photos"
            colorType="text"
          />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<PhotoCamera />}
              fullWidth
              sx={{ color: "#ffffff" }}
            >
              Upload Photo
            </Button>
          </label>
          {/* <FormControl fullWidth>
            <InputLabel htmlFor="file-uploader">File Upload</InputLabel>
            <Input id="file-uploader" type="file" onChange={handleFileChange} />
          </FormControl> */}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomButton
            btnTitle="Submit"
            variant="contained"
            color="primary"
            btnStyles={{
              color: "#ffffff",
              marginTop: "0px",
              border: "1px solid #FB718A",
            }}
            // onClickHandle={() => handleOpen()}
          />
          {/* <Custom variant="contained" color="primary" type="submit" >
            Submit
</Custom> */}
        </Grid>
      </Grid>
    </form>
  );
};
export default MyForm;

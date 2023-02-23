import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomIcons from "../../Utils/Icons/Index";
const Footer = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#f4f4f4",
        marginTop: "auto",
        padding: "50px 20px",
      }}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h6">Head Office</Typography>
        <Typography variant="body1">
          <img src={CustomIcons.Location} alt="location" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          leo at nibh fringilla commodo.
        </Typography>
        <Typography variant="body1">
          <img src={CustomIcons.Phone} alt="location" />
          9876543210
        </Typography>
        <Typography variant="body1">
          <img src={CustomIcons.Mail} alt="location" />
          asdf@gmail.com
        </Typography>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={2}>
        <Typography variant="h6">Section 2</Typography>
        <Typography variant="body1">Link 1</Typography>
        <Typography variant="body1">Link 2</Typography>
        <Typography variant="body1">Link 3</Typography>
      </Grid> */}
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant="h6">Site Links</Typography>
        <Typography variant="body1">Link 1</Typography>
        <Typography variant="body1">Link 2</Typography>
        <Typography variant="body1">Link 3</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant="h6">Follow Us</Typography>
        <img src={CustomIcons.Insta} alt="location" />
        <img src={CustomIcons.Youtube} alt="location" />
        <img src={CustomIcons.Facebook} alt="location" />
        <img src={CustomIcons.Twitter} alt="location" />
        <Typography variant="body1">Link 1</Typography>
        <Typography variant="body1">Link 2</Typography>
        <Typography variant="body1">Link 3</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h6">Service We Provide</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          leo at nibh fringilla commodo. Proin sed laoreet sapien. Curabitur
          aliquet eget nunc ac semper. Mauris pharetra commodo turpis, eu congue
          dolor iaculis in. Vestibulum sodales, ante vitae commodo fringilla,
          urna turpis volutpat lorem, ac ultrices nunc arcu quis enim.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "#999999" }}>
          © {new Date().getFullYear()} Pethowz. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

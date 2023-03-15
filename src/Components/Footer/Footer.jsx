import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CustomIcons from "../../Utils/Icons/Index";
import CustomImages from "../../Utils/Images/index";
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
        <Box
          sx={{ display: "flex", alignItems: "start", gap: "5px", pt: "10px" }}
        >
          {" "}
          <img
            src={CustomIcons.Location}
            alt="location"
            style={{ margin: "5px 5px 0px 0px" }}
          />
          <Box>
            <Typography variant="body1" fontWeight={"bold"}>
              Registered Office
            </Typography>
            <Typography variant="body1">
              KERNITE KIP, 1A, First Floor,
            </Typography>
            <Typography variant="body1">
              6th Main Road, V Block, Anna Nagar,
            </Typography>
            <Typography variant="body1">Chennai - 600040.</Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "start", gap: "5px", pt: "10px" }}
        >
          {" "}
          <img
            src={CustomIcons.Phone}
            alt="location"
            style={{ margin: "5px 5px 0px 0px" }}
          />
          <Typography variant="body1">098840 42119</Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "start", gap: "5px", pt: "10px" }}
        >
          <img
            src={CustomIcons.Mail}
            alt="location"
            style={{ margin: "5px 5px 0px 0px" }}
          />
          <Typography variant="body1">support@pethows.com</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Typography variant="h6">Site Links</Typography>
        <Typography variant="body1">Products</Typography>
        <Typography variant="body1">Services</Typography>
        <Typography variant="body1">About Us</Typography>
        <Typography variant="body1">Contact</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{}}>
        <Typography variant="h6">Follow Us</Typography>
        <img
          src={CustomIcons.Insta}
          height="25px"
          alt="location"
          style={{ marginRight: "10px" }}
        />
        <img
          src={CustomIcons.Youtube}
          height="25px"
          alt="location"
          style={{ marginRight: "10px" }}
        />
        <img
          src={CustomIcons.Facebook}
          height="25px"
          alt="location"
          style={{ marginRight: "10px" }}
        />
        <img
          src={CustomIcons.Twitter}
          height="25px"
          alt="location"
          style={{ marginRight: "10px" }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Typography variant="h6">Service We Provide</Typography>
        <Typography variant="body1">Pet Sitting</Typography>
        <Typography variant="body1">Pet Training</Typography>
        <Typography variant="body1">Pet Walking</Typography>
        <Typography variant="body1">Pet Grooming</Typography>
        <Typography variant="body1">Pet Breading</Typography>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            "@media (max-width: 1024px)": {
              display: "block",
            },
          }}
        >
          <Typography variant="body1">Pet Photography</Typography>
          {/* <Box sx={{ display: "flex" , justifyContent: "space-between",}} >
            <img
              src={CustomImages.GooglePlay}
              height="40px"
              alt="location"
              style={{ marginRight: "10px" }}
            />
            <img
              src={CustomImages.AppStore}
              height="40px"
              alt="location"
              style={{ marginRight: "10px" }}
            />
          </Box> */}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "20px" }}>
        <Divider variant="fullWidth" color="#d6cccb" />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ color: "#999999" }}>
          © {new Date().getFullYear()} Pethowz. All Rights Reserved.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body1" sx={{ color: "#999999", margin: "10px" }}>
            Terms & Conditions
          </Typography>
          <Typography variant="body1" sx={{ color: "#999999", margin: "10px" }}>
            Privacy
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

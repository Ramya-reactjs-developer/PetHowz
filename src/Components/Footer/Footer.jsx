import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomTypography from "../Typography/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CustomIcons from "../../Utils/Icons/Index";
import CustomImages from "../../Utils/Images/index";
import "./footer.css";
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
        {/* <Typography variant="h6">Head Office</Typography> */}
        <CustomTypography
          text="Head Office"
          type="header"
          customClass="headPffice"
        />
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
            <CustomTypography
              text="Registered Office"
              type="header"
              customClass="RegisterOffice"
            />
            <CustomTypography
              text="KERNITE KIP, 1A, First Floor,"
              type="header"
              customClass="addressDetails"
            />
            <CustomTypography
              text="6th Main Road, V Block, Anna Nagar,"
              type="header"
              customClass="addressDetails"
            />
            <CustomTypography
              text="Chennai - 600040."
              type="header"
              customClass="addressDetails"
            />
            {/* <Typography variant="body1" fontWeight={"bold"}>
              Registered Office
            </Typography> */}
            {/* <Typography variant="body1">
              KERNITE KIP, 1A, First Floor,
            </Typography> */}
            {/* <Typography variant="body1">
              6th Main Road, V Block, Anna Nagar,
            </Typography> */}
            {/* <Typography variant="body1">Chennai - 600040.</Typography> */}
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
          {/* <Typography variant="body1">098840 42119</Typography> */}
          <CustomTypography
            text="098840 42119<"
            type="header"
            customClass="RegisterOffice"
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "start", gap: "5px", pt: "10px" }}
        >
          <img
            src={CustomIcons.Mail}
            alt="location"
            style={{ margin: "5px 5px 0px 0px" }}
          />
          {/* <Typography variant="body1">support@pethows.com</Typography> */}
          <CustomTypography
            text="support@pethows.com"
            type="header"
            customClass="RegisterOffice"
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <CustomTypography
          text="Site Links"
          type="header"
          customClass="headPffice"
        />
        {/* <CustomTypography text="Products" type="header" customClass="" />
        <CustomTypography text="Services" type="header" customClass="" />
        <CustomTypography text="About Us" type="header" customClass="" />
        <CustomTypography text="Contact" type="header" customClass="" /> */}

        {/* <Typography variant="h6">Site Links</Typography>
        <Typography variant="body1">Products</Typography>
        <Typography variant="body1">Services</Typography>
        <Typography variant="body1">About Us</Typography>
        <Typography variant="body1">Contact</Typography> */}
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{}}>
        <Grid pb={2}>
          <CustomTypography
            text="Follow Us"
            type="header"
            customClass="headPffice"
          />
        </Grid>

        {/* <Typography variant="h6">Follow Us</Typography> */}
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
        <CustomTypography
          text="Service We Provide<"
          type="header"
          customClass="headPffice"
        />

        <CustomTypography
          text="Pet Sitting"
          type="header"
          customClass="addressDetails"
        />

        <CustomTypography
          text="Pet Training"
          type="header"
          customClass="addressDetails"
        />

        <CustomTypography
          text="Pet Walking"
          type="header"
          customClass="addressDetails"
        />

        <CustomTypography
          text="Pet Grooming"
          type="header"
          customClass="addressDetails"
        />

        <CustomTypography
          text="Pet Breading"
          type="header"
          customClass="addressDetails"
        />

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
          <CustomTypography
            text="Pet Photography"
            type="header"
            customClass="addressDetails"
          />

          {/* <Typography variant="body1">Pet Photography</Typography> */}
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
        <Typography className="addressDetails">
          © {new Date().getFullYear()} Pethowz. All Rights Reserved.
        </Typography>
        <Box sx={{ display: "flex" }}>
          {/* <Typography variant="body1" sx={{ color: "#999999", margin: "10px" }}>
            Terms & Conditions
          </Typography> */}
          {/* <Typography variant="body1" sx={{ color: "#999999", margin: "10px" }}>
            Privacy
          </Typography> */}
          <CustomTypography
            text=" Terms & Conditions"
            type="header"
            customClass="addressDetails"
          />
          <Grid pl={2}>
            <CustomTypography
              text="Privacy"
              type="header"
              customClass="addressDetails"
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

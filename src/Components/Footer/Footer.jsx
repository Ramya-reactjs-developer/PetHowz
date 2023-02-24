import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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
    
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant="h6">Site Links</Typography>
        <Typography variant="body1">Link 1</Typography>
        <Typography variant="body1">Link 2</Typography>
        <Typography variant="body1">Link 3</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2} sx={{}}>
        <Typography variant="h6">Follow Us</Typography>
        <img src={CustomIcons.Insta} height="25px" alt="location" style={{marginRight:"10px"}}/>
        <img src={CustomIcons.Youtube}height="25px" alt="location" style={{marginRight:"10px"}}/>
        <img src={CustomIcons.Facebook} height="25px" alt="location" style={{marginRight:"10px"}}/>
        <img src={CustomIcons.Twitter} height="25px" alt="location" style={{marginRight:"10px"}}/>
    
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h6">Service We Provide</Typography>
        <Typography variant="body1">Link 1</Typography>
        <Typography variant="body1">Link 2</Typography>
        <Grid item sx={{display:"flex" ,justifyContent:"space-between",alignItems:"center"}} >
        <Typography variant="body1">Link 3</Typography>
        <Box sx={{display:"flex" }}>
        <img src={CustomIcons.Building} height="25px" alt="location" style={{marginRight:"10px"}}/>
        <img src={CustomIcons.Facebook} height="25px" alt="location" style={{marginRight:"10px"}}/>
        </Box>
      </Grid>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "20px"}}><Divider variant="fullWidth" color="#d6cccb"/></Grid>

      <Grid item xs={12} sx={{display:"flex" ,justifyContent:"space-between",alignItems:"center"}} >
        <Typography variant="body1" sx={{ color: "#999999" }}>
          © {new Date().getFullYear()} Pethowz. All Rights Reserved.
        </Typography>
        <Box sx={{display:"flex" }}>
        <Typography variant="body1" sx={{ color: "#999999" ,margin:"10px"}}>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" sx={{ color: "#999999" ,margin:"10px"}} >
          Privacy
        </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

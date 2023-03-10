import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import {
  PriceTypography,
  ServiceButtonPostion,
  ServiceButtonStyle,
  ServiceIcon,
  ServicePackageCardPostion,
  ServicePackageHeader,
  ServiceTypography,
  TopButtonPosition,
  TopButtonStyle,
} from "./Style";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";

export default function ServicePackagesHost({ Data }) {
  const CardData = Data;
  //  [
  //   {
  //     price: "₹ 1999",
  //     offeredPrice: "₹ 999",
  //     service1: "Bath with Shampoo and conditioner",
  //     service2: "Blow Dry",
  //     service3: "Nail Clipping",
  //     service4: "Ear Cleaning",
  //     service5: "Paw Massage",
  //     service6: "Combing/Brushing",
  //   },
  // ];

  return (
    <Grid
      container
      sx={{
        pt: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      item
      xs={12}
    >
      {/* <Box sx={TopButtonPosition}>
        <Button sx={TopButtonStyle} variant="contained">
          Spa Bath
        </Button>
      </Box> */}
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {CardData.map((item, key) => {
          return (
            <Card key={key} sx={ServicePackageCardPostion}>
              <Box>
                <Box>
                  <CardActions>
                    <CardContent>
                      <Box
                        sx={{
                          borderBottom: "1px dashed #707070",
                          textAlign: "center",
                          width: "100%",
                          maxWidth: "350px",
                          pb: "20px",
                        }}
                      >
                        {/* <Typography
                        gutterBottom
                        variant="h5"
                        sx={PriceTypography}
                        component="div"
                      >
                        {item.price}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.offeredPrice}
                      </Typography> */}
                        <CustomTypography
                          text={item.type}
                          type="heading2"
                          colorType="text"
                        />
                      </Box>

                      <Box>
                        <Box sx={ServiceTypography}>
                          <Typography color="text.secondary" fontSize="12">
                            {item.service1}
                          </Typography>
                          <Typography sx={ServiceIcon}>
                            <DoneIcon />
                          </Typography>
                        </Box>
                        <Box sx={ServiceTypography}>
                          <Typography color="text.secondary" fontSize="12">
                            {item.service2}
                          </Typography>
                          <Typography sx={ServiceIcon}>
                            <DoneIcon />
                          </Typography>
                        </Box>
                        <Box sx={ServiceTypography}>
                          <Typography color="text.secondary" fontSize="12">
                            {item.service3}
                          </Typography>
                          <Typography sx={ServiceIcon}>
                            <DoneIcon />
                          </Typography>
                        </Box>
                        <Box sx={ServiceTypography}>
                          <Typography color="text.secondary" fontSize="12">
                            {item.service4}
                          </Typography>
                          <Typography sx={ServiceIcon}>
                            <DoneIcon />
                          </Typography>
                        </Box>
                        <Box sx={ServiceTypography}>
                          <Typography color="text.secondary" fontSize="12">
                            {item.service5}
                          </Typography>
                          <Typography sx={ServiceIcon}>
                            <DoneIcon />
                          </Typography>
                        </Box>
                        <Box sx={ServiceTypography}>
                          <Typography color="text.secondary" fontSize="12">
                            {item.service6}
                          </Typography>
                          <Typography sx={ServiceIcon}>
                            <DoneIcon />
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ pt: "10px" }}>
                        <Box sx={ServiceTypography}>
                          <Typography fontSize="18"> Cost</Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.price}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          pt: "10rem",

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          sx={{
                            width: "120px",
                            borderRadius: "20px",
                            background: "#F85A47",
                            color: "white",
                            textTransform: "none",
                          }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                        <Button
                          sx={{
                            width: "120px",
                            borderRadius: "15px",
                            background: "transparent",
                            color: "#F85A47",
                            border: "1px solid #F85A47",
                            boxShadow: "none",
                            textTransform: "none",
                          }}
                          variant="contained"
                        >
                          Delete
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActions>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
}
ServicePackagesHost.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

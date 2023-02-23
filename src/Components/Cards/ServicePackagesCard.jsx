import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Button, CardActions } from "@mui/material";
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

export default function ServicePackagesCards({ Data }) {
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
    <Box sx={{ width: "420px" }}>
      <Box sx={TopButtonPosition}>
        <Button sx={TopButtonStyle} variant="contained">
          Spa Bath
        </Button>
      </Box>
      <Card sx={ServicePackageCardPostion}>
        <Box>
          {CardData.map((item, key) => {
            return (
              <Box key={key}>
                <CardActions>
                  <CardContent>
                    <Box sx={ServicePackageHeader}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={PriceTypography}
                        component="div"
                      >
                        {item.price}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.offeredPrice}
                      </Typography>
                    </Box>

                    <Box>
                      <Box sx={ServiceTypography}>
                        <Typography color="text.secondary" fontSize="16">
                          {item.service1}
                        </Typography>
                        <Typography sx={ServiceIcon}>
                          <DoneIcon />
                        </Typography>
                      </Box>
                      <Box sx={ServiceTypography}>
                        <Typography color="text.secondary" fontSize="16">
                          {item.service2}
                        </Typography>
                        <Typography sx={ServiceIcon}>
                          <DoneIcon />
                        </Typography>
                      </Box>
                      <Box sx={ServiceTypography}>
                        <Typography color="text.secondary" fontSize="16">
                          {item.service3}
                        </Typography>
                        <Typography sx={ServiceIcon}>
                          <DoneIcon />
                        </Typography>
                      </Box>
                      <Box sx={ServiceTypography}>
                        <Typography color="text.secondary" fontSize="16">
                          {item.service4}
                        </Typography>
                        <Typography sx={ServiceIcon}>
                          <DoneIcon />
                        </Typography>
                      </Box>
                      <Box sx={ServiceTypography}>
                        <Typography color="text.secondary" fontSize="16">
                          {item.service5}
                        </Typography>
                        <Typography sx={ServiceIcon}>
                          <DoneIcon />
                        </Typography>
                      </Box>
                      <Box sx={ServiceTypography}>
                        <Typography color="text.secondary" fontSize="16">
                          {item.service6}
                        </Typography>
                        <Typography sx={ServiceIcon}>
                          <DoneIcon />
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={ServiceButtonPostion}>
                      <Button sx={ServiceButtonStyle} variant="contained">
                        Add
                      </Button>
                    </Box>
                  </CardContent>
                </CardActions>
              </Box>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
}
ServicePackagesCards.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

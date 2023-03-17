import React from "react";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import { Box, CardMedia, Grid } from "@mui/material";
import {
  Info1Postion,
  Info1SubPostion1,
  // Info1SubPostion2,
  // Info1SubPostion3,
  // Info2Postion,
  // Info2SubPostion1,
  OwnerProfile,
  OwnerProfileSize,
  PetHomeCardPosition,
  PetHomeCardSize,
} from "./Style";
import PropTypes from "prop-types";

export default function PetHomeCard({ Data }) {
  const CardData = Data;
  //  [
  //   {
  //     ownerPic:
  //       "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
  //     ownername: "John",
  //     petName: "Max,chalie",
  //     venueBooked: "Adhi Pet Care",
  //     totalCosts: "380",
  //     bookedDate: "20 Jun 2022",
  //     noOfDays: "5",
  //   },
  // ];

  return (
    <Grid
      container
      // sx={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "flex-start",
      // }}

      item
      xs={12}
    >
      {" "}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "10px",
          flexWrap: { lg: "nowrap", md: "wrap", sm: "wrap", xs: "wrap" },
        }}
      >
        {CardData.map((item, key) => {
          return (
            <Grid
              Item
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              // lg={4}
              // md={6}
              // sm={10}
              // xs={12}
              key={key}
            >
              <Card sx={PetHomeCardSize}>
                <Box sx={{ pt: "7px" }}>
                  <Box sx={PetHomeCardPosition}>
                    <Box sx={OwnerProfile}>
                      <CardMedia
                        sx={OwnerProfileSize}
                        component="img"
                        image={item.ownerPic}
                        alt="dog"
                      />

                      {/* <Typography fontSize={28} sx={{ pt: "5px" }}>
                      {item.ownername}
                    </Typography> */}
                    </Box>
                    <Box sx={Info1Postion}>
                      <Box sx={Info1SubPostion1}>
                        <Box>
                          <Typography lineHeight={2.5}>Pet Name</Typography>
                          <Typography lineHeight={2.5}>Venue Booked</Typography>
                          <Typography lineHeight={2.5}>Total Cost</Typography>
                        </Box>
                        <Box>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.petName}
                          </Typography>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.venueBooked}
                            <Typography color="text.secondary" lineHeight={2.5}>
                              {item.totalCosts}
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={Info1SubPostion1}>
                        <Box>
                          <Typography lineHeight={2.5}>Booked Date</Typography>
                          <Typography lineHeight={2.5}>No Of Days</Typography>
                        </Box>
                        <Box>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.bookedDate}
                          </Typography>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.noOfDays}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
PetHomeCard.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

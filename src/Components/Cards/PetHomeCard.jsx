import * as React from "react";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import { Box, CardMedia } from "@mui/material";
import {
  Info1Postion,
  Info1SubPostion1,
  Info1SubPostion2,
  Info1SubPostion3,
  Info2Postion,
  Info2SubPostion1,
  OwnerProfile,
  OwnerProfileSize,
  PetHomeCardPosition,
  PetHomeCardSize,
  textAlign,
} from "./CardsStyle";
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
    <Card sx={PetHomeCardSize}>
      <Box sx={{ pt: "7px" }}>
        {CardData.map((item, key) => {
          return (
            <Box key={key} sx={PetHomeCardPosition}>
              <Box sx={OwnerProfile}>
                <CardMedia
                  sx={OwnerProfileSize}
                  component="img"
                  image={item.ownerPic}
                  alt="dog"
                />

                <Typography fontSize={28} sx={{ pt: "5px" }}>
                  {item.ownername}
                </Typography>
              </Box>
              <Box sx={Info1Postion}>
                <Box>
                  <Box sx={Info1SubPostion1}>
                    <Typography fontSize={21} sx={textAlign}>
                      Pet Name
                    </Typography>
                    <Typography fontSize={21} color="text.secondary">
                      {item.petName}
                    </Typography>
                  </Box>
                  <Box sx={Info1SubPostion2}>
                    <Typography fontSize={21} sx={textAlign}>
                      Venue Booked
                    </Typography>
                    <Typography fontSize={21} color="text.secondary">
                      {item.venueBooked}
                    </Typography>
                  </Box>
                  <Box sx={Info1SubPostion3}>
                    <Typography fontSize={21} sx={textAlign}>
                      Total Cost
                    </Typography>
                    <Typography fontSize={21} color="text.secondary">
                      {item.totalCosts}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={Info2Postion}>
                    <Typography fontSize={21} sx={textAlign}>
                      Booked Date
                    </Typography>
                    <Typography fontSize={21} color="text.secondary">
                      {item.bookedDate}
                    </Typography>
                  </Box>
                  <Box sx={Info2SubPostion1}>
                    <Typography fontSize={21} sx={textAlign}>
                      No Of Days
                    </Typography>
                    <Typography fontSize={21} color="text.secondary">
                      {item.noOfDays}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}
PetHomeCard.propTypes = {
  Data: PropTypes.arrayOf.isRequired,
};

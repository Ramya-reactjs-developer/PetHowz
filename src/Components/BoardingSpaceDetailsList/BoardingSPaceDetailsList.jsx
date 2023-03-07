import React from "react";

import { Box, Typography } from "@mui/material";
import { BoadingSpaceListSize, BoardingSpaceDetailListPostion } from "./Style";
import PropTypes from "prop-types";

export const BoardingSpaceDetailList = ({ Data }) => {
  const ListData = Data;
  //   [
  //     {
  //       area: "1200 Sq.ft",
  //       size: "3 Bedrooms",
  //       type: "Villa",
  //       prefer: "Small Pets",

  //       capacity: "8-10 pets",
  //       petsAccepted: "Cats & Dogs",
  //       location: "Anna Nagar, Chennai",
  //       canProvide: "Oral Medication",
  //     },
  //   ];

  return (
    <div>
      {ListData.map((item, key) => {
        return (
          <Box key={key} sx={BoardingSpaceDetailListPostion}>
            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Area</Typography>
              <Typography color="text.secondary">{item.area}</Typography>
            </Box>

            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Size</Typography>
              <Typography color="text.secondary">{item.size}</Typography>
            </Box>
            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Type</Typography>
              <Typography color="text.secondary">{item.type}</Typography>
            </Box>

            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Prefer</Typography>
              <Typography color="text.secondary">{item.prefer}</Typography>
            </Box>
            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Capacity</Typography>
              <Typography color="text.secondary">{item.capacity}</Typography>
            </Box>

            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Pets Accepted</Typography>
              <Typography color="text.secondary">
                {item.petsAccepted}
              </Typography>
            </Box>
            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Location</Typography>
              <Typography color="text.secondary">{item.location}</Typography>
            </Box>
            <Box sx={BoadingSpaceListSize}>
              <Typography fontWeight="bold">Can Provide</Typography>
              <Typography color="text.secondary">{item.canProvide}</Typography>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
BoardingSpaceDetailList.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

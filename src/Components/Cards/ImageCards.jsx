import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";

export default function ImageCards({
  ImagePath,
  CardWidth,
  CardHeight,
  ImageWidth,
  ImageHeight,
  service,
  sub,
}) {
  const ImageCardSize = {
    maxWidth: CardWidth,
    maxHeight: CardHeight,
    borderRadius: 3,
    width: "100%",
  };
  const CardMediaPosition = {
    position: "relative",
    boxShadow:
      "0px 5px 5px -3px rgba(0,0,0,0.9), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
  };
  const CardTextPosition = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50px",
    background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
    zIndex: 1,
  };
  return (
    <Grid item sm={12} xs={10}>
      <Card sx={ImageCardSize}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={ImagePath}
            width={ImageWidth}
            height={ImageHeight}
            alt="green iguana"
            sx={CardMediaPosition}
          />
          <Box sx={CardTextPosition} />
        </CardActionArea>
        <Box
          sx={{
            position: "relative",
            left: "20px",
            bottom: "5rem",
          }}
        >
          <CustomTypography
            text={service}
            type="subHeading"
            colorType="secondary"
          />
          <CustomTypography text={sub} type="title" colorType="secondary" />
        </Box>
      </Card>
    </Grid>
  );
}

ImageCards.propTypes = {
  imagePath: PropTypes.any.isRequired,
  CardWidth: PropTypes.any.isRequired,
  CardHeight: PropTypes.any.isRequired,
  ImageWidth: PropTypes.any.isRequired,
  ImageHeight: PropTypes.any.isRequired,
  service: PropTypes.any.isRequired,
  sub: PropTypes.any.isRequired,
};
// ImageCards.defaultProps = {
//   imagePath: "",
//   CardWidth: "",
//   CardHeight: "",
//   ImageWidth: "",
//   ImageHeight: "",
//   service: "",
//   sub: "",
// };

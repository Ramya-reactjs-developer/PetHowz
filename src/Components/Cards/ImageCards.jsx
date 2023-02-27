import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
export default function ImageCards({
  ImagePath,
  CardWidth,
  CardHeight,
  ImageWidth,
  ImageHeight,
}) {
  return (
    <Grid item>
      <Card
        sx={{
          maxWidth: CardWidth,
          maxHeight: CardHeight,
          borderRadius: 3,
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={ImagePath}
          width={ImageWidth}
          height={ImageHeight}
          alt="green iguana"
        />
      </Card>
    </Grid>
  );
}
ImageCards.propTypes = {
  imagePath: PropTypes.any.isRequired,
};

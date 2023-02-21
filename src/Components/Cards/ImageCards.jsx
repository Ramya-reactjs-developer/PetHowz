import { Card, CardActionArea, CardMedia } from "@mui/material";
import * as React from "react";
import { ImageCardsSize } from "./CardsStyle";
import PropTypes from "prop-types";
export default function ImageCards({ imagePath }) {
  return (
    <Card sx={ImageCardsSize}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
ImageCards.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

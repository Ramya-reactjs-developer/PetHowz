import { Card, CardActionArea, CardMedia } from "@mui/material";
import * as React from "react";
import { ImageCardsSize } from "./CardsStyle";

export default function ImageCards() {
  return (
    <Card sx={ImageCardsSize}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import "../DashBoardCard/DashBoardCard.css";

export default function DashBoardCard({ id, tittle, icon, number, MWidth }) {
  return (
    <Card
      id={id}
      sx={{ borderRadius: "15px", maxWidth: MWidth, height: "auto" }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              font: " normal normal medium 22dp/17dp Roboto",
              color: "white",
            }}
          >
            {tittle}
          </Typography>
          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              pt: "3.5rem",
            }}
          >
            <img src={icon} width={50} alt="icon" />

            <Typography
              variant="h2"
              sx={{
                font: "normal normal bold 36dp/63dp Roboto",
                color: "white",
              }}
            >
              {number}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

DashBoardCard.propTypes = {
  id: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  number: PropTypes.string.isRequired,
};

import React, { useState } from "react";
import { Backdrop, Box, Modal, Fade, Grid, Typography } from "@mui/material";
import CustomButton from "../../Components/Button/Button";
// import { ModalClose } from "@mui/joy";

import customImages from "../../Utils/Images";
import CustomTypography from "../../Components/Typography/Typography";

/**
 *
 * @returns
 */

function ProceedToPayModal({ onModalClose, open }) {
  //   const [open, setOpen] = useState(true);
  //     const onModalClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: 700,
    height: 300,
    backgroundColor: "#fff",
    boxShadow: 24,
    borderRadius: 2,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      //   BackdropComponent={Backdrop}
      //   BackdropProps={{
      //     timeout: 500,
      //   }}
    >
      <Fade in={open}>
        <Grid
          container
          item
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          xs={11}
          sx={style}
        >
          <Grid item>
            <Grid item xs={12}>
              <Typography fontSize={"18px"} textAlign="center">
                Your Booking Request with
                <span style={{ fontWeight: "bold" }}> Aadhi Pet Care</span> for
              </Typography>
              <Typography fontSize={"18px"} textAlign="center">
                The Date of{" "}
                <span style={{ fontWeight: "bold" }}>20 Jun 2022</span> Has Been
                <span style={{ fontWeight: "bold", color: "#00CA72" }}>
                  {" "}
                  Accepted
                </span>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                pt: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <CustomButton
                btnTitle="Proceed To Pay"
                color={"primary"}
                onClickHandle={onModalClose}
                btnStyles={{
                  color: "white",
                  background: "#F85A47",
                  boxShadow: "none",
                }}
              />
              <CustomButton
                btnTitle="Book Another"
                color={"primary"}
                onClickHandle={onModalClose}
                btnStyles={{
                  color: "#F85A47",
                  background: "white",
                  border: "1px solid #F85A47 ",
                  boxShadow: "none",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
}
export default ProceedToPayModal;

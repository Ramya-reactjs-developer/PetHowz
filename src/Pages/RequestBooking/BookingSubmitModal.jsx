import React, { useState } from "react";
import { Backdrop, Box, Modal, Fade, Grid } from "@mui/material";
import CustomButton from "../../Components/Button/Button";
// import { ModalClose } from "@mui/joy";
import "./ReqBookingStyle.css";
import customImages from "../../Utils/Images";
import CustomTypography from "../../Components/Typography/Typography";

/**
 *
 * @returns
 */

function BookingSubmitModal({ onModalClose, open }) {
  //   const [open, setOpen] = useState(true);
  //     const onModalClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: 500,
    height: 300,
    backgroundColor: "#fff",
    boxShadow: 24,
    borderRadius: 7,
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
          className="modalBG"
        >
          <Box>
            <Box>
              <img src={customImages.SubmitBooking} alt="submit" width={80} />
            </Box>
            <Box sx={{ pt: "10px" }}>
              <CustomTypography
                text="Your Booking Request Is Submitted"
                type="subHeading"
                colorType={"text"}
              />
            </Box>
            <Box sx={{ pt: "10px" }}>
              <CustomTypography
                text="PetHowz Admin Revert Shortly"
                type="title"
                customStyle={{ color: "gray" }}
              />
            </Box>
            <Box sx={{ pt: "10px" }}>
              <CustomButton
                btnTitle="Continue"
                color={"primary"}
                onClickHandle={onModalClose}
                btnStyles={{ color: "white", background: "#F85A47" }}
              />
            </Box>
          </Box>
        </Grid>
      </Fade>
    </Modal>
  );
}
export default BookingSubmitModal;

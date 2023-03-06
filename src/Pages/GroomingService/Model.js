import React, { useState } from "react";
import { Backdrop, Box, Modal, Fade, Grid } from "@mui/material";
import PropTypes from "prop-types";
import CustomTypography from "../../Components/Typography/Typography";
import CustomIcons from "../../Utils/Icons/Index";
import customImages from "../../Utils/Images";

/**
 *
 * @returns
 */

function GroomModal(props) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: 1200,
    height: 500,
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
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} className="modalBox">
          <Grid container item md={12} className="firstDiv">
            <Grid
              className="profileEdit"
              container
              item
              md={12}
              sm={12}
              lg={12}
              xs={12}
              p={2}
              sx={{display:"inline-flex",justifyContent:"end"}}
            >
              <CustomTypography type="title" text="" customClass="NameEdit" />
              <Grid className="close" onClick={handleClose}>
                <img src={CustomIcons.modalClose} alt="close" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container md={12} lg={12} sm={12} xs={12}>
            <Grid
              item
              md={5}
              lg={5}
              sm={12}
              xs={12}
              m={1}
              className="leftImage"
            >
              <img src={customImages.Service} alt="" />
            </Grid>
            <Grid
              item
              md={3.5}
              lg={3.5}
              sm={12}
              xs={12}
              m={1}
              className="centerImage"
            >
              <img src={customImages.PetImage} alt="" />
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Grid item m={1} className="rightTop">
                <img src={customImages.Service} alt="" />
              </Grid>
              <Grid m={1} className="rightBottom">
                {/* <CardActionArea onClick={modalOpen}> */}
                  <img
                    src={customImages.PetImage}
                    alt=""
                    // onClick={(id) => modalOpen(id)}
                  />
                {/* </CardActionArea> */}
                {/* {Modal && <GroomModal />} */}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}
export default GroomModal;
GroomModal.propTypes = {
  firstText: PropTypes.string,
  secondText: PropTypes.string,
  colorText: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};

GroomModal.defaultProps = {
  firstText: "",
  secondText: "",
  colorText: "",
  description: "",
  status: "",
};

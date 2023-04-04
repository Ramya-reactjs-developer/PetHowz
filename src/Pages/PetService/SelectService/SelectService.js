import { CardActionArea, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { LabelContext } from "../../PetService/LableData";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomTypography from "../../../Components/Typography/Typography";
import customImages from "../../../Utils/Images";
import "./SelectService.css";

const SelectService = ({ option, disabled }) => {
  const [checked, setChecked] = useState(false);
  const [agreement, setAgreement] = useState(false);

  // const handleCheck = () => {
  //   setChecked(!checked);
  // };
  const OnHandleChange = () => {
    // alert("text");
    setChecked(!checked);
  };

  const onClick = (event) => {
    // const checkValue = event.target.value;
    setAgreement(event.target.value);
    // OnHandleChange(checkValue);
    // console.log(checkValue, "checkValue");
  };
  const value = useContext(LabelContext);

  // const btnDisabled;
  return (
    <Grid container md={12} lg={12} xs={12} sm={12}>
      <Grid className="selectService" m={1}>
        <CardActionArea onClick={OnHandleChange}  className="selectServiceImg">
          <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            name="Value"
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          />
          <img src={customImages.Service} alt="" />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid>
      </Grid>
      <Grid className="selectService" m={1}>
        <CardActionArea onClick={OnHandleChange} className="selectServiceImg">
          <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            name="agreements"
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          />
          <img src={customImages.Service} alt="" />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid>
      </Grid>
      {/* <Grid className="selectService" m={1}>
        <CardActionArea onClick={OnHandleChange} className="selectServiceImg">
          <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          />
          <img src={customImages.Service} alt="" />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid>
      </Grid>
      <Grid className="selectService" m={1}>
        <CardActionArea onClick={OnHandleChange} className="selectServiceImg">
          <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          />
          <img src={customImages.Service} alt="" />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid>
      </Grid> */}
      <Grid className="btn_align_edit">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 15 }}
        >
          <Button
            // disabled={!btnDisabled}
            onClick={() => value.nextPage()}
            // style={{ margin: 25 }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default SelectService;

import { CardActionArea, Checkbox, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { LabelContext } from "../../PetService/LableData";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomTypography from "../../../Components/Typography/Typography";
import customImages from "../../../Utils/Images";
import "./SelectService.css";

const SelectService = ({ option, disabled }) => {
  // const [checked, setChecked] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    nr1: false,
    nr2: false,
  });
  const toggleCheck = (inputName) => {
    console.log(inputName, "inputName");
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

 

  const value = useContext(LabelContext);
  const sender = value.labelInfo?.sender;

  const btnDisabled =
    sender.nr1?.length > 0 &&
    sender.nr2?.length > 0;
console.log(btnDisabled,"btnDisabled");
 
  return (
    <Grid container md={12} lg={12} xs={12} sm={12}>
      <Grid className="selectService" m={1}>
        <CardActionArea className="selectServiceImg">
        
          <input
            type="checkbox"
            name="nr1"
            onChange={() => toggleCheck("nr1")}
            checked={checked["nr1"]}
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
        <CardActionArea  className="selectServiceImg">
          {/* <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            name="agreements"
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          /> */}
          <input
            type="checkbox"
            name="nr2"
            onChange={() => toggleCheck("nr2")}
            checked={checked["nr2"]}
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
            disabled={!btnDisabled}
            onClick={() => value.nextPage()}
            style={{ margin: 25 }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default SelectService;

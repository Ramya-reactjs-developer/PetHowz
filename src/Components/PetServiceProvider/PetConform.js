import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../../Pages/PetService/LableData";
// import TextField from "@material-ui/core/TextField";
import CustomTextField from "../TextField/TextField";
import CustomButton from "../Button/Button";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
// import "./style.css";
import { upper } from "../../Pages/Home/petHost/common/normalijation";

const PetConfirmation = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setshippingCoast] = useState(0);

  useEffect(() => {
    const weight = value.labelInfo.weight;
    const shippingOption = value.labelInfo.shippingOption;

    const shippingRate = 0.4,
      shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    setshippingCoast(shippingTotal);
  }, []);
  console.log(shippingCoast, "shippingCoast");
  console.log(value, "value");
  return (
    <>
      <h6> Sender Details</h6>
      <div className="child">
        <CustomTextField
          label="label"
          style={{ margin: 8, width: "93%" }}
          value={upper(value.labelInfo.sender.name)}
          //   onChange={onChange}
          placeholder="placeholder"
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          label="Street Address"
          fullWidth
          margin="normal"
          style={{ margin: 8, width: "93%" }}
          value={upper(value.labelInfo.sender.street)}
          //   onChange={onChange}
          placeholder="placeholder"
          InputProps={{
            readOnly: true,
          }}
        />

        <CustomTextField
          label="City"
          required
          style={{ margin: 1, width: "93%" }}
          value={upper(value.labelInfo.sender.city)}
          //   onChange={onChange}
          placeholder="placeholder"
          InputProps={{
            readOnly: true,
          }}
        />

        <CustomTextField
          label="State"
          required
          style={{ margin: 1, width: "31%" }}
          value={upper(value.labelInfo.sender.state)}
          //   onChange={onChange}
          placeholder="placeholder"
          InputProps={{
            readOnly: true,
          }}
        />

        <CustomTextField
          label="ZipCode"
          required
          style={{ margin: 1, width: "31%" }}
          value={upper(value.labelInfo.sender.zipCode)}
          //   onChange={onChange}
          placeholder="placeholder"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <h6> Recevier Details</h6>
      <div className="child">
        <CustomTextField
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={upper(value.labelInfo.recevier.name)}
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          style={{ margin: 8, width: "93%" }}
          label="Street Address"
          fullWidth
          margin="normal"
          value={upper(value.labelInfo.recevier.street)}
          InputProps={{
            readOnly: true,
          }}
        />

        <CustomTextField
          required
          style={{ width: "31%", margin: 1 }}
          label="City"
          value={upper(value.labelInfo.recevier.city)}
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          required
          style={{ width: "31%", margin: 1 }}
          label="State"
          value={upper(value.labelInfo.recevier.state)}
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          required
          style={{ width: "31%", margin: 1 }}
          label="ZipCode"
          value={value.labelInfo.recevier.zipCode}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <h6> weight</h6>
      <div className="child">
        <CustomTextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">lbs:</InputAdornment>
            ),
            readOnly: true,
          }}
          value={value.labelInfo.weight}
        />
      </div>
      <h6> Slected Shipping option</h6>
      <div className="child">
        <CustomTextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={value.labelInfo.shippingOption === "1" ? "GROUND" : "PRIOROTY"}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <h6>Total shipping Coast</h6>
      <div className="child">
        <CustomTextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={shippingCoast}
          ed
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            readOnly: true,
          }}
        />
      </div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <CustomButton onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </CustomButton>
        <CustomButton onClick={() => value.nextPage()} style={{ margin: 25 }}>
          Confirm
        </CustomButton>
      </ButtonGroup>
    </>
  );
};
export default PetConfirmation;

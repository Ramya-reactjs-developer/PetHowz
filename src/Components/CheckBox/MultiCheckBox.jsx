/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import {
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
  FormLabel,
  Grid,
} from "@mui/material";
import CustomTypography from "../Typography/Typography";
import "./CheckBox.css";

/**
 *
 * @param {*} props --required props
 * @returns {React.ReactElement} returns the checkBox Component
 */

function MultiCheckboxLabels(props) {
  const { onChange, labelText, value, data, labelPlacement } = props;

  const handleChange = (event) => {
    const { value: checkedValue, name: checkedName } = event.target;
    const updatedValue = [...value]; // make a copy of the current checked values
    const id = parseInt(checkedValue, 10);
    if (event.target.checked) {
      updatedValue.push(id); // add the new checked value
    } else {
      const index = updatedValue.indexOf(id);
      updatedValue.splice(index, 1); // remove the unchecked value
    }
    onChange(updatedValue); // update the checked values
  };

  return (
    <Grid className="checkboxStyle">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          <CustomTypography
            text={labelText}
            colorType="text"
            customStyle={{ fontFamily: "Roboto-Regular" }}
          />
        </FormLabel>
        <FormGroup
          labelled="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
          value={value}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          {data?.map((item) => {
            const { id, name } = item;
            return (
              <Grid key={id}>
                <FormControlLabel
                  sx={{ display: "flex" }}
                  control={
                    <Checkbox
                      color="warning"
                      checked={value.includes(id)}
                      name={name}
                      value={id}
                    />
                  }
                  label={name}
                  labelPlacement={labelPlacement}
                />
              </Grid>
            );
          })}
        </FormGroup>
      </FormControl>
    </Grid>
  );
}

export default MultiCheckboxLabels;

MultiCheckboxLabels.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  labelText: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.number),
  labelPlacement: PropTypes.string,
};

MultiCheckboxLabels.defaultProps = {
  onChange: () => null,
  labelText: "",
  value: [],
  labelPlacement: "",
};

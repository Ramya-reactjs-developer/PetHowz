/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormControl, FormGroup, Checkbox, FormLabel, Grid } from '@mui/material';
import CustomTypography from '../Typography/Typography';
import './CheckBox.css';
/**
 *
 * @param {*} props --required props
 * @returns {React.ReactElement} returns the checkBox Component
 */

function CheckboxLabels(props) {
  const { onChange, labelText, value, data, id, label, labelPlacement } = props;
  return (
    <Grid className="checkboxStyle">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          <CustomTypography text={labelText} colorType="primary" customClass="textLabel" />
        </FormLabel>
        <FormGroup
          labelled="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={onChange}
          value={value}
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          {data?.map((item, index) => {
            const key = index;
            return (
              <Grid key={key}>
                <FormControlLabel
                  style={{ display: 'flex' }}
                  id={id && 'customStyle'}
                  control={<Checkbox color="warning" />}
                  label={item.name}
                  value={item.name}
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
export default CheckboxLabels;

CheckboxLabels.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.arrayOf().isRequired,
  labelText: PropTypes.string,
  value: PropTypes.string,
  // defaultValue: PropTypes.string,
  labelPlacement: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};
CheckboxLabels.defaultProps = {
  onChange: () => null,
  labelText: '',
  value: '',
  // defaultValue: "",
  labelPlacement: '',
  id: '',
  label: '',
};

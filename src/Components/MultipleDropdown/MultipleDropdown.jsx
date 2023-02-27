/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, OutlinedInput, MenuItem, FormControl, Select, Chip, Grid } from '@mui/material';
import CustomTypography from '../Typography/Typography';
import './MultipleDropdown.css';
import customIcons from '../../Utils/Icons/Index';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

/**
 *
 * @param {*} props - required props in  MultipleSelectChip
 * @returns {React.ReactElement} - returns the MultipleSelectChip component
 */
function MultipleSelectChip(props) {
  const { label, dropDownList, onSelectValue, onChipClose, requiredField, disabled, labelText } = props;
  const [values, setValues] = React.useState([]);

  /**
   *
   * @param {*} event - onchange event
   */
  const handleChange = (event) => {
    const val = event.target.value;
    onSelectValue(typeof val === 'string' ? val.split(',') : val);
    setValues(event.target.value);
  };
  /**
   *
   * @param {*} e - event
   * @param {*} value - selected value
   */
  const handleDelete = (e, value) => {
    onChipClose(e, value);
    setValues(values.filter((name) => name !== value));
  };
  return (
    <div>
      <Grid className="textGrid">
        <Box>
          <CustomTypography
            type="caption"
            text={labelText}
            colorType="senary"
            customClass="textLabel"
            requiredField={requiredField}
          />
        </Box>
        <FormControl className="formControl" fullWidth disabled={disabled}>
          <Select
            size="large"
            fullWidth
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={values}
            label={label}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected?.map((value) => (
                  <div className="chipHolder">
                    <Chip
                      key={value}
                      label={value}
                      className="chip"
                      clickable
                      deleteIcon={
                        <img
                          src={customIcons.modalClose}
                          alt="close"
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleDelete(e, value)}
                    />
                  </div>
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {dropDownList?.map((name) => (
              <MenuItem key={name?.id} value={name?.value} className="listText">
                {name?.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </div>
  );
}
export default MultipleSelectChip;

MultipleSelectChip.propTypes = {
  label: PropTypes.string,
  dropDownList: PropTypes.shape([]).isRequired,
  onSelectValue: PropTypes.func.isRequired,
  onChipClose: PropTypes.func,
  requiredField: PropTypes.bool,
  disabled: PropTypes.bool,

  labelText: PropTypes.string,
};
MultipleSelectChip.defaultProps = {
  label: '',
  onChipClose: () => {},
  requiredField: false,
  disabled: false,
  labelText: '',
};

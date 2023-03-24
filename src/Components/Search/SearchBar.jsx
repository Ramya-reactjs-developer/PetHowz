// import CustomIcons from "../../Utils/Icons/Index";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import { SearchInputPosition, TextFieldCustomazation } from "./Style";
import CustomSelect from "../Select/Select";
import "./SearchBar.css";
import CustomButton from "../Button/Button";
import CustomTab from "../CustomTab/CustomTab";
import React from "react";
import {
  SearchBarStyle,
  SearchButtonPadding,
  SearchButtonStyle,
} from "../../Pages/Home/HomeStyle";
export default function SearchBar({
  SearchValue,
  handleSearch,
  dropdownData,
  dropdownValue,
  dropdownName,
  handleDropdownChange,
}) {
  const [value, setValue] = React.useState(0);

  const tabList = [
    {
      id: 1,
      tabText: "Pet Services",
      tabColor: "red",
    },
    {
      id: 2,
      tabText: "Pet Boarding Spaces",
      tabColor: "red",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ pt: "40px" }}>
      <Box
        sx={{
          p: "0 0 10px 40px",
        }}
      >
        <CustomTab
          tabList={tabList}
          handleChange={handleChange}
          value={value}
        />
      </Box>
      <Box sx={SearchBarStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={SearchInputPosition}>
            {/* <Box sx={{ pl: "25px" }}>
          <img src={CustomIcons.Search} alt="search" />
        </Box> */}

            <CustomSelect
              disabled={false}
              name={dropdownName}
              handleChange={handleDropdownChange}
              value={dropdownValue}
              data={dropdownData}
              placeholder={"Select City"}
              customClass={"dropdownstyle"}
              customStyle={{
                width: "130px",
                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderRight: "2px solid gray",
                  borderRadius: "0px",
                },
              }}
            />

            <Box>
              {" "}
              <TextField
                variant="standard"
                sx={TextFieldCustomazation}
                type="text"
                name="V"
                value={SearchValue}
                placeholder="Enter Locality"
                onChange={handleSearch}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={SearchButtonPadding}>
          <CustomButton
            btnTitle="Search Now"
            color="primary"
            btnStyles={SearchButtonStyle}
            // onClickHandle={onSearch}
          />
        </Box>
      </Box>
    </Box>
  );
}

SearchBar.propTypes = {
  SearchValue: PropTypes.string.isRequired,
  dropdownName: PropTypes.string.isRequired,
  dropdownValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDropdownChange: PropTypes.func.isRequired,
};

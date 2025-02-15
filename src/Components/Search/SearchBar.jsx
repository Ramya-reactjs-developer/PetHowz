// import CustomIcons from "../../Utils/Icons/Index";
import PropTypes from "prop-types";
import { Box, Card, TextField, Typography } from "@mui/material";
import {
  SearchInputPosition,
  TextFieldCustomazation,
  TextFieldCustomazation2,
} from "./Style";
import "./SearchBar.css";
import CustomButton from "../Button/Button";
import CustomTab from "../CustomTab/CustomTab";
import React from "react";
import {
  SearchBarStyle,
  SearchButtonPadding,
  SearchButtonStyle,
} from "../../Pages/Home/HomeStyle";
import CustomTypography from "../Typography/Typography";
export default function SearchBar({
  tabList,
  tabHandleChange,
  tabValue,
  SearchValue,
  handleSearch,
  dropdownData,
  dropdownValue,
  dropdownName,
  handleDropdownChange,
  handleDropdownClick,
  handleSearchClick,
  AllCITY,
  handleselect,
  droplist,
  localityList,
  AllLOCALITY,
  handleselect2,
  overAllSearch,
  cityHide,
  cityResult,
  localityHide,
  localityResult,
}) {
  return (
    <Box sx={{ pt: "40px" }}>
      <Box
        sx={{
          p: "0 0 10px 40px",
        }}
      >
        <CustomTab
          tabList={tabList}
          handleChange={tabHandleChange}
          value={tabValue}
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
            {/* <CustomSelect
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
            /> */}
            <Box sx={{ position: "sticky" }}>
              <TextField
                autoComplete="off"
                variant="standard"
                sx={TextFieldCustomazation2}
                type="text"
                name={dropdownName}
                value={dropdownValue}
                placeholder="Select City"
                onChange={handleDropdownChange}
                onClick={handleDropdownClick}
                InputProps={{
                  disableUnderline: true,
                }}
              />{" "}
              {cityHide ? (
                <>
                  {droplist ? (
                    <Box
                      sx={{
                        position: "absolute",
                        // overflow: "scroll",
                        zIndex: "1.5",
                        p: "5px 0 0 10px ",
                      }}
                    >
                      {cityResult ? (
                        <Card
                          sx={{
                            mt: "17px",
                            p: "5px 15px 5px 10px",
                            width: "auto",
                            textAlign: "left",
                          }}
                        >
                          <CustomTypography
                            text="Choose City"
                            colorType={"primary"}
                            type="caption"
                          />
                          {AllCITY?.map((item) => {
                            return (
                              <Box
                                sx={{ m: "10px 0" }}
                                key={item?.city}
                                onClick={() => handleselect(item?.city)}
                              >
                                <Typography sx={{ cursor: "pointer" }}>
                                  {item?.city}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Card>
                      ) : (
                        <Card
                          sx={{
                            p: "5px 15px 5px 10px",
                            width: "auto",
                            textAlign: "left",
                          }}
                        >
                          <CustomTypography
                            text="Choose City"
                            colorType={"primary"}
                            type="caption"
                          />
                          <CustomTypography
                            text="City Not Found"
                            type="caption"
                            colorType={"text"}
                          />
                        </Card>
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </Box>
            <Box sx={{ position: "sticky" }}>
              {" "}
              <TextField
                autoComplete="off"
                variant="standard"
                sx={TextFieldCustomazation}
                type="text"
                name="locality"
                value={SearchValue}
                placeholder="Enter Locality"
                onChange={handleSearch}
                onClick={handleSearchClick}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {localityHide ? (
                <>
                  {localityList ? (
                    <Box
                      sx={{
                        position: "absolute",
                        overflow: "scroll",
                        zIndex: "1",
                        p: "5px 0 0 10px ",
                      }}
                    >
                      {localityResult ? (
                        <Card
                          sx={{
                            p: "5px 25px 5px 25px",
                            width: "225px",
                            textAlign: "left",
                          }}
                        >
                          <CustomTypography
                            text="Choose Locality"
                            colorType={"primary"}
                            type="caption"
                          />
                          {AllLOCALITY?.map((item) => {
                            return (
                              <Box
                                sx={{ m: "10px 0" }}
                                key={item?.locality}
                                onClick={() => handleselect2(item?.locality)}
                              >
                                <Typography sx={{ cursor: "pointer" }}>
                                  {item?.locality}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Card>
                      ) : (
                        <Card
                          sx={{
                            p: "5px 25px 5px 25px",
                            width: "225px",
                            textAlign: "left",
                          }}
                        >
                          <CustomTypography
                            text="Choose Locality "
                            colorType={"primary"}
                            type="caption"
                          />
                          <CustomTypography
                            text="Locality Not Found"
                            type="caption"
                            colorType={"text"}
                          />
                        </Card>
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={SearchButtonPadding}>
          <CustomButton
            btnTitle="Search Now"
            color="primary"
            btnStyles={SearchButtonStyle}
            onClickHandle={overAllSearch}
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

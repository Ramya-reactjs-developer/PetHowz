import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PropTypes from "prop-types";
// import "./Tab.css";
/**
 *
 * @param {object} props - require props in CustomTab component
 * @returns {React.ReactElement} - returns the CustomTab component
 */
function CustomTab(props) {
  const { tabList, handleChange, value } = props;
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      {tabList?.map((item, index) => {
        const key = index;
        return (
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: item.tabColor,
                textColor: item.textColor,
                fontSize: item.fontSize,
                textTransform: "none",

                // left: '8px',
                // width: '75px',
                // height: '3px'
              },
            }}
          >
            <Tab
              value={key}
              label={item.tabText}
              className="tabValue"
              sx={{
                "&.MuiTab-root": {
                  "&.Mui-selected": {
                    borderRadius: "23px",
                    background: "#F85A47",
                    color: item.tabColor,
                    textTransform: "none",
                  },
                },
              }}
            />
          </Tabs>
        );
      })}
    </Box>
  );
}
export default CustomTab;
CustomTab.propTypes = {
  tabList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

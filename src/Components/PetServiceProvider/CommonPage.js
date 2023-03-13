import React from "react";
import { Grid } from "@mui/material";
import CustomTab from "../CustomTab/CustomTab";
import ServicePackage from "./ServicePackage";
/**
 *
 * @returns
 */
function AddScreen() {
  const tabList = [
    {
      id: 1,
      tabText: "Pet Walking",
      tabColor: "#F85A47",
    },
    {
      id: 2,
      tabText: "Grooming",
      tabColor: "#F85A47",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item container>
      <Grid className="customTab" item pt={3} md={12} lg={12} xs={12} sm={12}>
        <CustomTab
          tabList={tabList}
          handleChange={handleChange}
          value={value}
          className="tabBar"
        />
        {value === 0 && <ServicePackage />}
        {/* {value === 1 && <ServicePackage />} */}
      </Grid>
    </Grid>
  );
}

export default AddScreen;

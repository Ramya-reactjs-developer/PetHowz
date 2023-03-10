import React, { useContext } from "react";
import { LabelContext } from "../../Pages/PetService/LableData";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import {
  ServicePackageEntries,
//   tabArray,
  DefaultServicePackageValues,
//   GroomingEntries,
} from "../../Pages/PetService/ServicePackageEntries";
// import CustomTab from '../CustomTab/CustomTab';
import "./style.css";

const ServicePackage = (props) => {
  const value = useContext(LabelContext);
  const service = value.labelInfo?.service;
  console.log(value, "valkjndjhfdjiue");

  const btnDisabled =
    service.header_menu?.length > 0 &&
    service.firstText?.length > 0 &&
    service.whats_included?.length > 0 &&
    service.rate?.length > 0;
    
    // const [entries, setEntries] = useState(
    //   ServicePackageEntries,
    //   GroomingEntries
    // );
    // const [tabValue, setTabValue] = useState(0);


    // useEffect(() => {
    //   if (tabValue === 0) {
    //     setEntries(ServicePackageEntries);
    //   }
    //   if (tabValue === 1) {
    //     setEntries(GroomingEntries);
    //   }
    // }, [tabValue]);

    // const handleChange = (event, newValue) => {
    //   setTabValue(newValue);
    // };

  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      {/* <Grid>
        <CustomTab
          tabList={tabArray}
          handleChange={handleChange}
          value={tabValue}
          sx={{
            "&.MuiTab-root": {
              "&.Mui-selected": {
                color: "#F85A47",
              },
            },
          }}
        />
      </Grid> */}
      <Grid>
        <CustomForm
          AllEntries={ServicePackageEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultServicePackageValues}
        />
      </Grid>

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
    </form>
  );
};
export default ServicePackage;

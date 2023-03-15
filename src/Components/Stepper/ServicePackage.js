import React, { useContext } from "react";
import { LabelContext } from "../../Pages/PetService/LableData";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import {
  ServicePackageEntries,
  DefaultServicePackageValues,
} from "../../Pages/PetService/ServicePackageEntries";
import "./style.css";

const ServicePackage = (props) => {
  const value = useContext(LabelContext);
  const service = value.labelInfo?.service;
  console.log(value, "lllove");

  const btnDisabled =
    service.header_menu?.length > 0 &&
    service.firstText?.length > 0 &&
    service.whats_included?.length > 0 &&
    service.rate?.length > 0;
  return (
    <form>
      <h4> Become a Pet Service Provider</h4>

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

// import React, { useContext } from "react";
// import { LabelContext } from "../../Pages/PetService/LableData";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import CustomForm from "../CustomForm/CustomForm";
// import { Grid } from "@mui/material";
// import {
//   ServicePackageEntries,
//   DefaultServicePackageValues,
// } from "../../Pages/PetService/ServicePackageEntries";
// import "./style.css";

// const ServicePackage = (props) => {
//   const value = useContext(LabelContext);
//   const service = value.labelInfo?.service;
//   console.log(value, "lllove");

//   const btnDisabled =
//     service.header_menu?.length > 0 &&
//     service.firstText?.length > 0 &&
//     service.whats_included?.length > 0 &&
//     service.rate?.length > 0;

//   return (
//     <form>
//       <h4> Become a Pet Service Provider</h4>

//       <Grid>
//         <CustomForm
//           AllEntries={ServicePackageEntries}
//           onChangeRadioAction={value.handleOnChange}
//           textFieldChange={value.handleChange}
//           // onReceiveData={onReceiveData}
//           defaultValues={DefaultServicePackageValues}
//         />
//       </Grid>

//       <ButtonGroup
//         variant="contained"
//         color="primary"
//         aria-label="text primary button group"
//         style={{ marginTop: 15 }}
//       >
//         <Button
//           disabled={!btnDisabled}
//           onClick={() => value.nextPage()}
//           style={{ margin: 25 }}
//         >
//           Next
//         </Button>
//       </ButtonGroup>
//     </form>
//   );
// };
// export default ServicePackage;

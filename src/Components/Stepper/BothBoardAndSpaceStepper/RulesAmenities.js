// import React, { useContext } from "react";
// import { Grid } from "@mui/material";
// import CustomForm from "../CustomForm/CustomForm";
// import {
//   petSpaceEntries,
//   DefaultPetSpaceValues,
// } from "../../Pages/JoinPetHost/petHost/petSpaceEntries";
// import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";

// const RecevierAddress = (props) => {
//   const value = useContext(LabelContext);
//   const recevier = value.labelInfo?.recevier;
//   console.log(recevier, "recevier");
//   console.log(value, "kjdhjkhfjhjbf");

//   const btnDisbaled =
//     recevier.firstText?.length > 0 &&
//     recevier.secondText?.length > 0 &&
//     recevier.thirdText?.length > 0 &&
//     recevier.fourthText?.length > 0 &&
//     recevier.fivethText?.length > 0 &&
//     recevier.sixthText?.length > 0 &&
//     recevier.seventhText?.length > 0 &&
//     recevier.eighthText?.length > 0 &&
//     recevier.fileUploader?.length > 0;
//   console.log(btnDisbaled, "btnDisbaled");
//   return (
//     <form>
//       <h4> Enter Recevier Details</h4>
//       <Grid>
//         <CustomForm
//           AllEntries={petSpaceEntries}
//           textFieldChange={value.handleChange}
//           // onReceiveData={onReceiveData}
//           defaultValues={DefaultPetSpaceValues}
//         />
//       </Grid>
//       <ButtonGroup
//         variant="contained"
//         color="primary"
//         aria-label="text primary button group"
//         style={{ marginTop: 15 }}
//       >
//         <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
//           Previous
//         </Button>
//         <Button
//           disabled={!btnDisbaled}
//           onClick={() => value.nextPage()}
//           style={{ margin: 25 }}
//         >
//           Next
//         </Button>
//       </ButtonGroup>
//     </form>
//   );
// };
// export default RecevierAddress;
import React, { useContext } from "react";
import { BothLabelContext } from "../../../Pages/JoinPetHost/BothBoardAndService/BothlabelDataContext";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  petHostEntries,
  DefaultPetHostValues,
} from "../../../Pages/JoinPetHost/BothBoardAndService/RuleAmenitiesEntries";
import CustomForm from "../../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./style.css";

const RulesAmenities = (props) => {
  const value = useContext(BothLabelContext);
  const receiver = value.labelInfo?.receiver;
  console.log(receiver, "vLOGG");
  console.log(value, "VBHRTHHH");

  const btnDisbaled =
    receiver.Status1?.length > 0 &&
    receiver.Status2?.length > 0 &&
    receiver.Status3?.length > 0 &&
    receiver.Status4?.length > 0 &&
    receiver.Status5?.length > 0 &&
    receiver.Status6?.length > 0 &&
    receiver.Status7?.length > 0 &&
    receiver.Status8?.length > 0 &&
    receiver.Status9?.length > 0 &&
    receiver.Status10?.length > 0 &&
    receiver.Status11?.length > 0 &&
    receiver.Status12?.length > 0 &&
    receiver.Status13?.length > 0 &&
    receiver.Status14?.length > 0 &&
    receiver.Status15?.length > 0 &&
    receiver.Status16?.length > 0 &&
    receiver.Status17?.length > 0 &&
    receiver.Status18?.length > 0 &&
    receiver.firstText?.length > 0 &&
    receiver.Status19?.length > 0;
  console.log(btnDisbaled, "btnDisbaled");
  // sender.name.length > 0 &&
  // sender.city.length > 0 &&
  // sender.zipCode.length > 0 &&
  // sender.state.length > 0;
  return (
    <form>
      <h4> Become a Pet pet Host</h4>
      <h5> Rules</h5>

      <Grid>
        <CustomForm
          AllEntries={petHostEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetHostValues}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default RulesAmenities;

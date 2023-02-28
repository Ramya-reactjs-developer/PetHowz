// import React from "react";
// import PetBoardImageCards from "../../../Components/PetBoardCard/PetBoardImageCards";
// import CustomImages from "../../../Utils/Images/index";
// import { Box, Grid } from "@mui/material";
// import CustomTypography from "../../../Components/Typography/Typography";
// import CustomTextField from "../../../Components/TextField/TextField";
// import "./petHost.css";
// export const PetHost = () => {
//   // const CardData = Data;
//   const imagePath = [
//     {
//       imagePath: CustomImages.Dog1,
//     },
//     {
//       imagePath: CustomImages.Dog2,
//     },
//     {
//       imagePath: CustomImages.Dog1,
//     },
//     {
//       imagePath: CustomImages.Dog2,
//     },
//     ];
//     const onChange="hello"
//   return (
//     <Grid container md={12} sm={12} lg={12} xs={12}>
//       <Grid container md={12} sm={12} lg={12} xs={12}>
//         <Grid item md={6} sm={6} lg={6} xs={12}>
//           {/* {CardData?.map((item) => {
//             return ( */}
//           <Grid item md={12} sm={12} lg={12} xs={12} className="PetHostdImage">
//             <PetBoardImageCards
//               imagePath={CustomImages.Dog2}
//               // imagePath={imagePath}
//               CustomImage="pet-Image"
//             />
//           </Grid>

//           {/* );
//           })} */}
//         </Grid>
//         <Grid item md={6} sm={6} lg={6} xs={12} className="petHost-Headerf">
//           <Grid item md={12} sm={12} lg={12} xs={12}>
//             <Grid
//               item
//               md={12}
//               sm={12}
//               lg={12}
//               xs={12}
//               className="petHost-headingf"
//             >
//               <CustomTypography
//                 text="Become a Pet Host"
//                 type="header"
//                 customClass="pet-Host"
//               />
//             </Grid>
//             <Grid
//               item
//               md={12}
//               sm={12}
//               lg={12}
//               xs={12}
//               className="petHostChoose"
//             >
//               <CustomTypography
//                 text="Fill up details about the pet boarding"
//                 type="header"
//                 customClass="petHostService"
//               />
//             </Grid>

//                       <Grid item md={12} sm={12} lg={12} xs={12}>
//                           <Grid item md={6} sm={6} lg={6} xs={12}> 
//                               <CustomTextField
//                                   label="label"
//                                   value="label"
//                                   onChange={onChange}
//                                   placeholder="placeholder"
//                               />



                              
//                           </Grid>


//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Select campaign settings',
    // description: `For each ad campaign that you create, you can control how much
    //           you're willing to spend on clicks and conversions, which networks
    //           and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    // description:
    //   'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    // description: `Try out different ad text to see what brings in the most customers,
    //           and learn how to enhance your ads using features like ad extensions.
    //           If you run into any problems with your ads, find out how to tell if
    //           they're running and how to resolve approval issues.`,
  },
];

export default function PetHost() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  {/* <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div> 
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

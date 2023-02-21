import React from "react";
import { Grid } from "@mui/material";
import CustomTab from "../../components/tab/tab";
import ClinicMaster from "./clinicMaster";
import SpecialityMaster from "./specialityMaster";
import DiseasesMater from "./diseasesMater";
import GeneralQuestions from "./generalQuestions";
import CustomAppBar from "../../components/appBar/appBar";
function Reviews() {
  const tabs = [
    { label: "Tab 1", content: <ClinicMaster /> },
    { label: "Tab 2", content: <SpecialityMaster /> },
    { label: "Tab 3", content: <DiseasesMater /> },
    { label: "Tab 4", content: <GeneralQuestions /> },
  ];

  return (
    <>
    <CustomAppBar/>
    <Grid item container>
      <Grid item  md={12} lg={12} xs={12} sm={12}>
        <CustomTab tabs={tabs} />
      </Grid>
    </Grid>
    </>
  );
}

export default Reviews;

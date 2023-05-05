import { Box, Grid } from "@mui/material";
import React from "react";

import CustomTypography from "../../../Components/Typography/Typography";
import { MyPetsCards } from "../../../Components/MyPetsCards/MyPetsCards";
import CustomButton from "../../../Components/Button/Button";
import AddAnotherPet from "./AddAnotherPet";

export const MyPetsCustomerDB = () => {
  const [open, setOpen] = React.useState(false);
  const ListData = [
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      PetName: "Alan",
      PetType: "Dog",
      DateofBirth: "01-03-2001",
      Interests: "Playing, Walking, Running",
      WalkingRoutine: "30 mins daily at 5PM",
      Breed: "Golden Retriever",
      Weight: "5.2 Kgs",
      FoodPreference: "Bones, Pedigree, Lamb.",
    },
  ];
  const Addbtn = {
    color: "white",
    width: "50px",
    height: "60px",
    borderRadius: "50%",
    fontSize: "35px",
  };
  const onAddAnother = () => {
    setOpen(true);
  };
  const onEdit = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12}>
        <CustomTypography text="My Pets" type="subHeading" colorType="text" />
      </Grid>
      <Grid item xs={12}>
        <MyPetsCards ListData={ListData} onEdit={onEdit} />{" "}
      </Grid>
      <Grid
        item
        xs={12}
        pt={"10px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        textAlign={"center"}
      >
        <Box>
          <CustomButton
            btnTitle="+"
            color="primary"
            onClickHandle={onAddAnother}
            btnStyles={Addbtn}
          />
          <CustomTypography
            text="Add Another"
            type="subHeading"
            colorType="primary"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <AddAnotherPet open={open} onClose={onClose} />
      </Grid>
    </Grid>
  );
};

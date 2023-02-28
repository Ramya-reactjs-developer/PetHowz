import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home/Index";
import ClinicMaster from "../Pages/Masters/ClinicMaster";
// import { Box } from "@mui/material";
import DrawerAppBar from "../Components/AppBar/AppBar";
import { Grooming } from "../Pages/Grooming/Grooming";
import { PetBoardingSpace } from "../Pages/Home/petBoardingSpace";
import PetHost from "../Pages/Home/petHost/PetHost"
import PetSpace from "../Pages/Home/petHost/petSpace"
import PetDetails from "../Pages/PetDetails/PetDetails";
import Footer from "../Components/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      {" "}
      {/* <Box
        sx={{ display: "flex", justifyContent: "space-between", pb: "30px" }}
      >
        <Link to="/"> Home </Link>
        <Link to="Cmasters"> Clinic </Link>
      </Box> */}
      <DrawerAppBar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="Cmasters" index element={<ClinicMaster />} />
        <Route path="grooming" index element={<Grooming />} />
        <Route path="PetBoardingSpace" index element={<PetBoardingSpace />} />
        <Route path="PetHost" index element={<PetHost />} />
        <Route path="PetSpace" index element={<PetSpace />} />
        <Route path="MyPetDetails" index element={<PetDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

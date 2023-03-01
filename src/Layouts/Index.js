import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home/Index";
import DrawerAppBar from "../Components/AppBar/AppBar";
import { Grooming } from "../Pages/Grooming/Grooming";
import { PetBoardingSpace } from "../Pages/Home/petBoardingSpace";
import PetDetails from "../Pages/PetDetails/PetDetails";
import Footer from "../Components/Footer/Footer";
import { BasicDetails } from "../Pages/New/Index";

export const Layout = () => {
  return (
    <div>
      <DrawerAppBar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="grooming" index element={<Grooming />} />
        <Route path="PetBoardingSpace" index element={<PetBoardingSpace />} />
        <Route path="MyPetDetails" index element={<PetDetails />} />
        <Route path="BasicDetails" index element={<BasicDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

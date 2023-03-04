import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home/Index";
import DrawerAppBar from "../Components/AppBar/AppBar";
import { Grooming } from "../Pages/Grooming/Grooming";
import { PetBoardingSpace } from "../Pages/Home/petBoardingSpace";
import GroomingService from "../Pages/GroomingService/GroomingService";
import PetHost from "../Pages/Home/petHost/PetHost";
import PetSpace from "../Pages/Home/petHost/petSpace";
import PetDetails from "../Pages/PetDetails/PetDetails";
import Footer from "../Components/Footer/Footer";
import { BasicDetails } from "../Pages/New/Index";
import { MyDashBoard } from "../Pages/HostDashBoard/Index";
import { MyProfileDashBoard } from "../Pages/HostDashBoard/MyProfileDashBoard";
import { MyPetsDashBoard } from "../Pages/HostDashBoard/MyPetsDashBoard";
import { MyBookingsDashBoard } from "../Pages/HostDashBoard/MyBookingsDashBoard";
import { MyBoardingSpaceDashBoard } from "../Pages/HostDashBoard/MyBoardingSpaceDashBoard";
import { MyServicesDashBoard } from "../Pages/HostDashBoard/MyServicesDashBoard";
import { BookingRequestsDashBoard } from "../Pages/HostDashBoard/BookingRequestsDashBoard";

export const Layout = () => {
  return (
    <div>
      <DrawerAppBar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="grooming" index element={<Grooming />} />
        <Route path="groomingService" index element={<GroomingService />} />
        <Route path="PetBoardingSpace" index element={<PetBoardingSpace />} />
        <Route path="PetHost" index element={<PetHost />} />
        <Route path="PetSpace" index element={<PetSpace />} />
        <Route path="MyPetDetails" index element={<PetDetails />} />
        <Route path="BasicDetails" index element={<BasicDetails />} />
        <Route path="MyDashBoard" index element={<MyDashBoard />} />
        <Route
          path="MyProfileDashBoard"
          index
          element={<MyProfileDashBoard />}
        />
        <Route path="MyPetsDashBoard" index element={<MyPetsDashBoard />} />
        <Route
          path="MyBookingsDashBoard"
          index
          element={<MyBookingsDashBoard />}
        />
        <Route
          path="MyBoardingSpaceDashBoard"
          index
          element={<MyBoardingSpaceDashBoard />}
        />
        <Route
          path="MyServicesDashBoard"
          index
          element={<MyServicesDashBoard />}
        />
        <Route
          path="MyBookingsDashBoard"
          index
          element={<MyBookingsDashBoard />}
        />
        <Route
          path="BookingRequestsDashBoard"
          index
          element={<BookingRequestsDashBoard />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

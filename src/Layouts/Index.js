import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home/Index";
import DrawerAppBar from "../Components/AppBar/AppBar";
import { Grooming } from "../Pages/Grooming/Grooming";
import { PetBoardingSpace } from "../Pages/JoinPetHost/petBoardingSpace";
import PetHost from "../Pages/JoinPetHost/petHost/PetHost";
import PetSpace from "../Pages/JoinPetHost/petHost/petSpace";
// import { PetBoardingSpace } from "../Pages/Home/petBoardingSpace";
import GroomingService from "../Pages/GroomingService/GroomingService";
// import PetHost from "../Pages/Home/petHost/PetHost";
// import PetSpace from "../Pages/Home/petHost/petSpace";
// import PetDetails from "../Pages/PetDetails/PetDetails";
import Footer from "../Components/Footer/Footer";
import { BasicDetails } from "../Pages/New/Index";

import { MyProfileHostDB } from "../Pages/HostDashBoard/MyProfileHostDB";
import { MyPetsHostDB } from "../Pages/HostDashBoard/MyPetsHostDB";
import { MyBookingsHostDB } from "../Pages/HostDashBoard/MyBookingsHostDB";
import { MyBoardingSpaceHostDB } from "../Pages/HostDashBoard/MyBoardingSpaceHostDB";
import { MyServicesHostDB } from "../Pages/HostDashBoard/MyServicesHostDB";
import { BookingRequestsHostDB } from "../Pages/HostDashBoard/BookingRequestsHostDb";
import { HostDashBoard } from "../Pages/HostDashBoard/Index";
import { CustomerDashBoard } from "../Pages/CustomerDashBoard/Index";
import { MyProfileCustomerDB } from "../Pages/CustomerDashBoard/MyProfileCustomerDB";
import { MyPetsCustomerDB } from "../Pages/CustomerDashBoard/MyPetsCustomerDB";
import { MyBookingsCustomerDB } from "../Pages/CustomerDashBoard/MyBookingsCustomerDb";
import PetService from "../Pages/PetService/PetService";

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
        {/* <Route path="MyPetDetails" index element={<PetDetails />} /> */}
        <Route path="BasicDetails" index element={<BasicDetails />} />
        <Route path="petService" index element={<PetService />} />

        {/* Host DashBoard        */}
        <Route path="HostDashBoard" index element={<HostDashBoard />} />
        <Route path="MyProfileHostDB" index element={<MyProfileHostDB />} />
        <Route path="MyPetsHostDB" index element={<MyPetsHostDB />} />
        <Route path="MyBookingsHostDB" index element={<MyBookingsHostDB />} />
        <Route
          path="MyBoardingSpaceHostDB"
          index
          element={<MyBoardingSpaceHostDB />}
        />
        <Route path="MyServicesHostDB" index element={<MyServicesHostDB />} />
        <Route path="MyBookingsHostDB" index element={<MyBookingsHostDB />} />
        <Route
          path="BookingRequestsHostDB"
          index
          element={<BookingRequestsHostDB />}
        />

        {/* Customer DashBoard        */}
        <Route path="CustomerDashBoard" index element={<CustomerDashBoard />} />
        <Route
          path="MyProfileCustomerDB"
          index
          element={<MyProfileCustomerDB />}
        />
        <Route path="MyPetsCustomerDB" index element={<MyPetsCustomerDB />} />
        <Route
          path="MyBookingsCustomerDB"
          index
          element={<MyBookingsCustomerDB />}
        />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home/Index";
// import DrawerAppBar from "../Components/";
import { Grooming } from "../Pages/Grooming/Grooming";
import { BecomePetHostService } from "../Pages/JoinPetHost/BecomePetHostService";
import PetHomeBoarding from "../Pages/JoinPetHost/petHost/PetHomeBoarding";
import GroomingService from "../Pages/GroomingService/GroomingService";
import Footer from "../Components/Footer/Footer";
import { BasicDetails } from "../Pages/New/Index";
import PetService from "../Pages/PetService/PetService";
import PetCare from "../Pages/PetCare/PetCare";
import { HostDashBoard } from "../Pages/HostDashBoard/Index";
import { MyProfileHostDB } from "../Pages/HostDashBoard/MyProfile/MyProfileHostDB";
import { MyBookingsHostDB } from "../Pages/HostDashBoard/MyBookings/MyBookingsHostDB";
import { MyServicesHostDB } from "../Pages/HostDashBoard/MyServices/MyServicesHostDB";
import { BookingRequestsHostDB } from "../Pages/HostDashBoard/MyBookingRequest/BookingRequestsHostDb";
import { MyPetsCustomerDB } from "../Pages/CustomerDashBoard/MyPets/MyPetsCustomerDB";
import { MyProfileCustomerDB } from "../Pages/CustomerDashBoard/MyProfile/MyProfileCustomerDB";
import { MyBookingsCustomerDB } from "../Pages/CustomerDashBoard/MyBookings/MyBookingsCustomerDb";
import { CustomerDashBoard } from "../Pages/CustomerDashBoard/Index";
import AddYourPetLogin from "../Pages/AddYourPet/AddYourPet";
// import { MyProfileCustomerDB } from "../Pages/CustomerDashBoard/MyProfileCustomerDB";
// import { MyPetsCustomerDB } from "../Pages/CustomerDashBoard/MyPetsCustomerDB";
// import { MyBookingsCustomerDB } from "../Pages/CustomerDashBoard/MyBookingsCustomerDb";
// import Login from "../Pages/Login/Login";
// import PetService from "../Pages/PetService/PetService";
import ProtectedRoute from "../Pages/CustomerDashBoard/Layout/Layout";
import { MyBoardingSpaceHostDB } from "../Pages/HostDashBoard/MyBoardingSpace/MyBoardingSpaceHostDB";
import Terms from "../Pages/Term/Term";
import Login from "../Pages/Login/Login";
import NavBar from "../Components/AppBar/Appbar";
import { Grid } from "@mui/material";
import { AddAddress } from "../Pages/CustomerRegistration/AddAddress";
import { RegisterToPethowz } from "../Pages/CustomerRegistration/RegisterToPetHowz";
import { RequestBooking } from "../Pages/RequestBooking/RequestBooking";
import { AllServices } from "../Pages/AllServices/Index";
import MyProfileEdit from "../Pages/HostDashBoard/MyProfile/MyProfileEdit";

export const Layout = () => {
  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid container md={12} lg={12} sm={12} xs={12} className="nav_fix">
        <NavBar />
      </Grid>
      <Grid container md={12} lg={12} sm={12} xs={12}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="grooming" element={<Grooming />} />
          <Route path="groomingService" element={<GroomingService />} />
          <Route
            path="BecomePetHostService"
            element={<BecomePetHostService />}
          />
          <Route path="PetCare" element={<PetCare />} />
          <Route path="PetHomeBoarding" element={<PetHomeBoarding />} />
          <Route path="BasicDetails" element={<BasicDetails />} />
          <Route path="petService" element={<PetService />} />
          {/* Host DashBoard        */}
          <Route path="HostDashBoard" element={<HostDashBoard />} />
          <Route path="MyProfileHostDB" element={<MyProfileHostDB />} />
          <Route path="MyBookingsHostDB" element={<MyBookingsHostDB />} />
          <Route
            path="MyBoardingSpaceHostDB"
            element={<MyBoardingSpaceHostDB />}
          />
          <Route path="MyServicesHostDB" element={<MyServicesHostDB />} />
          <Route
            path="BookingRequestsHostDB"
            element={<BookingRequestsHostDB />}
          />
          <Route path="CustomerDashBoard" element={<CustomerDashBoard />} />
          <Route path="MyProfileCustomerDB" element={<MyProfileCustomerDB />} />
          <Route path="MyPetsCustomerDB" element={<MyPetsCustomerDB />} />
          <Route path="terms" element={<Terms />} />
          <Route
            path="MyBookingsCustomerDB"
            element={<MyBookingsCustomerDB />}
          />
          <Route path="MyProfileEdit" index element={<MyProfileEdit />} />
          <Route path="AddYourPetLogin" index element={<AddYourPetLogin />} />
          <Route path="DashBoardLayout" index element={<ProtectedRoute />} />
          <Route path="ProtectedRoute" index element={<ProtectedRoute />} />
          {/* Register PetHowz */}
          <Route
            path="RegisterToPethowz"
            index
            element={<RegisterToPethowz />}
          />
          <Route path="AddAddress" index element={<AddAddress />} />
          {/* Request Booking */}
          <Route path="RequestBooking" index element={<RequestBooking />} />
          {/* Home=>  All Service */}
          <Route path="AllServices" index element={<AllServices />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

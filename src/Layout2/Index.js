import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../../Pages/Home/Index";
import DrawerAppBar from "../../../Components/AppBar/AppBar";
import { Grooming } from "../../../Pages/Grooming/Grooming";
import { BecomePetHostService } from "../../../Pages/JoinPetHost/BecomePetHostService";
import PetHomeBoarding from "../../../Pages/JoinPetHost/petHost/PetHomeBoarding";
import BothBoardAndService from "../Pages/JoinPetHost/BothBoardAndService/BothBoardAndService"
import GroomingService from "../../../Pages/GroomingService/GroomingService";
import Footer from "../../../Components/Footer/Footer";
import { BasicDetails } from "../../../Pages/New/Index";
import PetService from "../../../Pages/PetService/PetService";
import PetCare from "../../../Pages/PetCare/PetCare";
import { HostDashBoard } from "../../../Pages/HostDashBoard/Index";
import { MyProfileHostDB } from "../../../Pages/HostDashBoard/MyProfile/MyProfileHostDB";
import { MyPetsHostDB } from "../../../Pages/HostDashBoard/MyPets/MyPetsHostDB";
import { MyBookingsHostDB } from "../../../Pages/HostDashBoard/MyBookings/MyBookingsHostDB";
import { MyServicesHostDB } from "../../../Pages/HostDashBoard/MyServices/MyServicesHostDB";
import { BookingRequestsHostDB } from "../../../Pages/HostDashBoard/MyBookingRequest/BookingRequestsHostDb";
import { MyPetsCustomerDB } from "../../../Pages/CustomerDashBoard/MyPets/MyPetsCustomerDB";
import { MyProfileCustomerDB } from "../../../Pages/CustomerDashBoard/MyProfile/MyProfileCustomerDB";
import { MyBookingsCustomerDB } from "../../../Pages/CustomerDashBoard/MyBookings/MyBookingsCustomerDb";
import { CustomerDashBoard } from "../../../Pages/CustomerDashBoard/Index";
import AddYourPetLogin from "../../../Pages/AddYourPet/AddYourPet";
// import { MyProfileCustomerDB } from "../Pages/CustomerDashBoard/MyProfileCustomerDB";
// import { MyPetsCustomerDB } from "../Pages/CustomerDashBoard/MyPetsCustomerDB";
// import { MyBookingsCustomerDB } from "../Pages/CustomerDashBoard/MyBookingsCustomerDb";
// import Login from "../Pages/Login/Login";
// import PetService from "../Pages/PetService/PetService";
import ProtectedRoute from "../../../Pages/CustomerDashBoard/Layout/Layout";
import { MyBoardingSpaceHostDB } from "../../../Pages/HostDashBoard/MyBoardingSpace/MyBoardingSpaceHostDB";

export const DashBoardLayout = () => {
  return (
    <div>
      {/* <DrawerAppBar /> */}
      <Grid container md={12} lg={12} sm={12} xs={12}>
        <Grid item md={2} lg={2} sm={2}>
          <ProtectedRoute />
        </Grid>
        <Grid item md={10} lg={10} sm={10}>
          <Routes>
            <Route path="/CustomerDashBoard" index element={<CustomerDashBoard />} />
            {/* <Route path="login" index element={<Login />} /> */}
            <Route path="grooming" index element={<Grooming />} />
            <Route path="groomingService" index element={<GroomingService />} />
            <Route
              path="BecomePetHostService"
              index
              element={<BecomePetHostService />}
            />
            <Route path="PetCare" index element={<PetCare />} />
            <Route path="PetHomeBoarding" index element={<PetHomeBoarding />} />
            <Route path="BothBoardAndService" index element={<BothBoardAndService />} />

            
            {/* <Route path="MyPetDetails" index element={<PetDetails />} /> */}
            <Route path="BasicDetails" index element={<BasicDetails />} />
            <Route path="petService" index element={<PetService />} />
            {/* Host DashBoard        */}
            <Route path="HostDashBoard" index element={<HostDashBoard />} />
            <Route path="MyProfileHostDB" element={<MyProfileHostDB />} />
            <Route path="MyPetsHostDB" index element={<MyPetsHostDB />} />
            <Route path="MyBookingsHostDB" element={<MyBookingsHostDB />} />
            <Route
              path="MyBoardingSpaceHostDB"
              index
              element={<MyBoardingSpaceHostDB />}
            />
            <Route
              path="MyServicesHostDB"
              index
              element={<MyServicesHostDB />}
            />
            <Route
              path="BookingRequestsHostDB"
              index
              element={<BookingRequestsHostDB />}
            />
            {/* Customer DashBoard        */}
            <Route
              path="CustomerDashBoard"
              index
              element={<CustomerDashBoard />}
            />
            <Route
              path="MyProfileCustomerDB"
              index
              element={<MyProfileCustomerDB />}
            />
            <Route path="MyPetsCustomerDB" element={<MyPetsCustomerDB />} />
            <Route path="AddYourPetLogin" index element={<AddYourPetLogin />} />
            {/* <Route path="ProtectedRoute" index element={} /> */}
            {/* <Route path="ProtectedRoute" index element={<ProtectedRoute />} />
        <Route path="ProtectedRoute" index element={<ProtectedRoute />} /> */}
            <Route
              path="MyBookingsCustomerDB"
              element={<MyBookingsCustomerDB />}
            />
          </Routes>
        </Grid>
      </Grid>

      {/* <Footer /> */}
    </div>
  );
};

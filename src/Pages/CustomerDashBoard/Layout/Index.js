import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "../../../Pages/CustomerDashBoard/Layout/Layout";
import { CustomerDashBoard } from "../Index";
import { MyProfileCustomerDB } from "../MyProfile/MyProfileCustomerDB";
import { MyBookingsCustomerDB } from "../MyBookings/MyBookingsCustomerDb";

export const DashBoardLayout = () => {
  return (
    <div>
      {/* <DrawerAppBar /> */}
      <Grid container md={12} lg={12} sm={12} xs={12}>
        {/* <Grid item md={2} lg={2} sm={2}>
          <ProtectedRoute />
        </Grid>
        <Grid item md={10} lg={10} sm={10}> */}
        <Routes>
          <Route path="/CustomerDashBoard" element={<CustomerDashBoard />} />
          {/* <Route path="login" index element={<Login />} /> */}
          {/* <Route path="grooming" index element={<Grooming />} /> */}
          {/* <Route path="groomingService" index element={<GroomingService />} /> */}
          {/* <Route
              path="BecomePetHostService"
              index
              element={<BecomePetHostService />}
            />
            <Route path="PetCare" index element={<PetCare />} />
            PetCare
            <Route path="PetHomeBoarding" index element={<PetHomeBoarding />} />
            {/* <Route path="MyPetDetails" index element={<PetDetails />} /> */}
          {/* <Route path="BasicDetails" index element={<BasicDetails />} />
            <Route path="petService" index element={<PetService />} /> */}
          {/* Host DashBoard        */}
          {/* <Route path="HostDashBoard" index element={<HostDashBoard />} />
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
            /> */}
          {/* Customer DashBoard        */}

          <Route
            path="/Pet-howz/MyProfileCustomerDB"
            element={<MyProfileCustomerDB />}
          />

          {/* <Route path="AddYourPetLogin" index element={<AddYourPetLogin />} /> */}
          <Route path="Pet-howz" index element={<ProtectedRoute />} />
          {/* <Route path="ProtectedRoute" index element={<ProtectedRoute />} />
        <Route path="ProtectedRoute" index element={<ProtectedRoute />} /> */}
          <Route
            path="MyBookingsCustomerDB"
            element={<MyBookingsCustomerDB />}
          />
        </Routes>
      </Grid>
      {/* </Grid> */}

      {/* <Footer /> */}
    </div>
  );
};

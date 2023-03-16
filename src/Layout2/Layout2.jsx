import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { CustomerDashBoard } from "../Pages/CustomerDashBoard/Index";
import { MyProfileCustomerDB } from "../Pages/CustomerDashBoard/MyProfile/MyProfileCustomerDB";
import { MyPetsCustomerDB } from "../Pages/CustomerDashBoard/MyPets/MyPetsCustomerDB";
import { MyBookingsCustomerDB } from "../Pages/CustomerDashBoard/MyBookings/MyBookingsCustomerDb";

export const Layout2 = () => {
  return (
    <div>
      {/* <Link to={""}>
        <h1>CustomerDashBoard</h1>
      </Link> */}
      <Link to={"MyProfileCustomerDB"}>
        <h1>MyProfileCustomerDB</h1>
      </Link>
      <Link to={"MyBookingsCustomerDB"}>
        <h1>MyBookingsCustomerDB</h1>
      </Link>
      {/* <ProtectedRoute /> */}
      <Routes>
        {/* Customer DashBoard        */}
        <Route path="/" index element={<CustomerDashBoard />} />
        <Route
          path="MyProfileCustomerDB"
          index
          element={<MyProfileCustomerDB />}
        />
        <Route path="MyPetsCustomerDB" element={<MyPetsCustomerDB />} />
        <Route path="MyBookingsCustomerDB" element={<MyBookingsCustomerDB />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

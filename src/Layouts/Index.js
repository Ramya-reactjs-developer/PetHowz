import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home/Index";
import ClinicMaster from "../Pages/Masters/ClinicMaster";
import { Box } from "@mui/material";
import DrawerAppBar from "../Components/AppBar/AppBar";

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
      </Routes>
    </div>
  );
};

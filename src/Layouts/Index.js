import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../Components/AppBar/AppBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
export const Layout = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ paddingTop: "30px" }}>
        <Footer />
      </footer>
    </div>
  );
};

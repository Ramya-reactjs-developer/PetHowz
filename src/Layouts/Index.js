import { Outlet } from "react-router";
import AppBar from "../Components/AppBar/AppBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
export const Layout = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main style={{ paddingTop: "80px" }}>
        <Outlet />
      </main>
      <footer style={{ position: "sticky" }}>
        <Footer />
      </footer>
    </div>
  );
};

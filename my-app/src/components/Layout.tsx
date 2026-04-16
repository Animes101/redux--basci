import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
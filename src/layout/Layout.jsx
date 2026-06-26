import { Outlet } from "react-router-dom";

import Navber from "../Commponents/Navber";
import Footer from "../Commponents/Footer";

const Layout = () => {
  return (
    <>
      <Navber />

      <main className="pt-5">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
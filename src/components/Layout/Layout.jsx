import React from "react";

import SidebarMenu from "../Header/SidebarMenu";
import Footer from "../Footer/FooterComp";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <SidebarMenu />
      <main className="content">
        <Outlet /> {/* Render the children using Outlet */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

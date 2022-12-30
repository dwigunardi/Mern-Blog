import React from "react";
import FooterComponent from "./Footer";
import Navigasi from "./Navbar";

function LandingLayout({ children }) {
  return (
    <div>
      <Navigasi />
      {children}
      <FooterComponent />
    </div>
  );
}

export default LandingLayout;

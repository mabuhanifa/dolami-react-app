import React from "react";
import logo from "../images/Logo/logo_avatown_manual_1_basi_inverse.png";
export default function Nav() {
  return (
    <header className="flex bg-gradient-to-r from-[#371c84] to-[#801f8b] items-center space-between">
      <nav>
        <img src={logo} alt="" className="h-[57px]"/>
      </nav>
      <nav className="text-white underline text-lg">
        Go to Marketpage
      </nav>
    </header>
  );
}

import React from "react";
import SideBar from "./SideBar";

export default function Main() {
  return (
    <section className="px-10">
      <div className="flex">
        <SideBar />
        <div className="w-3/4 grid grid-cols-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

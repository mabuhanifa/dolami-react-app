import React from "react";
import { data } from "../data/data";
import SideBar from "./SideBar";

export default function Main() {
  return (
    <section className="px-10">
      <div className="flex">
        <SideBar />
        <div className="w-3/4">
          <div>
            <h1>All Items</h1>
          </div>
          <div className=" grid grid-cols-4">
            {data &&
              data.map((data) => (
                <div key={data.id}>
                  <div className="p-1">
                    <img src={data.img} alt="" className="rounded" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { data } from "../data/data";
import SideBar from "./SideBar";
export default function Main() {
  return (
    <section className="px-10">
      <div className="flex">
        <SideBar />
        <div className="w-3/4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mt-5">All Items</h1>
            <div>
              <select name="select" id="sort-box">
                <option value="featured">Sort by featured</option>
                <option value="price l-h">Price : Low to High</option>
                <option value="price h-l">Price : High to Low</option>
                <option value="review">Customer Review</option>
                <option value="newest">New</option>
                <option value="polygon l-h">Polygon : Low to High</option>
                <option value="polygon h-l">Polygon : High to Low </option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-4">
            {data &&
              data.map((data) => (
                <div key={data.id}>
                  <div className="p-1 relative">
                    <img src={data.img} alt="" className="rounded" />
                    <button className="px-2 bg-[#4c45f6] text-white rounded-lg absolute top-3 right-3">
                      <IoCartOutline className="inline text-xl mb-1 mx-1 font-bold" />
                      Add
                    </button>
                  </div>
                  <div className="px-2 text-[16px] font-[500]">
                    <h1>{data.name}</h1>
                  </div>
                  <div className="flex items-center">
                    <p className="px-2 text-orange-400 text-lg">{data.star}</p>
                    <p className="px-1 text-gray-500">{data.rating}</p>
                    <p className="px-1 text-gray-500"> & {data.likes}likes</p>
                  </div>
                  <div className="px-2 flex items-center">
                    <img src={data.img} alt="avatar" className="h-5 rounded-full"/>
                    <p className="px-2 text-gray-500">Avatar Joe's</p>
                  </div>
              
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

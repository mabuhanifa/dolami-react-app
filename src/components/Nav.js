import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
export default function Nav() {
  return (
    <header className="flex bg-gradient-to-r from-[#371c84] to-[#801f8b] items-center justify-between px-10">
      <nav className="flex items-center">
        <img
          src="https://i.ibb.co/2YQx7K1/logo-avatown-manual-1-basi-inverse.png"
          alt=""
          className="h-[57px]"
        />
        <span className="text-white underline text-lg ml-10">
          Go to Marketpage
        </span>
      </nav>

      <nav className="flex justify-between text-white text-lg items-center">
        <div className="relative mr-5">
          <input
            type="text"
            className="py-1 rounded w-96 text-gray-500 px-2 pr-10"
          />
          <button>
            <GoSearch className="text-gray-400 text-lg absolute top-1/2 right-3 -translate-y-1/2" />
          </button>
        </div>
        <span className="bg-gray-800 mx-5 p-3 rounded-lg relative">
          <VscBell className="text-xl" />
          <span className="absolute bg-red bg-red-600 text-white text-xs px-1.5 rounded-full top-[-5px] right-[-5px]">
            3
          </span>
        </span>
        <span className="bg-gray-800 mx-5 p-3 rounded-lg relative">
          <IoCartOutline className="text-xl" />
          <span className="absolute bg-red bg-red-600 text-white text-xs px-1.5 rounded-full top-[-5px] right-[-5px]">
            1
          </span>
        </span>
        <span className="bg-gray-800 mx-5 p-3 rounded-lg">
          <FaUserAlt className="text-xl" />
        </span>
      </nav>
    </header>
  );
}

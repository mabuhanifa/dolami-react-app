import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { FiShare } from "react-icons/fi";

export default function Share({ desc }) {
  const [share, setShare] = useState(false);
  return (
    <div className="relative">
      <span
        className={`absolute right-2 top-[-20px] border border-gray-300 rounded px-1 pr-2 flex justify-end text-gray-500 cursor-pointer share ${
          share ? "" : "hidden"
        }`}
      >
        <span
          className="absolute right-2 bottom-[30px] font-[500] text-black bg-gray-400 text-xs px-1 rounded"
          id="copy"
        >
          Copied
        </span>
        <BsLink45Deg className="mt-1 mr-1" />
        Copy Link
      </span>
      <p>{desc}</p>
      <div className="absolute right-3 bottom-1 text-gray-500 ">
        <button onClick={() => setShare(!share)}>
          <FiShare className="text-lg" />
        </button>
      </div>
    </div>
  );
}

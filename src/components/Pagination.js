import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export default function Pagination({
  page,
  totalPages,
  getPrevPage,
  getNextPage,
  selectPageHandler,
}) {
  return (
    <>
      <div className="my-10">
        <button
          onClick={() => getPrevPage()}
          className="text-xl font-bold text-gray-700"
        >
          <GrPrevious className="inline-block"/>
        </button>
        
          {[...Array(totalPages)].map((_, i) => (
            <button
              onClick={() => selectPageHandler(i + 1)}
              className={
                i === page - 1
                  ? "font-bold inline-block px-2 mx-1 bg-gray-300"
                  : "text-gray inline-block px-2 mx-1"
              }
              key={i}
            >
              {i + 1}
            </button>
          ))}
        
        <button
          onClick={() => getNextPage()}
          className=" text-xl font-bold text-gray-700"
        >
          <GrNext className="inline-block"/>
        </button>
      </div>
    </>
  );
}

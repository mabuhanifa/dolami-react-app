import React from "react";

export default function Pagination({
  page,
  totalPages,
  getPrevPage,
  getNextPage,
  selectPageHandler,
}) {
  const isCurrent = (i) => {
    if (i === page + 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div>
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page} of {totalPages}
        </p>
        {[...Array(totalPages)].map((_, i) => (
          <span
            onClick={() => selectPageHandler(i + 1)}
            className={isCurrent(i) ? "" : ""}
            key={i}
          >
            {i + 1}
          </span>
        ))}
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
}

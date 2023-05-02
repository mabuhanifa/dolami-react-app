import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAvatar } from "../contextApi/context";
import { data } from "../data/data";
import Love from "./Love";
import Pagination from "./Pagination";
import Share from "./Share";
import SideBar from "./SideBar";
export default function Main() {
  const navigate = useNavigate();
  const pusher = (id) => {
    navigate(`/avatar/${id}`);
  };
  const { dispatch } = useAvatar();
  const addToCart = (avatar) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: avatar,
    });
  };
  const [page, setPage] = useState(1);
  const perPage = 12;
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const avatars = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / perPage);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setPage(selectedPage);
    }
  };
  const getNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const getPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
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
            {avatars &&
              avatars
                .slice(0 * perPage - perPage, page * perPage)
                .map((data) => (
                  <div key={data.id} className="pb-2">
                    <div className="p-1 relative">
                      <img src={data.img} alt="" className="rounded" />
                      <button
                        className="px-2 bg-[#4c45f6] text-white rounded-lg absolute top-3 right-3"
                        onClick={() => addToCart(data)}
                      >
                        <IoCartOutline className="inline text-xl mb-1 mx-1 font-bold" />
                        Add
                      </button>
                    </div>
                    <div
                      className="px-2 text-[16px] font-[500] cursor-pointer"
                      onClick={() => pusher(data.id)}
                    >
                      <h1>{data.name}</h1>
                    </div>
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center">
                        <p className="px-2 text-orange-400 text-lg">
                          {data.star}
                        </p>
                        <p className="px-1 text-gray-500">{data.rating}</p>
                        <p className="px-1 text-gray-500">
                          & {data.likes}likes
                        </p>
                      </div>
                      <Love />
                    </div>
                    <div className="px-2 flex items-center">
                      <img
                        src={data.img}
                        alt="avatar"
                        className="h-5 rounded-full"
                      />
                      <p className="px-2 text-gray-500">Avatar Joe's</p>
                    </div>
                    <div className="px-2 flex">
                      <span className="text-xs pt-3 pr-1">$</span>
                      <p className="text-2xl font-bold">{data.price}</p>
                    </div>
                    <div className="px-2 flex items-center">
                      <div className="h-5 w-5 rounded-full bg-cyan-500"></div>
                      <div className="mx-2">{data.pc_only && "PC Only"}</div>
                    </div>
                    <Share desc={data.desc} />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          selectPageHandler={selectPageHandler}
          totalPages={totalPages}
          page={page}
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
        />
      </div>
    </section>
  );
}

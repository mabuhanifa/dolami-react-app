import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

export default function Avatar() {
  const { id } = useParams();
  const avatar = data.find((item) => item.id === Number(id));

  return (
    <div className="px-20 py-5">
      <div className="grid grid-cols-3 gap-x-5">
        <div>
          <img src={avatar.img} alt="avatar" />
        </div>
        <div className="px-10">
          <h1 className="text-[20px] font-[500] mb-10">{avatar.name}</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            tempore earum deleniti voluptas quaerat, quam minus quas at
            temporibus quasi nesciunt animi molestiae, laborum magni impedit
            alias corrupti porro odit veritatis ullam in dolorum, adipisci
            voluptatum consequuntur. Pariatur obcaecati, quo illo fuga mollitia
            molestiae? Ratione labore dolorum exercitationem alias fuga! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Quae non vero
            perferendis mollitia fugit error, optio in nihil distinctio quis cum
            placeat aspernatur consequatur. Obcaecati quod nisi voluptatum rem a
            aliquam asperiores exercitationem? Culpa iusto in nisi asperiores
            enim quibusdam obcaecati, quasi, magnam at voluptatum temporibus
            saepe inventore architecto et!
          </p>
          <p className="py-5">
            <span className="text-gray-500">Category : </span>{" "}
            <span className="text-blue-500 font-[500]">
              Humaniod Oculus Avatar
            </span>
          </p>
          <p>
            <span className="text-gray-500">Tags : </span>{" "}
            <span className="text-blue-500 font-[500]">
              #Humaniod #Oculus #Avatar
            </span>
          </p>
        </div>
        <div className="px-20">
          <div className="flex justify-end text-end">
            <div>
              <h1 className="text-xl font-bold">${avatar.price}</h1>
              <p className="text-xl text-orange-700">{avatar.star}</p>
              <p>{avatar.rating} | {avatar.likes} Likes</p>
            </div>
          </div>
          <div>
            <button className="block bg-indigo-100 text-indigo-700 font-[500] py-3 rounded-full my-5 w-full">
              Add To Cart
            </button>
            <button className="block bg-indigo-100 text-indigo-700 font-[500] py-3 rounded-full my-5 w-full">
              Buy Now
            </button>
            <button className="block bg-indigo-100 text-indigo-700 font-[500] py-3 rounded-full my-5 w-full">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

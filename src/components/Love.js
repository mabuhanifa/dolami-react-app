import React, { useState } from "react";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

export default function Love() {
  const [loved, setLoved] = useState(false);
  return (
    <div onClick={() => setLoved(!loved)} className="text-xl cursor-pointer">
      {loved ? (
        <span>
          <VscHeartFilled className="text-red-500" />
        </span>
      ) : (
        <span>
          <VscHeart />
        </span>
      )}
    </div>
  );
}

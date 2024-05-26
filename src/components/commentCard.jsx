"use client";

import React, { useState } from "react";
import Image from "next/image";

const CommentCard = ({ image, user, comment, position }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        position == 2 ? "h-[290px] md:h-[270px] text-[#07C168]" : "h-[262px] md:h-[242px] text-[#0C0932]"
      } border border-[#0C093280] rounded-[9px] cursor-pointer w-[100%] md:w-[300px] md:p-6 p-8
        ${isActive || position === 2 ? "bg-[#0C0932] md:w-[350px]" : "bg-none"}
      `}
    >
      {/* <p className={`${position === 1 ? "text-[#07C168]" : "text-[#0C0932]"}`}>
        <span className="text-[25px]">&quot;</span> {comment}
        <span className="text-[25px]">&quot;</span>
      </p> */}
      <div className="flex gap-2">
        <div> <span className="text-[25px]">&quot;</span></div>
        <div className="" style={{textAlign: "justify"}}> {comment}</div>
        <div> <span className="text-[25px]">&quot;</span></div>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <Image src={image} alt={user} width={"30px"} height={"30px"} />
        <div className="mt-2">
          <h2 className={`text-xl text-[#07C168] font-bold flex items-center `}>
            {user}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

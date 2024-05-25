"use client"

import React, { useState } from "react";
import Image from "next/image";

const CommentCard = ({ image, user, comment }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      className={`border border-[#0C093280] rounded-[9px] cursor-pointer w-[100%] md:w-[300px] md:p-6 p-8
        ${isActive ? 'bg-[#0C0932] text-[#07C168] md:w-[350px]' : 'hover:bg-[#0C0932] hover:text-[#07C168] hover:md:w-[350px]'}
      `}
    >
      <p className="text-[#07C168]" >
        &quot; {comment} &quot;
      </p>
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

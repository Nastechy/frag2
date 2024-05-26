import Image from "next/image";
import React from "react";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="bg-[#0C0932] rounded-[20px] shadow-md overflow-hidden w-[100%] md:w-[580px] md:p-10 p-4 h-[259px] text-left hover:bg-[#07C168] group">
    <div className="w-[100%]">
      <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        className="group-hover:border group-hover:border-[#0C0932] rounded-full"
      />
    </div>

    <div className="mt-6">
      <h2 className="text-xl text-[#07C168] hover:text-[#0C0932] font-bold mb-4">
        {title}
      </h2>
      <p className="text-[#FFFFFF] mt-[20px]">{subtitle}</p>
    </div>
  </div>
  );
};

export default Card;

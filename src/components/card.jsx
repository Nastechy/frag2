import Image from "next/image";
import React from "react";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="bg-[#0C0932] rounded-[20px] shadow-md overflow-hidden w-[100%] md:w-[580px] md:p-10 p-4">
      <Image
        src={image}
        alt={title}
        width={"30px"}
        height={"30px"}
      />
      <div className="mt-6">
        <h2 className="text-xl text-[#07C168] font-bold mb-4">{title}</h2>
        <p className="text-[#FFFFFF] mt-[20px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;

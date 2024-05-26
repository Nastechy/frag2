"use client";

import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import rightarrow from "../../public/images/RightArrow.png";
import houseframe from "../../public/images/HouseFrame2.png";
import leftarrow from "../../public/images/LeftArrow.png";
import checkoutframe from "../../public/images/CheckoutFrame2.png";
import goalframe from "../../public/images/GoalFrame.png";

const HowItWorksPage = () => {
  return (
    <div className="background flex justify-center flex-col items-center">
      <div className="w-[100%] md:w-[1200px] mt-10">
        <div className="md:w-[100%] w-[100%] h-fit flex justify-center">
          <div className="flex flex-col items-center gap-2 ">
            <div className="text-[white] md:text-[50px] text-[40px] text-center font-[700]">
              How simpler real estate works
            </div>
            <div className="text-[white] text-[24px]">
              just like ordering your favourite items online.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px] mt-16 flex flex-col md:flex-row">
        <div className="md:w-[50%] w-[100%] h-fit md:p-20 mt-4 md:mt-0 md:mb-0 mb-4">
          <div className="flex flex-col items-start gap-4 ">
            <div className="text-[#07C168] text-[30px]">Choose a property</div>
            <div className="text-[white] text-[24px]">
              Start by entering an address or scanning <br /> through available
              properties.
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] h-fit flex items-center justify-start">
          <div className="md:w-[580px] w-[100%] gap-2 h-fit rounded-[20px] bg-[#0B1B38] flex flex-col items-center justify-center md:p-32 p-10">
            <div style={{width: '100%'}}>
              <input
                type="text"
                placeholder="input property address"
                className="bg-[#f8f8e6] text-[#9b9b9b] rounded-full py-2 px-4 text-lg w-full focus:outline-none text-center"
              />
            </div>
            <div>
              <Button
                type="primary"
                label="Search "
                action={() => alert("Button clicked!")}
                color="#0C0932"
                fontWeight="700"
                fontSize="12px"
                className="px-6 py-2 rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px] ">
        <div>
          <Image src={rightarrow} alt="right-arrow" />
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px] flex flex-col md:flex-row">
        <div className="md:w-[50%] w-[100%] h-fit flex items-center justify-center">
          <div>
            <Image src={houseframe} alt="right-arrow" />
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] h-fit md:p-20 mt-4 md:mt-0 md:mb-0 mb-4">
          <div className="flex flex-col items-start gap-4 ">
            <div className="text-[#07C168] text-[30px]">
              View property details and status
            </div>
            <div className="text-[white] text-[24px]">
              Check if you can buy, generate income or live in the property—or
              move on.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px]">
        <div>
          <Image src={leftarrow} alt="right-arrow" />
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px] flex flex-col md:flex-row">
        <div className="md:w-[50%] w-[100%] h-fit md:p-20 mt-4 md:mt-0 md:mb-0 mb-4">
          <div className="flex flex-col items-start gap-4 ">
            <div className="text-[#07C168] text-[30px]">
              Place an order in one click
            </div>
            <div className="text-[white] text-[24px]">
              Effortlessly complete any transaction you decide on.
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] h-fit flex items-center justify-center">
          <div>
            <Image src={checkoutframe} alt="right-arrow" />
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px]">
        <div>
          <Image src={rightarrow} alt="right-arrow" />
        </div>
      </div>
      <div className="w-[100%] md:w-[1200px] flex flex-col md:flex-row">
        <div className="md:w-[50%] w-[100%] h-fit flex items-center justify-center">
          <div>
            <Image src={goalframe} alt="right-arrow" />
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] h-fit md:p-20 mt-4 md:mt-0 md:mb-0 mb-4">
          <div className="flex flex-col items-start gap-4 ">
            <div className="text-[#07C168] text-[30px]">
              Achieve your real estate goal
            </div>
            <div className="text-[white] text-[24px]">
              Win in the real estate game, whether owning, earning income or
              residing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

{
  /* <div className="w-[100%] md:w-[800px] border-2 border-red-600 flex flex-col md:flex-row">
<div className="md:w-[50%] w-[100%]  h-[100px] border-2 border-yellow-600"></div>
<div className="md:w-[50%] w-[100%]  h-[100px] border-2 border-white"></div>
</div> */
}

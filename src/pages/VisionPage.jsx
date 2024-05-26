"use client";

import Button from "@/components/button";
import React from "react";
import vertLine from "../../public/images/vertLine.png";
import horiLine from "../../public/images/horiz-line.png";

import Image from "next/image";

const VisionPage = () => {
  return (
    <div className="app_bg_settings w-[100%]">
      <div className="w-[100%] mt-12 ">
        <div className="md:w-[100%] w-[100%] h-fit bg-[#0C0932] flex flex-col md:flex-row items-center">
          <div className="md:w-[100%] w-[100%] md:p-10 p-2">
            <div className="text-[22px] font-[400] text-[#07C168]">
              If you are unable to buy real estate because{" "}
            </div>
            <ul className="text-[16px] md:text-[22px] font-[400] text-[#07C168] mt-4">
              <li>. the price tag is too high</li>
              <li>. you don’t want mortgage or instalment</li>
              <li>. you’re still saving & waiting</li>
              <li>. the process is stressful & complicated</li>
            </ul>
          </div>
          <div >
            {" "}
            
            {/* <hr style={{border: '1px solid #07C168'}} className="h-[10px]" /> */}
            {/* <hr className="border-t-[1px] border-[#07C168] h-[100px] w-full" /> */}
            <Image
              style={{ width: "", height:'200px' }}
              src={vertLine}
              className="hidden md:block"
              alt="vert-line"
            />
             <Image
              style={{ width: "", height:'' }}
              src={horiLine}
              className="block md:hidden"
              alt="vert-line"
            />


          </div>
          <div className="md:w-[100%] w-[100%] md:p-10 p-2">
            <div className="text-[22px] font-[400] text-[#FFFFFF]">
              Frags eliminate these barriers.
            </div>
            <div className="text-[16px] md:text-[22px] font-[400] text-[#07C168] mt-8 italic ">
              With frags or percentage ownership, you <br />
              can buy real estate with any amount,
              <br />
              anytime anywhere, without any future <br />
              financial obligation.
            </div>
          </div>
        </div>
        <div className="md:w-[100%] w-[100%] flex items-center justify-center h-[200px]">
          <div className="w-[100%] gap-3 flex flex-col md:flex-row justify-center items-center">
            <div className="w-[100%] md:w-auto">
              <Button
                type="primary"
                label="Buy Frags "
                action={() => alert("Button clicked!")}
                color="#0C0932"
                fontWeight="700"
                className="px-8 py-2.5 rounded-[50px] w-[100%] md:w-auto h-[52px]"
              />
            </div>
            <div className="w-[100%] md:w-auto">
              <Button
                type="outline"
                label="Learn more "
                action={() => alert("Button clicked!")}
                color="#0C0932"
                fontWeight="700"
                className="px-5 py-2.5 rounded-[50px] flex gap-4 w-[100%] md:w-auto h-[52px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;

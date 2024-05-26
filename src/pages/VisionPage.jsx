'use client'

import Button from "@/components/button";
import React from "react";

const VisionPage = () => {
  return (
    <div className="allPadding flex justify-center flex-col items-center">
      <div className="w-[100%] md:w-[1200px] mt-12 ">
        <div className="md:w-[100%] w-[100%] h-fit bg-[#0C0932] p-10 flex flex-col md:flex-row items-center">
          <div className="md:w-[50%] w-[100%] md:p-10 p-2">
            <div className="text-[22px] font-[400] text-[#07C168]">
              If you are unable to buy real estate because{" "}
            </div>
            <ul className="text-[22px] font-[400] text-[#07C168] mt-4">
              <li>. the price tag is too high</li>
              <li>. you don’t want mortgage or instalment</li>
              <li>. you’re still saving & waiting</li>
              <li>. the process is stressful & complicated</li>
            </ul>
          </div>
          <hr className="h-50px border border-green-500"/>
          <div className="md:w-[50%] w-[100%] md:p-10 p-2">
            <div className="text-[22px] font-[400] text-[#FFFFFF]">
              Frags eliminate these barriers.
            </div>
            <div className="text-[22px] font-[400] text-[#07C168] mt-8 italic ">
              With frags or percentage ownership, you <br />
              can buy real estate with any amount,
              <br />
              anytime anywhere, without any future <br />
              financial obligation.
            </div>
          </div>
        </div>
        <div className="md:w-[100%] w-[100%] p-12 flex items-center justify-center">
          <div className=" gap-3 flex flex-col md:flex-row">
              <div>
                <Button
                  type="primary"
                  label="Buy Frags "
                  action={() => alert("Button clicked!")}
                  color="#0C0932"
                  fontWeight="700"
                  className="px-8 py-2.5 rounded-[50px]"
                />
              </div>
              <div>
                <Button
                  type="outline"
                  label="Learn more "
                  action={() => alert("Button clicked!")}
                  color="#0C0932"
                  fontWeight="700"
                  className="px-5 py-2.5 rounded-[50px] flex gap-4"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;

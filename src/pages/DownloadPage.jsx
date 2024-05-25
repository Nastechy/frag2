'use client'

import Image from "next/image";
import React from "react";
import phones from "../../public/images/TwoPhones.png";
import Button from "@/components/button";
import apple from "../../public/images/appleLogo.png";
import andriod from "../../public/images/androidLogo.png";

const DownloadPage = () => {
  return (
    <div className="allPadding flex justify-center items-center bg-[#FFFEF0]">
      <div className="w-[100%] md:w-[1200px] h-auto mt-16">
        <div className="md:w-[100%] w-[100%] h-[50%] border-2 rounded-[20px] bg-[#0C0932] flex flex-col md:flex-row items-center">
          <div className="w-[100%] md:hidden mb-6">
            <Image src={phones} alt="Phones" layout="responsive" />
          </div>
          <div className="md:w-[60%] w-[100%] md:p-10 p-2">
            <div className="text-[30px] font-[400] text-[#07C168]">
              Download the Fragvest App
            </div>
            <div className="text-[24px] font-[400] text-[#07C168] mt-4">
              Open an account now and follow the simpler way to your real estate
              goals.
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div>
                <Button
                  type="primary"
                  label="App Store "
                  action={() => alert("Button clicked!")}
                  leftIcon1={apple}
                  iconWidth={24}
                  iconHeight={24}
                  columnGap="12px"
                  color="#0C0932"
                  fontWeight="700"
                  className="px-6 py-2.5 rounded-[50px]"
                />
              </div>
              <div>
                <Button
                  type="primary"
                  label="Google Play "
                  action={() => alert("Button clicked!")}
                  leftIcon2={andriod}
                  iconWidth={24}
                  iconHeight={24}
                  columnGap="12px"
                  color="#0C0932"
                  fontWeight="700"
                  className="px-6 py-2.5 rounded-[50px]"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[40%] w-[100%] hidden md:block">
            <Image src={phones} alt="Phones" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;

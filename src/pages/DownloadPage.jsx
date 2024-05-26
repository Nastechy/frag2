"use client";

import Image from "next/image";
import React from "react";
import phones from "../../public/images/TwoPhones.png";
import mobPhones from "../../public/images/mob-app-img.png";
import Button from "@/components/button";
import apple from "../../public/images/appleLogo.png";
import andriod from "../../public/images/androidLogo.png";
import Link from "next/link";


const DownloadPage = () => {
  return (
    <div className="app_bg_settings flex justify-center items-center h-[762px] md:h-[422px] mt-[120px] mb-10 md:mb-0">
      <div className="w-[100%] mt-16 relative h-[100%]">
        <div className="md:w-[100%] w-[100%] border-2 rounded-[20px] bg-[#0C0932] flex flex-col md:flex-row items-center h-[100%]">
          <div className="w-[100%] md:hidden mb-6 mt-[-140px]">
            <Image src={mobPhones} alt="Phones" layout="responsive" />
          </div>
          <div className="md:w-[60%] w-[100%] md:p-10 p-2 text-left md:text-left">
            <div className="text-[30px] font-[400] text-[#07C168]">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile&pli=1"
                }
              >
                {" "}
                Download the Fragvest App
              </Link>
            </div>
            <div className="text-[24px] font-[400] text-[#FFFFFF] my-10">
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
                  // color="#0C0932"
                  fontWeight="700"
                  className="px-6 py-2.5 rounded-[50px] w-[100%] md:w-unset h-[52px]"
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
                  // color="#0C0932"
                  fontWeight="700"
                  className="px-6 py-2.5 rounded-[50px] w-[100%] md:w-unset h-[52px]"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[40%] w-[100%] hidden md:block md:absolute md:right-[10px] md:bottom-[0px]">
            <div className="">
              {" "} 
              {/* <Image className=" " src={mobPhones} alt="Phones" layout="responsive" /> */}

              <Image className="hidden md:block" src={phones} alt="Phones" layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;

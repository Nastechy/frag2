import Image from "next/image";
import React from "react";
import logo from "../../public/images/LayerLogo.png";
import instagram from "../../public/images/instagram.png";
import twitter from "../../public/images/twitter.png";
import facebook from "../../public/images/facebook.png";
import linkdin from "../../public/images/linkedin.png";

const FooterPage = () => {
  return (
    <div className="app_bg_settings flex justify-center flex-col items-center">
      <div className="w-[100%] md:mt-24 mt-10">
        <div className="md:w-[100%] w-[100%] h-fit flex flex-col md:flex-row items-between justify-between text-left">
          <div className="flex gap-2 items-center w-[100%]">
            <div className="">
              <Image
                src={logo}
                alt="right-arrow"
                layout="fragvest-logo"
                width={"24px"}
                height={"24px"}
              />
            </div>
            <div>
              <div className="md:text-[30px] text-[20px] font-[700] text-[#0C0932]">
                Fragvest
              </div>
              <div className="md:text-[14px] text-[12px] font-[700] text-[#07C168]">
                follow the easier access
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[100%] mt-10 md:mt-0 mb-10 md:mb-0">
            <div className="flex flex-col gap-3 text-start w-[100%]">
              <div className="md:text-[14px] text-[12px] font-[700] text-[#07C168]">
                Company
              </div>
              <div className="cursor-pointer md:text-[14px] text-[12px] font-[400] text-[#0C0932CC]">
                About Us
              </div>
              <div className="cursor-pointer md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
                Frags
              </div>
              <div className="cursor-pointer md:text-[14px] text-[12px] font-[400] text-[#0C0932CC]">
                Blog
              </div>
              <div className="cursor-pointer md:text-[14px] text-[12px] font-[400] text-[#0C0932CC]">
                FAQs
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[100%]">
              <div className="md:text-[14px] text-[12px] font-[700] text-[#07C168]">
                Legal
              </div>
              <div className="cursor-pointer md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
                Security
              </div>
              <div className="cursor-pointer md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
                Privacy Policy
              </div>
              <div className="cursor-pointer md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
                Terms and Conditions
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[100%] justify-end text-left md:text-right">
            <div className="md:text-[14px] text-[10px] font-[700] text-[#07C168]">
              Contact Us
            </div>
            <div className="flex gap-2 md:justify-end">
              <Image className="cursor-pointer" src={instagram} alt="" />
              <Image className="cursor-pointer" src={twitter} alt="" />
              <Image className="cursor-pointer" src={facebook} alt="" />
              <Image className="cursor-pointer" src={linkdin} alt="" />
            </div>
            <div className="md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
              112a Association Rd, Dolphin <br /> Estate, Ikoyi, Lagos, Nigeria.
            </div>
            <div className="md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
              +234 915 555 5590
            </div>
            <div className="md:text-[14px] text-[10px] font-[400] text-[#0C0932CC]">
              hello@fragvest.com
            </div>
          </div>
        </div>
        <div className="md:w-[100%] w-[100%] mt-6 text-[#0C0932] p-10 text-[16px] flex items-center justify-center">
          <div>© 2024 Fragvestment Ltd. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

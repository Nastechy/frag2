"use client";

import React, { useState } from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../public/images/frag-logo.png";
import Button from "@/components/button";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Frags", "Market", "Gift Card", "Blog", "FAQs"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app_bg_settings relative flex justify-center flex-col items-center">
      {/* <Image src={phones} alt="Phones" layout="responsive" /> */}

      <div
        style={{ position: "relative" }}
        className="w-[100%] flex flex-col md:flex-row items-between justify-between"
      >
        <div className="w-[100%] flex items-center justify-between md:justify-start md:w-[50%] h-fit">
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="right-arrow" layout="fragvest-logo" />
          </div>
          <div className="md:hidden flex items-center justify-end">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6 text-[#0C0932]" />
              ) : (
                <div onClick={toggleMenu}>
                  <Image
                    src={"/images/harmb.png"}
                    // layout="responsive"
                    className="h-6 w-6 text-[#0C0932]"
                    alt="harmg"
                    width={50}
                    height={50}
                  />
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:flex h-fit items-center gap-5">
          <div className="flex gap-5 font-[400] text-[#0C0932] text-[20px] cursor-pointer">
            {menuItems.map((item) => (
              <div
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <Button
              type="primary"
              label="Open account "
              action={() => alert("Button clicked!")}
              color="#0C0932"
              fontWeight="700"
              className="px-8 py-2.5 rounded-[50px]"
            />
          </div>
        </div>
        {isMenuOpen && (
          <div
            style={{
              background: "#FFFEF0",
              position: "absolute",
              height: "1200px",
              width: "100%",
              color: "black",
              top: "70px",
              zIndex: "100000000",
            }}
            // className="flex flex-col gap-4 font-[400] text-[#0C0932] text-[14px] cursor-pointer"
          >
            <div
              style={{
                // background: "blue",
                // zIndex: "100000000",
                height: "100%",
                paddingTop: "22px",
              }}
            >
              {" "}
              {menuItems.map((item) => (
                <div
                  style={{
                    color: "#0C0932",
                    fontWeight: "400",
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                  key={item}
                  className="hover:text-[16px]"
                >
                  {item}
                </div>
              ))}
              <div className="mt-[40px]">
                <Button
                  type="primary"
                  label="Open account "
                  action={() => alert("Button clicked!")}
                  color="#0C0932"
                  fontWeight="700"
                  className="px-8 py-2.5 rounded-[50px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;

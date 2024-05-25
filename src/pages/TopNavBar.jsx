"use client";

import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "../components/Modal";
import logo from "../../public/images/Logo2.png";
import Button from "@/components/button";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Frags", "Market", "Gift Card", "Blog", "FAQs"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="allPadding flex justify-center flex-col items-center bg-[#FFFEF0]">
      <div className="w-[100%] md:w-[1200px] p-4 pl-0 pr-0 flex flex-col md:flex-row items-center justify-center">
        <div className="w-[100%] flex items-center justify-between md:justify-start md:w-[50%] h-fit">
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="right-arrow" layout="fragvest-logo" />
            <div className="md:text-[30px] text-[20px] font-[700] text-[#0C0932]">
              Fragvest
            </div>
          </div>
          <div className="md:hidden flex items-center justify-end">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6 text-[#0C0932]" />
              ) : (
                <MenuIcon className="h-6 w-6 text-[#0C0932]" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:w-[50%] w-[100%] h-fit items-center gap-5">
          <div className="flex gap-5 font-[400] text-[#0C0932] text-[20px] cursor-pointer">
            {menuItems.map((item) => (
              <div key={item} className="hover:text-[16px]">
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
        <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
          <div className="flex flex-col gap-4 font-[400] text-[#0C0932] text-[14px] cursor-pointer">
            {menuItems.map((item) => (
              <div key={item} className="hover:text-[16px]">
                {item}
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TopNav;

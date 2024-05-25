"use client";

import Card from "@/components/card";
import React from "react";
import cart from "../../public/images/Cart.png";
import house from "../../public/images/House.png";
import swap from "../../public/images/Swap.png";
import money from "../../public/images/moneyBag.png";
import shield from "../../public/images/Shield.png";
import property from "../../public/images/Property.png";
import Button from "@/components/button";

const TransformsPage = () => {
  const cardsData = [
    {
      image: cart,
      title: "Enjoy a Simple Real Estate Shopping Experience",
      subtitle:
        "Find and pick properties with ease, just like shopping online, making the process smooth and enjoyable."
    },
    {
      image: house,
      title: "Earn Money from as Many Properties as You Want",
      subtitle:
        "Become a multiple real estate owner, expand your real estate portfolio without limits."
    },
    {
      image: money,
      title: "Build and Accumulate Long-Term Wealth",
      subtitle:
        "Leverage real estate as a solid foundation for your wealth accumulation."
    },
    {
      image: swap,
      title: "Swap Any Amount Between Cash and Real Estate.",
      subtitle:
        "Put in any amount into real estate, or take it out easily, making your money work for you flexibly."
    },
    {
      image: shield,
      title: "Safeguard Against Property Scams",
      subtitle:
        "Feel secure knowing all properties are checked thoroughly to protect you from scams and defects."
    },
    {
      image: property,
      title: "Comfortable house-hunting from anywhere",
      subtitle:
        "Search for your next property online, experiencing the freedom to house-hunt on your terms and timetable."
    }
  ];

  return (
    <div className="allPadding flex justify-center flex-col items-center bg-[#FFFEF0]">
      <div className="w-[100%] md:w-[1200px] mt-12 ">
        <div className="md:w-[100%] w-[100%] h-fit flex justify-center items-center mb-12">
          <div className="md:text-[46px] text-[35px] text-[#0C0932] text-center md:text-start font-[700]">
            How Fragvest Transforms Your Real Estate Game
          </div>
        </div>
        <div className="md:w-[100%] w-[100%] flex items-center justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-x-6 gap-y-6 md:w-[100%] w-[100%] ">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center p-20">
          <div>
            <Button
              type="primary"
              label="Open an account today "
              action={() => alert("Button clicked!")}
              color="#0C0932"
              fontWeight="700"
              className="px-8 py-2.5 rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformsPage;

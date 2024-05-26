"use client";

import React, { useState } from "react";
import CommentCard from "@/components/commentCard";
import image from "../../public/images/Image.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CommentPage = () => {
  const cardsData = [
    {
      id: 1,
      image: image,
      user: "John Doe",
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Exercitation veniam consequat."
    },
    {
      id: 2,
      image: image,
      user: "John Doe",
      comment:
        "Velit officia consequat duis, Amet minim mollit non fficia consequat duis, deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
    },
    {
      id: 3,
      image: image,
      user: "John Doe",
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat Exercitation veniam consequat."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="app_bg_settings flex justify-center flex-col items-center">
      <div className="w-[100%] mt-12">
        <div className="md:w-[100%] w-[100%] flex justify-center">
          <div className="flex items-center">
            <div className="text-[#0C0932] text-center md:text-[50px] text-[35px] font-[700]">
              Real Insights from Real Users
            </div>
          </div>
        </div>
        <div className="md:w-[100%] w-[100%] mt-6">
          <div className="flex gap-2 justify-center md:w-[100%] w-[100%] flex-col md:flex-row items-center">
            <div className="md:hidden">
              <CommentCard
                image={cardsData[currentIndex].image}
                user={cardsData[currentIndex].user}
                comment={cardsData[currentIndex].comment}
                position={cardsData[currentIndex].id}
              />
            </div>
            <div className="hidden md:flex gap-6 flex items-center">
              {cardsData.map((card, index) => (
                <CommentCard
                  key={card.id}
                  image={card.image}
                  user={card.user}
                  comment={card.comment}
                  position={card.id}
                />
              ))}
            </div>
            <div>
              <button onClick={handlePrevious} className="text-2xl md:hidden">
                <AiOutlineLeft />
              </button>
              <button onClick={handleNext} className="text-2xl md:hidden">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;

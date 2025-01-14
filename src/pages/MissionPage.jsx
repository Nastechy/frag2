"use client";

import Image from "next/image";
import frame1 from "../../public/images/Frame1.png";
import frame2 from "../../public/images/Frame2.png";
import frame3 from "../../public/images/Frame3.png";
import frame4 from "../../public/images/Frame44.png";
import Button from "@/components/button";
import apple from "../../public/images/appleLogo.png";
import andriod from "../../public/images/androidLogo.png";

const MissionPage = () => {
  return (
    <div className="allPadding flex justify-center flex-col items-center bg-[#FFFEF0]">
      <div className="w-[100%] md:w-[1200px] mt-4">
        <div className="md:w-[100%] w-[100%] h-fit flex justify-center">
          <div className="flex flex-col items-center gap-4 ">
            <div className="text-[#0C0932] md:text-[50px] text-[35px] text-center font-[700]">
              Real Estate Made Simpler
            </div>
            <div className="text-[#0C0932] text-[24px] text-center p-4">
              We guarantee to make your real estate interaction as
              straightforward as possible, so you can focus on what really
              matters — achieving your property goals.
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <Button
                  type="primary"
                  label="Browse Properties "
                  action={() => alert("Button clicked!")}
                  color="#0C0932"
                  fontWeight="700"
                  className="px-8 py-2.5 rounded-[50px]"
                />
              </div>
              <div>
                <Button
                  type="outline"
                  label="Download App "
                  action={() => alert("Button clicked!")}
                  color="#0C0932"
                  fontWeight="700"
                  leftIcon1={apple}
                  leftIcon2={andriod}
                  iconWidth={20}
                  iconHeight={20}
                  className="px-5 py-2.5 rounded-[50px] flex gap-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[100%] w-[100%] mt-16 flex items-center justify-center">
          <div className="flex items-end ">
            <div className="mx-1">
              <Image src={frame1} alt="frame1" />
            </div>
            <div className="mx-1">
              <Image src={frame2} alt="frame2" />
            </div>
            <div className="mx-1">
              <Image src={frame3} alt="frame2" />
            </div>
            <div className="mx-1">
              <Image src={frame4} alt="frame4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;

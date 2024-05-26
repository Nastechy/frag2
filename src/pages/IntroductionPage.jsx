"use client";

import Button from "@/components/button";
import Image from "next/image";
import mobilephone from "../../public/images/MobilePhonePP.png";
import mobilephone2 from "../../public/images/MobilePhonePPM2.png";

import apple from "../../public/images/appleLogo.png";
import andriod from "../../public/images/androidLogo.png";
import { useRouter } from "next/navigation";

const IntroductionPage = () => {
  const router = useRouter();
  return (
    <div
      style={{ position: "relative", height: "" }}
      className="app_bg_settings mt-20 md:mt-0 flex justify-start md:justify-center items-center flex-col h-[64rem] md:h-[50rem]"
    >
      <div className="w-[100%] flex flex-col md:flex-row mt-4 items-start justify-start">
        <div className="md:w-[50%] w-[100%] flex justify-center flex-col gap-7">
          <div className="flex flex-col items-start gap-4 ">
            <div className="text-[#0C0932] md:text-[50px] text-[30px] md:text-start text-center font-[700]">
              The simpler way to interact with any real estate you love
            </div>
            <div className="text-[#212121]  md:text-[24px] text-[16px] md:text-start text-center md:p-0 p-4">
              With Fragvest, you can easily & safely achieve your real estate
              goals - whether it’s to own, live in, or earn from a property.
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[30%] md:w-[183px]">
              <Button
                type="primary"
                label="Sign Up "
                action={() => alert("Button clicked!")}
                color="#0C0932"
                fontWeight="700"
                className="h-[42px] md:h-[64px] px-1 md:px-0 w-[100%] rounded-[50px]"
              />
            </div>
            <div className="w-[70%] md:w-[325px]">
              <Button
                type="outline"
                label="Download App "
                action={() =>
                  router.push(
                    "https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile&pli=1"
                  )
                }
                color="#0C0932"
                fontWeight="700"
                leftIcon1={apple}
                leftIcon2={andriod}
                iconWidth={24}
                iconHeight={24}
                className="h-[42px] md:h-[64px] w-[100%] rounded-[50px] flex gap-4"
              />
            </div>
          </div>
        </div>

        <div className="md:w-[50%] w-[100%] flex items-center justify-end">
          <div style={{ bottom: "0px", right: "0px" }} className="absolute">
            <Image
              style={{ width: "" }}
              className="hidden md:block"
              src={mobilephone}
              alt="right-arrow"
            />
            <Image
              style={{ width: "" }}
              src={mobilephone2}
              className="block md:hidden"
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;

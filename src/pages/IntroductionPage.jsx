'use client'

import Button from "@/components/button";
import Image from "next/image";
import mobilephone from "../../public/images/MobilePhone.png";
import apple from "../../public/images/appleLogo.png";
import andriod from "../../public/images/androidLogo.png";
import { Router } from "next/router";
import { useRouter } from "next/navigation";


const IntroductionPage = () => {
  const router = useRouter()
  return (
    <div style={{position: 'relative', height: '750px'}} className="allPadding flex justify-center flex-col items-center">
      <div className="w-[100%] md:w-[1200px] flex flex-col md:flex-row p-10 mt-4">
        <div  className="md:w-[50%] w-[100%] h-fit flex justify-center flex-col gap-7">
          <div className="flex flex-col items-start gap-4 ">
            <div className="text-[#0C0932]  md:text-[50px] text-[20px] md:text-start text-center font-[700]">
              The simpler way to interact with any real estate you love
            </div>
            <div className="text-[#212121]  md:text-[24px] text-[16px] md:text-start text-center md:p-0 p-4">
              With Fragvest, you can easily & safely achieve your real estate
              goals - whether it’s to own, live in, or earn from a property.
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <Button
              type="primary"
              label="Sign Up "
              action={() => alert("Button clicked!")}
              color="#0C0932"
              fontWeight="700"
              className="px-8 py-2.5 rounded-[50px]"
            /></div>
            <div>
            <Button
              type="outline"
              label="Download App "
              action={() => router.push('https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile&pli=1')}
              color="#0C0932" 
              fontWeight="700"
              leftIcon1={apple}
              leftIcon2={andriod}
              iconWidth={24}
              iconHeight={24}
              className="px-5 py-2.5 rounded-[50px] flex gap-4"
            />
            </div>
          </div>
        </div>
        <div  className="md:w-[50%] w-[100%] flex items-center justify-end">
          <div style={{position: 'absolute', bottom: '0px', right: '-50px'}}>
            <Image style={{width: ''}} src={mobilephone} alt="right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;

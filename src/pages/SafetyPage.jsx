import React from "react";

const SafetyPage = () => {
  return (
    <div className="flex justify-center items-center bg-[#0C0932] w-[100%]">
      <div className="w-[100%] mt-12 mb-12">
        <div className="md:w-[100%] w-[100%] h-fit flex justify-center">
          <div className="app_bg_settings flex flex-col items-center gap-4 ">
            <div className="text-[#FFFFFF] md:text-[50px] text-[35px] text-center font-[700]">
              Not Just Simpler, But Safer Real Estate
            </div>
            <div className="text-[#FFFFF080] text-[24px] text-center p-4">
              Learn about our commitment to legally securing your real estate
              assets, your funds and the personal information you entrust to us.{" "}
            </div>
            <div>
              <div
                className="text-[#07C168]"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#07C168",
                  textUnderlineOffset: "4px",
                }}
              >
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;

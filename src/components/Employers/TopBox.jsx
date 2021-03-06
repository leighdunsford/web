import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import WebBG from "./BgImg";
import MobBG from "./MobBgImage";
const TopBox = () => {
  const webSVGString = encodeURIComponent(renderToStaticMarkup(<WebBG />));
  const mobileSVGString = encodeURIComponent(renderToStaticMarkup(<MobBG />));
  return (
    <>
      {/* Desktop View */}
      <div
        className="hidden md:hidden mt-12 mx-2 container lg:flex items-center justify-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,${webSVGString}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px",
        }}
      >
        <div className="w-3/4 lg:mb-24">
          <p className="lg:text-6xl text-4xl font-bold text-center mb-8 lg:leading-normal">
            Improving the financial health of your employees starts today.
          </p>
          <div className="hidden md:flex md:flex-row justify-center items-center lg:mt-8 w-full">
            {/* <SecondaryButton text="Get Started" className="mr-8" /> */}
            {/* <PrimaryButton text="Schedule a Meeting" /> */}
            <a
              className="bg-primary hover:bg-primary-hover transition ease-in-out duration-200 text-white rounded-full flex items-center justify-center cursor-pointer w-72 py-4 font-bold text-xl"
              href="https://share.hsforms.com/1aNE14mmpSS-qlkPfrCPQ2wbnaqo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
      {/* iPad View */}
      <div
        className="hidden md:flex mt-12 mx-2 container lg:hidden items-center justify-center w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,${webSVGString}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <div className="w-3/4 md:mb-24">
          <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mb-8 lg:leading-relaxed">
            Improving the financial health of your employees starts today.
          </p>
          <div className="hidden md:flex md:flex-row justify-center items-center lg:mt-8 w-full">
            {/* <MobileSecondaryButton text="Get Started" className="mr-4" /> */}
            {/* <MobilePrimaryButton text="Schedule a Meeting" /> */}
            <a
              className="bg-primary hover:bg-primary-hover transition ease-in-out duration-200 text-white rounded-full  flex items-center justify-center cursor-pointer w-72 py-4 font-bold text-xl"
              href="https://share.hsforms.com/1aNE14mmpSS-qlkPfrCPQ2wbnaqo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className="flex md:hidden lg:hidden  container items-start justify-center "
        style={{
          backgroundImage: `url("data:image/svg+xml,${mobileSVGString}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "730px",
        }}
      >
        <div className="my-28">
          <p className="text-4xl font-bold text-center mb-12 lg:leading-relaxed px-4 leading-relaxed">
            Improving the financial health of your employees starts today.
          </p>
          <div className="flex flex-col justify-center items-center lg:mt-20 w-full">
            {/* <MobileSecondaryButton text="Get Started" className="mb-4" /> */}
            {/* <MobilePrimaryButton text="Schedule a Meeting" /> */}
            <a
              className="bg-primary hover:bg-primary-hover transition ease-in-out duration-200 text-white rounded-full  flex items-center justify-center cursor-pointer w-72 py-4 font-bold text-xl"
              href="https://share.hsforms.com/1aNE14mmpSS-qlkPfrCPQ2wbnaqo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBox;

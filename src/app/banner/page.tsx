import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
    <div className="w-full h-[700px] flex justify-center items-center relative">
      <div
        className="bg bg-center bg-cover w-full h-full"
        style={{ backgroundImage: `url('/images/banner-image.png')` }}
      ></div>
      <Image
        src="/images/line.png"
        alt="line"
        width={140}
        height={5}
        className="absolute top-[50%] left-[30%] px-2"
      />
      <div className="absolute w-[90%] h-full top-0 left-0 flex justify-center items-center">
      <div className=" w-full 2xl:max-w-[1680px] 2xl:mx-auto h-full top-0 justify-between mx-auto items-center left-0 flex">
        <div className=" max-w-sm  flex flex-col pl-18 gap-3">
          <h2 className="text-white text-4xl">Seasonal Specials</h2>
          <p className="text-white font-sans text-base">
            Behind every cup of our chai is a team of artisans who pour their
            heart and soul into creating the perfect brew. Our recipes are
            tried, tested, and perfected to bring you the finest chai
            experience.
          </p>
        </div>
        <div className="max-w-md flex  pl-20 flex-col gap-3">
          <h2 className="text-white text-8xl">Signature Blends</h2>
          <p className="text-white font-sans text-base">
            Behind every cup of our chai is a team of artisans who pour their
            heart and soul into creating the perfect brew. Our recipes are
            tried, tested, and perfected to bring you the finest chai
            experience.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BannerPage;

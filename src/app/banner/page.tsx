import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
    <div className="w-full lg:h-[500px] md:h-[350px] sm:h-[300px] xs:h-[220px] 2xs:h-[180px] h-[130px] xl:h-[700px] flex justify-center items-center">
      <div
        className="bg bg-center bg-cover w-full h-full"
        style={{ backgroundImage: `url('/images/banner-image.png')` }}
      ></div>
    </div>
  );
};

export default BannerPage;

"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const CollectionPage = () => {
  return (
    <div className="about-section w-full h-auto my-10 flex justify-center items-center">
      <div className="w-[90%] h-auto flex flex-col gap-10 items-center">
        <div className="content w-full flex flex-col gap-3 h-auto pl-25 justify-center">
          <h1 className="text-8xl font-normal leading-24 text-primary">
            Unveiling the Flavors of Tradition
          </h1>
          <div className="absolute top-20 gap-6 right-0 flex w-[50%]">
            <Image src="/images/icon.png" alt="icon" width={100} height={100} />
            <p className="text-base max-w-xl font-normal text-primary font-sans">
              From the aromatic spices of masala chai to the soothing comfort of
              green tea, we craft each cup with care to awaken your senses and
              warm your soul.
            </p>
          </div>
        </div>
        {/* <div className="content w-full flex h-auto justify-center items-end">
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={400}
            height={400}
            className="object-cover w-[90%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default CollectionPage;

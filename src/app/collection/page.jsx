"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const CollectionPage = () => {
  return (
    <div className="about-section w-full h-auto my-10 flex justify-center items-center">
      <div className="w-full h-auto flex gap-4 items-center">
        <div className="content w-1/2 flex flex-col gap-3 h-auto pl-25 justify-center">
          <h1 className="text-8xl font-normal leading-24 text-primary">
            Unveiling the Flavors of Tradition
          </h1>
          <div className="absolute top-20 right-0"></div>
          <p className="text-base max-w-xl font-normal text-primary font-sans">
            From the aromatic spices of masala chai to the soothing comfort of
            green tea, we craft each cup with care to awaken your senses and
            warm your soul.
          </p>
          
        </div>
        <div className="content w-1/2 flex h-auto justify-center items-end">
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={400}
            height={400}
            className="object-cover w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full h-screen flex justify-center relative items-center">
      <div
        className="hero-bg w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url('/images/hero-bg.png')` }}
      ></div>
      <div
        className="header w-full h-[100px] bg-cover bg-center absolute top-0 z-30 left-0"
        style={{ backgroundImage: `url('/images/navbar-bg.png')` }}
      >
        <Header/>
      </div>
      <div className="custom-gradient w-full h-screen absolute top-0 z-20 left-0"></div>
      <div className="hero-section w-full h-screen flex justify-center items-end absolute top-0 z-10 left-0">
        <div className="w-[90%] h-auto flex gap-4 items-center">
          <div className="content w-1/2 flex flex-col gap-3 mt-20 h-auto pl-5 justify-center">
            <h1 className="text-8xl font-normal leading-28 text-primary">
              Discover the Magic of Chai
            </h1>
            <p className="text-base max-w-xl font-normal text-primary font-sans">
              Welcome to [Your Brand Name], where every sip tells a story.
              Rooted in tradition and steeped in love, our chai blends are more
              than just a beverage—they're an experience.
            </p>
            <div className="py-4"><Button className="bg-secondary capitalize text-2xl py-6 px-8" >Try It Now</Button></div>
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
    </div>
  );
};

export default HeroPage;

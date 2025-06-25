import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full 2xl:h-screen h-screen sm:max-h-[1300px] max-sm:h-[1100px] max-xs:h-[1050px] max-2xs:h-[930px] xl:max-h-[777px] md:max-h-[600px] flex justify-center relative items-center">
      <div
        className="hero-bg w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url('/images/hero-bg.png')` }}
      ></div>
      <div
        className="header w-full h-[100px] bg-cover bg-center absolute top-0 z-30 left-0"
        style={{ backgroundImage: `url('/images/navbar-bg.png')` }}
      >
        <Header/>
      </div>
      <div className="custom-gradient w-full h-full absolute top-0 z-20 left-0"></div>
      <div className="hero-section w-full h-full flex  justify-center items-end absolute top-0 z-10 left-0">
        <div className="lg:w-[90%] w-[98%] h-auto flex gap-4 md:flex-row flex-col  2xl:items-center 2xl:justify-between items-end">
          <div className="content lg:w-1/2 w-full 2xl:max-w-3xl flex flex-col gap-3 mb-20 h-auto pl-0 justify-center">
            <h1 className="xl:text-8xl lg:text-7xl sm:text-6xl xs:text-5xl text-4xl leading-12 xs:leading-14 md:leading-20 sm:leading-16 lg:leading-24 font-normal xl:leading-28 text-primary">
              Discover the Magic of Chai
            </h1>
            <p className="lg:text-base max-w-xl 2xl:text-xl font-normal text-primary font-sans">
              Welcome to [Your Brand Name], where every sip tells a story.
              Rooted in tradition and steeped in love, our chai blends are more
              than just a beverage—theyre an experience.
            </p>
            <div className="py-4"><Button className="bg-secondary capitalize text-2xl py-6 px-8" >Try It Now</Button></div>
          </div>
          <div className="content lg:w-1/2 w-full  flex h-auto justify-center items-end">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={400}
              height={400}
              className="object-cover 2xl:w-[80%] w-[90%] sm:w-[80%] lg:w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

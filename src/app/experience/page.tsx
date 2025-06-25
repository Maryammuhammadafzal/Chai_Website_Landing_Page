"use client";
import Image from "next/image";
import React from "react";

const ExperiencePage = () => {
  const experience_data = [
    {
      image: "/images/card-image1.png",
      title: "Classic Masala Chai",
      description : ''
    },
    {
      image: "/images/card-image1.png",
      title: "Classic Masala Chai",
      description : ''
    },
    {
      image: "/images/card-image1.png",
      title: "Classic Masala Chai",
      description : ''
    },
  
  ];

  return (
    <div className="about-section w-full h-auto my-20 flex justify-center items-center">
      <div className="w-[90%] h-auto flex flex-col gap-10 items-center">
        <div className="content w-full flex flex-col gap-3 h-auto justify-center">
          <h1 className="text-8xl max-w-4xl font-normal leading-24 text-primary">
            The Chai Experience
          </h1>
          <p className="text-base max-w-xl font-normal text-primary font-sans">
            We believe in quality, sustainability, and authenticity. From
            sourcing ethically grown tea leaves to blending our spices with
            precision, we are committed to crafting chai that respects tradition
            and delights your taste buds.
          </p>
        </div>
        <div className="cards w-full h-auto max-w-6xl flex flex-wrap gap-32 justify-center items-center">
          {experience_data.map(({ title, image, description }, index) => (
            <div
              key={index}
              className={`card w-[350px] h-[450px] rounded-[20px] relative flex justify-center items-center ${
                index % 2 !== 0 ? "mt-40" : "mt-0"
              }`}
            >
              <Image
                src={image}
                alt="card-image"
                width={350}
                height={450}
                className="object-cover rounded-[20px] object-center w-full h-full"
              />
              <div className="w-[280px] h-[80px] bg-primary text-center flex flex-col justify-center items-center absolute rounded-[10px] -bottom-7">
                <h2 className="text-white text-2xl">{title}</h2>
                <p className="flex gap-2 items-center justify-evenly w-full">
                  <span className="text-xs text-secondary font-normal font-sans">
                    {flavour}
                  </span>
                  <hr className="border-dashed h-[1px] border-white w-[70px]" />{" "}
                  <span className="text-secondary text-xl font-normal">
                    {price}
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

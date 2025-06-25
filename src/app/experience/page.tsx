"use client";
import Image from "next/image";
import React from "react";

const ExperiencePage = () => {
  const experience_data = [
    {
      image: "/images/exp-image1.png",
      title: "Join Our Community",
      description:
        "At [Your Brand Name], chai isn’t just a drink—it’s a lifestyle. Join our chai-loving community and share your stories, recipes, and moments with us.",
    },
    {
      image: "/images/exp-image2.png",
      title: "Workshops & Tastings",
      description:
        "Discover the art of chai-making with our interactive workshops. Learn about the history, the science, and the magic behind each blend.",
    },
    {
      image: "/images/exp-image3.png",
      title: "Sustainable Practices",
      description:
        "We care for the planet as much as we care for your chai. From eco-friendly packaging to fair trade sourcing, we’re brewing a better future, one cup at a time.",
    },
  ];

  return (
    <div className="about-section w-full h-auto py-20 flex justify-center items-center">
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
        <div className="cards w-full h-auto flex flex-wrap gap-6 justify-evenly items-center">
          {experience_data.map(({ title, image, description }, index) => (
            <div
              key={index}
              className={`card w-[330px] text-center gap-2 h-auto flex-col flex items-center`}
            >
              <Image
                src={image}
                alt="card-image"
                width={55}
                height={55}
                className=""
              />
                <h2 className="text-primary text-2xl">{title}</h2>
                <p className="text-primary font-normal text-sm font-sans">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

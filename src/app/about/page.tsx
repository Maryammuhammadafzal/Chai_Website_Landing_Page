import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="hero-section w-full h-screen flex justify-center items-end absolute top-0 z-10 left-0">
      <div className="w-[90%] h-auto flex gap-4 items-end">
        <div className="content w-1/2 flex flex-col gap-3 mb-20 h-auto pl-5 justify-center">
          <h1 className="text-8xl font-normal leading-28 text-primary">
            Tradition in Every Sip
          </h1>
          <p className="text-base max-w-xl font-normal text-primary font-sans">
            Chai isn’t just tea; it’s a culture, a moment, and a memory. Whether
            it’s a morning pick-me-up or an evening indulgence, chai connects
            hearts and creates stories. Join us on a flavorful journey and
            explore the essence of authentic chai.
          </p>
          <div className="py-4 flex gap-3 items-center">
           <div className="flex flex-col justify-center"></div>
          </div>
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

export default AboutPage;

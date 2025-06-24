import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-section w-full h-auto my-10 flex justify-center items-center">
      <div className="w-full h-auto flex gap-4 items-center">
        <div className="content w-1/2 flex flex-col gap-3 h-auto pl-25 justify-center">
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
           <div className="flex w-auto h-auto flex-col justify-center items-center">
<h3 className="text-6xl text-primary">50+</h3>
<p className="text-secondary font-sans">Products</p>
           </div>
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

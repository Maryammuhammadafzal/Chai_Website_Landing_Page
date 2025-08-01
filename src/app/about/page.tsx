"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const AboutPage = () => {
  return (
    <div className="about-section 2xl:mx-auto 2xl:max-w-[1536px] w-full h-auto  my-16 md:my-10 flex justify-center items-center">
      <div className="w-full h-auto flex md:flex-row flex-col gap-4 items-center">
        <div className="content w-full md:w-1/2 flex flex-col gap-3 h-auto pl-8 sm:pl-15 lg:pl-25 justify-center">
          <h1 className="xl:text-8xl lg:text-7xl sm:text-6xl xs:text-5xl text-4xl leading-12 xs:leading-14 md:leading-20 sm:leading-16 lg:leading-24 font-normal xl:leading-28 text-primary">
            Tradition in Every Sip
          </h1>
          <p className="lg:text-base text-sm max-w-xl font-normal text-primary font-sans">
            Chai isn’t just tea; it’s a culture, a moment, and a memory. Whether
            it’s a morning pick-me-up or an evening indulgence, chai connects
            hearts and creates stories. Join us on a flavorful journey and
            explore the essence of authentic chai.
          </p>
          <div className="py-10 flex sm:gap-12 xs:gap-8 gap-5 items-center">
            <div className="flex w-auto h-auto flex-col justify-center items-center">
              <h3 className="lg:text-6xl sm:text-5xl xs:text-4xl 2xs:text-3xl text-2xl text-primary leading-12 text-center">
                <CountUp end={50} duration={7} />+
              </h3>
              <p className="text-secondary font-sans">Products</p>
            </div>
            <div className="flex w-auto h-auto flex-col justify-center items-center">
              <h3 className="lg:text-6xl sm:text-5xl xs:text-4xl 2xs:text-3xl text-2xl text-primary leading-12 text-center">
                <CountUp end={1000} duration={3} />+
              </h3>
              <p className="text-secondary font-sans">Customers</p>
            </div>
            <div className="flex w-auto h-auto flex-col justify-center items-center">
              <h3 className="lg:text-6xl sm:text-5xl xs:text-4xl 2xs:text-3xl text-2xl text-primary leading-12 text-center">
                <CountUp end={5} duration={10} />+
              </h3>
              <p className="text-secondary font-sans">Franchises</p>
            </div>
          </div>
        </div>
        <div className="content w-full md:w-1/2 flex h-auto justify-end items-end">
          <Image
            src="/images/about-image.png"
            alt="about-image"
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

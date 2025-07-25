"use client";
import Image from "next/image";
import React from "react";


const CollectionPage = () => {

  const collections_data = [ 
    {
      image : '/images/card-image1.png',
      title : 'Classic Masala Chai',
      flavour : 'Masala Flavour',
      price : '$100'
    },
    {
      image : '/images/card-image2.png',
      title : 'Ginger Chai',
      flavour : 'Ginger Flavour',
      price : '$100'
    },
    {
      image : '/images/card-image3.png',
      title : 'Cardamom Chai',
      flavour : 'cardamom Flavour',
      price : '$100'
    },
    {
      image : '/images/card-image4.png',
      title : 'Herbal Infusions',
      flavour : 'herbal Flavour',
      price : '$100'
    },
  ]

  return (
    <div className="about-section 2xl:max-w-[1536px] 2xl:mx-auto w-full h-auto my-20 flex justify-center items-center">
      <div className="w-[90%] h-auto flex flex-col gap-10 items-center">
        <div className="content w-full flex flex-col gap-3 relative h-auto justify-center">
          <h1 className="xl:text-8xl lg:text-7xl sm:text-6xl lg:max-w-4xl w-full xs:text-5xl text-4xl leading-12 xs:leading-14 md:leading-20 sm:leading-16 lg:leading-24 font-normal xl:leading-28 text-primary">
            Unveiling the Flavors of Tradition
          </h1>
          <div className="lg:absolute top-20 gap-6 lg:left-[38%] left-[30%] flex flex-row items-center w-[50%]">
            <Image src="/images/icon.png" alt="icon" width={130} height={100} />
            <p className="text-base max-sm:max-w-sm max-w-xl max-lg:min-w-sm font-normal text-primary font-sans">
              From the aromatic spices of masala chai to the soothing comfort of
              green tea, we craft each cup with care to awaken your senses and
              warm your soul.
            </p>
          </div>
        </div>
        <div className="cards w-full h-auto max-w-6xl flex flex-wrap gap-32 justify-center items-center">
          {collections_data.map(({title , image, price , flavour} , index)=> (
            <div key={index} className={`card w-[350px] h-[450px] rounded-[20px] relative flex justify-center items-center ${index%2 !== 0 ? 'lg:mt-40' : 'mt-0'}`}>
            <Image src={image} alt="card-image" width={350} height={450} className="object-cover rounded-[20px] object-center w-full h-full" />
            <div className="w-[280px] h-[80px] bg-primary text-center flex flex-col justify-center items-center absolute rounded-[10px] -bottom-7">
              <h2 className="text-white text-2xl">{title}</h2>
              <p className="flex gap-2 items-center justify-evenly w-full"><span className="text-xs text-secondary font-normal font-sans">{flavour}</span><span className="border-dashed h-[1px] border-white w-[70px]" ></span> <span className="text-secondary text-xl font-normal">{price}</span> </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

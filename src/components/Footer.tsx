
import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center 2xl:max-w-[1536px] 2xl:mx-auto items-center pb-10 pt-20">
      <div className="w-[90%] h-auto flex flex-col gap-3 justify-center items-center">
        <div className="heading w-full h-auto">
          <h2 className="xl:text-8xl lg:text-7xl sm:text-6xl xs:text-5xl text-4xl leading-12 xs:leading-14 md:leading-20 sm:leading-16 lg:leading-24 font-normal xl:leading-28 text-primary">Let’s Brew a Connection</h2>
        </div>
        <div className="flex flex-col sm:flex-row  gap-6 justify-between h-auto w-full items-start">
          <div className="sm:w-[60%] w-full flex flex-col gap-6">
            <p className="font-sans text-primary font-normal text-sm md:text-base">
              Got a question, a suggestion, or just want to say hello? We’d love
              to hear from you!
            </p>
            <div className="info flex flex-col md:text-base text-sm py-3 gap-4 ">
              <div className="flex gap-1">
                <span className="text-primary font-sans font-bold">
                  📧 Email:
                </span>
                <span className="font-sans font-normal text-primary">
                  info@[yourbrandname].com
                </span>
              </div>
              <div className="flex gap-1">
                <span className="text-primary font-sans font-bold">
                  📞 Phone:
                </span>
                <span className="font-sans font-normal text-primary">
                  +1-234-567-890
                </span>
              </div>
              <div className="flex gap-1">
                <span className="text-primary font-sans font-bold">
                  📍 Address:
                </span>
                <span className="font-sans font-normal text-primary">
                  123 Chai Street, Flavor Town, USA
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-primary text-4xl lg:text-5xl">Stay in Touch</h2>
              <p className="text-sm max-w-md text-primary font-sans">
                Follow us on social media and subscribe to our newsletter for
                updates, offers, and chai inspiration.
              </p>
               <div className="social-links text-secondary text-2xl flex gap-4">
              <FaFacebook />
              <FaXTwitter />
              <FaLinkedin />
              <FaInstagramSquare />
              <FaWhatsapp />
            </div>
            </div>
          </div>
          <div
            className="footer-bg sm:w-[40%] w-full h-[450px] 2xl:bg-contain bg-no-repeat  bg-center bg-cover"
            style={{ backgroundImage: `url('/images/footer-image.png')` }}
          >
            {/* <Image
              src="/images/footer-image.png"
              alt="iamge"
              width={550}
              height={550}
              className="h-auto w-auto"
            /> */}
          </div>
        </div>
        <div className="copyright w-full text-center pt-2 flex justify-center items-center">
          <p className="md:text-base text-sm font-sans text-primary">
            © 2021 all copyright reserved. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

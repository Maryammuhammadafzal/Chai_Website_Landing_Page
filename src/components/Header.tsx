
import Link from "next/link";
import React from "react";

const Header = () => {
  const nav_data = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Chai Collection",
      link: "/collection",
    },
    {
      name: "Chai Experience",
      link: "/experience",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-auto lg:w-[90%] w-full lg:px-0 px-3 flex justify-between gap-3 items-center">
        <Link href="/">
          <h2 className="text-3xl">
            <span className="text-white">Chai</span>{" "}
            <span className="text-secondary">Logo</span>
          </h2>
        </Link>

        <nav className="nav flex w-auto justify-center items-center h-auto">
          <ul className="md:flex hidden justify-center xl:gap-10 lg:gap-7 gap-5 items-center">
            {nav_data.map(({ name, link } , index) => (
              <li key={index} className="text-white font-sans font-light">
                <Link
                  href={link}
                  className="focus:text-secondary focus:font-semibold active:text-secondary  active:font-semibold hover:text-secondary hover:font-semibold"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

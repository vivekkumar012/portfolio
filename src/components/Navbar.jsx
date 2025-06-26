import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="bg-yellow-theme-nav-bg h-[80px] flex items-center justify-between px-5 sticky top-0 z-50 ">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-yellow-theme-main cursor-pointer">
          <FaReact size={30} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none items-center space-x-6">
        {data.map((item, key) => (
          <li key={key} className="group text-[1.6rem] leading-[40px] relative">
            <Link to={item.to} className="text-yellow-theme-main-link no-underline p-2">
              {item.label}
            </Link>
            <span className="block h-[3px] w-0 bg-transparent transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-yellow-theme-main absolute bottom-0 left-0"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div
        className="md:hidden block cursor-pointer text-yellow-theme-main"
        onClick={handleToggleIcon}
      >
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col justify-center items-center w-full bg-[#181818] absolute top-[80px] left-0 transition-all duration-500 ease-in-out z-40 ${
          toggleIcon ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {data.map((item, key) => (
          <li
            key={key}
            className="border-b border-[#282828] w-full text-center py-5"
            onClick={() => setToggleIcon(false)}
          >
            <Link to={item.to} className="text-yellow-theme-main text-[1.6rem] no-underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

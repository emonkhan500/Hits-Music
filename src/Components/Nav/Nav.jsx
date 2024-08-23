import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <nav className="flex fonts items-center justify-between bg-black px-2 lg:px-24 text-white">
      <div className="flex items-center cursor-pointer rounded-2xl text-xl font-semibold text-white">
        <img
          className="w-32 transition-all duration-200 hover:scale-110 scale-100"
          src="https://i.ibb.co/jVZw5cJ/logo-1.png"
          alt=""
        />
        <div className="relative ml-2 lg:ml-28 flex items-center">
          <IoIosSearch className="absolute left-3 text-gray-400" />
          <input
            placeholder="Search  !"
            className="rounded-lg bg-[#D9D9D933] lg:px-12 py-2 pl-10 w-48 md:w-52 lg:w-full"
            type="text"
          />
        </div>
      </div>

      <ul className="hidden items-center justify-between gap-5 lg:gap-10 md:flex">
        <li className="group  cursor-pointer ">
          Explore <IoIosArrowDown className="inline"/>
          
        </li>
        <li className="group  cursor-pointer ">
          Creator Tools <IoIosArrowDown className="inline"/>
          
        </li>
        <li className="group  cursor-pointer ">
          Sign In
          
        </li>
        <li className="group  cursor-pointer ">
          Sign Up
          
        </li>
        <li className="bg-[#F48C06] px-4 rounded-lg text-black group py-2 cursor-pointer ">
          Explore
          
        </li>
        
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className="z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
            <li className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">
              Explore
            </li>
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
              Creator Tools
            </li>
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
              Sign In
            </li>
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-sky-600">
              Sign Up
            </li>
            <li className="bg-[#F48C06] px-4 rounded-lg text-black cursor-pointer py-2 hover:bg-sky-600">
              Explore
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;

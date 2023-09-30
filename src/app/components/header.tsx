"use client";

import Image from "next/image";
import logo from "@/assets/images/frans_hals_museum_logo_before_after_a.png";
import { IoTicketOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => {
    setOpenMenu(false);
  });

  return (
    <div className="bg-primaryColor-100">
      <div className="flex justify-between items-center px-7 pt-3">
        <div
          className={`flex justify-center items-center font-bold rounded-2xl border-2 text-4xl ${
            openMenu ? "mt-6 w-28 h-28" : "w-20 h-12"
          } border-[#c2b370] transition-all ease-linear hover:border-slate-800`}
        >
          {!openMenu && (
            <button onClick={() => setOpenMenu(true)} className="pl-6">
              <IoMdArrowDropdown />
            </button>
          )}
          {openMenu && (
            <div className="" ref={wrapperRef}>
              <ul className="flex flex-col justify-center items-center list-none text-sm font-semibold text-center">
                <li>English</li>
                <li>Netherland</li>
                <li>Detuch</li>
                <li>France</li>
              </ul>
            </div>
          )}
        </div>
        <p className="lg:hidden">
          <Image
            src={logo}
            width={150}
            height={100}
            alt="logo"
            className="overflow-hidden object-cover"
          />
        </p>
        <div className="hidden lg:block">
          <ul className="flex justify-end lg:justify-between gap-10 xl:gap-16 list-none font-primaryFont items-center mr-4">
            <li className="">Visit</li>
            <li className="text-center">Arts and News</li>
            <li className="">
              <Image
                src={logo}
                width={150}
                height={100}
                alt="logo"
                className="overflow-hidden object-cover"
              />
            </li>
            <li className="">ABOUT</li>
            <li className="">SUPPORT</li>
          </ul>
        </div>
        <div className="hidden rounded-full lg:flex items-center bg-slate-900 gap-3 px-8 py-2">
          <div className="text-primaryColor-100 text-2xl font-extrabold">
            <IoTicketOutline />
          </div>
          <div className="text-base xl:text-lg font-primaryFont font-bold text-primaryColor-100 ">
            Buy ticket
          </div>
        </div>
      </div>
      <div className="text-center text-3xl lg:text-9xl font-secondaryFont pt-8 bg-primaryColor-100">
        <div>
          <p>ONE MUSEUM</p>
        </div>
        <div>
          <p>TWO LOCATIONS</p>
        </div>
      </div>
      <div className="lg:rounded-r-2xl z-20 fixed bottom-0 lg:bottom-1/3 lg:top-56 bg-[#231f20] w-full lg:w-16 my-auto h-16 lg:h-80">
        <ul className="flex text-primaryColor-100 mt-5 px-4 lg:px-0 flex-row lg:flex-col justify-between gap-8 text-3xl items-center">
          <li className="hover:font-bold hover:scale-110">
            <IoTicketOutline />
            <p className="hidden">buy ticket</p>
          </li>
          <li className="hover:font-bold hover:scale-110">
            <AiOutlineCalendar />
            <p className="hidden">view calender</p>
          </li>
          <li className="hover:font-bold hover:scale-110">
            <AiOutlineSearch />
            <p className="hidden">search</p>
          </li>
          <li className="hover:font-bold hover:scale-110">
            <CiLocationOn />
            <p className="hidden">view location</p>
          </li>
          <li className="hover:font-bold hover:scale-110">
            <AiOutlineClockCircle />
            <p className="hidden">opening hours</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

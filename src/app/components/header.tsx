"use client";

import Image from "next/image";
import logo from "@/assets/images/frans_hals_museum_logo_before_after_a.png";
import { IoTicketOutline } from "react-icons/io5";
import {IoMdArrowDropdown} from "react-icons/io"
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import { useState } from "react";

const Header = () => {
  const [openMenu, SetOpenMenu] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between items-center px-7 pt-3 w-full bg-primaryColor-100 ">
        <div className={`font-bold mr-32 rounded-2xl border-2 text-4xl ${openMenu ? "mt-6 w-32 h-32" : "w-20 h-12"} border-[#c2b370] transition-all ease-linear hover:border-slate-800`}>
          {!openMenu && (
            <button
              onClick={() => SetOpenMenu(true)}
              className="pl-8"
            >
             <IoMdArrowDropdown/>
            </button>
          )}
          {openMenu && (
            <div className="">
              <button onMouseLeave={() => SetOpenMenu(false)} onClick={() => SetOpenMenu(false)} className="font-thin text-2xl px-2" >X</button>
              <ul className="list-none text-sm font-semibold text-center">
                <li>English</li>
                <li>Netherland</li>
                <li>Detuch</li>
                <li>France</li>
              </ul>
            </div>
          )}
        </div>
        <div className="">
          <ul className="flex justify-between gap-16 list-none font-primaryFont items-center">
            <li className="hidden lg:block">Visit</li>
            <li className="hidden lg:block">Arts and News</li>
            <li className="">
              <Image
                src={logo}
                width={150}
                height={100}
                alt="logo"
                className="overflow-hidden"
              />
            </li>
            <li className="hidden lg:block">ABOUT</li>
            <li className="hidden lg:block">SUPPORT</li>
          </ul>
        </div>
        <div className="hidden rounded-full lg:flex bg-slate-900 gap-3 px-10 py-2">
          <div className="text-primaryColor-100 text-2xl font-extrabold">
            <IoTicketOutline />
          </div>
          <div className="text-lg font-primaryFont font-bold text-primaryColor-100 ">
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

import React from "react";
import FormSection from "../home/FormSection";
import { PiChurchLight } from "react-icons/pi";
import {FiFacebook, FiTwitter, FiInstagram, FiLinkedin} from "react-icons/fi"


const Footer = () => {
  return (
    <div className="w-full h-40 bg-primaryColor-200 font-primaryFont">
      <div className="hidden lg:flex flex-col items-center">
        <p className="border-2 border-slate-900 bg-primaryColor-200 rounded-full mt-[-30px] px-12 py-4">
          Countries
        </p>
      </div>
      <div className="flex flex-col pb-12 lg:pb-0 lg:flex-row lg:items-center lg:justify-evenly bg-primaryColor-200">
        <div className="bg-primaryColor-200">
          <FormSection />
        </div>
        <div className=" flex gap-10 justify-center items-center font-primaryFont bg-primaryColor-200">
          <div className="text-7xl flex flex-col items-center gap-2">
            <PiChurchLight />
            <p className="font-primaryFont font-bold text-sm lg:text-xl ">HOF</p>
            <p className="text-sm lg:text-xl text-center">Groot Heigland 62</p>
          </div>
          <div className="text-7xl flex flex-col items-center gap-2">
            <PiChurchLight />
            <p className="font-primaryFont font-bold text-sm lg:text-xl ">HOF</p>
            <p className="text-sm lg:text-xl text-center">Groot Heigland 62</p>
          </div>
        </div>
      </div>
      <div className="flex pb-32 lg:pb-14 border-y-2 border-slate-800 lg:border-none lg:pt-0 gap-8 flex-col lg:flex-row justify-center lg:justify-between bg-primaryColor-200  lg:px-32 ">
        <div className="flex pt-12 lg:pt-0 flex-col-reverse lg:flex-row gap-4 lg:gap-48">
          <ul className="flex justify-evenly text-sm lg:text-base items-center pt-4 px-16 lg:pt-0 lg:px-0 lg:gap-8 list-none">
            <li className="text-2xl"><FiFacebook/></li>
            <li className="text-2xl"><FiLinkedin/></li>
            <li className="text-2xl"><FiTwitter/></li>
            <li className="text-2xl"><FiInstagram/></li>
          </ul>

          <ul className="flex  flex-wrap justify-evenly px-4 lg:px-0 text-sm lg:text-base items-center lg:gap-8 list-none transition-all ease-linear">
            <li className=" hover:border-b-slate-950 hover:outline-none hover:border-b-2">
              About
            </li>
            <li className=" hover:border-b-slate-950 hover:outline-none hover:border-b-2">
              FAQ
            </li>
            <li className=" hover:border-b-slate-950 hover:outline-none hover:border-b-2">
              Contact
            </li>
            <li className=" hover:border-b-slate-950 hover:outline-none hover:border-b-2">
              Colophon
            </li>
            <li className=" hover:border-b-slate-950 hover:outline-none hover:border-b-2">
              Terms
            </li>
          </ul>
        </div>
        <ul className="flex justify-evenly items-center gap-4 lg:gap-8 pt-12 lg:pt-0 border-t-2 border-slate-800 lg:border-none list-none">
          <li className="font-secondaryFont text-xl" >Hera</li>
          <li className="font-secondaryFont text-xl">Verigo</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

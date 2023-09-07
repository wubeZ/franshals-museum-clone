import Image from "next/image";
import React from "react";
import { PiChurchLight } from "react-icons/pi";
import CardImage from "@/assets/images/birmingham-museums.jpg";
import ImageOne from '@/assets/images/biel-morro.jpg'

const ImageSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row max-h-screen font-secondaryFont">
        <div className="w-full h-[600px] lg:min-h-screen overflow-hidden">
          <Image src={ImageOne} alt="imageOne" className="object-fill"/>
        </div>
        <div className="w-full overflow-y-scroll">
          <div className="lg:min-h-screen w-full bg-others-100">
            <div className="pt-4 pb-4 lg:pt-24">
              <p className="text-center text-5xl lg:text-8xl">LOCATIONS</p>
              <div className="flex gap-20 pt-6 lg:pt-20 justify-center">
                <div className="text-7xl flex flex-col items-center gap-2">
                  <PiChurchLight />
                  <p className="font-primaryFont font-bold text-sm lg:text-xl ">
                    HOF
                  </p>
                  <p className="text-sm lg:text-xl text-center">
                    Groot Heigland 62
                  </p>
                </div>
                <div className="text-7xl flex flex-col items-center gap-2">
                  <PiChurchLight />
                  <p className="font-primaryFont font-bold text-sm lg:text-xl ">
                    HOF
                  </p>
                  <p className="text-sm lg:text-xl text-center">
                    Groot Heigland 62
                  </p>
                </div>
              </div>
              <p className="text-center pt-6 lg:pt-16 text-2xl">
                One Museum two locations
              </p>
              <p className="text-center text-xl py-4 lg:py-8 px-8">Welcome to the Frans Hals Museum - The art museum of Haarlem - With art from the 16th and 17th centuries, modern and new art and a stimulating mix of both.</p>
              <p className="text-center text-xl underline">About our buildings</p>
            </div>
          </div>
          <div className="lg:min-h-screen w-full bg-others-200">
            <div className="pt-4 lg:pt-24">
              <p className="text-center text-5xl lg:text-8xl">NEWS</p>
              <p className="underline pt-2 lg:pt-10 text-xl text-center">Explore museum highlights and more</p>
              <div className="flex items-center justify-center gap-24 pt-10 lg:pt-28 pb-10 lg:pb-28 px-16 font-primaryFont ">
                  <div className="space-y-6 pr-12 border-r-2 border-r-slate-800">
                    <Image src={CardImage} width={100} height={200} alt="image" className="hover:border-none border-[16px] border-[#f8a04e] transition-all ease-linear"/>
                    <p className="text-center text-lg">News 12th December 2022</p>
                    <p className="text-center text-lg">Frans Hals symposium</p>
                  </div>
                  <div className="space-y-6">
                  <Image src={CardImage} width={200} height={250} alt="image" className="hover:border-none border-[16px] border-[#f8a04e] transition-all ease-linear"/>
                  <p className="text-center text-lg">News 12th December 2022</p>
                  <p className="text-center text-lg">Frans Hals symposium</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;

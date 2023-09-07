import HomeCard from "../components/homeCard";
import { AiOutlineCalendar } from "react-icons/ai";
import ImageSection from "./ImageSection";

const HomePage = () => {
  const data: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="w-full bg-primaryColor-300 ">
      <div className="text-center font-secondaryFont text-4xl pt-28">
        <p>WHAT&apos;S ON</p>
      </div>
      <div className="overflow-hidden">
        <div className="w-auto flex flex-nowrap px-10 touch-pan-y gap-10 pt-12 animate-infinite-scroll cursor-grab hover:animate-pause scroll-smooth transition-all ease-linear">
          {new Array(8)
            .fill(0)
            .map((items, index) => [<HomeCard key={index} />])}
        </div>
      </div>
      <div className="flex justify-center py-24 ">
        <div className="flex gap-4 items-center rounded-3xl bg-slate-950 text-primaryColor-100 w-56 text-center px-8 py-2">
          <p className="text-3xl">
            <AiOutlineCalendar />
          </p>
          <p className="">view all events</p>
        </div>
      </div>
      <div>
        <ImageSection />
      </div>
    </div>
  );
};

export default HomePage;

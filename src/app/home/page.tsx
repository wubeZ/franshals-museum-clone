import HomeCard from "../components/homeCard";
import { AiOutlineCalendar } from "react-icons/ai";
import ImageSection from "./ImageSection";
import { CardProps } from "@/lib/types";

import picture1 from "@/assets/images/birmingham-museums.jpg";
import picture2 from "@/assets/images/birmingham-museums-trust-5ruS8plfbvM-unsplash.jpg";
import picture3 from "@/assets/images/birmingham-museums-trust-BqaF65lS6E4-unsplash.jpg";
import picture4 from "@/assets/images/birmingham-museums-trust-e0wBK0xJXYQ-unsplash.jpg";
import picture5 from "@/assets/images/birmingham-museums-trust-v15kmerLWcA-unsplash.jpg";
import picture6 from "@/assets/images/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg";
import picture7 from "@/assets/images/boston-public-library-YoK5pBcSY8s-unsplash.jpg";
import picture8 from "@/assets/images/boston-public-library-_f9cP4_unmg-unsplash.jpg";

const HomePage = () => {
  const data: CardProps[] = [
    {
      cardImage: picture1,
      activity: "Outdoor Adventure",
      topic: "Nature Exploration",
      description:
        "Embark on an exciting outdoor adventure and discover the wonders of nature through guided hikes and wildlife spotting.",
    },
    {
      cardImage: picture2,
      activity: "Interactive Workshops",
      topic: "Science Fun",
      description:
        "Engage in hands-on workshops and experiments that delve into the fascinating world of science and ignite curiosity.",
    },
    {
      cardImage: picture3,
      activity: "Creative Arts",
      topic: "Artistic Expression",
      description:
        "Unleash your creativity through art workshops, where you can learn various techniques and create your own masterpieces.",
    },
    {
      cardImage: picture4,
      activity: "Sports and Recreation",
      topic: "Active Lifestyle",
      description:
        "Participate in fun sports activities and games that promote physical fitness and encourage a healthy and active lifestyle.",
    },
    {
      cardImage: picture5,
      activity: "Culinary Adventures",
      topic: "Food Exploration",
      description:
        "Embark on a culinary journey and learn about different cuisines through cooking classes and food tastings.",
    },
    {
      cardImage: picture6,
      activity: "Music and Dance",
      topic: "Rhythmic Beats",
      description:
        "Immerse yourself in the world of music and dance with interactive sessions and performances that get you moving to the rhythm.",
    },
    {
      cardImage: picture7,
      activity: "Historical Treasures",
      topic: "Time Travel",
      description:
        "Discover the rich history and heritage of the museum's artifacts through guided tours and storytelling sessions.",
    },
    {
      cardImage: picture8,
      activity: "Tech and Innovation",
      topic: "Future Technologies",
      description:
        "Experience the latest in technology and innovation with interactive exhibits and demonstrations showcasing cutting-edge advancements.",
    },
  ];

  return (
    <div className="w-full bg-primaryColor-300 ">
      <div className="text-center font-secondaryFont text-4xl pt-28">
        <p>WHAT&apos;S ON</p>
      </div>
      <div className="overflow-hidden">
        <div className="w-auto flex flex-nowrap px-10 touch-pan-y gap-10 pt-12 animate-infinite-scroll cursor-grab hover:animate-pause scroll-smooth transition-all ease-linear">
          {data.map((items, index) => [<HomeCard key={index} {...items} />])}
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

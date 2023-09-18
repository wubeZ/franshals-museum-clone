import { IoTicketOutline } from "react-icons/io5";
import Image from "next/image";
import {CardProps} from "@/lib/types"

const HomeCard = ({cardImage, activity, topic , description}: CardProps) => {
  return (
    <div className="flex flex-col">
      <Image
        src={cardImage}
        width={460}
        height={50}
        alt="image"
        className="w-[460px] h-[460px] hover:border-[16px] hover:border-yellow-400 transition-all ease-linear object-cover"
      />
      <div className="rounded-full relative top-[-30px] ml-[440px] w-12 h-12 bg-black text-primaryColor-100">
        <span className="text-3xl flex justify-center items-center pt-2 hover:scale-110">
          <IoTicketOutline />
        </span>
      </div>
      <div className="text-center flex flex-col items-center font-primaryFont pr-8 space-y-5">
        <p className="font-normal">{activity}</p>
        <p className="font-bold text-xl">{topic}</p>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;

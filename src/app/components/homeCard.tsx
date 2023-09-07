import { IoTicketOutline } from "react-icons/io5";
import CardImage from "@/assets/images/birmingham-museums.jpg";
import Image from "next/image";

const HomeCard = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={CardImage}
        width={460}
        height={50}
        alt="image"
        className="w-[460px] h-[460px] hover:border-[16px] hover:border-yellow-400 transition-all ease-linear object-fit"
      />
      <div className="rounded-full relative top-[-30px] ml-[440px] w-12 h-12 bg-black text-primaryColor-100">
        <span className="text-3xl flex justify-center items-center pt-2 hover:scale-110">
          <IoTicketOutline />
        </span>
      </div>
      <div className="text-center font-primaryFont space-y-5">
        <p className="font-normal">ACTIVITY</p>
        <p className="font-bold text-xl">Draw a colorfull Portrait</p>
        <p>Get Creative at Frans Hals Museum</p>
      </div>
    </div>
  );
};

export default HomeCard;

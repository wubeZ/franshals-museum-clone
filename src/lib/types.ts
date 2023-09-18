import { StaticImageData } from "next/image";


export interface CardProps {
    cardImage: StaticImageData,
    activity: string,
    topic: string,
    description: string
  }
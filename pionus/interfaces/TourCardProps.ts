import { StaticImageData } from "next/image";

export interface TourCardProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string | StaticImageData;
  groupSize: string;
  verified?: boolean;
}

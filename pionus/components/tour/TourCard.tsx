//import Image from "next/image";
import AppImage from "../common/AppImage";
import { TourCardProps } from "@/interfaces/TourCardProps";
import { Calendar, MapPin, Users, Verified } from "lucide-react";
import Button from "../common/Button";
import Link from "next/link";

function TourCard({
  id,
  title,
  location,
  duration,
  price,
  image,
  groupSize,
  verified = true,
}: TourCardProps) {
  return (
    <section className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={title}
          fill
          loading="lazy"
          //   sizes="(max-width: 768px) 100vw,
          //  (max-width: 1024px) 50vw,
          //  33vw"
          variant="card"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {verified && (
          <div className="absolute top-4 right-4">
            <Verified className="text-green-600" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-merino-950">{title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-merino-600">
            <MapPin />
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-merino-600">
            <Calendar />
            <span className="text-sm">{duration}</span>
          </div>

          <div className="flex items-center gap-2 text-merino-600">
            <Users />
            <span className="text-sm">{groupSize}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-merino-200">
          <div>
            <p className="text-sm text-merino-600">From</p>
            <p className="text-merino-950">${price}</p>
          </div>
        </div>
        <Button variant="primary" size="sm" className="rounded-lg">
          <Link href={`/tours/${id}`}>View Tour</Link>
        </Button>
      </div>
    </section>
  );
}

export default TourCard;

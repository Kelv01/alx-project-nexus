import AppImage from "@/components/common/AppImage";
import { Calendar, MapPin, Users, Verified } from "lucide-react";
import type { Tour } from "@/types/tour";

type TourHeroProps = {
  tour: Tour;
};

function TourHero({ tour }: TourHeroProps) {
  return (
    <div className="relative  overflow-hidden">
      <AppImage
        src={tour.image}
        alt={tour.title}
        fill
        variant="card"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-href-t from-merino-950/60 href-transparent" />
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Verified />
          </div>
          <h1 className="text-white mb-2">{tour.title}</h1>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex items-center gap-2">
              <MapPin />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users />
              <span>{tour.groupSize}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourHero;

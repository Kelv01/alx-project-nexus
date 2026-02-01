import React, { useMemo, useState } from "react";
import TourCard from "./components/TourCard";
import { FilterSidebar } from "./components/FilterSidebar";

import { getAllTours } from "../../lib/api/tours";
import { GetStaticProps } from "next";

import type { Tour } from "@/types/tour";

type Props = {
  tours: Tour[];
};

function ToursListingPage({ tours }: Props) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const locationMatch =
        selectedLocations.length === 0 ||
        selectedLocations.includes(tour.location);

      const durationMatch =
        selectedDurations.length === 0 ||
        selectedDurations.includes(tour.duration);

      const priceMatch =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];

      return locationMatch && durationMatch && priceMatch;
    });
  }, [tours, selectedLocations, selectedDurations, priceRange]);

  // if (true) {
  //   throw new Error("Testing Error Boundary");
  // }

  return (
    <div className="min-h-screen bg-merino-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-merino-950 text-4xl">Safari Tours</h1>
          <p className="text-merino-700">
            Discover verified safari experiences across East Africa
          </p>
        </div>

        <div className="flex gap-8">
          {/* tour filters section */}
          <div className="hidden lg:block w-80 `flex-shrink-0`">
            <FilterSidebar
              selectedLocation={selectedLocations}
              onLocationChange={setSelectedLocations}
              duration={selectedDurations}
              onDurationChange={setSelectedDurations}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>

          {/* grid tours section*/}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-merino-700">
                Showing{" "}
                <span className="text-merino-900">
                  {filteredTours.length} tours
                </span>
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-lg ${
                    viewMode === "grid"
                      ? "bg-merino-600 text-white"
                      : "bg-white text-merino-700 hover:bg-merino-50"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-lg ${
                    viewMode === "list"
                      ? "bg-merino-600 text-white"
                      : "bg-white text-merino-700 hover:bg-merino-50"
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {filteredTours.length === 0 && (
              <p className="text-merino-600 text-2xl text-center py-8">
                No tours match your selected filters
              </p>
            )}

            <div
              className={
                viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-6"
              }
            >
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tours = await getAllTours();

  return {
    props: {
      tours,
    },
  };
};

export default ToursListingPage;

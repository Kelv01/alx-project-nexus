import React, { useState } from "react";
import TourCard from "../../components/ui/tour/TourCard";
import { FilterSidebar } from "../../components/ui/tour/FilterSidebar";
import { tours } from "../../data/tours";

function ToursListingPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
          {/* Filters */}
          <div className="hidden lg:block w-80 `flex-shrink-0`">
            <FilterSidebar />
          </div>

          {/* Tours Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-merino-700">
                Showing{" "}
                <span className="text-merino-900">{tours.length} tours</span>
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

            <div
              className={
                viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-6"
              }
            >
              {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToursListingPage;

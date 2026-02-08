import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Button from "../../../components/common/Button";

type Props = {
  selectedLocation: string[];
  onLocationChange: (locations: string[]) => void;
  duration: string[];
  onDurationChange: (durations: string[]) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
};

function FilterSidebar({
  selectedLocation,
  onLocationChange,
  duration,
  onDurationChange,
  priceRange,
  onPriceChange,
}: Props) {
  const locations = ["Kenya", "Tanzania", "Uganda", "Rwanda", "Botswana"];
  const durations = ["3-7 days", "7-9 days", "10-13 days", "14+ days"];

  const toggleLocation = (loc: string) => {
    onLocationChange(
      selectedLocation.includes(loc)
        ? selectedLocation.filter((l) => l !== loc)
        : [...selectedLocation, loc],
    );
  };

  const toggleDuration = (dur: string) => {
    onDurationChange(
      duration.includes(dur)
        ? duration.filter((d) => d !== dur)
        : [...duration, dur],
    );
  };

  const clearAll = () => {
    onLocationChange([]);
    onDurationChange([]);
    onPriceChange([0, 10000]);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="text-merino-700" />
        <h3 className="text-merino-950">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block mb-3 text-merino-800">Location</label>
          <div className="space-y-2">
            {locations.map((loc) => (
              <label
                key={loc}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedLocation.includes(loc)}
                  onChange={() => toggleLocation(loc)}
                  className="w-4 h-4 text-tahiti-gold-500 border-merino-300 rounded focus:ring-tahiti-gold-500"
                />
                <span className="text-sm text-merino-700">{loc}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-3 text-merino-800">Price Range</label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([0, parseInt(e.target.value)])}
              className="w-full accent-tahiti-gold-500"
            />
            <div className="flex justify-between text-sm text-merino-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-3 text-merino-800">Duration</label>
          <div className="space-y-2">
            {durations.map((dur) => (
              <label
                key={dur}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={duration.includes(dur)}
                  onChange={() => toggleDuration(dur)}
                  className="w-4 h-4 text-tahiti-gold-500 border-merino-300 rounded focus:ring-tahiti-gold-500"
                />
                <span className="text-sm text-merino-700">{dur}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-merino-200 space-y-2">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => {}}
          >
            Apply Filters
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={clearAll}
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
export default FilterSidebar;

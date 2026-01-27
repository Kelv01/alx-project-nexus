import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Button from "../../../components/common/Button";

export function FilterSidebar() {
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [duration, setDuration] = useState<string[]>([]);

  const locations = ["Kenya", "Tanzania", "Uganda", "Rwanda", "Botswana"];
  const durations = ["3-5 days", "6-8 days", "9-12 days", "13+ days"];

  const toggleLocation = (loc: string) => {
    setSelectedLocation((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc],
    );
  };

  const toggleDuration = (dur: string) => {
    setDuration((prev) =>
      prev.includes(dur) ? prev.filter((d) => d !== dur) : [...prev, dur],
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal size={20} className="text-merino-700" />
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
                  className="w-4 h-4 text-tahiti-gold-500 border-merino-300 rounded `focus:ring-tahiti-gold-500`"
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
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
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
          <Button variant="primary" size="sm" className="w-full">
            Apply Filters
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}

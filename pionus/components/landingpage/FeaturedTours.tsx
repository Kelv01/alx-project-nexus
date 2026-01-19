import Link from "next/link";
import Button from "../common/Button";
import TourCard from "../tour/TourCard";
import { tours } from "@/data/data";

function FeaturedTours() {
  const featuredTours = tours.slice(0, 3);
  return (
    <section className="py-16 bg-merino-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-bold text-2xl mb-2">Featured Safari Tours</h2>
            <p className="text-merino-700 text-base">
              Discover our most popular adventures
            </p>
          </div>
          <Button
            size="md"
            variant="outline"
            aria-label="view all tours"
            className="rounded-xl bg-merino-600 hover:bg-merino-700 text-white"
          >
            <Link href={"/tours/tours"}>View All Tours</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;

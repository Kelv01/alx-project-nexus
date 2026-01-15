import Link from "next/link";
import Button from "../common/Button";

function FeaturedTours() {
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
          <Link href={"/tours/tours"}>
            <Button
              size="md"
              variant="outline"
              className="rounded-xl bg-merino-600 hover:bg-merino-700 text-white"
            >
              View All Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;

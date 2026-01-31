import Button from "@/components/common/Button";
import Link from "next/link";

function TourSidebar({ tour }: { tour: any }) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
        <div className="mb-6">
          <p className="text-sm text-merino-600 mb-1">Starting from</p>
          <p
            className="text-merino-950"
            style={{ fontFamily: "var(--font-family-serif)" }}
          >
            ${tour.price.toLocaleString()}
          </p>
          <p className="text-xs text-merino-600 mt-1">per person</p>
        </div>

        <div className="space-y-3">
          <Link href={`/groups?tour=${tour.id}`}>
            <Button variant="primary" size="md" className="w-full">
              Join an Open Group
            </Button>
          </Link>
          <Link href={`/create-group?tour=${tour.id}`}>
            <Button variant="secondary" size="md" className="w-full">
              Create Your Group
            </Button>
          </Link>
          <Button variant="outline" size="md" className="w-full">
            Book Solo
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-merino-200">
          <h4 className="mb-3 text-merino-950">What's Included</h4>
          <ul className="space-y-2 text-sm text-merino-700">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-tahiti-gold-500 mt-2" />
              All park entrance fees
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-tahiti-gold-500 mt-2" />
              Accommodation as per itinerary
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-tahiti-gold-500 mt-2" />
              All meals during safari
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-tahiti-gold-500 mt-2" />
              Professional guide services
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-tahiti-gold-500 mt-2" />
              4x4 safari vehicle
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-tahiti-gold-500 mt-2" />
              Drinking water
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TourSidebar;

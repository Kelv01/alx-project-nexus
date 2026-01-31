//import { tours, openGroups } from "../../data/tours";
import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import TourHero from "@/pages/tours/components/TourHero";
import TourTabs from "@/pages/tours/components/TourTabs";
import TourSidebar from "@/pages/tours/components/TourSidebar";
import { GroupCard } from "./components/TourGroupCard";

import {
  getAllTours,
  getTourById,
  getOpenGroupsByTourId,
} from "@/lib/api/tours";

type Tour = Awaited<ReturnType<typeof getTourById>>;
type openGroup = Awaited<ReturnType<typeof getOpenGroupsByTourId>>[number];

type Props = {
  tour: NonNullable<Tour>;
  tourGroups: openGroup[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tours = await getAllTours();

  return {
    paths: tours.map((tour) => ({
      params: {
        tourid: tour.id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const tourid = params?.tourid as string;

  const tour = await getTourById(tourid);

  if (!tour) {
    return {
      notFound: true,
    };
  }

  const tourGroups = await getOpenGroupsByTourId(tourid);

  return {
    props: {
      tour,
      tourGroups,
    },
    revalidate: 60,
  };
};

function ToursPage({ tour, tourGroups }: Props) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "itinerary" | "guide" | "reviews"
  >("overview");

  return (
    <section className="min-h-screen bg-merino-50">
      {/* Hero Image */}
      <TourHero tour={tour} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <TourTabs
              tour={tour}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* Open Groups */}
            {tourGroups.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="mb-4 text-merino-950">
                  Open Groups for This Tour
                </h3>
                <div className="space-y-4">
                  {tourGroups.map((group) => (
                    <GroupCard key={group.id} {...group} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <TourSidebar tour={tour} />
        </div>
      </div>
    </section>
  );
}
export default ToursPage;

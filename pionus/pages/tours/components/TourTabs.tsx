import AppImage from "@/components/common/AppImage";
import { Dispatch, SetStateAction } from "react";
import { Award, Languages, Star, Verified } from "lucide-react";

import { tours } from "@/data/tours";

type Tour = (typeof tours)[number];

type TourTabsProps = {
  tour: Tour;
  activeTab: "overview" | "itinerary" | "guide" | "reviews";
  setActiveTab: Dispatch<
    SetStateAction<"overview" | "itinerary" | "guide" | "reviews">
  >;
};

function TourTabs({ tour, activeTab, setActiveTab }: TourTabsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md mb-6">
      <div className="border-b border-merino-200">
        <div className="flex gap-8 px-6">
          {["overview", "itinerary", "guide", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`py-4 px-2 capitalize transition-colors relative ${
                activeTab === tab
                  ? "text-tahiti-bg-tahiti-gold-500"
                  : "text-merino-700 hover:text-merino-900"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tahiti-gold-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/*  */}
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-merino-950">About This Safari</h3>
              <p className="text-merino-700 leading-relaxed">
                {tour.description}
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-merino-950">Highlights</h4>
              <ul className="space-y-2">
                {tour.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-merino-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-tahiti-gold-500 mt-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Itinerary Tab */}
        {activeTab === "itinerary" && (
          <div className="space-y-4">
            <h3 className="mb-4 text-merino-950">Day by Day Itinerary</h3>
            {tour.itinerary.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 pb-4 border-b border-merino-200 last:border-0"
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-merino-100 flex items-center justify-center text-merino-700"
                  style={{ fontFamily: "var(--font-family-serif)" }}
                >
                  Day {item.day}
                </div>
                <div className="flex-1">
                  <h4 className="text-merino-950 mb-1">{item.title}</h4>
                  <p className="text-merino-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guide Tab */}
        {activeTab === "guide" && (
          <div>
            <h3 className="mb-6 text-merino-950">Your Safari Guide</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <AppImage
                src={tour.guide.photo}
                alt={tour.guide.name}
                variant="avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-merino-950">{tour.guide.name}</h4>
                  <Verified />
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-merino-700">
                    <Award size={16} />
                    <span className="text-sm">
                      License: {tour.guide.license}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-merino-700">
                    <Star size={16} />
                    <span className="text-sm">
                      {tour.guide.experience} experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-merino-700">
                    <Languages size={16} />
                    <span className="text-sm">
                      {tour.guide.languages.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-amber-500 fill-amber-500" />
                    <span className="text-merino-950">{tour.guide.rating}</span>
                  </div>
                  <span className="text-sm text-merino-600">
                    {tour.guide.totalReviews} reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div>
            <h3 className="mb-6 text-merino-950">Traveler Reviews</h3>
            <div className="space-y-6">
              {[
                {
                  name: "Sarah Mitchell",
                  rating: 5,
                  date: "December 2024",
                  comment:
                    "Absolutely incredible experience! The wildlife was beyond our expectations and our guide was so knowledgeable.",
                  avatar:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                },
                {
                  name: "Tom Anderson",
                  rating: 5,
                  date: "November 2024",
                  comment:
                    "Best safari I've ever been on. The attention href detail and professionalism was outstanding.",
                  avatar:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
                },
              ].map((review, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-merino-200 last:border-0"
                >
                  <div className="flex gap-4">
                    <AppImage
                      src={review.avatar}
                      alt={review.name}
                      variant="avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-merino-950">{review.name}</h5>
                        <span className="text-sm text-merino-600">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-amber-500 fill-amber-500"
                          />
                        ))}
                      </div>
                      <p className="text-merino-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TourTabs;

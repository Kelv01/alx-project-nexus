import AppImage from "@/components/common/AppImage";
import aboutImage from "../../../public/about/zebra2.jpeg";
import React from "react";

function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-merino-950 font-bold text-3xl mb-4">
              Our Sory
            </h2>
            <p className="text-merino-800 leading-relaxed">
              Arch Safaris was born from a simple realization: East Africa's
              breathtaking wildlife and landscapes should be accessible to more
              than just luxury travelers. Founded by a group of safari guides
              and adventure enthusiasts, we saw an opportunity to democratize
              the safari experience
            </p>{" "}
            <br />
            <p className="text-merino-800 leading-relaxed">
              Our platform bridges the gap between verified local guides who
              know the land intimately and travelers seeking authentic
              experiences. By enabling group bookings and cost-sharing, we've
              made it possible for adventurers worldwide to experience the magic
              of East Africa without breaking the bank.
            </p>
            <br />
            <p className="text-merino-800 leading-relaxed mb-4">
              Today, we're proud to have facilitated thousands of safari
              adventures, creating lasting memories while supporting local
              communities and conservation efforts across Kenya, Tanzania,
              Uganda, and Rwanda.
            </p>
            <br />
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ">
            <AppImage
              src={aboutImage}
              variant="card"
              alt="picture of wild zebras"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;

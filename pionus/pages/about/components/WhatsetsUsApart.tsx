import AppImage from "@/components/common/AppImage";
import { Award, Leaf, ShieldCheck, Users } from "lucide-react";
import moutain from "../../../public/about/chimountain.jpeg";
import React from "react";

function WhatsetsUsApart() {
  return (
    <section className="py-20 bg-merino-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <AppImage
              src={moutain}
              alt="Group travelers"
              variant="card"
              fill
              className=" object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-merino-950 font-bold text-2xl">
              What Sets Us Apart
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tahiti-gold-500 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 text-merino-950 font-bold">
                    Verified Guide Network
                  </h5>
                  <p className="text-merino-700">
                    Every guide on our platform is thoroughly vetted, certified,
                    and reviewed by our community to ensure the highest
                    standards of safety and expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tahiti-gold-500 rounded-lg flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 text-merino-950 font-bold">
                    Smart Group Matching
                  </h5>
                  <p className="text-merino-700">
                    Our platform intelligently matches travelers based on
                    interests, dates, and preferences, making it easy to form
                    groups and share costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tahiti-gold-500 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 text-merino-950 font-bold">
                    Quality Guarantee
                  </h5>
                  <p className="text-merino-700">
                    We stand behind every safari with our comprehensive quality
                    guarantee and 24/7 support throughout your journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="`flex-shrink-0`">
                  <div className="w-12 h-12 bg-tahiti-gold-500 rounded-lg flex items-center justify-center">
                    <Leaf className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 text-merino-950 font-bold">
                    Conservation Impact
                  </h5>
                  <p className="text-merino-700">
                    A portion of every booking supports local wildlife
                    conservation initiatives and community development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsetsUsApart;

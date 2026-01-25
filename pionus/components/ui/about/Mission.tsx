import { Globe, Target } from "lucide-react";
import React from "react";

function Mission() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-merino-950 font-bold text-3xl">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-merino-700 max-w-3xl mx-auto">
            We're committed to making safari adventures accessible, sustainable,
            and unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-tahiti-gold-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" />
            </div>
            <h3 className="mb-4 text-merino-950 text-3xl font-light">
              Our Mission
            </h3>
            <p className="text-merino-800 leading-relaxed ">
              To democratize access to authentic East African safari experiences
              by connecting travelers with verified local guides and enabling
              cost-sharing through community-driven group travel. We strive to
              make adventure travel affordable while ensuring quality, safety,
              and cultural authenticity remain at the forefront of every journey
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-tahiti-gold-500 rounded-xl flex items-center justify-center mb-6">
              <Globe className="text-white" />
            </div>
            <h3 className="mb-4 text-merino-950 text-3xl font-light">
              Our Vision
            </h3>
            <p className="text-merino-800 leading-relaxed ">
              To become the world's leading platform for community-driven safari
              travel, where every adventure supports local economies, promotes
              wildlife conservation, and creates meaningful connections between
              travelers and the incredible landscapes and cultures of East
              Africa. We envision a future where sustainable tourism thrives
              through shared experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;

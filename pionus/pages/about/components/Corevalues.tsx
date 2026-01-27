import { Leaf, ShieldCheck, Users } from "lucide-react";
import React from "react";

function Corevalues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-merino-950 font-bold text-3xl">
            Ou Core Values
          </h2>
          <p className="text-xl text-merino-700 max-w-3xl mx-auto">
            The principles that guide every safari experience we create
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-merino-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-tahiti-gold-500" size={36} />
            </div>
            <h4 className="mb-3 text-merino-950 font-bold text-2xl">
              Authenticity
            </h4>
            <p className="text-merino-700">
              Real experiences with verified local guides who know the land,
              culture, and wildlife intimately
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-merino-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-tahiti-gold-500" size={36} />
            </div>
            <h4 className="mb-3 text-merino-950 font-bold text-2xl">
              Sustainability
            </h4>
            <p className="text-merino-700">
              Building connections between travelers and supporting local
              communities through tourism
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-merino-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-tahiti-gold-500" size={36} />
            </div>
            <h4 className="mb-3 text-merino-950 font-bold text-2xl">
              Accessibility
            </h4>
            <p className="text-merino-700">
              Making dream safaris achievable for everyone through group travel
              and cost-sharing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Corevalues;

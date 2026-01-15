import { DollarSign, ShieldCheck, Users } from "lucide-react";
import React from "react";

function WhyChoosePionusSafari() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">
            Why Choose Pionus Safari?
          </h2>
          <p className="text-merino-700 text-lg max-w-2xl mx-auto">
            We connect adventures with verified guides and group travelers to
            make safris more accessible, affordable, and authentic
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-merino-50 text-merino-600 mb-4">
              <ShieldCheck />
            </div>
            <h3 className="font-semibold mb-3">Verified Guides</h3>
            <p className="text-merino-700">
              All our guides are licensed, experienced, and thoroughly vetted
              for your safety and enjoyment
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-merino-50 text-merino-600 mb-4">
              <DollarSign />
            </div>
            <h3 className="font-semibold mb-3">Cost Sharing</h3>
            <p className="text-merino-700">
              Join open groups to split costs and save up to 40% while making
              new friends along the way{" "}
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-merino-50 text-merino-600 mb-4">
              <Users />
            </div>
            <h3 className="font-semibold mb-3">Featured Safari Tours</h3>
            <p className="text-merino-700">
              Connect with fellow adventurers, share experiences, and build
              lasting friendships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoosePionusSafari;

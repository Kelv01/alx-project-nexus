import React from "react";

function ImpactStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-merino-950 font-bold text-2xl">
            Our Impact
          </h2>
          <p className="text-xl text-merino-700 max-w-3xl mx-auto">
            Together, we're making a difference in East Africa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-merino-50 rounded-2xl">
            <div className="text-5xl font-bold text-[#e67e22] mb-2">
              12,500+
            </div>
            <p className="text-merino-800">Travelers Served</p>
          </div>
          <div className="text-center p-8 bg-merino-50 rounded-2xl">
            <div className="text-5xl font-bold text-[#e67e22] mb-2">180+</div>
            <p className="text-merino-800">Verified Guides</p>
          </div>
          <div className="text-center p-8 bg-merino-50 rounded-2xl">
            <div className="text-5xl font-bold text-[#e67e22] mb-2">$2.4M</div>
            <p className="text-merino-800">To Local Communities</p>
          </div>
          <div className="text-center p-8 bg-merino-50 rounded-2xl">
            <div className="text-5xl font-bold text-[#e67e22] mb-2">50+</div>
            <p className="text-merino-800">Conservation Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;

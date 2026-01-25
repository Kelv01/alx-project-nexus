import React from "react";

function Conservation() {
  return (
    <section className="py-20 bg-merino-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-merino-950 font-bold text-2xl">
              Our Conservation Commitment
            </h2>
            <div className="space-y-4">
              <p className="text-merino-800 leading-relaxed">
                At Arch Safaris, we believe that tourism should give back more
                than it takes. That's why we've partnered with leading
                conservation organizations across East Africa to ensure that
                every safari experience contributes to wildlife protection and
                habitat preservation.
              </p>
              <p className="text-merino-800 leading-relaxed">
                Through our Carbon Offset Program, every safari automatically
                offsets its carbon footprint through verified reforestation
                projects. Additionally, 5% of every booking goes directly to
                local conservation initiatives, from anti-poaching efforts to
                community education programs.
              </p>
              <p className="text-merino-800 leading-relaxed">
                We're proud members of the East African Wildlife Conservation
                Coalition and work closely with national parks and reserves to
                promote sustainable tourism practices that benefit both wildlife
                and local communities.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1633200192414-e7765d7e19f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZGxpZmUlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzY5MTY5NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wildlife conservation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conservation;

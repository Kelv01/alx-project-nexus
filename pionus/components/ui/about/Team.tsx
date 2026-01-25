import { MapPin } from "lucide-react";
import React from "react";

function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-merino-950 font-bold text-2xl">Our Team</h2>
          <p className="text-xl text-merino-700 max-w-3xl mx-auto">
            A passionate group of safari enthusiasts, tech innovators, and
            conservation advocates
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "David Kimani",
              role: "Founder & CEO",
              location: "Nairobi, Kenya",
            },
            {
              name: "Sarah Mwangi",
              role: "Head of Guide Relations",
              location: "Arusha, Tanzania",
            },
            {
              name: "Michael Odhiambo",
              role: "Chief Technology Officer",
              location: "Nairobi, Kenya",
            },
            {
              name: "Grace Namukasa",
              role: "Conservation Director",
              location: "Kampala, Uganda",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-merino-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="text-merino-500" size={48} />
              </div>
              <h5 className="mb-1 text-merino-950 font-bold">{member.name}</h5>
              <p className="text-[#e67e22] mb-1">{member.role}</p>
              <p className="text-sm text-merino-600">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

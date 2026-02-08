import AppImage from "@/components/common/AppImage";
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
              image: "/team/davidkim.jpg",
            },
            {
              name: "Sarah Amani",
              role: "Head of Guide Relations",
              location: "Arusha, Tanzania",
              image: "/team/sarahamani.jpg",
            },
            {
              name: "Michael Odhiambo",
              role: "Chief Technology Officer",
              location: "Nairobi, Kenya",
              image: "/team/odhiambo.jpg",
            },
            {
              name: "Grace Namukasa",
              role: "Conservation Director",
              location: "Kampala, Uganda",
              image: "/team/grace.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-merino-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AppImage
                  src={member.image}
                  variant="avatar"
                  alt={`Picture of ${member.name}`}
                  className="h-32 w-32"
                />
                {/* <MapPin className="text-merino-500" size={48} /> */}
              </div>
              <div className="mt-4">
                <h5 className="mb-1 text-merino-950 font-bold">
                  {member.name}
                </h5>
                <p className="text-tahiti-gold-500 mb-1">{member.role}</p>
                <p className="text-sm text-merino-600">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

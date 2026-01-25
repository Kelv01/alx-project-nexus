import Button from "@/components/common/Button";
import Cta from "@/components/common/Cta";
import FeaturedTours from "@/components/ui/landingpage/FeaturedTours";
import Hero from "@/components/ui/landingpage/Hero";
import HowItWoks from "@/components/ui/landingpage/HowItWoks";
import Testimonial from "@/components/ui/landingpage/Testimonial";
import WhyChoosePionusSafari from "@/components/ui/landingpage/WhyChoosePionusSafari";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoosePionusSafari />
      <FeaturedTours />
      <HowItWoks />
      <Testimonial />
      <Cta>
        <h2 className="mb-4 text-white font-bold text-3xl">
          {" "}
          Ready for Your Safari Adventure?
        </h2>
        <p className="text-xl mb-8 text-merino-100">
          Join thousands of travelers discovering East Africa with Arch
          Safaris{" "}
        </p>
        <Link href="/tours">
          <Button
            variant="primary"
            size="lg"
            aria-label="explore tours now"
            className="bg-tahiti-gold-500 rounded-lg hover:bg-tahiti-gold-600"
          >
            Explore Tours Now
          </Button>
        </Link>
      </Cta>
    </>
  );
}

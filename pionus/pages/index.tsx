import FeaturedTours from "@/components/landingpage/FeaturedTours";
import Hero from "@/components/landingpage/Hero";
import HowItWoks from "@/components/landingpage/HowItWoks";
import Testimonial from "@/components/landingpage/Testimonial";
import WhyChoosePionusSafari from "@/components/landingpage/WhyChoosePionusSafari";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoosePionusSafari />
      <FeaturedTours />
      <HowItWoks />
      <Testimonial />
    </>
  );
}

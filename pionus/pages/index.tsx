import Cta from "@/components/ui/landingpage/Cta";
import FeaturedTours from "@/components/ui/landingpage/FeaturedTours";
import Hero from "@/components/ui/landingpage/Hero";
import HowItWoks from "@/components/ui/landingpage/HowItWoks";
import Testimonial from "@/components/ui/landingpage/Testimonial";
import WhyChoosePionusSafari from "@/components/ui/landingpage/WhyChoosePionusSafari";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoosePionusSafari />
      <FeaturedTours />
      <HowItWoks />
      <Testimonial />
      <Cta />
    </>
  );
}

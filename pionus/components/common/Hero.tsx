import React from "react";
import Image from "next/image";
import background from "../../public/sutirta.webp";
import Button from "./Button";
import { Search, Users } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[75svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center">
        <Image src={background} alt="backround image" fill priority />
        <div className="absolute inset-0 bg-linear-to-r from-merino-950/80 to-merino-900/60" />
      </div>
      <div className="relative z-10 inset-0 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="mb-6 font-bold text-5xl">
          Experience the wild, together
        </h1>
        <p className="text-xl mb-8 text-merino-100">
          Premium group safaris and private expeditions designed for travelers
          who value connection, trust, and adventure
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
          <Button size="lg" className="rounded-lg">
            <Search className="" />
            Find Tours
          </Button>
          <Button size="lg" variant="transparent" className="rounded-lg border">
            {" "}
            <Users />
            Find Tours
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

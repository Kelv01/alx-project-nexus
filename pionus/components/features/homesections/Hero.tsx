import React from "react";
import background from "../../../public/elephants.jpg";
import Button from "../../common/Button";
import { Search, Users } from "lucide-react";
import AppImage from "@/components/common/AppImage";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative min-h-[75svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center">
        <AppImage
          src={background}
          alt="backround image"
          fill
          variant="hero"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-merino-950/80 to-merino-900/60" />
      </div>
      <div className="relative z-10 inset-0 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="mb-6 font-bold text-6xl">
          Experience the wild, together
        </h1>
        <p className="text-xl mb-8 text-merino-100">
          Premium group safaris and private expeditions designed for travelers
          who value connection, trust, and adventure
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
          <Link href="/tours">
            <Button
              size="lg"
              className="rounded-lg bg-tahiti-gold-500 hover:bg-tahiti-gold-600 "
            >
              <Search className="" />
              Find Tours
            </Button>
          </Link>
          <Link href="/tours">
            <Button
              size="lg"
              variant="transparent"
              className="rounded-lg border"
            >
              {" "}
              <Users />
              Find Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import AppImage from "@/components/common/AppImage";
import background from "../../public/about/nightforest.jpeg";
import Link from "next/link";
import Button from "@/components/common/Button";
import OurStory from "@/pages/about/components/OurStory";
import Mission from "@/pages/about/components/Mission";
import Corevalues from "@/pages/about/components/Corevalues";
import WhatsetsUsApart from "@/pages/about/components/WhatsetsUsApart";
import ImpactStats from "@/pages/about/components/ImpactStats";
import Team from "@/pages/about/components/Team";
import Cta from "@/components/common/Cta";
import Conservation from "@/pages/about/components/Conservation";

function AboutPage() {
  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center">
          <AppImage
            src={background}
            fill
            loading="eager"
            alt="background image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-merino-950/90 to-merino-900/70 " />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Where Adventure Meets Community
          </h1>
          <p className="text-xl">
            Connecting travelers with authentic East African safari experiences
          </p>
        </div>
      </section>

      <OurStory />

      <Mission />

      <Corevalues />

      {/* what sets us apart section */}

      <WhatsetsUsApart />

      {/* Impact stats section */}

      <ImpactStats />

      {/* conservation section */}

      <Conservation />

      {/* team section */}
      <Team />

      {/* cta section */}
      <section className="py-20 bg-gradient-to-r from-merino-900 to-merino-800 text-white">
        <Cta className="py-20 bg-gradient-to-r from-merino-900 to-merino-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <h2 className="mb-6 text-white font-bold text-3xl">
                Ready to Start Your Safari Adventure?
              </h2>
              <p className="text-xl mb-8 text-merino-100">
                Join thousands of travelers who've discovered the magic of East
                Africa with Arch Safaris
              </p>

              <Link href="/tours">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-xl bg-tahiti-gold-500 hover:bg-tahiti-gold-600"
                >
                  Explore Safari Tours
                </Button>
              </Link>
              <Link href="/groups">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-xl hover:bg-merino-700"
                >
                  Find Travel Groups
                </Button>
              </Link>
            </div>
          </div>
        </Cta>
      </section>
    </>
  );
}

export default AboutPage;

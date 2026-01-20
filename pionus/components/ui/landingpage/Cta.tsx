import Link from "next/link";
import Button from "../../common/Button";

function Cta() {
  return (
    <section className="py-20 bg-merino-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="mb-4 text-white font-bold text-3xl">
          Ready for Your Safari Adventure?
        </h2>
        <p className="text-xl mb-8 text-merino-100">
          Join thousands of travelers discovering East Africa with Arch Safaris
        </p>
        <Link href="/tours/tours">
          <Button
            variant="primary"
            size="lg"
            aria-label="explore tours now"
            className="bg-tahiti-gold-500 rounded-lg hover:bg-tahiti-gold-600"
          >
            Explore Tours Now
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Cta;

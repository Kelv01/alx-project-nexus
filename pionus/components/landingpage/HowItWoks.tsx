import { Clock, MapPin, Users } from "lucide-react";

function HowItWoks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl max-auto sm:px-16 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-merino-950 text-3xl font-semibold">
            How It Works
          </h2>
          <p className="text-merino-600 max-w-2xl mx-auto">
            Three simple steps to your dream safari adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-white mb-16 text-2xl bg-tahiti-gold-500">
              1
            </div>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-merino-700" />
            </div>
            <h4 className="mb-3">Browse & Choose</h4>
            <p className="text-merino-700">
              Explore our curated safari tours, filter by location, duration,
              and price to find perfect adventure
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-white mb-16 text-2xl bg-tahiti-gold-500">
              2
            </div>
            <div className="flex items-center justify-center mb-4">
              <Users className="text-merino-700" />
            </div>
            <h4 className="mb-3">Join or Create a Group</h4>
            <p className="text-merino-700">
              Join an existing group to share costs, or create your own group
              and invite others to join you
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-white mb-16 text-2xl bg-tahiti-gold-500">
              3
            </div>
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-merino-700" />
            </div>
            <h4 className="mb-3">Book & Embark</h4>
            <p className="text-merino-700">
              Complete your booking, connect with your group, and prepare for an
              unforgettable safari experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWoks;

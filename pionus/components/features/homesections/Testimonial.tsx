//import Image from "next/image";
import { testimonials } from "@/data/testimonial";
import AppImage from "../../common/AppImage";

function Testimonial() {
  return (
    <section className="py-16 bg-merino-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-merino-950 font-bold text-3xl">
            What Travelers Say
          </h2>
          <p className="text-merino-600 text-lg">
            Real experiences from real adventurers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <AppImage
                    src={testimonial.image}
                    variant="avatar"
                    loading="lazy"
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-merino-950 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-merino-600">{testimonial.tour}</p>
                </div>
              </div>
              <p className="text-merino-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
